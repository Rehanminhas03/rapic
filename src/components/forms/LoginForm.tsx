"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function LoginForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-700/30 bg-emerald-700/10 p-6 text-center">
        <Icon name="check" size={20} className="text-emerald-700" />
        <p className="mt-3 font-display text-lg text-ink-900">
          Demo only — accounts will be live in the next release.
        </p>
        <p className="mt-2 text-sm text-ink-500">
          For now, please WhatsApp or call us to manage your listings.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => setSubmitted(false)}
        >
          Back to form
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex rounded-pill border border-emerald-900/10 bg-cream-dark/30 p-1">
        {(["login", "signup"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`flex-1 rounded-pill px-5 py-2 text-sm font-medium transition-all duration-300 ${
              mode === m
                ? "bg-emerald-700 text-cream shadow-card"
                : "text-ink-700 hover:text-emerald-700"
            }`}
          >
            {m === "login" ? "Sign in" : "Create account"}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-6 flex flex-col gap-4"
      >
        {mode === "signup" && (
          <Field label="Full name" name="name" required />
        )}
        <Field label="Email" name="email" type="email" required />
        <Field label="Password" name="password" type="password" required />

        {mode === "login" && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink-500">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-emerald-900/20 text-emerald-700 focus:ring-gold-500"
              />
              Remember me
            </label>
            <a href="#" className="text-emerald-700 hover:text-emerald-800">
              Forgot password?
            </a>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-2 w-full"
          iconRight={<Icon name="arrow-right" size={16} />}
        >
          {mode === "login" ? "Sign in" : "Create account"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-500">
        <span className="h-px flex-1 bg-emerald-900/10" />
        or continue with
        <span className="h-px flex-1 bg-emerald-900/10" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-emerald-900/15 bg-cream px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-emerald-700/40"
        >
          <Icon name="apple" size={16} />
          Apple
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-emerald-900/15 bg-cream px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-emerald-700/40"
        >
          <Icon name="sparkles" size={16} className="text-gold-600" />
          Google
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-ink-500">
        New to RAPIC?{" "}
        <Link href="/upload" className="text-emerald-700 hover:text-emerald-800">
          List a property
        </Link>{" "}
        and we&apos;ll set up your account.
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.22em] text-ink-500"
      >
        {label}
        {required && <span className="ml-1 text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      />
    </div>
  );
}
