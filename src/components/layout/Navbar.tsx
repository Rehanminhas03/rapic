"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/data/nav";
import { Brand } from "./Brand";
import { MobileNav } from "./MobileNav";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = () => {
    logout();
    router.push("/");
    router.refresh();
  };

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
            {user ? (
              <>
                <Link
                  href="/upload"
                  className="inline-flex h-10 items-center gap-2 rounded-pill bg-emerald-700 px-5 text-sm font-medium text-cream transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5"
                >
                  <Icon name="upload" size={14} />
                  Upload Property
                </Link>
                <span className="inline-flex h-10 items-center gap-2 rounded-pill border border-emerald-900/15 bg-cream/80 px-4 text-xs uppercase tracking-[0.16em] text-ink-700 backdrop-blur">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[10px] font-medium text-cream">
                    {user.username.slice(0, 1).toUpperCase()}
                  </span>
                  {user.username}
                </span>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex h-10 items-center gap-1.5 rounded-pill border border-emerald-900/15 px-4 text-sm font-medium text-ink-900 transition-colors hover:border-emerald-700/40"
                  aria-label="Sign out"
                >
                  <Icon name="arrow-up-right" size={14} />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login?next=/upload"
                  className="inline-flex h-10 items-center gap-2 rounded-pill bg-emerald-700 px-5 text-sm font-medium text-cream transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5"
                >
                  <Icon name="upload" size={14} />
                  Upload Property
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center rounded-pill border border-emerald-900/15 px-5 text-sm font-medium text-ink-900 transition-colors hover:border-emerald-700/40"
                >
                  Login
                </Link>
              </>
            )}
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

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSignOut={handleSignOut}
      />
    </>
  );
}
