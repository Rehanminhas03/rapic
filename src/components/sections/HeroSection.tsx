"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { BLUR_EMERALD } from "@/lib/utils";
import { heroWord, fadeUp, stagger } from "@/lib/motion";
import { SITE } from "@/lib/site";

const HEADLINE_TOP = ["Find", "Premium", "Rentals"];
const HEADLINE_BOTTOM = ["in", "Islamabad."];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink-900 text-cream">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=2400&q=80&auto=format&fit=crop"
          alt="Islamabad skyline at dusk"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_EMERALD}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-900/55 to-emerald-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-center py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-gold-500/30 bg-ink-900/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-gold-300 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
            Islamabad · New Blue Area
          </motion.div>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            <span className="block">
              {HEADLINE_TOP.map((w, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  className="mr-3 inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {HEADLINE_BOTTOM.map((w, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  className="mr-3 inline-block"
                >
                  {i === 1 ? (
                    <span className="gradient-gold-text">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            Direct deals. Zero commission. A curated collection of premium
            apartments, offices, and villas across the capital — with{" "}
            <span className="text-gold-300">New Blue Area</span> at the centre.
          </motion.p>

          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="mt-9 flex flex-col gap-3 rounded-luxury border border-cream/15 bg-ink-900/55 p-3 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-2"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 sm:py-2">
              <Icon name="pin" size={18} className="text-gold-400" />
              <input
                type="text"
                placeholder="Sector · e.g. New Blue Area, F-7, DHA Phase 2"
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/45 focus:outline-none"
              />
            </div>
            <div className="hidden h-8 w-px bg-cream/15 sm:block" />
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 sm:py-2">
              <Icon name="compass" size={18} className="text-gold-400" />
              <select
                className="w-full bg-transparent text-sm text-cream focus:outline-none [&>option]:text-ink-900"
                defaultValue=""
              >
                <option value="">Any property type</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Villa</option>
                <option>Office</option>
                <option>Commercial</option>
              </select>
            </div>
            <Button
              href="/properties"
              variant="gold"
              size="md"
              iconRight={<Icon name="arrow-right" size={16} />}
              className="sm:ml-1"
            >
              Search
            </Button>
          </motion.form>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              href="/properties"
              variant="inverted"
              size="lg"
              iconRight={<Icon name="arrow-right" size={16} />}
            >
              Browse Properties
            </Button>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/85 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              <Icon name="upload" size={16} />
              List your property — free
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-y-6 border-t border-cream/10 pt-8 sm:grid-cols-4"
          >
            {[
              { k: "Landlords", v: SITE.stats.landlords },
              { k: "Properties", v: SITE.stats.properties },
              { k: "Sectors", v: SITE.stats.sectors },
              { k: "Tenant rating", v: SITE.stats.rating },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-cream/55">
                  {s.k}
                </dt>
                <dd className="mt-2 font-display text-2xl text-gold-300">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" />
    </section>
  );
}
