"use client";

import { motion } from "motion/react";
import { Scale, Compass, ScanLine } from "lucide-react";
import { ClientImage } from "@/components/ui/ClientImage";
import { premiumMotion, usePremiumMotion } from "@/components/ui/premium-motion";
import { Reveal } from "./Reveal";
import { landDiligence } from "./land-data";

const icons = [Scale, Compass, ScanLine];

export function LandDueDiligence() {
  const { reducedMotion } = usePremiumMotion();
  return <ol className="land-diligenceSteps">
    {landDiligence.map((tier, index) => {
      const Icon = icons[index];
      return <li key={tier.title} data-land-tier>
        <div className="land-tierMarker"><span className="land-tierNumber" aria-hidden="true">0{index + 1}</span>
          {index < landDiligence.length - 1 && <span className="land-tierTrack" aria-hidden="true"><motion.span initial={false} whileInView={reducedMotion ? { scale: 1 } : { scale: [0, 1] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reducedMotion ? 0 : 0.7, ease: premiumMotion.ease }} /></span>}
        </div>
        <Reveal delay={index * 0.08} className="land-tierContent">
          <ClientImage id={tier.image} aspect="aspect-[16/10]" />
          <div className="land-tierTitle"><Icon size={23} strokeWidth={1.3} aria-hidden="true" /><h3>{tier.title}</h3></div>
          <p>{tier.description}</p>
        </Reveal>
      </li>;
    })}
  </ol>;
}
