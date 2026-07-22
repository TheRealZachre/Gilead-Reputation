"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { ReplyDraft } from "@/lib/reputation/data";

export type SortDir = "asc" | "desc";

export type SortColumn<T> = {
  key: keyof T;
  label: string;
  type?: "string" | "number";
};

export function compareValues(a: unknown, b: unknown, type: "string" | "number") {
  if (type === "number") {
    return Number(a ?? 0) - Number(b ?? 0);
  }
  return String(a ?? "").localeCompare(String(b ?? ""), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export function useSortedRows<T>(rows: T[], columns: SortColumn<T>[], initialKey?: keyof T) {
  const [sortKey, setSortKey] = useState<keyof T | null>(initialKey ?? null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const sorted = useMemo(() => {
    if (sortKey == null) return rows;
    const col = columns.find((c) => c.key === sortKey);
    const type = col?.type ?? "string";
    const copy = [...rows];
    copy.sort((left, right) => {
      const result = compareValues(left[sortKey], right[sortKey], type);
      return sortDir === "asc" ? result : -result;
    });
    return copy;
  }, [rows, columns, sortKey, sortDir]);

  const toggle = (key: keyof T) => {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setSortDir("asc");
  };

  return { sorted, sortKey, sortDir, toggle };
}

export function SortableHead<T>({
  columns,
  sortKey,
  sortDir,
  onSort,
}: {
  columns: SortColumn<T>[];
  sortKey: keyof T | null;
  sortDir: SortDir;
  onSort: (key: keyof T) => void;
}) {
  return (
    <thead>
      <tr>
        {columns.map((col) => {
          const active = sortKey === col.key;
          const arrow = !active ? "↕" : sortDir === "asc" ? "↑" : "↓";
          return (
            <th key={String(col.key)} scope="col">
              <button
                type="button"
                className={`sort-btn${active ? " active" : ""}`}
                onClick={() => onSort(col.key)}
                aria-label={`Sort by ${col.label}`}
              >
                <span>{col.label}</span>
                <span className="sort-arrow" aria-hidden="true">
                  {arrow}
                </span>
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export function CopyReply({ reply }: { reply: ReplyDraft }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(reply.body);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="reply-card">
      <header className="reply-header">
        <div>
          <h3>{reply.title}</h3>
          <p className="meta">{reply.meta}</p>
        </div>
        <div className="reply-actions">
          <span className={`pill ${reply.platform === "Glassdoor" ? "pill-info" : "pill-warn"}`}>
            {reply.platform}
          </span>
          <button type="button" className="btn-primary" onClick={copy}>
            {copied ? "Copied" : "Copy reply"}
          </button>
        </div>
      </header>
      <pre className="reply-body">{reply.body}</pre>
    </article>
  );
}

export function ChartPanel({
  platform,
  subtitle,
  children,
}: {
  platform: "Glassdoor" | "Indeed";
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="chart-panel">
      <div className="chart-panel-head">
        <h3 className="chart-platform-name">{platform}</h3>
        <p className="muted chart-subtitle">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
