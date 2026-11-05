"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight, Calendar, Phone } from "lucide-react";
import { Container } from "./Container";
import { BrandWordmark } from "@/components/brand";
import { cn } from "@/lib/utils";
import { COMPANY_DETAILS } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Services Overview",
        href: "/services",
        description: "Comprehensive advisory solutions across society lifecycle",
      },
      {
        label: "Redevelopment",
        href: "/redevelopment",
        description: "Fiduciary guidance for housing societies & landholders",
      },
      {
        label: "Land Banking",
        href: "/land-banking",
        description: "Strategic aggregation, title diligence & value realization",
      },
    ],
  },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "Land Banking", href: "/land-banking" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

/**
 * Filtered list for balanced desktop viewports (1024px - 1440px)
 * Groups Redevelopment and Land Banking under the Services dropdown to avoid crowding.
 */
const balancedDesktopItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services & Capabilities",
    href: "/services",
    children: [
      {
        label: "All Advisory Services",
        href: "/services",
        description: "Full-lifecycle guidance for societies, committees and developers",
      },
      {
        label: "Society Redevelopment",
        href: "/redevelopment",
        description: "Feasibility, DA structuring, tender selection & member consensus",
      },
      {
        label: "Land Banking & Aggregation",
        href: "/land-banking",
        description: "Strategic acquisition, title clearance & joint ventures",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const isLinkActive = (href: string) => {
    if (href.includes("#")) return pathname === "/" && activeSection === href.split("#")[1];
    return pathname === href;
  };

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Detect active in-view section
      const sections = ["home", "about", "services", "redevelopment", "land-banking", "projects", "team", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and outside click to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (servicesDropdownOpen) servicesToggleRef.current?.focus();
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  // Keep keyboard focus in the modal drawer and return it to its trigger on close.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const drawer = mobileMenuRef.current;
    const selector = 'a[href], button:not([disabled]), [tabindex="0"]';
    drawer?.querySelector<HTMLElement>(selector)?.focus();
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !drawer) return;
      const controls = Array.from(drawer.querySelectorAll<HTMLElement>(selector));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || !drawer.contains(document.activeElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !drawer.contains(document.activeElement))) {
        event.preventDefault();
        first?.focus();
      }
    };
    const closeAtDesktop = () => { if (window.innerWidth >= 1280) setMobileMenuOpen(false); };
    document.addEventListener("keydown", trapFocus);
    window.addEventListener("resize", closeAtDesktop);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      window.removeEventListener("resize", closeAtDesktop);
      previousFocus?.focus();
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 motion-safe:transition-[background-color,padding,border-color] duration-300",
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_24px_rgba(6,15,30,0.12)] py-3.5"
            : "bg-navy-950/90 backdrop-blur-xs border-b border-gold/15 py-4 sm:py-5"
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Typographic Wordmark */}
            <div className="shrink-0">
              <BrandWordmark variant="dark" />
            </div>

            {/* Center: Balanced Desktop Navigation (Balanced Mode for 1024px-1535px) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden xl:flex 2xl:hidden items-center space-x-1"
            >
              {balancedDesktopItems.map((item) => {
                const isActive =
                  isLinkActive(item.href) ||
                  (item.children &&
                    item.children.some(
                      (c) => isLinkActive(c.href)
                    ));

                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesDropdownOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        ref={servicesToggleRef}
                        onClick={() =>
                          setServicesDropdownOpen((prev) => !prev)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setServicesDropdownOpen((prev) => !prev);
                          }
                        }}
                        aria-expanded={servicesDropdownOpen}
                        aria-controls={servicesDropdownOpen ? "services-navigation-links" : undefined}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-sans tracking-wide transition-colors rounded-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold",
                          isActive
                            ? "text-gold font-medium"
                            : "text-ivory-100/90 hover:text-gold"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-200 text-gold-400",
                            servicesDropdownOpen && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dropdown Flyout */}
                      {servicesDropdownOpen && (
                        <div
                          id="services-navigation-links"
                          className="absolute top-full left-0 w-72 rounded-xs bg-navy-950 border border-gold/25 shadow-[0_18px_40px_rgba(6,15,30,0.2)] p-3 space-y-1"
                        >
                          <div className="px-3 py-1.5 border-b border-gold/15 mb-1">
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold">
                              Advisory Capabilities
                            </span>
                          </div>
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group block px-3 py-2 rounded-xs transition-colors hover:bg-navy-900/90 focus-visible:bg-navy-900 focus-visible:outline-hidden"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-serif text-sm font-medium text-ivory group-hover:text-gold transition-colors">
                                  {sub.label}
                                </span>
                                <ArrowUpRight className="size-3 text-gold-400/50 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                              </div>
                              {sub.description && (
                                <p className="text-[11px] text-ivory-300/70 font-sans leading-tight mt-0.5 line-clamp-1">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-2.5 text-xs font-sans tracking-wide transition-colors rounded-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold",
                      isActive
                        ? "text-gold font-medium"
                        : "text-ivory-100/90 hover:text-gold"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gold-400 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Center: Full 8-Item Desktop Navigation (Visible on 2xl screens: >= 1536px) */}
            <nav
              aria-label="Extended Primary Navigation"
              className="hidden 2xl:flex items-center space-x-1.5"
            >
              {navItems
                .filter((item) => item.label !== "Services" || !item.children)
                .concat(
                  navItems.filter(
                    (item) => item.label === "Services" && item.children
                  )[0]
                    ? [
                        {
                          label: "Services",
                          href: "/services",
                        },
                      ]
                    : []
                )
                // Distinct 8 items in requested order:
                // Home, About Us, Services, Redevelopment, Land Banking, Projects, Our Team, Contact
                .sort((a, b) => {
                  const order = [
                    "Home",
                    "About Us",
                    "Services",
                    "Redevelopment",
                    "Land Banking",
                    "Projects",
                    "Our Team",
                    "Contact",
                  ];
                  return order.indexOf(a.label) - order.indexOf(b.label);
                })
                .map((item) => {
                  const isActive = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative px-3 py-2 text-xs font-sans uppercase tracking-[0.12em] transition-colors rounded-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold",
                        isActive
                          ? "text-gold font-semibold"
                          : "text-ivory-100/85 hover:text-gold"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-gold-400"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  );
                })}
            </nav>

            {/* Right: Consultation CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Consultation CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-sans font-semibold uppercase tracking-[0.14em] text-navy bg-gold hover:bg-gold-300 transition-all duration-200 rounded-xs shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98]"
              >
                <Calendar className="size-3.5 text-navy-950" aria-hidden="true" />
                <span className="xl:hidden">Schedule a Consultation</span>
                <span className="hidden xl:inline">Consultation</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                ref={mobileToggleRef}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="xl:hidden inline-flex items-center justify-center p-2 rounded-xs text-ivory-100 hover:text-gold hover:bg-navy-900/60 border border-gold/25 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? (
                  <X className="size-5 text-gold" aria-hidden="true" />
                ) : (
                  <Menu className="size-5 text-gold" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-[60] xl:hidden"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div
            ref={mobileMenuRef}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy-950 border-l border-gold/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50 animate-in slide-in-from-right duration-250"
          >
            {/* Header in Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gold/20">
                <BrandWordmark
                  variant="dark"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-xs text-ivory-100 hover:text-gold border border-gold/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Close menu"
                >
                  <X className="size-5 text-gold" />
                </button>
              </div>

              {/* Navigation Links (All 8 Items Explicitly Accessible) */}
              <nav className="mt-8 space-y-1">
                {[
                  { label: "Home", href: "/", num: "01" },
                  { label: "About Us", href: "/about", num: "02" },
                  { label: "Services", href: "/services", num: "03" },
                  { label: "Redevelopment", href: "/redevelopment", num: "04" },
                  { label: "Land Banking", href: "/land-banking", num: "05" },
                  { label: "Projects", href: "/projects", num: "06" },
                  { label: "Our Team", href: "/our-team", num: "07" },
                  { label: "Contact", href: "/contact", num: "08" },
                ].map((item) => {
                  const isActive = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center justify-between px-3 py-3 rounded-xs transition-colors",
                        isActive
                          ? "bg-navy-900/80 border-l-2 border-gold text-gold"
                          : "text-ivory-100 hover:bg-navy-900/50 hover:text-gold"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gold-400/60 group-hover:text-gold transition-colors">
                          {item.num}
                        </span>
                        <span className="font-serif text-lg tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "size-4 text-gold-400/40 group-hover:text-gold transition-colors",
                          isActive && "text-gold"
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer / CTA Area */}
            <div className="pt-6 border-t border-gold/20 mt-8 space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-navy bg-gold hover:bg-gold-300 rounded-xs transition-colors"
              >
                <Calendar className="size-4 text-navy-950" />
                <span>Schedule a Consultation</span>
              </Link>

              <div className="text-center text-[11px] text-ivory-300/70 space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-gold-400">
                  <Phone className="size-3" />
                  <span>{COMPANY_DETAILS.contact.phone}</span>
                </div>
                <p>{COMPANY_DETAILS.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

