"use client";

import { useEffect, type ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation intent survives the old page's Navbar unmounting. History and
// non-navbar links never set this value, so their scroll restoration stays native.
let requestedPath: string | null = null;

function normalizePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const localPath = basePath && (path === basePath || path.startsWith(`${basePath}/`))
    ? path.slice(basePath.length)
    : path;
  return localPath.replace(/\/+$/, "") || "/";
}

function resetScroll(path: string) {
  if (requestedPath !== path) return;
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  requestedPath = null;
}

export function hasNavbarPageNavigation() {
  return requestedPath !== null;
}

export function useNavbarScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    const path = normalizePath(pathname);
    if (requestedPath !== path) return;
    const frame = requestAnimationFrame(() => {
      resetScroll(path);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
}

export function NavbarLink({ onNavigate, ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} scroll={true} onNavigate={(event) => {
    let cancelled = false;
    onNavigate?.({ preventDefault() { cancelled = true; event.preventDefault(); } });
    if (cancelled) return;
    const href = typeof props.href === "string" ? props.href : props.href.pathname;
    if (!href) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.hash) return;
    const path = normalizePath(url.pathname);
    requestedPath = path;
    // The active page does not trigger a pathname effect. Wait until the mobile
    // drawer has released its body scroll lock before scrolling that page.
    if (path === normalizePath(window.location.pathname)) {
      requestAnimationFrame(() => requestAnimationFrame(() => resetScroll(path)));
    }
  }} />;
}
