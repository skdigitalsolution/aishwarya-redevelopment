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

export const metadata = pageMetadata("/about", "About Us", "Learn about Aishwarya Redevelopment Advisory Company, its advisory approach and support for housing societies and property owners in Mumbai.");

const expertiseAreas = [
  {
    title: "Society Redevelopment Advisory",
    description: "End-to-end fiduciary guidance for cooperative housing societies navigating developer-led transformation.",
    icon: Building2,
  },
  {
    title: "Self-Redevelopment Guidance",
    description: "Helping societies evaluate self-redevelopment, including funding, area planning and governance responsibilities.",
    icon: Award,
  },
  {
    title: "Developer Due Diligence & Tendering",
    description: "Auditing developer balance sheets, past project velocity, and structuring binding competitive tenders.",
    icon: FileCheck2,
  },
  {
    title: "Legal Title Investigation",
    description: "Property-specific title investigations, deemed conveyance guidance and Development Agreement review.",
    icon: Scale,
  },
  {
    title: "Municipal Coordination",
    description: "Navigating Maharashtra Section 79A, MOFA, RERA, and statutory municipal sanction procedures.",
    icon: Shield,
  },
  {
    title: "Feasibility & FSI Optimization",
    description: "Techno-commercial modeling calculating base FSI, TDR loading, and member carpet area gains under DCPR 2034.",
    icon: Compass,
  },
  {
    title: "Strategic Land Advisory",
    description: "High-value land parcel aggregation, joint development agreements (JDA), and institutional valuations.",
    icon: Landmark,
  },
];

const coreValues = [
  {
    number: "01",
    title: "Transparency",
    subtitle: "Conflict-Free Alignment",
    description:
      "We operate exclusively as an independent fiduciary advocate for housing societies and property owners. Complete clarity is maintained at every general body meeting, tender opening, and commercial review.",
  },
  {
    number: "02",
    title: "Regulatory Compliance",
    subtitle: "Section 79A & RERA Discipline",
    description:
      "Our advisory supports coordination around applicable Maharashtra cooperative laws, Section 79A procedures, RERA provisions and municipal requirements, with professional review of project-specific obligations.",
  },
  {
    number: "03",
    title: "Strategic Planning",
    subtitle: "Techno-Financial Feasibility",
    description:
      "Our advisory is anchored in rigorous financial modeling, micro-market pricing analysis, and realistic execution timelines, ensuring decisions are grounded in commercial viability.",
  },
  {
    number: "04",
    title: "Long-Term Value Creation",
    subtitle: "Compounding Member Equity",
    description:
      "We structure redevelopment agreements to maximize member carpet area, secure bank guarantees, optimize commercial corpus, and define project-specific quality expectations.",
  },
  {
    number: "05",
    title: "Client-Centric Guidance",
    subtitle: "Empowered Decision-Making",
    description:
      "We view our role as educators and guardians of society equity, demystifying complex architectural, legal, and financial jargon so members vote with complete confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="bg-ivory text-charcoal flex-1">
        {/* 1. ABOUT HERO */}
        <section className="relative pt-40 pb-16 sm:pt-56 sm:pb-24 bg-navy-950 text-ivory overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero-architecture-fallback.jpg"
              alt="Illustrative architectural facade used as a background image"
              fill
              quality={85}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(11, 29, 58, 0.8) 0%, rgba(11, 29, 58, 0.75) 30%, rgba(11, 29, 58, 0.48) 65%, rgba(11, 29, 58, 0.22) 100%)" }}
            />
          </div>

          <Container size="xl" className="relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                  About Aishwarya
                </span>
              </div>

              <h1 className="editorial-hero-title font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 font-normal leading-[1.12] tracking-tight">
                Built on Trust.{" "}
                <br className="hidden sm:inline" />
                <span className="italic font-light text-gold-300">Guided by Expertise.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-ivory-200/90 leading-relaxed font-light">
                Aishwarya Redevelopment Advisory Company is an independent Mumbai-based real estate advisory practice providing fiduciary guidance, legal safeguards, and technical clarity for cooperative housing societies and landowners.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="py-20 sm:py-28 bg-ivory border-t border-gold/20">
          <Container size="xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <ClientImage id={7} aspect="aspect-[4/3]" className="min-w-0 lg:col-span-6" />
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-gold-600" />
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-gold-700">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal leading-tight">
                  Independent Advisory Protecting Society Equity
                </h2>

                <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light">
                  <p>
                    Aishwarya Redevelopment Advisory Company is a Mumbai-based real estate and redevelopment advisory firm supporting cooperative housing societies, property owners, and stakeholders through complex redevelopment decisions.
                  </p>
                  <p>
                    The company&apos;s advisory work spans society redevelopment, techno-financial feasibility evaluation, developer due diligence, title and regulatory coordination, self-redevelopment guidance, and strategic land advisory across Mumbai.
                  </p>
                  <p className="text-charcoal/75 text-sm">
                    Our advisory approach emphasizes clear analysis, carefully reviewed documentation and communication with managing committees and society members.
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/20 flex flex-wrap gap-4 text-xs font-sans text-charcoal/80">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    Section 79A Compliance
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    RERA &amp; MOFA Alignment
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-gold-600" />
                    DCPR 2034 Feasibility
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. VISION & PHILOSOPHY */}
        <section className="py-20 sm:py-28 bg-white border-t border-gold/20">
          <Container size="xl">
            <SectionHeading
              eyebrow="Guiding Philosophy"
              title={
                <span>
                  Clarity of Purpose. <span className="italic font-light text-gold-700">Clarity of Direction.</span>
                </span>
              }
              subtitle="Our advisory practice is anchored in safeguarding property equity while bridging society aspirations with technical realities."
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
                    Our Advisory Vision
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                    To establish a benchmark of transparency and fiduciary rigor in Mumbai&apos;s redevelopment landscape — ensuring that every housing society navigates the redevelopment journey with a clearer understanding of legal safeguards, commercial terms and long-term design considerations.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gold/15 text-xs font-mono text-gold-700">
                  Principle: Fiduciary Transparency
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-xs bg-navy text-ivory border border-gold/30 relative flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-xs bg-gold/15 border border-gold/30 text-gold-400 mb-6">
                    <Target className="size-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ivory-50 font-medium mb-3">
                    Our Core Mission
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ivory-300/85 leading-relaxed font-light">
                    To provide comprehensive, unbiased advisory services that demystify statutory procedures, scrutinize developer credentials, optimize FSI potential under DCPR 2034, and coordinate agreement reviews that address member interests, project responsibilities and delay provisions.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gold/20 text-xs font-mono text-gold-400">
                  Principle: Uncompromising Due Diligence
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. OUR EXPERTISE */}
        <section className="py-20 sm:py-28 bg-navy-950 text-ivory border-t border-gold/20">
          <Container size="xl">
            <SectionHeading
              eyebrow="Comprehensive Practice"
              title={
                <span>
                  Specialized Advisory <span className="italic font-light text-gold-300">Capabilities.</span>
                </span>
              }
              subtitle="Structured advisory solutions covering the complete redevelopment and real estate lifecycle across Mumbai."
              align="center"
              theme="dark"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <div
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
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section aria-labelledby="values-heading" className="bg-ivory py-16 sm:py-24">
          <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading align="left" showDivider={false} eyebrow="The Standards We Uphold" title={<span id="values-heading">Five values.<br /><span className="italic text-gold-700">A practical approach.</span></span>} subtitle="The principles that shape how we discuss options, coordinate professional inputs and support property decisions." />
            </div>
            <ol className="min-w-0 divide-y divide-navy/15 border-t border-navy/15 lg:col-span-8">
              {coreValues.map((value) => <li key={value.number} className="grid gap-4 py-7 xl:grid-cols-12 xl:gap-7">
                <div className="flex items-start gap-4 xl:col-span-5"><span aria-hidden="true" className="pt-1 text-xs text-gold-700">{value.number}</span><h3 className="font-serif text-2xl leading-tight sm:text-3xl">{value.title}</h3></div>
                <p className="max-w-xl text-sm leading-7 text-charcoal/80 xl:col-span-7">{value.description}</p>
              </li>)}
            </ol>
          </Container>
        </section>

        <section aria-labelledby="about-leadership" className="border-t border-navy/10 bg-white/60 py-12 sm:py-16">
          <Container className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">Executive Leadership</p><h2 id="about-leadership" className="font-serif text-3xl sm:text-4xl">Mr. Sachin Murudkar</h2><p className="mt-3 text-xs text-charcoal/75">Founder &amp; Director</p></div>
            <p className="max-w-xl text-sm leading-7 text-charcoal/80 lg:col-span-5">The founder profile introduces the leadership perspective behind the company&apos;s redevelopment and property advisory practice.</p>
            <Link href="/founder" className="inline-flex min-h-12 items-center gap-3 text-sm text-navy hover:text-gold-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:col-span-3 lg:justify-self-end">Meet our founder <ArrowRight size={16} aria-hidden="true" /></Link>
          </Container>
        </section>

        {/* 7. CONSULTATION CTA */}
        <section className="py-20 sm:py-28 bg-navy-950 text-ivory border-t border-gold/25 relative overflow-hidden">
          <Container size="xl">
            <div className="p-8 sm:p-12 lg:p-16 rounded-xs bg-navy-900/90 border border-gold/30 grid grid-cols-1 xl:grid-cols-12 items-center gap-8">
              <div className="max-w-2xl space-y-4 text-left xl:col-span-7">
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.22em] text-gold-400 block">
                  Begin Your Redevelopment Journey
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-normal leading-tight">
                  Consult With Aishwarya Redevelopment Advisory
                </h2>
                <p className="font-sans text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
                  Connect with our senior advisory team for an independent, confidential feasibility orientation for your cooperative housing society or land parcel.
                </p>
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
        </section>
      </main>

      <Footer />
    </>
  );
}

