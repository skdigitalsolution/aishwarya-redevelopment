# Phase 8 — Motion polish review

Completed motion refinement only. Existing layouts, content, images, routes, Navbar, logo, Hero, Footer, global tokens and form implementations are preserved.

## Shared system

- Shared entrance duration: 0.7 seconds; reveal distance: 20–30px; stagger: 0.08 seconds; easing: cubic-bezier(0.22, 1, 0.36, 1).
- Company, resource, redevelopment and land-banking reveal aliases now export the same ScrollReveal implementation.
- ScrollReveal and homepage section animations share motion preferences. Server HTML stays visible and reveals run once.
- PerspectiveCard keeps the existing maximum 3-degree desktop tilt. Existing cards containing links or buttons gain a 4px hover lift, restrained shadow and gold edge feedback. No new clickable surfaces or tab stops were added.
- Image reveals use a soft 0.7-second transition without changing crop, dimensions or source files.
- Existing Hero and consultation form animations are preserved.

## Performance and accessibility

- One shared pair of media-query listeners replaces listeners per card/component. Listeners are removed when unused.
- Fully Motion-owned pages skip the fallback editorial observer.
- Fallback mutation scans are coalesced with requestAnimationFrame and cancelled on cleanup.
- Editorial fallback and explicit reveals share duration, distance, stagger and easing.
- Tilt is disabled below 1024px, on coarse/touch pointers and with reduced motion.
- Live reduced-motion changes disable tilt; keyboard focus flattens cards and keeps existing focus outlines.
- No packages, continuous animation loops, scroll listeners or permanent will-change declarations were added.

## Pages affected

Shared motion refinements apply to Homepage, About, Services, Redevelopment, Land Banking, Projects, Founder, Our Team, Knowledge Centre and Contact. Article pages receive the shared resource reveal refinements.

## Files modified in this phase

- `src/app/knowledge-centre/GuideLibrary.tsx`
- `src/app/land-banking/Reveal.tsx`
- `src/app/redevelopment/Reveal.tsx`
- `src/components/company/CompanyReveal.tsx`
- `src/components/resources/ResourceReveal.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/FounderSection.tsx`
- `src/components/sections/LandBankingSection.tsx`
- `src/components/sections/RedevelopmentProcessSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/WhyChooseUsSection.tsx`
- `src/components/ui/EditorialMotion.tsx`
- `src/components/ui/perspective-card.css`
- `src/components/ui/PerspectiveCard.tsx`
- `src/components/ui/premium-motion.ts`
- `src/components/ui/ScrollReveal.tsx`
- `docs/PHASE-8-MOTION-REVIEW.md` — this report.

Earlier uncommitted work was retained. Source hashes confirm that all files under public/images, the Hero, Navbar, Footer, form components and page content/data files remained unchanged during this phase.

## Verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; static export includes all ten article routes.
- Chromium: 44 checks across 375, 768, 1024 and 1440px, covering ten main routes plus a representative article.
- No horizontal overflow, broken images, runtime exceptions or failed resource requests in these checks.
- Before/after hashes of main content text, link destinations and image sources/alt text match on all 44 checks.
- Desktop hover: measured approximately 2.87° / -2.83° tilt and 4px lift; within the 3-degree limit.
- Keyboard focus, live reduced-motion changes, mobile tilt suppression, parcel touch selection and keyboard navigation passed.
- No-JavaScript About page retains visible reveal content.
- Homepage scroll reveals finish with visible content; mobile screenshot reviewed.
- No push or deployment performed. Phase 9 has not started.

Browser checks verify functional states and dimensions; they do not quantify animation smoothness on physical mobile hardware.

