"use client";

import { type ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { BRAND_ASSETS } from "@/lib/brand";
import type { SessionUserDisplay } from "./UserMenu";

interface AppShellProps {
  children: ReactNode;
  isAdmin?: boolean;
  user?: SessionUserDisplay | null;
}

export function AppShell({ children, isAdmin = false, user }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-brand-paper">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <Sidebar isAdmin={isAdmin} user={user} />
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 flex max-w-[85%]">
            <Sidebar
              isAdmin={isAdmin}
              user={user}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="flex items-center gap-3 border-b border-brand-ink/10 bg-white px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-lg p-1.5 text-brand-ink hover:bg-brand-ink/5"
          >
            <Menu className="h-6 w-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND_ASSETS.gileadLogo}
            alt="Gilead Sciences"
            className="h-6 w-auto"
          />
        </header>

        <main className="flex flex-1 flex-col overflow-auto">{children}</main>
      </div>
    </div>
  );
}
