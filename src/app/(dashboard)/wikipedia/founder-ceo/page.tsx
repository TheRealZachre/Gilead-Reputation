import { Header } from "@/components/layout/Header";
import { WikipediaAudit } from "@/components/wikipedia/WikipediaAudit";
import { WikipediaSubnav } from "@/components/wikipedia/WikipediaSubnav";
import { CLIENT_WIKIPEDIA } from "@/lib/company";

export default function WikipediaFounderCeoPage() {
  return (
    <>
      <Header
        title="Wikipedia Analytics · Chairman & CEO"
        subtitle={`${CLIENT_WIKIPEDIA.ceoName} — traffic, maintenance flags & editorial review`}
      />
      <WikipediaSubnav />
      <WikipediaAudit articleUrl={CLIENT_WIKIPEDIA.ceoUrl} />
    </>
  );
}
