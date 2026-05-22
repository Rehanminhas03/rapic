"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PILLARS = [
  {
    label: "Grade A Offices",
    detail: "LEED-aspirant towers, fibre redundancy, executive parking.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    label: "Signature Residences",
    detail: "Full-floor penthouses and serviced apartments above the skyline.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    label: "Flagship Retail",
    detail: "Ground-floor frontage on Jinnah Avenue with high footfall.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80&auto=format&fit=crop",
  },
];

export function BlueAreaShowcase() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink-900 py-28 text-cream"
      id="blue-area"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(6,95,70,0.5), transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge tone="gold">New Blue Area · Islamabad</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl text-balance"
            >
              The capital&apos;s new <span className="gradient-gold-text">financial mile</span> — leased directly.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              From glass towers along Jinnah Avenue to signature penthouses above
              Capital Square, New Blue Area is the heart of Islamabad&apos;s next
              decade. RAPIC connects you to listings here before they ever hit a
              broker&apos;s desk.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {[
                "Verified owners only",
                "Pre-vetted documentation",
                "Direct viewings, no chains",
                "Concierge handover",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-cream/85">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <Icon name="check" size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/properties?sector=blue-area"
                variant="gold"
                iconRight={<Icon name="arrow-right" size={16} />}
              >
                Explore Blue Area
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                className="text-cream hover:bg-cream/10"
                iconRight={<Icon name="arrow-up-right" size={16} />}
              >
                Speak to a specialist
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="relative"
          >
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-luxury border border-cream/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1400&q=80&auto=format&fit=crop"
                alt="New Blue Area Islamabad tower at dusk"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-gold-300">
                    Active listings
                  </p>
                  <p className="font-display text-3xl">142</p>
                </div>
                <Badge tone="cream">Updated daily</Badge>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 grid grid-cols-3 gap-4"
            >
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-cream/10"
                >
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    sizes="180px"
                    placeholder="blur"
                    blurDataURL={BLUR_EMERALD}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-display text-sm leading-tight">{p.label}</p>
                    <p className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-cream/65 sm:block">
                      {p.detail.split(",")[0]}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
