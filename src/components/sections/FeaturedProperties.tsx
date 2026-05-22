import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { stagger } from "@/lib/motion";
import { getFeaturedProperties } from "@/lib/data/properties";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();
  return (
    <section className="relative bg-cream py-24 sm:py-32" id="featured">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Listings"
            title={
              <>
                Hand-picked premium homes,{" "}
                <span className="text-emerald-700">ready to view.</span>
              </>
            }
            description="A curated selection from this month's directory — verified by our team, listed directly by owners."
          />
          <Button
            href="/properties"
            variant="outline"
            iconRight={<Icon name="arrow-right" size={16} />}
          >
            View all properties
          </Button>
        </div>

        <Reveal
          variants={stagger}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
