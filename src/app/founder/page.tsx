import { pageMetadata } from "@/lib/seo";
import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export const metadata = pageMetadata("/founder", "Mr. Sachin Murudkar, Founder & Director", "Meet Mr. Sachin Murudkar, Founder & Director of Aishwarya Redevelopment Advisory Company, and explore the company's redevelopment advisory perspective.");

const portraitSrc = "/images/founder-portrait.jpeg";
const pillars = [
  [
    "Municipal & Administrative Procedures",
    "Identified area of founder expertise."
  ],
  [
    "Title Resolution & Due Diligence",
    "Identified area of founder expertise."
  ],
  [
    "Society Redevelopment Strategy",
    "Identified area of founder expertise."
  ],
  [
    "Self-Redevelopment",
    "Identified area of founder expertise."
  ],
  [
    "Land Amalgamation & Land Valuation",
    "Both are identified areas of founder expertise."
  ]
];
const commitments = [
  [
    "Mumbai Redevelopment Advisory",
    "Identified area of founder expertise."
  ],
  [
    "Society Redevelopment Strategy",
    "Identified area of founder expertise."
  ],
  [
    "Title Resolution & Due Diligence",
    "Identified area of founder expertise."
  ],
  [
    "Land Valuation",
    "Identified area of founder expertise."
  ]
];
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function FounderPage() {
  const hasPortrait = existsSync(path.join(process.cwd(), "public", portraitSrc));
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory text-navy">
        <section aria-labelledby="founder-name" className="overflow-hidden bg-navy pt-24 text-ivory sm:pt-32">
          <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7"><p className="mb-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold"><span className="h-px w-9 bg-gold" aria-hidden="true" />Founder &amp; Director</p><p className="mb-3 font-serif text-2xl text-ivory/70">Mr.</p><h1 id="founder-name" className="editorial-portrait-title font-serif text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Sachin<br /><span className="font-light italic text-gold">Murudkar</span></h1><p className="mt-9 max-w-lg font-serif text-2xl leading-snug sm:text-3xl">Mumbai Redevelopment Advisory.<br />Founder &amp; Director.</p><p className="mt-6 max-w-md text-sm leading-7 text-ivory/65">Founder &amp; Director<br />Aishwarya Redevelopment Advisory Company</p><a href="#introduction" className={`${focus} mt-8 inline-flex min-h-12 items-center gap-5 border-b border-gold/50 text-xs text-gold hover:text-ivory`}>The leadership perspective <ArrowDown size={16} aria-hidden="true" /></a></div>
            <figure className="relative mx-auto w-full max-w-md lg:col-span-5"><div aria-hidden="true" className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 border border-gold/25" /><div className="editorial-image-frame relative aspect-[4/5] overflow-hidden border border-gold/25 bg-navy-950">
              {hasPortrait ? <Image src={portraitSrc} alt="Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" fill sizes="(max-width: 1024px) 100vw, 42vw" className="bg-white object-contain" /> : <div className="flex h-full flex-col justify-between p-8 sm:p-10"><p className="border-b border-gold/25 pb-5 text-xs uppercase tracking-[0.22em] text-gold">Executive Leadership</p><div className="py-10 text-center"><span aria-hidden="true" className="font-serif text-8xl font-light tracking-[0.04em] text-gold/80">SM</span><p className="mt-6 text-xs tracking-wide text-ivory/60">Official portrait forthcoming</p></div><p className="border-t border-gold/25 pt-5 font-serif text-xl text-ivory/80">A considered perspective.<br /><span className="italic text-gold">A clear sense of responsibility.</span></p></div>}
            </div><figcaption className="relative mt-6 text-xs uppercase tracking-[0.16em] text-ivory/55">{hasPortrait ? "Mr. Sachin Murudkar / Founder & Director" : "Typographic profile / No substitute portrait used"}</figcaption></figure>
          </Container>
        </section>

        <section id="introduction" aria-label="Executive introduction" className="scroll-mt-28 py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-5"><SectionHeading align="left" eyebrow="Executive introduction" title={<>Mr. Sachin Murudkar: <span className="italic">Founder &amp; Director.</span></>} /></div><div className="space-y-5 text-sm leading-7 text-charcoal/75 lg:col-span-7"><p>Mr. Sachin Murudkar is the Founder &amp; Director of Aishwarya Redevelopment Advisory Company.</p><p>His stated expertise includes Mumbai redevelopment advisory, municipal and administrative procedures, title resolution and due diligence, society redevelopment strategy, self-redevelopment, land amalgamation and land valuation.</p><p>The full biography and professional background await the original Director Introduction document.</p><Link href="/services" className={`${focus} inline-flex min-h-12 items-center gap-4 border-b border-gold text-xs text-navy hover:text-gold-800`}>Explore the advisory practice <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></Container></section>

        <section aria-label="Experience and perspective" className="border-y border-gold/25 bg-navy py-20 text-ivory sm:py-24"><Container><div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-6"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Founder expertise</p><h2 className="font-serif text-5xl leading-tight sm:text-6xl">Advisory<br /><span className="font-light italic text-gold">&amp; Expertise</span></h2></div><div className="border-l border-gold/50 pl-7 lg:col-span-6"><p className="font-serif text-2xl leading-snug sm:text-3xl">Mumbai redevelopment advisory.</p><p className="mt-6 text-sm leading-7 text-ivory/70">The client task identifies redevelopment strategy, municipal and administrative procedures, title resolution and due diligence as areas of founder expertise.</p><p className="mt-4 text-sm leading-7 text-ivory/70">No employment history, qualifications, awards or numerical achievements are published without supporting source information.</p></div></div></Container></section>

        <section aria-label="Founder expertise" className="py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-4"><SectionHeading align="left" eyebrow="Founder expertise" title={<>A connected view.<br /><span className="italic">A focused approach.</span></>} /><p className="mt-6 text-sm leading-7 text-charcoal/70">The expertise topics explicitly supplied in the client task are listed here.</p></div><ol className="divide-y divide-navy/15 border-t border-navy/15 lg:col-span-8">{pillars.map(([title, text], index) => <li key={title} className="group flex gap-5 py-8 sm:gap-8"><span className="font-serif text-3xl text-gold-700 sm:text-4xl">0{index + 1}</span><div><h3 className="font-serif text-2xl leading-tight motion-safe:transition-colors group-hover:text-gold-800 sm:text-3xl">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/75">{text}</p></div></li>)}</ol></div></Container></section>

        <section aria-label="Leadership philosophy" className="border-y border-navy/10 bg-white/50 py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-7"><p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-gold-800">Leadership philosophy</p><h2 className="max-w-2xl font-serif text-5xl leading-[1.08] sm:text-6xl">Client&apos;s Profit<br /><span className="font-light italic text-gold-800">is Our Success.</span></h2><p className="mt-8 max-w-lg text-sm leading-7 text-charcoal/70">The corporate philosophy supplied in the task is reproduced above. It is not a guarantee of financial returns.</p></div><div className="space-y-6 self-center border-l border-gold/50 pl-7 text-sm leading-7 text-charcoal/75 lg:col-span-5"><p>Company philosophy: Client&apos;s Profit is Our Success.</p><p>Further founder philosophy and background await the original Director Introduction document.</p></div></div></Container></section>

        <section aria-label="Founder expertise" className="py-20 sm:py-28"><Container><SectionHeading align="left" eyebrow="Founder expertise" title={<>Areas of expertise.<br /><span className="italic">As supplied by the client.</span></>} /><div className="mt-12 grid gap-x-16 md:grid-cols-2">{commitments.map(([title, text], index) => <article key={title} className="border-t border-navy/15 py-8"><p className="mb-5 text-xs text-gold-700">0{index + 1} / Expertise</p><h3 className="font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/75">{text}</p></article>)}</div><p className="mt-5 max-w-2xl border-l-2 border-gold pl-5 text-xs leading-6 text-charcoal/65">Detailed commitments and engagement claims await the original Director Introduction document.</p></Container></section>
        <ConsultationCTA title={<>Discuss <span className="font-light italic text-gold-300">Redevelopment Advisory.</span></>} />
      </main>
      <Footer />
    </>
  );
}

