"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { BLUR_EMERALD } from "@/lib/utils";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setActive((a) => (a + 1) % images.length);
  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="group relative aspect-[4/3] overflow-hidden rounded-luxury bg-emerald-950 sm:aspect-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[active]}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={`${title} — image ${active + 1}`}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-pill bg-cream/90 px-3 py-1.5 text-xs font-medium text-ink-900 backdrop-blur">
            <Icon name="sparkles" size={12} className="text-gold-600" />
            Open gallery
          </span>
          <span className="absolute bottom-4 left-4 rounded-pill bg-ink-900/70 px-3 py-1 text-xs text-cream backdrop-blur">
            {active + 1} / {images.length}
          </span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-300 ${
                active === i
                  ? "ring-2 ring-gold-500 ring-offset-2 ring-offset-cream"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="200px"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover"
              />
              {i === 3 && images.length > 4 && (
                <span className="absolute inset-0 flex items-center justify-center bg-ink-900/60 font-display text-2xl text-cream">
                  +{images.length - 4}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/95 p-4 sm:p-8"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(false);
              }}
              className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur transition-colors hover:bg-cream/20"
              aria-label="Close gallery"
            >
              <Icon name="close" size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur transition-colors hover:bg-cream/20"
              aria-label="Previous image"
            >
              <Icon name="arrow-right" size={20} className="rotate-180" />
            </button>

            <motion.div
              key={images[active]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-luxury"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active]}
                alt={`${title} — image ${active + 1}`}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={BLUR_EMERALD}
                className="object-cover"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur transition-colors hover:bg-cream/20"
              aria-label="Next image"
            >
              <Icon name="arrow-right" size={20} />
            </button>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-pill bg-cream/10 px-4 py-1 text-xs text-cream/85 backdrop-blur">
              {active + 1} of {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
