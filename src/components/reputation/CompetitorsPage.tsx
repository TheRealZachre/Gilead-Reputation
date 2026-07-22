"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SCORECARD } from "@/lib/reputation/data";

export function CompetitorsTab() {
  const gdChart = [
    { name: "Gilead", score: 3.5 },
    { name: "BeOne", score: 3.6 },
    { name: "BMS", score: 3.7 },
    { name: "Amgen", score: 3.8 },
    { name: "AstraZeneca", score: 4.0 },
  ];
  const indeedChart = [
    { name: "BeOne", score: 3.4 },
    { name: "Gilead", score: 3.5 },
    { name: "AstraZeneca", score: 4.0 },
    { name: "Amgen", score: 4.0 },
    { name: "BMS", score: 4.1 },
  ];
  const categoryGap = [
    { name: "Comp", Gilead: 4.5, AstraZeneca: 4.1 },
    { name: "Culture", Gilead: 3.4, AstraZeneca: 3.9 },
    { name: "Career", Gilead: 3.4, AstraZeneca: 3.7 },
    { name: "Management", Gilead: 3.1, AstraZeneca: 3.5 },
    { name: "WLB", Gilead: 3.3, AstraZeneca: 3.8 },
  ];

  return (
    <div className="stack">
      <p className="muted">
        AstraZeneca, Amgen, Bristol Myers Squibb, and BeOne vs Gilead. Public Glassdoor
        & Indeed data · Jul 22, 2026.
      </p>

      <section>
        <h2>Overall rating — Glassdoor</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={gdChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
              <XAxis dataKey="name" stroke="#9aa4b2" />
              <YAxis domain={[0, 5]} stroke="#9aa4b2" />
              <Tooltip />
              <Bar dataKey="score" name="Glassdoor overall" fill="#f0a202" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2>Overall rating — Indeed</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={indeedChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
              <XAxis dataKey="name" stroke="#9aa4b2" />
              <YAxis domain={[0, 5]} stroke="#9aa4b2" />
              <Tooltip />
              <Bar dataKey="score" name="Indeed overall" fill="#4f8cff" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2>Scorecard</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>GD overall</th>
                <th>GD CEO %</th>
                <th>GD recommend %</th>
                <th>Indeed overall</th>
                <th>Indeed CEO %</th>
                <th>Indeed wellbeing</th>
                <th>GD updates / photos</th>
              </tr>
            </thead>
            <tbody>
              {SCORECARD.map((row) => (
                <tr key={row.company} className={`row-${row.highlight}`}>
                  <td>{row.company}</td>
                  <td>{row.gd}</td>
                  <td>{row.gdCeo}</td>
                  <td>{row.gdRec}</td>
                  <td>{row.indeed}</td>
                  <td>{row.indeedCeo}</td>
                  <td>{row.wellbeing}</td>
                  <td>{row.updates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="two-col">
        <article className="card">
          <h3>AstraZeneca / Amgen pattern</h3>
          <p>
            Engaged Employer badge, awards surface, rich Why Work With Us modules, high
            update volume, large photo libraries.
          </p>
          <p className="muted">
            Stronger recommend rates and Indeed wellbeing even when category scores aren’t
            perfect.
          </p>
        </article>
        <article className="card">
          <h3>Where Gilead stands</h3>
          <p>
            Best-in-class comp & benefits (4.5 GD) and 2.6K+ Glassdoor reviews with a
            managed profile, but overall (~3.5) and WLB sit at industry average and are
            sliding ~4% as recent leadership changes weigh on culture.
          </p>
          <p className="muted">
            CEO approval (70% GD / 58% Indeed) trails AstraZeneca and Amgen — reinforce
            it with transparent reorg communication while fixing manager-level culture.
          </p>
        </article>
      </div>

      <section>
        <h2>Glassdoor category gap vs AstraZeneca</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={categoryGap}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
              <XAxis dataKey="name" stroke="#9aa4b2" />
              <YAxis domain={[0, 5]} stroke="#9aa4b2" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Gilead" fill="#f0a202" radius={4} />
              <Bar dataKey="AstraZeneca" fill="#3ecf8e" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="muted">
          Gilead leads on comp & benefits (4.5); trails AstraZeneca on culture, career, management, and WLB.
        </p>
      </section>
    </div>
  );
}

/** @deprecated Prefer ReputationHome tab — kept for route compatibility */
export function CompetitorsPage() {
  return <CompetitorsTab />;
}
