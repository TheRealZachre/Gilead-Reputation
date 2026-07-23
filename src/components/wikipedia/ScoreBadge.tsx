import clsx from "clsx";

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md";
}

function toneForScore(score: number): string {
  if (score >= 75) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (score >= 50) return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-rose-200 bg-rose-50 text-rose-700";
}

export function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(score)));

  return (
    <div
      className={clsx(
        "flex shrink-0 flex-col items-center justify-center rounded-full border font-semibold",
        toneForScore(clamped),
        size === "md" ? "h-16 w-16" : "h-12 w-12"
      )}
    >
      <span className={clsx("leading-none", size === "md" ? "text-xl" : "text-base")}>
        {clamped}
      </span>
      <span className={clsx("leading-none opacity-70", size === "md" ? "text-[10px]" : "text-[9px]")}>
        /100
      </span>
    </div>
  );
}
