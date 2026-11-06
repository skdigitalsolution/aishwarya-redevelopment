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

export const metadata = pageMetadata("/redevelopment", "Society Redevelopment", "Society redevelopment advisory and the five developer due diligence criteria supplied by the client.");

const advisory = [
 { icon: ScanLine, title: "Redevelopment Feasibility Study", text: "Client-listed professional service." },
 { icon: Scale, title: "Title Resolution & Due Diligence", text: "Identified area of founder expertise." },
 { icon: Users, title: "Society Redevelopment Advisory", text: "Client-listed professional service." },
 { icon: ShieldCheck, title: "Self-Redevelopment", text: "Identified area of founder expertise." },
];
const diligence = [
  [
    "MahaRERA track record",
    "Developer due diligence criterion."
  ],
  [
    "Financial solvency",
    "Developer due diligence criterion."
  ],
  [
    "Existing society feedback",
    "Developer due diligence criterion."
  ],
  [
    "Bank guarantee capability",
    "Capability is a review criterion, not a promised guarantee."
  ],
  [
    "DCPR 2034 feasibility",
    "Developer due diligence criterion."
  ]
];
const journey = [
  [
    "Society Redevelopment Advisory",
    "Client-listed professional service."
  ],
  [
    "Redevelopment Feasibility Study",
    "Client-listed professional service."
  ],
  [
    "Developer Due Diligence",
    "The five supplied review criteria are listed above."
  ],
  [
    "Title Resolution & Due Diligence",
    "Identified area of founder expertise."
  ],
  [
    "Municipal & Administrative Procedures",
    "Identified area of founder expertise."
  ],
  [
    "Self-Redevelopment",
    "Identified area of founder expertise."
  ]
];
const interests = [
  [
    "Society Redevelopment Advisory",
    "Client-listed professional service."
  ],
  [
    "Tenant & Member Rehabilitation Planning",
    "Client-listed professional service."
  ],
  [
    "Builder / Developer Selection & Tendering",
    "Client-listed professional service."
  ],
  [
    "Legal & Regulatory Advisory",
    "Client-listed professional service."
  ],
  [
    "Project Management Consultancy",
    "Client-listed professional service."
  ],
  [
    "Construction Cost Estimation & Monitoring",
    "Client-listed professional service."
  ]
];
const comparison = [
  [
    "Service scope",
    "Society Redevelopment Advisory is listed in the client task.",
    "Self-redevelopment is identified as founder expertise."
  ],
  [
    "Process",
    "Detailed process pending the original company profile.",
    "Detailed process pending the original company profile."
  ],
  [
    "Responsibilities",
    "Engagement details pending source review.",
    "Engagement details pending source review."
  ],
  [
    "Outcomes",
    "No project-specific outcomes are published.",
    "No project-specific outcomes are published."
  ]
];
const eyebrow = "text-xs sm:text-xs font-semibold uppercase tracking-[0.22em]";
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function RedevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory text-navy">
        <section aria-labelledby="redevelopment-title" className="relative overflow-hidden bg-navy pt-24 text-ivory sm:pt-32">
          <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="self-center lg:col-span-7">
              <p className={`${eyebrow} mb-8 flex items-center gap-3 text-gold`}><span className="h-px w-8 bg-gold" aria-hidden="true" />Society Redevelopment</p>
              <h1 id="redevelopment-title" className="editorial-hero-title font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Society <span className="font-light italic text-gold">Redevelopment.</span></h1>
              <p className="mt-8 max-w-lg text-sm leading-7 text-ivory/75 sm:text-base">Mumbai redevelopment advisory and society redevelopment strategy.</p>
              <div className="mt-10 flex flex-wrap items-center gap-6"><a href="#consultation" className={`${focus} inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-4 text-xs font-semibold text-navy hover:bg-gold-300 motion-safe:transition-colors`}>Discuss Your Society <ArrowUpRight size={16} aria-hidden="true" /></a><a href="#journey" className={`${focus} inline-flex min-h-12 items-center gap-3 border-b border-gold/50 text-xs text-ivory hover:text-gold`}>Explore Advisory Topics <ArrowDown size={16} aria-hidden="true" /></a></div>
            </div>
            <ClientImage id={6} dark aspect="aspect-[4/3]" className="lg:col-span-5 lg:pt-8" />
          </Container>
          <div className="border-t border-ivory/15"><Container className="flex flex-wrap gap-x-10 gap-y-3 py-5 text-xs uppercase tracking-[0.16em] text-ivory/65"><span>Mumbai cooperative housing societies</span><span>Managing committees &amp; members</span><span>Property owners</span></Container></div>
        </section>

        <section aria-label="Understanding society redevelopment" className="py-16 sm:py-24"><Container><Reveal><div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5"><SectionHeading align="left" eyebrow="Understanding redevelopment" title={<>A new building begins with <span className="italic">shared understanding.</span></>} /><ClientImage id={19} aspect="aspect-[16/9]" className="mt-8" /></div>
          <div className="space-y-5 text-sm leading-7 text-charcoal/75 lg:col-span-7"><p>Society Redevelopment Advisory and Redevelopment Feasibility Study are included in the client-supplied professional services list.</p><p>The founder expertise identified in the task includes society redevelopment strategy and self-redevelopment.</p><p>The detailed redevelopment process remains pending the original company profile presentation.</p><p className="border-l-2 border-gold pl-5 font-serif text-2xl leading-snug text-navy">Society redevelopment strategy.<br />Self-redevelopment.</p></div>
        </div></Reveal></Container></section>

        <section aria-label="Redevelopment advisory services" className="border-y border-navy/10 bg-white/50 py-20 sm:py-28"><Container><Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-12"><div className="lg:col-span-7"><SectionHeading align="left" showDivider={false} eyebrow="Our advisory scope" title={<>The right questions.<br /><span className="italic">At the right stage.</span></>} /></div><ClientImage id={12} aspect="aspect-[16/10]" className="max-w-lg lg:col-span-5" /></div>
          <div className="mt-12 grid gap-x-16 lg:grid-cols-2">{advisory.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t border-navy/15 py-8"><div className="mb-5 flex items-center justify-between"><Icon size={25} strokeWidth={1.2} className="text-gold-700" aria-hidden="true" /><span className="font-serif text-xl text-gold-700">0{index + 1}</span></div><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/75">{text}</p></article>)}</div>
          <Link href="/services" className={`${focus} mt-5 inline-flex min-h-11 items-center gap-4 border-b border-gold text-xs hover:text-gold-800`}>Explore our full advisory services <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </Reveal></Container></section>

        <section aria-label="Developer due diligence" className="bg-navy py-20 text-ivory sm:py-28"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5"><SectionHeading align="left" theme="dark" eyebrow="Developer due diligence" title={<>Look beyond<br /><span className="italic text-gold">the headline offer.</span></>} /><p className="mt-6 text-sm leading-7 text-ivory/70">The company profile criteria supplied in the task are listed here.</p><p className="mt-6 border-t border-gold/30 pt-6 text-xs leading-6 text-ivory/60">These criteria support an informed assessment. They do not assure future performance, funding or regulatory outcomes.</p></div>
          <ol className="divide-y divide-ivory/15 border-t border-ivory/15 lg:col-span-7">{diligence.map(([title, text], index) => <li key={title} className="flex gap-5 py-6"><span className="pt-1 text-xs tabular-nums text-gold">0{index + 1}</span><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-ivory/70">{text}</p></div></li>)}</ol>
        </div></Reveal></Container></section>

        <section id="journey" aria-label="Redevelopment journey" className="scroll-mt-28 py-20 sm:py-28"><Container><Reveal>
          <div className="grid items-end gap-6 lg:grid-cols-2"><SectionHeading align="left" eyebrow="Redevelopment advisory topics" title={<>Society redevelopment.<br /><span className="italic">Advisory topics.</span></>} /><p className="max-w-sm text-sm leading-7 text-charcoal/70 lg:justify-self-end">Advisory topics only. An approved process and its sequence await the original company profile.</p></div>
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
              <p id="process-image-note" className="mt-3 text-xs leading-6 text-charcoal/75">This client-supplied illustration does not verify registration, amenities, entitlements or project outcomes. The detailed redevelopment process awaits the original company profile.</p>
              <details className="mt-5 border-y border-navy/15 py-3">
                <summary className={focus + " cursor-pointer py-2 text-sm text-navy"}>View the client-supplied illustration</summary>
                <div aria-describedby="process-image-note"><ClientImage id={4} aspect="aspect-square" className="mt-5" /></div>
              </details>
            </aside>
          </div>
        </Reveal></Container></section>

        <section aria-label="Protecting society member interests" className="border-y border-navy/10 bg-ivory-200/40 py-20 sm:py-28"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4"><SectionHeading align="left" eyebrow="Member interests" title={<>The details that <span className="italic">matter at home.</span></>} /><p className="mt-5 text-sm leading-7 text-charcoal/70">These service names follow the client-supplied list. Exact descriptions await the original services image.</p><ClientImage id={20} aspect="aspect-[16/9]" className="mt-8" /></div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">{interests.map(([title, text]) => <div key={title} className="border-t border-navy/15 py-6"><dt className="font-serif text-2xl">{title}</dt><dd className="mt-3 text-sm leading-7 text-charcoal/75">{text}</dd></div>)}</dl>
        </div></Reveal></Container></section>

        <section aria-label="Traditional versus self-redevelopment" className="py-20 sm:py-28"><Container><Reveal>
          <SectionHeading align="left" eyebrow="Two approaches. A considered choice." title={<>Developer-led or society-led?<br /><span className="italic">Start with suitability.</span></>} subtitle="Both topics are identified in the client task. Detailed comparison awaits the company profile." />
          <dl className="mt-8 space-y-7 md:hidden">
            {comparison.map(([label, developer, society]) => <div key={label} className="border-t border-navy/20 pt-5"><dt className="font-serif text-2xl">{label}</dt><dd className="mt-4 space-y-4"><div className="border-l-2 border-navy pl-4"><p className="text-xs font-semibold text-navy">Developer-led</p><p className="mt-2 text-sm leading-7 text-charcoal/80">{developer}</p></div><div className="border-l-2 border-gold pl-4"><p className="text-xs font-semibold text-gold-800">Society-led / Self-redevelopment</p><p className="mt-2 text-sm leading-7 text-charcoal/80">{society}</p></div></dd></div>)}
          </dl>
          <div className="mt-12 hidden md:block overflow-x-auto pb-3 focus-visible:outline-2 focus-visible:outline-gold" tabIndex={0} role="region" aria-label="Scrollable comparison of redevelopment approaches">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="sr-only">Source availability for society redevelopment and self-redevelopment</caption><thead><tr className="border-b border-gold"><th scope="col" className="w-1/5 p-5 pl-0 text-xs uppercase tracking-widest text-charcoal/75">Consideration</th><th scope="col" className="w-2/5 bg-navy p-6 font-serif text-2xl font-normal text-ivory">Developer-led<span className="mt-2 block font-sans text-xs uppercase tracking-widest text-gold">Traditional redevelopment</span></th><th scope="col" className="w-2/5 bg-gold/15 p-6 font-serif text-2xl font-normal">Society-led<span className="mt-2 block font-sans text-xs uppercase tracking-widest text-gold-800">Self-redevelopment</span></th></tr></thead><tbody>{comparison.map(([label, traditional, self]) => <tr key={label} className="border-b border-navy/15"><th scope="row" className="p-5 pl-0 align-top text-xs font-medium leading-6">{label}</th><td className="p-6 align-top leading-7 text-charcoal/75">{traditional}</td><td className="bg-gold/5 p-6 align-top leading-7 text-charcoal/75">{self}</td></tr>)}</tbody></table>
          </div>
          <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="max-w-lg text-xs leading-6 text-charcoal/65">Detailed process, commercial terms and responsibilities await the original company profile.</p><Link href="/services#redevelopment" className={`${focus} inline-flex min-h-11 shrink-0 items-center gap-4 border-b border-gold text-xs hover:text-gold-800`}>Discuss self-redevelopment guidance <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </Reveal></Container></section>

        <section id="consultation" aria-labelledby="consultation-heading" className="relative scroll-mt-28 overflow-hidden border-t border-gold/25 bg-navy-950 py-20 text-ivory sm:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,166,107,0.09),transparent_70%)]" />
          <Container className="relative"><Reveal><div className="grid items-center gap-10 lg:grid-cols-12"><div className="lg:col-span-7"><p className={`${eyebrow} mb-6 text-gold`}>Let&apos;s build your future</p><h2 id="consultation-heading" className="font-serif text-4xl leading-tight sm:text-5xl">Discuss Society <span className="font-light italic text-gold">Redevelopment Advisory.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-ivory/75">Tell us about your society, your concerns and the decisions ahead. Begin with a conversation about the guidance your committee needs.</p></div><div className="border border-gold/30 bg-navy p-7 sm:p-9 lg:col-span-5"><p className="font-serif text-2xl">Discuss your society&apos;s next step.</p><p className="mt-3 text-xs leading-6 text-ivory/65">For chairmen, secretaries, managing committees and property owners.</p><a href="tel:+917021892236" className={`${focus} mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-gold px-4 py-4 text-sm font-medium text-navy hover:bg-gold-300 motion-safe:transition-colors`}><Phone size={16} aria-hidden="true" />{COMPANY_DETAILS.contact.phone}</a><Link href="/#contact" className={`${focus} mt-4 inline-flex min-h-11 items-center gap-3 text-xs text-ivory hover:text-gold`}>Visit our consultation section <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></Reveal></Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
