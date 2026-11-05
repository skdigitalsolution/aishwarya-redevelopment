import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/lib/constants";
import { getSiteConfig } from "@/lib/site-config";

export const publicRoutes = ["/", "/about", "/services", "/redevelopment", "/land-banking", "/projects", "/founder", "/our-team", "/contact"] as const;
export type PublicRoute = typeof publicRoutes[number];
export const siteConfig = getSiteConfig();
export const companyName = COMPANY_DETAILS.legalName;

export function pageMetadata(route: PublicRoute, title: string, description: string): Metadata {
  const fullTitle = `${title} | ${companyName}`;
  const url = siteConfig.siteUrl ? new URL(route, siteConfig.siteUrl).href : undefined;
  return {
    // Layout templates apply to child segments, not the homepage in that segment.
    title: route === "/" ? { absolute: fullTitle } : title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { type: "website", locale: "en_IN", siteName: companyName, title: fullTitle, description, ...(url ? { url } : {}) },
    // Text-only card until social artwork and its publication rights are approved.
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  telephone: COMPANY_DETAILS.contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl, "@id": `${siteConfig.siteUrl}/#organization` } : {}),
};
