"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandWordmarkProps {
  variant?: "dark" | "light";
  showSubtext?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * BrandWordmark Component
 * 
 * Editorial typographic wordmark for Aishwarya Redevelopment Advisory Company.
 * Used as a sophisticated text-based brand mark while the verified official client
 * vector identity asset is being finalized.
 */
export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  variant = "dark",
  showSubtext = true,
  className,
  onClick,
}) => {
  const isDark = variant === "dark";

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
            "size-2 rotate-45 border transition-transform duration-300 group-hover:rotate-90",
            isDark
              ? "border-gold-400 bg-gold-400/20"
              : "border-gold-600 bg-gold-500/20"
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            "font-serif text-xl sm:text-2xl font-semibold tracking-[0.06em] uppercase leading-none",
            isDark ? "text-ivory-50" : "text-navy"
          )}
        >
          Aishwarya
        </span>
      </div>

      {showSubtext && (
        <span
          className={cn(
            "mt-1 text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.24em] pl-4 leading-none transition-colors",
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

