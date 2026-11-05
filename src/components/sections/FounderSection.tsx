"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Shield, FileCheck2, Building, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

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
    hidden: { opacity: 1, y: 0 },
    visible: (idx: number) => ({
      opacity: shouldReduceMotion ? 1 : [0, 1],
      y: shouldReduceMotion ? 0 : [38, 0],
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : Math.min(Math.max(idx - 1, 0) * 0.08, 0.24),
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="team" data-motion-owned style={{ scrollMarginTop: "7rem" }}
      aria-label="Founder and Leadership Profile"
      className="relative py-16 sm:py-20 lg:py-24 bg-ivory text-charcoal overflow-hidden"
    >
      <Container size="xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Original client-supplied founder portrait, shown without cropping. */}
          <motion.div data-motion-owned
            initial={false}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-5 relative w-full"
          >
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative border-l border-gold/60 pl-4 pt-4 sm:pl-6 sm:pt-6">
                <span aria-hidden="true" className="absolute left-0 top-0 h-px w-20 bg-gold" />
                <div className="relative aspect-[516/564] overflow-hidden bg-white">
                  <Image src="/images/founder-portrait.jpeg" alt="Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" fill loading="lazy" sizes="(max-width: 479px) calc(100vw - 48px), (max-width: 1023px) 424px, 40vw" className="object-contain" />
                </div>
              </div>
              <figcaption className="ml-4 mt-5 border-t border-gold/30 pt-3 text-xs leading-6 text-charcoal/75 sm:ml-6">Mr. Sachin Murudkar <span aria-hidden="true" className="px-2 text-gold-700">/</span> Founder &amp; Director</figcaption>
            </figure>
          </motion.div>

          {/* Right Column: Founder Professional Biography & Expertise (7 cols) */}
          <motion.div data-motion-owned
            initial={false}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeIn}
            className="lg:col-span-7 flex min-w-0 flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2.5 mb-3">

              <span className="text-xs font-sans font-semibold uppercase tracking-[0.22em] text-gold-700">
                Founder &amp; Director
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy font-normal mb-4 leading-tight">
              Mr. Sachin Murudkar
            </h2>
            <p className="font-sans text-sm leading-6 text-gold-700 font-medium mb-6">
              Strategic Real Estate &amp; Redevelopment Advisor
            </p>

            {/* Factual Biography */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light mb-8">
              <p>
                Mr. Sachin Murudkar is the Founder &amp; Director of Aishwarya Redevelopment Advisory Company. The advisory focus spans society redevelopment strategy, title due diligence, municipal coordination and land valuation.
              </p>
              <p className="text-charcoal/75 text-sm sm:text-base">
                The firm supports housing societies, landowners and developers in assessing property decisions, feasibility and proposed transaction terms. Advisory scope and professional responsibilities are agreed for each engagement.
              </p>
            </div>

            {/* 4 Small Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 border-t border-navy/15 pt-6 mb-8">
              {leadershipExpertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="text-gold-700 shrink-0 mt-1">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-navy">
                        {item.title}
                      </h3>
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
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-ivory-50 bg-navy hover:bg-navy-900 border border-gold/40 hover:border-gold transition-all duration-300 rounded-xs shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <span>Meet Our Founder</span>
                <ArrowRight aria-hidden="true" className="size-3.5 text-gold-400 group-hover:text-gold motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;

