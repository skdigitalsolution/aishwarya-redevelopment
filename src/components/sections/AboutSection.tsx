"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Building2, Scale, Compass, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const expertiseHighlights = [
  {
    number: "01",
    title: "Society Redevelopment Advisory",
    description:
      "Guiding cooperative housing societies through techno-financial feasibility, member consensus facilitation, developer tender structuring, and contractual negotiations.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Legal & Regulatory Guidance",
    description:
      "Navigating Maharashtra cooperative frameworks (Section 79A), MOFA, RERA compliance, title due diligence, and coordinating Development Agreement review.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Strategic Land Advisory",
    description:
      "Structuring high-value land aggregation, title clearance, joint ventures, and optimizing land development potential for estates and institutional landowners.",
    icon: Compass,
  },
];

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll-reveal animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="about"
      aria-label="About Aishwarya Redevelopment Advisory"
      className="relative py-24 sm:py-32 lg:py-36 bg-ivory text-charcoal overflow-hidden border-t border-gold/20"
    >
      {/* Background Architectural Watermark Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#0B1D3A_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Asymmetrical Editorial Image Composition (5 Cols on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Frame & Subtle Layered Offset */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Muted Gold Offset Backdrop Frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 border border-gold/30 rounded-xs pointer-events-none translate-x-2 translate-y-2 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Image Wrapper with Editorial Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-navy-950 shadow-[0_12px_32px_rgba(11,29,58,0.08)] border border-gold/30">
                <Image
                  src="/images/projects/about-redevelopment-study.jpg"
                  alt="Illustrative residential facade with planted balconies and warm architectural lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  quality={90}
                  className="object-cover object-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.025]"
                />

                {/* Subtle Image Gradient Overlay for Warmth and Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating Architectural Integrity Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xs bg-navy-950/90 backdrop-blur-md border border-gold/30 text-ivory">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="size-1.5 rotate-45 bg-gold-400" aria-hidden="true" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold">
                      Advisory Discipline
                    </span>
                  </div>
                  <p className="font-serif text-sm sm:text-base text-ivory-50 leading-snug">
                    Independent Fiduciary Diligence &amp; Society Value Realization
                  </p>
                </div>
              </div>

              {/* Verified Status Note Under Image */}
              <p className="mt-3 text-[11px] font-sans text-charcoal/60 text-center sm:text-left">
                Illustrative architectural study • Not a verified company project
              </p>
            </div>
          </motion.div>

          {/* Right Column: Company Editorial Narrative & Expertise (7 Cols on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
            variants={fadeIn}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-700">
                Who We Are
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-navy tracking-tight leading-[1.14] mb-6">
              A Legacy of Trust.{" "}
              <span className="italic font-light text-gold-700">A Vision for Tomorrow.</span>
            </h2>

            {/* Accent Divider with Signature Gold Diamond Pivot */}
            <div className="flex items-center gap-2 mb-7" aria-hidden="true">
              <span className="h-px w-20 bg-gold/70" />
              <span className="hidden" />
              <span className="hidden" />
            </div>

            {/* Company Introduction Narrative */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal mb-8">
              <p>
                Aishwarya Redevelopment Advisory Company is a Mumbai-based real estate and
                redevelopment advisory firm supporting cooperative housing societies, property owners
                and stakeholders through complex redevelopment decisions.
              </p>
              <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
                The company&apos;s advisory work includes society redevelopment, feasibility evaluation,
                developer due diligence, title and regulatory coordination, self-redevelopment guidance
                and strategic land advisory.
              </p>
            </div>

            {/* Expertise Highlights (Refined Editorial List with Fine Dividers) */}
            <div className="border-t border-b border-gold/25 divide-y divide-gold/15 mb-9">
              {expertiseHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="py-4.5 sm:py-5 group flex items-start gap-4 sm:gap-6 transition-colors hover:bg-gold/5 px-2 rounded-xs"
                  >
                    <span className="font-mono text-xs sm:text-sm text-gold-600 font-semibold tracking-wider pt-0.5">
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="size-4 text-gold-600 group-hover:text-gold-700 transition-colors" aria-hidden="true" />
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-navy">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA and Trust Assurance */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8">
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.16em] text-ivory-50 bg-navy hover:bg-navy-900 border border-gold/40 hover:border-gold transition-all duration-300 rounded-xs shadow-md active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="size-4 text-gold-400 group-hover:text-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              {/* Supporting Fiduciary Assurance */}
              <div className="inline-flex items-center gap-2 text-xs font-sans text-charcoal/70">
                <CheckCircle2 className="size-4 text-gold-600 shrink-0" aria-hidden="true" />
                <span>Unbiased fiduciary representation protecting member equity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

