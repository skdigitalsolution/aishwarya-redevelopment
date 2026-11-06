import type { ClientImageId } from "@/lib/client-images";

// Names supplied in the Phase 5 brief; detailed source descriptions remain pending.
export const landBrokerage: { title: string; description: string; image: ClientImageId }[] = [
  { title: "Client Representation & Advisory", description: "Client-specified land advisory scope. Detailed brokerage descriptions await the original presentation.", image: 16 },
  { title: "Transaction Management & Deal Structuring", description: "Client-specified land advisory scope. Detailed brokerage descriptions await the original presentation.", image: 11 },
  { title: "Closing Coordination", description: "Client-specified land advisory scope. Detailed brokerage descriptions await the original presentation.", image: 18 },
];

export const landPortfolios: { title: string; description: string; image: ClientImageId }[] = [
  { title: "Core Wealth Holdings", description: "Category supplied by the client. The original category description is pending the Land Banking presentation.", image: 5 },
  { title: "Value-Add Portfolios", description: "Category supplied by the client. The original category description is pending the Land Banking presentation.", image: 14 },
  { title: "Fast-Track Liquidation Assets", description: "Category supplied by the client. The original category description is pending the Land Banking presentation.", image: 18 },
];

export const landDiligence: { title: string; description: string; image: ClientImageId }[] = [
  { title: "Absolute Title Vetting", description: "Original tier description pending the Land Banking presentation.", image: 10 },
  { title: "Highest & Best Use (HBU) Modeling", description: "Original tier description pending the Land Banking presentation.", image: 8 },
  { title: "Conversion & Compliance Management", description: "Original tier description pending the Land Banking presentation.", image: 18 },
];
