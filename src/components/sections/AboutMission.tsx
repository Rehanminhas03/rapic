import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUpSm, stagger } from "@/lib/motion";

const PILLARS = [
  {
    title: "Zero commission to tenants",
    body: "No hidden fees, no kickbacks. The platform stays free for renters.",
  },
  {
    title: "Direct landlord access",
    body: "Every listing connects you straight to the verified owner.",
  },
  {
    title: "Islamabad-focused, always",
    body: "We specialise in the capital — and especially New Blue Area.",
  },
  {
    title: "Free uploads, lifetime",
    body: "Landlords list, renew, and re-list at no cost. Ever.",
  },
];

export function AboutMission() {
  return (
    <section className="bg-cream py-24 sm:py-32" id="about">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-luxury">
              <Image
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1400&q=80&auto=format&fit=crop"
                alt="Modern Islamabad interior"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 right-4 hidden w-[280px] rounded-luxury bg-ink-900 p-6 text-cream shadow-luxury sm:block">
              <p className="text-xs uppercase tracking-[0.22em] text-gold-400">
                Our promise
              </p>
              <p className="mt-3 font-display text-xl leading-tight">
                A direct deal — or no deal at all.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About RAPIC"
              title={
                <>
                  Built to take the middlemen out of Islamabad&apos;s rental market.
                </>
              }
              description="RAPIC was founded on a simple conviction — that landlords and tenants deserve to meet directly, without paying for the privilege. Today we are Islamabad's most trusted directory of premium rentals, with a deepening footprint across New Blue Area."
            />

            <Reveal
              variants={stagger}
              className="mt-10 grid gap-5 sm:grid-cols-2"
            >
              {PILLARS.map((p) => (
                <Reveal
                  key={p.title}
                  variants={fadeUpSm}
                  className="rounded-2xl border border-emerald-900/10 bg-cream-dark/30 p-5"
                >
                  <div className="flex items-center gap-2 font-display text-base text-emerald-800">
                    <Icon name="check" size={16} />
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/about"
                variant="primary"
                iconRight={<Icon name="arrow-right" size={16} />}
              >
                Read our story
              </Button>
              <Button href="/upload" variant="outline">
                Become a landlord partner
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
