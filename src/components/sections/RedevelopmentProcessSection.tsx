"use client";

import { ClientImage } from "@/components/ui/ClientImage";

import React from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  BarChart3,
  FileCheck2,
  FileSignature,
  Activity,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ClientImageId } from "@/lib/client-images";
import { premiumMotion, usePremiumMotion } from "@/components/ui/premium-motion";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
 {step:"01",title:"Society Redevelopment Advisory",subtitle:"",description:"Client-listed professional service.",icon:MessageSquare,deliverables:[]},
 {step:"02",title:"Redevelopment Feasibility Study",subtitle:"",description:"Client-listed professional service.",icon:BarChart3,deliverables:[]},
 {step:"03",title:"Developer Due Diligence",subtitle:"",description:"MahaRERA track record, financial solvency and existing society feedback.",icon:FileCheck2,deliverables:[]},
 {step:"04",title:"Bank Guarantee Capability",subtitle:"",description:"Developer due diligence criterion; not a promised guarantee.",icon:FileSignature,deliverables:[]},
 {step:"05",title:"DCPR 2034 Feasibility",subtitle:"",description:"Developer due diligence criterion.",icon:Activity,deliverables:[]},
 {step:"06",title:"Self-Redevelopment",subtitle:"",description:"Identified area of founder expertise.",icon:KeyRound,deliverables:[]},
];


const journey: { title: string; image: ClientImageId; note: string }[] = [
  { title: "Old Society", image: 12, note: "Existing building and society context" },
  { title: "Feasibility & Planning", image: 8, note: "Assessment and architectural planning" },
  { title: "Construction", image: 9, note: "Construction and project coordination" },
  { title: "Redeveloped Building", image: 21, note: "Illustrative architectural result" },
];

export function RedevelopmentProcessSection() {
  const { reducedMotion: reduced } = usePremiumMotion();
  return (
    <section id="redevelopment" aria-labelledby="home-process-heading" className="home-journey home-section home-dark">
      <Container>
        <ScrollReveal distance={30} className="home-section-intro">
          <div><p className="home-eyebrow">The Redevelopment Journey</p><h2 id="home-process-heading" className="home-heading">A society&apos;s next chapter.<br /><em>From existing to envisioned.</em></h2></div>
          <p className="home-body">A conceptual visual progression, not an approved project programme. Images are illustrative references, not verified Aishwarya projects, outcomes or guarantees.</p>
        </ScrollReveal>
        <ol className="home-journey-grid">
          {journey.map((stage, index) => <motion.li key={stage.title} data-motion-owned initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [premiumMotion.revealDistance, 0] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : premiumMotion.fadeDuration, delay: reduced ? 0 : index * premiumMotion.stagger, ease: premiumMotion.ease }}>
            <div className="home-journey-marker"><span aria-hidden="true">0{index + 1}</span>{index < journey.length - 1 && <motion.span className="home-journey-line" aria-hidden="true" initial={false} whileInView={reduced ? { scale: 1, opacity: 1 } : { scale: [0, 1], opacity: [0, 1] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 0.8, ease: premiumMotion.ease }} />}</div>
            <div className="home-journey-stage"><ClientImage id={stage.image} dark aspect="aspect-[4/3]" /><h3>{stage.title}</h3><p>{stage.note}</p></div>
          </motion.li>)}
        </ol>
        <ScrollReveal distance={30} className="home-advisory-topics">
          <div><p className="home-eyebrow">Redevelopment Advisory Topics</p><h3>Advisory topics. <em>Mumbai redevelopment.</em></h3><p>The topics supplied in the task are listed here; they do not establish an approved process sequence.</p></div>
          <ul>{processSteps.map(step => <li key={step.step}><h4>{step.title}</h4><p>{step.description}</p></li>)}</ul>
        </ScrollReveal>
        <div className="home-section-end"><p>The detailed redevelopment process awaits the original company profile presentation.</p><Link href="/redevelopment" className="home-text-link">Explore the redevelopment approach <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Container>
    </section>
  );
}
export default RedevelopmentProcessSection;
