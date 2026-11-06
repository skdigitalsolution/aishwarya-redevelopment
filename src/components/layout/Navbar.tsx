"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavbarLink as Link, useNavbarScrollReset, hasNavbarPageNavigation } from "./NavbarLink";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight, Calendar, Phone } from "lucide-react";
import { Container } from "./Container";
import { BrandWordmark } from "@/components/brand";
import { AboutNavigation } from "./AboutNavigation";
import { cn } from "@/lib/utils";
import { COMPANY_DETAILS } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
}

/**
 * Desktop navigation shared across all viewports from 1024px
 * Groups Redevelopment and Land Banking under the Services dropdown to avoid crowding.
 */
const balancedDesktopItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
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
  useNavbarScrollReset();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const isLinkActive = (href: string) => pathname === href;

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

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
      const controls = Array.from(drawer.querySelectorAll<HTMLElement>(selector)).filter(element => element.getClientRects().length > 0);
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
    const closeAtDesktop = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    document.addEventListener("keydown", trapFocus);
    window.addEventListener("resize", closeAtDesktop);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      window.removeEventListener("resize", closeAtDesktop);
      requestAnimationFrame(() => {
        if (previousFocus?.isConnected && previousFocus.getClientRects().length) previousFocus.focus({ preventScroll: true });
      });
    };
  }, [mobileMenuOpen]);

  // Preserve scroll position and isolate the modal from background controls.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const body = document.body;
    const scroll = { x: window.scrollX, y: window.scrollY };
    const previous = { overflow: body.style.overflow, position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width };
    const background = Array.from(document.querySelectorAll<HTMLElement>("header, main, footer"));
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    Object.assign(body.style, { overflow: "hidden", position: "fixed", top: "-" + scroll.y + "px", left: "-" + scroll.x + "px", width: "100%" });
    const closeOnHistoryNavigation = () => setMobileMenuOpen(false);
    window.addEventListener("popstate", closeOnHistoryNavigation);
    return () => {
      Object.assign(body.style, previous);
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      if (!hasNavbarPageNavigation()) window.scrollTo({ left: scroll.x, top: scroll.y, behavior: "instant" });
      window.removeEventListener("popstate", closeOnHistoryNavigation);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a href={pathname === "/services" ? "#services-main" : "#main-content"} className="fixed top-3 left-4 z-[70] -translate-y-32 bg-ivory px-5 py-3 text-sm font-semibold text-navy focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Skip to main content</a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-3 motion-safe:transition-[background-color,border-color] duration-300",
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_24px_rgba(6,15,30,0.12)]"
            : "bg-navy-950/90 backdrop-blur-xs border-b border-gold/15"
        )}
      >
        <Container size="xl" className="lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Original client logo and complete company name. */}
            <div className="flex min-w-0 shrink-0 items-center">
              <BrandWordmark variant="dark" showLogo />
            </div>

            {/* Center: Approved six-item desktop navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden shrink-0 items-center space-x-1 whitespace-nowrap lg:flex"
            >
              {balancedDesktopItems.map((item) => {
                const isActive =
                  isLinkActive(item.href) ||
                  (item.children &&
                    item.children.some(
                      (c) => isLinkActive(c.href)
                    ));

                if (item.href === "/about") return <AboutNavigation key={pathname + "-about-desktop"} pathname={pathname} onOpen={() => setServicesDropdownOpen(false)} />;

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
                          "inline-flex min-h-11 items-center gap-1.5 px-2 xl:px-3 py-2.5 text-xs font-sans tracking-wide transition-colors rounded-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold",
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
                            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold-400 font-semibold">
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
                                <p className="text-xs text-ivory-300/70 font-sans leading-tight mt-0.5 line-clamp-1">
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
                      "relative inline-flex min-h-11 items-center px-2 xl:px-3 py-2.5 text-xs font-sans tracking-wide transition-colors rounded-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-gold",
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

            {/* Right: Consultation CTA & Mobile Toggle */}
            <div className="flex shrink-0 items-center gap-3 whitespace-nowrap">
              {/* Consultation CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex min-h-11 items-center gap-2 px-4 py-2 text-xs font-sans font-semibold uppercase tracking-[0.14em] text-navy bg-gold hover:bg-gold-300 transition-all duration-200 rounded-xs shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98]"
              >
                <Calendar className="size-3.5 text-navy-950" aria-hidden="true" />
                <span className="lg:hidden">Discuss a Consultation</span>
                <span className="hidden lg:inline">Consultation</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                ref={mobileToggleRef}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden inline-flex size-11 shrink-0 items-center justify-center p-2 rounded-xs text-ivory-100 hover:text-gold hover:bg-navy-900/60 border border-gold/25 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
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
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity motion-safe:animate-in motion-safe:fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div
            ref={mobileMenuRef}
            className="fixed inset-y-0 right-0 w-full max-w-sm overscroll-contain bg-navy-950 border-l border-gold/30 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-50 motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-250"
          >
            {/* Header in Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gold/20">
                <BrandWordmark
                  variant="dark"
                  showLogo
                  onClick={() => setMobileMenuOpen(false)}
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-xs text-ivory-100 hover:text-gold border border-gold/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Close menu"
                >
                  <X className="size-5 text-gold" />
                </button>
              </div>

              {/* Navigation Links (All 8 Items Explicitly Accessible) */}
              <nav aria-label="Mobile primary navigation" className="mt-6 space-y-1">
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
                  if (item.href === "/about") return <AboutNavigation key={pathname + "-about-mobile"} pathname={pathname} mobile onNavigate={() => setMobileMenuOpen(false)} />;
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
                <span>Discuss a Consultation</span>
              </Link>

              <div className="text-center text-xs text-ivory-300/70 space-y-1">
                <a href={`tel:${COMPANY_DETAILS.contact.phoneTel}`} className="inline-flex min-h-11 items-center justify-center gap-2 text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                  <Phone className="size-3" />
                  <span>{COMPANY_DETAILS.contact.phone}</span>
                </a>
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

