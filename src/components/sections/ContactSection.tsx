import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";
import { fadeUpSm, stagger } from "@/lib/motion";

const CHANNELS = [
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: SITE.whatsapp,
    href: whatsappLink(
      "Hi RAPIC, I'd like to find a rental in Islamabad.",
    ),
    accent: "from-emerald-500/15 to-emerald-700/10",
    external: true,
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    accent: "from-gold-500/15 to-gold-400/10",
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
    accent: "from-emerald-500/15 to-emerald-700/10",
  },
  {
    icon: "pin" as const,
    label: "Office",
    value: SITE.address,
    href: "https://maps.google.com/?q=Blue+Area+Islamabad",
    accent: "from-gold-500/15 to-gold-400/10",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section className="bg-cream py-24 sm:py-32" id="contact">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title={
                <>
                  Speak to RAPIC — <span className="text-emerald-700">direct.</span>
                </>
              }
              description="Whether you're listing a property or hunting for one, we're a message away. WhatsApp is fastest; phone lines are open Mon–Sat."
            />

            <Reveal
              variants={stagger}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {CHANNELS.map((c) => (
                <Reveal
                  key={c.label}
                  variants={fadeUpSm}
                  as="article"
                  className={`group relative overflow-hidden rounded-luxury border border-emerald-900/10 bg-gradient-to-br ${c.accent} p-6 transition-shadow duration-500 hover:shadow-card`}
                >
                  <Icon name={c.icon} size={22} className="text-emerald-800" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-1 block font-display text-lg leading-tight text-ink-900 underline-offset-4 hover:underline"
                  >
                    {c.value}
                  </a>
                </Reveal>
              ))}
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={whatsappLink(
                  "Hi RAPIC, I'd like to find a rental in Islamabad.",
                )}
                external
                variant="primary"
                iconLeft={<Icon name="whatsapp" size={16} />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href={SITE.phoneHref}
                variant="outline"
                iconLeft={<Icon name="phone" size={16} />}
              >
                Call us
              </Button>
            </div>

            <div className="mt-8 text-xs text-ink-500">{SITE.hours}</div>
          </div>

          <div className="relative">
            <div className="rounded-luxury border border-emerald-900/10 bg-cream-dark/30 p-7 sm:p-10 shadow-card">
              <h3 className="font-display text-2xl text-ink-900">
                Send an enquiry
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                We reply within one business day — usually a lot sooner.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
