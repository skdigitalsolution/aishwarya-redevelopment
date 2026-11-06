"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { premiumMotion, usePremiumMotion } from "./premium-motion";

/** Enhance server-rendered content without wrappers or pre-hydration style writes. */
export function EditorialMotion() {
  const pathname = usePathname();
  const { reducedMotion: reduced } = usePremiumMotion();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced || preference.matches) return;
    const main = document.querySelector("main");
    if (!main || main.hasAttribute("data-motion-owned") || !("IntersectionObserver" in window) || typeof Element.prototype.animate !== "function") return;
    const observed = new WeakSet<Element>();
    const running = new Map<Element, Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target;
        observer.unobserve(element);
        if (preference.matches) continue;
        const index = Array.from(element.parentElement?.children ?? []).indexOf(element);
        const grouped = element.matches("article, li, figure, [data-motion-number]");
        try {
          // Native keyframes avoid mutating React-owned style attributes while
          // other client islands hydrate. Motion owns the explicit reveal blocks.
          const animation = element.animate([
            { opacity: 0, transform: `translateY(${premiumMotion.revealDistance}px)` },
            { opacity: 1, transform: "translateY(0px)" },
          ], {
            duration: premiumMotion.fadeDuration * 1000,
            delay: grouped ? Math.min(Math.max(index, 0), 3) * premiumMotion.stagger * 1000 : 0,
            easing: `cubic-bezier(${premiumMotion.ease.join(",")})`,
            fill: "none",
          });
          running.set(element, animation);
          const release = () => { if (running.get(element) === animation) running.delete(element); };
          void animation.finished.then(() => { animation.cancel(); release(); }, release);
        } catch {
          // Unenhanced content is visible even if an animation cannot start.
        }
      }
    }, { threshold: 0.15 });

    const scan = () => {
      const candidates = Array.from(main.querySelectorAll(
        'h1, h2, h3, figure, article, section ol > li, [data-motion-number], section p',
      )).filter((element) => !element.closest('[data-motion-owned], form, [role="alert"], [role="status"]') &&
        (element.tagName !== "P" || (element.textContent?.trim().length ?? 0) > 80));
      const blocks = new Set(candidates);
      for (const element of candidates) {
        // A service block, timeline step or figure owns its descendants' reveal.
        let ancestor = element.parentElement;
        let nested = false;
        while (ancestor && ancestor !== main) {
          if (blocks.has(ancestor)) { nested = true; break; }
          ancestor = ancestor.parentElement;
        }
        if (nested || observed.has(element)) continue;
        observed.add(element);
        observer.observe(element);
      }
    };
    scan();
    let scanFrame = 0;
    const mutations = new MutationObserver(() => {
      if (!scanFrame) scanFrame = requestAnimationFrame(() => { scanFrame = 0; scan(); });
    });
    mutations.observe(main, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(scanFrame);
      running.forEach((animation) => animation.cancel());
      running.clear();
    };
  }, [pathname, reduced]);

  return null;
}
