"use client";

import { useSyncExternalStore } from "react";

export const premiumMotion = {
  ease: [0.22, 1, 0.36, 1] as const,
  fadeDuration: 0.7,
  imageDuration: 0.7,
  revealDistance: 30,
  stagger: 0.08,
  hoverElevation: 4,
  maxTilt: 3,
  spring: { stiffness: 180, damping: 26 },
} as const;

const reducedQuery = "(prefers-reduced-motion: reduce)";
const pointerQuery = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

const listeners = new Set<() => void>();
let queries: MediaQueryList[] | undefined;
const notify = () => listeners.forEach((listener) => listener());

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (!queries) {
    queries = [window.matchMedia(reducedQuery), window.matchMedia(pointerQuery)];
    queries.forEach((query) => query.addEventListener("change", notify));
  }
  return () => {
    listeners.delete(onChange);
    if (!listeners.size) {
      queries?.forEach((query) => query.removeEventListener("change", notify));
      queries = undefined;
    }
  };
}

// A primitive snapshot is stable between media changes. Server rendering defaults
// to reduced motion, avoiding browser reads and hydration-dependent hidden content.
function getSnapshot() {
  if ((queries?.[0] ?? window.matchMedia(reducedQuery)).matches) return "reduced";
  return (queries?.[1] ?? window.matchMedia(pointerQuery)).matches ? "fine" : "touch";
}
const getServerSnapshot = () => "reduced";

export function usePremiumMotion() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { reducedMotion: mode === "reduced", canTilt: mode === "fine" };
}
