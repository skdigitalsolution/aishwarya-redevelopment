import React from "react";
import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types";

/**
 * SectionHeading Component
 * 
 * Editorial heading component crafted for luxury real estate advisory presentation.
 * Supports light (ivory/white surfaces) and dark (deep navy surfaces) themes,
 * responsive serif typography, tracked gold eyebrows, and decorative accents.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  titleAs: TitleTag = "h2",
  showDivider = true,
  badge,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "flex flex-col space-y-5",
        isCenter && "items-center text-center mx-auto max-w-3xl",
        align === "left" && "items-start text-left max-w-3xl",
        isRight && "items-end text-right ml-auto max-w-3xl",
        className
      )}
    >
      {/* Optional Custom Badge or Tag */}
      {badge && <div className="mb-1">{badge}</div>}

      {/* Eyebrow Label with Editorial Tracking */}
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-3 text-[10px] sm:text-[11px] leading-5 font-semibold uppercase tracking-[0.22em] font-sans",
            isDark ? "text-gold-400" : "text-gold-700"
          )}
        >
          {/* Subtle accent bar for left/right alignment */}
          {!isCenter && (
            <span
              className={cn(
                "h-px w-5",
                isDark ? "bg-gold-400/60" : "bg-gold-500/70"
              )}
              aria-hidden="true"
            />
          )}
          <span>{eyebrow}</span>
          {!isCenter && isRight && (
            <span
              className={cn(
                "h-px w-5",
                isDark ? "bg-gold-400/60" : "bg-gold-500/70"
              )}
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {/* Main Editorial Title */}
      <TitleTag
        className={cn(
          "font-serif text-4xl md:text-5xl font-normal tracking-[-0.025em] leading-[1.08]",
          isDark ? "text-ivory-50" : "text-navy",
          titleClassName
        )}
      >
        {title}
      </TitleTag>

      {/* Editorial Muted Gold Divider */}
      {showDivider && (
        <div
          className={cn(
            "flex items-center pt-2 pb-1",
            isCenter && "justify-center w-full",
            align === "left" && "justify-start",
            isRight && "justify-end"
          )}
          aria-hidden="true"
        >
          <span className={cn("h-px w-16 sm:w-20", isDark ? "bg-gold/60" : "bg-gold/70")} />
        </div>
      )}

      {/* Subtitle / Advisory Context Description */}
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl font-sans text-sm sm:text-base leading-7 pt-1",
            isDark ? "text-ivory-300/85 font-light" : "text-charcoal-500",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
