# Phase 18A — Homepage hero and image storytelling

## Missing original skyline

The exact client sunset skyline featuring the Bandra-Worli Sea Link and high-rise buildings is absent. The existing `/images/hero/hero-architecture-fallback.jpg` was visually inspected and shows a residential tower, not the requested skyline. No substitute photograph is used in the opening hero.

Reserved integration path: `public/images/hero/mumbai-skyline-sea-link-sunset.jpg` (public URL `/images/hero/mumbai-skyline-sea-link-sunset.jpg`). This file does not exist yet. Supply the exact original there, or update `clientSkylinePath` in `src/app/page.tsx` if its original filename/format differs. Rebuild production after adding the genuine file.

While missing, the hero uses plain brand navy and makes no broken skyline request. Once supplied, `next/image` uses preload, quality 88 and responsive object positions. Approve final mobile/desktop crops against the actual image; Sea Link visibility cannot be verified before upload.

## Hero

- Approved uppercase company name and requested supporting headline.
- Single restrained Motion entrance that settles at full opacity; no blinking, looping or disappearing branding. Initial text remains readable and CTAs are never animated out.
- Reduced motion uses full opacity and zero translation/delay. Server-rendered text remains visible through `initial={false}`.
- Existing Services and Consultation anchors and four advisory pillar descriptions are preserved. Static scroll indicator targets About.

## Homepage image-content audit

| Section | Treatment | Context |
| --- | --- | --- |
| Hero | Exact skyline pending; no substitute image | Requested client visual absent |
| About / architecture | `/images/projects/about-redevelopment-study.jpg` retained | Residential architecture, explicitly illustrative |
| Redevelopment services | `/images/hero/hero-architecture-fallback.jpg` retained only here on the homepage | Architectural redevelopment study, not a verified company project |
| Legal / title | No unrelated image added | Original legal/process imagery unavailable |
| Land advisory | Removed repeated residential tower backdrop; content retained | Tower image does not establish land inventory |
| Leadership | Existing neutral placeholder retained | Original founder photograph unavailable |

The client and founder image directories contain no original photographs. Additional legal, land, process and leadership pairings remain pending genuine client assets and usage confirmation. No gallery, carousel, external/generated image, inner-page redesign or service-description change is introduced.

## Validation

Targeted ESLint and TypeScript checks passed. The local homepage returned HTTP 200 with the exact uppercase company name, requested supporting headline and working About scroll anchor. Its missing-asset state renders zero hero images and two relevant homepage images, with no skyline request. No production build or browser automation was run. Final image crops and animation appearance still require review after the actual skyline is supplied.
