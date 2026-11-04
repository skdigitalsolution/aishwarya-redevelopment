import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { RedevelopmentProcessSection } from "@/components/sections/RedevelopmentProcessSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { LandBankingSection } from "@/components/sections/LandBankingSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export default function Home() {
  return (
    <>
      {/* Premium Luxury Navigation Header */}
      <Navbar />

      <main className="bg-ivory text-charcoal flex-1">
        {/* Phase 2: Editorial Luxury Hero Section */}
        <Hero />

        {/* Phase 3: Premium Editorial About Aishwarya Section */}
        <AboutSection />

        {/* Phase 4: Distinctive Luxury Editorial Services Section */}
        <ServicesSection />

        {/* Phase 5: Section 1 — Why Choose Aishwarya */}
        <WhyChooseUsSection />

        {/* Phase 5: Section 2 — Six-Step Redevelopment Process */}
        <RedevelopmentProcessSection />

        {/* Phase 6: Section 1 — Founder & Director Spotlight */}
        <FounderSection />

        {/* Phase 6: Section 2 — Strategic Land Banking Showcase */}
        <LandBankingSection />

        {/* Phase 7: Section 1 — Premium Consultation CTA */}
        <ConsultationCTA />
      </main>

      {/* Phase 7: Section 2 — Reusable Global Corporate Footer */}
      <Footer />
    </>
  );
}
