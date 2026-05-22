"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/lib/data/nav";
import { Brand } from "./Brand";
import { MobileNav } from "./MobileNav";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-emerald-900/10 bg-cream/85 backdrop-blur-xl shadow-[0_8px_24px_-18px_rgba(2,44,34,0.35)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand />

          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY_NAV.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active
                      ? "text-emerald-800"
                      : "text-ink-700 hover:text-emerald-800",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {SECONDARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.cta
                    ? "inline-flex h-10 items-center gap-2 rounded-pill bg-emerald-700 px-5 text-sm font-medium text-cream transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5"
                    : "inline-flex h-10 items-center rounded-pill border border-emerald-900/15 px-5 text-sm font-medium text-ink-900 transition-colors hover:border-emerald-700/40"
                }
              >
                {link.cta && <Icon name="upload" size={14} />}
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-900/10 bg-cream/80 text-ink-900 backdrop-blur lg:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </header>

      <div aria-hidden className="h-[72px]" />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
