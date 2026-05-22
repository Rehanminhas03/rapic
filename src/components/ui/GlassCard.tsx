import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-luxury p-6 sm:p-8 transition-all duration-300",
        dark ? "glass-dark text-cream" : "glass text-ink-900",
        className,
      )}
    >
      {children}
    </div>
  );
}
