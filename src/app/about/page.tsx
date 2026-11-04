import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "About Us | Aishwarya Redevelopment Advisory Company",
  description:
    "Learn about Aishwarya Redevelopment Advisory Company — Mumbai's independent real estate advisory firm specializing in society redevelopment, title diligence, and strategic land advisory.",
};

const expertiseAreas = [
  {
    title: "Society Redevelopment Advisory",
    description: "End-to-end fiduciary guidance for cooperative housing societies navigating developer-led transformation.",
    icon: Building2,
  },
  {
    title: "Self-Redevelopment Guidance",
    description: "Empowering societies to retain 100% surplus equity, enhanced carpet area, and autonomy.",
    icon: Award,
  },
  {
    title: "Developer Due Diligence & Tendering",
    description: "Auditing developer balance sheets, past project velocity, and structuring binding competitive tenders.",
    icon: FileCheck2,
  },
  {
    title: "Legal Title Investigation",
    description: "30-year search reports, deemed conveyance clearance, and airtight Development Agreement covenants.",
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
      "Every procedural step is conducted in strict compliance with Maharashtra cooperative laws, Section 79A mandates, RERA provisions, and municipal circulars, shielding committees from statutory risk.",
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
      "We structure redevelopment agreements to maximize member carpet area, secure bank guarantees, optimize commercial corpus, and guarantee enduring architectural quality.",
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

      <main className="bg-ivory text-charcoal flex-1 pt-24 sm:pt-32">
        {/* 1. ABOUT HERO */}
        <section className="relative py-16 sm:py-24 bg-navy-950 text-ivory overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero-architecture-fallback.jpg"
              alt="Contemporary architectural redevelopment in Mumbai"
              fill
              priority
              quality={85}
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/70" />
          </div>

          <Container size="xl" className="relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                  About Aishwarya
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 font-normal leading-[1.12] tracking-tight">
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
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden border border-gold/30 shadow-xl bg-navy-950">
                  <Image
                    src="/images/projects/about-redevelopment-study.jpg"
                    alt="Mumbai residential redevelopment facade study"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xs bg-navy-950/90 backdrop-blur-md border border-gold/30 text-ivory">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold block mb-1">
                      Fiduciary Governance
                    </span>
                    <p className="font-serif text-sm text-ivory-50">
                      Independent society representation across Mumbai Metropolitan Region
                    </p>
                  </div>
                </div>
              </div>

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
                    Operating without commercial ties to construction contractors or speculative developers, our firm ensures that managing committees receive unbiased analysis, airtight legal documentation, and clear member consensus.
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
                  Clarity of Purpose. <span className="italic font-light text-gold-700">Certainty of Outcome.</span>
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
                    To establish a benchmark of transparency and fiduciary rigor in Mumbai&apos;s redevelopment landscape — ensuring that every housing society navigates the redevelopment journey with complete legal protection, equitable financial returns, and architectural permanence.
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
                    To provide comprehensive, unbiased advisory services that demystify statutory procedures, scrutinize developer credentials, optimize FSI potential under DCPR 2034, and enforce binding contracts that protect member homes from delay and compromise.
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

        {/* 5. CORE VALUES */}
        <section className="py-20 sm:py-28 bg-ivory border-t border-gold/20">
          <Container size="xl">
            <SectionHeading
              eyebrow="The Standards We Uphold"
              title={
                <span>
                  Our Five Core <span className="italic font-light text-gold-700">Values.</span>
                </span>
              }
              subtitle="The non-negotiable operational principles that govern every advisory mandate we undertake."
              align="center"
              theme="light"
            />

            <div className="mt-14 space-y-4">
              {coreValues.map((val) => (
                <div
                  key={val.number}
                  className="p-6 sm:p-8 rounded-xs bg-white border border-gold/20 hover:border-gold/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5 max-w-xl">
                    <span className="font-mono text-sm font-semibold text-gold-600 tracking-wider pt-1 shrink-0">
                      {val.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-navy font-medium">
                        {val.title}
                      </h3>
                      <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-gold-700 font-medium block mt-0.5">
                        {val.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light max-w-xl">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. FOUNDER SPOTLIGHT */}
        <section className="py-20 sm:py-28 bg-white border-t border-gold/20">
          <Container size="xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] w-full rounded-xs bg-navy-950 p-8 flex flex-col justify-between border border-gold/35 shadow-2xl text-ivory">
                  <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold">
                      Founder Profile
                    </span>
                    <span className="size-1.5 rotate-45 bg-gold-400" />
                  </div>

                  <div className="my-auto text-center py-6">
                    <div className="size-24 mx-auto rounded-full border-2 border-gold/40 flex items-center justify-center bg-navy-900/90 mb-4">
                      <span className="font-serif text-3xl font-semibold tracking-wider text-gold-300">
                        SM
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-ivory-50 font-medium">
                      Mr. Sachin Murudkar
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-400 font-medium mt-1">
                      Founder &amp; Director
                    </p>
                    <div className="mt-4 px-3 py-1.5 rounded-xs bg-navy-900/80 border border-gold/20 max-w-xs mx-auto">
                      <p className="font-mono text-[10px] text-gold-300/80">
                        Target: /images/founder/founder-portrait.jpg
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-ivory-300/80 font-sans">
                    <span>Aishwarya Advisory</span>
                    <span className="text-gold-400 font-mono text-[11px]">Mumbai</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-gold-600" />
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-gold-700">
                    Executive Leadership
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal leading-tight">
                  Mr. Sachin Murudkar
                </h2>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-700 font-medium">
                  Founder &amp; Director
                </p>

                <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light">
                  <p>
                    As the Founder &amp; Director of Aishwarya Redevelopment Advisory Company, Mr. Sachin Murudkar leads the firm with a deep commitment to protecting housing society interests across Mumbai.
                  </p>
                  <p>
                    His professional practice encompasses comprehensive society redevelopment strategy, title due diligence, municipal regulatory coordination under Maharashtra Section 79A, and strategic land valuation for property owners and estates.
                  </p>
                  <p className="text-charcoal/75 text-sm">
                    Under his leadership, Aishwarya has earned a reputation for technical precision, unbiased fiduciary loyalty, and structured stakeholder management.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phoneTel}`}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-ivory-50 bg-navy hover:bg-navy-900 border border-gold/40 rounded-xs transition-colors"
                  >
                    <Phone className="size-3.5 text-gold-400" />
                    <span>Contact Leadership</span>
                  </a>

                  <span className="text-xs font-sans text-charcoal/60">
                    Dedicated Founder Profile Route in Preparation
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. CONSULTATION CTA */}
        <section className="py-20 sm:py-28 bg-navy-950 text-ivory border-t border-gold/25 relative overflow-hidden">
          <Container size="xl">
            <div className="p-8 sm:p-12 lg:p-16 rounded-xs bg-navy-900/90 border border-gold/30 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl space-y-4 text-center lg:text-left">
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

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
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
                  <span>Schedule Online</span>
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

