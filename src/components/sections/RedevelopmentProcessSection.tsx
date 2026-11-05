"use client";

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
  {
    step: "01",
    title: "Initial Consultation",
    subtitle: "Alignment & Stakeholder Orientation",
    description:
      "Meeting with the society managing committee and members to understand aspirations, identify existing property challenges, and establish advisory scope.",
    icon: MessageSquare,
    deliverables: ["Committee Alignment", "Preliminary Needs Audit", "Redevelopment Roadmap"],
  },
  {
    step: "02",
    title: "Feasibility Assessment",
    subtitle: "DCPR 2034 & Financial Modeling",
    description:
      "Comprehensive architectural and financial analysis calculating potential FSI, TDR utilization, fungible area, projected member carpet area enhancement, and corpus funds.",
    icon: BarChart3,
    deliverables: ["Techno-Financial Report", "FSI & TDR Modeling", "Member Benefit Projections"],
  },
  {
    step: "03",
    title: "Developer Evaluation",
    subtitle: "Tendering & Rigorous Diligence",
    description:
      "Drafting transparent tender documents, inviting qualified developer bids, conducting balance sheet audits, and presenting comparative analytical matrices to the General Body.",
    icon: FileCheck2,
    deliverables: ["Tender Document Preparation", "Comparative Bid Analysis", "Developer Financial Audits"],
  },
  {
    step: "04",
    title: "Agreements & Approvals",
    subtitle: "Legal Safeguards & Sanctions",
    description:
      "Structuring and negotiating Development Agreements (DA), Power of Attorney (POA), and Individual Agreements with project-specific covenants and negotiated security arrangements.",
    icon: FileSignature,
    deliverables: ["Development Agreement Vetting", "Bank Guarantee Structuring", "IOD / CC Tracking"],
  },
  {
    step: "05",
    title: "Project Monitoring",
    subtitle: "Execution Quality & Timeline Auditing",
    description:
      "Independent technical audits during construction. Reviewing milestones, monitoring rent/corpus disbursement schedules, and ensuring architectural compliance.",
    icon: Activity,
    deliverables: ["Milestone Velocity Audits", "Disbursement Oversight", "Structural Quality Checks"],
  },
  {
    step: "06",
    title: "OC & Possession Handover",
    subtitle: "Final Certification & Move-in",
    description:
      "Ensuring all municipal conditions are fulfilled, Occupancy Certificate (OC) is issued, final accounts settled, and members receive keys to their new landmark homes.",
    icon: KeyRound,
    deliverables: ["OC Verification", "Defect Liability Oversight", "Society Handover Clearance"],
  },
];

export const RedevelopmentProcessSection: React.FC = () => {
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
      id="redevelopment"
      aria-label="Six-Step Redevelopment Advisory Process"
      className="relative py-24 sm:py-32 lg:py-36 bg-navy-950 text-ivory overflow-hidden border-t border-gold/20"
    >
      {/* Background Architectural Grid and Scrim */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,166,107,0.06),transparent_70%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Redevelopment Roadmap"
          title={
            <span>
              A Disciplined Six-Step <span className="italic font-light text-gold-300">Methodology.</span>
            </span>
          }
          subtitle="From early committee consultations to final OC handover, our structured advisory protects society equity and accelerates execution."
          align="center"
          theme="dark"
        />

        {/* 6-Step Editorial Process Grid with Timeline Accents */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index + 1}
                variants={fadeIn}
                className="group p-8 rounded-xs bg-navy-900/70 hover:bg-navy-900 border border-gold/20 hover:border-gold/50 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Header with Step Badge & Icon */}
                  <div className="flex items-center justify-between pb-5 border-b border-gold/15 mb-6">
                    <span className="font-mono text-2xl font-light text-gold-400 group-hover:text-gold transition-colors tracking-tight">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-xs bg-gold/10 border border-gold/20 text-gold-400 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl text-ivory-50 font-medium leading-snug mb-1 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-[0.14em] text-gold-400/80 font-medium mb-4">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-ivory-300/80 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                <div className="pt-5 border-t border-gold/15">
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-[11px] font-sans rounded-xs bg-navy-950/80 border border-gold/15 text-ivory-300/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Footer Call-to-Action */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm font-sans text-ivory-300/80 font-light flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
            <span>Structured advisory governance safeguarding member rights from inception to completion</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-colors rounded-xs shadow-md shrink-0"
          >
            <span>Begin Step 01 Consultation</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RedevelopmentProcessSection;

