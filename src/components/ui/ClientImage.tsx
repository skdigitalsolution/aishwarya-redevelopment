import Image from "next/image";
import { clientImages, type ClientImageId } from "@/lib/client-images";
import { cn } from "@/lib/utils";

/** Contextual editorial figure. Never represents verified staff, clients or inventory. */
export function ClientImage({ id, className, aspect = "aspect-[4/3]", dark = false, sizes = "(max-width: 639px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 50vw, 640px" }: {
  id: ClientImageId;
  className?: string;
  aspect?: string;
  dark?: boolean;
  sizes?: string;
}) {
  const asset = clientImages[id];
  if ("withheld" in asset && asset.withheld) return null;
  const contain = "contain" in asset && asset.contain;
  return (
    <figure data-client-image={id} className={cn("min-w-0", className)}>
      <div className={cn("editorial-image-frame relative w-full overflow-hidden", dark ? "bg-navy" : "bg-ivory", aspect)}>
        <Image src={`/images/${id}.${id <= 4 ? "png" : "jpeg"}`} alt={asset.alt} fill loading="lazy" sizes={sizes} className={contain ? "object-contain" : id === 5 ? "object-cover object-[85%_center]" : "object-cover object-center"} />
      </div>
      <figcaption className={cn("mt-4 border-t pt-3 text-xs leading-6", dark ? "border-ivory/20 text-ivory/80" : "border-navy/15 text-charcoal/80")}>{asset.caption}</figcaption>
    </figure>
  );
}
