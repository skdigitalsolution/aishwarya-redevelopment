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
        "flex flex-col space-y-3.5",
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
            "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] font-sans",
            isDark ? "text-gold-400" : "text-gold-600"
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
          "font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]",
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
            "flex items-center gap-2 pt-1 pb-0.5",
            isCenter && "justify-center w-full",
            align === "left" && "justify-start",
            isRight && "justify-end"
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              "h-px w-10 sm:w-16",
              isDark
                ? "bg-gradient-to-r from-transparent to-gold-400/70"
                : "bg-gradient-to-r from-transparent to-gold-500/60"
            )}
          />
          <span
            className={cn(
              "size-1.5 rotate-45 border",
              isDark
                ? "border-gold-400/80 bg-gold-400/30"
                : "border-gold-600/70 bg-gold-500/20"
            )}
          />
          <span
            className={cn(
              "h-px w-10 sm:w-16",
              isDark
                ? "bg-gradient-to-l from-transparent to-gold-400/70"
                : "bg-gradient-to-l from-transparent to-gold-500/60"
            )}
          />
        </div>
      )}

      {/* Subtitle / Advisory Context Description */}
      {subtitle && (
        <p
          className={cn(
            "font-sans text-base sm:text-lg leading-relaxed pt-1",
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
