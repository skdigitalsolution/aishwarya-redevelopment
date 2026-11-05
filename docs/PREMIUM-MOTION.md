# Premium editorial motion implementation

Completed 5 November 2026. Existing nine routes, layouts, content, images, metadata, contact/WhatsApp configuration and image 13 exclusion are preserved. No dependencies were installed, no pages created and no deployment or Git push performed.

## Animation system

- New `EditorialMotion` adds a decorative, semantic-DOM enhancement to existing server-rendered content. One IntersectionObserver per route watches headings, selected introductions, profile/hierarchy items, timeline numbers and dividers. It adds no layout wrappers, split words or duplicate accessible text.
- Items animate once per route visit. Important text stays at least 94% opaque during the enhancement; content starts fully visible without JavaScript. Translations are 2–6px with approximately 0.3–0.8 second durations.
- The global editorial layer uses browser Web Animations effects without writing inline style attributes. Finished effects cancel automatically; route changes and reduced-motion changes cancel active effects. Existing React-owned animations continue using Motion.
- One child-list MutationObserver handles streamed content and new form feedback. It ignores style-attribute animation updates and remembers feedback text to prevent repeated replay of unchanged messages.
- Existing shared `Reveal` remains in use; the earlier route-local re-exports are preserved. The new layer supplies individual heading/detail motion without rewriting the sections or form logic.

## Per-page effects

| Page | Implemented motion |
| --- | --- |
| Home | Original skyline/layout preserved; company name retains its 1.2s fade; gold company subtitle fades gently; supporting headline, existing introductory label and CTA group use short staggered entrances; scroll arrow makes one small gesture; section headings/intros/dividers and timeline details animate on entry |
| About | Editorial headings, one substantial introductory paragraph per section and shared gold dividers reveal on scroll; text-link underline/arrow feedback remains restrained |
| Services | Category/service headings and numbering reveal individually; descriptions retain the existing shared section reveal, with a selected introductory paragraph enhanced per section; all original 20 services and image placements remain |
| Redevelopment | Six-stage headings, numbers and decorative connectors animate on entry; existing optional infographic/caution and mobile comparison remain unchanged |
| Founder | Introduction/section headings and selected biography copy reveal gently; genuine portrait or neutral placeholder figure receives a restrained entrance |
| Our Team | Hierarchy entries and full role profiles use restrained entrances with delays capped at 120ms; existing placeholder notices, names and draft labels are unchanged |
| Land Banking | Large headings, selected explanatory copy and shared dividers receive the common editorial treatment; imagery, non-inventory statements and local enquiry behavior remain |
| Projects | Editorial headings and selected supporting copy reveal alongside existing architectural compositions; no gallery, project achievement or inventory claim added |
| Contact | Heading/intro entrances, softer input focus transitions and brief validation/status appearances; delivery disclosures and form validation/submission logic remain intact |

## Hover and focus

- Navigation and appropriate plain text links receive a quiet underline-colour transition.
- Directional link arrows move only 2–3px on hover or keyboard focus.
- Existing button colours, target sizes and focus outlines remain; no shaking, scaling, glow or bouncing was introduced.
- Inputs transition border, background and shadow styling without changing their dimensions or validation behavior.

## Safeguards

- Existing Motion library plus native browser animation effects; no new animation dependency.
- Transform/opacity effects only; no animated height, width, margins or layout positioning.
- Essential company name and CTA are never gated behind opacity zero.
- Intersection observation stops for each entered item; there is no per-frame scroll handler or continuous text animation. Scroll indicator runs once.
- `prefers-reduced-motion` is checked before attaching the observer and at the shared/Hero animation level. CSS interactions use the same preference.
- Semantic h1/h2/h3 structure, labels, alt text, live regions, keyboard navigation and accessible text remain intact.
- Hero owns its sequence and is excluded from the automatic editorial observer, preventing conflicting animations on those elements.
- No official face/logo, employee, project, backend or delivery claim was invented.

## Verification

- `npm run lint`: passed repository-wide.
- `npx tsc --noEmit`: passed.
- Final `npm run build`: passed; all nine pages and SEO endpoints remain prerendered.
- `node scripts/check-seo-config.mjs`: passed; existing preview/indexing safeguards remain.
- Production HTTP checks: all nine routes returned 200; visible server HTML, noindex preview metadata and image 13 exclusion preserved.
- Headless Chrome: all nine routes at 375, 430, 768, 1024 and 1440 CSS pixels, 45 combinations. No page-level overflow, hidden inspected content, sub-12px inspected paragraphs/captions/labels or undersized inspected header targets.
- Observed a heading animation running after scrolling, then confirmed empty inline styles and no remaining animations on that heading after completion.
- Reduced-motion emulation: preference matched, zero running heading animations and no hidden inspected content.
- JavaScript-disabled browser test: Services heading and all 20 services remained present and visible. Server HTML on all nine routes also passed visibility checks.
- Sequential keyboard/form tests passed: skip link/main focus, consultation review and edit focus, local land enquiry review/non-delivery, desktop flyout opening/focus/Escape. No runtime exceptions observed in those interaction checks.
- Interaction tests were rerun sequentially to avoid focus interference between concurrent Chrome tabs. Screenshots sampled mobile and desktop presentation.
- An initial completion-style diagnostic exposed Motion's final inline write. Cleanup was tightened and the final checks/build were rerun after that correction.

## Exact files changed

- `src/components/ui/EditorialMotion.tsx` — new observer-based editorial enhancement.
- `src/components/ui/SectionHeading.tsx` — decorative divider marker.
- `src/components/sections/Hero.tsx` — coordinated visible-first sequence.
- `src/components/sections/RedevelopmentProcessSection.tsx` — timeline-detail markers.
- `src/app/redevelopment/page.tsx` — timeline-detail markers.
- `src/app/services/page.tsx` — service-number markers.
- `src/app/layout.tsx` — mounts the non-visual enhancement.
- `src/app/globals.css` — restrained hover/focus transitions and divider origins.
- `docs/PREMIUM-MOTION.md` — this implementation and verification record.

## Remaining review

Hydration follow-up: the original global imperative Motion calls could add `style="transform: none"` to text inside a React boundary before that boundary hydrated. Replaced only those global calls with attribute-free browser effects; no hydration-warning suppression or arbitrary startup delay was added. Slowed-CPU Chrome tests at 375px and 1366px verified successful hydration, zero style-attribute writes on About text, no hydration console warnings and no runtime exceptions. Scroll-triggered motion still ran, finished with no style attribute, and reduced motion remained static. Targeted lint, TypeScript and production build passed after the fix.

Chrome checks used emulated CSS widths, not physical phones. Real iOS/Safari, Firefox, touch/onscreen-keyboard behavior, screen-reader combinations and low-powered devices still need manual review. Client approval of the pacing is subjective and remains a preview review item. No Core Web Vitals or frame-rate improvement is claimed.

Original founder/team portraits, publication rights and enquiry delivery remain pending from earlier phases. Forms still only prepare/review details locally. Temporary verification services were stopped after testing; no website was deployed.
