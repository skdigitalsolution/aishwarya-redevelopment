"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Building2,
  Users2,
  Scale,
  Compass,
  FileCheck2,
  Landmark,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

const servicesList: ServiceItem[] = [
  {
    number: "01",
    title: "Society Redevelopment Advisory",
    subtitle: "End-to-End Fiduciary Society Representation",
    description:
      "Comprehensive advisory for cooperative housing societies across Mumbai. From general body alignment and Section 79A procedural adherence to developer selection and airtight Development Agreement execution.",
    icon: Building2,
    deliverables: ["Section 79A Compliance", "Member Consensus Building", "DA Covenant Drafting"],
  },
  {
    number: "02",
    title: "Self-Redevelopment Guidance",
    subtitle: "Retaining 100% Equity & Surplus Value",
    description:
      "Strategic advisory empowering societies to redevelop independently. Assisting committees with project feasibility, bank financing tie-ups, PMC appointment, and regulatory approvals without developer dependency.",
    icon: Users2,
    deliverables: ["Surplus Area Maximization", "Institutional Funding Tie-ups", "PMC Due Diligence"],
  },
  {
    number: "03",
    title: "Legal & Title Due Diligence",
    subtitle: "Airtight Risk Mitigation & Conveyance",
    description:
      "Rigorous legal scrutiny safeguarding society land ownership. Covering 30-year title search reports, deemed conveyance clearance, CTS plan verification, and uncompromised member security covenants.",
    icon: Scale,
    deliverables: ["Deemed Conveyance", "30-Year Title Search", "MOFA & RERA Vetting"],
  },
  {
    number: "04",
    title: "Architectural Feasibility & FSI Optimization",
    subtitle: "DCPR 2034 Regulatory Potential",
    description:
      "Precise techno-commercial modeling unlocking maximum potential under Mumbai DCPR 2034. Calculating base FSI, TDR loading, fungible area, and projecting optimal carpet area enhancements for members.",
    icon: Compass,
    deliverables: ["DCPR 2034 Feasibility", "Carpet Area Projections", "TDR & Fungible FSI Modeling"],
  },
  {
    number: "05",
    title: "Developer Due Diligence & Tendering",
    subtitle: "Institutional Bid Structuring & Financial Vetting",
    description:
      "Transparent public or invited tender management. Auditing prospective developers' balance sheets, past delivery track records, bank guarantee commitments, and structuring binding competitive bids.",
    icon: FileCheck2,
    deliverables: ["Tender Document Drafting", "Financial Health Audits", "Bank Guarantee Structuring"],
  },
  {
    number: "06",
    title: "Strategic Land Banking & Brokerage",
    subtitle: "High-Value Aggregation & Institutional JDA",
    description:
      "Bespoke transaction advisory for large landowners, family estates, and developers. Navigating title clearance, parcel aggregation, joint development agreements (JDA), and outright monetisation across MMR.",
    icon: Landmark,
    deliverables: ["Land Parcel Aggregation", "JDA / JV Structuring", "Title Liquidity & Valuation"],
  },
];

export const ServicesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  const featuredService = servicesList[0];
  const supportingServices = servicesList.slice(1);

  return (
    <section
      id="services"
      aria-label="Advisory Services and Capabilities"
      className="relative py-24 sm:py-32 lg:py-36 bg-navy-950 text-ivory overflow-hidden border-t border-gold/20"
    >
      {/* Background Architectural Scrim and Subtle Radial Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(198,166,107,0.08),transparent_65%)] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none select-none bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 sm:pb-18 border-b border-gold/20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-gold-400" aria-hidden="true" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                Our Expertise
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-ivory-50 tracking-tight leading-[1.12]">
              Comprehensive Advisory.{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-light text-gold-300">Confident Decisions.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ivory-300/80 max-w-md leading-relaxed font-light">
            Guiding managing committees, housing societies, and landowners through high-stakes urban
            redevelopment with rigorous fiduciary diligence and technical clarity.
          </p>
        </div>

        {/* Asymmetrical Editorial Services Layout */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Featured Core Pillar (5 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-xs bg-navy-900/90 border border-gold/35 relative overflow-hidden group shadow-2xl"
          >
            {/* Subtle background image accent */}
            <div className="absolute inset-0 z-0 opacity-15 transition-opacity duration-700 group-hover:opacity-25 pointer-events-none">
              <Image
                src="/images/hero/hero-architecture-fallback.jpg"
                alt="Society Redevelopment Advisory Architectural Study"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-gold/20">
                <span className="font-mono text-sm font-semibold text-gold-400 tracking-widest">
                  {featuredService.number}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-gold/15 text-gold-300 text-[10px] font-sans uppercase tracking-[0.16em] font-medium border border-gold/30">
                  <ShieldCheck className="size-3 text-gold-400" />
                  Primary Pillar
                </span>
              </div>

              <div className="mt-8">
                <div className="p-3 w-fit rounded-xs bg-gold/15 border border-gold/30 text-gold-400 mb-5">
                  <Building2 className="size-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-medium leading-tight mb-2">
                  {featuredService.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-400/90 mb-4 font-medium">
                  {featuredService.subtitle}
                </p>
                <p className="font-sans text-sm text-ivory-300/85 leading-relaxed font-light mb-8">
                  {featuredService.description}
                </p>
              </div>

              {/* Key Deliverables Pills */}
              <div className="space-y-2 pt-6 border-t border-gold/15">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400/70 block mb-2 font-semibold">
                  Key Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredService.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-sans rounded-xs bg-navy-950/80 border border-gold/25 text-ivory-200/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* In-Card Consultation Link */}
            <div className="relative z-10 pt-8 mt-8 border-t border-gold/20">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-gold-300 hover:text-gold font-medium group/link transition-colors"
              >
                <span>Initiate Society Advisory</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 5 Balanced Editorial Service Blocks (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index + 2}
                  variants={fadeIn}
                  className="group p-6 sm:p-7 rounded-xs bg-navy-900/60 hover:bg-navy-900 border border-gold/20 hover:border-gold/45 transition-all duration-300 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm text-gold-400/70 group-hover:text-gold font-medium pt-1 shrink-0">
                        {service.number}
                      </span>

                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2.5">
                          <Icon className="size-4 text-gold-400 shrink-0" aria-hidden="true" />
                          <h3 className="font-serif text-xl sm:text-2xl font-medium text-ivory-50 group-hover:text-gold transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        <p className="font-sans text-xs text-gold-400/80 font-medium uppercase tracking-[0.14em]">
                          {service.subtitle}
                        </p>

                        <p className="font-sans text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light pt-1">
                          {service.description}
                        </p>

                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-2 pt-3">
                          {service.deliverables.map((deliv) => (
                            <span
                              key={deliv}
                              className="px-2 py-0.5 text-[11px] font-sans rounded-xs bg-navy-950/70 border border-gold/15 text-ivory-300/75 group-hover:border-gold/30 transition-colors"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="self-end sm:self-start shrink-0 pt-1">
                      <Link
                        href="#contact"
                        aria-label={`Inquire about ${service.title}`}
                        className="p-2 rounded-xs border border-gold/20 group-hover:border-gold group-hover:bg-gold/10 text-gold-400 group-hover:text-gold transition-all inline-flex items-center justify-center"
                      >
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Editorial Call-to-Action */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-ivory-300/80 font-light">
            <span className="size-2 rotate-45 border border-gold-400 bg-gold-400/20" aria-hidden="true" />
            <span>Structured advisory frameworks aligned with RERA &amp; Section 79A mandates</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-all duration-300 rounded-xs shadow-lg active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span>Explore All Services</span>
            <ArrowRight className="size-4 text-navy-950 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

