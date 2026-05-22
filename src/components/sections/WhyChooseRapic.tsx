"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import type { IconName } from "@/components/ui/Icon";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Reason = { icon: IconName; title: string; body: string };

const REASONS: Reason[] = [
  {
    icon: "wallet",
    title: "Zero Commission",
    body: "Tenants never pay a platform fee. Save lakhs over the lease term.",
  },
  {
    icon: "handshake",
    title: "Direct Contact",
    body: "Speak to landlords directly — no agents in the middle of your deal.",
  },
  {
    icon: "shield",
    title: "Trusted Listings",
    body: "Every property is verified by RAPIC's local team before going live.",
  },
  {
    icon: "upload",
    title: "Free Uploads",
    body: "Landlords list unlimited properties for free, forever.",
  },
  {
    icon: "bolt",
    title: "Fast Response",
    body: "Hot leads answered within 30 minutes during business hours.",
  },
  {
    icon: "compass",
    title: "Islamabad Specialists",
    body: "A capital-only platform — with our compass set on New Blue Area.",
  },
];

export function WhyChooseRapic() {
  return (
    <section className="relative bg-cream-dark/40 py-24 sm:py-32" id="why">
      <Container>
        <SectionHeading
          eyebrow="Why RAPIC"
          align="center"
          title={
            <>
              Six reasons Islamabad&apos;s landlords and tenants choose us first.
            </>
          }
          description="A direct-deal platform built around the realities of renting in the capital."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-luxury border border-emerald-900/10 bg-cream p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-700/0 transition-colors duration-500 group-hover:bg-emerald-700/5"
              />
              <IconTile name={r.icon} size="lg" tone="emerald" />
              <h3 className="mt-5 font-display text-xl text-ink-900">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {r.body}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more
                <span className="h-px w-8 bg-emerald-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
