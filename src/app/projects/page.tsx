import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { architecturalShowcase } from "@/lib/portfolio";
import { ArchitecturalGallery } from "./ArchitecturalGallery";

export const metadata: Metadata = {
  title: "Portfolio & Architectural Showcase | Aishwarya Redevelopment Advisory Company",
  description: "Explore an architectural and redevelopment visual showcase alongside Aishwarya's society redevelopment and land advisory approach. Illustrative imagery is clearly identified.",
};

const categories = [
  { title: "Society Redevelopment", text: "Explore our approach to feasibility, developer assessment and the decisions that shape a society's next chapter.", href: "/redevelopment", label: "Explore redevelopment advisory", note: "Advisory expertise" },
  { title: "Architectural Concepts", text: "View the residential architectural study and its selected details, presented as conceptual visual references.", href: "#showcase", label: "View the architectural study", note: "Visual study available" },
  { title: "Land Advisory", text: "Understand our framework for land assessment, transaction coordination and property-specific due diligence.", href: "/land-banking", label: "Explore land advisory", note: "Advisory expertise · No land imagery published" },
  { title: "Development Opportunities", text: "Discuss a property's potential through feasibility and commercial assessment. No verified opportunities are listed here.", href: "/services#financial", label: "Explore feasibility services", note: "Advisory exploration · No live listings" },
];
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ivory pt-24 text-navy sm:pt-32">
        <section aria-labelledby="portfolio-heading" className="relative overflow-hidden bg-navy text-ivory">
          <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-10">
            <div className="self-center lg:col-span-7"><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold"><span aria-hidden="true" className="h-px w-9 bg-gold" />Our Portfolio</p><h1 id="portfolio-heading" className="editorial-hero-title font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">Shaping Spaces.<br /><span className="font-light italic text-gold">Creating Possibilities.</span></h1><p className="mt-8 max-w-lg text-sm leading-7 text-ivory/75 sm:text-base">A considered perspective on the built environment, informed by redevelopment advisory, property evaluation and the possibilities of land.</p><a href="#showcase" className={`${focus} mt-10 inline-flex min-h-12 items-center gap-5 border-b border-gold/50 text-xs text-gold hover:text-ivory`}>Explore the visual showcase <ArrowDown size={16} aria-hidden="true" /></a></div>
            <figure className="lg:col-span-5 lg:pt-8"><div className="relative aspect-[4/5] overflow-hidden border border-gold/25"><Image src="/images/projects/about-redevelopment-study.jpg" alt="Illustrative residential architecture with planted balconies, warm facade lighting and a landscaped entrance" fill preload sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" /></div><figcaption className="mt-4 flex flex-wrap justify-between gap-2 border-t border-gold/30 pt-4 text-[10px] uppercase tracking-[0.16em] text-ivory/60"><span>Residential architectural study</span><span>Illustrative reference</span></figcaption></figure>
          </Container>
        </section>

        <section aria-label="Our advisory perspective" className="py-20 sm:py-28"><Container><div className="grid gap-9 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-5"><SectionHeading align="left" eyebrow="The advisory perspective" title={<>Thoughtful places begin with <span className="italic">informed decisions.</span></>} /></div><div className="space-y-5 text-sm leading-7 text-charcoal/75 lg:col-span-7"><p>Aishwarya Redevelopment Advisory Company supports housing societies, property owners and real estate stakeholders in evaluating redevelopment and land-related decisions in Mumbai.</p><p>The advisory scope brings together feasibility evaluation, title and regulatory coordination, developer due diligence and commercial assessment. Architecture provides a visual context for these conversations; each property still calls for its own technical, legal and financial review.</p><p className="border-l-2 border-gold pl-5 font-serif text-2xl leading-snug text-navy">A view of what could be.<br />A process for understanding what is possible.</p></div></div></Container></section>

        <section id="showcase" aria-labelledby="showcase-heading" className="scroll-mt-28 border-y border-navy/10 pb-20 pt-16 sm:pb-28 sm:pt-20"><Container>
          <div className="mb-12 grid gap-7 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-7"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-800">Selected visual reference / 01 source</p><h2 id="showcase-heading" className="font-serif text-4xl leading-tight sm:text-5xl">Architectural &amp; Redevelopment <span className="italic">Visual Showcase</span></h2></div><p className="self-end text-xs leading-6 text-charcoal/70 lg:col-span-5">The image below and its detail crops are illustrative. Project identity and Aishwarya&apos;s involvement have not been verified. They are not presented as completed, ongoing or owned company projects.</p></div>
          <ArchitecturalGallery images={architecturalShowcase} />
        </Container></section>

        <section aria-label="Category exploration" className="bg-navy py-20 text-ivory sm:py-28"><Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-4"><SectionHeading align="left" theme="dark" eyebrow="Explore our perspective" title={<>Four ways to<br /><span className="italic text-gold">look ahead.</span></>} /><p className="mt-6 text-sm leading-7 text-ivory/65">Explore the architectural reference or follow a discipline into our advisory services. These are areas of exploration, not project records.</p></div><div className="lg:col-span-8">{categories.map(({ title, text, href, label, note }, index) => <article key={title} className="border-t border-ivory/20 py-7"><p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-gold">0{index + 1} / {note}</p><h3 className="font-serif text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ivory/70">{text}</p><Link href={href} className={`${focus} group mt-4 inline-flex min-h-11 items-center gap-4 text-xs text-gold hover:text-ivory`}>{label}<ArrowUpRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" /></Link></article>)}</div></div>
        </Container></section>
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
