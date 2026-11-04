import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and resolves Tailwind CSS class conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number to Indian Rupee (INR) currency representation.
 * Supports standard real estate advisory metrics (Crores / Lakhs).
 *
 * @param amount - Numerical amount in INR
 * @param options - Formatting preferences
 * @returns Formatted currency string (e.g. "₹12.50 Cr" or "₹85 Lakhs")
 */
export function formatCurrencyINR(
  amount: number,
  options?: { compact?: boolean; precision?: number }
): string {
  const { compact = true, precision = 2 } = options || {};

  if (!compact) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: precision,
    }).format(amount);
  }

  const absAmount = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";

  if (absAmount >= 10000000) {
    const cr = absAmount / 10000000;
    return `${sign}₹${cr.toFixed(precision).replace(/\.?0+$/, "")} Cr`;
  }
  if (absAmount >= 100000) {
    const lakh = absAmount / 100000;
    return `${sign}₹${lakh.toFixed(precision).replace(/\.?0+$/, "")} Lakhs`;
  }

  return `${sign}₹${absAmount.toLocaleString("en-IN")}`;
}

/**
 * Formats square footage area with standard Indian real estate conventions.
 *
 * @param sqft - Area in square feet
 * @returns Formatted area string (e.g. "1,25,000 sq.ft.")
 */
export function formatSquareFeet(sqft: number): string {
  return `${sqft.toLocaleString("en-IN")} sq.ft.`;
}
