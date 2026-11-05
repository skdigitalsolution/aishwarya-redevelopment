export type PortfolioCategory =
  | "Society Redevelopment"
  | "Architectural Concepts"
  | "Land Advisory"
  | "Development Opportunities";

export interface PortfolioImage {
  src: string;
  alt: string;
  caption: string;
}

/** Publish only when the project's identity and the company's role are verified. */
export interface VerifiedPortfolioProject {
  id: string;
  projectName: string;
  location: string | null;
  projectType: PortfolioCategory;
  status: "Planning" | "Advisory" | "Under Construction" | "Completed" | null;
  area: { value: number; unit: "sq ft" | "sq m" | "acres" } | null;
  description: string;
  galleryImages: PortfolioImage[];
}

/** Conceptual imagery is kept separate from verified project records. */
export interface ArchitecturalShowcaseImage extends PortfolioImage {
  id: string;
  category: "Architectural Concepts";
  view: "full" | "facade-detail" | "entrance-detail";
  objectPosition: string;
}
