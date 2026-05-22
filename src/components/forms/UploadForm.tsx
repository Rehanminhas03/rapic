"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const TYPES = [
  "Apartment",
  "Penthouse",
  "Villa",
  "Townhouse",
  "Office",
  "Commercial",
];

const SECTORS = [
  "New Blue Area",
  "F-6",
  "F-7",
  "F-8",
  "E-7",
  "DHA Phase 2",
  "DHA Phase 5",
  "Bahria Town",
  "Gulberg Greens",
  "Other",
];

export function UploadForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-luxury border border-emerald-700/30 bg-emerald-700/10 p-8 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-cream">
          <Icon name="check" size={24} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink-900">
          Submission received
        </h3>
        <p className="mt-3 text-sm text-ink-600">
          Thanks for listing with RAPIC. A specialist will verify your details
          and call you within one business day to schedule photography — at no
          cost.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another property
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-6"
    >
      <FieldGroup title="Owner details">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="owner_name" required />
          <Field
            label="Phone / WhatsApp"
            name="owner_phone"
            type="tel"
            required
          />
          <Field label="Email" name="owner_email" type="email" />
          <Field label="CNIC (optional)" name="cnic" />
        </div>
      </FieldGroup>

      <FieldGroup title="Property details">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Listing title"
            name="title"
            placeholder="e.g. Skyline Penthouse · New Blue Area"
            required
          />
          <Select label="Property type" name="type" options={TYPES} required />
          <Select label="Sector" name="sector" options={SECTORS} required />
          <Field
            label="Monthly rent (PKR)"
            name="rent"
            type="number"
            min={0}
            placeholder="e.g. 425000"
            required
          />
          <Field
            label="Bedrooms"
            name="bedrooms"
            type="number"
            min={0}
            required
          />
          <Field
            label="Bathrooms"
            name="bathrooms"
            type="number"
            min={0}
            required
          />
          <Field
            label="Area (sqft)"
            name="area"
            type="number"
            min={0}
            required
          />
          <Field
            label="Available from"
            name="available"
            type="date"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="text-[11px] uppercase tracking-[0.22em] text-ink-500"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Highlights, finishes, building amenities, parking, etc."
            className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/55 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
          />
        </div>
      </FieldGroup>

      <FieldGroup title="Photos & video">
        <div className="rounded-2xl border border-dashed border-emerald-900/20 bg-cream-dark/40 p-7 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-emerald-700">
            <Icon name="upload" size={20} />
          </span>
          <p className="mt-4 font-display text-lg text-ink-900">
            Drop your media here
          </p>
          <p className="mt-1 text-sm text-ink-500">
            JPG, PNG, or MP4 · up to 12 files · 50 MB each
          </p>
          <p className="mt-3 text-xs text-ink-500">
            (Demo upload — wired in MVP build)
          </p>
        </div>
      </FieldGroup>

      <div className="flex items-center justify-between gap-4 border-t border-emerald-900/10 pt-6">
        <p className="text-xs text-ink-500">
          By submitting, you confirm you are the owner or authorised agent.
        </p>
        <Button
          type="submit"
          variant="primary"
          iconRight={<Icon name="arrow-right" size={16} />}
        >
          List my property
        </Button>
      </div>
    </form>
  );
}

function FieldGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="font-display text-lg text-ink-900">{title}</legend>
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

type FieldExtra = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
};

function Field({ label, name, type = "text", placeholder, required, min }: FieldExtra) {
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
        min={min}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/55 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
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
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-cream px-4 py-3 text-sm text-ink-900 focus:border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
