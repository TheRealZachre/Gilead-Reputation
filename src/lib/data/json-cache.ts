import { existsSync } from "fs";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const TMP_DATA_DIR = path.join("/tmp", "gilead-reputation-data");
const KV_KEY_PREFIX = "json-cache:";

type AppDataKv = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

const bundledJsonLoaders: Record<string, () => Promise<unknown>> = {
  "reputation-users.json": () =>
    import("../../../data/reputation-users.json").then((m) => m.default),
};

function isCloudflareWorkersRuntime(): boolean {
  return (
    process.env.CLOUDFLARE_WORKERS === "1" ||
    process.env.OPENNEXT_CLOUDFLARE === "1" ||
    typeof (globalThis as { caches?: unknown }).caches !== "undefined"
  );
}

function getDataDir(): string {
  const primary = path.join(/*turbopackIgnore: true*/ process.cwd(), "data");
  if (existsSync(primary)) return primary;

  const nested = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "..",
    "..",
    "data"
  );
  if (existsSync(nested)) return nested;

  return primary;
}

function getKvKey(filename: string): string {
  return `${KV_KEY_PREFIX}${filename}`;
}

async function getAppDataKv(): Promise<AppDataKv | null> {
  if (!isCloudflareWorkersRuntime()) return null;

  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    return (env as { APP_DATA_KV?: AppDataKv }).APP_DATA_KV ?? null;
  } catch {
    return null;
  }
}

export function getBundledDataPath(filename: string): string {
  return path.join(getDataDir(), filename);
}

async function readBundledJson<T>(filename: string): Promise<T | null> {
  const loader = bundledJsonLoaders[filename];
  if (!loader) return null;

  try {
    return (await loader()) as T;
  } catch {
    return null;
  }
}

async function readJsonFromKv<T>(filename: string): Promise<T | null> {
  const kv = await getAppDataKv();
  if (!kv) return null;

  const raw = await kv.get(getKvKey(filename));
  if (!raw) return null;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function writeJsonToKv<T>(filename: string, data: T): Promise<boolean> {
  const kv = await getAppDataKv();
  if (!kv) return false;

  await kv.put(getKvKey(filename), JSON.stringify(data));
  return true;
}

export async function readJsonCache<T>(filename: string): Promise<T | null> {
  const kvData = await readJsonFromKv<T>(filename);
  if (kvData) return kvData;

  if (isCloudflareWorkersRuntime()) {
    const bundled = await readBundledJson<T>(filename);
    if (bundled) {
      await writeJsonToKv(filename, bundled);
      return bundled;
    }
    return null;
  }

  const cachePath = getBundledDataPath(filename);
  try {
    const raw = await readFile(cachePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    // Fall through.
  }

  return readBundledJson<T>(filename);
}

export async function writeJsonCache<T>(
  filename: string,
  data: T
): Promise<void> {
  if (await writeJsonToKv(filename, data)) {
    return;
  }

  if (isCloudflareWorkersRuntime()) {
    return;
  }

  const content = JSON.stringify(data, null, 2);
  const primaryPath = getBundledDataPath(filename);

  try {
    await mkdir(path.dirname(primaryPath), { recursive: true });
    await writeFile(primaryPath, content, "utf8");
  } catch {
    const fallbackPath = path.join(TMP_DATA_DIR, filename);
    await mkdir(path.dirname(fallbackPath), { recursive: true });
    await writeFile(fallbackPath, content, "utf8");
  }
}
