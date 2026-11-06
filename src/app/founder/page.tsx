import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Building2, FileCheck2, Scale, Users, Layers3 } from "lucide-react";
import Image from "@/components/ui/SiteImage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { CompanyReveal } from "@/components/company/CompanyReveal";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { clientImages, type ClientImageId } from "@/lib/client-images";
import { pageMetadata } from "@/lib/seo";
import { competencies, commitments, sourceServices } from "./founder-content";
import "./founder.css";

export const metadata = pageMetadata("/founder", "Founder & Leadership", "Meet Mr. Sachin Murudkar, Founder & Director, and explore his Mumbai redevelopment advisory perspective, core competencies and corporate philosophy.");

const icons = [Building2, FileCheck2, Users, Scale, Layers3];

function EditorialImage({ id, caption, className = "" }: { id: ClientImageId; caption?: string; className?: string }) {
  return <figure className={`founder-editorialImage ${className}`}>
    <div><Image src={`/images/${id}.jpeg`} alt={clientImages[id].alt} fill loading="lazy" sizes="(max-width: 767px) calc(100vw - 48px), 550px" /></div>
    <figcaption>{caption ?? clientImages[id].caption}</figcaption>
  </figure>;
}

function Heading({ number, label, children, id }: { number: string; label: string; children: ReactNode; id: string }) {
  return <><p className="founder-eyebrow"><span>{number}</span>{label}</p><h2 id={id} className="founder-heading">{children}</h2></>;
}

export default function FounderPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="founder-page" data-motion-owned>
    <section className="founder-hero" aria-labelledby="founder-heading">
      <Container className="founder-heroGrid">
        <CompanyReveal className="founder-portraitReveal">
          <figure className="founder-portrait">
            <div><Image src="/images/founder-portrait.jpeg" alt="Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" width={516} height={564} preload sizes="(max-width: 767px) calc(100vw - 64px), 440px" /></div>
            <figcaption>Mr. Sachin Murudkar<span>Founder &amp; Director</span></figcaption>
          </figure>
        </CompanyReveal>
        <div className="founder-heroCopy">
          <CompanyReveal className="founder-heroArchitecture"><Image src="/images/22.jpeg" alt="" fill preload sizes="(max-width: 767px) 100vw, 65vw" aria-hidden="true" /></CompanyReveal>
          <div className="founder-heroText">
            <CompanyReveal><p className="founder-eyebrow">Founder &amp; Leadership</p><h1 id="founder-heading"><span>Mr. Sachin</span><em>Murudkar</em></h1></CompanyReveal>
            <CompanyReveal delay={0.08}><p className="founder-designation">Founder &amp; Director</p><p className="founder-company">Aishwarya Redevelopment Advisory Company</p></CompanyReveal>
            <CompanyReveal delay={0.16}><blockquote>“Led by Vision. Built on Trust.<br />Driven by Uncompromising Results.”</blockquote><a href="#leadership-profile" className="founder-link">Explore the leadership perspective <ArrowDown size={16} aria-hidden="true" /></a><p className="founder-heroNote">Client-supplied architectural concept. Not a verified company project.</p></CompanyReveal>
          </div>
        </div>
      </Container>
    </section>

    <section id="leadership-profile" className="founder-section" aria-labelledby="profile-heading">
      <Container className="founder-editorialGrid">
        <CompanyReveal><EditorialImage id={14} /></CompanyReveal>
        <CompanyReveal delay={0.08}><Heading number="01" label="Executive Summary & Leadership Profile" id="profile-heading">Leadership with<br /><em>a wider perspective.</em></Heading>
          <div className="founder-prose"><p>Mr. Sachin Murudkar is the Founder &amp; Director of Aishwarya Redevelopment Advisory Company. His leadership perspective brings together the preservation of a property?s legacy, legal precision, urban economics and the trust of the people who call it home.</p><p>In Mumbai, the value of a property is both financial and personal. His approach considers municipal regulatory frameworks, urban planning requirements and developer financial health alongside the needs of housing society residents, commercial plot owners and landowning families.</p><p>The advisory practice connects cooperative housing societies and developers through due diligence, feasibility reporting and project modelling. Long-term value creation, regulatory compliance and legal clarity form the basis of this leadership approach.</p></div>
        </CompanyReveal>
      </Container>
    </section>

    <section className="founder-section founder-market" aria-labelledby="market-heading">
      <Container className="founder-editorialGrid founder-editorialGrid-reverse">
        <CompanyReveal><Heading number="02" label="Industry Experience & Mumbai Market Knowledge" id="market-heading">The city.<br /><em>The neighbourhood.<br />The details.</em></Heading>
          <div className="founder-prose"><p>The Director Introduction describes an advisory practice rooted in Western Mumbai and its extended corridors, with a particular focus on Borivali West and neighbourhoods from Gorai to IC Colony.</p><p>Understanding these markets means looking beyond statutory requirements: neighbourhood histories, community needs, local development parameters, City Survey records and micro-market land titles all inform a property discussion.</p><p>The experience narrative covers traditional developer-led redevelopment, society-led alternatives, title investigation, land valuation and the structuring of Joint Venture (JV) and Joint Development Agreements (JDA). Access-constrained Gaothan properties and fragmented ownership illustrate why each assessment needs a detailed local context.</p></div>
        </CompanyReveal>
        <CompanyReveal delay={0.08}><EditorialImage id={5} caption="Mumbai urban development context · Client-supplied architectural reference, not a verified company project" /></CompanyReveal>
      </Container>
    </section>

    <section className="founder-section founder-competencies" aria-labelledby="competencies-heading">
      <Container><CompanyReveal><Heading number="03" label="The advisory practice" id="competencies-heading">Core Advisory Competencies<br /><em>&amp; Strategic Pillars</em></Heading><p className="founder-sectionIntro">Five connected areas of advisory, spanning property records, society decisions and development planning.</p></CompanyReveal>
        <div className="founder-competencyGrid">{competencies.map((item, index) => {
          const Icon = icons[index];
          return <CompanyReveal key={item.title} delay={(index % 3) * 0.08} className="founder-cardReveal">
            <PerspectiveCard as="article" className="founder-competencyCard">
              <div className="founder-cardImage"><Image src={`/images/${item.image}.jpeg`} alt={clientImages[item.image].alt} fill loading="lazy" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 45vw, 380px" /><span>0{index + 1}</span></div>
              <div className="founder-cardCopy"><Icon size={23} strokeWidth={1.25} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></div>
            </PerspectiveCard>
          </CompanyReveal>;
        })}</div>
        <p className="founder-contextNote">Client-supplied visuals are illustrative references. They do not establish company involvement in the properties shown. Advisory scope, legal requirements and development potential depend on the individual engagement.</p>
      </Container>
    </section>

    <section className="founder-section founder-philosophy" aria-labelledby="philosophy-heading">
      <Container className="founder-editorialGrid">
        <CompanyReveal><EditorialImage id={11} /></CompanyReveal>
        <CompanyReveal delay={0.08}><Heading number="04" label="Corporate Philosophy" id="philosophy-heading">“Client’s Profit<br /><em>is Our Success.”</em></Heading>
          <div className="founder-prose"><p>The company?s motto expresses a focus on long-term asset building and intergenerational value rather than purely transactional real estate activity. It is a statement of philosophy, not a promise of financial returns.</p><p>The Director Introduction emphasizes transparent feasibility reporting, compliance and coordinated technical, legal and operational advisory. The intention is to help property owners and society managing committees understand the decisions and professional inputs involved.</p></div>
          <details className="founder-serviceList"><summary>Advisory areas listed in the Director Introduction</summary><p>This source list retains the document?s terminology. Scope and availability are subject to the agreed engagement; it does not promise funding, approvals or project outcomes.</p><ol>{sourceServices.map(service => <li key={service}>{service}</li>)}</ol><Link href="/services" className="founder-link">Explore our advisory services <ArrowUpRight size={16} aria-hidden="true" /></Link></details>
        </CompanyReveal>
      </Container>
    </section>

    <section className="founder-section" aria-labelledby="commitment-heading">
      <Container>
        <div className="founder-editorialGrid"><CompanyReveal><Heading number="05" label="Standard of Professional Integrity" id="commitment-heading">The Aishwarya<br /><em>Commitment</em></Heading><p className="founder-sectionIntro">A considered approach to valuation, disclosure, legal review and coordination throughout the agreed engagement.</p></CompanyReveal><CompanyReveal delay={0.08}><EditorialImage id={18} /></CompanyReveal></div>
        <div className="founder-commitmentGrid">{commitments.map((item, index) => <CompanyReveal key={item.title} delay={(index % 2) * 0.08}><article className="founder-commitment"><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article></CompanyReveal>)}</div>
      </Container>
    </section>

    <section className="founder-section founder-vision" aria-labelledby="vision-heading">
      <Container className="founder-editorialGrid">
        <CompanyReveal><EditorialImage id={24} caption="Residential architecture and shared amenities · Illustrative reference, not a verified Aishwarya project" /></CompanyReveal>
        <CompanyReveal delay={0.08}><Heading number="06" label="The next chapter" id="vision-heading">Vision for<br /><em>the Future</em></Heading><div className="founder-prose"><p>The Director Introduction places professional advisory within Mumbai?s changing urban landscape: aging housing infrastructure, redevelopment and the relationship between planning policy and community needs.</p><p>Its vision is for ethical, value-conscious advisory that helps individual plot owners, society committees and those facing complex title questions make informed decisions about their properties.</p><p>Begin with a conversation about your society, landholding or advisory requirements. Project-specific options and responsibilities can then be considered with the relevant professional inputs.</p></div><Link href="/contact" className="founder-button">Discuss a consultation <ArrowUpRight size={17} aria-hidden="true" /></Link><p className="founder-contextNote">This leadership overview is not project-specific legal or financial advice. Approvals, funding, timelines and financial outcomes are not guaranteed.</p></CompanyReveal>
      </Container>
    </section>
  </main><Footer /></>;
}

