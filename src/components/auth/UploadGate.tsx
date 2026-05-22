"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { UploadForm } from "@/components/forms/UploadForm";
import { RequestAccessPanel } from "@/components/auth/RequestAccessPanel";

export function UploadGate() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-luxury border border-gold-500/30 bg-cream-dark/30 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-5">
            <IconTile name="shield" size="lg" tone="gold" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-700">
                Authorised access only
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink-900 sm:text-3xl">
                Sign in to list a property on RAPIC.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-600">
                Uploading is reserved for verified landlord partners. Already
                a partner? Sign in to continue.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              href="/login?next=/upload"
              variant="primary"
              iconLeft={<Icon name="shield" size={16} />}
            >
              Sign in to continue
            </Button>
            <Button
              href="/contact"
              variant="outline"
              iconRight={<Icon name="arrow-up-right" size={14} />}
            >
              Visit contact page
            </Button>
          </div>
        </div>

        <RequestAccessPanel
          title="No account yet? Talk to us directly."
          description="Developers, landlords, and agencies — message RAPIC to get verified and unlock uploads. We typically respond within 15 minutes during business hours."
        />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-700/20 bg-emerald-700/5 px-5 py-3 text-sm">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-cream">
            <Icon name="check" size={14} />
          </span>
          <span className="text-ink-700">
            Signed in as{" "}
            <span className="font-display text-emerald-800">
              {user.username}
            </span>{" "}
            · landlord access granted.
          </span>
        </div>
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            logout();
            window.location.href = "/";
          }}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-emerald-700 hover:text-emerald-900"
        >
          Sign out <Icon name="arrow-up-right" size={12} />
        </Link>
      </div>
      <UploadForm />
    </div>
  );
}
