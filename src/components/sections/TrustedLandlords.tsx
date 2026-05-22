"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/data/testimonials";

const PARTNER_LOGOS = [
  "Capital Holdings",
  "Margalla Estates",
  "Jinnah Tower",
  "Centaurus Group",
  "Zameen Partners",
  "Bahria Concierge",
  "DHA Hospitality",
  "Emerald Realty",
];

export function TrustedLandlords() {
  return (
    <section
      className="relative isolate overflow-hidden bg-cream py-24 sm:py-32"
      id="trusted"
    >
      <Container>
        <SectionHeading
          eyebrow="Trusted Partners"
          align="center"
          title={
            <>
              Backed by Islamabad&apos;s most respected{" "}
              <span className="text-emerald-700">landlords & developers.</span>
            </>
          }
        />

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
          <div className="flex w-max gap-12 [animation:var(--animate-marquee)]">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex h-14 items-center gap-3 whitespace-nowrap rounded-pill border border-emerald-900/10 bg-cream-dark/40 px-7 font-display text-lg text-ink-700"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-gold-500" />
                {logo}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="relative rounded-luxury border border-emerald-900/10 bg-cream p-7 shadow-card"
            >
              <Icon
                name="quote"
                size={28}
                className="text-gold-400"
              />
              <blockquote className="mt-4 font-display text-lg leading-snug text-ink-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-emerald-900/10 pt-5">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    placeholder="blur"
                    blurDataURL={BLUR_EMERALD}
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-display text-base text-ink-900">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-500">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
