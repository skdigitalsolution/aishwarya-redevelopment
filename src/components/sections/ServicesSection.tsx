"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClientImage } from "@/components/ui/ClientImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/layout/Container";
import { primaryServiceNames } from "@/lib/client-content";
import type { ClientImageId } from "@/lib/client-images";

// Indexes refer to the verified twenty-service list; the full list stays on /services.
const featuredServices: { index: number; image: ClientImageId; group: string }[] = [
  { index: 1, image: 6, group: "redevelopment" },
  { index: 0, image: 17, group: "redevelopment" },
  { index: 10, image: 10, group: "financial" },
  { index: 5, image: 8, group: "legal" },
  { index: 9, image: 11, group: "legal" },
  { index: 3, image: 18, group: "redevelopment" },
];

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="home-services-heading" className="home-services home-section home-dark">
      <Container>
        <ScrollReveal distance={30} className="home-section-intro">
          <div><p className="home-eyebrow">Our Expertise</p><h2 id="home-services-heading" className="home-heading">Real Estate Services.<br /><em>Client-listed service names.</em></h2></div>
          <p className="home-body">Selected names from the client-supplied list of 20 professional services.</p>
        </ScrollReveal>
        <div className="home-service-grid">
          {featuredServices.map(({ index, image, group }, order) => (
            <ScrollReveal key={index} distance={30} delay={(order % 3) * 0.08} className="home-service-reveal">
              <PerspectiveCard as="article" className="home-service-card">
                <ClientImage id={image} dark aspect="aspect-[4/3]" />
                <div className="home-service-copy">
                  <span className="home-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3><Link href={"/services/#" + group}>{primaryServiceNames[index]}<ArrowRight size={19} aria-hidden="true" /></Link></h3>
                  <p>Client-listed professional service.</p>
                  <Link href={"/services/#" + group} className="home-text-link" aria-label={"Explore " + primaryServiceNames[index]}>Explore service <ArrowRight size={15} aria-hidden="true" /></Link>
                </div>
              </PerspectiveCard>
            </ScrollReveal>
          ))}
        </div>
        <div className="home-section-end"><p>Exact service descriptions await the original Complete Real Estate Services image.</p><Link href="/services" className="home-button">Explore All Services <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Container>
    </section>
  );
}
export default ServicesSection;
