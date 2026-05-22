import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROPERTIES } from "@/lib/data/properties";
import { PropertyFilters } from "./_components/PropertyFilters";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse luxury apartments, penthouses, villas, and offices for rent across Islamabad — with a curated New Blue Area collection.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Premium Directory"
        title={
          <>
            Every premium rental in Islamabad —{" "}
            <span className="gradient-gold-text">in one place.</span>
          </>
        }
        description="Apartments, penthouses, villas, offices, and commercial floors. Filter by sector or type, then connect with the owner directly."
      />
      <section className="-mt-16 pb-24 sm:-mt-20 sm:pb-32">
        <Container>
          <PropertyFilters properties={PROPERTIES} />
        </Container>
      </section>
    </>
  );
}
