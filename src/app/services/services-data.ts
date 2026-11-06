import { primaryServiceNames } from "@/lib/client-content";
import { clientImages, type ClientImageId } from "@/lib/client-images";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  caption: string;
}

export interface ServiceGroup {
  id: string;
  chapter: string;
  range: string;
  dark: boolean;
  services: ServiceItem[];
}

// Exact descriptions supplied in the Phase 3 client brief. Keep punctuation,
// including the unfinished trailing comma in entry 15, without completing it.
const descriptions = [
  "Assess structural, financial, and legal viability for society & property redevelopment.",
  "End-to-end advisory for housing societies and cooperative redevelopment.",
  "Oversee planning, budgeting, timelines, quality control, and execution.",
  "Conduct title search, legal checks, and regulatory due diligence.",
  "Liaison with BMC/MMRDA, MHADA, environmental & statutory approvals.",
  "Master planning, design concept, layout optimization, and feasibility.",
  "NPV/IRR analysis, funding structure, joint venture models.",
  "Rehabilitation arrangements, alternate lodging, and member agreements.",
  "RERA registration, regulatory filings, and compliance management.",
  "Tender process, developer evaluation, contract negotiations.",
  "Development agreements, conveyance, MOFA compliance, legal documentation.",
  "Property valuation, market study, benchmarking, and financial appraisal.",
  "Pricing strategy, sales & leasing plan, marketing advisory.",
  "BOQ preparation, cost control, and construction quality audits.",
  "Asset performance review, portfolio optimization,",
  "SRA scheme advisory, approvals, project structuring, & execution.",
  "Structuring JV partnerships between landowners and developers.",
  "GST, stamp duty, capital gains tax, and tax planning.",
  "Post-development facilities management and operations framework.",
  "Capital raising, investor pitch deck, equity/debt advisory."
] as const;

// Contextual client assets; these are not verified company project records.
// Image 13 remains excluded pending publication approval.
const imageIds: ClientImageId[] = [17, 6, 14, 18, 10, 8, 17, 19, 10, 11, 10, 17, 15, 9, 21, 12, 20, 17, 24, 23];
const groupIds = ["redevelopment", "legal", "financial", "execution"];

export const serviceGroups: ServiceGroup[] = groupIds.map((id, groupIndex) => {
  const start = groupIndex * 5;
  return {
    id,
    chapter: String(groupIndex + 1).padStart(2, "0"),
    range: `${String(start + 1).padStart(2, "0")}–${String(start + 5).padStart(2, "0")}`,
    dark: groupIndex % 2 === 1,
    services: primaryServiceNames.slice(start, start + 5).map((title, index) => {
      const number = String(start + index + 1).padStart(2, "0");
      const imageId = imageIds[start + index];
      const image = clientImages[imageId];
      return {
        id: `service-${number}`, number, title,
        description: descriptions[start + index],
        image: `/images/${imageId}.${imageId <= 4 ? "png" : "jpeg"}`,
        alt: image.alt,
        caption: image.caption,
      };
    }),
  };
});
