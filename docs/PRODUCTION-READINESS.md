# Production readiness — Improvement Phase 5

Reviewed 5 November 2026. Ready for a controlled client preview with the limitations below. This is not launch approval, a Core Web Vitals certification or confirmation of enquiry delivery. No deployment, DNS change, paid connection or dependency installation was performed.

## 1. Completed improvements

### SEO and structured data

- All nine pages have unique, accurate descriptions and titles using **Aishwarya Redevelopment Advisory Company**. Child pages share a layout title template; the homepage has an explicit absolute title because Next.js does not apply a layout template to the page in the same segment.
- Metadata is centralized through `pageMetadata`, with consistent Open Graph type, locale, site name, titles/descriptions and Twitter/X summary cards.
- Canonical and Open Graph URLs use only the configured public HTTPS origin. Missing/invalid/local origins produce no public canonical, OG URL or Organization URL. Localhost is only an internal metadata-base fallback.
- App Router `sitemap.ts` and `robots.ts` implement all nine approved public routes for an explicitly enabled production launch. Preview/default mode returns an empty sitemap and disallows crawling; it does not advertise localhost or a provisional domain.
- Preview/default HTML and HTTP responses include noindex/nofollow. Indexing requires a valid origin and two explicit launch controls; known Vercel/Netlify preview contexts remain blocked.
- Organization JSON-LD includes only the supplied company name, requested phone and city/region/country. Approved origin/organization ID are included only when configured. No logo, street address, email, social profile, registration, rating, review or FAQ data was invented. JSON is escaped for safe script embedding.
- Removed unsupported “Distinguished” / “premier” language from inherited root metadata. This was a metadata accuracy correction; approved page-body content and all service descriptions were not changed.

### Performance and accessibility preservation

- Removed unused section-scroll tracking from Navbar: navigation uses route paths, so those repeated section lookups were unnecessary. Menu, focus, active-route and contact behavior remain.
- Retained Phase 4's shared reveal implementation, visible-first content, reduced-motion support, keyboard skip navigation, modal focus/scroll protections and readable disclosures.
- Reviewed client/server boundaries. Interactive navigation, forms and Motion sections remain client components; static page metadata, SEO routes, configuration and JSON-LD remain server-side. No broad component rewrite was justified.
- Audited existing image usage: responsive sizes, reserved aspect-ratio frames, protected content/focal points, optimized Next.js Image delivery and below-fold lazy loading remain. Only the homepage skyline is preloaded; no blanket image priority was added. Original files and contextual placements remain intact; image 13 remains withheld.
- No measured LCP, INP or CLS improvement is claimed. Performance validation here checks implementation and delivery, not field metrics.

### Security and contact

- Public environment configuration contains only the site origin. Indexing/deployment controls are server-side; future delivery credentials must also remain server-only.
- Added `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin` without adding a speculative CSP that could break existing scripts or animations.
- Contact, consultation and land enquiry forms remain local preparation/review tools with visible non-delivery disclosures and telephone alternatives. No backend, provider or secure delivery route is configured.

## 2. Verification results

| Check | Result |
| --- | --- |
| `node scripts/check-seo-config.mjs` | Passed: default/preview guards, invalid origins, explicit production configuration, all nine sitemap URLs, canonical/social URL consistency and verified-only JSON-LD fields |
| `npm run lint` | Passed, repository-wide |
| `npx tsc --noEmit` | Passed |
| Final `npm run build` | Passed; all nine pages plus robots.txt and sitemap.xml prerendered |
| Generated HTML | Nine unique titles/descriptions; company name appears once in each title; Open Graph/Twitter metadata present; no local canonicals/OG URLs; preview noindex; valid Organization JSON-LD |
| HTML navigation/accessibility | One H1 per page; unique IDs; internal route and fragment targets resolve; original image files exist; image 13 not rendered |
| Local production HTTP | All nine pages, robots.txt and sitemap.xml returned 200 with preview and security headers |
| Referenced asset HTTP | 15 unique scripts/styles/fonts/icons returned 200 |
| Next image optimization | Skyline, image 7 and image 14 requests returned 200 with image content types |
| Browser bundle review | Server-only indexing control names absent from generated browser chunks |

On Windows the npm/npx checks used the equivalent `npm.cmd` / `npx.cmd` entry points because PowerShell script execution is restricted.

An initial rendered-title check identified the homepage template exception. It was corrected, regression coverage was added and the final checks/build were rerun after that code correction.

Current-phase verification was automated configuration, HTML, HTTP and source inspection. No fresh browser interaction, device, screen-reader or Lighthouse audit was run in Phase 5. The Phase 4 Chrome viewport/keyboard/form/reduced-motion results remain documented separately; they are not represented as new Phase 5 tests. HTTP success does not certify absence of client-side runtime errors.

## 3. Pending client approvals

- Confirm the production domain and public HTTPS origin; none has been published or invented.
- Approve official logo/favicon artwork and a branded social-preview image with publication permission. Text-only social cards are used for now; no unofficial logo or unapproved photograph was promoted into social artwork.
- Confirm founder portrait, biography/designation, team appointments and publication consent. Existing neutral placeholders and pending labels remain.
- Confirm client-image rights and affiliations, especially Integral Spaces Group branding in image 13. Its original remains on disk but it is excluded from rendered sections.
- Verify project identities, company involvement and case-study permissions before publishing project achievements. Existing imagery remains illustrative; no live land inventory or verified case studies were supplied.
- Reconcile service-scope and other client approvals recorded in the existing checklist and Phase 1 report. No service descriptions were changed in this phase.

## 4. Contact/backend blockers

The three enquiry interfaces do **not** deliver or persist enquiries. A production delivery workflow requires an approved provider, recipient mailbox, verified sender/domain, server-only credentials, secure server action/API route, server-side validation and abuse controls, and actual receipt/failure testing across all three forms.

See `src/app/contact/INTEGRATION.md`. Do not change button/status wording to imply delivery before integration is verified. A call-first launch with preparation-only forms needs explicit client acceptance of that limitation. WhatsApp remains disabled pending confirmation of the channel.

## 5. Deployment environment requirements

Copy `.env.example` only for non-secret configuration; it is deliberately safe by default. Other `.env*` files remain ignored by Git.

| Variable | Local / preview | Approved production launch |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Empty, or the approved production origin once confirmed; never a preview hostname or secret | The single approved `https://` origin, without a path, query, fragment, port or credentials |
| `SITE_DEPLOYMENT_ENV` | `preview` | `production` |
| `SITE_INDEXING_ENABLED` | `false` | `true` only after launch approval |
| `NODE_ENV` | Managed by Next.js | `production`, managed by build/start tooling |

- Known non-production `VERCEL_ENV` or Netlify `CONTEXT` values override launch flags and prevent indexing. Other hosts must keep the preview controls explicitly disabled; do not inherit production flags into preview jobs.
- Invalid origins fail closed. Requesting launch indexing with an invalid/missing origin fails the build/configuration check rather than creating a bad sitemap.
- These are build-time settings for prerendered HTML and metadata routes. Rebuild with the intended environment; do not flip runtime variables and assume existing generated metadata changes. Keep build and runtime settings consistent.
- The local fallback is `http://localhost:3000` only for metadata resolution. It is never advertised as the production canonical, Organization URL or sitemap origin.
- Use a hosting setup that supports Next.js App Router, the existing cache configuration and the image optimization endpoint. Preserve public images and font assets. Use the project's supported Node.js/package versions and install from the lockfile.
- No secret may use a `NEXT_PUBLIC_` prefix: those values are public by design. This phase introduces no credentials or delivery variables.
- Noindex/robots directives are crawler controls, not access control. Use host-provided authentication/access restrictions when a client preview must remain private.

## 6. Remaining manual tests

- Repeat browser navigation, keyboard focus, mobile menu, form review and reduced-motion checks on the actual preview URL.
- Test iOS/Safari scroll locking, input zoom, touch gestures and onscreen-keyboard behavior; test Firefox, screen readers, forced colours and 200%/400% zoom.
- Review all final device crops and contrast over photographic/gradient backgrounds. Source/HTML checks are not full accessibility certification.
- Inspect final social-link previews after approved artwork exists. Validate the rendered structured data after the approved public URL is configured.
- Measure production-like performance with browser tools and, after launch, real traffic. No dependency vulnerability audit, penetration test or field Core Web Vitals assessment was performed here.
- Restart the existing development server if it retains the hydration issue observed in Phase 4; that developer-owned session was not stopped or repaired as part of Phase 5.

## 7. Safe deployment checklist

- [ ] Obtain the domain/origin and publication approvals above. Resolve contact expectations or explicitly accept the call-first limitation.
- [ ] Configure preview-only environment values and host access restrictions. Never connect a paid delivery service or publish credentials without approval.
- [ ] Run `node scripts/check-seo-config.mjs`, `npm run lint`, `npx tsc --noEmit` and a production build with preview settings.
- [ ] Inspect the preview's HTML and response headers: noindex/nofollow, no localhost canonical/OG URL, blocked robots and empty sitemap.
- [ ] Verify all nine routes, assets, telephone links, local form disclosures, keyboard/mobile behavior and image 13 exclusion on the preview host.
- [ ] Before an explicitly approved launch, set the confirmed origin and both production controls, then rebuild. Confirm preview jobs still use preview settings.
- [ ] Inspect the launch artifact: nine canonical URLs, nine matching sitemap entries, robots allow/sitemap URL, index/follow HTML and no unintended noindex response header. The current checkout's default build remains non-indexable.
- [ ] Recheck JSON-LD, social metadata and HTTPS behavior on the approved host. Arrange rollback and monitoring using the chosen host's workflow.
- [ ] Deploy/change DNS only under a separately authorized launch action. Neither was performed in this phase.

## Exact files changed in Phase 5

- `.gitignore`
- `.env.example`
- `next.config.ts`
- `src/lib/site-config.ts`
- `src/lib/seo.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/redevelopment/page.tsx`
- `src/app/land-banking/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/founder/page.tsx`
- `src/app/our-team/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/components/layout/Navbar.tsx`
- `scripts/check-seo-config.mjs`
- `docs/PRODUCTION-READINESS.md`

Page changes are limited to metadata imports/exports; layouts, service content and images remain as approved. Root layout adds only metadata and non-visual JSON-LD. Stopped after Improvement Phase 5.
