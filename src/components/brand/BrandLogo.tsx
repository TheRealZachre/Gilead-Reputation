import Link from "next/link";
import { BRAND_ASSETS } from "@/lib/brand";
import { PLATFORM_NAME, PLATFORM_TAGLINE } from "@/lib/company";

interface BrandLogoProps {
  variant?: "sidebar" | "compact" | "full";
  showTagline?: boolean;
  vcfHref?: string;
}

function BrandAsset({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

function CompanyLogoMark({
  variant,
  href = "/",
}: {
  variant: BrandLogoProps["variant"];
  href?: string;
}) {
  const mark = (
    <div
      className={
        variant === "full"
          ? "mx-auto inline-flex items-center justify-center rounded-lg bg-white px-4 py-3"
          : "inline-flex items-center justify-center rounded-lg bg-white px-3 py-2"
      }
    >
      <BrandAsset
        src={BRAND_ASSETS.gileadLogo}
        alt="Gilead Sciences"
        className={
          variant === "full"
            ? "h-16 w-auto object-contain"
            : "h-12 w-auto object-contain"
        }
      />
    </div>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      className="inline-block rounded-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-indigo-bright"
      aria-label="Gilead Sciences"
    >
      {mark}
    </Link>
  );
}

export function BrandLogo({
  variant = "sidebar",
  showTagline = true,
  vcfHref,
  companyHref = "/",
}: BrandLogoProps & { companyHref?: string | null }) {
  const vibeCodeFlowWordmark = (
    <BrandAsset
      src={BRAND_ASSETS.wordmarkWhite}
      alt="Vibe. Code. Flow."
      className={
        variant === "full"
          ? "mx-auto mt-3 h-7 w-auto max-w-[12rem]"
          : "mt-2.5 h-7 w-auto max-w-[12rem]"
      }
    />
  );

  const vibeCodeFlowMark = vcfHref ? (
    <Link
      href={vcfHref}
      className="inline-block rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-indigo-bright"
      aria-label="Vibe. Code. Flow."
    >
      {vibeCodeFlowWordmark}
    </Link>
  ) : (
    vibeCodeFlowWordmark
  );

  if (variant === "compact") {
    return (
      <BrandAsset
        src={BRAND_ASSETS.iconDark}
        alt={PLATFORM_NAME}
        className="h-9 w-9 shrink-0"
      />
    );
  }

  if (variant === "full") {
    return (
      <div className="text-center">
        <CompanyLogoMark variant="full" href={companyHref ?? undefined} />
        {showTagline && (
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            {PLATFORM_TAGLINE}
          </p>
        )}
        {vibeCodeFlowMark}
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <CompanyLogoMark variant="sidebar" href={companyHref ?? undefined} />
      {showTagline && (
        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          {PLATFORM_TAGLINE}
        </p>
      )}
      {vibeCodeFlowMark}
    </div>
  );
}
