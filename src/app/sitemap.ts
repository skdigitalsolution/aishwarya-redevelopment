import type { MetadataRoute } from "next";
import { publicRoutes, siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable || !siteConfig.siteUrl) return [];
  return publicRoutes.map((route) => ({ url: new URL(route, siteConfig.siteUrl).href }));
}
