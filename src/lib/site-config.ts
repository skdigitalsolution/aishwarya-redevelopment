/** Only non-secret deployment settings are read here. Used by server metadata/config. */
export function getSiteConfig(env: Record<string, string | undefined> = process.env) {
  let siteUrl: string | undefined;
  try {
    const url = new URL(env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000");
    const hostname = url.hostname.toLowerCase();
    const local = !hostname.includes(".") || hostname.endsWith(".localhost") || hostname.endsWith(".local") || /^\d+(\.\d+){3}$/.test(hostname) || hostname.startsWith("[");
    if (url.protocol === "https:" && !local && !url.username && !url.password && !url.port && url.pathname === "/" && !url.search && !url.hash) {
      siteUrl = url.origin;
    }
  } catch {
    // Missing or invalid URLs fail closed: no public canonical or sitemap URLs.
  }

  const launchRequested = env.SITE_INDEXING_ENABLED === "true" && env.SITE_DEPLOYMENT_ENV === "production";
  if (launchRequested && !siteUrl) {
    throw new Error("Search indexing requires NEXT_PUBLIC_SITE_URL to be an approved, public HTTPS origin without a path, port or credentials.");
  }
  const platformPreview = (env.VERCEL_ENV !== undefined && env.VERCEL_ENV !== "production") ||
    (env.CONTEXT !== undefined && env.CONTEXT !== "production");
  const indexable = Boolean(siteUrl && launchRequested && env.NODE_ENV === "production" && !platformPreview);

  return { siteUrl, indexable };
}
