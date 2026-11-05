/** Visual descriptions verified against the supplied files, not project credentials. */
export const clientImages = {
  1: { alt: "Illustrated Mumbai waterfront skyline and bridge at sunset with an embedded development-partner headline", caption: "Mumbai development vision · Client-supplied illustration", contain: true },
  2: { alt: "Four advisers discussing architectural plans around a table overlooking the city", caption: "Society advisory discussion · Illustrative reference", contain: true },
  3: { alt: "Residential development concept beside an interior panel reading Your society, your future, your informed choice", caption: "Informed society decisions · Architectural concept", contain: true },
  4: { alt: "Client-supplied infographic showing aging society buildings, demolition, construction and new residential towers", caption: "Redevelopment journey · Illustrative process reference", contain: true },
  5: { alt: "Residential tower overlooking a waterfront cityscape at sunset", caption: "Urban development context · Not land inventory" },
  6: { alt: "Housing society committee reviewing large architectural drawings around a meeting table", caption: "Committee consultation · Illustrative reference" },
  7: { alt: "Four participants discussing documents and a small building model in a consultation room", caption: "A consultation-led approach · Illustrative reference", contain: true },
  8: { alt: "Three professionals studying architectural drawings beside a residential scale model", caption: "Architectural planning · Illustrative reference" },
  9: { alt: "Weathered residential apartment building alongside a high-rise construction site", caption: "Aging housing and development context · Visual reference", contain: true },
  10: { alt: "Professional reviewing a document at a desk with scales of justice and a city view", caption: "Document review · Illustrative reference" },
  11: { alt: "Participants comparing residential models, documents and charts during a professional meeting", caption: "Developer and client discussions · Illustrative reference" },
  12: { alt: "Engineers in safety helmets and residents examining the exterior of an aging building", caption: "Residents and technical assessment · Visual reference", contain: true },
  // Original retained; public rendering is withheld until affiliation and usage are confirmed.
  13: { alt: "Meeting participants reviewing building models and a presentation in an office with Integral Spaces signage", caption: "Stakeholder meeting reference · Participants and affiliations unverified", withheld: true },
  14: { alt: "Planning meeting around a residential masterplan model and technical drawings", caption: "Project planning coordination · Illustrative reference", contain: true },
  15: { alt: "Four professionals discussing a property model and plans beside a presentation screen", caption: "Professional property consultation · Illustrative reference" },
  16: { alt: "Three participants discussing development plans in front of architectural presentation boards", caption: "Property planning discussion · Not land inventory", contain: true },
  17: { alt: "Laptop displaying financial charts beside architectural drawings and a residential model", caption: "Financial and feasibility assessment · Visual reference" },
  18: { alt: "Three professionals reviewing large rolled drawings and property documentation", caption: "Property documentation review · Visual reference" },
  19: { alt: "Residents discussing documents near a housing society noticeboard", caption: "Society awareness and consultation · Illustrative reference" },
  20: { alt: "Stakeholders discussing plans and documents around a conference table", caption: "Stakeholder coordination · Illustrative reference", contain: true },
  21: { alt: "Contemporary white residential building with landscaped entrance and projecting balconies", caption: "Residential form and arrival · Unverified architectural reference", contain: true },
  22: { alt: "Architectural rendering of a curved illuminated entrance with high-rise residential towers behind it", caption: "Arrival and shared spaces · Architectural concept" },
  23: { alt: "Participants reviewing a project timeline and performance charts in a strategy meeting", caption: "Strategy and counterparty discussions · Visual reference" },
  24: { alt: "Residential towers surrounding landscaped communal space, paths and a swimming pool", caption: "Residential planning and shared amenities · Unverified architectural reference", contain: true },
} satisfies Record<number, { alt: string; caption: string; contain?: boolean; withheld?: boolean }>;

export type ClientImageId = keyof typeof clientImages;
