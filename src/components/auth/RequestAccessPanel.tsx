import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ACCESS_MESSAGE =
  "Hi RAPIC, I'd like to upload a property on rapic.pk. Could you set me up with landlord credentials?";

export function RequestAccessPanel({
  variant = "light",
  className,
  title = "Don't have credentials yet?",
  description = "Uploading is reserved for verified RAPIC landlord partners. Reach out and our team will set you up — usually within one business day.",
}: {
  variant?: "light" | "dark";
  className?: string;
  title?: string;
  description?: string;
}) {
  const wa = whatsappLink(ACCESS_MESSAGE);
  const isDark = variant === "dark";

  return (
    <aside
      className={cn(
        "rounded-luxury border p-6 sm:p-7",
        isDark
          ? "border-gold-500/30 bg-ink-900 text-cream"
          : "border-gold-500/30 bg-cream-dark/40 text-ink-900",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            isDark ? "bg-gold-500/15 text-gold-300" : "bg-gold-500/15 text-gold-700",
          )}
        >
          <Icon name="sparkles" size={16} />
        </span>
        <p
          className={cn(
            "text-[11px] uppercase tracking-[0.22em]",
            isDark ? "text-gold-300" : "text-emerald-700",
          )}
        >
          Need access?
        </p>
      </div>

      <h3
        className={cn(
          "mt-4 font-display text-xl leading-tight sm:text-2xl",
          isDark ? "text-cream" : "text-ink-900",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          isDark ? "text-cream/75" : "text-ink-500",
        )}
      >
        {description}
      </p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-pill bg-emerald-700 px-5 py-3 text-sm font-medium text-cream transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5"
        >
          <Icon name="whatsapp" size={16} />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.18em] text-cream/65">
              WhatsApp
            </span>
            <span>Chat with us</span>
          </span>
        </a>
        <a
          href={SITE.phoneHref}
          className={cn(
            "group inline-flex items-center gap-3 rounded-pill px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
            isDark
              ? "bg-gold-500 text-emerald-950 hover:bg-gold-400"
              : "bg-ink-900 text-cream hover:bg-ink-800",
          )}
        >
          <Icon name="phone" size={16} />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.18em]",
                isDark ? "text-emerald-900/70" : "text-cream/65",
              )}
            >
              Phone
            </span>
            <span>Call now</span>
          </span>
        </a>
      </div>

      <div
        className={cn(
          "mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs",
          isDark
            ? "border-cream/10 text-cream/60"
            : "border-emerald-900/10 text-ink-500",
        )}
      >
        <a
          href={SITE.emailHref}
          className={cn(
            "inline-flex items-center gap-1.5 hover:underline",
            isDark ? "text-gold-300" : "text-emerald-700",
          )}
        >
          <Icon name="mail" size={12} />
          {SITE.email}
        </a>
        <Link
          href="/contact"
          className={cn(
            "inline-flex items-center gap-1.5",
            isDark ? "text-cream/75 hover:text-gold-300" : "hover:text-emerald-700",
          )}
        >
          Send a written enquiry
          <Icon name="arrow-up-right" size={12} />
        </Link>
      </div>
    </aside>
  );
}
