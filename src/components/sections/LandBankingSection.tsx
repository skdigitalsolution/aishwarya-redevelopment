"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Landmark, Handshake, FileSearch2, Compass, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const landServices = [
  {
    number: "01",
    title: "Strategic Land Banking",
    subtitle: "Corridor Acquisition & Capital Deployment",
    description:
      "Identifying, aggregating, and holding strategic parcels in emerging growth corridors across the Mumbai Metropolitan Region (MMR). Aligned with transit-oriented infrastructure and master plan expansion.",
    icon: Compass,
    deliverables: ["Corridor Growth Analysis", "Land Aggregation Planning", "Long-Term Holding Assessment"],
  },
  {
    number: "02",
    title: "Land Brokerage & Deal Structuring",
    subtitle: "JDA & Outright Monetisation",
    description:
      "Structuring transparent outright land sales, Joint Development Agreements (JDA), and joint ventures between institutional landowners and established developers with equitable risk-reward matrices.",
    icon: Handshake,
    deliverables: ["JDA / JV Term Sheets", "Revenue-Share Modeling", "Negotiation Advisory"],
  },
  {
    number: "03",
    title: "Title Due Diligence & Feasibility",
    subtitle: "Statutory Title & Regulatory Vetting",
    description:
      "Comprehensive verification of 7/12 extracts, mutation records, CTS survey plans, DP reservation impacts, and coastal/environmental constraints to identify title issues and matters requiring further legal review.",
    icon: FileSearch2,
    deliverables: ["7/12 & CTS Title Audits", "DP Reservation Feasibility", "Title Issue Identification"],
  },
  {
    number: "04",
    title: "Asset Owner & Developer Partnerships",
    subtitle: "Bridging Land Equity with Execution",
    description:
      "Connecting multi-generational family estates, corporate landholders, and trusts with financially vetted Grade-A developers to realize optimum commercial and residential development potential.",
    icon: Landmark,
    deliverables: ["Developer Vetting", "Equity Preservation", "Contractual Compliance Tracking"],
  },
];

export const LandBankingSection: React.FC = () => {
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
      id="land-banking"
      aria-label="Strategic Land Banking and Advisory"
      className="relative py-24 sm:py-32 lg:py-36 bg-navy-950 text-ivory overflow-hidden border-t border-gold/20"
    >
      {/* Background Architectural Scrim */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(198,166,107,0.08),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Strategic Land Advisory"
          title={
            <span>
              Unlocking the Potential of <span className="italic font-light text-gold-300">Every Acre.</span>
            </span>
          }
          subtitle="Connecting strategic landholdings with institutional capital, property-specific title diligence, and high-value joint development structures across Mumbai and MMR."
          align="center"
          theme="dark"
        />

        {/* Asymmetrical Editorial Composition with Image Backdrop Anchor */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Image-Led Strategic Overview (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-5 relative rounded-xs overflow-hidden border border-gold/30 flex flex-col justify-between p-8 sm:p-10 bg-navy-900/90 shadow-2xl min-h-[420px]"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero/hero-architecture-fallback.jpg"
                alt="Illustrative architectural facade used as a visual backdrop for land advisory"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/60" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-5 border-b border-gold/20 mb-6">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold">
                  Institutional Land Mandate
                </span>
                <span className="size-2 rotate-45 bg-gold-400" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal leading-tight mb-4">
                Strategic Aggregation &amp; High-Yield Monetisation
              </h3>

              <p className="font-sans text-xs sm:text-sm text-ivory-300/85 leading-relaxed font-light mb-6">
                Navigating complex regulatory frameworks, DP reservations, and multi-party ownership to unlock liquidity and premium valuation for estates and institutions.
              </p>

              <div className="space-y-2 pt-4 border-t border-gold/15">
                {[
                  "Mumbai Metropolitan Region (MMR) Focus",
                  "Joint Development Agreements (JDA)",
                  "Complete 7/12 Title Diligence & Rectification",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-sans text-ivory-200">
                    <span className="size-1 rounded-full bg-gold-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-8 border-t border-gold/20">
              <p className="text-[11px] font-mono text-gold-400/70">
                Land Advisory Practice • Fiduciary Mandate
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Distinct Strategic Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {landServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index + 2}
                  variants={fadeIn}
                  className="group p-6 sm:p-7 rounded-xs bg-navy-900/60 hover:bg-navy-900 border border-gold/20 hover:border-gold/45 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-gold/15 mb-4">
                      <span className="font-mono text-xs text-gold-400/80 font-semibold tracking-wider">
                        {service.number}
                      </span>
                      <Icon className="size-4 text-gold-400 group-hover:text-gold transition-colors" />
                    </div>

                    <h4 className="font-serif text-xl text-ivory-50 font-medium mb-1 group-hover:text-gold transition-colors">
                      {service.title}
                    </h4>
                    <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-gold-400/80 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="font-sans text-xs text-ivory-300/80 leading-relaxed font-light mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/15">
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="px-2 py-0.5 text-[10px] font-sans rounded-xs bg-navy-950/80 border border-gold/15 text-ivory-300/70"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm font-sans text-ivory-300/80 font-light flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
            <span>Confidential transaction structuring for corporate landowners and private family estates</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-colors rounded-xs shadow-md shrink-0"
          >
            <span>Explore Land Banking</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LandBankingSection;

