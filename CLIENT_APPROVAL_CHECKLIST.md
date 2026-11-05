# Client approval checklist

Prepared for Phase 17 on 5 November 2026 (Asia/Calcutta).

This is an approval record, not confirmation that the items below have been approved. No deployment, domain purchase or DNS change has been performed.

## Brand identity and company details

- [ ] Approve the full public company name: **Aishwarya Redevelopment Advisory Company**. The shorter wordmark and brand references are abbreviations; confirm their use. Do not add a corporate suffix without documentation.
- [ ] Supply/confirm the final official logo, light/dark variants, monogram and favicon. `public/images/brand/logo.svg` and `monogram.svg` exist, but their official status is unverified. The shared header/footer use a temporary typographic wordmark.
- [ ] Confirm the requested public number, **+91 70218 92236**, and consent to publishing it as a contact channel. Phone links use `tel:+917021892236`; no call has been placed as part of this review.
- [ ] Supply the confirmed office street address, public email address and any approved meeting arrangements. Only **Mumbai, Maharashtra, India** is currently published; no office map, coordinates, email or opening hours have been invented.

## Founder and leadership

- [ ] Confirm **Mr. Sachin Murudkar — Founder & Director** as the approved public designation.
- [ ] Resolve the hierarchy's proposed **Founder & Managing Director** title. The site flags this discrepancy and retains Founder & Director in the individual profile.
- [ ] Supply `client-reference/Aishwarya_Redevelopment_Director_Introduction.docx` and approve the biography, strategic pillars and leadership statements against it. That document is absent from this checkout.
- [ ] Supply the original founder photograph at `public/images/founder/founder-portrait.jpg`, with publication permission and approved cropping. No founder photograph is currently available; placeholders are intentional.
- [ ] Confirm any founder signature artwork before supplying/publishing it.

## Team structure and portraits

- [ ] Approve the proposed eight-position order: Founder & Managing Director; Co-Founder / Strategic Advisor; Chief Executive Officer (CEO); Head Operating Officer (COO); Senior Real Estate Consultant; Legal & Compliance Manager; Project Architect / Design Lead; Support Staff / Office Operations.
- [ ] Confirm the wording **Head Operating Officer (COO)** as supplied; do not silently substitute another designation.
- [ ] Confirm the first four leadership roles and final four functional roles as a visual grouping. No reporting lines or employment appointments are inferred.
- [ ] Supply the seven unconfirmed names, approved biographies and individual portraits. Confirm publication consent for every person. All eight photo blocks currently use neutral placeholders because no genuine team portraits are present.
- [ ] Approve each role's draft description, responsibilities and focus areas in `src/app/our-team/team-data.ts`. Draft labels must remain until confirmation.

## Services and source-document reconciliation

- [ ] Supply the original company/service profile and `client-reference/Land_Banking_Website_.pptx`. The `client-reference` directory is absent, so document-to-site agreement cannot currently be verified.
- [ ] Approve the **20 distinct services in four groups** on `/services`: Redevelopment Advisory (5), Legal & Regulatory (7), Financial & Strategic (4), Project Execution & Handover (4).
- [ ] Confirm land portfolio terminology and descriptions: Core Wealth Holdings, Value-Add Portfolios and Fast-Track Liquidation Assets. These currently describe advisory categories, not verified listings or investment products.
- [ ] Approve the advisory process wording and scope. No promised title clearance, return, regulatory approval or delivery outcome should be inferred.

## Images and verified project details

- [ ] Confirm ownership/licensing and permission to publish both existing photographs/visuals: `/images/hero/hero-architecture-fallback.jpg` and `/images/projects/about-redevelopment-study.jpg`.
- [ ] Approve the delivered 24-image client set, now present as `public/images/1.jpeg` through `24.jpeg`. All images are integrated contextually; review [the image mapping and subject notes](docs/CLIENT-IMAGE-INTEGRATION.md), including the third-party signage in `13.jpeg`.
- [ ] Approve the delivered `/images/hero/mumbai-skyline.jpg` and its desktop/mobile crops. It now replaces the homepage hero fallback; the root-level skyline copy is byte-identical. Confirm usage rights and final visual approval.
- [ ] Confirm whether each architectural visual is a render, concept or photograph, and approve its description. The portfolio now pairs `21.jpeg`, `22.jpeg` and `24.jpeg` with advisory content; none is presented as a completed, ongoing or owned Aishwarya project.
- [ ] Supply approved project names, locations, project types, statuses, areas, descriptions, gallery images and the company's verified role before publishing actual project records. `verifiedPortfolioProjects` remains empty.
- [ ] Supply verified land listing details before any inventory is presented as active. The current portfolio CTA links to advisory categories with an explicit no-live-listings note.

## Achievements and claims

- [ ] Approve and substantiate any experience-duration claim before publishing it. The founder page currently uses **Experience & Perspective** rather than an unverified decade claim.
- [ ] Approve and substantiate **500+ CTS plots**, **100+ housing societies**, and **200+ legal investigations**, including scope and timeframe. These figures are not publicly rendered.
- [ ] Approve any qualifications, awards, certifications, testimonials or performance claims before adding them. None should be inferred from role titles or conceptual images.

## Contact channels, privacy and data handling

- [ ] Confirm that **+91 70218 92236** is WhatsApp-enabled, owned/controlled by the company and approved for enquiries. `WHATSAPP_CONTACT.confirmed` remains `false`; the global button is intentionally hidden.
- [ ] Approve the prefilled WhatsApp message in `src/lib/contact.ts`. The encoded URL and number are correct, but no WhatsApp message has been sent or received during validation.
- [ ] Select the enquiry-delivery service and receiving mailbox/CRM. No service is configured and no real delivery has been tested. All public forms explicitly state that details are not sent or saved.
- [ ] Define website privacy-policy requirements, consent language, collection purpose, retention/deletion periods, recipients/processors, access permissions and the process for privacy enquiries before enabling online delivery.
- [ ] Review hosting access logs and external-contact behavior as part of privacy approval; local-only form behavior does not mean the eventual hosting service collects no information.
- [ ] Approve server-side validation, abuse protection and credential handling for a future delivery integration. Test actual receipt and failure handling before displaying delivery success.

## Review and release authorization

- [ ] Record desktop/tablet/mobile visual and keyboard review, including the menu, form errors, reduced motion and image crops. Browser/device interaction approval remains pending.
- [ ] Decide whether placeholders and disabled online channels are acceptable for a restricted client preview.
- [ ] Approve the exact source revision, preview host, access restrictions and preview URL before a deployment is initiated.
- [ ] Record public-launch approval separately; private-preview review does not authorize a domain purchase, production publication or DNS change.

Approval record: reviewer __________  date __________  approved revision __________  outstanding items __________
