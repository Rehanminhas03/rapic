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

const TILES = [
  {
    slug: "blue-area-skyline-penthouse",
    title: "Skyline Penthouse Walkthrough",
    duration: "3:42",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "dha-phase2-modern-villa",
    title: "DHA Phase 2 Villa Tour",
    duration: "2:58",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "blue-area-corner-office",
    title: "Grade A Office Floor",
    duration: "1:46",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "e7-hillside-residence",
    title: "E-7 Hillside Estate",
    duration: "4:21",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80&auto=format&fit=crop",
  },
];

export function VideoShowcase() {
  return (
    <section
      className="relative isolate overflow-hidden bg-emerald-950 py-24 text-cream sm:py-32"
      id="video"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 0%, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Walkthroughs"
          invert
          title={
            <>
              Step inside before you book —{" "}
              <span className="gradient-gold-text">cinematic property tours.</span>
            </>
          }
          description="Every premium listing on RAPIC includes a high-definition walkthrough, shot by our in-house team."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TILES.map((t, i) => (
            <motion.div key={t.slug} variants={fadeUp}>
              <Link
                href={`/properties/${t.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-luxury border border-cream/10"
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  placeholder="blur"
                  blurDataURL={BLUR_EMERALD}
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/25 to-transparent" />

                <div className="absolute left-4 top-4">
                  <Badge tone="ink">
                    <Icon name="play" size={10} />
                    Video
                  </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream text-emerald-900 shadow-luxury transition-transform duration-500 group-hover:scale-110">
                    <Icon name="play" size={22} className="translate-x-0.5" />
                    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold-500/40 opacity-0 group-hover:opacity-100" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-base leading-tight">{t.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/65">
                    {t.duration} · 4K
                  </p>
                </div>

                {i === 0 && (
                  <div className="absolute right-4 top-4">
                    <Badge tone="gold">Featured</Badge>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
