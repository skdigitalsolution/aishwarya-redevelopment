import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Phone, Scale, ScanLine, Users, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_DETAILS } from "@/lib/constants";
import { Reveal } from "./Reveal";

export const metadata = pageMetadata("/redevelopment", "Society Redevelopment", "Explore Aishwarya Redevelopment Advisory Company's guidance on feasibility, developer assessment, agreements and handover for Mumbai housing societies.");

const advisory = [
  { icon: ScanLine, title: "Establish what is possible", text: "Feasibility and FSI evaluation examines the property's development potential, applicable planning provisions and indicative area calculations before offers are compared." },
  { icon: Scale, title: "Understand the foundations", text: "Title investigation reviews ownership records and potential encumbrances. Agreement coordination helps translate negotiated terms into documentation for review by the society's legal advisers." },
  { icon: Users, title: "Make a considered selection", text: "Developer due diligence, tender preparation and commercial negotiation bring structure to the selection process, helping members compare proposals on a consistent basis." },
  { icon: ShieldCheck, title: "Stay informed through execution", text: "Municipal approval coordination and project monitoring help committees track submissions, construction milestones and issues requiring action by appointed professionals." },
];
const diligence = [
  ["MahaRERA project track record", "Review available project registrations, disclosed progress and delivery history, including relevant compliance concerns."],
  ["Financial solvency & available funding", "Examine financial information and proposed funding sources against the scale and obligations of the project."],
  ["Feedback from redeveloped societies", "Seek references from earlier societies to understand communication, construction experience and fulfilment of commitments."],
  ["Bank guarantee capability", "Assess the developer's ability to arrange proposed security. The form, amount and terms of any guarantee depend on the transaction and negotiated agreement."],
  ["DCPR 2034 feasibility & realistic offers", "Check the assumptions behind area and commercial offers against applicable development provisions and project feasibility."],
];
const journey = [
  ["Initial Consultation", "Understand the society's concerns, member priorities and current stage of discussion."],
  ["Property & Legal Assessment", "Review available property records, building information and title matters needing attention."],
  ["Feasibility Evaluation", "Assess development potential and indicative commercial assumptions to frame realistic options."],
  ["Developer Selection & Negotiations", "Prepare the tender approach, assess proposals and support discussions on commercial terms."],
  ["Agreements & Approvals", "Coordinate documentation, professional review and the applicable permissions process."],
  ["Construction Monitoring & Handover", "Track progress, report observations and coordinate completion and possession formalities."],
];
const interests = [
  ["Comparable proposals", "Bring exclusions, assumptions and obligations into a transparent comparison, beyond headline offers."],
  ["Carpet area considerations", "Clarify existing and proposed carpet area, measurement assumptions and how these appear in the agreement."],
  ["Rent compensation terms", "Review the proposed amount, payment schedule, escalation and arrangements for a longer transition period."],
  ["Corpus structures", "Examine the proposed corpus, payment milestones, recipients and conditions attached to disbursement."],
  ["Realistic timelines", "Consider dependencies, approval stages and contractual provisions addressing delay."],
  ["Stakeholder communication", "Keep committees and members informed through documented discussions, updates and clearly recorded decisions."],
];
const comparison = [
  ["Responsibility", "The appointed developer typically coordinates funding and delivery under agreed terms.", "The society takes a more direct role in funding, appointments and delivery decisions."],
  ["Commercial structure", "Member entitlements and developer rights are negotiated in the redevelopment agreement.", "Costs, sale proceeds and any potential surplus depend on the society's project structure and viability."],
  ["Control & involvement", "Society oversight is exercised through agreements, reporting and monitoring arrangements.", "Greater decision-making involvement calls for sustained governance and professional coordination."],
  ["Risks to evaluate", "Developer capability, contractual security, funding and delivery dependencies.", "Funding availability, cost changes, sales exposure and the society's ability to manage execution."],
];
const eyebrow = "text-xs sm:text-xs font-semibold uppercase tracking-[0.22em]";
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function RedevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory pt-24 text-navy sm:pt-32">
        <section aria-labelledby="redevelopment-title" className="relative overflow-hidden bg-navy text-ivory">
          <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="self-center lg:col-span-7">
              <p className={`${eyebrow} mb-8 flex items-center gap-3 text-gold`}><span className="h-px w-8 bg-gold" aria-hidden="true" />Society Redevelopment</p>
              <h1 id="redevelopment-title" className="editorial-hero-title font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Your Society&apos;s Future Deserves <span className="font-light italic text-gold">Expert Guidance.</span></h1>
              <p className="mt-8 max-w-lg text-sm leading-7 text-ivory/75 sm:text-base">Your building holds more than property value. It holds homes, shared histories and the expectations of every member. Move forward with clarity at every decision.</p>
              <div className="mt-10 flex flex-wrap items-center gap-6"><a href="#consultation" className={`${focus} inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-4 text-xs font-semibold text-navy hover:bg-gold-300 motion-safe:transition-colors`}>Discuss Your Society <ArrowUpRight size={16} aria-hidden="true" /></a><a href="#journey" className={`${focus} inline-flex min-h-12 items-center gap-3 border-b border-gold/50 text-xs text-ivory hover:text-gold`}>Explore Our Process <ArrowDown size={16} aria-hidden="true" /></a></div>
            </div>
            <ClientImage id={6} dark aspect="aspect-[4/3]" className="lg:col-span-5 lg:pt-8" />
          </Container>
          <div className="border-t border-ivory/15"><Container className="flex flex-wrap gap-x-10 gap-y-3 py-5 text-xs uppercase tracking-[0.16em] text-ivory/65"><span>Mumbai cooperative housing societies</span><span>Managing committees &amp; members</span><span>Property owners</span></Container></div>
        </section>

        <section aria-label="Understanding society redevelopment" className="py-16 sm:py-24"><Container><Reveal><div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5"><SectionHeading align="left" eyebrow="Understanding redevelopment" title={<>A new building begins with <span className="italic">shared understanding.</span></>} /><ClientImage id={19} aspect="aspect-[16/9]" className="mt-8" /></div>
          <div className="space-y-5 text-sm leading-7 text-charcoal/75 lg:col-span-7"><p>Aging buildings can bring recurring repairs, changing household needs and questions about long-term safety. Redevelopment may offer a way forward, but the right approach starts with understanding the property and the people who live there.</p><p>Societies must weigh feasibility, ownership records, developer proposals and the practicalities of temporary relocation. Members may have different expectations, while committees must explain decisions and keep an accurate record of discussions.</p><p>Our role is to bring these questions into a structured process: evaluate the options, scrutinise assumptions, support negotiations and coordinate with the legal, technical and regulatory professionals involved.</p><p className="border-l-2 border-gold pl-5 font-serif text-2xl leading-snug text-navy">Clarity for the committee.<br />A voice for every member.</p></div>
        </div></Reveal></Container></section>

        <section aria-label="Redevelopment advisory services" className="border-y border-navy/10 bg-white/50 py-20 sm:py-28"><Container><Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-12"><div className="lg:col-span-7"><SectionHeading align="left" showDivider={false} eyebrow="Our advisory scope" title={<>The right questions.<br /><span className="italic">At the right stage.</span></>} /></div><ClientImage id={12} aspect="aspect-[16/10]" className="max-w-lg lg:col-span-5" /></div>
          <div className="mt-12 grid gap-x-16 lg:grid-cols-2">{advisory.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t border-navy/15 py-8"><div className="mb-5 flex items-center justify-between"><Icon size={25} strokeWidth={1.2} className="text-gold-700" aria-hidden="true" /><span className="font-serif text-xl text-gold-700">0{index + 1}</span></div><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/75">{text}</p></article>)}</div>
          <Link href="/services" className={`${focus} mt-5 inline-flex min-h-11 items-center gap-4 border-b border-gold text-xs hover:text-gold-800`}>Explore our full advisory services <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </Reveal></Container></section>

        <section aria-label="Developer due diligence" className="bg-navy py-20 text-ivory sm:py-28"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5"><SectionHeading align="left" theme="dark" eyebrow="Developer due diligence" title={<>Look beyond<br /><span className="italic text-gold">the headline offer.</span></>} /><p className="mt-6 text-sm leading-7 text-ivory/70">An attractive proposal is the start of an assessment. The society also needs to understand who will deliver it, how it will be funded and whether its assumptions stand up to scrutiny.</p><p className="mt-6 border-t border-gold/30 pt-6 text-xs leading-6 text-ivory/60">These criteria support an informed assessment. They do not assure future performance, funding or regulatory outcomes.</p></div>
          <ol className="divide-y divide-ivory/15 border-t border-ivory/15 lg:col-span-7">{diligence.map(([title, text], index) => <li key={title} className="flex gap-5 py-6"><span className="pt-1 text-xs tabular-nums text-gold">0{index + 1}</span><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-ivory/70">{text}</p></div></li>)}</ol>
        </div></Reveal></Container></section>

        <section id="journey" aria-label="Redevelopment journey" className="scroll-mt-28 py-20 sm:py-28"><Container><Reveal>
          <div className="grid items-end gap-6 lg:grid-cols-2"><SectionHeading align="left" eyebrow="The redevelopment journey" title={<>From the first conversation<br /><span className="italic">to the next chapter.</span></>} /><p className="max-w-sm text-sm leading-7 text-charcoal/70 lg:justify-self-end">Six connected stages, with the scope and sequence shaped by your property, society decisions and applicable requirements.</p></div>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <ol className="lg:col-span-8">
              {journey.map(([title, text], index) => <li key={title} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-7">
                {index < journey.length - 1 && <span data-motion-line aria-hidden="true" className="absolute top-11 bottom-0 left-5 w-px bg-gold/40" />}
                <span data-motion-number aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ivory font-serif text-xl text-gold-800">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 pt-1"><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/80">{text}</p></div>
              </li>)}
            </ol>
            <aside aria-label="Supporting process illustration" className="border-t border-navy/15 pt-5 lg:col-span-4">
              <p className="font-serif text-2xl">An illustration, not a project commitment.</p>
              <p id="process-image-note" className="mt-3 text-xs leading-6 text-charcoal/75">The supplied artwork contains embedded registration and amenity statements that have not been verified. It does not establish registration status, entitlements, approvals or promised outcomes for your society. Use the six stages here as the primary explanation.</p>
              <details className="mt-5 border-y border-navy/15 py-3">
                <summary className={focus + " cursor-pointer py-2 text-sm text-navy"}>View the client-supplied illustration</summary>
                <div aria-describedby="process-image-note"><ClientImage id={4} aspect="aspect-square" className="mt-5" /></div>
              </details>
            </aside>
          </div>
        </Reveal></Container></section>

        <section aria-label="Protecting society member interests" className="border-y border-navy/10 bg-ivory-200/40 py-20 sm:py-28"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4"><SectionHeading align="left" eyebrow="Member interests" title={<>The details that <span className="italic">matter at home.</span></>} /><p className="mt-5 text-sm leading-7 text-charcoal/70">The value of a proposal lies in its full terms. We help members understand what is offered, what is conditional and what needs further discussion.</p><ClientImage id={20} aspect="aspect-[16/9]" className="mt-8" /></div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">{interests.map(([title, text]) => <div key={title} className="border-t border-navy/15 py-6"><dt className="font-serif text-2xl">{title}</dt><dd className="mt-3 text-sm leading-7 text-charcoal/75">{text}</dd></div>)}</dl>
        </div></Reveal></Container></section>

        <section aria-label="Traditional versus self-redevelopment" className="py-20 sm:py-28"><Container><Reveal>
          <SectionHeading align="left" eyebrow="Two approaches. A considered choice." title={<>Developer-led or society-led?<br /><span className="italic">Start with suitability.</span></>} subtitle="The appropriate route depends on feasibility, funding, governance capacity and the level of responsibility your society is prepared to take on." />
          <dl className="mt-8 space-y-7 md:hidden">
            {comparison.map(([label, developer, society]) => <div key={label} className="border-t border-navy/20 pt-5"><dt className="font-serif text-2xl">{label}</dt><dd className="mt-4 space-y-4"><div className="border-l-2 border-navy pl-4"><p className="text-xs font-semibold text-navy">Developer-led</p><p className="mt-2 text-sm leading-7 text-charcoal/80">{developer}</p></div><div className="border-l-2 border-gold pl-4"><p className="text-xs font-semibold text-gold-800">Society-led / Self-redevelopment</p><p className="mt-2 text-sm leading-7 text-charcoal/80">{society}</p></div></dd></div>)}
          </dl>
          <div className="mt-12 hidden md:block overflow-x-auto pb-3 focus-visible:outline-2 focus-visible:outline-gold" tabIndex={0} role="region" aria-label="Scrollable comparison of redevelopment approaches">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="sr-only">Comparison of developer-led and society-led redevelopment responsibilities and risks</caption><thead><tr className="border-b border-gold"><th scope="col" className="w-1/5 p-5 pl-0 text-xs uppercase tracking-widest text-charcoal/75">Consideration</th><th scope="col" className="w-2/5 bg-navy p-6 font-serif text-2xl font-normal text-ivory">Developer-led<span className="mt-2 block font-sans text-xs uppercase tracking-widest text-gold">Traditional redevelopment</span></th><th scope="col" className="w-2/5 bg-gold/15 p-6 font-serif text-2xl font-normal">Society-led<span className="mt-2 block font-sans text-xs uppercase tracking-widest text-gold-800">Self-redevelopment</span></th></tr></thead><tbody>{comparison.map(([label, traditional, self]) => <tr key={label} className="border-b border-navy/15"><th scope="row" className="p-5 pl-0 align-top text-xs font-medium leading-6">{label}</th><td className="p-6 align-top leading-7 text-charcoal/75">{traditional}</td><td className="bg-gold/5 p-6 align-top leading-7 text-charcoal/75">{self}</td></tr>)}</tbody></table>
          </div>
          <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="max-w-lg text-xs leading-6 text-charcoal/65">Both routes carry financial, regulatory and execution risks. A property-specific assessment should guide the choice.</p><Link href="/services#redevelopment" className={`${focus} inline-flex min-h-11 shrink-0 items-center gap-4 border-b border-gold text-xs hover:text-gold-800`}>Discuss self-redevelopment guidance <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </Reveal></Container></section>

        <section id="consultation" aria-labelledby="consultation-heading" className="relative scroll-mt-28 overflow-hidden border-t border-gold/25 bg-navy-950 py-20 text-ivory sm:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,166,107,0.09),transparent_70%)]" />
          <Container className="relative"><Reveal><div className="grid items-center gap-10 lg:grid-cols-12"><div className="lg:col-span-7"><p className={`${eyebrow} mb-6 text-gold`}>Let&apos;s build your future</p><h2 id="consultation-heading" className="font-serif text-4xl leading-tight sm:text-5xl">Make Your Next Redevelopment Decision <span className="font-light italic text-gold">With Confidence.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-ivory/75">Tell us about your society, your concerns and the decisions ahead. Begin with a conversation about the guidance your committee needs.</p></div><div className="border border-gold/30 bg-navy p-7 sm:p-9 lg:col-span-5"><p className="font-serif text-2xl">Discuss your society&apos;s next step.</p><p className="mt-3 text-xs leading-6 text-ivory/65">For chairmen, secretaries, managing committees and property owners.</p><a href="tel:+917021892236" className={`${focus} mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-gold px-4 py-4 text-sm font-medium text-navy hover:bg-gold-300 motion-safe:transition-colors`}><Phone size={16} aria-hidden="true" />{COMPANY_DETAILS.contact.phone}</a><Link href="/#contact" className={`${focus} mt-4 inline-flex min-h-11 items-center gap-3 text-xs text-ivory hover:text-gold`}>Visit our consultation section <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></Reveal></Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
