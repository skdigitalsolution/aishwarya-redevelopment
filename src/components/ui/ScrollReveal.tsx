"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Visible server HTML; keyframes start only when the hydrated block enters view. */
export function ScrollReveal({ children, delay = 0, className }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      data-motion-owned
      initial={false}
      whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [38, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Math.min(Math.max(delay, 0), 0.24), ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
