import type { MetadataRoute } from "next";
import { publicRoutes, siteConfig } from "@/lib/seo";
import { articles } from "@/app/knowledge-centre/knowledge-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable || !siteConfig.siteUrl) return [];
  return [...publicRoutes, ...articles.map(article => `/knowledge-centre/${article.slug}`)].map((route) => ({ url: new URL(route, siteConfig.siteUrl).href }));
}
