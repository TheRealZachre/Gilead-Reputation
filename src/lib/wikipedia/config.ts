export function getWikipediaConfig() {
  return {
    apiBase: "https://en.wikipedia.org/w/api.php",
    userAgent:
      process.env.WIKIPEDIA_USER_AGENT ??
      "SocialInsightsDashboard/1.0 (https://github.com/local/social-insights-dashboard; demo@local)",
    companyPage:
      process.env.WIKIPEDIA_COMPANY_PAGE ?? "Gilead Sciences",
    ceoPage: process.env.WIKIPEDIA_CEO_PAGE ?? "Daniel O'Day",
    companyName:
      process.env.WIKIPEDIA_COMPANY_NAME ?? "Gilead Sciences",
    ceoName: process.env.WIKIPEDIA_CEO_NAME ?? "Daniel O'Day",
    legacyNames: [] as string[],
    currentBrand: "Gilead Sciences",
  };
}
