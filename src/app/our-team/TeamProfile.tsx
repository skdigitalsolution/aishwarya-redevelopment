import { existsSync } from "node:fs";
import path from "node:path";
import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import { CompanyReveal } from "@/components/company/CompanyReveal";
import type { TeamRole } from "./team-data";

export function TeamProfile({ role }: { role: TeamRole }) {
  const portrait = role.portrait && existsSync(path.join(process.cwd(), "public", role.portrait.src)) ? role.portrait : null;
  return <CompanyReveal>
    <article id={`profile-${role.id}`} data-team-profile data-founder={role.id === "founder"} aria-labelledby={`name-${role.id}`} className="company-teamProfile">
      <div className="company-profileIdentity">
        <figure className="company-profilePortrait">
          <div className="company-profilePortraitFrame">
            {portrait ? <Image src={portrait.src} alt={portrait.alt} fill loading="lazy" sizes="(max-width: 639px) 240px, (max-width: 1023px) 240px, 300px" className="object-contain" /> : <div className="company-neutralPortrait" data-neutral-portrait><UserRound size={48} strokeWidth={0.8} aria-hidden="true" /><span>Portrait pending</span></div>}
          </div>
          <figcaption>{portrait ? "Original founder portrait" : "Neutral placeholder · Genuine photograph pending"}</figcaption>
        </figure>
        <div>
          <p className="company-eyebrow">{role.group === "leadership" ? "Leadership sequence" : "Functional role"} / {String(role.order).padStart(2, "0")}</p>
          <h3 id={`name-${role.id}`}>{role.name ?? role.publicDesignation}</h3>
          <p className="company-profileDesignation">{role.name ? role.publicDesignation : "Name to be confirmed"}</p>
          {!role.name && <p className="company-profileStatus">Role profile placeholder · Appointment details not confirmed</p>}
          {role.biography && <p className="company-profileBiography">{role.biography}</p>}
          {role.designationNote && <p className="company-approvalNote" data-designation-conflict>{role.designationNote}</p>}
          {role.id === "founder" && <Link href="/founder" className="company-textLink">Read the founder profile <ArrowUpRight size={16} aria-hidden="true" /></Link>}
        </div>
      </div>
      <div className="company-profileDraft">
        <div><h4>Draft role summary · Pending client confirmation</h4><p>{role.draftDescription}</p></div>
        <div><h4>Draft responsibilities</h4><ul>{role.draftResponsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul></div>
        <div><h4>Proposed core focus areas</h4><ul>{role.draftFocusAreas.map(area => <li key={area}>{area}</li>)}</ul></div>
      </div>
    </article>
  </CompanyReveal>;
}
