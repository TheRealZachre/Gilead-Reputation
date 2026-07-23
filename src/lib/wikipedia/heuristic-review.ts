import type { MaintenanceFlag } from "./wiki-fetch";

/**
 * Heuristic editorial review when Anthropic is not configured.
 * Surfaces leadership cross-linking and sourcing gaps for Gilead Sciences.
 */
export function buildHeuristicReview(
  title: string,
  extract: string,
  metrics: Record<string, unknown>,
  flags: MaintenanceFlag[]
) {
  const wordCount = Number(metrics.word_count ?? 0);
  const refCount = Number(metrics.reference_count ?? 0);
  const issues: {
    category: string;
    severity: string;
    title: string;
    detail: string;
    suggested_action: string;
  }[] = [
    {
      category: "Coverage",
      severity: "high",
      title: "Strengthen leadership cross-linking and currency",
      detail:
        "Daniel O'Day (Chairman & CEO) has a standalone biography, but the corporate article and the CEO article should reciprocally link and stay in sync on current strategy (HIV prevention, oncology, cell therapy). Weak cross-linking reduces discoverability for journalists, investors, and AI knowledge panels.",
      suggested_action:
        "Ensure the Gilead Sciences and Daniel O'Day articles link to each other, refresh leadership sections with independent secondary sources, and reflect recent milestones such as lenacapavir approvals.",
    },
  ];

  if (flags.length > 0) {
    for (const flag of flags.slice(0, 4)) {
      issues.push({
        category: "Sourcing",
        severity: flag.severity,
        title: flag.label,
        detail: flag.description,
        suggested_action: flag.action,
      });
    }
  }

  if (refCount < 30) {
    issues.push({
      category: "Sourcing",
      severity: "medium",
      title: "Expand independent third-party citations",
      detail: `The corporate article currently shows about ${refCount} inline references. Deeper coverage of clinical milestones (e.g. lenacapavir for HIV prevention, Trodelvy, Kite cell therapy) benefits from more independent journalism and peer-reviewed sources.`,
      suggested_action:
        "Add recent reliable coverage of pivotal trials, regulatory approvals, and partnerships from major outlets and scientific journals.",
    });
  }

  if (wordCount > 0 && wordCount < 800) {
    issues.push({
      category: "Coverage",
      severity: "medium",
      title: "Deepen article sections beyond a short summary",
      detail:
        "The extract is relatively brief for a global biopharmaceutical company. History, therapeutic areas, product portfolio, and leadership sections can be expanded with cited sources.",
      suggested_action:
        "Expand History, Therapeutic Areas, Product Portfolio, and Leadership sections using only verifiable secondary sources.",
    });
  }

  const quality_tier =
    wordCount < 400 || refCount < 10
      ? "start"
      : flags.some((f) => f.severity === "high")
        ? "c"
        : refCount >= 40 && wordCount >= 1200
          ? "b"
          : "c";

  return {
    quality_tier,
    assessment: `"${title}" is a live corporate Wikipedia article for Gilead Sciences. The most important opportunities are keeping leadership coverage current and well cross-linked to the CEO biography, and expanding sourcing around recent therapeutic-area milestones with independent, verifiable references.`,
    issues,
  };
}
