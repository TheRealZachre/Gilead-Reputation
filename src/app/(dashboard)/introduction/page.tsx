import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Star,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import {
  CLIENT_NAME,
  CLIENT_WIKIPEDIA,
  PLATFORM_TAGLINE,
} from "@/lib/company";

const KEY_CAPABILITIES = [
  {
    icon: Star,
    title: "Glassdoor & Indeed in one place",
    body: "Track overall ratings, CEO approval, wellbeing scores, and review themes across both platforms — with trend charts and competitor context.",
  },
  {
    icon: ClipboardList,
    title: "Ready-to-use review replies",
    body: "Copy vetted response templates for common complaints — work-life balance, management, culture, and compensation — so comms teams can respond quickly and consistently.",
  },
  {
    icon: TrendingUp,
    title: "Benchmarks and improvement playbook",
    body: "See how Gilead stacks up against peer pharma employers, then follow step-by-step guidance to raise scores and encourage positive reviews.",
  },
];

export default function IntroductionPage() {
  return (
    <>
      <Header
        title={`${CLIENT_NAME} Reputation`}
        subtitle="Demonstration environment — employer brand and review monitoring"
      />

      <div className="mx-auto w-full max-w-3xl space-y-10 px-4 py-10 sm:px-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-bold text-amber-800">Demo environment</p>
              <p className="mt-1 text-sm leading-relaxed text-amber-700">
                This is a demonstration only. Ratings, review excerpts, and
                competitor figures shown here are for illustration purposes and
                should not be used for business decisions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
            One dashboard for employer reputation.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            This {PLATFORM_TAGLINE.toLowerCase()} dashboard brings{" "}
            {CLIENT_NAME}&apos;s Glassdoor and Indeed presence, Wikipedia
            coverage, and peer benchmarks into a single workspace — so HR,
            comms, and leadership can spot issues early and act on them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {KEY_CAPABILITIES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-brand-ink/10 bg-white p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-indigo/12">
                <Icon className="h-4 w-4 text-brand-indigo" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-brand-ink">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-brand-ink">
            Important limitations
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brand-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-muted/40" />
              <span>
                <strong className="text-brand-ink">
                  Glassdoor and Indeed have no public API.
                </strong>{" "}
                Live pulls require a licensed data feed. Until one is connected,
                the refresh button updates the saved snapshot timestamp.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-muted/40" />
              Review excerpts and ratings are for illustration and may not reflect
              live accuracy.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-muted/40" />
              This is a demo site. A production license is required for
              day-to-day use.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ink">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-brand-ink">
                Glassdoor & Indeed
              </h2>
              <p className="text-xs text-brand-muted">
                Overview · Issues · Competitors · Replies
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Full employer-brand view for{" "}
            <strong className="text-brand-ink">{CLIENT_NAME}</strong> — ratings,
            CEO approval, trending themes, peer scorecards, copyable review
            responses, and a playbook for improving scores.
          </p>
          <div className="mt-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-indigo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-indigo/90"
            >
              View Overview
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-indigo/12">
              <BookOpen className="h-5 w-5 text-brand-indigo" />
            </div>
            <div>
              <h2 className="text-base font-bold text-brand-ink">Wikipedia</h2>
              <p className="text-xs text-brand-muted">
                Corporate · {CLIENT_WIKIPEDIA.ceoName}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Live Wikipedia audits for the{" "}
            <strong className="text-brand-ink">{CLIENT_NAME}</strong> corporate
            article and Chairman & CEO page — coverage gaps, pageview trends,
            and improvement recommendations.
          </p>
          <div className="mt-5">
            <Link
              href="/wikipedia/corporate"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-indigo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-indigo/90"
            >
              View Wikipedia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
