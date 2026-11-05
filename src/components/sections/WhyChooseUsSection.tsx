"use client";

import { ClientImage } from "@/components/ui/ClientImage";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Scale, FileSearch, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const differentiators = [
  {
    number: "01",
    title: "Transparent Advisory",
    subtitle: "Clear Advisory Responsibilities",
    description:
      "Advisory support for housing societies and landholders, with engagement scope, stakeholder interests and potential conflicts discussed before commitments.",
    icon: ShieldCheck,
    highlights: ["Discussion of potential conflicts", "General body facilitation", "Clear member communication"],
  },
  {
    number: "02",
    title: "Legal & Regulatory Expertise",
    subtitle: "Project-Specific Statutory Review",
    description:
      "Coordination of documentation and professional review around applicable cooperative society procedures, title matters and regulatory requirements.",
    icon: Scale,
    highlights: ["Society procedure coordination", "Conveyance documentation", "Regulatory review support"],
  },
  {
    number: "03",
    title: "Developer Due Diligence",
    subtitle: "Rigorous Financial & Track Record Vetting",
    description:
      "Review of available developer financial information, past project records and proposed security arrangements, with specialist input where required.",
    icon: FileSearch,
    highlights: ["Financial information review", "Past delivery record review", "Bank guarantee structuring"],
  },
  {
    number: "04",
    title: "End-to-End Redevelopment Support",
    subtitle: "Complete Lifecycle Partnership",
    description:
      "Dedicated oversight spanning initial feasibility, tender management, developer selection, municipal approval tracking, construction quality auditing, and final handover.",
    icon: CheckCircle2,
    highlights: ["Turnkey advisory lifecycle", "Site execution auditing", "Possession & OC verification"],
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const reduced = useReducedMotion();
  const benefits = [
    "Understand the scope of advice, who is responsible and which interests need to be discussed before committing.",
    "Bring property records and approval questions together for review by the relevant professionals.",
    "Compare the information behind developer proposals, including past delivery and proposed security arrangements.",
    "Keep agreed milestones, outstanding questions and member priorities in view as the project moves forward.",
  ];
  return (
    <section id="why-choose-us" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-benefits-heading" className="bg-ivory py-16 text-navy sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5"><SectionHeading align="left" showDivider={false} eyebrow="Why Choose Aishwarya" title={<span id="home-benefits-heading">Clarity for your society.<br /><span className="italic text-gold-700">At every decision.</span></span>} subtitle="Practical support to help committees understand the options, ask informed questions and agree the next step." />
            <ClientImage id={1} aspect="aspect-square" className="mt-8 max-w-sm" />
          </div>
          <div className="divide-y divide-navy/15 border-t border-navy/15 lg:col-span-7">
            {differentiators.map((item, index) => { const Icon = item.icon; return <motion.article data-motion-owned key={item.number} initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [38, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Math.min(index, 3) * 0.08, ease: [0.22, 1, 0.36, 1] }} className="flex items-start gap-5 py-7 sm:gap-6 sm:py-8">
              <Icon size={23} strokeWidth={1.3} aria-hidden="true" className="mt-1 shrink-0 text-gold-700" />
              <div><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/80">{benefits[index]}</p></div>
            </motion.article>; })}
            <Link href="#contact" className="inline-flex min-h-12 items-center gap-3 py-5 text-sm text-navy hover:text-gold-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Discuss your society&apos;s priorities <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default WhyChooseUsSection;
