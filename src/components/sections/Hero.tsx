"use client";

import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Calendar, ShieldCheck, FileCheck, Building2, Landmark } from "lucide-react";
import { Container } from "@/components/layout/Container";

import { premiumMotion, usePremiumMotion } from "@/components/ui/premium-motion";
import "./hero.css";

const advisoryPillars = [
 {icon:ShieldCheck,title:"Society Redevelopment Advisory",detail:"Client-listed professional service"},
 {icon:FileCheck,title:"Redevelopment Feasibility Study",detail:"Client-listed professional service"},
 {icon:Building2,title:"Developer Due Diligence",detail:"MahaRERA track record, financial solvency and society feedback"},
 {icon:Landmark,title:"Land Amalgamation & Land Valuation",detail:"Identified areas of founder expertise"},
];

/** Only the designated, original client skyline may be supplied by the homepage server. */
export function Hero({ skylineImage }: { skylineImage?: string }) {
  const { reducedMotion } = usePremiumMotion();
  const entrance = (delay: number) => ({
    initial: false as const,
    animate: reducedMotion ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [20, 0] },
    transition: { duration: reducedMotion ? 0 : premiumMotion.fadeDuration, delay: reducedMotion ? 0 : delay, ease: premiumMotion.ease },
  });

  return (
    <section data-motion-owned id="home" style={{ scrollMarginTop: "7rem" }} aria-label="Welcome to Aishwarya Redevelopment Advisory Company" className="home-premium-hero relative isolate flex min-h-[min(900px,100svh)] flex-col justify-between overflow-hidden bg-navy text-ivory pt-28 pb-8 sm:pt-36 sm:pb-10 lg:pt-36">
      {skylineImage && (
        <motion.div initial={false} animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.65, 1], scale: [1.035, 1] }} transition={{ duration: reducedMotion ? 0 : 1.8, ease: premiumMotion.ease }} className="home-premium-hero__image pointer-events-none absolute inset-0 z-0 select-none">
          <Image
            src={skylineImage}
            alt="Client-supplied Mumbai skyline at sunset with the Bandra-Worli Sea Link and waterfront high-rise buildings"
            fill
            preload
            quality={88}
            sizes="100vw"
            className="z-0 object-cover object-[76%_center] sm:object-[68%_center] lg:object-[center_58%]"
          />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/55 to-navy-950/10" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/25" />
        </motion.div>
      )}

      <Container className="home-premium-hero__content relative z-20 my-auto py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <motion.p {...entrance(0.08)} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:mb-9 sm:text-xs"><span aria-hidden="true" className="h-px w-9 bg-gold/70" />Strategic Redevelopment Advisory · Mumbai</motion.p>
          <motion.h1 {...entrance(0.16)} className="font-serif font-normal leading-none tracking-[0.035em] text-ivory [text-shadow:0_2px_20px_rgba(6,15,30,0.3)]"
          >
            <span className="block text-[clamp(2.75rem,7.2vw,6.5rem)]">AISHWARYA</span>{" "}
            <motion.span {...entrance(0.26)} className="mt-5 block max-w-3xl font-sans text-[clamp(0.75rem,1.35vw,1.125rem)] font-medium leading-7 tracking-[0.16em] text-gold sm:tracking-[0.22em]">REDEVELOPMENT ADVISORY COMPANY</motion.span>
          </motion.h1>
          <motion.p {...entrance(0.36)} className="mt-9 max-w-2xl font-serif text-3xl leading-[1.18] sm:mt-11 sm:text-4xl lg:text-5xl"
          >
            Mumbai Redevelopment Advisory.<br /><span className="font-light italic text-ivory/90">Society Redevelopment Strategy.</span>
          </motion.p>

          {/* Server-rendered links remain available before hydration. */}
          <motion.div {...entrance(0.46)} className="mt-9 flex flex-col items-stretch gap-4 sm:mt-11 sm:flex-row sm:items-center sm:gap-6">
            <Link href="#services" className="home-premium-hero__cta home-premium-hero__cta--gold group inline-flex min-h-12 items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:bg-gold-300 motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Explore Our Services <ArrowRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" /></Link>
            <Link href="#contact" className="home-premium-hero__cta inline-flex min-h-12 items-center justify-center gap-3 border border-ivory/45 bg-navy-950/25 px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-ivory hover:border-gold hover:text-gold motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Calendar size={16} aria-hidden="true" />Discuss a Consultation</Link>
          </motion.div>
        </div>
        <a href="#about" className="mt-10 inline-flex min-h-11 items-center gap-4 text-xs uppercase tracking-[0.18em] text-ivory/80 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:absolute lg:right-12 lg:bottom-12 lg:mt-0"><span>Scroll to discover</span><motion.span initial={false} animate={reducedMotion ? { y: 0 } : { y: [0, 3, 0] }} transition={{ duration: reducedMotion ? 0 : 1.2, delay: reducedMotion ? 0 : 0.6 }}><ArrowDown size={16} strokeWidth={1.25} aria-hidden="true" /></motion.span></a>
      </Container>

      <div className="relative z-20 mt-8 border-t border-gold/25 bg-navy-950/75 py-6 sm:mt-10 sm:py-7">
        <Container>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-8">
            {advisoryPillars.map(({ icon: Icon, title, detail }) => <div key={title} className="border-l border-gold/35 pl-4"><div className="mb-2 flex items-center gap-2"><Icon size={16} strokeWidth={1.4} className="shrink-0 text-gold" aria-hidden="true" /><p className="font-serif text-lg leading-tight text-ivory">{title}</p></div><p className="hidden max-w-xs text-xs leading-6 text-ivory/75 sm:block">{detail}</p></div>)}
          </div>
          <p className="mt-6 border-t border-ivory/10 pt-4 text-xs leading-5 tracking-wide text-ivory/65">Mumbai Redevelopment Advisory</p>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
