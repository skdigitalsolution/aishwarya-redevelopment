"use client";

import { ClientImage } from "@/components/ui/ClientImage";

import React from "react";
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
  const reduced = useReducedMotion();
  return (
    <section id="land-banking" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-land-heading" className="bg-navy-950 py-20 text-ivory sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6"><SectionHeading align="left" showDivider={false} theme="dark" eyebrow="Strategic Land Advisory" title={<span id="home-land-heading">A wider view of land.<br /><span className="italic text-gold-300">A clear next step.</span></span>} subtitle="Understand the ownership, development potential and transaction options for your property across the Mumbai Metropolitan Region." />
            <p className="mt-6 max-w-lg text-sm leading-7 text-ivory/75">Whether you are considering a sale, joint development or a longer-term holding, the conversation begins with your property records and objectives.</p>
            <Link href="/land-banking" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-xs font-semibold text-navy hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore Land Banking <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="min-w-0 lg:col-span-6"><ClientImage id={5} dark aspect="aspect-[4/3]" /><p className="mt-3 text-xs leading-6 text-ivory/70">Urban context only. This image does not represent an available land parcel or verified company inventory.</p></div>
        </div>
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-14">
          {landServices.map((service) => <motion.article key={service.number} initial={false} whileInView={reduced ? { opacity: 1 } : { opacity: [0.9, 1], y: [6, 0] }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.45 }} className="border-t border-ivory/15 py-7">
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{service.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ivory/75">{service.description}</p>
          </motion.article>)}
        </div>
      </Container>
    </section>
  );
};
export default LandBankingSection;
