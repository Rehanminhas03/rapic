"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Icon } from "./Icon";
import { fadeUp } from "@/lib/motion";
import { BLUR_EMERALD, formatMonthly } from "@/lib/utils";
import type { Property } from "@/lib/types";

export function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-luxury bg-cream shadow-card transition-shadow duration-500 hover:shadow-luxury"
    >
      <Link
        href={`/properties/${property.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-emerald-950"
        aria-label={property.title}
      >
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={BLUR_EMERALD}
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {property.badges.slice(0, 2).map((b) => (
            <Badge key={b} tone={b.toLowerCase().includes("blue") ? "emerald" : "gold"}>
              {b}
            </Badge>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-cream">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-cream/85">
            <Icon name="pin" size={14} />
            {property.sector}
          </div>
          <div className="rounded-pill bg-cream/95 px-3 py-1 text-xs font-medium text-emerald-900">
            {property.type}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-xl leading-tight text-ink-900">
            <Link
              href={`/properties/${property.slug}`}
              className="transition-colors duration-300 hover:text-emerald-700"
            >
              {property.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">
            {property.description}
          </p>
        </div>

        <ul className="flex items-center gap-5 text-xs text-ink-600">
          {property.bedrooms > 0 && (
            <li className="flex items-center gap-1.5">
              <Icon name="bed" size={16} className="text-emerald-700" />
              <span>{property.bedrooms} Bed</span>
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Icon name="bath" size={16} className="text-emerald-700" />
            <span>{property.bathrooms} Bath</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon name="ruler" size={16} className="text-emerald-700" />
            <span>{property.areaSqft.toLocaleString()} sqft</span>
          </li>
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-emerald-900/10 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-500">
              Monthly
            </p>
            <p className="font-display text-2xl text-emerald-800">
              {formatMonthly(property.pricePerMonth)}
            </p>
          </div>
          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-pill bg-emerald-900/5 px-4 text-xs font-medium uppercase tracking-[0.16em] text-emerald-800 transition-colors duration-300 hover:bg-emerald-700 hover:text-cream"
          >
            View
            <Icon name="arrow-up-right" size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
