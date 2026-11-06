import Link from "next/link";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import Image from "@/components/ui/SiteImage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { COMPANY_DETAILS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "./Reveal";
import { InteractiveServices } from "./InteractiveServices";
import { serviceGroups } from "./services-data";
import "./services.css";

export const metadata = pageMetadata("/services", "Our Services", "Explore the 20 professional real estate advisory services of Aishwarya Redevelopment Advisory Company.");

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="services-main" tabIndex={-1} className="services-page" data-motion-owned>
        <section className="services-hero" aria-labelledby="services-heading">
          <div className="services-heroGridLines" aria-hidden="true" />
          <Container>
            <div className="services-heroGrid">
              <Reveal distance={30} className="services-heroCopy">
                <p className="services-eyebrow"><span className="services-goldRule" />The advisory collection</p>
                <h1 id="services-heading" className="services-heroTitle">Complete<br /><em>Real Estate Services</em></h1>
                <p className="services-heroDescription">20 Professional Services — End-to-End Real Estate &amp; Redevelopment Advisory Solutions</p>
                <a href="#service-index" className="services-heroLink">Explore the services <ArrowDown size={17} aria-hidden="true" /></a>
                <div className="services-heroNotation"><span>01 — 20</span><span>Services / Aishwarya</span></div>
              </Reveal>
              <Reveal distance={30} delay={0.12} className="services-heroVisual">
                <div className="services-heroFrame" aria-hidden="true" />
                <figure className="services-heroFigure">
                  <Image src="/images/22.jpeg" alt="Client-supplied architectural rendering of an illuminated curved entrance and residential towers" fill preload sizes="(max-width: 767px) 100vw, 50vw" className="services-heroImage" />
                  <div className="services-heroImageShade" aria-hidden="true" />
                  <figcaption><span>Architecture in perspective</span><span>Illustrative reference<br />Not a verified company project</span></figcaption>
                </figure>
                <span className="services-heroImageIndex" aria-hidden="true">A / 01</span>
              </Reveal>
            </div>
          </Container>
          <div id="service-index" className="services-collectionIndex">
            <Container>
              <nav aria-label="Service collections" className="services-indexGrid">
                {serviceGroups.map((group) => (
                  <a key={group.id} href={`#${group.id}`} className="services-indexLink">
                    <span className="services-indexNumber">{group.chapter}</span>
                    <span>Services <strong>{group.range}</strong></span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </Container>
          </div>
        </section>

        {serviceGroups.map((group) => <InteractiveServices key={group.id} group={group} />)}

        <section className="services-closing" aria-labelledby="services-contact-heading">
          <Container>
            <Reveal distance={30} className="services-closingGrid">
              <div><p className="services-eyebrow">Your next conversation</p><h2 id="services-contact-heading">Let&apos;s discuss<br /><em>your property.</em></h2></div>
              <div className="services-closingActions">
                <Link href="/contact" className="services-contactButton">Make an enquiry <ArrowUpRight size={18} aria-hidden="true" /></Link>
                <a href={`tel:${COMPANY_DETAILS.contact.phoneTel}`} className="services-phoneLink"><Phone size={15} aria-hidden="true" />{COMPANY_DETAILS.contact.phone}</a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
