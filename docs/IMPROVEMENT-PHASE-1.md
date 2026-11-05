# Improvement Phase 1 — trust and conversion

Reviewed 5 November 2026. Existing uncommitted work was retained. No deployment or package installation.

## Confirmed configuration and fixes

- No delivery backend, API route, server action, email-provider dependency or local environment configuration was found. `ContactForm` has an unused future adapter contract; no caller provides delivery. The consultation and portfolio forms only use local state. All three remain preparation tools, with validation and explicit non-delivery messages.
- Added immediately visible telephone alternatives inside contact and portfolio forms. Shared consultation already exposes the same telephone link before and after review.
- Changed navigation and hero scheduling language to “Discuss a Consultation”; changed the portfolio heading from “Submit” to “Prepare”. No booking or submission is implied.
- Consultation review now displays the entered details instead of only a readiness message.
- Retained Mr. Sachin Murudkar — Founder & Director. `public/images/founder` contains only README.md. Expected authentic portrait: `public/images/founder/founder-portrait.jpg`. Neutral placeholders remain; founder/team pages already use Next.js Image conditionally when that approved asset exists. The homepage retains its neutral monogram.
- Team names, appointments and draft responsibilities remain visibly pending. No substitute portraits were added.
- Visually confirmed prominent Integral Spaces Group branding in `public/images/13.jpeg`. Existing `withheld: true` and the shared rendering guard remain in place. About-page values already span the available grid without this image. No replacement image is approved; the original is preserved.
- Replaced unsupported founder expertise/superlative language with advisory-focus wording; softened absolute founder commitment headings and results language. Replaced conflict-free, exhaustive-audit and protected-equity claims in the homepage differentiators with scope-based review wording.
- Project descriptions already distinguish illustrative architectural references from verified projects; no company project achievements or testimonials were added.

## Remaining client approvals and wording recommendations

- Approve founder biography, authentic portrait/crop and publication consent; resolve the proposed Managing Director title. Public designation remains Founder & Director.
- Confirm all other team identities, credentials, appointments and responsibilities before removing pending labels.
- Confirm image publication rights and any claimed project involvement. Image 13 must stay excluded until both affiliation and publication permission are established.
- Review retained service descriptions against original company documents. For example, “Independent Fiduciary Counsel” should become “Advisory support for housing societies and landowners” unless the fiduciary scope is documented; “Auditing prospective developers' balance sheets” should become “Reviewing developer financial information with qualified professional input” unless audit capability and responsibility are confirmed; “Independent technical audits” should become “Coordination of technical review by appointed professionals” unless the technical appointment is documented. These are recommendations pending client confirmation, not verified credentials.
- Verify project identity, location, scope, status and permission before publishing a factual case study or performance claim. No numerical achievements were verified in this phase.
- Confirm WhatsApp capability before enabling its existing disabled integration.

## Pending backend

See `src/app/contact/INTEGRATION.md` for the concrete setup sequence: approved provider, recipient and sender/domain; server-only credentials; secure server action/API route; validation and abuse controls; integration across all three forms; actual inbox and failure testing. Forms currently neither send nor persist enquiries. No provider was installed.

## Verification

- Targeted ESLint passed for the changed UI plus inspected contact, team and image components/data.
- Production build and TypeScript passed; all nine requested routes prerendered.
- Generated HTML checks passed on all nine routes: expected telephone link present, no image 13 rendered and no remaining “Schedule a Consultation” text.
- Existing responsive classes, brand colours, fonts and route structure retained. No browser/device visual certification or actual telephone call was performed.
