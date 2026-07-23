import { readJsonCache, writeJsonCache } from "@/lib/data/json-cache";

const META_FILE = "reputation-refresh.json";
const DATASET_FILE = "reputation-dataset.json";

export type RefreshSource = "snapshot" | "feed";

export interface RefreshMeta {
  /** When the underlying numbers last actually changed. */
  lastUpdated: string;
  /** When we last attempted a pull. */
  lastChecked: string;
  source: RefreshSource;
  note?: string;
}

export interface RefreshResult {
  updated: boolean;
  meta: RefreshMeta;
  message: string;
}

const DEFAULT_META: RefreshMeta = {
  lastUpdated: "2026-07-22T00:00:00.000Z",
  lastChecked: "2026-07-22T00:00:00.000Z",
  source: "snapshot",
};

export async function getRefreshMeta(): Promise<RefreshMeta> {
  const stored = await readJsonCache<RefreshMeta>(META_FILE);
  return stored ?? DEFAULT_META;
}

/**
 * Resolves the optional external data feed. Glassdoor and Indeed have no public
 * API, so live pulls require a licensed provider (or an internal aggregator)
 * exposed as a JSON endpoint via the REPUTATION_FEED_URL variable. When it is
 * unset the refresh is a no-op that keeps the saved snapshot.
 */
async function getFeedUrl(): Promise<string | null> {
  if (process.env.REPUTATION_FEED_URL) return process.env.REPUTATION_FEED_URL;
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    const url = (env as Record<string, unknown>).REPUTATION_FEED_URL;
    return typeof url === "string" && url.length > 0 ? url : null;
  } catch {
    return null;
  }
}

export async function refreshReputationData(): Promise<RefreshResult> {
  const now = new Date().toISOString();
  const prev = await getRefreshMeta();
  const feedUrl = await getFeedUrl();

  if (!feedUrl) {
    const meta: RefreshMeta = {
      ...prev,
      lastChecked: now,
      source: "snapshot",
      note: "No live data source connected.",
    };
    await writeJsonCache(META_FILE, meta);
    return {
      updated: false,
      meta,
      message:
        "No live data source is connected. Glassdoor and Indeed have no public API — connect a licensed data feed to enable live pulls. Showing the saved snapshot.",
    };
  }

  try {
    const res = await fetch(feedUrl, { headers: { accept: "application/json" } });
    if (!res.ok) throw new Error(`Feed responded ${res.status}`);
    const data = await res.json();
    await writeJsonCache(DATASET_FILE, data);
    const meta: RefreshMeta = {
      lastUpdated: now,
      lastChecked: now,
      source: "feed",
    };
    await writeJsonCache(META_FILE, meta);
    return {
      updated: true,
      meta,
      message: "Latest Glassdoor & Indeed data pulled from the connected feed.",
    };
  } catch (err) {
    const meta: RefreshMeta = { ...prev, lastChecked: now };
    await writeJsonCache(META_FILE, meta);
    return {
      updated: false,
      meta,
      message: `Could not reach the data feed: ${String(err)}`,
    };
  }
}
