import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export const metadata = pageMetadata("/projects", "Architectural Context & Project Advisory", "See architectural references supporting Aishwarya Redevelopment Advisory Company's planning discussions. Illustrative visuals are not verified company projects.");

const categories = [
  {
    "title": "Society Redevelopment Advisory",
    "text": "Client-listed professional service.",
    "href": "/redevelopment",
    "label": "Explore redevelopment advisory",
    "note": "Advisory topic"
  },
  {
    "title": "Architectural References",
    "text": "Illustrative images only; project information remains unverified.",
    "href": "#showcase",
    "label": "View architectural references",
    "note": "Illustrative reference"
  },
  {
    "title": "Land Brokerage & Advisory",
    "text": "Client-specified land advisory scope. No active inventory is supplied.",
    "href": "/land-banking",
    "label": "Explore land advisory",
    "note": "No live land listings"
  },
  {
    "title": "Redevelopment Feasibility Study",
    "text": "Client-listed professional service. No verified development opportunity is supplied.",
    "href": "/services#redevelopment",
    "label": "Explore feasibility services",
    "note": "Advisory topic"
  }
];
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory text-navy">
        <section aria-labelledby="portfolio-heading" className="relative overflow-hidden bg-navy pt-24 text-ivory sm:pt-32">
          <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-14">
            <div className="self-center lg:col-span-7"><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold"><span aria-hidden="true" className="h-px w-9 bg-gold" />Architectural Context</p><h1 id="portfolio-heading" className="editorial-hero-title font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">Architectural Images.<br /><span className="font-light italic text-gold">Illustrative References.</span></h1><p className="mt-8 max-w-lg text-sm leading-7 text-ivory/75 sm:text-base">Architectural images are shown as illustrative references. Verified project details remain pending client approval.</p><a href="#showcase" className={`${focus} mt-10 inline-flex min-h-12 items-center gap-5 border-b border-gold/50 text-xs text-gold hover:text-ivory`}>Explore the advisory perspective <ArrowDown size={16} aria-hidden="true" /></a></div>
            <div className="min-w-0 lg:col-span-5"><ClientImage id={22} dark aspect="aspect-[4/3]" /><p className="mt-4 text-xs leading-6 text-ivory/75">Entrance design provides a starting point for discussing access, shared spaces and planning. This concept is not a verified Aishwarya project.</p></div>
          </Container>
        </section>

        <section aria-labelledby="advisory-perspective-heading" className="py-16 sm:py-24">
          <Container>
            <div className="grid items-end gap-7 lg:grid-cols-12 lg:gap-14"><div className="lg:col-span-7"><SectionHeading align="left" showDivider={false} eyebrow="The advisory perspective" title={<span id="advisory-perspective-heading">Thoughtful places begin with <span className="italic">informed decisions.</span></span>} /></div><p className="text-sm leading-7 text-charcoal/80 lg:col-span-5">The task identifies Mumbai redevelopment advisory, society redevelopment strategy and land valuation as areas of founder expertise.</p></div>
            <div className="mt-10 grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
              <ClientImage id={21} aspect="aspect-[4/3]" className="min-w-0 lg:col-span-7" />
              <div className="lg:col-span-5"><h3 className="font-serif text-3xl leading-tight sm:text-4xl">Read beyond the facade.</h3><p className="mt-4 text-sm leading-7 text-charcoal/80">Residential form, entrances and balconies can help members express what matters to them. A visual reference cannot confirm the area, layout or amenities achievable on their own property.</p>
                <dl className="mt-6 divide-y divide-navy/15 border-t border-navy/15">
                  {[
  [
    "Project identity",
    "Pending client-supplied project records."
  ],
  [
    "Company involvement",
    "Not established by the architectural image."
  ],
  [
    "Completion status",
    "Not established by the architectural image."
  ]
].map(([question, answer]) => <div key={question} className="py-4"><dt className="font-serif text-xl">{question}</dt><dd className="mt-2 text-sm leading-7 text-charcoal/80">{answer}</dd></div>)}
                </dl>
              </div>
            </div>
          </Container>
        </section>

        <section id="showcase" aria-labelledby="showcase-heading" className="scroll-mt-28 border-y border-navy/10 pb-20 pt-16 sm:pb-28 sm:pt-20"><Container>
          <div className="mb-12 grid gap-7 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-7"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-800">Architectural context / Advisory perspective</p><h2 id="showcase-heading" className="font-serif text-4xl leading-tight sm:text-5xl">From a visual reference<br />to <span className="italic">practical questions.</span></h2></div><p className="self-end text-xs leading-6 text-charcoal/70 lg:col-span-5">Client-supplied architectural references support the advisory topics on this page. Project identities and Aishwarya&apos;s involvement are unverified; these are not presented as completed, ongoing or owned company projects.</p></div>
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14"><div className="lg:col-span-5"><h3 className="font-serif text-3xl leading-tight sm:text-4xl">Planning beyond the building.</h3><p className="mt-5 text-sm leading-7 text-charcoal/75">Shared spaces, access and the relationship between buildings are useful starting points for a planning conversation. An architectural visual does not establish what is permissible or feasible for a particular property.</p><p className="mt-4 text-sm leading-7 text-charcoal/75">Verified project names, company involvement, completion status and outcomes have not been supplied.</p><Link href="/services#financial" className={`${focus} mt-7 inline-flex min-h-11 items-center gap-3 border-b border-gold text-xs hover:text-gold-800`}>Explore feasibility and planning advisory <ArrowUpRight size={16} aria-hidden="true" /></Link></div><ClientImage id={24} aspect="aspect-[4/3]" className="min-w-0 lg:col-span-7" /></div>
        </Container></section>

        <section aria-label="Category exploration" className="bg-navy py-20 text-ivory sm:py-28"><Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-4"><SectionHeading align="left" theme="dark" eyebrow="Explore our perspective" title={<>Four ways to<br /><span className="italic text-gold">look ahead.</span></>} /><p className="mt-6 text-sm leading-7 text-ivory/65">Explore the architectural reference or follow a discipline into our advisory services. These are areas of exploration, not project records.</p></div><div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">{categories.map(({ title, text, href, label, note }, index) => <article key={title} className="flex flex-col items-start border-t border-ivory/20 py-7"><p className="mb-3 text-xs uppercase tracking-[0.16em] text-gold">0{index + 1} / {note}</p><h3 className="font-serif text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ivory/70">{text}</p><Link href={href} className={`${focus} group mt-auto pt-4 inline-flex min-h-11 items-center gap-4 text-xs text-gold hover:text-ivory`}>{label}<ArrowUpRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" /></Link></article>)}</div></div>
        </Container></section>
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
