const GLASSDOOR_MOVES = [
  {
    move: "Claim & fully complete the employer profile",
    why: "Complete profiles (mission, benefits, Why Work Here, photos, DEI, awards) rank higher in search and convert more browsers into reviewers.",
    cadence: "Set up once · refresh quarterly",
  },
  {
    move: "Respond to every review — positive and negative",
    why: "Glassdoor surfaces employer response rate and readers weight it heavily. A calm, specific reply to criticism reassures the next candidate more than the complaint worries them.",
    cadence: "Weekly",
  },
  {
    move: "Run compliant review drives at natural high points",
    why: "Onboarding week, shipped milestones, and promotion cycles are when sentiment is genuinely high. Fresh 4–5★ reviews dilute old low ones because the score is recency-weighted.",
    cadence: "Quarterly",
  },
  {
    move: "Fix the top cited issues — then say so publicly",
    why: "Category scores (work-life balance, senior management, career growth) roll up into the overall. Announcing concrete changes turns detractors into updated reviews.",
    cadence: "Ongoing",
  },
  {
    move: "Coach and recognize front-line managers",
    why: "“Senior management” is the single most common drag on pharma ratings. Manager quality moves culture, WLB, and recommend-rate scores at once.",
    cadence: "Ongoing",
  },
  {
    move: "Keep the interview experience tight and communicative",
    why: "Interview reviews and difficulty ratings show on your profile. Fast, respectful, well-communicated loops generate positive interview reviews even from candidates you pass on.",
    cadence: "Ongoing",
  },
];

const INDEED_MOVES = [
  {
    move: "Claim & optimize the Indeed company page",
    why: "A verified page with photos, a strong “Why work here,” and complete benefits builds trust and gives reviewers a reason to engage.",
    cadence: "Set up once · refresh quarterly",
  },
  {
    move: "Invest in the drivers of the Work Wellbeing score",
    why: "Indeed’s Wellbeing score is survey-based — happiness, purpose, stress, and satisfaction. It moves only when the lived experience (stress load, flexibility, sense of purpose) actually improves.",
    cadence: "Ongoing",
  },
  {
    move: "Encourage employees to complete the survey & leave reviews",
    why: "Broad, voluntary participation makes the Wellbeing score and star rating representative instead of dominated by a vocal unhappy minority.",
    cadence: "Quarterly",
  },
  {
    move: "Respond to reviews from the employer dashboard",
    why: "Indeed lets employers reply publicly. Responses signal an engaged company and give context that future job seekers read alongside the review.",
    cadence: "Weekly",
  },
  {
    move: "Keep job posts accurate and the apply flow smooth",
    why: "Misleading posts, ghosting, and clunky applications turn into low-star reviews. Accurate roles and prompt follow-up prevent avoidable negatives.",
    cadence: "Ongoing",
  },
];

const GLASSDOOR_DO = [
  "Ask every departing and every recently promoted employee to share an honest review",
  "Reply to reviews using the employee’s own themes, then link the change you made",
  "Update the profile the week a new benefit, award, or program launches",
  "Report only reviews that break the guidelines (threats, PII, off-topic) — with evidence",
];

const GLASSDOOR_DONT = [
  "Offer gift cards, raffles, or any incentive for reviews",
  "Ask only your happiest people, or pre-screen who gets the link",
  "Post canned, identical replies to every review",
  "Argue with, dox, or threaten a reviewer — it removes the reply and invites press",
];

const INDEED_DO = [
  "Fold the Wellbeing survey and review link into onboarding and quarterly check-ins",
  "Fix the stress and workload drivers reviewers name, then re-survey",
  "Keep salary ranges and role scope in postings honest",
  "Respond publicly to reviews that raise fixable, factual issues",
];

const INDEED_DONT = [
  "Incentivize, gate, or filter who can respond to the survey or leave a review",
  "Let interview no-shows and unanswered applications pile up",
  "Post the same job repeatedly with a different title to look like you’re hiring",
  "Treat the Wellbeing score as a metric to game rather than an experience to improve",
];

function DoDontCards({
  doItems,
  dontItems,
}: {
  doItems: string[];
  dontItems: string[];
}) {
  return (
    <div className="two-col">
      <article className="card">
        <h3>Do</h3>
        <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
          {doItems.map((item) => (
            <li key={item} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h3>Don’t</h3>
        <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
          {dontItems.map((item) => (
            <li key={item} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function MovesTable({
  rows,
}: {
  rows: { move: string; why: string; cadence: string }[];
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th style={{ width: "26%" }}>Move</th>
            <th>Why it works</th>
            <th style={{ width: "18%" }}>Cadence</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.move}>
              <td>{row.move}</td>
              <td>{row.why}</td>
              <td>{row.cadence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PlaybookTab() {
  return (
    <div className="stack">
      <div className="callout callout-info">
        <strong>How employer ratings actually move</strong>
        <p>
          Both Glassdoor and Indeed show a rolling average that is weighted toward
          recent reviews. You cannot delete a fair negative review — but you can fix
          the issues employees cite, steadily grow the volume of authentic recent
          reviews from satisfied people, and publicly respond so the profile reads as
          actively managed. Volume, recency, genuine improvement, and response rate
          are the whole game.
        </p>
      </div>

      <div className="pill-row">
        <span className="pill pill-info">Lever · Review volume</span>
        <span className="pill pill-info">Lever · Recency</span>
        <span className="pill pill-info">Lever · Response rate</span>
        <span className="pill pill-warn">Lever · Root-cause fixes</span>
      </div>

      <section>
        <h2>Glassdoor — raise your score</h2>
        <p className="muted">
          The overall rating is a recency-weighted average of category scores.
          Completeness, response rate, and a steady flow of honest recent reviews are
          what you control.
        </p>
        <MovesTable rows={GLASSDOOR_MOVES} />
      </section>

      <DoDontCards doItems={GLASSDOOR_DO} dontItems={GLASSDOOR_DONT} />

      <section>
        <h2>Indeed — raise your score</h2>
        <p className="muted">
          Indeed blends a star rating with a survey-based Work Wellbeing score
          (happiness, purpose, stress, satisfaction) plus CEO approval. Improve the
          lived experience and broaden participation.
        </p>
        <MovesTable rows={INDEED_MOVES} />
      </section>

      <DoDontCards doItems={INDEED_DO} dontItems={INDEED_DONT} />

      <div className="callout callout-warn">
        <strong>Compliance guardrails (both platforms)</strong>
        <p>
          Never pay for, incentivize, gate, or filter reviews, and always ask
          everyone rather than hand-picking happy employees. Glassdoor and Indeed
          community guidelines — and FTC rules on endorsements — prohibit coercion and
          pay-for-review. Violations get reviews removed and can flag the whole
          profile. Have HR/Legal review any employer response that touches layoffs,
          compliance, or named leadership before it is posted.
        </p>
      </div>

      <section>
        <h2>Track it monthly</h2>
        <p className="muted">
          What “good” looks like once the program is running.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Overall rating (GD &amp; Indeed)</td>
                <td>Up 0.1–0.2★ per quarter toward 4.0+</td>
              </tr>
              <tr>
                <td>New reviews in the last 90 days</td>
                <td>Rising and mostly 4–5★</td>
              </tr>
              <tr>
                <td>Employer response rate</td>
                <td>90%+ of reviews answered within two weeks</td>
              </tr>
              <tr>
                <td>Weakest category (WLB / management)</td>
                <td>Closing the gap to industry average</td>
              </tr>
              <tr>
                <td>Indeed Work Wellbeing</td>
                <td>Above the pharma benchmark and climbing</td>
              </tr>
              <tr>
                <td>CEO approval</td>
                <td>Trending up with transparent leadership comms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
