"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div initial={false} whileInView={{ opacity: reduced ? 1 : [0.9, 1], y: reduced ? 0 : [8, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduced ? 0 : 0.5 }}>
      {children}
    </motion.div>
  );
}
