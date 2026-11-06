import { pageMetadata } from "@/lib/seo";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { teamRoles } from "./team-data";
import { TeamProfile } from "./TeamProfile";

export const metadata = pageMetadata("/our-team", "Our Team & Leadership", "Meet Aishwarya Redevelopment Advisory Company's founder and explore its proposed team structure. Unconfirmed appointments and draft role summaries are labelled.");

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory text-navy">
        <section aria-labelledby="team-title" className="relative overflow-hidden bg-navy py-16 text-ivory sm:py-24 lg:py-28">
          <Container className="pt-24 sm:pt-32"><div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-8"><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold"><span className="h-px w-9 bg-gold" aria-hidden="true" />Our People</p><h1 id="team-title" className="editorial-hero-title font-serif text-5xl leading-[1.04] tracking-tight sm:text-7xl lg:text-8xl">The People<br />Behind <span className="font-light italic text-gold">Aishwarya.</span></h1><p className="mt-8 max-w-xl text-base leading-8 text-ivory/75">Mr. Sachin Murudkar — Founder &amp; Director. Other organizational roles remain proposed placeholders.</p><a href="#structure" className={`${focus} mt-9 inline-flex min-h-12 items-center gap-5 border-b border-gold/50 text-xs text-gold hover:text-ivory`}>Explore the proposed structure <ArrowDown size={16} aria-hidden="true" /></a></div><div className="border-l border-gold/50 pl-6 lg:col-span-4"><p className="font-serif text-3xl leading-tight">A connected perspective.<br /><span className="italic text-gold">Clear responsibilities.</span></p><p className="mt-5 text-xs leading-6 text-ivory/65">Leadership, advisory, legal, design and operational roles brought together in a proposed organizational view.</p></div></div></Container>
        </section>

        <section id="structure" aria-labelledby="structure-title" className="scroll-mt-28 py-20 sm:py-28"><Container>
          <SectionHeading align="left" eyebrow="Organizational hierarchy" title={<span id="structure-title">A framework for<br /><span className="italic">coordinated expertise.</span></span>} />
          <p id="structure-note" className="mt-6 max-w-3xl text-sm leading-7 text-charcoal/75">This existing layout shows proposed roles only. It does not establish employment appointments, reporting relationships or a client-approved organizational structure.</p>
          <div aria-describedby="structure-note" className="mt-12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-800">01—04 / Leadership sequence</h3>
            <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{teamRoles.filter((role) => role.group === "leadership").map((role, index) => <li key={role.id} className="relative border-l border-gold/50 pb-7 pl-5 sm:border-t sm:border-l-0 sm:pb-0 sm:pl-0 sm:pt-6"><span aria-hidden="true" className="absolute -left-1 top-0 size-2 bg-gold sm:-top-1 sm:left-0" /><a href={`#profile-${role.id}`} className={`${focus} group block h-full border border-navy/15 bg-white/50 p-5 motion-safe:transition-colors hover:border-gold hover:bg-white`}><span className="mb-4 block font-serif text-3xl text-gold-700">0{index + 1}</span><span className="block font-serif text-2xl leading-tight">{role.proposedDesignation}</span><span className="mt-4 flex items-center gap-3 text-xs text-charcoal/65">View role profile <ArrowUpRight size={14} aria-hidden="true" /></span></a></li>)}</ol>
            <div className="mt-9 border-l-2 border-gold bg-gold/10 p-5 text-xs leading-6 text-charcoal/80"><strong className="font-semibold">Confirmed designation:</strong> Mr. Sachin Murudkar — <strong className="font-semibold">Founder &amp; Director</strong>. Other roles remain proposed placeholders pending client confirmation.</div>
            <h3 className="mb-6 mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-gold-800">05—08 / Functional roles</h3>
            <ol start={5} className="grid gap-5 border-t border-navy/15 pt-7 sm:grid-cols-2 xl:grid-cols-4">{teamRoles.filter((role) => role.group === "functional").map((role) => <li key={role.id}><a href={`#profile-${role.id}`} className={`${focus} flex h-full gap-4 border-b border-navy/15 py-5 motion-safe:transition-colors hover:border-gold`}><span className="font-serif text-2xl text-gold-700">0{role.order}</span><span className="flex-1 font-serif text-2xl leading-tight">{role.proposedDesignation}</span><ArrowDown size={14} className="mt-1 shrink-0 text-gold-700" aria-hidden="true" /></a></li>)}</ol>
          </div>
        </Container></section>

        <section aria-labelledby="profiles-title" className="border-t border-navy/10 bg-white/40 py-20 sm:py-28"><Container>
          <div className="mb-12 grid gap-7 lg:grid-cols-12"><div className="lg:col-span-7"><SectionHeading align="left" eyebrow="Individual role profiles" title={<span id="profiles-title">People, purpose<br /><span className="italic">and responsibility.</span></span>} /></div><p className="self-end text-xs leading-6 text-charcoal/70 lg:col-span-5">All role summaries, responsibilities and focus areas below are drafts pending client confirmation. Unconfirmed names and portraits are explicitly marked. Role profiles do not confirm current employees or appointments.</p></div>
          <div className="grid gap-x-14 xl:grid-cols-2">{teamRoles.map((role) => <TeamProfile key={role.id} role={role} />)}</div>
          <div className="mt-8 flex flex-col justify-between gap-5 border-t border-navy/15 pt-7 sm:flex-row sm:items-center"><p className="max-w-xl text-xs leading-6 text-charcoal/65">The founder profile contains the available company introduction. Additional names, approved biographies and original team photographs will complete this organizational view.</p><Link href="/founder" className={`${focus} inline-flex min-h-11 shrink-0 items-center gap-3 border-b border-gold text-xs hover:text-gold-800`}>Meet the founder <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </Container></section>
        <ConsultationCTA title={<>Contact <span className="font-light italic text-gold-300">Aishwarya.</span></>} />
      </main>
      <Footer />
    </>
  );
}
