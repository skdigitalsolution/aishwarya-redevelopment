import type { ComponentPropsWithoutRef } from "react";

/** Plain static-document navigation, including the GitHub Pages deployment subpath. */
export default function ResourceLink({ href, ...props }: ComponentPropsWithoutRef<"a">) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolved = href?.startsWith("/") && !href.startsWith("//") && basePath && !href.startsWith(`${basePath}/`)
    ? `${basePath}${href}`
    : href;
  return <a {...props} href={resolved} />;
}
