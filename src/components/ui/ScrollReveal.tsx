"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { premiumMotion, usePremiumMotion } from "./premium-motion";
import "./scroll-reveal.css";

/** Visible server HTML; keyframes start only when the hydrated block enters view. */
export function ScrollReveal({ children, delay = 0, distance = premiumMotion.revealDistance, className }: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const { reducedMotion: reduced } = usePremiumMotion();
  return (
    <motion.div
      data-motion-owned
      initial={false}
      whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [Math.min(Math.max(distance, 20), premiumMotion.revealDistance), 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : premiumMotion.fadeDuration, delay: reduced ? 0 : Math.min(Math.max(delay, 0), 0.24), ease: premiumMotion.ease }}
      className={["premium-scroll-reveal", className].filter(Boolean).join(" ")}
    >
      {children}
    </motion.div>
  );
}
