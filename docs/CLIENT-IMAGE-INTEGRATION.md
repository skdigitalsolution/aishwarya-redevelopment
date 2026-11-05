# Client image integration

All 24 numbered client images were visually reviewed before placement. Original files were not renamed, overwritten or cropped on disk. Responsive presentation uses `next/image` and the existing brand system.

## Actual page usage

| Page | Files | Content context |
| --- | --- | --- |
| `/` | `3.jpeg`, `2.jpeg`, `1.jpeg`, `9.jpeg`, `5.jpeg` | Informed society decisions; redevelopment advisory discussion; Mumbai development vision; aging housing beside the redevelopment process; urban development context beside land advisory |
| `/about` | `7.jpeg` | Consultation approach; values use the available width without image 13 |
| `/services` | `10.jpeg`, `18.jpeg`, `17.jpeg`, `8.jpeg`, `14.jpeg` | Document review; title documentation; funding/financial assessment; architectural feasibility; execution planning |
| `/redevelopment` | `6.jpeg`, `19.jpeg`, `12.jpeg`, `4.jpeg`, `20.jpeg` | Committee consultation; society awareness; residents and technical assessment; six-stage journey; stakeholder/member interests |
| `/land-banking` | `16.jpeg`, `23.jpeg` | Property planning; partner/developer strategy. Neither is land inventory. |
| `/projects` | `22.jpeg`, `21.jpeg`, `24.jpeg` | Arrival concept in the introduction; residential form beside the advisory perspective; shared amenities beside planning/feasibility content. No supplied-image gallery is rendered. |
| `/contact` | `15.jpeg`, `11.jpeg` | Consultation introduction; developer/client discussion beside enquiry information |
| `/founder`, `/our-team` | No numbered photos used as people profiles | Genuine founder/team portraits remain absent; placeholders, hierarchy and responsibilities are preserved. |

Image 13 is withheld from rendering. Full original paths remain `public/images/1.jpeg` through `public/images/24.jpeg`; public URLs omit `public`. The validation notes below describe the earlier integration pass; current Phase 1 verification is recorded separately.

## Homepage skyline

The hero renders `/images/hero/mumbai-skyline.jpg`, which was visually inspected and contains the requested waterfront skyline, bridge pylons and sunset. `public/images/mumbai-skyline.jpg` is byte-identical to the hero copy. The hero image has no embedded title text, so existing branding and CTAs are retained without duplicate image lettering.

The existing full-bleed image layer, translucent navy overlays, name/headline entrance animations and reduced-motion behavior are retained. Mobile object positioning favors the bridge on the right; the desktop crop remains centered. The homepage skyline alone is preloaded; other image references are lazy-loaded. Actual viewport appearance and bridge visibility still require a client browser/device crop review; no screenshot/browser automation was performed.

## Subject corrections and safeguards

- `8.jpeg` depicts architectural drawings and a model, so it is beside architectural feasibility rather than being labelled a legal-document image.
- `10.jpeg` depicts document review with scales of justice, so it is beside legal/regulatory content.
- `1.jpeg`, `3.jpeg` and `4.jpeg` contain embedded text. They use square contain framing to preserve the complete source rather than cropping the lettering or placing headings over it.
- `13.jpeg` includes prominent Integral Spaces Group signage. It is excluded from public sections until affiliation and publication rights are confirmed. The original file is preserved; no replacement has been approved.
- Meeting visuals are contextual references, never employee portraits. Architectural visuals are unverified references/concepts, never completed, ongoing or owned Aishwarya projects. Verified project records remain empty.
- The 20 service names and descriptions are unchanged. No enquiry delivery, navigation, company details, team data or founder biography was altered.

## Validation

- Full ESLint passed cleanly after correcting a directive-order warning.
- TypeScript checks and one production build passed; all nine routes prerendered and returned HTTP 200 from a temporary local production server.
- Generated HTML confirmed exactly 24 numbered-image instances and 24 unique numbered files, with no missing numbered images or duplicate usage.
- All rendered image paths exist and images have nonempty alt text. Every numbered image is lazy-loaded. The skyline path is present inside the homepage hero.
- All 25 optimized image requests (24 numbered files plus skyline) returned HTTP 200.
- No packages installed, external browsing, hosted deployment or full browser automation. Inspection contact sheets were generated only in the ignored `.next/image-audit` cache; original images are intact.

## Files changed

- `src/lib/client-images.ts` — reviewed descriptions and captions.
- `src/components/ui/ClientImage.tsx` — reusable contextual figure, responsive sizing and embedded-text framing.
- `src/components/sections/Hero.tsx` — bridge-focused mobile/tablet crop.
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/WhyChooseUsSection.tsx`
- `src/components/sections/RedevelopmentProcessSection.tsx`
- `src/components/sections/LandBankingSection.tsx`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/redevelopment/page.tsx`
- `src/app/land-banking/page.tsx`
- `src/app/projects/page.tsx` — contextual presentation replaces the gallery import; legacy gallery utilities are not rendered.
- `src/app/contact/page.tsx`
- `src/app/founder/page.tsx` — removed portrait preload only; content/placeholder unchanged.
- `CLIENT_APPROVAL_CHECKLIST.md` — image receipt status updated without marking approvals complete.
- `DEPLOYMENT_READINESS.md` — linked current image inventory.
- `docs/CLIENT-IMAGE-INTEGRATION.md`
