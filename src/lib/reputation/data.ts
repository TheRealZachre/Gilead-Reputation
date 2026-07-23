export type HomeTab = "overview" | "glassdoor" | "indeed" | "replies" | "competitors";

export type ReplyDraft = {
  id: string;
  platform: "Glassdoor" | "Indeed";
  meta: string;
  title: string;
  body: string;
};

export const COMPANY = {
  glassdoor: {
    name: "Gilead Sciences",
    url: "https://www.glassdoor.com/Overview/Working-at-Gilead-Sciences-EI_IE2016.11,26.htm",
    reviewsUrl: "https://www.glassdoor.com/Reviews/Gilead-Sciences-Reviews-E2016.htm",
    overall: 3.5,
    reviews: 2612,
    recommend: 62,
    ceo: 70,
    ceoName: "Daniel O'Day",
    outlook: 55,
    updates: 122,
    photos: 29,
    jobs: 210,
    interviewPositivePct: 61,
    interviewDifficulty: 3.0,
    industryAvg: 3.5,
    compYoYChangePct: -4,
    categories: [
      { name: "Compensation & benefits", score: 4.5 },
      { name: "Diversity & inclusion", score: 3.9 },
      { name: "Career opportunities", score: 3.4 },
      { name: "Culture & values", score: 3.4 },
      { name: "Work/Life balance", score: 3.3 },
      { name: "Senior management", score: 3.1 },
    ],
    recentReviews: [
      {
        date: "Jul 2, 2026",
        rating: 3.0,
        role: "Anonymous · current · Foster City, CA",
        title: "Great pay, culture slipping",
        summary:
          "Strong comp, benefits, long-term growth · Recent leadership changes have knocked the culture; limited work-life balance",
      },
      {
        date: "Jun 28, 2026",
        rating: 2.0,
        role: "Director · current, more than 5 years · Foster City, CA",
        title: "Bureaucratic and slow to decide",
        summary:
          "Excellent benefits and science · Layers of process; reorgs; decisions stall; morale down since restructuring",
      },
      {
        date: "Jun 21, 2026",
        rating: 1.0,
        role: "Contractor · former · Foster City, CA",
        title: "No path for contractors",
        summary:
          "Good place to build a resume · Contractors treated as disposable; no growth or conversion; little investment in you",
      },
      {
        date: "Jun 14, 2026",
        rating: 4.0,
        role: "Senior Research Associate · current, more than 3 years · Oceanside, CA",
        title: "Good science, good people",
        summary:
          "Meaningful mission; strong benefits; smart colleagues · Pay bands compressed for tenured staff; promotion slow",
      },
      {
        date: "Jun 9, 2026",
        rating: 2.0,
        role: "Manager · current, more than 5 years · Foster City, CA",
        title: "Micromanagement and always-on culture",
        summary:
          "Great pay and perks · Managers want more constantly; calls and texts nights/weekends; stress high, WLB low",
      },
      {
        date: "Jun 3, 2026",
        rating: 3.0,
        role: "Anonymous · current · Raleigh, NC",
        title: "Depends heavily on your manager",
        summary:
          "Benefits and salary are excellent · Experience swings by team; favoritism in promotions; uneven recognition",
      },
      {
        date: "May 27, 2026",
        rating: 5.0,
        role: "Scientist · current, more than 1 year · Foster City, CA",
        title: "Best benefits in biotech",
        summary:
          "Top-tier comp, benefits, on-site perks; mission you can believe in · Big-company pace; some silos",
      },
      {
        date: "May 19, 2026",
        rating: 1.0,
        role: "Anonymous · former · Foster City, CA",
        title: "Layoffs changed everything",
        summary:
          "Was a great place pre-reorg · Repeated layoffs; survivors overloaded; trust in leadership eroded",
      },
      {
        date: "May 12, 2026",
        rating: 4.0,
        role: "Associate Director · current, more than 5 years · Foster City, CA",
        title: "Strong company, expect big-pharma pace",
        summary:
          "Impactful therapies; great total rewards; smart teams · Meeting overload; RTO push; longer hours than expected",
      },
      {
        date: "May 4, 2026",
        rating: 2.0,
        role: "Sr. Manager · current, more than 3 years · Foster City, CA",
        title: "Comp is why people stay",
        summary:
          "Comp and benefits keep people · Promotion criteria unclear; senior leadership churn; direction shifts often",
      },
      {
        date: "Apr 24, 2026",
        rating: 5.0,
        role: "Intern · former · Foster City, CA",
        title: "Fantastic internship experience",
        summary:
          "Supportive team; housing covered; learned a ton; people engaged and kind · Wish it were longer",
      },
      {
        date: "Apr 15, 2026",
        rating: 3.0,
        role: "Quality Assurance Analyst · current, more than 1 year · La Verne, CA",
        title: "Solid but workloads are heavy",
        summary:
          "Good benefits; stable work · Heavy workload; staffing tight after cuts; recognition inconsistent",
      },
      {
        date: "Apr 3, 2026",
        rating: 2.0,
        role: "Marketing · current, more than 3 years · Foster City, CA",
        title: "Culture not what it used to be",
        summary:
          "Comp is strong · Bureaucracy and politics; leadership changes; less transparency than before",
      },
      {
        date: "Mar 22, 2026",
        rating: 4.0,
        role: "Senior Administrative Assistant · current · Foster City, CA",
        title: "Well looked after",
        summary:
          "Great facilities, benefits, inclusive teams; WLB respected on my team · Bonus/equity tightened this cycle",
      },
      {
        date: "Mar 9, 2026",
        rating: 1.0,
        role: "Contractor · former",
        title: "They care nothing about contractors",
        summary:
          "Name on the resume helps · No growth for contractors; stepping stone only; find somewhere that invests in you",
      },
      {
        date: "Mar 1, 2026",
        rating: 3.0,
        role: "Data Scientist · current, more than 1 year · Foster City, CA",
        title: "Good work, mixed management",
        summary:
          "Interesting problems; excellent benefits · Management quality varies widely; unclear priorities across reorgs",
      },
      {
        date: "Feb 18, 2026",
        rating: 5.0,
        role: "Kite Oncology · current, more than 3 years · Santa Monica, CA",
        title: "Mission-driven and rewarding",
        summary:
          "Cell therapy work is meaningful; great pay and benefits; strong colleagues · Fast pace; occasional silos",
      },
      {
        date: "Feb 6, 2026",
        rating: 2.0,
        role: "Director · former, more than 5 years · Foster City, CA",
        title: "Talent leaving after reorgs",
        summary:
          "World-class benefits · Constant reorgs; strategy shifts; strong people leaving; morale hit hard",
      },
    ],
  },
  indeed: {
    name: "Gilead Sciences",
    url: "https://www.indeed.com/cmp/Gilead-Sciences",
    reviewsUrl: "https://www.indeed.com/cmp/Gilead-Sciences/reviews",
    overall: 3.5,
    reviews: 601,
    ceo: 58,
    ceoName: "Daniel O'Day",
    wellbeing: 73,
    wellbeingLabel: "Above average",
    jobs: 210,
    salaries: 3800,
    qa: 90,
    newsUpdates: 6,
    categories: [
      { name: "Compensation & benefits", score: 4.0 },
      { name: "Work & life balance", score: 3.3 },
      { name: "Culture", score: 3.3 },
      { name: "Job security & advancement", score: 3.2 },
      { name: "Management", score: 3.1 },
    ],
    yearly: [
      { year: "2022", score: 3.19 },
      { year: "2023", score: 3.32 },
      { year: "2024", score: 3.28 },
      { year: "2025", score: 3.53 },
      { year: "2026", score: 3.0 },
    ],
    byTitle: [
      { title: "Specialist", score: 3.9 },
      { title: "Senior Administrative Assistant", score: 3.7 },
      { title: "Senior Research Associate", score: 3.6 },
      { title: "Quality Assurance Analyst", score: 3.4 },
      { title: "Manager", score: 2.8 },
      { title: "Director", score: 2.8 },
    ],
    recentReviews: [
      {
        date: "Apr 3, 2026",
        rating: 3.0,
        role: "Current Employee · Foster City, CA",
        title: "Excellent compensation, declining culture",
        summary:
          "Real long-term growth; strong company · Leadership changes hurt the culture; work-life balance is limited",
      },
      {
        date: "Mar 9, 2026",
        rating: 1.0,
        role: "Contractor · former",
        title: "No growth for contractors",
        summary: "Stepping stone only · Contractors get no growth or investment; look elsewhere",
      },
      {
        date: "Feb 12, 2026",
        rating: 2.0,
        role: "Manager · current",
        title: "Fast paced, bureaucratic, always going above & beyond",
        summary:
          "Good pay; good people; strong benefits · Difficult management; micromanagers; calls/texts at all hours; no WLB",
      },
      {
        date: "Jan 4, 2026",
        rating: 3.0,
        role: "Anonymous · current",
        title: "Great benefits, slow growth — depends on manager",
        summary:
          "Decent salary; learned a lot; good benefits · Favoritism in promotions; growth depends entirely on your manager",
      },
      {
        date: "Nov 20, 2025",
        rating: 4.0,
        role: "Specialist · current",
        title: "Good mission and evolving culture",
        summary: "Friendly colleagues; strong benefits and mission · US-centric; some low-energy pockets",
      },
      {
        date: "Sep 8, 2025",
        rating: 5.0,
        role: "Senior Research Associate · current",
        title: "Values-based and rewarding",
        summary: "Respectful, inclusive, dedicated people; great products and mission; feel valued",
      },
    ],
  },
};

export const GLASSDOOR_ISSUES = [
  {
    issue: "Overall rating 3.5 — right at industry average (3.5) and down ~4% YoY",
    fix: "Treat Glassdoor as an active brand channel: respond to ≤2★ within 7 days, post weekly updates that show culture, recognition, and WLB action after the reorgs.",
  },
  {
    issue: "Only 62% would recommend Gilead to a friend",
    fix: "Run post-onboarding and post-reorg pulse checks; close the gap between mission pride and day-to-day experience before asking for reviews.",
  },
  {
    issue: "Senior management 3.1 / WLB 3.3 / culture 3.4 are the weakest categories",
    fix: "Manager coaching at Foster City and satellite sites; publish promotion criteria; rationalize workload and always-on expectations flagged repeatedly in reviews.",
  },
  {
    issue: "Leadership-change & layoff narrative dominates 2026 reviews",
    fix: "Communicate org changes transparently; give managers talking points; show what's being protected (comp, benefits, mission) and what's changing.",
  },
  {
    issue: "Contractor experience rated 1★ (no growth, no investment)",
    fix: "Define a contractor experience standard: onboarding, feedback, and clear conversion pathways; brief managers on treatment expectations.",
  },
  {
    issue: "Comp & benefits (4.5) is the standout strength but comp is −4% YoY",
    fix: "Protect the pay/benefits narrative; communicate equity and bonus changes transparently so the strongest score doesn't erode.",
  },
];

export const INDEED_ISSUES = [
  {
    issue: "Overall 3.5 across 601 reviews; 2026 YTD eased to 3.0",
    fix: "Answer every new review within 7 days; invite private follow-up; show what changed on WLB, recognition, and manager quality.",
  },
  {
    issue: "Management (3.1) is the lowest category; manager quality is inconsistent",
    fix: "Targeted manager enablement — feedback, recognition rituals, workload planning; measure by team and re-survey after 90 days.",
  },
  {
    issue: "Mid/senior titles rate poorly (Manager 2.8, Director 2.8)",
    fix: "Focus people programs on the manager/director layers where attrition risk and burnout signals are highest.",
  },
  {
    issue: "Work wellbeing 73 (Above average) but stress themes recur",
    fix: "Target stress drivers named in reviews: meeting load, always-on messaging, post-layoff overload. Protect the wellbeing score with concrete fixes.",
  },
  {
    issue: "Why Join Us can lean harder on the mission and benefits strength",
    fix: "Enrich the page with benefits grid, EVP, photos, and employee quotes from Kite/Oncology and R&D; publish monthly updates.",
  },
  {
    issue: "Q&A thin on promotions, raises, and RTO expectations",
    fix: "Post official employer answers so candidates aren't left with rumor-only guidance on advancement and return-to-office.",
  },
];

export const SCORECARD = [
  {
    company: "Gilead Sciences",
    gd: "3.5",
    gdCeo: "70",
    gdRec: "62",
    indeed: "3.5",
    indeedCeo: "58",
    wellbeing: "73 · Above avg",
    updates: "122 / 29",
    highlight: "self" as const,
  },
  {
    company: "ViiV Healthcare",
    gd: "3.7",
    gdCeo: "74",
    gdRec: "68",
    indeed: "3.8",
    indeedCeo: "66",
    wellbeing: "72 · Above avg",
    updates: "Peer",
    highlight: "peer" as const,
  },
  {
    company: "Merck",
    gd: "4.1",
    gdCeo: "88",
    gdRec: "80",
    indeed: "4.1",
    indeedCeo: "68",
    wellbeing: "75 · Above avg",
    updates: "Engaged peer",
    highlight: "peer" as const,
  },
  {
    company: "Janssen (J&J)",
    gd: "4.0",
    gdCeo: "80",
    gdRec: "82",
    indeed: "4.2",
    indeedCeo: "71",
    wellbeing: "76 · High",
    updates: "Engaged peer",
    highlight: "peer" as const,
  },
  {
    company: "Bristol Myers Squibb",
    gd: "3.7",
    gdCeo: "67",
    gdRec: "67",
    indeed: "4.1",
    indeedCeo: "57",
    wellbeing: "75 · Above avg",
    updates: "Engaged peer",
    highlight: "peer" as const,
  },
  {
    company: "Novartis",
    gd: "4.0",
    gdCeo: "86",
    gdRec: "80",
    indeed: "4.0",
    indeedCeo: "70",
    wellbeing: "74 · Above avg",
    updates: "Engaged peer",
    highlight: "peer" as const,
  },
  {
    company: "AbbVie",
    gd: "3.9",
    gdCeo: "80",
    gdRec: "74",
    indeed: "3.8",
    indeedCeo: "63",
    wellbeing: "72 · Above avg",
    updates: "Peer",
    highlight: "peer" as const,
  },
];

export const REPLIES: ReplyDraft[] = [
  {
    id: "gd-fostercity-jul",
    platform: "Glassdoor",
    meta: "3.0★ · Jul 2, 2026 · Foster City, CA",
    title: "Great pay, culture slipping",
    body: `Thank you for the balanced feedback — and for recognizing the strength of our compensation, benefits, and growth opportunities. We hear the concern that recent leadership changes have affected culture and work-life balance, and we take it seriously. Rebuilding trust through the transition is a priority for our People and site leadership teams. If you're open to sharing more confidentially, please reach employer-brand@gilead.com. — Gilead Sciences People Team`,
  },
  {
    id: "gd-director-jun28",
    platform: "Glassdoor",
    meta: "2.0★ · Jun 28, 2026 · Director · Foster City, CA",
    title: "Bureaucratic and slow to decide",
    body: `Thank you for taking the time to share this. We're glad the science and benefits stand out, and we hear the frustration with process, reorganizations, and slow decision-making. Reducing bureaucracy and clarifying decision rights are active focus areas as we work through the current transition. We'd welcome a confidential conversation at employer-brand@gilead.com. — Gilead Sciences`,
  },
  {
    id: "gd-contractor-jun21",
    platform: "Glassdoor",
    meta: "1.0★ · Jun 21, 2026 · Contractor · Foster City, CA",
    title: "No path for contractors",
    body: `We appreciate you raising this, and we're sorry your experience as a contractor fell short. Everyone who contributes to our mission deserves clear onboarding, feedback, and a sense of investment. We're reviewing how managers support contract colleagues and where conversion pathways can be clearer. If you're willing to share specifics, please contact employer-brand@gilead.com. — Gilead Sciences People Team`,
  },
  {
    id: "in-culture-decline",
    platform: "Indeed",
    meta: "3.0★ · Apr 3, 2026 · Current Employee · Foster City, CA",
    title: "Excellent compensation, declining culture",
    body: `Thank you for recognizing the strength of our compensation and the real growth opportunities here — and for the honest note on culture and work-life balance during recent leadership changes. Those themes are being reviewed with our People and Leadership teams, and trust is earned through action. We'd welcome a confidential conversation: employer-brand@gilead.com. — Gilead Sciences People Team`,
  },
  {
    id: "in-management",
    platform: "Indeed",
    meta: "2.0★ · Feb 12, 2026 · Manager · current",
    title: "Fast paced, bureaucratic, always going above & beyond",
    body: `Thank you for this candid perspective. We're glad the pay, benefits, and people came through as strengths, and we hear the concerns about management pressure, always-on expectations, and work-life balance. Manager enablement and workload planning are priorities for our People team. We'd value a private discussion: employer-brand@gilead.com. — Gilead Sciences`,
  },
  {
    id: "in-values",
    platform: "Indeed",
    meta: "5.0★ · Sep 8, 2025 · Senior Research Associate · current",
    title: "Values-based and rewarding",
    body: `Thank you for sharing this — it means a lot. We're glad the respect, inclusion, and sense of purpose come through, and that our mission and products make the work rewarding. Thank you for the difference you make for patients. — Gilead Sciences`,
  },
];

export const PLAN = [
  {
    week: "1",
    focus:
      "Reply to all 2026 ≤2★ reviews on Glassdoor and Indeed; prioritize leadership-change and contractor themes",
    done: "No unanswered 2026 negatives on either platform",
  },
  {
    week: "2",
    focus:
      "Manager enablement at Foster City + satellite sites: workload planning, recognition, always-on norms",
    done: "Written action plan shared internally; 1 public update posted",
  },
  {
    week: "3",
    focus:
      "Rebuild Indeed Why Join Us and Glassdoor profile modules; answer promo/raise/RTO Q&A",
    done: "Benefits grid + photos + EVP live; top FAQs answered",
  },
  {
    week: "4",
    focus:
      "Weekly Glassdoor updates; manager/director program kickoff; transparent reorg communications",
    done: "Cadence running; Employer Center dashboards reviewed",
  },
];

/** Verified public snapshots / yearly averages */
export const TRENDS = {
  glassdoor: [
    {
      period: "Jul 2024",
      label: "Jul 2024",
      company: 3.7,
      ceo: 74,
      recommend: 67,
    },
    {
      period: "Jan 2026",
      label: "Jan 2026",
      company: 3.6,
      ceo: 72,
      recommend: 64,
    },
    {
      period: "Jul 2026",
      label: "Jul 2026",
      company: 3.5,
      ceo: 70,
      recommend: 62,
    },
  ],
  indeedCompanyByYear: [
    { period: "2022", company: 3.19 },
    { period: "2023", company: 3.32 },
    { period: "2024", company: 3.28 },
    { period: "2025", company: 3.53 },
    { period: "2026", company: 3.0 },
  ],
  /** Indeed only publishes a current CEO figure, not a yearly series. */
  indeedCeoCurrent: 58,
};
