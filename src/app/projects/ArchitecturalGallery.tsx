import Image from "next/image";
import type { ArchitecturalShowcaseImage } from "@/types/portfolio";

export function ArchitecturalGallery({ images }: { images: readonly ArchitecturalShowcaseImage[] }) {
  return (
    <div className="grid items-start gap-12 md:grid-cols-12 md:gap-x-12 md:gap-y-14 lg:gap-x-16">
      {images.map((item, index) => (
        <figure key={item.id} className={`group ${index === 0 ? "md:col-span-7 md:row-span-2" : index === 1 ? "md:col-span-5 md:pt-12" : "md:col-span-5"}`}>
          <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`${item.caption}. Open full source image in a new tab.`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
            <div className={`editorial-image-frame relative overflow-hidden bg-navy/5 ${item.view === "full" ? "aspect-[3/4]" : item.view === "facade-detail" ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
              <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"} style={{ objectPosition: item.objectPosition }} className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-within:scale-[1.025]" />
              <span aria-hidden="true" className="absolute bottom-4 right-4 flex size-10 items-center justify-center border border-ivory/60 bg-ivory/95 text-lg text-navy motion-safe:transition-colors group-hover:bg-gold group-focus-within:bg-gold">↗</span>
            </div>
          </a>
          <figcaption className="mt-5 flex gap-5 border-t border-navy/15 pt-5"><span className="font-serif text-2xl font-light text-gold-700">0{index + 1}</span><div><p className="font-serif text-2xl leading-tight">{item.caption}</p><p className="mt-3 text-[10px] uppercase tracking-[0.16em] leading-5 text-charcoal/65">{item.category} · Illustrative reference</p></div></figcaption>
        </figure>
      ))}
      <div className="border-l border-gold pl-6 md:col-span-7"><p className="max-w-md font-serif text-3xl leading-tight sm:text-4xl">The wider perspective.<br /><span className="italic text-gold-800">The considered detail.</span></p><p className="mt-5 max-w-md text-sm leading-7 text-charcoal/70">One architectural study, viewed at different scales. These compositions explore residential form, facade detailing and arrival spaces.</p></div>
    </div>
  );
}
