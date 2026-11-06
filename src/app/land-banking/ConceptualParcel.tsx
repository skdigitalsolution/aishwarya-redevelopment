"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { usePremiumMotion } from "@/components/ui/premium-motion";
import { landPortfolios } from "./land-data";

export function ConceptualParcel() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const { canTilt } = usePremiumMotion();

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": case "ArrowDown": next = (index + 1) % 3; break;
      case "ArrowLeft": case "ArrowUp": next = (index + 2) % 3; break;
      case "Home": next = 0; break;
      case "End": next = 2; break;
      default: return;
    }
    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <div className="land-parcelExperience" data-motion-owned>
      <div className="land-parcelVisual">
        <PerspectiveCard className="land-parcelSurface">
          <div className="land-parcelBoard" role="group" aria-label="Conceptual parcel shapes representing three advisory categories">
            {landPortfolios.map((category, index) => <button key={category.title} type="button" ref={element => { buttons.current[index] = element; }}
              className="land-parcelShape" data-active={active === index} aria-pressed={active === index}
              aria-label={`Conceptual parcel ${index + 1}: ${category.title}`} aria-controls="land-parcel-detail"
              onPointerEnter={event => { if (event.pointerType === "mouse" && canTilt) setActive(index); }}
              onFocus={() => setActive(index)} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}>
              <span aria-hidden="true">0{index + 1}</span>
            </button>)}
          </div>
        </PerspectiveCard>
        <p className="land-parcelInstruction">Hover, focus or tap a numbered shape to explore an advisory category.</p>
      </div>
      <div className="land-parcelDetail" id="land-parcel-detail" aria-live="polite" aria-atomic="true">
        <span className="land-eyebrow">Advisory category / 0{active + 1}</span>
        <h3>{landPortfolios[active].title}</h3>
        <p>{landPortfolios[active].description}</p>
        <a href="#portfolio" className="land-textLink">View all three categories <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  );
}
