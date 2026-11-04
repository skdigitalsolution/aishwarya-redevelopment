import type { ElementType, ReactNode } from "react";

/**
 * Reusable Container component props.
 */
export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  padding?: boolean;
}

/**
 * Section Heading component props.
 * Designed with luxury editorial aesthetics inspired by high-end real estate advisories.
 */
export interface SectionHeadingProps {
  /**
   * Uppercase category eyebrow or badge (e.g. "STRATEGIC ADVISORY", "PORTFOLIO DISCIPLINE")
   */
  eyebrow?: string;

  /**
   * Main title in editorial serif typography. Can contain formatted text or accents.
   */
  title: ReactNode;

  /**
   * Supporting explanatory narrative or advisory context.
   */
  subtitle?: string | ReactNode;

  /**
   * Text and decorative element alignment.
   * @default "center"
   */
  align?: "left" | "center" | "right";

  /**
   * Color theme variant:
   * - "light": For Warm Ivory or White surfaces (dark navy/charcoal typography with muted gold accent)
   * - "dark": For Deep Navy surfaces (ivory typography with warm gold accent)
   * @default "light"
   */
  theme?: "light" | "dark";

  /**
   * Semantic heading level for the main title to preserve accessible document outline.
   * @default "h2"
   */
  titleAs?: "h1" | "h2" | "h3" | "h4";

  /**
   * Whether to display the signature muted gold editorial accent divider rule.
   * @default true
   */
  showDivider?: boolean;

  /**
   * Optional custom badge or tag to render above or beside the eyebrow.
   */
  badge?: ReactNode;

  /**
   * Container wrapper classes.
   */
  className?: string;

  /**
   * Specific classes for the title element.
   */
  titleClassName?: string;

  /**
   * Specific classes for the subtitle element.
   */
  subtitleClassName?: string;
}

/**
 * Brand Asset metadata representation.
 */
export interface BrandAssetInfo {
  name: string;
  path: string;
  width?: number;
  height?: number;
  altText: string;
}

/**
 * Founder and Executive Leadership profile definition.
 */
export interface FounderProfile {
  name: string;
  role: string;
  designation: string;
  credentials: string[];
  bioSummary: string;
  photoUrl: string;
  signatureUrl?: string;
}

/**
 * Client Society & Redevelopment Case Study outline.
 */
export interface RedevelopmentProject {
  id: string;
  societyName: string;
  location: string;
  plotAreaSqFt: number;
  projectedCarpetIncreasePercent: number;
  status: "Feasibility" | "Tender Selection" | "DA Executed" | "Under Construction" | "Delivered";
  advisorRole: string;
}
