"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Calendar, ShieldCheck, FileCheck, Building2, Landmark } from "lucide-react";
import { Container } from "@/components/layout/Container";

const advisoryPillars = [
  {
    icon: ShieldCheck,
    title: "Fiduciary Alignment",
    detail: "Independent advisory safeguarding housing society interests",
  },
  {
    icon: FileCheck,
    title: "Feasibility & Consensus",
    detail: "Transparent financial modeling & member alignment",
  },
  {
    icon: Building2,
    title: "Tender & DA Structuring",
    detail: "Rigorous developer selection & airtight legal covenants",
  },
  {
    icon: Landmark,
    title: "Land & Title Diligence",
    detail: "Strategic land aggregation & regulatory navigation",
  },
];

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with graceful degradation when prefers-reduced-motion is true
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Aishwarya Redevelopment Advisory"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-navy-950 overflow-hidden"
    >
      {/* Background Architectural Visual Composition */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero/hero-architecture-fallback.jpg"
          alt="Contemporary luxury architectural redevelopment in Mumbai"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
        />

        {/* Multi-layered luxury deep navy scrims for high editorial contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,166,107,0.12),transparent_70%)]"
          aria-hidden="true"
        />
      </div>

      {/* Main Editorial Content Container */}
      <div className="relative z-10 my-auto">
        <Container size="xl">
          <div className="max-w-4xl">
            {/* Editorial Category Eyebrow */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-5 sm:mb-6"
            >
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-gold-400 to-transparent" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                Strategic Redevelopment Advisory • Mumbai
              </span>
            </motion.div>

            {/* Primary Editorial Headline */}
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-normal text-ivory-50 tracking-[-0.01em] leading-[1.08] mb-6 sm:mb-8"
            >
              Transforming Spaces.{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-light text-gold-300">Securing Futures.</span>
            </motion.h1>

            {/* Supporting Advisory Narrative */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-sans text-base sm:text-lg md:text-xl text-ivory-200/90 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10"
            >
              Strategic redevelopment advisory, land expertise and comprehensive real estate solutions for Mumbai&apos;s evolving urban landscape.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* Primary CTA */}
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-all duration-300 rounded-xs shadow-lg shadow-gold/15 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.16em] text-ivory-100 hover:text-gold border border-gold/40 hover:border-gold hover:bg-navy-900/50 backdrop-blur-xs transition-all duration-300 rounded-xs active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <Calendar className="size-4 text-gold-400" aria-hidden="true" />
                <span>Schedule a Consultation</span>
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Grounding Advisory Pillars Strip (Genuine Fiduciary Focus Areas — No Fabricated Stats) */}
      <div className="relative z-10 mt-12 sm:mt-16 pt-8 border-t border-gold/15">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advisoryPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative pl-4 border-l border-gold/30 hover:border-gold transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="size-4 text-gold-400 group-hover:text-gold transition-colors" aria-hidden="true" />
                    <h3 className="font-serif text-sm sm:text-base font-medium text-ivory-50 tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-ivory-300/75 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transparent Asset Status Note */}
          <div className="mt-8 pt-4 border-t border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-ivory-300/60 font-sans gap-2">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold-400/80 animate-pulse" aria-hidden="true" />
              <span>Independent Fiduciary Counsel for Cooperative Housing Societies &amp; Landowners</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gold-400/60 font-mono">
              Temporary Architectural Study Visual • Official Project Photography Pending
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
