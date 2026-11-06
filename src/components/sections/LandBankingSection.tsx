"use client";

import { ClientImage } from "@/components/ui/ClientImage";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Landmark, Handshake, FileSearch2, Compass, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const landServices = [
 {number:"01",title:"Strategic Land Banking Vault",description:"Core Wealth Holdings, Value-Add Portfolios and Fast-Track Liquidation Assets.",icon:Compass},
 {number:"02",title:"Land Brokerage & Advisory",description:"Client-specified land advisory scope. Original descriptions pending.",icon:Handshake},
 {number:"03",title:"Three-tier Due Diligence",description:"Original tier names and descriptions await the Land Banking presentation.",icon:FileSearch2},
 {number:"04",title:"Channel Partner & Asset Owner Syndication",description:"Client-specified syndication category. Original descriptions pending.",icon:Landmark},
];

export const LandBankingSection: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <section id="land-banking" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-land-heading" className="bg-navy-950 py-20 text-ivory sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6"><SectionHeading align="left" showDivider={false} theme="dark" eyebrow="Strategic Land Advisory" title={<span id="home-land-heading">A wider view of land.<br /><span className="italic text-gold-300">A clear next step.</span></span>} subtitle="Land Brokerage & Advisory, Strategic Land Banking Vault, and Channel Partner & Asset Owner Syndication." />
            <p className="mt-6 max-w-lg text-sm leading-7 text-ivory/75">Explore the land advisory categories supplied in the client task. Detailed descriptions await the original Land Banking presentation.</p>
            <Link href="/land-banking" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-xs font-semibold text-navy hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore Land Banking <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="min-w-0 lg:col-span-6"><ClientImage id={5} dark aspect="aspect-[4/3]" /><p className="mt-3 text-xs leading-6 text-ivory/70">Urban context only. This image does not represent an available land parcel or verified company inventory.</p></div>
        </div>
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-14">
          {landServices.map((service, index) => <motion.article data-motion-owned key={service.number} initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [38, 0] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Math.min(index, 3) * 0.08, ease: [0.22, 1, 0.36, 1] }} className="border-t border-ivory/15 py-7">
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{service.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ivory/75">{service.description}</p>
          </motion.article>)}
        </div>
      </Container>
    </section>
  );
};
export default LandBankingSection;
