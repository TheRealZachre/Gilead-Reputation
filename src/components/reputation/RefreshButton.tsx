"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import type { RefreshMeta } from "@/lib/reputation/refresh";

function formatDateTime(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export function RefreshButton({ platform }: { platform: "Glassdoor" | "Indeed" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<RefreshMeta | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/reputation/refresh")
      .then((r) => r.json())
      .then((m: RefreshMeta) => {
        if (active) setMeta(m);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  async function onRefresh() {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/reputation/refresh", { method: "POST" });
      const data = await res.json();
      if (data.meta) setMeta(data.meta as RefreshMeta);
      setMessage(data.message ?? null);
      if (data.updated) router.refresh();
    } catch {
      setMessage("Refresh failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="refresh-bar">
      <button
        type="button"
        className="btn-primary refresh-btn"
        onClick={onRefresh}
        disabled={loading}
      >
        <RefreshCw size={15} className={loading ? "spin" : ""} />
        {loading ? "Refreshing…" : `Refresh ${platform} data`}
      </button>
      <span className="muted">Last updated {formatDateTime(meta?.lastUpdated)}</span>
      {message && (
        <span className="muted refresh-msg" role="status">
          {message}
        </span>
      )}
    </div>
  );
}
