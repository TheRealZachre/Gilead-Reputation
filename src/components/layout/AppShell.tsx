import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import type { SessionUserDisplay } from "./UserMenu";

interface AppShellProps {
  children: ReactNode;
  isAdmin?: boolean;
  user?: SessionUserDisplay | null;
}

export function AppShell({ children, isAdmin = false, user }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-brand-paper">
      <Sidebar isAdmin={isAdmin} user={user} />
      <main className="flex flex-1 flex-col overflow-auto">{children}</main>
    </div>
  );
}
