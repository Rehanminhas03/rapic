"use client";

import { useSyncExternalStore } from "react";

const VALID_USERNAME = "mettglobal";
const VALID_PASSWORD = "mettglobal123";
const STORAGE_KEY = "rapic.auth.v1";

export type AuthUser = { username: string };

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined = undefined;
let cachedSnapshot: AuthUser | null = null;

function readSnapshot(): AuthUser | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
  if (raw === cachedRaw) return cachedSnapshot;
  cachedRaw = raw;
  if (!raw) {
    cachedSnapshot = null;
    return null;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<AuthUser>;
    cachedSnapshot = parsed?.username ? { username: parsed.username } : null;
  } catch {
    cachedSnapshot = null;
  }
  return cachedSnapshot;
}

function notify() {
  // Invalidate cache so the next snapshot read reflects the new storage value.
  cachedRaw = undefined;
  listeners.forEach((cb) => cb());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedRaw = undefined;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getServerSnapshot(): AuthUser | null {
  return null;
}

export function login(username: string, password: string): boolean {
  const u = username.trim().toLowerCase();
  if (u === VALID_USERNAME && password === VALID_PASSWORD) {
    const next: AuthUser = { username: u };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore unavailable storage
    }
    notify();
    return true;
  }
  return false;
}

export function logout() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  notify();
}

export function useAuth() {
  const user = useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
  return { user, login, logout };
}

export const AUTH_HINT = {
  username: VALID_USERNAME,
  notice: "Authorised access only · contact RAPIC for credentials.",
};
