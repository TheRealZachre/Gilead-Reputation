"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  Star,
  Shield,
  type LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BRAND_ASSETS } from "@/lib/brand";
import { POWERED_BY_NAME } from "@/lib/company";
import { UserMenu, type SessionUserDisplay } from "./UserMenu";

type NavChild = { href: string; label: string; exact?: boolean };

type NavNode =
  | { kind: "link"; href: string; label: string; icon: LucideIcon; exact?: boolean }
  | { kind: "group"; id: string; label: string; icon: LucideIcon; children: NavChild[] };

const navItems: NavNode[] = [
  {
    kind: "group",
    id: "glassdoor-indeed",
    label: "Glassdoor and Indeed",
    icon: Star,
    children: [
      { href: "/", label: "Overview", exact: true },
      { href: "/glassdoor", label: "Glassdoor" },
      { href: "/indeed", label: "Indeed" },
      { href: "/competitors", label: "Competitors" },
      { href: "/replies", label: "Copy replies" },
    ],
  },
  {
    kind: "group",
    id: "wikipedia",
    label: "Wikipedia",
    icon: BookOpen,
    children: [
      { href: "/wikipedia/corporate", label: "Corporate" },
      { href: "/wikipedia/founder-ceo", label: "Chairman & CEO" },
    ],
  },
];

const linkBase =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors";
const activeClasses = "bg-white/15 text-white";
const inactiveClasses = "text-white/70 hover:bg-white/8 hover:text-white";

export function Sidebar({
  isAdmin = false,
  user,
}: {
  isAdmin?: boolean;
  user?: SessionUserDisplay | null;
}) {
  const pathname = usePathname();
  const adminActive = pathname.startsWith("/admin");

  const isChildActive = (child: NavChild) =>
    child.exact
      ? pathname === child.href
      : pathname === child.href || pathname.startsWith(`${child.href}/`);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (id: string) =>
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-brand-border bg-brand-stage text-brand-off-white">
      <div className="border-b border-brand-border px-5 py-5">
        <BrandLogo showTagline vcfHref="/" />
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
        {isAdmin && (
          <Link
            href="/admin"
            className={clsx(linkBase, adminActive ? activeClasses : inactiveClasses)}
          >
            <Shield className="h-4 w-4 shrink-0" />
            Platform Admin
          </Link>
        )}

        {navItems.map((item) => {
          if (item.kind === "link") {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(linkBase, active ? activeClasses : inactiveClasses)}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          }

          const Icon = item.icon;
          const hasActiveChild = item.children.some(isChildActive);
          const open = openGroups[item.id] ?? hasActiveChild;

          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => toggleGroup(item.id)}
                aria-expanded={open}
                className={clsx(
                  linkBase,
                  "w-full",
                  hasActiveChild ? "text-white" : inactiveClasses
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronDown
                  className={clsx(
                    "h-4 w-4 shrink-0 transition-transform",
                    open ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>

              {open && (
                <div className="mt-1 flex flex-col gap-1 border-l border-white/10 pl-3 ml-4">
                  {item.children.map((child) => {
                    const active = isChildActive(child);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={clsx(
                          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          active ? activeClasses : inactiveClasses
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
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
