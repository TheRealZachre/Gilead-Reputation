"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Building2,
  FileText,
  LayoutDashboard,
  MessageSquareText,
  Shield,
  Star,
  type LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BRAND_ASSETS } from "@/lib/brand";
import { POWERED_BY_NAME } from "@/lib/company";
import { UserMenu, type SessionUserDisplay } from "./UserMenu";

const navLinks: { href: string; label: string; icon: LucideIcon; exact?: boolean }[] = [
  { href: "/", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/glassdoor", label: "Glassdoor", icon: Star },
  { href: "/indeed", label: "Indeed", icon: FileText },
  { href: "/competitors", label: "Competitors", icon: Building2 },
  { href: "/replies", label: "Copy replies", icon: MessageSquareText },
  { href: "/wikipedia", label: "Wikipedia", icon: BookOpen },
];

export function Sidebar({
  isAdmin = false,
  user,
}: {
  isAdmin?: boolean;
  user?: SessionUserDisplay | null;
}) {
  const pathname = usePathname();
  const adminActive = pathname.startsWith("/admin");

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-brand-border bg-brand-stage text-brand-off-white">
      <div className="border-b border-brand-border px-5 py-5">
        <BrandLogo showTagline vcfHref="/" />
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
        {isAdmin && (
          <Link
            href="/admin"
            className={clsx(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              adminActive
                ? "bg-white/15 text-white"
                : "text-white/70 hover:bg-white/8 hover:text-white"
            )}
          >
            <Shield className="h-4 w-4 shrink-0" />
            Platform Admin
          </Link>
        )}

        {navLinks.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/8 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-4 border-t border-brand-border p-4">
        <UserMenu user={user} />
        <div>
          <p className="text-xs text-white/45">Powered by</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND_ASSETS.wordmarkWhite}
            alt={POWERED_BY_NAME}
            className="mt-1.5 h-5 w-auto max-w-[9.5rem]"
          />
        </div>
      </div>
    </aside>
  );
}
