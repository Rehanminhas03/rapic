import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import type { IconName } from "@/components/ui/Icon";
import { PropertyCard } from "@/components/ui/PropertyCard";
import {
  PROPERTIES,
  getPropertyBySlug,
} from "@/lib/data/properties";
import { AMENITIES } from "@/lib/data/amenities";
import { formatMonthly } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { PropertyGallery } from "./_components/PropertyGallery";
import { PropertyActions } from "./_components/PropertyActions";

type PageProps = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({ id: p.slug }));
}

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyBySlug(id);
  if (!property) return { title: "Property not found" };
  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.images[0]],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyBySlug(id);
  if (!property) notFound();

  const amenities = property.amenities
    .map((id) => AMENITIES.find((a) => a.id === id))
    .filter((a): a is (typeof AMENITIES)[number] => Boolean(a));

  const related = PROPERTIES.filter(
    (p) => p.slug !== property.slug && p.sector === property.sector,
  )
    .concat(PROPERTIES.filter((p) => p.slug !== property.slug))
    .slice(0, 3);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(property.mapEmbedQuery)}&output=embed`;

  return (
    <>
      <section className="bg-cream pt-10 pb-6 sm:pt-14">
        <Container>
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-500">
            <Link href="/" className="hover:text-emerald-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-emerald-700">
              Properties
            </Link>
            <span>/</span>
            <span className="text-ink-700">{property.sector}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                {property.badges.map((b) => (
                  <Badge
                    key={b}
                    tone={b.toLowerCase().includes("blue") ? "emerald" : "gold"}
                  >
                    {b}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl text-balance">
                {property.title}
              </h1>
              <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="pin" size={14} className="text-emerald-700" />
                  {property.sector}, {property.city}
                </span>
                <span className="text-ink-300">·</span>
                <span>{property.type}</span>
                <span className="text-ink-300">·</span>
                <span>{property.areaSqft.toLocaleString()} sqft</span>
              </p>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                Monthly rent
              </p>
              <p className="font-display text-4xl text-emerald-800">
                {formatMonthly(property.pricePerMonth)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-10">
        <Container>
          <PropertyGallery images={property.images} title={property.title} />
        </Container>
      </section>

      <section className="bg-cream pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <div className="grid grid-cols-3 gap-3 rounded-luxury border border-emerald-900/10 bg-cream-dark/30 p-5 sm:p-6">
                {[
                  { icon: "bed" as IconName, label: "Bedrooms", value: property.bedrooms || "—" },
                  { icon: "bath" as IconName, label: "Bathrooms", value: property.bathrooms },
                  { icon: "ruler" as IconName, label: "Area", value: `${property.areaSqft.toLocaleString()} sqft` },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-start gap-2">
                    <IconTile name={s.icon} tone="emerald" size="sm" />
                    <p className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                      {s.label}
                    </p>
                    <p className="font-display text-xl text-ink-900">{s.value}</p>
                  </div>
                ))}
              </div>

              <article className="mt-10">
                <h2 className="font-display text-2xl text-ink-900">
                  About this property
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  {property.description}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  {property.longDescription}
                </p>
                {property.agentNote && (
                  <p className="mt-6 rounded-2xl border border-gold-500/30 bg-gold-50 p-4 text-sm text-emerald-900">
                    <span className="font-medium">From the owner:</span>{" "}
                    {property.agentNote}
                  </p>
                )}
              </article>

              <section className="mt-12">
                <h2 className="font-display text-2xl text-ink-900">Amenities</h2>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {amenities.map((a) => (
                    <li
                      key={a.id}
                      className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-cream p-4"
                    >
                      <IconTile
                        name={a.icon as IconName}
                        size="sm"
                        tone="emerald"
                      />
                      <span className="text-sm text-ink-700">{a.label}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {property.videoUrl && (
                <section className="mt-12">
                  <h2 className="font-display text-2xl text-ink-900">
                    Walkthrough video
                  </h2>
                  <div className="mt-5 aspect-video overflow-hidden rounded-luxury border border-emerald-900/10 bg-ink-900">
                    <iframe
                      src={property.videoUrl}
                      title={`${property.title} walkthrough`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </section>
              )}

              <section className="mt-12">
                <h2 className="font-display text-2xl text-ink-900">Location</h2>
                <p className="mt-2 text-sm text-ink-500">
                  {property.sector}, {property.city}
                </p>
                <div className="mt-5 aspect-video overflow-hidden rounded-luxury border border-emerald-900/10">
                  <iframe
                    src={mapSrc}
                    title="Property map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 self-start">
              <div className="rounded-luxury border border-emerald-900/10 bg-cream-dark/30 p-7 shadow-card">
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Direct deal · Zero commission
                </p>
                <p className="mt-3 font-display text-3xl text-emerald-800">
                  {formatMonthly(property.pricePerMonth)}
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  Available now · 12-month lease preferred
                </p>

                <div className="mt-6">
                  <PropertyActions title={property.title} />
                </div>

                <div className="mt-6 border-t border-emerald-900/10 pt-5 text-xs text-ink-500">
                  <p>Speak to RAPIC</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1 block font-display text-lg text-ink-900"
                  >
                    {SITE.phone}
                  </a>
                  <p className="mt-1">{SITE.hours}</p>
                </div>
              </div>

              <div className="mt-6 rounded-luxury border border-emerald-900/10 bg-emerald-700 p-7 text-cream">
                <Icon name="shield" size={22} className="text-gold-300" />
                <h3 className="mt-3 font-display text-xl">RAPIC Verified</h3>
                <p className="mt-2 text-sm text-cream/80">
                  Documentation reviewed. Owner identity confirmed. Listing
                  photographed within the last 90 days.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark/40 py-24">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-700">
                You may also like
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink-900">
                Similar premium rentals
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden text-sm font-medium text-emerald-700 hover:text-emerald-800 sm:inline-flex sm:items-center sm:gap-2"
            >
              View all <Icon name="arrow-up-right" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
