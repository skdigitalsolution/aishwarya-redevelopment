import React from "react";
import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types";

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

/**
 * Reusable Container component.
 * Provides consistent horizontal constraints, luxury editorial margins, and responsive padding.
 */
export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      as: Component = "div",
      size = "xl",
      padding = true,
      className,
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          "w-full mx-auto",
          sizeClasses[size],
          padding && "px-4 sm:px-6 md:px-8 lg:px-12",
          className
        ),
        ...props,
      },
      children
    );
  }
);

Container.displayName = "Container";

export default Container;
