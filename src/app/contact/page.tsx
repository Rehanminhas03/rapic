import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RAPIC — WhatsApp, phone, email, or visit our New Blue Area office in Islamabad.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact RAPIC"
        title={
          <>
            We&apos;re a message away —{" "}
            <span className="gradient-gold-text">direct, no scripts.</span>
          </>
        }
        description="WhatsApp is the fastest channel during business hours. Phone lines stay open Mon–Sat."
      />

      <section className="-mt-16 pb-24 sm:-mt-20 sm:pb-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-luxury border border-emerald-900/10 bg-cream p-8 shadow-card sm:p-10">
              <h2 className="font-display text-3xl text-ink-900">
                Send a direct enquiry
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Tell us what you&apos;re looking for — sector, bedrooms, budget,
                move-in date. We&apos;ll match you with a verified owner directly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-luxury border border-emerald-900/10 bg-ink-900 p-8 text-cream">
                <Icon name="whatsapp" size={26} className="text-gold-300" />
                <h3 className="mt-4 font-display text-xl">WhatsApp the team</h3>
                <p className="mt-2 text-sm text-cream/75">
                  Replies typically within 15 minutes during business hours.
                </p>
                <Button
                  href={whatsappLink(
                    "Hi RAPIC, I'd like to find a rental in Islamabad.",
                  )}
                  external
                  variant="gold"
                  className="mt-5"
                  iconLeft={<Icon name="whatsapp" size={16} />}
                >
                  Open chat
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon="phone"
                  label="Phone"
                  value={SITE.phone}
                  href={SITE.phoneHref}
                />
                <ContactCard
                  icon="mail"
                  label="Email"
                  value={SITE.email}
                  href={SITE.emailHref}
                />
              </div>

              <div className="rounded-luxury border border-emerald-900/10 bg-cream p-7 shadow-card">
                <Icon name="pin" size={22} className="text-emerald-700" />
                <h3 className="mt-3 font-display text-lg text-ink-900">
                  Visit our office
                </h3>
                <p className="mt-2 text-sm text-ink-500">{SITE.address}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-ink-500">
                  Hours
                </p>
                <p className="mt-1 text-sm text-ink-700">{SITE.hours}</p>
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-luxury border border-emerald-900/10">
                <iframe
                  src="https://www.google.com/maps?q=Blue+Area,+Islamabad,+Pakistan&output=embed"
                  title="RAPIC Islamabad office"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: "phone" | "mail";
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-luxury border border-emerald-900/10 bg-cream p-5 transition-shadow duration-300 hover:shadow-card"
    >
      <Icon name={icon} size={20} className="text-emerald-700" />
      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
        {label}
      </p>
      <p className="mt-1 font-display text-base text-ink-900 group-hover:text-emerald-800">
        {value}
      </p>
    </a>
  );
}
