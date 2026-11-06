export interface TeamPortrait {
  /** Public asset path for an approved, genuine team photograph. */
  src: string;
  alt: string;
}

export interface TeamRole {
  id: string;
  order: number;
  group: "leadership" | "functional";
  proposedDesignation: string;
  publicDesignation: string;
  name: string | null;
  portrait: TeamPortrait | null;
  biography: string | null;
  draftDescription: string;
  draftResponsibilities: string[];
  draftFocusAreas: string[];
}

/** Existing proposed layout only; no employment appointments or reporting lines are confirmed. */
export const teamRoles: readonly TeamRole[] = [
  {
    id: "founder", order: 1, group: "leadership",
    proposedDesignation: "Founder & Director", publicDesignation: "Founder & Director",
    name: "Mr. Sachin Murudkar",
    portrait: { src: "/images/founder-portrait.jpeg", alt: "Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" },
    biography: "Mr. Sachin Murudkar is the Founder & Director of Aishwarya Redevelopment Advisory Company. His stated expertise includes Mumbai redevelopment advisory, municipal and administrative procedures, title resolution and due diligence, society redevelopment strategy, self-redevelopment, land amalgamation and land valuation.",
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "strategic-advisor", order: 2, group: "leadership",
    proposedDesignation: "Co-Founder / Strategic Advisor", publicDesignation: "Co-Founder / Strategic Advisor",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "ceo", order: 3, group: "leadership",
    proposedDesignation: "Chief Executive Officer (CEO)", publicDesignation: "Chief Executive Officer (CEO)",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "coo", order: 4, group: "leadership",
    proposedDesignation: "Head Operating Officer (COO)", publicDesignation: "Head Operating Officer (COO)",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "real-estate-consultant", order: 5, group: "functional",
    proposedDesignation: "Senior Real Estate Consultant", publicDesignation: "Senior Real Estate Consultant",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "legal-compliance", order: 6, group: "functional",
    proposedDesignation: "Legal & Compliance Manager", publicDesignation: "Legal & Compliance Manager",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "architect-design", order: 7, group: "functional",
    proposedDesignation: "Project Architect / Design Lead", publicDesignation: "Project Architect / Design Lead",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
  {
    id: "office-operations", order: 8, group: "functional",
    proposedDesignation: "Support Staff / Office Operations", publicDesignation: "Support Staff / Office Operations",
    name: null, portrait: null, biography: null,
    draftDescription: "Role description pending client confirmation.",
    draftResponsibilities: ["Responsibilities pending client confirmation"],
    draftFocusAreas: ["Focus areas pending client confirmation"],
  },
];
