"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandWordmarkProps {
  variant?: "dark" | "light";
  showSubtext?: boolean;
  className?: string;
  onClick?: () => void;
  showLogo?: boolean;
}

/**
 * BrandWordmark Component
 * 
 * Shared wordmark, with the original client image available for header branding.
 * The image is contained at its original aspect ratio without altering the artwork.
 */
export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  variant = "dark",
  showSubtext = true,
  className,
  onClick,
  showLogo = false,
}) => {
  const isDark = variant === "dark";

  if (showLogo) {
    return (
      <Link href="/" onClick={onClick}
        aria-label="Aishwarya Redevelopment Advisory Company - Home"
        className={cn("inline-flex min-w-0 items-center gap-3 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold", className)}>
        <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white sm:size-14 lg:size-16">
          <Image src="/images/logo.jpeg" alt="" width={1600} height={1426}
            unoptimized loading="eager"
            className="block h-full w-full object-contain" />
        </span>
        <span className="flex min-w-0 flex-col justify-center">
          <span className={cn("font-serif text-xl font-medium uppercase leading-tight tracking-[0.08em] sm:text-2xl", isDark ? "text-ivory-50" : "text-navy")}>Aishwarya</span>
          <span className={cn("mt-1 max-w-[190px] font-sans text-xs font-medium uppercase leading-4 tracking-[0.06em]", isDark ? "text-gold-400" : "text-gold-700")}>Redevelopment Advisory Company</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group inline-flex flex-col items-start select-none transition-opacity hover:opacity-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        isDark ? "focus-visible:ring-offset-navy" : "focus-visible:ring-offset-ivory",
        className
      )}
      aria-label="Aishwarya Redevelopment Advisory Company - Home"
      data-brand-status="temporary-wordmark-pending-official-logo"
    >
      <div className="flex items-center gap-2">
        {/* Subtle Architectural Geometry Indicator */}
        <span
          className={cn(
            "size-2 rotate-45 border",
            isDark
              ? "border-gold-400 bg-gold-400/20"
              : "border-gold-600 bg-gold-500/20"
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            "font-serif text-xl sm:text-2xl font-medium tracking-[0.1em] uppercase leading-none",
            isDark ? "text-ivory-50" : "text-navy"
          )}
        >
          Aishwarya
        </span>
      </div>

      {showSubtext && (
        <span
          className={cn(
            "mt-1.5 text-xs font-sans font-medium uppercase tracking-[0.12em] pl-4 leading-5 transition-colors",
            isDark ? "text-gold-400/90 group-hover:text-gold-300" : "text-gold-700"
          )}
        >
          Redevelopment Advisory
        </span>
      )}
    </Link>
  );
};

export default BrandWordmark;

