import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]",
            invert ? "text-gold-400" : "text-emerald-700",
            align === "center" && "justify-center",
          )}
        >
          <span className="inline-block h-px w-8 bg-gold-500/60" />
          <span>{eyebrow}</span>
          <span className="inline-block h-px w-8 bg-gold-500/60" />
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl mt-4 text-balance",
          invert ? "text-cream" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed text-pretty",
            invert ? "text-cream/70" : "text-ink-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
