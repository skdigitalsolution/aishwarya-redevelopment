import Link from "@/components/resources/ResourceLink";
import Image from "@/components/ui/SiteImage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ResourceReveal } from "@/components/resources/ResourceReveal";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { GuideLibrary } from "./GuideLibrary";
import { faqs } from "./knowledge-data";
import "@/components/resources/resources.css";

export const metadata = pageMetadata("/knowledge-centre", "Knowledge Centre", "Educational redevelopment guides with official resources, source-supported explanations and questions for informed society conversations.");

export default function KnowledgeCentrePage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="resource-page resource-knowledge" data-motion-owned>
    <section className="resource-hero" aria-labelledby="knowledge-title"><Image src="/images/8.jpeg" alt="Client-supplied illustrative architectural planning discussion" fill preload sizes="100vw" className="resource-heroImage" /><div className="resource-heroShade" aria-hidden="true" /><Container className="resource-heroGrid"><ResourceReveal><p className="resource-eyebrow">Informed perspectives</p><h1 id="knowledge-title">Knowledge<br /><em>Centre.</em></h1><p className="resource-heroIntro">Clear starting points for informed redevelopment conversations. Educational guides link to official resources where relevant.</p><a href="#guides" className="resource-textLink">Explore the guides <ArrowDown size={17} aria-hidden="true" /></a></ResourceReveal><p className="resource-heroCaption">Architecture. Context. Clarity.<span>Client-supplied planning illustration.<br />Not a verified company project or staff photograph.</span></p></Container></section>
    <section id="guides" className="resource-section" aria-labelledby="guides-title"><Container><ResourceReveal><p className="resource-eyebrow">The educational collection</p><h2 id="guides-title" className="resource-heading">Start with understanding.<br /><em>Ask the right questions.</em></h2></ResourceReveal><GuideLibrary /><p className="resource-disclaimer">General educational information, not a property-specific legal, technical or financial opinion. Check current official rules and obtain qualified advice before making commitments. Client images are contextual illustrations, not verified project records.</p></Container></section>
    <section id="faqs" className="resource-section resource-faqs" aria-labelledby="faqs-title"><Container><ResourceReveal><p className="resource-eyebrow">Common questions</p><h2 id="faqs-title" className="resource-heading">Redevelopment <em>FAQs.</em></h2><div className="resource-faqList">{faqs.map(faq => <details key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></ResourceReveal></Container></section>
    <section className="resource-section resource-closing" aria-labelledby="knowledge-contact"><Container><ResourceReveal className="resource-closingGrid"><div><p className="resource-eyebrow">Your next conversation</p><h2 id="knowledge-contact" className="resource-heading">Bring your questions.<br /><em>Discuss your property.</em></h2></div><Link href="/contact/" className="resource-button">Discuss a consultation <ArrowUpRight size={17} aria-hidden="true" /></Link></ResourceReveal></Container></section>
  </main><Footer /></>;
}
