import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "ghost" | "outline" | "inverted";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
};

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all duration-300 will-change-transform focus-visible:outline-none";

const sizeMap: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-emerald-700 text-cream shadow-[0_10px_30px_-12px_rgba(4,120,87,0.6)] hover:bg-emerald-800 hover:shadow-[0_18px_40px_-12px_rgba(4,120,87,0.55)] hover:-translate-y-0.5",
  gold:
    "bg-gold-500 text-emerald-950 shadow-[0_10px_30px_-12px_rgba(212,175,55,0.7)] hover:bg-gold-400 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink-900 hover:bg-emerald-900/5",
  outline:
    "border border-emerald-900/15 bg-cream/60 text-ink-900 hover:border-emerald-700/40 hover:bg-cream",
  inverted:
    "bg-cream text-ink-900 hover:bg-white hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  iconLeft,
  iconRight,
  ...rest
}: AnchorProps | ButtonProps) {
  const cls = cn(base, sizeMap[size], variantMap[variant], className);
  const inner = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, external, ...anchor } = rest as AnchorProps;
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...anchor}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(anchor as Record<string, unknown>)}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
