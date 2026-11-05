"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Shield, FileCheck2, Building, Scale, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const leadershipExpertise = [
  {
    icon: Building,
    title: "Redevelopment Strategy",
    detail: "Structuring society consensus & financial feasibility models",
  },
  {
    icon: Scale,
    title: "Title Due Diligence",
    detail: "Comprehensive title search & deemed conveyance guidance",
  },
  {
    icon: FileCheck2,
    title: "Municipal Coordination",
    detail: "Navigating DCPR 2034, Section 79A & statutory sanctions",
  },
  {
    icon: Shield,
    title: "Land Valuation & JDA",
    detail: "Equitable development rights & joint venture structuring",
  },
];

export const FounderSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : idx * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="team"
      aria-label="Founder and Leadership Profile"
      className="relative py-24 sm:py-32 lg:py-36 bg-ivory text-charcoal overflow-hidden border-t border-gold/20"
    >
      <Container size="xl">
        <SectionHeading
          eyebrow="The Vision Behind Aishwarya"
          title={
            <span>
              Leadership Built on <span className="italic font-light text-gold-700">Trust and Expertise.</span>
            </span>
          }
          subtitle="Guided by hands-on fiduciary leadership, deep municipal insight, and unyielding advocacy for housing society equity."
          align="center"
          theme="light"
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Explicit Executive Portrait Placeholder Frame (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 border border-gold/30 rounded-xs pointer-events-none translate-x-2 translate-y-2 hidden sm:block"
                aria-hidden="true"
              />

              {/* Dignified Executive Placeholder Card */}
              <div className="relative aspect-[4/5] w-full rounded-xs bg-navy-950 p-8 flex flex-col justify-between border border-gold/35 shadow-none text-ivory overflow-hidden">
                {/* Subtle architectural background texture */}
                <div
                  className="absolute inset-0 opacity-0 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between border-b border-gold/20 pb-4">
                  <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-gold-400 font-semibold">
                    Executive Profile
                  </span>
                  <div className="size-2 rotate-45 bg-gold-400" aria-hidden="true" />
                </div>

                {/* Center Monogram Insignia & Transparent Asset Notice */}
                <div className="relative z-10 my-auto text-center py-8">
                  <div className="size-24 sm:size-28 mx-auto border-y border-gold/40 flex items-center justify-center mb-7">
                    <span className="font-serif text-5xl sm:text-6xl font-light tracking-wide text-gold-300">
                      SM
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-ivory-50 font-medium">
                    Mr. Sachin Murudkar
                  </h4>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-400 font-medium mt-1">
                    Founder &amp; Director
                  </p>

                  <div className="mt-6 px-4 py-2.5 rounded-xs border-t border-gold/20 max-w-xs mx-auto">
                    <p className="font-mono text-[11px] text-gold-300/80 leading-snug">
                      Official Client Portrait Pending
                    </p>
                    <p className="font-mono text-[10px] text-ivory-300/60 mt-0.5">
                      Official founder portrait forthcoming
                    </p>
                  </div>
                </div>

                {/* Bottom Fiduciary Creed */}
                <div className="relative z-10 pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-ivory-300/80 font-sans">
                  <span>Aishwarya Advisory Company</span>
                  <span className="text-gold-400 font-mono text-[11px]">Mumbai, MH</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Professional Biography & Expertise (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeIn}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2.5 mb-3">
              <UserCheck className="size-4 text-gold-600" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.22em] text-gold-700">
                Founder &amp; Managing Director
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-navy font-normal mb-2 leading-tight">
              Mr. Sachin Murudkar
            </h3>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-700 font-medium mb-6">
              Strategic Real Estate &amp; Redevelopment Advisor
            </p>

            {/* Factual Biography */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light mb-8">
              <p>
                As the Founder &amp; Director of Aishwarya Redevelopment Advisory Company, Mr. Sachin Murudkar brings extensive strategic leadership across Mumbai&apos;s real estate and redevelopment ecosystem. His advisory practice is defined by deep expertise in society redevelopment strategy, title due diligence, municipal regulatory coordination, and land valuation.
              </p>
              <p className="text-charcoal/75 text-sm sm:text-base">
                Under his stewardship, the firm serves as an independent fiduciary partner to cooperative housing societies, landowners, and developers, navigating complex Section 79A procedures, financial feasibility modeling, and joint venture negotiations with unwavering transparency and precision.
              </p>
            </div>

            {/* 4 Small Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 pb-8 border-t border-b border-gold/20 mb-8">
              {leadershipExpertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="p-2 rounded-xs bg-gold/10 border border-gold/25 text-gold-700 shrink-0 mt-0.5">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-medium text-navy">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-charcoal/70 leading-relaxed mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/founder"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-ivory-50 bg-navy hover:bg-navy-900 border border-gold/40 hover:border-gold transition-all duration-300 rounded-xs shadow-none"
              >
                <span>Meet Our Founder</span>
                <ArrowRight className="size-3.5 text-gold-400 group-hover:text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;

