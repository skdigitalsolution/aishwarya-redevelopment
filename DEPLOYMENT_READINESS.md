# Deployment readiness

Phase 17 review — 5 November 2026 (Asia/Calcutta).

**Scope:** prepare the existing site for a restricted client preview. No deployment, domain purchase, DNS change, dependency installation or application redesign was performed. Only this document and `CLIENT_APPROVAL_CHECKLIST.md` are added in this phase.

**Decision:** conditional client-preview candidate, not a completed public-launch release. The disabled delivery/WhatsApp channels and missing client material must be understood and accepted before preview publication. No hosted preview URL has been created.

## 1. Passed checks

The single final lint and production-build runs passed. Next.js TypeScript validation passed, and all nine required routes prerendered successfully. A temporary local production server was used for HTTP checks and then stopped; this was not a hosted deployment.

| Route | Production HTTP | H1 / title / description | Internal links / controls / images |
| --- | --- | --- | --- |
| `/` | 200 | Passed | Passed rendered checks |
| `/about` | 200 | Passed | Passed rendered checks |
| `/services` | 200 | Passed | Passed rendered checks |
| `/redevelopment` | 200 | Passed | Passed rendered checks |
| `/land-banking` | 200 | Passed | Passed rendered checks |
| `/projects` | 200 | Passed | Passed rendered checks |
| `/founder` | 200 | Passed | Passed rendered checks |
| `/our-team` | 200 | Passed | Passed rendered checks |
| `/contact` | 200 | Passed | Passed rendered checks |

Across the generated pages: one H1 per page, nonempty titles and descriptions, no duplicate IDs, no missing rendered internal destinations/anchors, explicit labels on all rendered form controls and alt attributes on all 14 rendered images. All 23 phone links use the requested number. Both original JPGs and their optimized requests (project quality 90 and hero quality 88) returned HTTP 200 with `image/jpeg`.

### Reviewed configuration and source

- Installed framework: Next.js 16.4.4, React 19.3.0, App Router. Brand fonts remain Cormorant Garamond and Plus Jakarta Sans.
- The required nine route files exist: `/`, `/about`, `/services`, `/redevelopment`, `/land-banking`, `/projects`, `/founder`, `/our-team`, `/contact`.
- Shared navigation includes dedicated route destinations, with the founder linked from the footer and team page. Mobile source includes open/close controls, Escape handling, a focus trap, focus restoration, body-scroll locking and closing at the 1280px desktop breakpoint.
- The requested company name, founder name/public designation and phone match the brief. The short wordmark is a brand abbreviation; the proposed hierarchy designation discrepancy is explicitly labelled.
- `/services` contains 20 unique service entries: 5 redevelopment, 7 legal/regulatory, 4 financial/strategic, 4 execution/handover.
- Eight team roles are present in the supplied order, grouped 4 leadership + 4 functional. Seven names are unconfirmed, all genuine portraits are absent, and role responsibilities are explicitly draft.
- The WhatsApp URL uses `https://wa.me/917021892236` and the exact requested URL-encoded message; decoding reproduces that message. The button remains hidden because number capability is unconfirmed. It uses a new tab with `noopener noreferrer` when enabled.
- Contact-form handler checks passed for valid local review, blank name, invalid phone, invalid optional email, missing enquiry type and short message. These were isolated handler checks with form-state stubs, not browser automation or delivery tests.
- Phone destinations, local image paths, rendered anchors, labels and metadata passed checks against the final production output. No real phone call or WhatsApp message was initiated by this review.

### Contact status

| Surface | Current behavior | Delivery status |
| --- | --- | --- |
| `/contact` | Validates and prepares a local enquiry summary; offers a call link | Pending backend; not delivered or saved |
| `/land-banking` | Validates and prepares a local portfolio summary | Pending backend; not delivered or saved |
| Shared consultation component | Validates details, states they were not sent, offers call/edit actions | Pending backend; no callback promise |
| Phone buttons | `tel:+917021892236` | Link syntax can be checked; call handling untested |
| WhatsApp button | Globally mounted, hidden pending confirmation | Number/message URL verified; account capability and receipt untested |

## 2. Issues requiring fixes or verification

- **Online enquiry delivery is incomplete.** There is no API route, email/storage service, configured delivery adapter or real receipt test. Do not advertise the forms as delivering enquiries. `ContactForm` exposes the `DeliverContactEnquiry` adapter contract; the other local-review forms also need an explicit integration decision.
- **Browser/device verification is outstanding.** Responsive breakpoints, grid shrinking, wrapping, image sizes, overflow-contained comparison table, focus styles and reduced-motion rules are present. Actual menu clicks, focus traversal, viewport geometry, hydration, zoom and full contrast compliance are not certified by source/HTML review. Before sharing, manually test at 320/375px, 768px, 1024px, 1280px and a wide desktop width, including keyboard-only navigation.
- **Original materials are missing.** The `client-reference` directory, original founder photograph and 24-image client set are absent. Placeholder handling prevents missing portraits from becoming broken rendered images; it does not complete the content.
- **Asset provenance is unverified.** Only two JPGs are available: `/images/hero/hero-architecture-fallback.jpg` and `/images/projects/about-redevelopment-study.jpg`. A filename is not proof of client ownership. The hero README explicitly marks the official image as pending.
- **Unused asset constants name future files.** `logo-light.svg`, `logo-dark.svg`, `symbol.svg` and the founder signature are not supplied. These are not evidence of broken rendered requests; verify them before adding references.
- **Source packaging is pending.** The working tree contains tracked modifications and untracked route/component/document files. A deployment from the existing committed revision could omit completed pages. Prepare and review a complete source commit before connecting a preview build; no commit or push was performed here.
- **Preview/production SEO configuration is unresolved.** Page metadata exists, but a final domain, canonical/social URLs, approved favicon and public indexing strategy are not confirmed. Restrict preview access and prevent preview indexing at the hosting layer. Do not apply preview-only settings to a later public release unintentionally.

## 3. Client approval blockers

Use [CLIENT_APPROVAL_CHECKLIST.md](CLIENT_APPROVAL_CHECKLIST.md) to record approval of:

- Official logo and image publication rights; original founder/team portraits and seven team names.
- Founder & Director versus proposed Founder & Managing Director; all draft responsibilities and organizational groupings.
- Source DOCX/PPTX reconciliation, exact service descriptions and land banking terminology.
- Verified project records and land listings. The current gallery is one architectural study with detail crops; verified project data is empty.
- Office address and public email; WhatsApp number capability and ownership.
- Experience duration and the unpublished 500+/100+/200+ achievement figures. Do not add numerical claims without approval and evidence.
- Privacy policy, data handling, delivery recipient/provider and acceptance of a preview with disabled delivery channels.

Known differences from the supplied brief are documented, not silently filled: the unverified decade heading is withheld, achievement counts remain internal, the hierarchy/public founder title difference is flagged, actual project records are not fabricated, and missing portraits use neutral placeholders. Document-to-site discrepancies beyond these cannot be established until the original documents are supplied.

## 4. Required deployment configuration

| Item | Required setting / action |
| --- | --- |
| Hosting mode | Full Next.js Node.js hosting, or an adapter explicitly supporting installed Next.js 16.4.4, Cache Components and Partial Prefetching. Provider compatibility must be verified before selection. |
| Static hosting | Do not upload `.next` as a static website or assume a static export. Current configuration has no `output: "export"` and uses the default Next image optimizer. |
| Runtime | Installed Next.js declares Node.js `>=20.9.0`. Select a provider-supported compatible version and test on that exact version. This workstation uses Node v26.13.0 and npm 12.2.1; provider runtime availability has not been verified. |
| Project root | Repository root containing `package.json`, `package-lock.json` and `next.config.ts`. |
| Install | `npm ci` using the committed lockfile on the deployment builder. No reinstall was needed for this review. |
| Build | `npm run build`; retain the current config and dependencies. |
| Start | `npm run start` for generic Node hosting. Use the host-assigned port through its `PORT` environment variable where required. Managed Next.js hosting controls startup itself. |
| Artifacts | Preserve `.next`, runtime dependencies and `public` for a generic Node deployment. Use the host's Next.js output handling on managed hosting; no standalone artifact has been configured. |
| Assets | Include both existing JPGs and brand assets. Image optimizer qualities are `[75, 85, 88, 90]`. Verify original and `/_next/image` requests on the preview host. |
| Build network | Google font fetching through `next/font/google` may require build-time outbound access if fonts are not already cached. Ensure the builder can obtain the existing fonts. |
| Environment variables now | No application-specific environment variables are referenced in the current source/config; no `.env*` files were found. No API keys or recipient email are needed for the current non-delivering preview. Host-supplied runtime settings are separate. |
| Future form credentials | Select a delivery provider first, then define required server-only credentials/recipient configuration. No variable names or secrets are invented here. Never place provider keys in `NEXT_PUBLIC_*`, client bundles or source control. |
| Preview protection | Configure host-level access restriction and preview-only noindex behavior before sharing the URL. Confirm availability and cost with the chosen provider; no paid features have been purchased. |

Deployment guidance was checked against the installed Next.js deployment guide at `node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`; no provider dashboard or remote deployment was accessed.

## 5. Exact next steps for a preview deployment

1. Review the checklist with the client. Explicitly record whether the restricted preview may include the missing portraits, draft team details, illustrative gallery and disabled online channels.
2. Complete desktop/mobile/keyboard browser checks locally. Confirm menu open/close, Escape, focus trapping/return, dropdown links, form invalid/valid states, reduced motion and absence of horizontal page overflow. Record any fixes and rerun relevant validation if code changes.
3. Include all intended route, component, asset, config and lockfile changes in a reviewed source commit. Exclude secrets, `node_modules`, `.next` and private client-reference material. Record the approved revision. No commit or push is performed by this phase.
4. Select the preview host and compatible Node version. Confirm framework feature support and preview access protection. Configure root, install and build settings from section 4. For generic Node hosting, configure the start command and assigned port as well.
5. Keep form delivery unconfigured and WhatsApp confirmation false unless their separate approvals and real integration tests have been completed. Do not add invented recipient addresses or secrets to make the preview appear functional.
6. Obtain explicit authorization for the exact preview revision and destination. **The deployment action is a later, manual step; stop before initiating it during Phase 17.** No domain or DNS action is needed for a provider preview URL.
7. After an authorized preview build, inspect provider logs and test every route below over HTTPS, image optimization, console/hydration behavior, navigation, keyboard access and mobile layouts on the hosted URL. Verify access protection/noindex behavior before client sharing.
8. Share the restricted URL with the approval checklist and known limitations only when approved. Record feedback and obtain separate public-launch authorization. Enable enquiry success messaging only after a real submission is received by the approved destination and failure handling is tested.

Route acceptance list: `/`, `/about`, `/services`, `/redevelopment`, `/land-banking`, `/projects`, `/founder`, `/our-team`, `/contact`.

## Final validation record

- `npm run lint`: passed, one final run.
- `npm run build`: passed, one production build; Next.js TypeScript validation passed and all nine routes were prerendered.
- Final production route/image/HTML checks: passed as detailed in section 1. No critical build-blocking application fixes were required.
- Browser/mobile interactive acceptance: pending; source-level menu behavior was reviewed, not represented as a completed browser test.
- Actual enquiry delivery: pending backend and real receiving-destination test. No delivery-success claim is made.
- Files added: `CLIENT_APPROVAL_CHECKLIST.md`, `DEPLOYMENT_READINESS.md`. No application source, assets, dependencies or deployment settings were changed in Phase 17.
- Deployment performed: **No**.
