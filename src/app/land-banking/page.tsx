import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import Image from "@/components/ui/SiteImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioEnquiry } from "./PortfolioEnquiry";
import { Reveal } from "./Reveal";
import { ConceptualParcel } from "./ConceptualParcel";
import { LandDueDiligence } from "./LandDueDiligence";
import { landBrokerage, landPortfolios } from "./land-data";
import "./land-banking.css";

export const metadata = pageMetadata("/land-banking", "Land Banking & Brokerage", "Land Brokerage & Advisory, Strategic Land Banking Vault, three-tier due diligence, and Channel Partner & Asset Owner Syndication. No live land listings are published.");

const areas = [
  { title: "Land Brokerage & Advisory", id: "brokerage", text: "Client-specified land advisory scope." },
  { title: "Strategic Land Banking Vault", id: "portfolio", text: "Core Wealth Holdings, Value-Add Portfolios and Fast-Track Liquidation Assets." },
  { title: "Three-tier due diligence", id: "title-review", text: "Absolute Title Vetting, Highest & Best Use (HBU) Modeling, and Conversion & Compliance Management." },
  { title: "Channel Partner & Asset Owner Syndication", id: "partners", text: "Client-specified syndication category." },
];

export default function LandBankingPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="land-page" data-motion-owned>
      <section aria-labelledby="land-heading" className="land-hero">
        <Image src="/images/5.jpeg" alt="Client-supplied residential tower overlooking a waterfront cityscape at sunset, used as urban context only" fill preload sizes="100vw" className="land-heroImage" />
        <div className="land-heroShade" aria-hidden="true" />
        <Container className="land-heroGrid">
          <Reveal className="land-heroCopy"><p className="land-eyebrow">Strategic Land Banking &amp; Brokerage</p>
            <h1 id="land-heading">Land decisions.<br /><em>Grounded in property facts.</em></h1>
            <p className="land-heroDescription">Land Brokerage &amp; Advisory, Strategic Land Banking Vault, and Channel Partner &amp; Asset Owner Syndication.</p>
            <p className="land-heroNote">Detailed service and tier descriptions await the original Land Banking presentation.</p>
            <div className="land-heroActions"><a href="#land-disciplines" className="land-button">Explore Land Advisory <ArrowDown size={16} aria-hidden="true" /></a><a href="#partners" className="land-textLink">Partner With Us <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <p className="land-heroNote">Explore our advisory portfolio categories. No live land listings are published here.</p>
          </Reveal>
          <p className="land-heroCaption">Urban development context.<span>Client-supplied image.<br />Not an available land parcel or verified company inventory.</span></p>
        </Container>
        <div className="land-audience"><Container><span>Landowners</span><span>Real estate investors</span><span>Institutional developers</span><span>Channel partners</span></Container></div>
      </section>

      <section id="land-disciplines" aria-labelledby="land-disciplines-heading" className="land-section land-index">
        <Container><Reveal><p className="land-eyebrow">Find your starting point</p><h2 id="land-disciplines-heading" className="land-heading">Which conversation do you need?</h2>
          <nav aria-label="Land advisory areas" className="land-indexGrid">{areas.map((area,index)=><a href={"#"+area.id} key={area.id}><span className="land-indexNumber">0{index+1}</span><h3>{area.title}</h3><p>{area.text}</p><ArrowDown size={17} aria-hidden="true" /></a>)}</nav>
        </Reveal></Container>
      </section>

      <section id="brokerage" aria-labelledby="land-brokerage-heading" className="land-section land-brokerage"><Container>
        <Reveal className="land-sectionIntro"><div><p className="land-eyebrow">Representation to completion</p><h2 id="land-brokerage-heading" className="land-heading">Land<br /><em>Brokerage &amp; Advisory</em></h2></div><p className="land-body">Land Brokerage &amp; Advisory is a named area of scope in the client task. Detailed brokerage descriptions await the original presentation.</p></Reveal>
        <div className="land-brokerageList">{landBrokerage.map((service,index)=><article key={service.title} data-land-brokerage className={index%2===1?"land-brokerageRow land-reversed":"land-brokerageRow"}>
          <Reveal className="land-brokerageVisual"><PerspectiveCard className="land-imageFrame"><ClientImage id={service.image} aspect="aspect-[16/10]" /></PerspectiveCard></Reveal>
          <Reveal delay={0.08} className="land-brokerageCopy"><span className="land-editorialNumber">0{index+1}</span><h3>{service.title}</h3><span className="land-goldDivider" aria-hidden="true" /><p>{service.description}</p></Reveal>
        </article>)}</div>
      </Container></section>

      <section id="portfolio" aria-labelledby="land-portfolio-heading" className="land-section land-dark"><Container>
        <Reveal className="land-sectionIntro"><div><p className="land-eyebrow">Strategic Land Banking Vault</p><h2 id="land-portfolio-heading" className="land-heading">Different horizons.<br /><em>A considered strategy.</em></h2></div><div className="land-body"><p>Core Wealth Holdings, Value-Add Portfolios and Fast-Track Liquidation Assets are the three categories supplied in the task.</p><p className="land-note">Portfolio categories describe advisory approaches, not available inventory or investment products.</p></div></Reveal>
        <div className="land-portfolioGrid">{landPortfolios.map((portfolio,index)=><Reveal key={portfolio.title} delay={index*0.08} className="land-portfolioReveal"><PerspectiveCard as="article" className="land-portfolioCard" aria-label={portfolio.title}>
          <ClientImage id={portfolio.image} dark aspect="aspect-[4/3]" />
          <div className="land-portfolioCopy"><span className="land-editorialNumber">0{index+1}</span><p className="land-cardEyebrow">Strategic Land Banking Vault</p><h3>{portfolio.title}</h3><p>{portfolio.description}</p><a href="#portfolio-enquiry" className="land-textLink" aria-label={"Discuss "+portfolio.title}>Discuss this category <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </PerspectiveCard></Reveal>)}</div>
      </Container></section>

      <section id="title-review" aria-labelledby="land-diligence-heading" className="land-section land-diligence"><Container>
        <Reveal className="land-sectionIntro"><div><p className="land-eyebrow">Three-tier due diligence</p><h2 id="land-diligence-heading" className="land-heading">Understand the records.<br /><em>Assess the constraints.</em></h2></div><p className="land-body">The client-defined tier names set out the review framework. Original tier descriptions remain pending the Land Banking presentation.</p></Reveal>
        <LandDueDiligence />
        <p className="land-disclosure">These are review categories, not assurances of absolute title, risk elimination, permitted use or conversion and compliance approvals.</p>
      </Container></section>

      <section id="conceptual-parcel" aria-labelledby="land-parcel-heading" className="land-section land-dark land-parcelSection"><Container>
        <Reveal className="land-sectionIntro"><div><p className="land-eyebrow">Conceptual illustration</p><h2 id="land-parcel-heading" className="land-heading">A different perspective.<br /><em>On land advisory.</em></h2></div><p className="land-body">These abstract parcel shapes illustrate advisory categories only. They do not depict actual boundaries, locations, sizes, prices or land available for sale.</p></Reveal>
        <Reveal><ConceptualParcel /></Reveal>
        <p className="land-disclosure">Conceptual illustration only. No live inventory, verified development opportunity or investment outcome is represented.</p>
      </Container></section>

      <section id="development-opportunities" aria-labelledby="development-heading" className="land-section land-opportunities"><Container>
        <div className="land-split"><Reveal><PerspectiveCard className="land-imageFrame"><ClientImage id={23} aspect="aspect-[4/3]" /></PerspectiveCard></Reveal>
          <Reveal delay={0.08}><p className="land-eyebrow">Development Opportunities</p><h2 id="development-heading" className="land-heading">Explore potential.<br /><em>Test the assumptions.</em></h2><p className="land-body">Land portfolio information may be prepared for enquiry. No verified development opportunities are supplied.</p><ul className="land-opportunityNotes"><li>Land portfolio enquiry information.</li><li>Original service descriptions pending.</li><li>No active land inventory supplied.</li></ul><p className="land-disclosure">No verified development opportunities or live land listings are published here. Planning permission, funding and investment outcomes are not assured.</p></Reveal>
        </div>
      </Container></section>

      <section id="partners" aria-labelledby="land-partners-heading" className="land-section land-partners"><Container>
        <div className="land-split"><Reveal><p className="land-eyebrow">Shared opportunity. Clear roles.</p><h2 id="land-partners-heading" className="land-heading">Channel Partner &amp;<br />Asset Owner <em>Syndication</em></h2><p className="land-body">Channel Partner &amp; Asset Owner Syndication is a named area of scope in the task. Detailed terms await the original presentation.</p><a href="#portfolio-enquiry" className="land-textLink">Introduce your property or mandate <ArrowUpRight size={16} aria-hidden="true" /></a><ClientImage id={20} aspect="aspect-video" className="land-partnerImage" /></Reveal>
          <Reveal delay={0.08}><dl className="land-partnerRoles">{[
            ["Asset owners", "Use the land portfolio enquiry to introduce your property."],
            ["Agents", "Use the land portfolio enquiry to introduce your enquiry."],
            ["Channel partners", "Use the land portfolio enquiry to introduce your enquiry."],
            ["Syndication information", "Detailed syndication content awaits the original Land Banking presentation."],
          ].map(([title,text])=><div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></Reveal>
        </div>
      </Container></section>

      <section id="portfolio-enquiry" aria-labelledby="land-enquiry-heading" className="land-section land-enquiry"><Container>
        <div className="land-enquiryGrid"><Reveal><p className="land-eyebrow">Start with the asset</p><h2 id="land-enquiry-heading" className="land-heading">Prepare your property details.<br /><em>Start a conversation.</em></h2><p className="land-body">Prepare an overview of your property for an initial conversation. Record what is known and flag details that still need verification.</p><div className="land-directContact"><p className="land-eyebrow">Prefer to speak directly?</p><a href="tel:+917021892236"><Phone size={18} aria-hidden="true" />+91 70218 92236</a></div></Reveal><Reveal delay={0.08}><PortfolioEnquiry /></Reveal></div>
      </Container></section>

      <section aria-labelledby="land-consultation" className="land-section land-dark land-closing"><Container>
        <Reveal className="land-closingGrid"><div><p className="land-eyebrow">Let&apos;s build your future</p><h2 id="land-consultation" className="land-heading">A considered next step.<br /><em>For the land you hold.</em></h2><p className="land-body">Discuss your acreage, investment objectives or acquisition requirements with Aishwarya Redevelopment Advisory Company.</p></div><div className="land-closingCard"><p>Begin a land advisory conversation.</p><a href="tel:+917021892236" className="land-button"><Phone size={16} aria-hidden="true" />+91 70218 92236</a><span>Landowners &middot; Investors &middot; Developers &middot; Channel partners</span></div></Reveal>
      </Container></section>
    </main>
    <Footer />
  </>;
}
