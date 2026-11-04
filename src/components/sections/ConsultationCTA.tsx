"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_DETAILS } from "@/lib/constants";

export const ConsultationCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    societyName: "",
    location: "",
  });

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Consultation and Inquiries"
      className="relative py-24 sm:py-32 lg:py-36 bg-navy-950 text-ivory overflow-hidden border-t border-gold/25"
    >
      {/* Background Architectural Patterns & Subtle Radial Scrim */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,166,107,0.09),transparent_70%)] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeIn}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-gold-400">
                Let&apos;s Build Your Future
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight leading-[1.12]">
              Your Property Deserves the{" "}
              <span className="italic font-light text-gold-300">Right Guidance.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-ivory-200/90 font-light leading-relaxed max-w-xl">
              Take the first step towards a transparent and well-planned redevelopment journey.
            </p>

            {/* Trust Assurances */}
            <div className="pt-4 space-y-2.5">
              {[
                "Strict compliance with Section 79A and Maharashtra Co-operative Societies Act",
                "Independent fiduciary representation protecting member carpet area and corpus",
                "Zero conflict of interest with developers or commercial contracting agencies",
              ].map((assurance) => (
                <div key={assurance} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-300/80 font-light">
                  <ShieldCheck className="size-4 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{assurance}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.contact.phoneTel}`}
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-all duration-300 rounded-xs shadow-lg active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Phone className="size-4 text-navy-950" aria-hidden="true" />
                <span>Call Our Team: {COMPANY_DETAILS.contact.phone}</span>
              </a>

              <a
                href="#consultation-form"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.16em] text-ivory-100 hover:text-gold border border-gold/40 hover:border-gold hover:bg-navy-900/60 transition-all duration-300 rounded-xs active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Calendar className="size-4 text-gold-400" aria-hidden="true" />
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Consultation Inquiry Form (5 cols) */}
          <motion.div
            id="consultation-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeIn}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 sm:p-10 rounded-xs bg-navy-900/90 border border-gold/30 shadow-2xl relative">
              <div className="pb-5 border-b border-gold/20 mb-6">
                <h3 className="font-serif text-2xl text-ivory-50 font-medium">
                  Request an Advisory Session
                </h3>
                <p className="font-sans text-xs text-ivory-300/70 mt-1">
                  Confidential preliminary review for managing committees &amp; property owners.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="size-12 mx-auto rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold-400">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h4 className="font-serif text-xl text-ivory-50 font-medium">
                    Consultation Request Received
                  </h4>
                  <p className="font-sans text-xs text-ivory-300/80 leading-relaxed max-w-xs mx-auto">
                    Our senior redevelopment advisory team will contact your managing committee within 24 business hours.
                  </p>
                  <p className="font-mono text-xs text-gold-400 pt-2">
                    Direct Helpline: {COMPANY_DETAILS.contact.phone}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-sans uppercase tracking-[0.14em] text-gold-400/90 font-medium mb-1.5"
                    >
                      Representative Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Secretary / Chairman / Landowner"
                      className="w-full px-3.5 py-2.5 rounded-xs bg-navy-950/80 border border-gold/25 text-ivory-100 placeholder:text-ivory-300/40 text-xs sm:text-sm font-sans focus-visible:outline-hidden focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-sans uppercase tracking-[0.14em] text-gold-400/90 font-medium mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xs bg-navy-950/80 border border-gold/25 text-ivory-100 placeholder:text-ivory-300/40 text-xs sm:text-sm font-sans focus-visible:outline-hidden focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-society"
                      className="block text-xs font-sans uppercase tracking-[0.14em] text-gold-400/90 font-medium mb-1.5"
                    >
                      Society or Estate Name
                    </label>
                    <input
                      id="contact-society"
                      type="text"
                      value={formData.societyName}
                      onChange={(e) => setFormData({ ...formData, societyName: e.target.value })}
                      placeholder="e.g. Navjeevan CHS / Private Land"
                      className="w-full px-3.5 py-2.5 rounded-xs bg-navy-950/80 border border-gold/25 text-ivory-100 placeholder:text-ivory-300/40 text-xs sm:text-sm font-sans focus-visible:outline-hidden focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-xs font-sans uppercase tracking-[0.14em] text-gold-400/90 font-medium mb-1.5"
                    >
                      Location in Mumbai / MMR
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bandra, Dadar, Borivali, Thane"
                      className="w-full px-3.5 py-2.5 rounded-xs bg-navy-950/80 border border-gold/25 text-ivory-100 placeholder:text-ivory-300/40 text-xs sm:text-sm font-sans focus-visible:outline-hidden focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy-950 bg-gold hover:bg-gold-300 transition-colors rounded-xs shadow-md active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="size-3.5 text-navy-950" />
                  </button>

                  <p className="text-[10px] text-center text-ivory-300/60 font-sans pt-1">
                    Strict fiduciary confidentiality guaranteed. No data shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ConsultationCTA;

