import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapic.pk"),
  title: {
    default: "RAPIC — Rent A Property In Capital",
    template: "%s | RAPIC",
  },
  description:
    "Luxury rentals across Islamabad and New Blue Area. Direct landlord connections, zero commission, free property uploads.",
  keywords: [
    "islamabad rentals",
    "new blue area",
    "luxury apartments islamabad",
    "rent property islamabad",
    "dha islamabad",
    "bahria town",
    "commercial offices islamabad",
    "RAPIC",
  ],
  authors: [{ name: "RAPIC" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://rapic.pk",
    siteName: "RAPIC",
    title: "RAPIC — Rent A Property In Capital",
    description:
      "Luxury rentals across Islamabad and New Blue Area. Direct landlord connections, zero commission.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAPIC — Rent A Property In Capital",
    description:
      "Luxury rentals across Islamabad and New Blue Area. Direct landlord connections, zero commission.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
