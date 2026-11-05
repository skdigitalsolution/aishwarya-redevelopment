"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Calendar, ShieldCheck, FileCheck, Building2, Landmark } from "lucide-react";
import { Container } from "@/components/layout/Container";

const advisoryPillars = [
  { icon: ShieldCheck, title: "Fiduciary Alignment", detail: "Independent advisory safeguarding housing society interests" },
  { icon: FileCheck, title: "Feasibility & Consensus", detail: "Transparent financial modeling & member alignment" },
  { icon: Building2, title: "Tender & DA Structuring", detail: "Rigorous developer selection & carefully reviewed legal covenants" },
  { icon: Landmark, title: "Land & Title Diligence", detail: "Strategic land aggregation & regulatory navigation" },
];

/** Only the designated, original client skyline may be supplied by the homepage server. */
export function Hero({ skylineImage }: { skylineImage?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <section data-motion-owned id="home" style={{ scrollMarginTop: "7rem" }} aria-label="Welcome to Aishwarya Redevelopment Advisory Company" className="relative isolate flex min-h-[min(900px,100svh)] flex-col justify-between overflow-hidden bg-navy text-ivory pt-28 pb-8 sm:pt-36 sm:pb-10 lg:pt-36">
      {skylineImage && (
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <Image
            src={skylineImage}
            alt="Client-supplied Mumbai skyline at sunset with the Bandra-Worli Sea Link and waterfront high-rise buildings"
            fill
            preload
            quality={88}
            sizes="100vw"
            className="z-0 object-cover object-[76%_center] sm:object-[68%_center] lg:object-[center_58%]"
          />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-navy-950/5" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/25" />
        </div>
      )}

      <Container className="relative z-20 my-auto py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <motion.p initial={false} animate={reducedMotion ? { opacity: 1 } : { opacity: [0.94, 1], y: [4, 0] }} transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.15 }} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:mb-9 sm:text-xs"><span aria-hidden="true" className="h-px w-9 bg-gold/70" />Strategic Redevelopment Advisory · Mumbai</motion.p>
          <motion.h1
            initial={false}
            animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0.82, 1], y: [4, 0] }}
            transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-normal leading-none tracking-[0.035em] text-ivory [text-shadow:0_2px_20px_rgba(6,15,30,0.3)]"
          >
            <span className="block text-[clamp(2.75rem,7.2vw,6.5rem)]">AISHWARYA</span>{" "}
            <motion.span initial={false} animate={reducedMotion ? { opacity: 1 } : { opacity: [0.9, 1] }} transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : 0.2 }} className="mt-5 block max-w-3xl font-sans text-[clamp(0.75rem,1.35vw,1.125rem)] font-medium leading-7 tracking-[0.16em] text-gold sm:tracking-[0.22em]">REDEVELOPMENT ADVISORY COMPANY</motion.span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0.8, 1], y: [4, 0] }}
            transition={{ duration: reducedMotion ? 0 : 1.1, delay: reducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 max-w-2xl font-serif text-3xl leading-[1.18] sm:mt-11 sm:text-4xl lg:text-5xl"
          >
            Your Development Partner.<br /><span className="font-light italic text-ivory/90">Building Mumbai&apos;s Future Together.</span>
          </motion.p>

          {/* CTAs stay visible throughout the single entrance animation. */}
          <motion.div initial={false} animate={reducedMotion ? { opacity: 1 } : { opacity: [0.96, 1], y: [4, 0] }} transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.35 }} className="mt-9 flex flex-col items-stretch gap-4 sm:mt-11 sm:flex-row sm:items-center sm:gap-6">
            <Link href="#services" className="group inline-flex min-h-12 items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:bg-gold-300 motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore Our Services <ArrowRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" /></Link>
            <Link href="#contact" className="inline-flex min-h-12 items-center justify-center gap-3 border border-ivory/45 bg-navy-950/25 px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-ivory hover:border-gold hover:text-gold motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Calendar size={16} aria-hidden="true" />Discuss a Consultation</Link>
          </motion.div>
        </div>
        <a href="#about" className="mt-10 inline-flex min-h-11 items-center gap-4 text-xs uppercase tracking-[0.18em] text-ivory/80 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:absolute lg:right-12 lg:bottom-12 lg:mt-0"><span>Scroll to discover</span><motion.span initial={false} animate={reducedMotion ? { y: 0 } : { y: [0, 3, 0] }} transition={{ duration: reducedMotion ? 0 : 1.2, delay: reducedMotion ? 0 : 0.6 }}><ArrowDown size={16} strokeWidth={1.25} aria-hidden="true" /></motion.span></a>
      </Container>

      <div className="relative z-20 mt-8 border-t border-gold/25 bg-navy-950/75 py-6 sm:mt-10 sm:py-7">
        <Container>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-8">
            {advisoryPillars.map(({ icon: Icon, title, detail }) => <div key={title} className="border-l border-gold/35 pl-4"><div className="mb-2 flex items-center gap-2"><Icon size={16} strokeWidth={1.4} className="shrink-0 text-gold" aria-hidden="true" /><p className="font-serif text-lg leading-tight text-ivory">{title}</p></div><p className="hidden max-w-xs text-xs leading-6 text-ivory/75 sm:block">{detail}</p></div>)}
          </div>
          <p className="mt-6 border-t border-ivory/10 pt-4 text-xs leading-5 tracking-wide text-ivory/65">Independent Fiduciary Counsel for Cooperative Housing Societies &amp; Landowners</p>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
