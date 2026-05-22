import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { BLUR_EMERALD } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion";
import { BLOG_POSTS } from "@/lib/data/blog";

export function RentalTipsPreview() {
  return (
    <section className="bg-cream-dark/40 py-24 sm:py-32" id="tips">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights & Tips"
            title={
              <>
                Rental intelligence for{" "}
                <span className="text-emerald-700">smarter decisions.</span>
              </>
            }
            description="Market notes, tenant guides, and landlord playbooks — written by our team on the ground in Islamabad."
          />
          <Link
            href="#tips"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            Read the journal <Icon name="arrow-up-right" size={16} />
          </Link>
        </div>

        <Reveal
          variants={stagger}
          className="mt-14 grid gap-7 md:grid-cols-3"
        >
          {BLOG_POSTS.map((post, i) => (
            <Reveal
              key={post.slug}
              variants={fadeUp}
              as="article"
              className="group flex h-full flex-col overflow-hidden rounded-luxury bg-cream shadow-card transition-shadow duration-500 hover:shadow-luxury"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_EMERALD}
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute left-4 top-4">
                  <Badge tone={i === 0 ? "gold" : "cream"}>{post.category}</Badge>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  {post.date} · {post.readMinutes} min read
                </p>
                <h3 className="font-display text-xl leading-tight text-ink-900">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {post.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-emerald-700">
                  Read article
                  <Icon name="arrow-up-right" size={14} />
                </div>
              </div>
            </Reveal>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
