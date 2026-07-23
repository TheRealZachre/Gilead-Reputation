import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-brand-ink/10 bg-[#FFFEFB] px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-brand-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-brand-muted">{subtitle}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
