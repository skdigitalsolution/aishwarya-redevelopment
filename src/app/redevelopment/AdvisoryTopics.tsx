import Image from "@/components/ui/SiteImage";
import { ClientImage } from "@/components/ui/ClientImage";
import { Container } from "@/components/layout/Container";
import { clientImages, type ClientImageId } from "@/lib/client-images";
import { Reveal } from "./Reveal";
import "./advisory-topics.css";

const images: ClientImageId[] = [6, 9, 11, 18, 14, 8];

export function AdvisoryTopics({ topics }: { topics: string[][] }) {
  return (
    <section id="advisory-topics" aria-labelledby="advisory-topics-heading" className="redevelopment-topics advisory-topics scroll-mt-28">
      <Container>
        <div className="advisory-topics-grid">
          <div className="advisory-topics-main">
            <Reveal>
              <p className="redevelopment-eyebrow">Redevelopment advisory topics</p>
              <h2 id="advisory-topics-heading" className="redevelopment-heading">Society redevelopment.<br /><em>Advisory topics.</em></h2>
            </Reveal>
            <ol className="advisory-topics-list">
              {topics.map(([title, text], index) => {
                const image = images[index];
                return <li key={title} className="advisory-topics-item">
                  <Reveal delay={(index % 3) * 0.08} className="advisory-topics-row">
                    <span className="advisory-topics-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <figure className="advisory-topics-visual">
                      <Image src={`/images/${image}.jpeg`} alt={clientImages[image].alt} fill loading="lazy" sizes="(max-width: 639px) calc(100vw - 100px), (max-width: 1023px) 210px, (max-width: 1279px) 150px, 190px" />
                    </figure>
                    <div className="advisory-topics-copy"><h3>{title}</h3><p>{text}</p></div>
                  </Reveal>
                </li>;
              })}
            </ol>
          </div>
          <div className="advisory-topics-sidebar">
            <Reveal><p className="advisory-topics-note">Advisory topics only. An approved process and its sequence await the original company profile.</p></Reveal>
            <Reveal delay={0.08}>
              <aside aria-label="Supporting process illustration" className="advisory-topics-card">
                <figure className="advisory-topics-building">
                  <Image src="/images/21.jpeg" alt={clientImages[21].alt} width={1600} height={900} loading="lazy" sizes="(max-width: 1023px) calc(100vw - 80px), 400px" />
                  <figcaption>Illustrative architectural reference</figcaption>
                </figure>
                <h3>An illustration, not a project commitment.</h3>
                <p id="process-image-note">This client-supplied illustration does not verify registration, amenities, entitlements or project outcomes. The detailed redevelopment process awaits the original company profile.</p>
                <details>
                  <summary>View the client-supplied illustration</summary>
                  <div aria-describedby="process-image-note"><ClientImage id={4} aspect="aspect-square" className="mt-5" /></div>
                </details>
              </aside>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

