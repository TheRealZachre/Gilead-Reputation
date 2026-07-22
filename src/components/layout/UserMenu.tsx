"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export type SessionUserDisplay = {
  name?: string | null;
  email?: string | null;
};

export function UserMenu({ user }: { user?: SessionUserDisplay | null }) {
  if (!user?.email && !user?.name) return null;

  return (
    <div className="space-y-2">
      <div className="min-w-0">
        {user.name && (
          <p className="truncate text-sm font-medium text-brand-off-white">
            {user.name}
          </p>
        )}
        {user.email && (
          <p className="truncate text-xs text-brand-muted">{user.email}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => void signOut({ callbackUrl: "/login" })}
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-off-white"
      >
        <LogOut className="h-3.5 w-3.5 shrink-0" />
        Sign out
      </button>
    </div>
  );
}
