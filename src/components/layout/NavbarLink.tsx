"use client";

import { useEffect, type ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation intent survives the old page's Navbar unmounting. History and
// non-navbar links never set this value, so their scroll restoration stays native.
let requestedPath: string | null = null;

export function hasNavbarPageNavigation() {
  return requestedPath !== null;
}

export function useNavbarScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    if (requestedPath !== pathname) return;
    const frame = requestAnimationFrame(() => {
      if (requestedPath !== pathname) return;
      requestedPath = null;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
}

export function NavbarLink({ onNavigate, ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} scroll={true} onNavigate={(event) => {
    onNavigate?.(event);
    const href = typeof props.href === "string" ? props.href : props.href.pathname;
    if (!href) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.hash || url.pathname === window.location.pathname) return;
    requestedPath = url.pathname;
  }} />;
}
