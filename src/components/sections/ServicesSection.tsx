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
 {number:"01",title:"Society Redevelopment Advisory",subtitle:"",description:"Client-listed professional service.",icon:Building2,deliverables:[]},
 {number:"02",title:"Redevelopment Feasibility Study",subtitle:"",description:"Client-listed professional service.",icon:Users2,deliverables:[]},
 {number:"03",title:"Legal & Regulatory Advisory",subtitle:"",description:"Client-listed professional service.",icon:Scale,deliverables:[]},
 {number:"04",title:"Architectural & Design Consultation",subtitle:"",description:"Client-listed professional service.",icon:Compass,deliverables:[]},
 {number:"05",title:"Builder / Developer Selection & Tendering",subtitle:"",description:"Client-listed professional service.",icon:FileCheck2,deliverables:[]},
 {number:"06",title:"Land Acquisition & Due Diligence",subtitle:"",description:"Client-listed professional service.",icon:Landmark,deliverables:[]},
];

export const ServicesSection: React.FC = () => {
  const reduced = useReducedMotion();
  const featured = servicesList[0];
  return (
    <section id="services" style={{ scrollMarginTop: "7rem" }} aria-labelledby="home-services-heading" className="bg-navy-950 py-20 text-ivory sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Expertise</p><h2 id="home-services-heading" className="font-serif text-4xl leading-[1.08] sm:text-5xl">Real Estate Services.<br /><span className="font-light italic text-gold-300">Client-listed service names.</span></h2></div>
          <p className="max-w-md text-sm leading-7 text-ivory/75 lg:col-span-5">Selected names from the client-supplied list of 20 professional services.</p>
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
          <p className="max-w-lg text-xs leading-6 text-ivory/70">Exact service descriptions await the original Complete Real Estate Services image.</p>
          <Link href="/services" className="inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-3 text-xs font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore All Services <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </Container>
    </section>
  );
};
export default ServicesSection;
