import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="RAPIC — home"
    >
      <span
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.05]",
          invert
            ? "bg-cream text-emerald-900"
            : "bg-emerald-900 text-cream",
        )}
      >
        <span className="font-display text-base font-bold tracking-tight">R</span>
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-gold-500 ring-2 ring-cream" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-[-0.01em]",
            invert ? "text-cream" : "text-ink-900",
          )}
        >
          RAPIC
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] uppercase tracking-[0.22em]",
            invert ? "text-cream/60" : "text-ink-500",
          )}
        >
          Rent · Capital
        </span>
      </span>
    </Link>
  );
}
