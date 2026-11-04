"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { COMPANY_DETAILS } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Advisory Services", href: "#services" },
  { label: "Redevelopment Process", href: "#redevelopment" },
  { label: "Strategic Land Banking", href: "#land-banking" },
  { label: "Executive Leadership", href: "#team" },
  { label: "Consultation", href: "#contact" },
];

const serviceQuickLinks = [
  { label: "Society Redevelopment Advisory", href: "#services" },
  { label: "Self-Redevelopment Guidance", href: "#services" },
  { label: "Legal & Title Due Diligence", href: "#services" },
  { label: "Architectural Feasibility & FSI", href: "#services" },
  { label: "Developer Due Diligence & Tendering", href: "#services" },
  { label: "Strategic Land Banking & JDA", href: "#land-banking" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#060F1E] text-ivory border-t border-gold/20 relative overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,166,107,0.04),transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-gold/15">
          {/* Column 1: Brand Wordmark & Factual Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandWordmark variant="dark" />

            <p className="font-sans text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light max-w-sm">
              Aishwarya Redevelopment Advisory Company is an independent real estate and redevelopment advisory firm providing fiduciary guidance, legal compliance, and strategic valuation for cooperative housing societies and landowners in Mumbai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-sans text-gold-400/90">
              <ShieldCheck className="size-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span>Independent Fiduciary Representation • Section 79A Mandate</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base text-ivory-50 font-medium tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-sans text-ivory-300/75 hover:text-gold transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advisory Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base text-ivory-50 font-medium tracking-wide">
              Advisory Services
            </h4>
            <ul className="space-y-2.5">
              {serviceQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs font-sans text-ivory-300/75 hover:text-gold transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base text-ivory-50 font-medium tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-sans text-ivory-300/80">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-gold-400/80 font-medium mb-1">
                  Advisory Helpline
                </span>
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phoneTel}`}
                  className="inline-flex items-center gap-2 text-ivory-100 hover:text-gold font-medium transition-colors"
                >
                  <Phone className="size-3.5 text-gold-400" />
                  <span>{COMPANY_DETAILS.contact.phone}</span>
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-gold-400/80 font-medium mb-1">
                  Location
                </span>
                <div className="flex items-start gap-2 text-ivory-200/90">
                  <MapPin className="size-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory-300/60">
          <p>
            &copy; {currentYear} {COMPANY_DETAILS.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-ivory-300/50">
              Fiduciary Real Estate &amp; Redevelopment Advisory
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold px-2 py-1 rounded-xs"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

