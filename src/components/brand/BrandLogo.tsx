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
  const vcfSizeClass =
    variant === "full"
      ? "mx-auto h-11 w-auto max-w-[15rem]"
      : "mx-auto h-10 w-auto max-w-[14rem]";

  const vibeCodeFlowWordmark = (
    <BrandAsset
      src={BRAND_ASSETS.vcfLockupDark}
      alt="Vibe. Code. Flow."
      className={vcfSizeClass}
    />
  );

  const vcfLinkClass =
    "inline-flex rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-indigo-bright";

  const vibeCodeFlowMark = vcfHref ? (
    vcfHref.startsWith("http") ? (
      <a
        href={vcfHref}
        target="_blank"
        rel="noopener noreferrer"
        className={vcfLinkClass}
        aria-label="Vibe. Code. Flow."
      >
        {vibeCodeFlowWordmark}
      </a>
    ) : (
      <Link href={vcfHref} className={vcfLinkClass} aria-label="Vibe. Code. Flow.">
        {vibeCodeFlowWordmark}
      </Link>
    )
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
        <div className="flex justify-center">{vibeCodeFlowMark}</div>
        <div className="mt-5 flex justify-center">
          <CompanyLogoMark variant="full" href={companyHref ?? undefined} />
        </div>
        {showTagline && (
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            {PLATFORM_TAGLINE}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex justify-center">{vibeCodeFlowMark}</div>
      <div className="mt-4 flex justify-center">
        <CompanyLogoMark variant="sidebar" href={companyHref ?? undefined} />
      </div>
      {showTagline && (
        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          {PLATFORM_TAGLINE}
        </p>
      )}
    </div>
  );
}
