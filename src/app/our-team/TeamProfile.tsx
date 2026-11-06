import { existsSync } from "node:fs";
import path from "node:path";
import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import type { TeamRole } from "./team-data";

export function TeamProfile({ role }: { role: TeamRole }) {
  const portrait = role.portrait && existsSync(path.join(process.cwd(), "public", role.portrait.src)) ? role.portrait : null;
  return (
    <article id={`profile-${role.id}`} aria-labelledby={`name-${role.id}`} className="group scroll-mt-28 border-t border-navy/20 py-10 sm:py-12 motion-safe:transition-colors hover:border-gold/60">
      <div className="grid items-start gap-8 sm:grid-cols-12 sm:gap-8">
        <figure className="sm:col-span-4">
          <div className="editorial-image-frame relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden border border-gold/20 bg-navy text-ivory sm:max-w-none">
            {portrait ? <Image src={portrait.src} alt={portrait.alt} fill sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 18vw" className={role.id === "founder" ? "bg-white object-contain" : "object-cover object-top"} /> : <div className="flex h-full flex-col items-center justify-between p-6"><span className="self-start text-xs uppercase tracking-[0.18em] text-gold">Profile / {String(role.order).padStart(2, "0")}</span><UserRound size={52} strokeWidth={0.75} className="text-gold/60" aria-hidden="true" /><span className="text-center text-xs uppercase tracking-[0.15em] text-ivory/65">Portrait pending<br />Neutral placeholder</span></div>}
          </div>
          <figcaption className="mt-3 text-center text-xs leading-5 text-charcoal/75 sm:text-left">{portrait ? "Official team portrait" : "Original team photograph to be supplied"}</figcaption>
        </figure>
        <div className="sm:col-span-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-800">{role.group === "leadership" ? "Leadership sequence" : "Functional role"} / {String(role.order).padStart(2, "0")}</p>
          <h3 id={`name-${role.id}`} className="font-serif text-3xl font-normal leading-[1.1] tracking-tight">{role.name ?? "Name to be confirmed"}</h3>
          <p className="mt-4 text-xs font-semibold leading-6 tracking-wide">{role.publicDesignation}</p>
          {!role.name && <p className="mt-2 text-xs text-charcoal/75">Role profile placeholder · Appointment details not confirmed</p>}
          {role.biography && <p className="mt-5 text-sm leading-7 text-charcoal/75">{role.biography}</p>}
          <div className="mt-7 border-l border-gold/60 pl-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] leading-5 text-gold-800">Draft role summary · Pending client confirmation</p><p className="mt-3 text-sm leading-7 text-charcoal/75">{role.draftDescription}</p></div>
          <h4 className="mb-3 mt-6 text-xs font-semibold">Draft responsibilities</h4>
          <ul className="space-y-2 text-sm leading-6 text-charcoal/75">{role.draftResponsibilities.map((responsibility) => <li key={responsibility} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold-700" /><span>{responsibility}</span></li>)}</ul>
          <h4 className="mb-3 mt-6 text-xs font-semibold">Proposed core focus areas</h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-3">{role.draftFocusAreas.map((area) => <li key={area} className="border-l border-gold/40 pl-3 text-xs leading-5 text-charcoal/75">{area}</li>)}</ul>
          {role.id === "founder" && <Link href="/founder" className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-gold text-xs hover:text-gold-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Read the founder profile <ArrowUpRight size={16} aria-hidden="true" /></Link>}
        </div>
      </div>
    </article>
  );
}

