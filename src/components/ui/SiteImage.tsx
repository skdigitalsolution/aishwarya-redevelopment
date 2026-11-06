import Image, { type ImageProps } from "next/image";

/** Include the deployment subpath for public images on GitHub Pages. */
export default function SiteImage({ src, alt, ...props }: ImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedSrc =
    typeof src === "string" &&
    src.startsWith("/") &&
    !src.startsWith("//") &&
    basePath &&
    !src.startsWith(`${basePath}/`)
      ? `${basePath}${src}`
      : src;

  return <Image {...props} src={resolvedSrc} alt={alt} />;
}
