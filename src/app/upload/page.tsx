import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import type { IconName } from "@/components/ui/Icon";
import { UploadGate } from "@/components/auth/UploadGate";

export const metadata: Metadata = {
  title: "Upload Property",
  description:
    "List your Islamabad property with RAPIC — free uploads, zero commission, verified by our local team.",
};

const PERKS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "wallet",
    title: "Free, forever",
    body: "No listing fee, no renewal fee. Ever.",
  },
  {
    icon: "bolt",
    title: "Verified in 24 hours",
    body: "Our team reviews your details and books photography within a day.",
  },
  {
    icon: "shield",
    title: "Vetted enquiries only",
    body: "We pre-qualify tenants before they reach you.",
  },
];

export default function UploadPage() {
  return (
    <>
      <PageHeader
        eyebrow="List With RAPIC"
        title={
          <>
            Upload your property —{" "}
            <span className="gradient-gold-text">free, forever.</span>
          </>
        }
        description="Tell us about your property and one of our specialists will verify the listing, arrange complimentary photography, and connect you to qualified tenants directly."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {PERKS.map((p) => (
            <div
              key={p.title}
              className="rounded-luxury border border-cream/15 bg-ink-900/40 p-5 backdrop-blur"
            >
              <IconTile name={p.icon} size="sm" tone="gold" />
              <p className="mt-3 font-display text-base text-cream">{p.title}</p>
              <p className="mt-1 text-sm text-cream/70">{p.body}</p>
            </div>
          ))}
        </div>
      </PageHeader>

      <section className="-mt-16 pb-24 sm:-mt-20 sm:pb-32">
        <Container size="lg">
          <div className="rounded-luxury border border-emerald-900/10 bg-cream p-8 shadow-card sm:p-12">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-emerald-700">
              <Icon name="upload" size={14} />
              Property submission
            </div>
            <h2 className="mt-3 font-display text-3xl text-ink-900">
              Tell us about your property
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-500">
              Uploading is restricted to verified RAPIC landlord partners.
              Sign in with your landlord credentials to continue.
            </p>
            <div className="mt-10">
              <UploadGate />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
