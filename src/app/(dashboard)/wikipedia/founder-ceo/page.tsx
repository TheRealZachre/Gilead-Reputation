import Link from "next/link";
import { AlertTriangle, ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { WikipediaSubnav } from "@/components/wikipedia/WikipediaSubnav";
import { CLIENT_NAME, CLIENT_WIKIPEDIA } from "@/lib/company";

export default function WikipediaFounderCeoPage() {
  return (
    <>
      <Header
        title="Wikipedia Analytics · Chairman & CEO"
        subtitle={`${CLIENT_WIKIPEDIA.ceoName} — dedicated biography coverage`}
      />
      <WikipediaSubnav />

      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Leadership coverage
              </p>
              <h2 className="mt-1 text-xl font-semibold text-brand-ink">
                CEO biography exists — keep it current and cross-linked
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-emerald-950/85">
                <strong>{CLIENT_WIKIPEDIA.ceoName}</strong> (
                {CLIENT_WIKIPEDIA.ceoTitle}) has a{" "}
                <strong>dedicated English Wikipedia biography</strong>. The
                priorities are keeping the leadership section current, ensuring
                reciprocal links with the {CLIENT_NAME} corporate page, and
                closing the gap for the company&apos;s founder, who has no
                standalone article today.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-sm">
          <h3 className="text-base font-bold text-brand-ink">
            Leadership coverage checklist
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
              <strong className="text-emerald-900">
                {CLIENT_WIKIPEDIA.ceoName}
              </strong>{" "}
              — {CLIENT_WIKIPEDIA.ceoTitle}. Dedicated Wikipedia article exists.
              Verify neutrality, recency, and reciprocal links to {CLIENT_NAME}.
            </li>
            {CLIENT_WIKIPEDIA.founders.map((founder) => (
              <li
                key={founder.name}
                className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3"
              >
                <strong className="text-rose-900">{founder.name}</strong> —{" "}
                {founder.role}. No dedicated Wikipedia article. Recommend a
                neutral, well-sourced biography that links to {CLIENT_NAME}.
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-brand-muted">
            Dedicated executive articles improve discoverability for journalists,
            investors, and AI knowledge panels — and should cross-link with the{" "}
            <a
              href={CLIENT_WIKIPEDIA.corporateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-indigo hover:underline"
            >
              {CLIENT_WIKIPEDIA.corporateTitle}
            </a>{" "}
            corporate page.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/wikipedia/corporate"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-indigo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-indigo/90"
            >
              View corporate Wikipedia
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={CLIENT_WIKIPEDIA.corporateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-indigo/20 bg-brand-indigo/8 px-5 py-2.5 text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-indigo/12"
            >
              Open company article
              <ExternalLink className="h-4 w-4" />
            </a>
            {CLIENT_WIKIPEDIA.ceoUrl && (
              <a
                href={CLIENT_WIKIPEDIA.ceoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-indigo/20 bg-brand-indigo/8 px-5 py-2.5 text-sm font-semibold text-brand-indigo transition-colors hover:bg-brand-indigo/12"
              >
                Open CEO biography
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
