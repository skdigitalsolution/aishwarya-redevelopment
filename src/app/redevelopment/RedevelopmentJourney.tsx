"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import { Container } from "@/components/layout/Container";
import { ClientImage } from "@/components/ui/ClientImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { usePremiumMotion } from "@/components/ui/premium-motion";
import { Reveal } from "./Reveal";
import type { ClientImageId } from "@/lib/client-images";

// Requested educational stages, supported by listed advisory disciplines.
// These do not replace the original advisory topics or establish an approved process.
const stages: { title: string; image: ClientImageId; text: string }[] = [
  { title: "Existing Society Assessment", image: 12, text: "Society Redevelopment Advisory and Redevelopment Feasibility Study are included in the client-supplied professional services list." },
  { title: "Feasibility and Planning", image: 8, text: "Assess structural, financial, and legal viability for society & property redevelopment." },
  { title: "Developer Evaluation and Approvals", image: 11, text: "Builder / Developer Selection & Tendering and Development Approvals & Liaison are listed advisory services. The supplied developer review criteria appear below." },
  { title: "Construction Monitoring", image: 9, text: "BOQ preparation, cost control, and construction quality audits." },
  { title: "Handover and Occupation", image: 24, text: "Post-development facilities management and operations framework. Project-specific handover and occupation procedures require separate review." },
];

function ProgressSegment({ progress, index, reduced }: { progress: MotionValue<number>; index: number; reduced: boolean }) {
  const amount = useTransform(progress, [index / 4, (index + 1) / 4], [0, 1]);
  return <>
    <span className="redevelopment-stageTrack redevelopment-stageTrackHorizontal" aria-hidden="true"><motion.span style={{ scaleX: reduced ? 1 : amount }} /></span>
    <span className="redevelopment-stageTrack redevelopment-stageTrackVertical" aria-hidden="true"><motion.span style={{ scaleY: reduced ? 1 : amount }} /></span>
  </>;
}

export function RedevelopmentJourney() {
  const target = useRef<HTMLElement>(null);
  const { reducedMotion } = usePremiumMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target, offset: ["start 75%", "end 35%"] });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!reducedMotion) setActive(Math.min(4, Math.floor(value * 5)));
  });

  return (
    <section ref={target} id="journey" className="redevelopment-journey redevelopment-section" aria-labelledby="redevelopment-journey-heading" data-motion-owned>
      <Container>
        <Reveal className="redevelopment-sectionIntro">
          <div><p className="redevelopment-eyebrow">The redevelopment journey</p><h2 id="redevelopment-journey-heading" className="redevelopment-heading">From existing society<br /><em>to a considered next chapter.</em></h2></div>
          <p className="redevelopment-body">An educational overview of society redevelopment. An approved process, sequence and project-specific responsibilities await the original company profile. Images are illustrative, not verified company projects or outcomes.</p>
        </Reveal>
        <ol className="redevelopment-stages">
          {stages.map((stage, index) => <li key={stage.title} data-journey-stage data-active={active === index}>
            <div className="redevelopment-stageMarker"><span className="redevelopment-stageNumber" aria-hidden="true">0{index + 1}</span>{index < stages.length - 1 && <ProgressSegment progress={scrollYProgress} index={index} reduced={reducedMotion} />}</div>
            <Reveal delay={index * 0.04} className="redevelopment-stageContent">
              <PerspectiveCard className="redevelopment-stageVisual"><ClientImage id={stage.image} aspect="aspect-[4/3]" /></PerspectiveCard>
              <h3>{stage.title}</h3><p>{stage.text}</p>
            </Reveal>
          </li>)}
        </ol>
      </Container>
    </section>
  );
}
