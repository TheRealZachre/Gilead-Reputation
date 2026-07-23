import { WikipediaCoverageGrid } from "@/components/wikipedia/WikipediaCoverageGrid";
import { WikipediaPageShell } from "@/components/wikipedia/WikipediaPageShell";
import { CLIENT_NAME } from "@/lib/company";
import { WIKIPEDIA_OVERVIEW } from "@/lib/wikipedia/content";

export default function WikipediaRecommendationsPage() {
  return (
    <WikipediaPageShell
      title="What We Check"
      subtitle={`${CLIENT_NAME} · Wikipedia reputation methodology`}
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
          {WIKIPEDIA_OVERVIEW}
        </p>
      </section>
      <WikipediaCoverageGrid />
    </WikipediaPageShell>
  );
}
