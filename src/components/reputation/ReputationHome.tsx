"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  COMPANY,
  GLASSDOOR_ISSUES,
  INDEED_ISSUES,
  PLAN,
  REPLIES,
  TRENDS,
  type HomeTab,
} from "@/lib/reputation/data";
import { RatingTrendsSection } from "./RatingTrendsSection";
import { CompetitorsTab } from "./CompetitorsPage";
import { PlaybookTab } from "./ScorePlaybook";
import { RefreshButton } from "./RefreshButton";
import { CopyReply, SortableHead, useSortedRows, type SortColumn } from "./shared";

const GLASSDOOR_REVIEW_COLUMNS: SortColumn<(typeof COMPANY.glassdoor.recentReviews)[number]>[] = [
  { key: "date", label: "Date", type: "string" },
  { key: "rating", label: "Rating", type: "number" },
  { key: "role", label: "Role", type: "string" },
  { key: "title", label: "Headline", type: "string" },
  { key: "summary", label: "Core message", type: "string" },
];

function OverviewTab() {
  return (
    <div className="stack">
      <div className="callout callout-warn">
        <strong>Bottom line</strong>
        <p>
          Gilead sits at 3.5 on both Glassdoor and Indeed — right at industry
          average and sliding ~4% over the past year. Compensation and benefits are
          the clear strength; work-life balance, management trust, and rebuilding
          culture through recent leadership changes are the priorities.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="stat-value warn">{COMPANY.glassdoor.overall}</div>
          <div className="stat-label">Glassdoor overall · {COMPANY.glassdoor.reviews} ratings</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.indeed.overall}</div>
          <div className="stat-label">Indeed overall · {COMPANY.indeed.reviews} reviews</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.glassdoor.ceo}%</div>
          <div className="stat-label">Glassdoor CEO approval</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.indeed.wellbeing}</div>
          <div className="stat-label">Indeed wellbeing · {COMPANY.indeed.wellbeingLabel}</div>
        </div>
      </div>

      <RatingTrendsSection />

      <section>
        <h2>Glassdoor — main issues & fixes</h2>
        <p className="muted">
          <a href={COMPANY.glassdoor.url} target="_blank" rel="noreferrer">
            Open Glassdoor profile
          </a>{" "}
          · Jul 22, 2026
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Main issue</th>
                <th>How to fix</th>
              </tr>
            </thead>
            <tbody>
              {GLASSDOOR_ISSUES.map((row) => (
                <tr key={row.issue}>
                  <td>{row.issue}</td>
                  <td>{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Indeed — main issues & fixes</h2>
        <p className="muted">
          <a href={COMPANY.indeed.url} target="_blank" rel="noreferrer">
            Open Indeed company page
          </a>{" "}
          · Jul 22, 2026
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Main issue</th>
                <th>How to fix</th>
              </tr>
            </thead>
            <tbody>
              {INDEED_ISSUES.map((row) => (
                <tr key={row.issue}>
                  <td>{row.issue}</td>
                  <td>{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>30-day fix order</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Focus</th>
                <th>Done when</th>
              </tr>
            </thead>
            <tbody>
              {PLAN.map((row) => (
                <tr key={row.week}>
                  <td>{row.week}</td>
                  <td>{row.focus}</td>
                  <td>{row.done}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function GlassdoorTab() {
  const cats = [...COMPANY.glassdoor.categories].reverse();
  const glassdoorReviewSort = useSortedRows(COMPANY.glassdoor.recentReviews, GLASSDOOR_REVIEW_COLUMNS);

  return (
    <div className="stack">
      <div className="pill-row">
        <span className="pill pill-info">Listed as Gilead Sciences</span>
        <span className="pill pill-warn">Comp −4% YoY</span>
        <span className="pill">CEO: {COMPANY.glassdoor.ceoName}</span>
      </div>

      <RefreshButton platform="Glassdoor" />

      <div className="stats">
        <div className="stat">
          <div className="stat-value warn">{COMPANY.glassdoor.overall}</div>
          <div className="stat-label">Company rating</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.glassdoor.ceo}%</div>
          <div className="stat-label">CEO approval</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.glassdoor.recommend}%</div>
          <div className="stat-label">Recommend to a friend</div>
        </div>
        <div className="stat">
          <div className="stat-value">{COMPANY.glassdoor.outlook}%</div>
          <div className="stat-label">Positive business outlook</div>
        </div>
      </div>

      <div className="stats stats-3">
        <div className="stat">
          <div className="stat-value">{COMPANY.glassdoor.jobs}</div>
          <div className="stat-label">US jobs listed</div>
        </div>
        <div className="stat">
          <div className="stat-value">{COMPANY.glassdoor.updates}</div>
          <div className="stat-label">Company updates</div>
        </div>
        <div className="stat">
          <div className="stat-value">{COMPANY.glassdoor.photos}</div>
          <div className="stat-label">Photos on profile</div>
        </div>
      </div>

      <section>
        <h2>Ratings by category</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={cats} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
              <XAxis type="number" domain={[0, 5]} stroke="#9aa4b2" />
              <YAxis type="category" dataKey="name" width={160} stroke="#9aa4b2" />
              <Tooltip />
              <Bar dataKey="score" name="Score" fill="#f0a202" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="muted">
          Industry average ~{COMPANY.glassdoor.industryAvg}. Softest: senior management and work/life balance.
        </p>
      </section>

      <section>
        <h2>Last 20 Glassdoor reviews</h2>
        <p className="muted">Most recent, sorted by date on Glassdoor · captured Jul 22, 2026</p>
        <div className="table-wrap">
          <table aria-label="Last 20 Glassdoor reviews">
            <SortableHead
              columns={GLASSDOOR_REVIEW_COLUMNS}
              sortKey={glassdoorReviewSort.sortKey}
              sortDir={glassdoorReviewSort.sortDir}
              onSort={glassdoorReviewSort.toggle}
            />
            <tbody>
              {glassdoorReviewSort.sorted.map((r) => (
                <tr key={`${r.date}-${r.title}`}>
                  <td>{r.date}</td>
                  <td>{r.rating.toFixed(1)}</td>
                  <td>{r.role}</td>
                  <td>{r.title}</td>
                  <td>{r.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="callout callout-warn">
        <strong>Profile engagement gap</strong>
        <p>
          The employer profile is claimed and actively managed, but Why Work Here
          modules and the photo library trail AstraZeneca and Amgen. Interview
          experience is {COMPANY.glassdoor.interviewPositivePct}% positive
          (difficulty {COMPANY.glassdoor.interviewDifficulty}/5).
        </p>
      </div>

      <section>
        <h2>Glassdoor</h2>
        <p className="muted">Company rating & CEO approval over time</p>
        <div className="chart" aria-label="Glassdoor rating trend chart">
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart
              data={TRENDS.glassdoor.map((d) => ({
                period: d.label,
                company: d.company,
                ceo: d.ceo,
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
              <XAxis dataKey="period" stroke="#9aa4b2" />
              <YAxis yAxisId="company" domain={[0, 5]} stroke="#f0a202" />
              <YAxis yAxisId="ceo" orientation="right" domain={[50, 100]} stroke="#4f8cff" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="company"
                type="monotone"
                dataKey="company"
                name="Company rating"
                stroke="#f0a202"
                strokeWidth={2.5}
                dot={{ r: 5 }}
              />
              <Line
                yAxisId="ceo"
                type="monotone"
                dataKey="ceo"
                name="CEO approval %"
                stroke="#4f8cff"
                strokeWidth={2.5}
                dot={{ r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p className="muted">
          Company 3.7 → 3.6 → 3.5 · CEO 74% → 72% → 70% · Wayback + live
        </p>
      </section>
    </div>
  );
}

function IndeedTab() {
  const cats = [...COMPANY.indeed.categories].reverse();

  return (
    <div className="stack">
      <div className="pill-row">
        <span className="pill pill-info">Listed as Gilead Sciences</span>
        <span className="pill pill-warn">2026 YTD 3.0★</span>
        <span className="pill pill-info">Wellbeing {COMPANY.indeed.wellbeing} · Above avg</span>
      </div>

      <RefreshButton platform="Indeed" />

      <div className="stats">
        <div className="stat">
          <div className="stat-value warn">{COMPANY.indeed.overall}</div>
          <div className="stat-label">Company rating · {COMPANY.indeed.reviews} reviews</div>
        </div>
        <div className="stat">
          <div className="stat-value warn">{COMPANY.indeed.ceo}%</div>
          <div className="stat-label">CEO approval</div>
        </div>
        <div className="stat">
          <div className="stat-value">{COMPANY.indeed.jobs}</div>
          <div className="stat-label">Open jobs · {COMPANY.indeed.salaries} salaries</div>
        </div>
        <div className="stat">
          <div className="stat-value">{COMPANY.indeed.qa}</div>
          <div className="stat-label">Q&A threads</div>
        </div>
      </div>

      <div className="two-col">
        <section>
          <h2>Category ratings</h2>
          <div className="chart">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={cats} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
                <XAxis type="number" domain={[0, 5]} stroke="#9aa4b2" />
                <YAxis type="category" dataKey="name" width={170} stroke="#9aa4b2" />
                <Tooltip />
                <Bar dataKey="score" fill="#f0a202" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section>
          <h2>Indeed</h2>
          <p className="muted">Company rating by year</p>
          <div className="chart" aria-label="Indeed rating trend chart">
            <ResponsiveContainer width="100%" height={260}>
              <ComposedChart data={TRENDS.indeedCompanyByYear}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
                <XAxis dataKey="period" stroke="#9aa4b2" />
                <YAxis domain={[0, 5]} stroke="#9aa4b2" />
                <Tooltip />
                <Legend />
                <ReferenceLine y={3.5} stroke="#9aa4b2" strokeDasharray="4 4" label="Current overall" />
                <Bar dataKey="company" name="Company avg (★)" fill="#4f8cff" radius={4} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="muted">
            Company peaked at 3.53 in 2025, then 2026 YTD eased to 3.00. CEO approval is currently{" "}
            {COMPANY.indeed.ceo}% (Indeed does not publish a yearly CEO series).
          </p>
        </section>
      </div>

      <section>
        <h2>Ratings by job title</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Job title</th>
                <th>Avg rating</th>
              </tr>
            </thead>
            <tbody>
              {COMPANY.indeed.byTitle.map((r) => (
                <tr key={r.title}>
                  <td>{r.title}</td>
                  <td>{r.score.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Recent reviews</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Rating</th>
                <th>Role</th>
                <th>Headline</th>
                <th>Core message</th>
              </tr>
            </thead>
            <tbody>
              {COMPANY.indeed.recentReviews.map((r) => (
                <tr key={`${r.date}-${r.title}`}>
                  <td>{r.date}</td>
                  <td>{r.rating.toFixed(1)}</td>
                  <td>{r.role}</td>
                  <td>{r.title}</td>
                  <td>{r.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function RepliesTab() {
  return (
    <div className="stack">
      <div className="callout callout-info">
        <strong>How to use</strong>
        <p>
          Click Copy reply, then paste into the Glassdoor or Indeed employer response
          box. Have Legal/HR review replies that touch compliance, layoffs, or named
          leadership before posting.
        </p>
      </div>

      <section>
        <h2>Glassdoor drafts</h2>
        <div className="stack tight">
          {REPLIES.filter((r) => r.platform === "Glassdoor").map((r) => (
            <CopyReply key={r.id} reply={r} />
          ))}
        </div>
      </section>

      <section>
        <h2>Indeed drafts</h2>
        <div className="stack tight">
          {REPLIES.filter((r) => r.platform === "Indeed").map((r) => (
            <CopyReply key={r.id} reply={r} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ReputationHome({ tab }: { tab: HomeTab }) {
  return (
    <div className="reputation-shell">
      <div className="page">
        <header className="hero">
          <div className="hero-top">
            <p className="eyebrow">Employer brand audit</p>
          </div>
          <h1>Gilead Sciences Reputation</h1>
          <p className="lede">
            Glassdoor & Indeed issues, ratings, and copyable review replies for Gilead
            Sciences. Data captured Jul 22, 2026.
          </p>
        </header>

        <main>
          {tab === "overview" && <OverviewTab />}
          {tab === "glassdoor" && <GlassdoorTab />}
          {tab === "indeed" && <IndeedTab />}
          {tab === "competitors" && <CompetitorsTab />}
          {tab === "playbook" && <PlaybookTab />}
          {tab === "replies" && <RepliesTab />}
        </main>

        <footer className="footer">
          Gilead Sciences · Foster City, CA · Data captured Jul 22, 2026
        </footer>
      </div>
    </div>
  );
}
