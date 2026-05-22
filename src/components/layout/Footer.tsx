import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FOOTER_LINKS } from "@/lib/data/nav";
import { SITE } from "@/lib/site";

const SOCIAL_ICONS: { key: keyof typeof SITE.socials; icon: IconName; label: string }[] = [
  { key: "instagram", icon: "instagram", label: "Instagram" },
  { key: "facebook", icon: "facebook", label: "Facebook" },
  { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
  { key: "x", icon: "x", label: "X" },
  { key: "youtube", icon: "youtube", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-900 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 0%, rgba(212,175,55,0.08), transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(6,95,70,0.35), transparent 60%)",
        }}
      />

      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand invert />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Islamabad&apos;s direct-deal rental platform. Curated properties across New
              Blue Area, F-sectors, DHA, Bahria, and Gulberg — connecting landlords
              and tenants without the middleman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.key}
                  href={SITE.socials[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all duration-300 hover:border-gold-500/60 hover:text-gold-400"
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {(Object.keys(FOOTER_LINKS) as Array<keyof typeof FOOTER_LINKS>).map(
            (group) => (
              <div key={group}>
                <h4 className="text-xs uppercase tracking-[0.22em] text-gold-400">
                  {group}
                </h4>
                <ul className="mt-5 flex flex-col gap-3">
                  {FOOTER_LINKS[group].map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/75 transition-colors hover:text-gold-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        <div className="mt-16 grid gap-6 border-t border-cream/10 pt-8 md:grid-cols-3">
          <div className="flex items-start gap-3 text-sm text-cream/75">
            <Icon name="pin" size={16} className="mt-0.5 text-gold-400" />
            <span>{SITE.address}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-cream/75">
            <Icon name="phone" size={16} className="mt-0.5 text-gold-400" />
            <a href={SITE.phoneHref} className="hover:text-gold-300">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-start gap-3 text-sm text-cream/75">
            <Icon name="mail" size={16} className="mt-0.5 text-gold-400" />
            <a href={SITE.emailHref} className="hover:text-gold-300">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 text-xs text-cream/55 md:flex-row md:items-center">
          <p>
            © {year} RAPIC · Rent A Property In Capital. Built for the new Islamabad.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-gold-500" />
            Zero commission · Direct deals · Trusted listings
          </p>
        </div>
      </Container>
    </footer>
  );
}
