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

/** Order and group express the supplied visual brief, not confirmed reporting lines. */
export const teamRoles: readonly TeamRole[] = [
  {
    id: "founder", order: 1, group: "leadership",
    proposedDesignation: "Founder & Managing Director", publicDesignation: "Founder & Director",
    name: "Mr. Sachin Murudkar",
    portrait: { src: "/images/founder-portrait.jpeg", alt: "Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" },
    biography: "Mr. Sachin Murudkar is the Founder & Director of Aishwarya Redevelopment Advisory Company. The existing company profile describes an advisory focus spanning society redevelopment, title due diligence, municipal coordination and land valuation.",
    draftDescription: "Provide organizational direction and strategic guidance while maintaining a focus on client priorities.",
    draftResponsibilities: ["Shape organizational vision and advisory priorities", "Guide leadership decisions and major client relationships", "Support stakeholder alignment on strategic matters"],
    draftFocusAreas: ["Organizational vision", "Strategic guidance", "Client relationships"],
  },
  {
    id: "strategic-advisor", order: 2, group: "leadership",
    proposedDesignation: "Co-Founder / Strategic Advisor", publicDesignation: "Co-Founder / Strategic Advisor",
    name: null, portrait: null, biography: null,
    draftDescription: "Contribute a strategic perspective to business planning, stakeholder discussions and potential opportunities.",
    draftResponsibilities: ["Support strategic planning and evaluation", "Advise on stakeholder priorities", "Assess potential business opportunities"],
    draftFocusAreas: ["Strategic planning", "Stakeholder advisory", "Business opportunities"],
  },
  {
    id: "ceo", order: 3, group: "leadership",
    proposedDesignation: "Chief Executive Officer (CEO)", publicDesignation: "Chief Executive Officer (CEO)",
    name: null, portrait: null, biography: null,
    draftDescription: "Translate business priorities into coordinated operating plans and consistent client engagement.",
    draftResponsibilities: ["Develop business strategy and priorities", "Oversee operations against agreed objectives", "Maintain key client relationships"],
    draftFocusAreas: ["Business strategy", "Operations oversight", "Client relationships"],
  },
  {
    id: "coo", order: 4, group: "leadership",
    proposedDesignation: "Head Operating Officer (COO)", publicDesignation: "Head Operating Officer (COO)",
    name: null, portrait: null, biography: null,
    draftDescription: "Coordinate daily activities and help teams move agreed processes forward with clarity.",
    draftResponsibilities: ["Coordinate daily operations and priorities", "Facilitate cross-functional communication", "Track process execution and outstanding actions"],
    draftFocusAreas: ["Daily operations", "Team coordination", "Process execution"],
  },
  {
    id: "real-estate-consultant", order: 5, group: "functional",
    proposedDesignation: "Senior Real Estate Consultant", publicDesignation: "Senior Real Estate Consultant",
    name: null, portrait: null, biography: null,
    draftDescription: "Help clients understand property options and coordinate the inputs needed for redevelopment assessment.",
    draftResponsibilities: ["Support client advisory discussions", "Coordinate feasibility inputs and property information", "Follow up redevelopment activities with stakeholders"],
    draftFocusAreas: ["Client advisory", "Feasibility", "Redevelopment coordination"],
  },
  {
    id: "legal-compliance", order: 6, group: "functional",
    proposedDesignation: "Legal & Compliance Manager", publicDesignation: "Legal & Compliance Manager",
    name: null, portrait: null, biography: null,
    draftDescription: "Organize title and regulatory information and coordinate review with relevant legal professionals.",
    draftResponsibilities: ["Coordinate title documentation and review inputs", "Track regulatory requirements and submissions", "Maintain compliance records and flag outstanding issues"],
    draftFocusAreas: ["Title documentation", "Regulatory coordination", "Compliance oversight"],
  },
  {
    id: "architect-design", order: 7, group: "functional",
    proposedDesignation: "Project Architect / Design Lead", publicDesignation: "Project Architect / Design Lead",
    name: null, portrait: null, biography: null,
    draftDescription: "Connect planning and design considerations with the technical assessment of property potential.",
    draftResponsibilities: ["Coordinate architectural inputs and consultant discussions", "Support planning and design feasibility reviews", "Document design assumptions and matters for clarification"],
    draftFocusAreas: ["Architectural coordination", "Planning", "Design feasibility"],
  },
  {
    id: "office-operations", order: 8, group: "functional",
    proposedDesignation: "Support Staff / Office Operations", publicDesignation: "Support Staff / Office Operations",
    name: null, portrait: null, biography: null,
    draftDescription: "Keep the administrative foundations of the practice organized and support everyday coordination.",
    draftResponsibilities: ["Maintain administrative records and correspondence", "Coordinate schedules and meeting arrangements", "Support internal communication and document organization"],
    draftFocusAreas: ["Administration", "Records", "Scheduling & coordination"],
  },
];
