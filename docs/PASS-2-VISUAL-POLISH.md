# Phase 16 — Pass 2 visual polish

## Refinements

- Fluid hero typography across all nine routes, with balanced headings, more consistent leading and a distinct founder name scale.
- Shared section headings use quieter weights, consistent eyebrow sizing, more breathing room and a single gold rule in place of ornamental diamond dividers.
- Navbar typography is more balanced, the wordmark has refined spacing, and the header and flyout use restrained surfaces and shadows.
- Homepage architectural imagery is more visible beside the hero copy. Image enlargement is subtle and honors reduced motion; existing images and intentional gallery crops are preserved.
- Service and consultation panels have lighter visual weight. Decorative dotted backgrounds are visually suppressed, with fewer heavy shadows and boxed highlights.
- Founder placeholders use a more restrained typographic treatment. Portrait frames remain neutral and explicitly pending; no replacement person imagery was introduced.
- Portfolio details are offset on larger screens, with improved caption spacing, consistent frames and coordinated hover/focus treatments.
- Team profiles have clearer name/designation hierarchy, more consistent portrait framing and lighter focus-area lists.
- Footer headings, link rhythm, spacing and hover/focus presentation are consistent with the rest of the site.

## Validation

- Targeted ESLint and TypeScript checks passed.
- The existing local development server returned HTTP 200 for all nine routes. Each response includes the intended fluid hero heading class.
- Served CSS includes the new heading/frame treatments, balanced wrapping and reduced-motion rules.
- AST comparisons of 17 edited page/component files, excluding presentation attributes, found no changes to content or logic. Remaining shared-component changes are presentation only, including the decorative divider markup.
- No routes, image assets, form behavior, contact configuration, business data, brand colors or font families were changed. No dependencies were added.
- No browser screenshot or physical-device review was performed. Client review is still needed for visual approval, and the previously identified missing portrait/source assets remain pending.

## Files modified

- `src/app/globals.css`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/brand/BrandWordmark.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/WhyChooseUsSection.tsx`
- `src/components/sections/FounderSection.tsx`
- `src/components/sections/ConsultationCTA.tsx`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/redevelopment/page.tsx`
- `src/app/land-banking/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/founder/page.tsx`
- `src/app/our-team/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/projects/ArchitecturalGallery.tsx`
- `src/app/our-team/TeamProfile.tsx`
- `docs/PASS-2-VISUAL-POLISH.md`
