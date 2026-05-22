import { SITE } from "./site";

type ClassValue = string | number | null | undefined | false | ClassValue[];

export function cn(...values: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v) return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    }
  };
  values.forEach(walk);
  return out.join(" ");
}

export function formatPKR(amount: number): string {
  if (amount >= 10_000_000) {
    return `PKR ${(amount / 10_000_000).toFixed(2)} Cr`;
  }
  if (amount >= 100_000) {
    return `PKR ${(amount / 100_000).toFixed(1)} Lac`;
  }
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export function formatMonthly(amount: number): string {
  return `${formatPKR(amount)}/mo`;
}

export function whatsappLink(message: string, phone: string = SITE.whatsappRaw): string {
  const url = new URL(`https://wa.me/${phone}`);
  url.searchParams.set("text", message);
  return url.toString();
}

export function propertyEnquiryMessage(title: string): string {
  return `Hi RAPIC, I'm interested in "${title}" listed on rapic.pk. Could you share more details and arrange a viewing?`;
}

export const BLUR_EMERALD =
  "data:image/svg+xml;base64," +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#064e3b"/><stop offset="100%" stop-color="#0a0f0d"/></linearGradient></defs><rect width="16" height="10" fill="url(#g)"/></svg>',
  ).toString("base64");
