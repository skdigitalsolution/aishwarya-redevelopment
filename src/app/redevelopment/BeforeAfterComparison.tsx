"use client";

import { useState, type PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import Image from "@/components/ui/SiteImage";
import { clientImages } from "@/lib/client-images";

export function BeforeAfterComparison() {
  const [position, setPosition] = useState(50);

  function update(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition(Math.round(Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100))));
  }

  return (
    <figure className="redevelopment-comparison" data-motion-owned>
      <div className="redevelopment-comparisonFrame" role="group" aria-label="Illustrative comparison of two different residential buildings"
        onPointerDown={(event) => {
          if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          update(event);
        }}
        onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) update(event); }}
        onPointerUp={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
        onPointerCancel={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      >
        <Image src="/images/21.jpeg" alt={clientImages[21].alt} fill loading="lazy" sizes="(max-width: 1279px) 100vw, 1184px" className="redevelopment-comparisonAfter" draggable={false} />
        <div className="redevelopment-comparisonBefore" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src="/images/9.jpeg" alt={clientImages[9].alt} fill loading="lazy" sizes="(max-width: 1279px) 100vw, 1184px" draggable={false} />
        </div>
        <span className="redevelopment-comparisonLabel redevelopment-beforeLabel" aria-hidden="true">Before <small>Older society context</small></span>
        <span className="redevelopment-comparisonLabel redevelopment-afterLabel" aria-hidden="true">After <small>Architectural reference</small></span>
        <span className="redevelopment-comparisonHandle" style={{ left: `${position}%` }} aria-hidden="true"><span><ChevronsLeftRight size={23} strokeWidth={1.5} /></span></span>
      </div>
      <div className="redevelopment-sliderControls">
        <label htmlFor="redevelopment-comparison-position">Adjust the architectural comparison</label>
        <input id="redevelopment-comparison-position" type="range" min={0} max={100} step={1} value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-describedby="redevelopment-comparison-help redevelopment-comparison-note"
          aria-valuetext={`${position}% older society image, ${100 - position}% modern architecture image`} />
        <p id="redevelopment-comparison-help">Drag across the images or use the slider. Keyboard: arrow keys to adjust; Home and End to show either image.</p>
      </div>
      <figcaption id="redevelopment-comparison-note"><strong>Illustrative comparison — different buildings.</strong> These client-supplied images do not show the before and after of one verified property or an Aishwarya project. The modern building is an unverified architectural reference, not a promised redevelopment outcome.</figcaption>
    </figure>
  );
}
