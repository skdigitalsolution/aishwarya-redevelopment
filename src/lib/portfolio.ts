import type { ArchitecturalShowcaseImage, VerifiedPortfolioProject } from "@/types/portfolio";

export const verifiedPortfolioProjects: readonly VerifiedPortfolioProject[] = [];

// Three editorial views of one source image, not three separate projects.
export const architecturalShowcase: readonly ArchitecturalShowcaseImage[] = [
  {
    id: "residential-concept",
    src: "/images/projects/about-redevelopment-study.jpg",
    alt: "Illustrative residential tower with planted balconies, glass balustrades and a landscaped entrance",
    caption: "Residential expression — full architectural study",
    category: "Architectural Concepts",
    view: "full",
    objectPosition: "center",
  },
  {
    id: "facade-detail",
    src: "/images/projects/about-redevelopment-study.jpg",
    alt: "Detail crop of the same architectural study showing planted balconies and warm linear lighting",
    caption: "Facade rhythm — detail from the same study",
    category: "Architectural Concepts",
    view: "facade-detail",
    objectPosition: "center 20%",
  },
  {
    id: "entrance-detail",
    src: "/images/projects/about-redevelopment-study.jpg",
    alt: "Detail crop of the same architectural study showing the ground-level entrance and landscaping",
    caption: "The arrival experience — detail from the same study",
    category: "Architectural Concepts",
    view: "entrance-detail",
    objectPosition: "center bottom",
  },
];
