import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import { ArrowDown, ArrowUpRight, Phone, ScanLine, Scale, Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioEnquiry } from "./PortfolioEnquiry";
import { Reveal } from "./Reveal";

export const metadata = pageMetadata("/land-banking", "Land Banking & Brokerage", "Explore Aishwarya Redevelopment Advisory Company's land brokerage, strategic holding, title review and development assessment. No live land listings are published.");

const brokerage = [
  ["Client Representation & Advisory", "Understand the owner's or investor's objectives, review property information and frame an acquisition or disposal approach around the asset and its constraints."],
  ["Transaction Management & Deal Structuring", "Coordinate commercial discussions, compare transaction structures and align proposed terms with due diligence findings and professional advice."],
  ["Closing Coordination", "Support document readiness and coordination between counterparties, legal advisers and relevant professionals through the agreed closing process."],
];
const portfolios = [
  ["Core Wealth Holdings", "A long-term holding perspective", "Evaluate land for longer-term ownership, considering location, access, title position, holding costs and the owner's investment horizon."],
  ["Value-Add Portfolios", "Potential shaped by preparation", "Assess whether documentation, access planning, land-use review or transaction structuring could improve an asset's suitability for prospective counterparties."],
  ["Fast-Track Liquidation Assets", "A disposal-focused approach", "Review assets where owners prioritise a sale, with attention to document readiness, realistic pricing and buyer suitability. Timing remains subject to market interest and transaction requirements."],
];
const vetting = [
  { icon: Scale, title: "Title Investigation & Review", text: "A detailed title-review process examining ownership history, encumbrances, records and issues requiring legal clarification. The scope and conclusions depend on available documents and professional investigation." },
  { icon: Compass, title: "Potential Land Use Assessment", text: "Compare potential land uses against planning provisions, access, infrastructure, development costs and market assumptions to assess practical options for the site." },
  { icon: ScanLine, title: "Conversion & Compliance Management", text: "Identify applicable land-use conversion and compliance requirements, coordinate documentation and track submissions with relevant professionals and authorities." },
];
const eyebrow = "text-xs sm:text-xs font-semibold uppercase tracking-[0.22em]";
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function LandBankingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 bg-ivory pt-24 text-navy sm:pt-32">
        <section aria-labelledby="land-heading" className="overflow-hidden bg-navy text-ivory">
          <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
            <div className="self-center lg:col-span-7"><p className={`${eyebrow} mb-8 flex items-center gap-3 text-gold`}><span className="h-px w-8 shrink-0 bg-gold" aria-hidden="true" />Strategic Land Banking &amp; Brokerage</p><h1 id="land-heading" className="editorial-hero-title max-w-4xl font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Land decisions.<br /><span className="font-light italic text-gold">Grounded in property facts.</span></h1><p className="mt-8 max-w-xl text-sm leading-7 text-ivory/80 sm:text-base">We assess raw land acreage, review its constraints and help prepare property information for developer and investor consideration.</p><p className="mt-4 max-w-xl text-xs leading-6 text-ivory/60">Our advisory focus is to assess land potential and prepare assets for consideration. Title clearance, investment yield and development readiness remain subject to verification, approvals and market conditions.</p><div className="mt-9 flex flex-wrap gap-6"><a href="#land-disciplines" className={`${focus} inline-flex min-h-12 items-center gap-3 bg-gold px-6 py-4 text-xs font-semibold text-navy hover:bg-gold-300`}>Explore Land Advisory <ArrowDown size={16} aria-hidden="true" /></a><a href="#partners" className={`${focus} inline-flex min-h-12 items-center gap-3 border-b border-gold/50 text-xs hover:text-gold`}>Partner With Us <ArrowUpRight size={16} aria-hidden="true" /></a></div><p className="mt-4 text-xs text-ivory/60">Explore our advisory portfolio categories. No live land listings are published here.</p></div>
            <ClientImage id={16} dark aspect="aspect-[4/3]" className="self-center lg:col-span-5" />
          </Container>
          <div className="border-t border-ivory/15"><Container className="flex flex-wrap gap-x-10 gap-y-3 py-5 text-xs uppercase tracking-[0.18em] text-ivory/60"><span>Landowners</span><span>Real estate investors</span><span>Institutional developers</span><span>Channel partners</span></Container></div>
        </section>

        <section id="land-disciplines" aria-labelledby="land-disciplines-heading" className="scroll-mt-28 border-b border-navy/10 py-12 sm:py-16">
          <Container><h2 id="land-disciplines-heading" className="font-serif text-3xl sm:text-4xl">Which conversation do you need?</h2>
            <nav aria-label="Land advisory areas" className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Land Brokerage", "brokerage", "Buying or selling: representation, negotiation and closing coordination."],
                ["Strategic Land Banking", "portfolio", "Holding land: assess location, readiness, costs and your investment horizon."],
                ["Title Due Diligence", "title-review", "Understanding the records: investigate ownership and unresolved title questions."],
                ["Development Opportunities", "development-opportunities", "Exploring potential use: assess feasibility before pursuing a proposal."],
              ].map(([title, id, explanation]) => <a key={id} href={"#" + id} className={focus + " border-t border-navy/20 pt-4 hover:border-gold"}><span className="flex items-start justify-between gap-3 font-serif text-2xl leading-tight">{title}<ArrowDown size={16} aria-hidden="true" className="mt-1 shrink-0 text-gold-700" /></span><span className="mt-3 block text-sm leading-7 text-charcoal/80">{explanation}</span></a>)}
            </nav>
          </Container>
        </section>

        <section id="brokerage" aria-label="Land brokerage and advisory" className="scroll-mt-28 py-16 sm:py-24"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-5"><SectionHeading align="left" eyebrow="Representation to completion" title={<>End-to-End Land<br /><span className="italic">Brokerage &amp; Advisory</span></>} /><p className="mt-6 max-w-sm text-sm leading-7 text-charcoal/75">Land transactions demand a clear understanding of the asset, the counterparty and the path to completion. We bring structure to each conversation, from the first brief to closing coordination.</p></div><ol className="divide-y divide-navy/15 border-t border-navy/15 lg:col-span-7">{brokerage.map(([title, text], index) => <li key={title} className="flex gap-5 py-7"><span className="font-serif text-2xl text-gold-700">0{index + 1}</span><div><h3 className="font-serif text-2xl sm:text-3xl">{title}</h3><p className="mt-3 text-sm leading-7 text-charcoal/75">{text}</p></div></li>)}</ol></div></Reveal></Container></section>

        <section id="portfolio" aria-label="Strategic land banking approaches" className="scroll-mt-28 border-y border-gold/20 bg-navy py-20 text-ivory sm:py-28"><Container><Reveal>
          <div className="grid gap-7 lg:grid-cols-2"><SectionHeading align="left" theme="dark" eyebrow="Strategic Land Banking" title={<>Different horizons.<br /><span className="italic text-gold">A considered strategy.</span></>} /><div className="max-w-md self-end text-sm leading-7 text-ivory/70"><p>Three advisory lenses for discussing a property&apos;s objectives, readiness and potential transaction path.</p><p className="mt-3 text-xs text-ivory/55">Portfolio categories describe advisory approaches, not available inventory or investment products.</p></div></div>
          <div className="mt-14">{portfolios.map(([title, subtitle, text], index) => <article key={title} className="group grid gap-5 border-t border-ivory/20 py-9 sm:grid-cols-12 sm:gap-8"><span className="font-serif text-4xl text-gold sm:col-span-1">0{index + 1}</span><div className="sm:col-span-5"><p className="mb-3 text-xs uppercase tracking-[0.16em] text-gold">{subtitle}</p><h3 className="font-serif text-3xl sm:text-4xl">{title}</h3></div><p className="max-w-lg text-sm leading-7 text-ivory/70 sm:col-span-6">{text}</p></article>)}</div>
        </Reveal></Container></section>

        <section id="title-review" aria-label="Due diligence framework" className="scroll-mt-28 py-16 sm:py-24"><Container><Reveal>
          <SectionHeading align="left" eyebrow="Title Due Diligence & Feasibility" title={<>Understand the records.<br /><span className="italic">Assess the constraints.</span></>} subtitle="A structured review of title, potential use and the requirements that stand between an asset and its intended purpose." />
          <ol className="mt-12 grid gap-x-10 md:grid-cols-2 xl:grid-cols-3">{vetting.map(({ icon: Icon, title, text }, index) => <li key={title} className="border-t border-navy/20 py-7"><div className="mb-8 flex items-center justify-between"><Icon size={28} strokeWidth={1.2} className="text-gold-700" aria-hidden="true" /><span className="text-xs text-gold-700">Tier 0{index + 1}</span></div><h3 className="font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/75">{text}</p></li>)}</ol>
          <p className="mt-6 border-l-2 border-gold pl-5 text-xs leading-6 text-charcoal/65">These headings describe the proposed depth of advisory review. They do not establish clear title, risk-free ownership or guaranteed returns. Findings are specific to each asset and its available records.</p>
        </Reveal></Container></section>

        <section id="development-opportunities" aria-labelledby="development-heading" className="scroll-mt-28 border-y border-navy/10 bg-ivory-200/40 py-16 sm:py-24">
          <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <ClientImage id={23} aspect="aspect-[4/3]" className="min-w-0 lg:col-span-6" />
            <div className="lg:col-span-6"><p className={eyebrow + " mb-4 text-gold-700"}>Development Opportunities</p><h2 id="development-heading" className="font-serif text-4xl leading-tight sm:text-5xl">Explore potential.<br /><span className="italic">Test the assumptions.</span></h2>
              <p className="mt-5 text-sm leading-7 text-charcoal/80">A development opportunity begins with an assessment, not a listing. Consider the site&apos;s access, planning constraints, possible uses and commercial assumptions before discussing a sale or joint development proposal.</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal/80"><li>Identify the information and specialist reviews still needed.</li><li>Compare proposed uses with costs, timing and market assumptions.</li><li>Discuss transaction options once the findings are understood.</li></ul>
              <p className="mt-5 border-l-2 border-gold pl-4 text-xs leading-6 text-charcoal/75">No verified development opportunities or live land listings are published here. Planning permission, funding and investment outcomes are not assured.</p>
            </div>
          </Container>
        </section>

        <section id="partners" aria-label="Channel partner and asset owner syndication" className="scroll-mt-28 border-y border-navy/10 bg-white/50 py-20 sm:py-28"><Container><Reveal><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-6"><SectionHeading align="left" eyebrow="Shared opportunity. Clear roles." title={<>Channel Partner &amp;<br />Asset Owner <span className="italic">Syndication</span></>} /><p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/75">Bring a property, a mandate or an acquisition requirement into a structured discussion. Our focus is on the information and coordination needed to assess a potential transaction, rather than promises of buyer access or funding.</p><a href="#portfolio-enquiry" className={`${focus} mt-8 inline-flex min-h-12 items-center gap-4 border-b border-gold text-xs hover:text-gold-800`}>Introduce your property or mandate <ArrowUpRight size={16} aria-hidden="true" /></a></div><dl className="divide-y divide-navy/15 border-t border-navy/15 lg:col-span-6">{[["For landowners", "Present ownership context, location, acreage and expectations so the property's readiness and potential next steps can be reviewed."], ["For agents & channel partners", "Share a clearly defined mandate and available property information, with roles and commercial arrangements discussed before engagement."], ["For institutional counterparties", "Outline location preferences, intended use, scale and acquisition criteria to support a focused evaluation of potential opportunities."]].map(([title, text]) => <div key={title} className="py-7"><dt className="font-serif text-2xl">{title}</dt><dd className="mt-3 text-sm leading-7 text-charcoal/75">{text}</dd></div>)}</dl></div></Reveal></Container></section>

        <section id="portfolio-enquiry" aria-label="Land portfolio enquiry" className="scroll-mt-28 py-20 sm:py-28"><Container><div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-5"><SectionHeading align="left" eyebrow="Start with the asset" title={<>Prepare your property details.<br /><span className="italic">Start a conversation.</span></>} /><p className="mt-6 text-sm leading-7 text-charcoal/75">Prepare an overview of your property for an initial conversation. Record what is known and flag details that still need verification.</p><div className="mt-9 border-t border-gold/50 pt-6"><p className={`${eyebrow} text-gold-800`}>Prefer to speak directly?</p><a href="tel:+917021892236" className={`${focus} mt-4 inline-flex min-h-12 items-center gap-3 text-lg`}><Phone size={18} className="text-gold-700" aria-hidden="true" />+91 70218 92236</a></div></div><div className="lg:col-span-7"><PortfolioEnquiry /></div></div></Container></section>

        <section aria-labelledby="land-consultation" className="relative overflow-hidden border-t border-gold/25 bg-navy-950 py-20 text-ivory sm:py-28"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,166,107,0.09),transparent_70%)]" aria-hidden="true" /><Container className="relative"><Reveal><div className="grid items-center gap-10 lg:grid-cols-12"><div className="lg:col-span-7"><p className={`${eyebrow} mb-6 text-gold`}>Let&apos;s build your future</p><h2 id="land-consultation" className="font-serif text-4xl leading-tight sm:text-5xl">A considered next step.<br /><span className="font-light italic text-gold">For the land you hold.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-ivory/75">Discuss your acreage, investment objectives or acquisition requirements with Aishwarya Redevelopment Advisory Company.</p></div><div className="border border-gold/30 bg-navy p-8 lg:col-span-5"><p className="font-serif text-2xl">Begin a land advisory conversation.</p><a href="tel:+917021892236" className={`${focus} mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-gold px-4 py-4 text-sm font-medium text-navy hover:bg-gold-300`}><Phone size={16} aria-hidden="true" />+91 70218 92236</a><p className="mt-4 text-xs leading-6 text-ivory/60">Landowners · Investors · Developers · Channel partners</p></div></div></Reveal></Container></section>
      </main>
      <Footer />
    </>
  );
}
