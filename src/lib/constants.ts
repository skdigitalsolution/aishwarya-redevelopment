/**
 * Brand Design Tokens and Identity Constants
 * Aishwarya Redevelopment Advisory Company
 */

export const BRAND_TOKENS = {
  colors: {
    navy: {
      DEFAULT: "#0B1D3A",
      deep: "#060F1E",
      light: "#183B77",
    },
    gold: {
      DEFAULT: "#C6A66B",
      light: "#DFCA9E",
      dark: "#A8864E",
    },
    ivory: {
      DEFAULT: "#F8F6F1",
      light: "#FCFCFA",
      dark: "#EDE8DD",
    },
    charcoal: {
      DEFAULT: "#1E2229",
      muted: "#586372",
      deep: "#121419",
    },
    white: "#FFFFFF",
  },
  fonts: {
    serif: "var(--font-cormorant), Georgia, serif",
    sans: "var(--font-jakarta), sans-serif",
  },
} as const;

export const COMPANY_DETAILS = {
  name: "Aishwarya Redevelopment Advisory",
  shortName: "Aishwarya Advisory",
  legalName: "Aishwarya Redevelopment Advisory Private Limited",
  tagline: "Strategic Real Estate Advisory for Landmark Redevelopment",
  subTagline:
    "Guiding housing societies, landlord estates, and developers through fiduciary diligence, master planning, and value realization.",
  location: "Mumbai, Maharashtra, India",
  contact: {
    phone: "+91 70218 92236",
    phoneTel: "+917021892236",
  },
} as const;

export const ASSET_PATHS = {
  brand: {
    logoLight: "/images/brand/logo-light.svg",
    logoDark: "/images/brand/logo-dark.svg",
    monogram: "/images/brand/monogram.svg",
    symbol: "/images/brand/symbol.svg",
  },
  founder: {
    portrait: "/images/founder/founder-portrait.jpg",
    signature: "/images/founder/founder-signature.svg",
  },
  clients: {
    directory: "/images/client/",
  },
  projects: {
    directory: "/images/projects/",
  },
} as const;
