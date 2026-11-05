# Improvement Phase 3 — inner-page refinement

Completed 5 November 2026. Local source work only. No deployment, package installation, image generation or original image-file changes.

## Exact files changed in this phase

- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/redevelopment/page.tsx`
- `src/app/land-banking/page.tsx`
- `src/app/projects/page.tsx`
- `docs/IMPROVEMENT-PHASE-3.md`

Source hashes captured before editing confirmed that only these five page files changed under `src`. Homepage, Founder, Our Team, Contact, shared navigation/footer, form components and brand styles were untouched. Existing uncommitted changes from earlier work were preserved.

## Before and after

| Page | Previous issue | Result |
| --- | --- | --- |
| About | Values compressed headings and paragraphs into horizontal flex rows from medium widths; repeated a full founder placeholder and biography; consultation image had a dense text overlay | Values use an editorial introduction and readable rows, with heading/body columns only at extra-large widths; image 7 uses the shared illustrative caption without an overlay; compact leadership reference links to the existing founder route; closing actions stack before they become cramped |
| Services | Different layouts per category; images nested inside individual list entries; asymmetrical financial cards and a stretched final legal row | All four categories use consistent 5/7 editorial columns and numbered service rows; images sit beside their category introduction, with consistent framing; no content-dependent cards; all original 20 names and descriptions are byte-for-byte unchanged; short glossary explains FSI, TDR, NOC, 7/12, deemed conveyance and OC |
| Redevelopment | Process infographic competed with HTML stages; large numbered blocks; comparison required horizontal scrolling on phones; image nested inside one advisory entry | Connected six-stage HTML timeline is primary; image 4 remains in an optional native disclosure with a visible caution; paired mobile comparison text replaces horizontal scrolling below the medium breakpoint while the desktop table remains; assessment image 12 sits beside the advisory introduction |
| Land Banking | Hero CTA implied active land inventory; institutional/sovereign/absolute terminology obscured the actual advisory scope; development opportunities lacked a distinct explanation | Four linked areas explain brokerage, strategic holding, title review and development assessment; CTA reads “Explore Land Advisory”; neutral title/feasibility headings; development-assessment section pairs image 23 with practical questions and an explicit no-listings/no-assurance disclosure; enquiry preparation wording and form behavior remain intact |
| Projects | Broad showcase language and uneven image/text relationships did little to connect architectural visuals with advisory decisions | Entrance reference introduces access/planning questions; residential facade supports site/member/delivery considerations; shared-space image supports practical planning discussion; alternating image/text compositions and a compact responsive category index; no gallery, invented project record or case study |

## Images retained

- About: `7.jpeg`, plus the existing architectural hero background. `13.jpeg` stays excluded.
- Services: `10.jpeg`, `18.jpeg`, `17.jpeg`, `8.jpeg`, `14.jpeg`, plus the existing facade hero and redevelopment study image.
- Redevelopment: `6.jpeg`, `19.jpeg`, `12.jpeg`, `4.jpeg`, `20.jpeg`.
- Land Banking: `16.jpeg`, `23.jpeg`; image 23 moved from the partner introduction to development assessment.
- Projects: `22.jpeg`, `21.jpeg`, `24.jpeg`; each supports a specific advisory discussion.

Image 4 was visually reviewed. Its embedded registration/amenity statements are unverified and are not reproduced as company promises. The original is preserved and remains available inside a collapsed supporting-illustration disclosure. The HTML process supplies the accessible explanation.

## Responsive and accessibility work

- Values stay stacked through intermediate widths, avoiding squeezed heading/body pairs.
- Services have consistent text widths, adaptable image columns and simpler reading order.
- All six redevelopment stages remain in sequential list order. Mobile comparison shows both approaches under each consideration; desktop uses the existing semantic table.
- Land index uses one/two/four columns as space permits; due-diligence summaries expand to three columns only at extra-large widths.
- Project image/text sections stack naturally and category actions align without fixed card heights.
- Existing reduced-motion-aware Reveal behavior is preserved. No animation or shared global styling was added. New navigation/disclosure controls have visible keyboard focus.
- Existing colours and Cormorant Garamond / Plus Jakarta Sans configuration are unchanged.

## Verification

1. About + Services: targeted ESLint and `tsc --noEmit --incremental false` passed before proceeding.
2. Redevelopment: targeted ESLint and TypeScript passed before proceeding.
3. Land Banking + Projects: targeted ESLint and TypeScript passed before proceeding.
4. Final targeted lint across all five pages passed. One final production build passed, including TypeScript and all nine routes.
5. Generated HTML verified one H1 per route, unique IDs, working same-page anchors, telephone links, original 20 service headings grouped 5/7/4/4, expected image placements, image 13 exclusion, optional image 4, responsive comparison variants and retained land enquiry non-delivery disclosure.
6. Local production HTTP smoke checks returned 200 for all nine routes. Temporary server stopped afterward.

## Remaining limitations and client decisions

- Browser screenshots, viewport measurements, keyboard/hydration interaction and real-device crop review were not performed. Responsive verification is based on source/build/HTML checks, not visual certification.
- Publication rights and project affiliations remain client approval items. Architectural imagery does not establish Aishwarya project ownership, delivery history, approvals or available inventory.
- Image 4's embedded claims remain unverified; its caution and optional presentation must remain unless the content is validated or the client supplies replacement artwork.
- No live land inventory or verified project case studies were supplied. No returns, timing, title clearance or permissions are assured.
- Enquiry delivery remains unconfigured. Existing forms validate and prepare details locally; the telephone contact remains available. No delivery provider was added.
- Prior founder/team and service-scope approvals remain outstanding as recorded in Phase 1.

Stopped after Improvement Phase 3.
