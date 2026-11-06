import { CompanyReveal } from "@/components/company/CompanyReveal";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import "@/components/company/company-pages.css";
import { pageMetadata } from "@/lib/seo";
import { ClientImage } from "@/components/ui/ClientImage";
import Image from "@/components/ui/SiteImage";
import Link from "next/link";
import {
  Shield,
  Scale,
  Building2,
  Compass,
  FileCheck2,
  CheckCircle2,
  Phone,
  Calendar,
  ArrowRight,
  Landmark,
  Target,
  Eye,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_DETAILS } from "@/lib/constants";

export const metadata = pageMetadata("/about", "Company Overview", "Learn about Aishwarya Redevelopment Advisory Company, its advisory approach and support for housing societies and property owners in Mumbai.");

const expertiseAreas = [
 {title: "Society Redevelopment Advisory", description: "Mumbai redevelopment advisory.", icon: Building2},
 {title: "Self-Redevelopment", description: "Self-redevelopment is an identified area of founder expertise.", icon: Award},
 {title: "Developer Due Diligence", description: "MahaRERA track record, financial solvency and existing society feedback.", icon: FileCheck2},
 {title: "Title Resolution & Due Diligence", description: "Title resolution and due diligence are identified areas of founder expertise.", icon: Scale},
 {title: "Municipal & Administrative Procedures", description: "Municipal and administrative procedures are identified areas of founder expertise.", icon: Shield},
 {title: "Redevelopment Feasibility Study", description: "DCPR 2034 feasibility is a listed developer review criterion.", icon: Compass},
 {title: "Land Amalgamation & Land Valuation", description: "Land amalgamation and land valuation are identified areas of founder expertise.", icon: Landmark},
];

const coreValues = [
  {
    "number": "01",
    "title": "MahaRERA track record",
    "subtitle": "Developer review",
    "description": "Developer due diligence criterion."
  },
  {
    "number": "02",
    "title": "Financial solvency",
    "subtitle": "Developer review",
    "description": "Developer due diligence criterion."
  },
  {
    "number": "03",
    "title": "Existing society feedback",
    "subtitle": "Developer review",
    "description": "Developer due diligence criterion."
  },
  {
    "number": "04",
    "title": "Bank guarantee capability",
    "subtitle": "Developer review",
    "description": "A capability review criterion; no guarantee is promised."
  },
  {
    "number": "05",
    "title": "DCPR 2034 feasibility",
    "subtitle": "Developer review",
    "description": "Developer due diligence criterion."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="company-page company-about bg-ivory text-charcoal flex-1" data-motion-owned>
        {/* 1. ABOUT HERO */}
        <section className="company-aboutHero relative pt-40 pb-16 sm:pt-56 sm:pb-24 bg-navy-950 text-ivory overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/22.jpeg"
              alt="Client-supplied architectural concept of a residential entrance and towers; not a verified company project"
              fill
              quality={88}
              preload
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(6, 15, 30, 0.94) 0%, rgba(11, 29, 58, 0.82) 35%, rgba(11, 29, 58, 0.35) 70%, rgba(11, 29, 58, 0.12) 100%)" }}
            />
          </div>

          <Container size="xl" className="relative z-10">
            <CompanyReveal className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                  About Aishwarya
                </span>
              </div>

              <h1 className="editorial-hero-title font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 font-normal leading-[1.12] tracking-tight">
                Company <span className="italic font-light text-gold-300">Overview</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-ivory-200/90 leading-relaxed font-light">Aishwarya Redevelopment Advisory Company: Mumbai redevelopment advisory, led by Mr. Sachin Murudkar, Founder &amp; Director.</p>
            </CompanyReveal>
            <p className="company-heroCaption">Residential architecture <span>Client-supplied concept. Not a verified company project.</span></p>
          </Container>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="company-aboutIntro py-20 sm:py-28 bg-ivory border-t border-gold/20">
<CompanyReveal>
          <Container size="xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <PerspectiveCard className="company-imageFrame min-w-0 lg:col-span-6"><ClientImage id={7} aspect="aspect-video" /></PerspectiveCard>
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-gold-600" />
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-gold-700">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal leading-tight">
                  Aishwarya Redevelopment Advisory Company
                </h2>

                <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light">
                  <p>Mr. Sachin Murudkar is the Founder &amp; Director of Aishwarya Redevelopment Advisory Company.</p>
                  <p>The stated areas of expertise include society redevelopment strategy, self-redevelopment, title resolution and due diligence, municipal and administrative procedures, land amalgamation and land valuation.</p>
                  <p className="text-charcoal/75 text-sm">Further company profile information awaits the original client presentation.</p>
                </div>

                <p className="company-criteriaLabel">Developer review criteria</p>
                <div className="pt-4 border-t border-gold/20 flex flex-wrap gap-4 text-xs font-sans text-charcoal/80">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    MahaRERA track record
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    Financial solvency
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    DCPR 2034 Feasibility
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </CompanyReveal>
</section>

        {/* 3. VISION & PHILOSOPHY */}
        <section className="company-aboutPhilosophy py-20 sm:py-28 bg-white border-t border-gold/20">
<CompanyReveal>
          <Container size="xl">
            <SectionHeading
              eyebrow="Guiding Philosophy"
              title={
                <span>
                  Clarity of Purpose. <span className="italic font-light text-gold-700">Clarity of Direction.</span>
                </span>
              }
              subtitle="Client's Profit is Our Success."
              align="center"
              theme="light"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="p-8 sm:p-10 rounded-xs bg-ivory border border-gold/25 relative flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-xs bg-gold/10 border border-gold/25 text-gold-700 mb-6">
                    <Eye className="size-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy font-medium mb-3">
                    Corporate Philosophy
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">Client&apos;s Profit is Our Success.</p>
                </div>
                <div className="pt-6 mt-6 border-t border-gold/15 text-xs font-mono text-gold-700">
                  Corporate philosophy
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-xs bg-navy text-ivory border border-gold/30 relative flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-xs bg-gold/15 border border-gold/30 text-gold-400 mb-6">
                    <Target className="size-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ivory-50 font-medium mb-3">
                    Developer Review Criteria
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ivory-300/85 leading-relaxed font-light">The developer due diligence criteria include MahaRERA track record, financial solvency, existing society feedback, bank guarantee capability and DCPR 2034 feasibility.</p>
                </div>
                <div className="pt-6 mt-6 border-t border-gold/20 text-xs font-mono text-gold-400">
                  Developer due diligence
                </div>
              </div>
            </div>
          </Container>
        </CompanyReveal>
</section>

        {/* 4. OUR EXPERTISE */}
        <section className="company-aboutExpertise py-20 sm:py-28 bg-navy-950 text-ivory border-t border-gold/20">
<CompanyReveal>
          <Container size="xl">
            <SectionHeading
              eyebrow="Comprehensive Practice"
              title={
                <span>
                  Redevelopment Advisory <span className="italic font-light text-gold-300">Capabilities.</span>
                </span>
              }
              subtitle="The advisory topics explicitly identified in the client task."
              align="center"
              theme="dark"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <PerspectiveCard
                    key={item.title}
                    className="p-7 rounded-xs bg-navy-900/70 border border-gold/20 hover:border-gold/45 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2.5 w-fit rounded-xs bg-gold/10 border border-gold/20 text-gold-400 mb-5">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-serif text-xl text-ivory-50 font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-ivory-300/75 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </PerspectiveCard>
                );
              })}
            </div>
          </Container>
        </CompanyReveal>
</section>

        <section aria-labelledby="values-heading" className="company-aboutValues bg-ivory py-16 sm:py-24">
<CompanyReveal>
          <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading align="left" showDivider={false} eyebrow="Developer due diligence" title={<span id="values-heading">Five criteria.<br /><span className="italic text-gold-700">Developer review.</span></span>} subtitle="The five developer due diligence criteria identified in the client task." />
            </div>
            <ol className="min-w-0 divide-y divide-navy/15 border-t border-navy/15 lg:col-span-8">
              {coreValues.map((value) => <li key={value.number} className="grid gap-4 py-7 xl:grid-cols-12 xl:gap-7">
                <div className="flex items-start gap-4 xl:col-span-5"><span aria-hidden="true" className="pt-1 text-xs text-gold-700">{value.number}</span><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{value.title}</h3></div>
                <p className="max-w-xl text-sm leading-7 text-charcoal/80 xl:col-span-7">{value.description}</p>
              </li>)}
            </ol>
          </Container>
        </CompanyReveal>
</section>

        <section aria-labelledby="about-leadership" className="company-aboutLeadership border-t border-navy/10 bg-white/60 py-16 sm:py-24">
          <CompanyReveal><Container className="company-aboutLeadershipGrid">
            <figure className="company-leadershipPortrait"><div className="relative aspect-[516/564]"><Image src="/images/founder-portrait.jpeg" alt="Mr. Sachin Murudkar, Founder and Director of Aishwarya Redevelopment Advisory Company" fill loading="lazy" sizes="(max-width: 639px) 240px, 280px" className="object-contain" /></div><figcaption>Original founder portrait</figcaption></figure>
            <div><p className="company-eyebrow">Executive Leadership</p><h2 id="about-leadership" className="font-serif text-3xl sm:text-4xl">Mr. Sachin Murudkar</h2><p className="mt-3 text-sm text-gold-800">Founder &amp; Director</p><p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/80">The founder profile introduces the leadership perspective behind the company&apos;s redevelopment and property advisory practice.</p><Link href="/founder" className="company-textLink">Meet our founder <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </Container></CompanyReveal>
        </section>

        {/* 7. CONSULTATION CTA */}
        <section className="company-aboutClosing py-20 sm:py-28 bg-navy-950 text-ivory border-t border-gold/25 relative overflow-hidden">
<CompanyReveal>
          <Container size="xl">
            <div className="p-8 sm:p-12 lg:p-16 rounded-xs bg-navy-900/90 border border-gold/30 grid grid-cols-1 xl:grid-cols-12 items-center gap-8">
              <div className="max-w-2xl space-y-4 text-left xl:col-span-7">
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.22em] text-gold-400 block">
                  Begin Your Redevelopment Journey
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-normal leading-tight">
                  Consult With Aishwarya Redevelopment Advisory
                </h2>
                <p className="font-sans text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">Contact Aishwarya Redevelopment Advisory Company about redevelopment or land advisory.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto xl:col-span-5 xl:flex-col xl:items-stretch">
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-colors rounded-xs shadow-md"
                >
                  <Phone className="size-4 text-navy-950" />
                  <span>Call: {COMPANY_DETAILS.contact.phone}</span>
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-sans font-medium uppercase tracking-[0.16em] text-ivory-100 hover:text-gold border border-gold/40 hover:border-gold rounded-xs transition-colors"
                >
                  <Calendar className="size-4 text-gold-400" />
                  <span>Prepare Enquiry Details</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </CompanyReveal>
</section>
      </main>

      <Footer />
    </>
  );
}

