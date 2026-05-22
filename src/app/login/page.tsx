import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Brand } from "@/components/layout/Brand";
import { LoginForm } from "@/components/forms/LoginForm";
import { BLUR_EMERALD } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your RAPIC account — manage listings, saved searches, and enquiries.",
};

export default function LoginPage() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container size="full">
        <div className="grid overflow-hidden rounded-luxury border border-emerald-900/10 shadow-luxury lg:grid-cols-2">
          <div className="bg-cream p-8 sm:p-12 lg:p-16">
            <Brand />
            <h1 className="mt-12 font-display text-3xl leading-tight text-ink-900 sm:text-4xl text-balance">
              Welcome back.
            </h1>
            <p className="mt-3 max-w-sm text-sm text-ink-500">
              Sign in to manage your listings, saved searches, and direct
              tenant enquiries.
            </p>

            <div className="mt-10 max-w-md">
              <LoginForm />
            </div>

            <p className="mt-12 text-xs text-ink-500">
              Demo only · no real authentication is performed.
            </p>
          </div>

          <div className="relative hidden min-h-[640px] lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
              alt="RAPIC luxury rental"
              fill
              sizes="50vw"
              placeholder="blur"
              blurDataURL={BLUR_EMERALD}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/85 via-emerald-900/55 to-ink-900/80" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 50% at 20% 0%, rgba(212,175,55,0.18), transparent 60%)",
              }}
            />

            <div className="relative flex h-full flex-col justify-end p-12 text-cream">
              <Icon name="quote" size={32} className="text-gold-300" />
              <blockquote className="mt-4 max-w-md font-display text-2xl leading-tight">
                &ldquo;RAPIC made listing my New Blue Area floor effortless — and I
                signed a tenant directly within ten days.&rdquo;
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-cream/65">
                Hassan Raza · Landlord, New Blue Area
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
