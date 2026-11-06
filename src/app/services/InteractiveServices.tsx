"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight, Pin, RotateCcw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import Image from "@/components/ui/SiteImage";
import type { ServiceGroup } from "./services-data";


const ease = [0.22, 1, 0.36, 1] as const;

export function InteractiveServices({ group }: { group: ServiceGroup }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const reduced = useReducedMotion();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 26 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 26 });

  function canHover() {
    return window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches;
  }

  function handleTilt(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse" || !canHover()) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const horizontal = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const vertical = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    x.set(-vertical * 3.5);
    y.set(horizontal * 3.5);
  }

  function resetTilt() { x.set(0); y.set(0); }
  function preview(index: number) { if (!locked) setActiveIndex(index); }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "Escape") { setLocked(false); return; }
    let next: number;
    switch (event.key) {
      case "ArrowDown": next = (index + 1) % group.services.length; break;
      case "ArrowUp": next = (index - 1 + group.services.length) % group.services.length; break;
      case "Home": next = 0; break;
      case "End": next = group.services.length - 1; break;
      default: return;
    }
    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <section id={group.id} data-service-group data-motion-owned aria-labelledby={`${group.id}-heading`} className={`services-serviceGroup ${group.dark ? "services-darkGroup" : ""}`}>
      <Container>
        <motion.div data-motion-owned initial={false} whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [24, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduced ? 0 : 0.65, ease }}>
          <div className="services-groupHeading">
            <p className="services-eyebrow">The collection <span>/ {group.chapter}</span></p>
            <h2 id={`${group.id}-heading`}>Services <em>{group.range}</em><span className="services-headingDot">.</span></h2>
            <span className="services-groupCount">05 services</span>
          </div>

          <div className="services-explorer">
            <div className="services-preview">
              <div className="services-perspective" onPointerMove={handleTilt} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
                <div className="services-offsetFrame" aria-hidden="true" />
                <motion.div className="services-tiltCard" style={{ rotateX, rotateY, transformPerspective: 1200 }} animate={{ y: reduced ? 0 : locked ? -3 : 0 }} transition={{ duration: reduced ? 0 : 0.4, ease }}>
                  <div className="services-imageLayers">
                    {group.services.map((service, index) => (
                      <motion.div key={service.id} className="services-imageLayer" initial={false} animate={{ opacity: index === activeIndex ? 1 : 0, scale: reduced ? 1 : index === activeIndex ? 1 : 1.025 }} transition={{ duration: reduced ? 0 : 0.5, ease }} aria-hidden={index !== activeIndex}>
                        <Image src={service.image} alt={service.alt} fill loading="lazy" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 75vw, 46vw" className="services-serviceImage" />
                      </motion.div>
                    ))}
                    <div className="services-imageVignette" aria-hidden="true" />
                    <div className="services-imageLabel" aria-hidden="true"><span>Advisory / {group.range}</span><span>{group.services[activeIndex].number}</span></div>
                  </div>
                </motion.div>
              </div>

              <div className="services-panelStack" aria-live="polite" aria-atomic="true">
                {group.services.map((service, index) => {
                  const active = index === activeIndex;
                  return (
                    <motion.div key={service.id} id={`${service.id}-panel`} role="region" aria-labelledby={`${service.id}-title`} aria-hidden={!active} inert={!active} className="services-textPanel" initial={false} animate={{ opacity: active ? 1 : 0, y: reduced ? 0 : active ? 0 : 6 }} transition={{ duration: reduced ? 0 : 0.4, ease }} style={{ pointerEvents: active ? "auto" : "none" }}>
                      <p className="services-imageCaption">{service.caption}</p>
                      <p id={`${service.id}-title`} className="services-selectedTitle">{service.title}</p>
                      {service.description && <p className="services-selectedDescription">{service.description}</p>}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="services-selector">
              <div className="services-selectionInstruction">
                <span className="services-desktopInstruction">{locked ? <><Pin size={12} aria-hidden="true" /> Selection pinned</> : "Hover to preview · Click to pin"}</span>
                <span className="services-touchInstruction">Tap a service to explore</span>
                {locked && <button type="button" onClick={() => setLocked(false)} className="services-unlock"><RotateCcw size={12} aria-hidden="true" />Resume preview</button>}
              </div>
              <ol className="services-serviceList" start={Number(group.services[0].number)} aria-label={`Select a service in ${group.range}`}>
                {group.services.map((service, index) => {
                  const active = index === activeIndex;
                  return (
                    <li key={service.id}>
                      <h3>
                        <button data-service-option ref={(element) => { buttons.current[index] = element; }} type="button" aria-pressed={active} aria-controls={`${service.id}-panel`} onPointerEnter={(event) => { if (event.pointerType === "mouse" && canHover()) preview(index); }} onFocus={() => preview(index)} onClick={() => { setActiveIndex(index); setLocked(canHover()); }} onKeyDown={(event) => handleKeyDown(event, index)} className={`services-serviceOption ${active ? "services-activeOption" : ""}`}>
                          <motion.span aria-hidden="true" className="services-serviceNumber" initial={false} whileInView={reduced ? { opacity: 1 } : { opacity: [0.35, 1], y: [5, 0] }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : index * 0.045, ease }}>{service.number}</motion.span>
                          <span className="services-optionTitle">{service.title}</span>
                          <ArrowUpRight size={20} aria-hidden="true" className="services-optionArrow" />
                        </button>
                      </h3>
                    </li>
                  );
                })}
              </ol>
              <div className="services-selectorFoot"><span>{group.services[activeIndex].number} / 20</span><span>Aishwarya advisory</span></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
