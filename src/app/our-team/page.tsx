import { pageMetadata } from "@/lib/seo";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "@/components/ui/SiteImage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { CompanyReveal } from "@/components/company/CompanyReveal";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { teamRoles } from "./team-data";
import { TeamProfile } from "./TeamProfile";
import "@/components/company/company-pages.css";

export const metadata = pageMetadata("/our-team", "Our Team & Leadership", "Meet Aishwarya Redevelopment Advisory Company's founder and explore its proposed team structure. Unconfirmed appointments and draft role summaries are labelled.");

export default function OurTeamPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="company-page company-team" data-motion-owned>
      <section aria-labelledby="team-title" className="company-teamHero">
        <Image src="/images/14.jpeg" alt="Client-supplied illustrative planning discussion around a residential masterplan model; not a verified Aishwarya team photograph" fill preload sizes="100vw" className="company-teamHeroImage" />
        <div className="company-teamHeroShade" aria-hidden="true" />
        <Container className="company-teamHeroGrid"><CompanyReveal><p className="company-eyebrow">Our People</p><h1 id="team-title">The People<br />Behind <em>Aishwarya.</em></h1><p className="company-teamHeroIntro">Mr. Sachin Murudkar &mdash; Founder &amp; Director. Other organizational roles remain proposed placeholders.</p><a href="#structure" className="company-textLink">Explore the proposed structure <ArrowDown size={16} aria-hidden="true" /></a></CompanyReveal><div className="company-teamHeroCaption"><p>A connected perspective.<br /><em>Clear responsibilities.</em></p><span>Leadership, advisory, legal, design and operational roles brought together in a proposed organizational view.</span><small>Client-supplied planning reference.<br />Not an Aishwarya team photograph.</small></div></Container>
      </section>

      <section id="structure" aria-labelledby="structure-title" className="company-section company-teamStructure"><Container>
        <CompanyReveal><p className="company-eyebrow">Organizational hierarchy</p><h2 id="structure-title" className="company-heading">A framework for<br /><em>coordinated expertise.</em></h2><p id="structure-note" className="company-body">The eight-role structure is supplied by the client. Unconfirmed appointments and reporting relationships remain provisional. The founder&apos;s approved public designation is Founder &amp; Director.</p>
        <div className="company-approvalNote" data-designation-conflict><strong>Client approval required:</strong> The structure uses Founder &amp; Managing Director. This conflicts with the approved public designation Founder &amp; Director. The Managing Director designation is not published as a confirmed appointment.</div></CompanyReveal>
        <div aria-describedby="structure-note">
          <h3 className="company-treeLabel">01&ndash;04 / Leadership sequence</h3>
          <ol className="company-leadershipTree">{teamRoles.filter(role=>role.group==="leadership").map(role=><li key={role.id}><PerspectiveCard className="company-hierarchyCard"><a href={"#profile-"+role.id}><span className="company-roleNumber">0{role.order}</span><span className="company-roleTitle">{role.publicDesignation}</span><span className="company-roleName">{role.name ?? "Proposed role / Name to be confirmed"}</span>{role.designationNote&&<span className="company-roleApproval">Structure wording: {role.proposedDesignation} &mdash; pending client approval</span>}<span className="company-roleLink">View role profile <ArrowUpRight size={15} aria-hidden="true" /></span></a></PerspectiveCard></li>)}</ol>
          <h3 className="company-treeLabel">05&ndash;08 / Functional roles</h3>
          <ol start={5} className="company-functionalTree">{teamRoles.filter(role=>role.group==="functional").map(role=><li key={role.id}><PerspectiveCard className="company-hierarchyCard"><a href={"#profile-"+role.id}><span className="company-roleNumber">0{role.order}</span><span className="company-roleTitle">{role.publicDesignation}</span><span className="company-roleName">Proposed role / Name to be confirmed</span><span className="company-roleLink">View role profile <ArrowDown size={15} aria-hidden="true" /></span></a></PerspectiveCard></li>)}</ol>
        </div>
      </Container></section>

      <section aria-labelledby="profiles-title" className="company-section company-teamProfiles"><Container>
        <CompanyReveal className="company-profileIntro"><div><p className="company-eyebrow">Individual role profiles</p><h2 id="profiles-title" className="company-heading">People, purpose<br /><em>and responsibility.</em></h2></div><p className="company-body">All role summaries, responsibilities and focus areas below are drafts pending client confirmation. Unconfirmed names and portraits are explicitly marked. Role profiles do not confirm current employees or appointments.</p></CompanyReveal>
        <div className="company-profilesGrid">{teamRoles.map(role=><TeamProfile key={role.id} role={role} />)}</div>
        <div className="company-teamEnd"><p>The founder profile contains the available company introduction. Additional names, approved biographies and original team photographs will complete this organizational view.</p><Link href="/founder" className="company-textLink">Meet the founder <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </Container></section>
      <ConsultationCTA title={<>Contact <span className="font-light italic text-gold-300">Aishwarya.</span></>} />
    </main>
    <Footer />
  </>;
}
