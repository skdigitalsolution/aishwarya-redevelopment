import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

// For GitHub Pages under user.github.io/repo-name:
const basePath =
  isGithubActions && repo && !repo.endsWith(".github.io") && !isCustomDomain
    ? `/${repo}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: true,
    qualities: [75, 88],
  },
};

export default nextConfig;
