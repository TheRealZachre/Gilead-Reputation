import { WikipediaAuditTool } from "@/components/wikipedia/WikipediaAuditTool";
import { WikipediaPageShell } from "@/components/wikipedia/WikipediaPageShell";
import { CLIENT_NAME } from "@/lib/company";

export default function WikipediaAuditPage() {
  return (
    <WikipediaPageShell
      title="Run Wikipedia Audit"
      subtitle={`${CLIENT_NAME} · company & CEO article scoring`}
    >
      <WikipediaAuditTool />
    </WikipediaPageShell>
  );
}
