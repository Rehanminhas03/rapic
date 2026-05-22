"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { useAuth, AUTH_HINT } from "@/lib/auth";

function LoginFormInner() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/upload";
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const ok = login(username, password);
    if (ok) {
      router.push(next);
      router.refresh();
    } else {
      setSubmitting(false);
      setError("Invalid credentials. Please check your username and password.");
    }
  };

  return (
    <div>
      <div className="rounded-2xl border border-emerald-900/10 bg-cream-dark/30 p-4 text-xs leading-relaxed text-ink-600">
        <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-700">
          Landlord portal
        </p>
        <p className="mt-2">{AUTH_HINT.notice}</p>
      </div>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
        <Field
          label="Username"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(v) => setUsername(v)}
          required
        />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(v) => setPassword(v)}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-ink-500">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-emerald-900/20 text-emerald-700 focus:ring-gold-500"
            />
            Keep me signed in
          </label>
          <a href="#" className="text-emerald-700 hover:text-emerald-800">
            Forgot password?
          </a>
        </div>

        {error && (
          <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <Icon name="close" size={16} className="mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-2 w-full"
          iconRight={<Icon name="arrow-right" size={16} />}
          disabled={submitting}
        >
          {submitting ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-500">
        <span className="h-px flex-1 bg-emerald-900/10" />
        or
        <span className="h-px flex-1 bg-emerald-900/10" />
      </div>

      <p className="text-center text-xs text-ink-500">
        Want to list a property with RAPIC?{" "}
        <Link href="/contact" className="text-emerald-700 hover:text-emerald-800">
          Contact us
        </Link>{" "}
        to request landlord credentials.
      </p>
    </div>
  );
}

export function LoginForm() {
  return (
    <Suspense fallback={<div className="h-72" />}>
      <LoginFormInner />
    </Suspense>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  autoComplete,
}: FieldProps) {
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
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      />
    </div>
  );
}
