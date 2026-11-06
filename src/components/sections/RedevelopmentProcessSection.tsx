"use client";

import { ClientImage } from "@/components/ui/ClientImage";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
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
import { SectionHeading } from "@/components/ui/SectionHeading";

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

export const RedevelopmentProcessSection: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <section id="redevelopment" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-process-heading" className="bg-navy py-20 text-ivory sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading align="left" showDivider={false} theme="dark" eyebrow="Redevelopment Advisory Topics" title={<span id="home-process-heading">Advisory topics.<br /><span className="font-light italic text-gold-300">Mumbai redevelopment.</span></span>} subtitle="The topics supplied in the task are listed here; they do not establish an approved process sequence." />
            <ClientImage id={9} dark aspect="aspect-[4/3]" className="mt-8" />
            <p className="mt-5 text-xs leading-6 text-ivory/70">The detailed redevelopment process awaits the original company profile presentation.</p>
            <Link href="/redevelopment" className="mt-5 inline-flex min-h-12 items-center gap-3 border-b border-gold/60 text-sm text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore the redevelopment approach <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <ol className="lg:col-span-7">
            {processSteps.map((step, index) => <motion.li data-motion-owned key={step.step} initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [38, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Math.min(index, 3) * 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-7">
              {index < processSteps.length - 1 && <span data-motion-line aria-hidden="true" className="absolute top-12 bottom-0 left-5 w-px bg-gold/30" />}
              <span data-motion-number aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-navy font-serif text-xl text-gold-300">{step.step}</span>
              <div className="min-w-0 pt-1"><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{step.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ivory/80">{step.description}</p></div>
            </motion.li>)}
          </ol>
        </div>
      </Container>
    </section>
  );
};
export default RedevelopmentProcessSection;
