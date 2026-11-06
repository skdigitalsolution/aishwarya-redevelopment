import { Container } from "@/components/layout/Container";
import Image from "@/components/ui/SiteImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { Reveal } from "./Reveal";
import type { ServiceGroup } from "./services-data";

/** Every service stays readable in the document; interaction adds image depth only. */
export function InteractiveServices({ group }: { group: ServiceGroup }) {
  return (
    <section id={group.id} data-service-group data-motion-owned aria-labelledby={`${group.id}-heading`} className={`services-serviceGroup ${group.dark ? "services-darkGroup" : ""}`}>
      <Container>
        <Reveal distance={30} className="services-groupHeading">
          <p className="services-eyebrow">The collection <span>/ {group.chapter}</span></p>
          <h2 id={`${group.id}-heading`}>Services <em>{group.range}</em><span className="services-headingDot">.</span></h2>
          <a href="#service-index" className="services-backToIndex">Back to collections <span aria-hidden="true">↑</span></a>
        </Reveal>

        <div className="services-editorialList">
          {group.services.map((service, index) => (
            <article key={service.id} id={service.id} data-service-entry aria-labelledby={`${service.id}-title`} className={`services-editorialRow ${index % 2 === 1 ? "services-reversedRow" : ""}`}>
              <Reveal distance={30} className="services-rowVisual">
                <PerspectiveCard className="services-dimensionalFrame">
                  <figure>
                    <div className="services-editorialImage">
                      <Image src={service.image} alt={service.alt} fill loading="lazy" sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 899px) calc(100vw - 80px), (max-width: 1279px) 44vw, 500px" />
                    </div>
                    <figcaption>{service.caption}</figcaption>
                  </figure>
                </PerspectiveCard>
              </Reveal>
              <Reveal distance={30} delay={0.08} className="services-rowCopy">
                <span className="services-editorialNumber" aria-label={`Service ${service.number}`}>{service.number}</span>
                <h3 id={`${service.id}-title`}>{service.title}</h3>
                <span className="services-editorialRule" aria-hidden="true" />
                <p data-service-description>{service.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
