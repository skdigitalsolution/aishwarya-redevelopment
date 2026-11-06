"use client";

import { premiumMotion, usePremiumMotion } from "@/components/ui/premium-motion";

import { ClientImage } from "@/components/ui/ClientImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Building2, Scale, Compass, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const expertiseHighlights = [
 {number:"01", title:"Society Redevelopment Advisory", description:"Mumbai redevelopment advisory and society redevelopment strategy.", icon:Building2},
 {number:"02", title:"Title Resolution & Due Diligence", description:"Municipal and administrative procedures; title resolution and due diligence.", icon:Scale},
 {number:"03", title:"Land Amalgamation & Land Valuation", description:"Both are identified areas of founder expertise.", icon:Compass},
];

export const AboutSection: React.FC = () => {
  const { reducedMotion: shouldReduceMotion } = usePremiumMotion();

  // Subtle scroll-reveal animation variants
  const fadeIn = {
    hidden: { opacity: 1, y: 0 },
    visible: (delay: number) => ({
      opacity: shouldReduceMotion ? 1 : [0, 1],
      y: shouldReduceMotion ? 0 : [premiumMotion.revealDistance, 0],
      transition: {
        duration: shouldReduceMotion ? 0 : premiumMotion.fadeDuration,
        delay: shouldReduceMotion ? 0 : Math.min(Math.max(delay - 1, 0) * premiumMotion.stagger, 0.24),
        ease: premiumMotion.ease,
      },
    }),
  };

  return (
    <section
      id="about" style={{ scrollMarginTop: "7rem" }}
      aria-label="About Aishwarya Redevelopment Advisory"
      className="relative py-20 sm:py-24 lg:py-28 bg-ivory text-charcoal overflow-hidden"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Asymmetrical Editorial Image Composition (5 Cols on Desktop) */}
          <ScrollReveal distance={30} className="lg:col-span-5 home-about-composition">
          <PerspectiveCard className="home-about-building">
            <ClientImage id={21} aspect="aspect-video" />
          </PerspectiveCard>
          <PerspectiveCard className="home-about-inset">
            {/* Architectural Frame & Subtle Layered Offset */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Client artwork retains its full embedded wording. */}
              <div className="relative w-full overflow-hidden bg-ivory">
                <ClientImage id={3} aspect="aspect-square" className="w-full" />
              </div>

            </div>
          </PerspectiveCard>
          </ScrollReveal>

          {/* Right Column: Company Editorial Narrative & Expertise (7 Cols on Desktop) */}
          <motion.div data-motion-owned
            initial={false}
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
              A Considered Approach.{" "}
              <span className="italic font-light text-gold-700">A Vision for Tomorrow.</span>
            </h2>

            {/* Company introduction */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal mb-8">
              <p>Aishwarya Redevelopment Advisory Company is led by Mr. Sachin Murudkar, Founder &amp; Director. His stated expertise includes Mumbai redevelopment advisory.</p>
              <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">The stated expertise includes society redevelopment strategy, self-redevelopment, municipal and administrative procedures, title resolution and due diligence, land amalgamation and land valuation.</p>
            </div>

            {/* Expertise Highlights (Refined Editorial List with Fine Dividers) */}
            <div className="divide-y divide-navy/10 mb-8">
              {expertiseHighlights.map((item) => {

                return (
                  <div
                    key={item.number}
                    className="py-4 group flex items-start gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
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
                href="/about"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.16em] text-ivory-50 bg-navy hover:bg-navy-900 border border-gold/40 hover:border-gold transition-all duration-300 rounded-xs shadow-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="size-4 text-gold-400 group-hover:text-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              {/* Supporting Fiduciary Assurance */}
              <div className="inline-flex items-center gap-2 text-xs font-sans text-charcoal/70">
                <CheckCircle2 className="size-4 text-gold-600 shrink-0" aria-hidden="true" />
                <span>Client&apos;s Profit is Our Success</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

