import { cn } from "@/lib/utils";

type Tone = "gold" | "emerald" | "ink" | "cream";

const toneMap: Record<Tone, string> = {
  gold: "bg-gold-500/95 text-emerald-950",
  emerald: "bg-emerald-700 text-cream",
  ink: "bg-ink-900/85 text-cream",
  cream: "bg-cream/90 text-ink-900 border border-ink-900/10",
};

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-sm",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
