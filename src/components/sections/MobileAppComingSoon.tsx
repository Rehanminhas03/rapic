"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function MobileAppComingSoon() {
  return (
    <section
      className="relative isolate overflow-hidden bg-emerald-950 py-24 text-cream sm:py-28"
      id="mobile-app"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(6,95,70,0.5), transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge tone="gold">Coming Q4 · 2026</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl text-balance"
            >
              Islamabad&apos;s rental market —{" "}
              <span className="gradient-gold-text">in your pocket.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            >
              The RAPIC app brings every premium listing, instant landlord chat,
              and saved-search alerts to iOS and Android. Be the first to know
              when it launches.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-md flex-col gap-2 rounded-pill border border-cream/15 bg-ink-900/40 p-2 backdrop-blur sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/45 focus:outline-none"
              />
              <Button variant="gold" size="sm" iconRight={<Icon name="arrow-right" size={14} />}>
                Notify me
              </Button>
            </motion.form>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-3 rounded-pill border border-cream/15 bg-ink-900/40 px-5 py-3 text-sm">
                <Icon name="apple" size={20} />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/55">Soon on</span>
                  <span className="font-display">App Store</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-3 rounded-pill border border-cream/15 bg-ink-900/40 px-5 py-3 text-sm">
                <Icon name="android" size={20} />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/55">Soon on</span>
                  <span className="font-display">Google Play</span>
                </span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="relative mx-auto flex items-center justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="relative h-[520px] w-[260px] rounded-[44px] border-[10px] border-ink-900 bg-ink-900 shadow-luxury"
            >
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />
              <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop"
                  alt="RAPIC mobile app preview"
                  fill
                  sizes="260px"
                  placeholder="blur"
                  blurDataURL={BLUR_EMERALD}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink-900/95" />
                <div className="absolute inset-x-4 bottom-6 rounded-2xl bg-cream/95 p-4 text-ink-900 shadow-luxury">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700">
                    Skyline Penthouse
                  </p>
                  <p className="mt-1 font-display text-lg leading-tight">
                    PKR 1.25 Cr/mo
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-ink-500">
                    <span>4 · 5 · 4,800 sqft</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-cream">
                      <Icon name="arrow-up-right" size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="absolute -left-4 top-12 hidden h-32 w-44 rounded-2xl border border-gold-500/30 bg-ink-900/70 p-4 backdrop-blur sm:block"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold-400">
                Saved search
              </p>
              <p className="mt-2 font-display text-sm leading-tight">
                Blue Area · 2+ bed
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-cream/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
                3 new this week
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
