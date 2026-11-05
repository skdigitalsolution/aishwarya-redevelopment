"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Content stays visible before hydration and when motion is disabled. */
export function Reveal({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: reduced ? 1 : [0.94, 1], y: reduced ? 0 : [4, 0] }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reduced ? 0 : 0.45 }}
    >
      {children}
    </motion.div>
  );
}
