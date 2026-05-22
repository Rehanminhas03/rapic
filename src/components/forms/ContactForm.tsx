"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Full name" name="name" placeholder="Ahmed Khan" required />
        <Field
          label="Phone or WhatsApp"
          name="phone"
          type="tel"
          placeholder="+92 300 1234567"
          required
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
      />
      <Field
        label="Sector / Area of interest"
        name="sector"
        placeholder="New Blue Area, F-7, DHA Phase 2…"
      />
      <div>
        <label
          htmlFor="message"
          className="text-[11px] uppercase tracking-[0.22em] text-ink-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you're looking for — bedrooms, budget, move-in date."
          className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/55 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
        />
      </div>

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-xs text-ink-500">
          By submitting, you agree to be contacted directly by RAPIC.
        </p>
        <Button
          type="submit"
          variant="primary"
          iconRight={<Icon name="arrow-right" size={16} />}
        >
          Send enquiry
        </Button>
      </div>

      {submitted && (
        <div className="mt-3 flex items-center gap-2 rounded-2xl border border-emerald-700/30 bg-emerald-700/10 px-4 py-3 text-sm text-emerald-800">
          <Icon name="check" size={16} />
          Thank you — a RAPIC specialist will be in touch within one business day.
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/55 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      />
    </div>
  );
}
