import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { COMPANY_DETAILS } from "@/lib/constants";
import type { ClientImageId } from "@/lib/client-images";

export const metadata = pageMetadata("/services", "Our Services", "Explore 20 services from Aishwarya Redevelopment Advisory Company across redevelopment, legal and regulatory, financial and project execution advisory.");

const redevelopment = [
  ["Society Redevelopment Strategic Advisory", "Guidance on redevelopment options, society priorities and developer selection, helping committees make informed decisions at each stage."],
  ["Self-Redevelopment Turnkey Guidance", "Coordinated guidance on feasibility, funding, consultant appointments and project planning for societies pursuing self-redevelopment."],
  ["Developer Due Diligence & Reputation Audits", "Review of developer financial standing, delivery history and reputation to support a considered selection process."],
  ["Tender Document Preparation & Floating", "Preparation and circulation of tender documents, with clearly defined requirements to support transparent bid comparison."],
  ["Tenant Mediation & Consent Management", "Support for stakeholder discussions, documentation of concerns and consent coordination throughout the redevelopment process."],
];
const legal = [
  ["Forensic Legal Title Search & Investigation", "Examination of ownership records, title history and encumbrances to identify issues requiring legal review."],
  ["Municipal NOC Liaisoning & Regulatory Approvals", "Coordination of submissions, documentation and follow-up with relevant authorities for applicable permissions and NOCs."],
  ["Property Card & 7/12 Title Mutation", "Assistance with documentation and applications to update ownership entries in applicable land and property records."],
  ["Deemed Conveyance Legal Execution", "Coordination of the legal documentation and application process for societies seeking deemed conveyance."],
  ["Revenue & City Survey N.A. Sanctions", "Support with revenue and city survey records and applicable non-agricultural permission procedures."],
  ["Tripartite & Development Agreement Drafting", "Coordination of agreement drafting and review to clarify stakeholder obligations, commercial terms and project milestones."],
  ["RERA Registration & Compliance Management", "Assistance with registration documentation, submissions and ongoing compliance requirements applicable to the project."],
];
const financial = [
  ["TDR Trading & Allocation", "Advisory on transferable development rights, allocation requirements and transaction coordination in the context of project feasibility."],
  ["Institutional Bank Funding & Project Finance", "Preparation and coordination of project funding proposals, with support in evaluating lender terms and financing requirements."],
  ["Architectural Feasibility & FSI Optimization", "Assessment of development potential, permissible FSI and area planning to inform practical redevelopment options."],
  ["Commercial Negotiation & Joint Development Structuring", "Support in evaluating commercial proposals and structuring joint development terms around stakeholder priorities and project viability."],
];
const execution = [
  ["Structural Audit & Engineering Assessments", "Coordination of structural inspections and engineering assessments to inform building condition reviews and redevelopment planning."],
  ["Demolition Management & Site Safety Oversight", "Coordination of demolition planning and site safety reviews with appointed contractors and technical professionals."],
  ["Construction Progress & Quality Auditing", "Review of construction milestones and quality observations, with reporting to help stakeholders track progress and address concerns."],
  ["Final Occupation Certificate (OC) & Possession Formalities", "Coordination of completion documentation, OC follow-up and possession formalities with the relevant project stakeholders."],
];

const chapters = [
  { id: "redevelopment", label: "Redevelopment Advisory", count: "05" },
  { id: "legal", label: "Legal & Regulatory", count: "07" },
  { id: "financial", label: "Financial & Strategic", count: "04" },
  { id: "execution", label: "Project Execution & Handover", count: "04" },
];
const eyebrow = "text-xs sm:text-xs font-semibold uppercase tracking-[0.22em]";
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

function ServiceChapter({ id, title, introduction, services, start, images = [], dark = false, study = false }: {
  id: string;
  title: string;
  introduction: string;
  services: string[][];
  start: number;
  images?: ClientImageId[];
  dark?: boolean;
  study?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={id + "-heading"} className={"scroll-mt-28 py-16 sm:py-24 " + (dark ? "bg-navy text-ivory" : "bg-ivory text-navy")}>
      <Container><div><div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-5">
          <p className={eyebrow + " mb-4 " + (dark ? "text-gold" : "text-gold-700")}>{String(start).padStart(2, "0")}?{String(start + services.length - 1).padStart(2, "0")} / Advisory services</p>
          <h2 id={id + "-heading"} className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className={"mt-5 max-w-md text-sm leading-7 " + (dark ? "text-ivory/80" : "text-charcoal/80")}>{introduction}</p>
          <div className="mt-7 space-y-7">
            {study && <figure><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/projects/about-redevelopment-study.jpg" alt="Illustrative residential facade used to discuss redevelopment planning" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div><figcaption className="mt-3 text-xs leading-6 text-charcoal/65">Architectural study. Not a verified company project.</figcaption></figure>}
            {images.map((image) => <ClientImage key={image} id={image} dark={dark} aspect="aspect-[16/10]" />)}
          </div>
        </div>
        <ol start={start} className={"min-w-0 divide-y border-t lg:col-span-7 " + (dark ? "divide-ivory/15 border-ivory/15" : "divide-navy/15 border-navy/15")}>
          {services.map(([name, description], index) => <li key={name} className="flex items-start gap-4 py-6 sm:gap-5 sm:py-7"><span data-motion-number aria-hidden="true" className={"w-6 shrink-0 pt-1 text-xs tabular-nums " + (dark ? "text-gold" : "text-gold-700")}>{String(start + index).padStart(2, "0")}</span><div className="min-w-0"><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{name}</h3><p className={"mt-3 max-w-xl text-sm leading-7 " + (dark ? "text-ivory/80" : "text-charcoal/80")}>{description}</p></div></li>)}
        </ol>
      </div></div></Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main tabIndex={-1} id="services-main" className="flex-1 bg-ivory text-navy">
        <section aria-labelledby="services-heading" className="overflow-hidden bg-navy pt-24 text-ivory sm:pt-32">
          <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
            <div className="relative z-10 self-center lg:col-span-7 lg:pr-8">
              <p className={`${eyebrow} mb-8 flex items-center gap-4 text-gold`}><span className="h-px w-10 bg-gold" />Our Services</p>
              <h1 id="services-heading" className="editorial-hero-title max-w-3xl font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Expertise Across Every Stage of <span className="font-light italic text-gold">Redevelopment.</span></h1>
              <p className="mt-8 max-w-lg text-sm leading-7 text-ivory/75 sm:text-base">From the first society discussion to the final handover, considered advice for the decisions that shape your property&apos;s future.</p>
              <a href="#service-index" className={`${focus} mt-10 inline-flex items-center gap-5 border-b border-gold/50 pb-3 text-xs tracking-wide text-gold motion-safe:transition-colors hover:text-ivory`}>Explore our expertise <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <figure className="lg:col-span-5 lg:pt-8">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] max-h-[590px] overflow-hidden border border-gold/20">
                <Image src="/images/hero/hero-architecture-fallback.jpg" alt="Architectural facade with layered balconies and refined structural lines" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 right-6 border-t border-ivory/40 pt-4 text-xs uppercase tracking-[0.2em] text-ivory">A considered approach to transformation</span>
              </div>
              <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.18em] text-ivory/60"><span>Mumbai, Maharashtra</span><span>Advisory / 01—04</span></figcaption>
            </figure>
          </Container>
        </section>

        <section id="service-index" aria-labelledby="introduction-heading" className="scroll-mt-32 border-b border-navy/10 py-16 sm:py-24">
          <Container>
            <div className="grid gap-7 lg:grid-cols-12 lg:gap-16">
              <p className={`${eyebrow} text-gold-700 lg:col-span-3`}>An integrated perspective</p>
              <div className="lg:col-span-9">
                <h2 id="introduction-heading" className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Many disciplines.<br /><span className="italic">One considered direction.</span></h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-charcoal/75">Redevelopment brings technical, legal, financial and regulatory decisions into the same conversation. Aishwarya Redevelopment Advisory Company connects these disciplines to support housing societies, property owners and project stakeholders through planning, documentation, negotiation and execution.</p>
              </div>
            </div>
            <nav aria-label="Service categories" className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`} className={`${focus} group flex items-start gap-4 border-t border-navy/20 py-5 hover:border-gold motion-safe:transition-colors`}><span className="font-serif text-xl text-gold-700">0{index + 1}</span><span className="flex-1 text-xs leading-5">{chapter.label}<span className="mt-2 block text-xs text-charcoal/75">{chapter.count} services</span></span><ArrowUpRight size={16} aria-hidden="true" className="text-gold-700 motion-safe:transition-transform motion-safe:group-hover:-translate-y-1" /></a>)}
            </nav>
          </Container>
        </section>

        <ServiceChapter id="redevelopment" title="Redevelopment Advisory" introduction="A clear framework for the choices, conversations and commitments that come before construction." services={redevelopment} start={1} study />
        <ServiceChapter id="legal" title="Legal & Regulatory" introduction="Clarity in ownership, care in documentation and coordination across the permissions process. Each step is assessed against the individual property and project." services={legal} start={6} images={[10, 18]} dark />
        <ServiceChapter id="financial" title="Financial & Strategic" introduction="Balance development potential with funding requirements, commercial realities and stakeholder priorities." services={financial} start={13} images={[17, 8]} />
        <ServiceChapter id="execution" title="Project Execution & Handover" introduction="Connect project plans with site progress, professional reporting and the transition to possession." services={execution} start={17} images={[14]} />

        <section aria-labelledby="terms-heading" className="border-y border-navy/10 bg-white/60 py-12 sm:py-16">
          <Container><h2 id="terms-heading" className="font-serif text-3xl sm:text-4xl">A few terms, explained.</h2><p className="mt-3 text-sm leading-7 text-charcoal/75">A quick reading guide to the service descriptions, rather than a statement of entitlement or approval.</p>
            <dl className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["FSI ? Floor Space Index", "The ratio of permitted built floor area to plot area, subject to applicable planning provisions."],
                ["TDR ? Transferable Development Rights", "Development rights that may be transferred and used subject to applicable rules and project eligibility."],
                ["NOC ? No Objection Certificate", "A document from a relevant body recording no objection for a specified purpose."],
                ["7/12 extract", "A land-record extract recording ownership and other recorded land particulars in applicable areas."],
                ["Deemed conveyance", "A statutory route for a society to seek conveyance where the ordinary transfer has not been completed, subject to professional review."],
                ["OC ? Occupation Certificate", "A completion-stage permission from the relevant authority concerning occupation of the building."],
              ].map(([term, meaning]) => <div key={term} className="border-t border-navy/15 pt-4"><dt className="font-serif text-xl">{term}</dt><dd className="mt-2 text-sm leading-7 text-charcoal/80">{meaning}</dd></div>)}
            </dl>
          </Container>
        </section>

        <section aria-labelledby="consultation-heading" className="bg-navy py-16 text-ivory sm:py-24">
          <Container className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7"><p className={`${eyebrow} mb-5 text-gold`}>Your next chapter</p><h2 id="consultation-heading" className="font-serif text-4xl leading-tight sm:text-5xl">Every property has a context.<br /><span className="italic text-gold">Let&apos;s understand yours.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-ivory/70">Discuss your society&apos;s priorities, your property and the stage of your redevelopment journey.</p></div>
            <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end"><a href={`tel:${COMPANY_DETAILS.contact.phoneTel}`} className={`${focus} inline-flex min-h-12 items-center justify-center gap-3 bg-gold px-6 py-4 text-sm font-medium text-navy hover:bg-gold-300 motion-safe:transition-colors`}><Phone size={16} aria-hidden="true" />+91 70218 92236</a><Link href="/#contact" className={`${focus} inline-flex min-h-11 items-center gap-3 border-b border-gold/40 text-xs text-ivory hover:text-gold`}>Prepare consultation details <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
