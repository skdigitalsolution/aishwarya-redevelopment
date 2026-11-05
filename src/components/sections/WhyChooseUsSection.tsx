
"use client";

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
    subtitle: "Unbiased Fiduciary Loyalty",
    description:
      "Independent representation dedicated solely to housing societies and landholders. We eliminate conflicting interests, ensuring full committee transparency and member consensus at every stage.",
    icon: ShieldCheck,
    highlights: ["Conflict-free guidance", "General body facilitation", "Clear member communication"],
  },
  {
    number: "02",
    title: "Legal & Regulatory Expertise",
    subtitle: "Project-Specific Statutory Review",
    description:
      "Deep mastery of Maharashtra cooperative law, Section 79A guidelines, MOFA, and RERA frameworks to safeguard member rights, title clarity, and enforce binding covenants.",
    icon: Scale,
    highlights: ["Section 79A mastery", "Deemed conveyance clearance", "RERA & municipal compliance"],
  },
  {
    number: "03",
    title: "Developer Due Diligence",
    subtitle: "Rigorous Financial & Track Record Vetting",
    description:
      "Exhaustive audits of prospective developers' financial liquidity, balance sheets, past project delivery timelines, and evaluating proposed security arrangements before contractual commitments.",
    icon: FileSearch,
    highlights: ["Balance sheet audits", "Delivery timeline verification", "Bank guarantee structuring"],
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
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : idx * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Aishwarya Redevelopment Advisory"
      className="relative py-24 sm:py-32 lg:py-36 bg-ivory text-charcoal overflow-hidden border-t border-gold/20"
    >
      <Container size="xl">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Why Choose Aishwarya"
          title={
            <span>
              Uncompromising Integrity.{" "}
              <span className="italic font-light text-gold-700">Protected Equity.</span>
            </span>
          }
          subtitle="Distinguished by fiduciary discipline, legal precision, and technical rigor across Mumbai's premier cooperative housing societies."
          align="center"
          theme="light"
        />

        {/* 4-Pillar Premium Editorial Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index + 1}
                variants={fadeIn}
                className="group p-8 sm:p-10 rounded-xs bg-white border border-gold/25 hover:border-gold/60 shadow-none transition-colors duration-200 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Numbering and Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-gold/15 mb-6">
                    <span className="font-mono text-sm font-semibold text-gold-600 tracking-widest">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-xs bg-gold/10 border border-gold/20 text-gold-600 group-hover:border-gold/50 transition-colors duration-300">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-navy font-medium leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-700 font-medium mb-4">
                    {item.subtitle}
                  </p>

                  {/* Narrative Body */}
                  <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-6 border-t border-gold/15">
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-1.5 pl-3 py-1 text-xs font-sans border-l border-gold/40 text-charcoal/80"
                      >
                        <span className="size-1 rounded-full bg-gold-600" aria-hidden="true" />
                        <span>{point}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Assurance Banner */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-xs bg-navy text-ivory border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-ivory-50">
              Guiding Housing Society Committees Across Mumbai
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ivory-300/80 font-light">
              Independent representation aligned with Section 79A statutory guidelines.
            </p>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy bg-gold hover:bg-gold-300 transition-colors rounded-xs shrink-0"
          >
            <span>Consult Our Advisors</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
