# Knowledge Centre source audit — Phase 7

Inspected 6 November 2026. No client source documents were copied into public assets.

Repository: https://github.com/skdigitalsolution/Aishawarya-Redevelopment-Advisory-Company

Verified source commit: `9afa74881508abe162826fe58133cabaf45a834f`.

The reference GitHub Pages route could not be loaded through the available web fetch. The public repository files were read directly instead:

- `src/pages/KnowledgeCentre.jsx`: landing page, search and FAQ behaviour.
- `src/pages/Article.jsx`: article rendering, official-resource attribution and educational qualification.
- `src/data/articles.js`: ten complete guides, summaries, sections, official references and supplied review dates.
- `src/data/faqs.js`: eight complete questions and answers.
- `src/data/projects.js`: empty `verified` and testimonial arrays; no approved case studies available.
- `src/data/advisoryGuides.js`: five additional homepage advisory summaries, not entries in the Knowledge Centre article inventory; not published as new articles.
- `CONTENT_SOURCES.md`: source provenance and absence of approved project records.

## Imported articles and local image mapping

All titles, slugs, summaries, section headings, bodies, reference links and review dates match the source data exactly. FAQs also match exactly. Data was parsed as literals with the installed TypeScript parser; repository code was not executed. The source's shared `/assets/architecture.webp` is replaced at rendering time with existing contextual client images below. Original source image metadata remains in the imported JSON for provenance.

| Slug | Title | Local image |
|---|---|---|
| society-redevelopment | Society Redevelopment | `/images/9.jpeg` |
| self-redevelopment | Self-Redevelopment | `/images/14.jpeg` |
| maharera | MahaRERA | `/images/10.jpeg` |
| fsi-tdr | FSI & TDR | `/images/8.jpeg` |
| dcpr-2034 | DCPR 2034 | `/images/21.jpeg` |
| property-title-verification | Property Title Verification | `/images/18.jpeg` |
| deemed-conveyance | Deemed Conveyance | `/images/10.jpeg` |
| developer-selection | Developer Selection | `/images/11.jpeg` |
| pmc-appointment | PMC Appointment | `/images/14.jpeg` |
| redevelopment-faqs | Redevelopment FAQs | `/images/19.jpeg` |

Supplied review date: 4 November 2026. No article author was supplied; none is invented. This import verifies source fidelity, not the current legal applicability of each explanation. The original qualifications and official references remain visible.

## Project and publication boundaries

No verified company project names, locations, stages, involvement or completions are published. The existing Projects introduction and advisory copy are retained. Images 21, 22 and 24 are architectural concepts/references, not evidence of company projects. Original files are preserved. Image 13 remains excluded.

The site uses Next.js static article paths and local assets, without Vite routing/configuration or runtime source fetches. Knowledge Centre links use normal, deployment-subpath-aware document navigation so the static host does not need runtime route-payload handling. All ten article routes are registered for static generation; landing/article sitemap integration respects the existing indexing configuration.

The Navbar remains unchanged. Adding a Knowledge Centre navigation entry is a separate follow-up. Project records and publication permissions remain necessary before publishing real case studies. No additional imagery was downloaded or generated.
