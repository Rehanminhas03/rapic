"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PRIMARY_NAV } from "@/lib/data/nav";
import { Brand } from "./Brand";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/lib/auth";
import { SITE } from "@/lib/site";

export function MobileNav({
  open,
  onClose,
  onSignOut,
}: {
  open: boolean;
  onClose: () => void;
  onSignOut: () => void;
}) {
  const { user } = useAuth();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-ink-900/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-cream shadow-luxury"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-emerald-900/10 px-6 py-5">
              <Brand />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/5 text-ink-900 transition-colors hover:bg-emerald-900/10"
                aria-label="Close menu"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {user && (
              <div className="border-b border-emerald-900/10 bg-emerald-700/5 px-6 py-4 text-sm">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700">
                  Signed in
                </p>
                <div className="mt-1 flex items-center gap-2 font-display text-base text-ink-900">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[10px] text-cream">
                    {user.username.slice(0, 1).toUpperCase()}
                  </span>
                  {user.username}
                </div>
              </div>
            )}

            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-1">
                {PRIMARY_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-xl px-3 py-3 font-display text-2xl text-ink-900 transition-colors hover:bg-emerald-900/5 hover:text-emerald-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-emerald-900/10" />

              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={user ? "/upload" : "/login?next=/upload"}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-pill bg-emerald-700 px-5 py-3 text-sm font-medium text-cream"
                  >
                    Upload Property
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </li>
                {user ? (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSignOut();
                      }}
                      className="flex w-full items-center justify-between rounded-pill border border-emerald-900/15 px-5 py-3 text-left text-sm font-medium text-ink-900"
                    >
                      Sign out
                      <Icon name="arrow-up-right" size={16} />
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      onClick={onClose}
                      className="block rounded-pill border border-emerald-900/15 px-5 py-3 text-sm font-medium text-ink-900"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <div className="border-t border-emerald-900/10 px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">
                Direct line
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-2 block font-display text-xl text-emerald-800"
              >
                {SITE.phone}
              </a>
              <p className="mt-3 text-sm text-ink-500">{SITE.address}</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
