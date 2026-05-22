"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SECTORS } from "@/lib/data/sectors";

export function SectorsShowcase() {
  return (
    <section className="bg-cream py-24 sm:py-32" id="sectors">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Islamabad Sectors"
            title={
              <>
                Every premium sector,{" "}
                <span className="text-emerald-700">one platform.</span>
              </>
            }
            description="From the embassy lanes of F-6 to the new towers of Blue Area — explore Islamabad's most sought-after addresses."
          />
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            Browse all sectors <Icon name="arrow-up-right" size={16} />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SECTORS.map((s, i) => (
            <motion.article
              key={s.id}
              variants={fadeUp}
              className="group relative aspect-[3/4] overflow-hidden rounded-luxury border border-emerald-900/10 bg-ink-900"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover opacity-90 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

              {i === 0 && (
                <div className="absolute right-4 top-4">
                  <Badge tone="gold">Flagship</Badge>
                </div>
              )}

              <Link
                href={`/properties?sector=${s.id}`}
                className="absolute inset-0 flex flex-col justify-end p-6 text-cream"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold-300">
                  {s.listings} listings
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight">
                  {s.name}
                </h3>
                <p className="mt-2 max-w-[18ch] text-xs text-cream/75">
                  {s.tagline}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-300">
                  Explore
                  <span className="h-px w-8 bg-gold-300 transition-all duration-500 group-hover:w-16" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
