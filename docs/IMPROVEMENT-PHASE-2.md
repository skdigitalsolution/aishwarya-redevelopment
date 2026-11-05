# Improvement Phase 2 — homepage refinement

Completed 5 November 2026. Local source changes only; no deployment, dependencies or image files added. Existing work from Phase 1 and earlier remains intact.

## Scope and files

Only these seven homepage component files and this report were modified during this phase:

- `src/components/sections/Hero.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/WhyChooseUsSection.tsx`
- `src/components/sections/RedevelopmentProcessSection.tsx`
- `src/components/sections/FounderSection.tsx`
- `src/components/sections/LandBankingSection.tsx`
- `docs/IMPROVEMENT-PHASE-2.md`

These components are imported only by the homepage. No inner page, shared Navbar/Footer, form logic, brand palette or font configuration was changed.

## Before and after

| Section | Previous composition | Refined composition |
| --- | --- | --- |
| Hero | Heavy overlapping scrims; long mobile pillar stack | Lighter right-hand scrim preserves the sunset; separate mobile/desktop focal positions; compact two-column mobile pillars; full-width mobile CTAs; original company name and fade retained |
| About | Offset frame, nested borders, duplicate caption, numbered/icon-led list | Single image caption, full artwork preserved, quieter expertise list and more whitespace; company link now reaches `/about` |
| Services | Featured badge, icon, repeated number, uppercase subtitle and deliverable pills | Heading, unchanged explanation, image and next action; supporting services use readable rows with text links; all-services link reaches `/services` |
| Why Choose | Four large boxed cards plus a separate image banner | Practical committee benefits in open rows, with one meaningful contextual illustration beside the introduction; no superiority-based headline |
| Process | Large standalone image followed by six dense cards | Image and introduction beside an ordered vertical six-step timeline; one number per step, continuous connector and unchanged descriptions |
| Founder | Separate large section heading, framed placeholder and repeated asset notices | Founder name leads the biography beside a smaller neutral monogram card; one pending-portrait notice and quieter focus areas |
| Land | Framed mandate panel, card badges and deliverable tags | Image beside a concise land-advisory introduction, four open service summaries and a direct land-page link; explicit non-inventory note |

## Imagery

- Hero: unchanged `/images/hero/mumbai-skyline.jpg`, preloaded using Next.js Image.
- About: `3.jpeg`, contained square composition to preserve embedded wording.
- Services: `2.jpeg`, advisory discussion reference.
- Why Choose: `1.jpeg`, contained Mumbai development illustration.
- Process: `9.jpeg`, existing building/construction context.
- Land: `5.jpeg`, urban context explicitly labelled as not inventory.
- Founder: neutral monogram only. Authentic `public/images/founder/founder-portrait.jpg` remains pending.
- `13.jpeg` remains excluded; no source image was altered or replaced.

## Responsive and accessibility work

- Existing navy/ivory alternation retained; supporting benefits/founder sections use shorter spacing than the primary services/process/land sections.
- Desktop columns stack on mobile, timeline stays in reading order, hero CTAs stack and secondary mobile pillar details are omitted to reduce density.
- All seven sections have fixed-header anchor offsets; new actions have visible focus outlines and minimum 44–48px targets.
- Refined Motion entrances leave content visible in initial HTML; reduced-motion users receive no entrance movement. No parallax, pulse or repeated animation was introduced.
- Warm ivory text on dark sections and darker gold accents on light sections retain the established palette. This is not a formal contrast certification.

## Verification and limits

- Targeted ESLint passed for all seven components.
- One final production build passed, including TypeScript and all nine routes.
- Generated HTML checks passed: all nine routes retain the telephone link; homepage anchors exist; one H1; expected numbered images only; image 13 excluded; Phase 1 non-delivery notice and neutral founder placeholder retained; no initial opacity-zero styling within the seven refined sections.
- Browser screenshots, viewport geometry, keyboard/hydration testing and real-device crop approval were not performed. Responsive improvements are source-level changes pending visual review.
- Enquiry delivery is still unavailable, genuine founder/team photos remain pending, and image rights/project evidence still require client approval. Existing service descriptions were preserved; the Phase 1 wording recommendations remain pending.
- The shared consultation component retains its existing scroll-reveal behavior. It was left unchanged because it is also used by inner pages; its initial animation remains outside this phase's seven-section refinement scope.

Stopped after Improvement Phase 2.
