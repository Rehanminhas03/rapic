"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { Property, PropertyType } from "@/lib/types";

type FilterPreset = {
  id: string;
  label: string;
  test: (p: Property) => boolean;
};

const PRESETS: FilterPreset[] = [
  { id: "all", label: "All Listings", test: () => true },
  {
    id: "blue-area",
    label: "New Blue Area",
    test: (p) => Boolean(p.isNewBlueArea),
  },
  { id: "apt", label: "Apartments", test: (p) => p.type === "Apartment" },
  { id: "pent", label: "Penthouses", test: (p) => p.type === "Penthouse" },
  { id: "villa", label: "Villas", test: (p) => p.type === "Villa" },
  { id: "office", label: "Offices", test: (p) => p.type === "Office" },
  { id: "commercial", label: "Commercial", test: (p) => p.type === "Commercial" },
];

const TYPES: (PropertyType | "Any")[] = [
  "Any",
  "Apartment",
  "Penthouse",
  "Villa",
  "Office",
  "Commercial",
  "Townhouse",
];

export function PropertyFilters({ properties }: { properties: Property[] }) {
  const [preset, setPreset] = useState("all");
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("Any");

  const filtered = useMemo(() => {
    const p = PRESETS.find((x) => x.id === preset) ?? PRESETS[0];
    const q = query.trim().toLowerCase();
    return properties.filter((it) => {
      if (!p.test(it)) return false;
      if (type !== "Any" && it.type !== type) return false;
      if (q) {
        const blob = `${it.title} ${it.sector} ${it.type}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [properties, preset, query, type]);

  return (
    <div>
      <div className="rounded-luxury border border-emerald-900/10 bg-cream p-4 shadow-card sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-pill bg-cream-dark/40 px-4 py-2">
            <Icon name="search" size={18} className="text-emerald-700" />
            <input
              type="text"
              placeholder="Search by title, sector, type…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm placeholder:text-ink-500/55 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 rounded-pill bg-cream-dark/40 px-4 py-2 sm:w-auto">
            <Icon name="compass" size={16} className="text-emerald-700" />
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as (typeof TYPES)[number])
              }
              className="bg-transparent text-sm focus:outline-none"
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPreset(p.id)}
              className={cn(
                "rounded-pill border px-4 py-1.5 text-xs uppercase tracking-[0.16em] transition-all duration-300",
                preset === p.id
                  ? "border-emerald-700 bg-emerald-700 text-cream shadow-card"
                  : "border-emerald-900/10 bg-cream text-ink-700 hover:border-emerald-700/40",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-500">
        Showing <span className="font-medium text-ink-900">{filtered.length}</span>{" "}
        of {properties.length} listings.
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-luxury border border-emerald-900/10 bg-cream p-12 text-center">
          <p className="font-display text-2xl text-ink-900">
            No matches just yet.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            Try clearing filters or talk to a RAPIC specialist for an off-market option.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
