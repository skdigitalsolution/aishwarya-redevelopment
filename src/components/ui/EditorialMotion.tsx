"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";

/** One observer per page; the server HTML and unenhanced page remain fully visible. */
export function EditorialMotion() {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.querySelector("main");
    if (!main || !("IntersectionObserver" in window) || typeof Element.prototype.animate !== "function") return;
    const observed = new WeakSet<Element>();
    const feedbackValues = new WeakMap<Element, string>();
    const running = new Map<HTMLElement, Animation>();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        if (!element.textContent?.trim() && !element.hasAttribute("data-motion-line")) continue;
        const line = element.hasAttribute("data-motion-line");
        const feedback = element.matches('[role="alert"], [role="status"]');
        if (feedback) {
          const text = element.textContent?.trim() ?? "";
          if (feedbackValues.get(element) === text) continue;
          feedbackValues.set(element, text);
        }
        const number = element.hasAttribute("data-motion-number");
        const horizontal = element.getAttribute("data-motion-line") === "x";
        const sequence = element.matches('[id^="profile-"], #structure ol > li')
          ? Math.min(Array.from(element.parentElement?.children ?? []).indexOf(element), 3) * 0.04 : 0;
        const transform = line ? (horizontal ? "scaleX(0.85)" : "scaleY(0.85)") : `translateY(${feedback ? 2 : number ? 3 : 6}px)`;
        // WAAPI effects do not write style attributes. Other React islands may
        // still be hydrating when this layout-level observer starts running.
        const animation = element.animate([
          { opacity: line ? 0.7 : 0.94, transform },
          { opacity: 1, transform: "none" },
        ], {
          duration: feedback ? 300 : line ? 800 : 700,
          delay: (number ? 0.06 : sequence) * 1000,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "none",
        });
        running.set(element, animation);
        const release = () => { if (running.get(element) === animation) running.delete(element); };
        void animation.finished.then(() => { animation.cancel(); release(); }, release);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    const observe = (element: Element) => {
      if (observed.has(element) || element.closest("[data-motion-owned]")) return;
      if (element.matches("h3") && element.closest('[id^="profile-"]')) return;
      observed.add(element);
      observer.observe(element);
    };
    const scan = () => {
      main.querySelectorAll('h1, h2, h3, [data-motion-number], [data-motion-line], [id^="profile-"], #structure ol > li, section[aria-labelledby="founder-name"] figure, [role="alert"], [role="status"]').forEach(observe);
      // One substantial introductory paragraph per section, rather than every word.
      main.querySelectorAll("section").forEach((section) => {
        const paragraph = Array.from(section.querySelectorAll("p")).find((p) =>
          (p.textContent?.trim().length ?? 0) > 80 && !p.closest("form, [data-motion-owned]"),
        );
        if (paragraph) observe(paragraph);
      });
    };
    scan();
    const mutations = new MutationObserver(() => {
      // New validation/status content can reuse a persistent live-region element.
      main.querySelectorAll('[role="alert"], [role="status"]').forEach((element) => {
        const text = element.textContent?.trim();
        if (!text || feedbackValues.get(element) === text) return;
        if (!running.has(element as HTMLElement)) observer.observe(element);
      });
      scan();
    });
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
    };
  }, [pathname, reduced]);

  return null;
}
