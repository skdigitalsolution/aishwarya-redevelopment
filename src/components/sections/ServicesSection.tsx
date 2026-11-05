"use client";

import { ClientImage } from "@/components/ui/ClientImage";

import React from "react";
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
      "Comprehensive advisory for cooperative housing societies across Mumbai. From general body alignment and Section 79A procedural adherence to developer selection and Development Agreement coordination.",
    icon: Building2,
    deliverables: ["Section 79A Compliance", "Member Consensus Building", "DA Covenant Drafting"],
  },
  {
    number: "02",
    title: "Self-Redevelopment Guidance",
    subtitle: "Society-Led Planning & Value Assessment",
    description:
      "Strategic advisory empowering societies to redevelop independently. Assisting committees with project feasibility, bank financing tie-ups, PMC appointment, and regulatory approvals without developer dependency.",
    icon: Users2,
    deliverables: ["Surplus Area Maximization", "Institutional Funding Tie-ups", "PMC Due Diligence"],
  },
  {
    number: "03",
    title: "Legal & Title Due Diligence",
    subtitle: "Title Review & Conveyance Guidance",
    description:
      "Rigorous legal scrutiny safeguarding society land ownership. Covering property-specific title investigations, deemed conveyance clearance, CTS plan verification, and uncompromised member security covenants.",
    icon: Scale,
    deliverables: ["Deemed Conveyance", "Title History Review", "MOFA & RERA Vetting"],
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
  const reduced = useReducedMotion();
  const featured = servicesList[0];
  return (
    <section id="services" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-services-heading" className="bg-navy-950 py-20 text-ivory sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Expertise</p><h2 id="home-services-heading" className="font-serif text-4xl leading-[1.08] sm:text-5xl">Comprehensive Advisory.<br /><span className="font-light italic text-gold-300">Confident Decisions.</span></h2></div>
          <p className="max-w-md text-sm leading-7 text-ivory/75 lg:col-span-5">Guiding managing committees, housing societies, and landowners through high-stakes urban redevelopment with rigorous fiduciary diligence and technical clarity.</p>
        </div>
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.article data-motion-owned initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [38, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} className="min-w-0 lg:col-span-5">
            <h3 className="font-serif text-3xl leading-tight text-ivory">{featured.title}</h3>
            <p className="mt-5 text-sm leading-7 text-ivory/80">{featured.description}</p>
            <ClientImage id={2} dark aspect="aspect-[4/3]" className="mt-7" />
            <Link href="#contact" className="mt-6 inline-flex min-h-12 items-center gap-3 border-b border-gold/60 text-sm text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Discuss society advisory <ArrowRight size={16} aria-hidden="true" /></Link>
          </motion.article>
          <div className="divide-y divide-ivory/15 border-t border-ivory/15 lg:col-span-7">
            {servicesList.slice(1).map((service) => <article key={service.number} className="py-7 first:pt-6">
              <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/75">{service.description}</p>
              <Link href="#contact" aria-label={"Discuss " + service.title} className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs text-gold-300 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Discuss this service <ArrowRight size={14} aria-hidden="true" /></Link>
            </article>)}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-ivory/15 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-lg text-xs leading-6 text-ivory/70">Structured advisory frameworks aligned with RERA &amp; Section 79A mandates</p>
          <Link href="/services" className="inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-xs font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore All Services <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </Container>
    </section>
  );
};
export default ServicesSection;
