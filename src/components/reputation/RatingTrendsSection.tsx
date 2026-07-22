"use client";

import {
  Bar,
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
import { TRENDS } from "@/lib/reputation/data";
import {
  ChartPanel,
  SortableHead,
  useSortedRows,
  type SortColumn,
} from "./shared";

const GLASSDOOR_TREND_COLUMNS: SortColumn<(typeof TRENDS.glassdoor)[number]>[] = [
  { key: "label", label: "Snapshot", type: "string" },
  { key: "company", label: "Company ★", type: "number" },
  { key: "ceo", label: "CEO approval", type: "number" },
  { key: "recommend", label: "Recommend", type: "number" },
];

const INDEED_TREND_COLUMNS: SortColumn<(typeof TRENDS.indeedCompanyByYear)[number]>[] = [
  { key: "period", label: "Year", type: "string" },
  { key: "company", label: "Company avg ★", type: "number" },
];

export function RatingTrendsSection() {
  const glassdoorChart = TRENDS.glassdoor.map((d) => ({
    period: d.label,
    company: d.company,
    ceo: d.ceo,
  }));

  const glassdoorSort = useSortedRows(TRENDS.glassdoor, GLASSDOOR_TREND_COLUMNS);
  const indeedSort = useSortedRows(TRENDS.indeedCompanyByYear, INDEED_TREND_COLUMNS);

  return (
    <section className="stack tight">
      <h2>Rating trends — company & CEO</h2>
      <p className="muted">
        Glassdoor and Indeed each have a chart and data rows below. Click any column header to sort.
      </p>

      <div className="chart-stack">
        <ChartPanel platform="Glassdoor" subtitle="Company rating & CEO approval over time">
          <div className="chart" aria-label="Glassdoor rating trend chart">
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={glassdoorChart} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3344" />
                <XAxis dataKey="period" stroke="#9aa4b2" />
                <YAxis
                  yAxisId="company"
                  domain={[0, 5]}
                  stroke="#f0a202"
                  label={{ value: "Company (★)", angle: -90, position: "insideLeft", fill: "#9aa4b2" }}
                />
                <YAxis
                  yAxisId="ceo"
                  orientation="right"
                  domain={[50, 100]}
                  stroke="#4f8cff"
                  label={{ value: "CEO %", angle: 90, position: "insideRight", fill: "#9aa4b2" }}
                />
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
            Company: 3.7 → 3.6 → 3.5. CEO: 74% → 72% → 70%. Recommend: 67% → 64% → 62%.
          </p>
          <div className="table-wrap trend-table">
            <table aria-label="Glassdoor rating trend data">
              <SortableHead
                columns={GLASSDOOR_TREND_COLUMNS}
                sortKey={glassdoorSort.sortKey}
                sortDir={glassdoorSort.sortDir}
                onSort={glassdoorSort.toggle}
              />
              <tbody>
                {glassdoorSort.sorted.map((row) => (
                  <tr key={`gd-${row.period}`}>
                    <td>{row.label}</td>
                    <td>{row.company.toFixed(1)}</td>
                    <td>{row.ceo}%</td>
                    <td>{row.recommend}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartPanel>

        <ChartPanel platform="Indeed" subtitle="Company rating by year">
          <div className="chart" aria-label="Indeed rating trend chart">
            <ResponsiveContainer width="100%" height={320}>
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
            Year buckets: 3.19 → 3.32 → 3.28 → 3.53 → 3.00 (2026 YTD). Current CEO approval is{" "}
            {TRENDS.indeedCeoCurrent}% (not a yearly series).
          </p>
          <div className="table-wrap trend-table">
            <table aria-label="Indeed rating trend data">
              <SortableHead
                columns={INDEED_TREND_COLUMNS}
                sortKey={indeedSort.sortKey}
                sortDir={indeedSort.sortDir}
                onSort={indeedSort.toggle}
              />
              <tbody>
                {indeedSort.sorted.map((row) => (
                  <tr key={`in-${row.period}`}>
                    <td>{row.period}</td>
                    <td>{row.company.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartPanel>
      </div>
    </section>
  );
}
