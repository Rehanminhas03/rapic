import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/IconTile";
import type { IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUpSm, stagger } from "@/lib/motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About RAPIC",
  description:
    "Islamabad's direct-deal rental platform. Zero commission, free uploads, trusted listings — built around New Blue Area.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "handshake",
    title: "Direct",
    body: "We connect tenants and landlords without middlemen. Period.",
  },
  {
    icon: "shield",
    title: "Trusted",
    body: "Every listing is verified by our local team — no fake inventory.",
  },
  {
    icon: "wallet",
    title: "Fair",
    body: "Zero commission to tenants. Free uploads, forever, to landlords.",
  },
  {
    icon: "compass",
    title: "Local",
    body: "Islamabad-only. The capital is what we know, what we live in.",
  },
];

const MILESTONES = [
  {
    year: "2024",
    title: "Founded in Islamabad",
    detail: "A small team with one rule — no commissions, no inflated quotes.",
  },
  {
    year: "2025",
    title: "Blue Area focus",
    detail:
      "Partnered with the first six towers along Jinnah Avenue, ahead of completion.",
  },
  {
    year: "2026",
    title: "850+ premium listings",
    detail:
      "Now Islamabad's most trusted directory for premium rentals — and growing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About RAPIC"
        title={
          <>
            Built to make Islamabad&apos;s rental market{" "}
            <span className="gradient-gold-text">direct, fair, and finally simple.</span>
          </>
        }
        description="RAPIC is a capital-focused rental platform on a mission to remove the middlemen between landlords and tenants — and to put New Blue Area on every premium tenant's radar."
      />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    A direct-deal philosophy, in a market that needed one.
                  </>
                }
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600">
                <p>
                  For decades, Islamabad&apos;s rental market has run on a chain of
                  brokers, each one adding a fee, a delay, and a layer of
                  guesswork. We started RAPIC because that chain wasn&apos;t serving
                  anyone — not the families looking for the right home, not the
                  landlords who actually own the asset.
                </p>
                <p>
                  Today RAPIC operates as a curated, capital-only directory. We
                  verify every property ourselves, hold no exclusive listings,
                  and earn nothing from tenants. Our landlord partners list for
                  free — and they keep every rupee of the rent.
                </p>
                <p>
                  Our growing focus is{" "}
                  <span className="font-medium text-emerald-800">
                    New Blue Area
                  </span>
                  : Islamabad&apos;s emerging financial mile, where the next ten
                  years of commercial and residential demand will live.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/properties"
                  variant="primary"
                  iconRight={<Icon name="arrow-right" size={16} />}
                >
                  Browse the directory
                </Button>
                <Button href="/upload" variant="outline">
                  List with us
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1400&q=80&auto=format&fit=crop"
                  alt="Islamabad city view"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_EMERALD}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
              </div>
              <div className="absolute -left-4 bottom-8 hidden w-[260px] rounded-luxury bg-cream p-6 shadow-luxury sm:block">
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Trust rating
                </p>
                <p className="mt-2 font-display text-3xl text-emerald-800">
                  {SITE.stats.rating}
                </p>
                <p className="mt-1 text-xs text-ink-500">From 380+ reviews</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark/40 py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            align="center"
            title={<>Four values, no compromise.</>}
          />
          <Reveal
            variants={stagger}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map((v) => (
              <Reveal
                key={v.title}
                variants={fadeUpSm}
                className="rounded-luxury border border-emerald-900/10 bg-cream p-6"
              >
                <IconTile name={v.icon} size="lg" tone="emerald" />
                <h3 className="mt-5 font-display text-xl text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container size="lg">
          <SectionHeading
            eyebrow="Milestones"
            title={<>A short, focused story so far.</>}
          />
          <ol className="mt-12 space-y-8 border-l border-emerald-900/15 pl-8 sm:pl-10">
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[42px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-cream ring-4 ring-emerald-700 sm:-left-[52px]" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700">
                  {m.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {m.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
