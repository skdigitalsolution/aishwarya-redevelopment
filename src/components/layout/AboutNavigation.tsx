"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { NavbarLink } from "./NavbarLink";
import { premiumMotion, usePremiumMotion } from "@/components/ui/premium-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Company Overview", href: "/about" },
  { label: "Founder & Leadership", href: "/founder" },
];

export function AboutNavigation({ pathname, mobile = false, onNavigate, onOpen }: {
  pathname: string; mobile?: boolean; onNavigate?: () => void; onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const { reducedMotion } = usePremiumMotion();
  const current = pathname.replace(/\/$/, "") || "/";
  const active = links.some(link => link.href === current);
  const id = mobile ? "mobile-about-navigation-links" : "about-navigation-links";

  function expand() { setOpen(true); onOpen?.(); }

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  return <div ref={root} className="relative"
    onPointerEnter={event => { if (!mobile && event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) expand(); }}
    onPointerLeave={event => { if (!mobile && event.pointerType === "mouse") setOpen(false); }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}
    onKeyDown={event => {
      if (event.key === "Escape" && open) {
        event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus();
      }
    }}>
    <button ref={trigger} type="button" aria-expanded={open} aria-controls={open ? id : undefined}
      onClick={() => { if (open) setOpen(false); else expand(); }}
      onKeyDown={event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (open) setOpen(false); else expand();
        }
      }}
      className={cn(mobile
        ? "flex min-h-12 w-full items-center justify-between rounded-xs px-3 py-3 text-left focus-visible:outline-2 focus-visible:outline-gold"
        : "inline-flex min-h-11 items-center gap-1.5 rounded-xs px-2 py-2.5 text-xs font-sans tracking-wide transition-colors xl:px-3 focus-visible:outline-2 focus-visible:outline-gold",
        active ? "text-gold font-medium" : "text-ivory-100/90 hover:text-gold",
        mobile && active && "border-l-2 border-gold bg-navy-900/80")}>
      {mobile ? <span className="flex items-center gap-3"><span className="font-mono text-xs text-gold-400/60">02</span><span className="font-serif text-lg tracking-wide">About Us</span></span> : <span>About Us</span>}
      <ChevronDown size={14} aria-hidden="true" className={cn("text-gold motion-safe:transition-transform", open && "rotate-180")} />
    </button>
    {open && <motion.div id={id} initial={reducedMotion ? false : { opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.2, ease: premiumMotion.ease }}
      className={mobile ? "ml-9 border-l border-gold/30 py-2 pl-3" : "absolute left-0 top-full w-64 space-y-1 rounded-xs border border-gold/25 bg-navy-950 p-3 shadow-xl"}>
      {links.map(link => <NavbarLink key={link.href} href={link.href} aria-current={current === link.href ? "page" : undefined}
        onClick={() => { setOpen(false); onNavigate?.(); }}
        className={cn("flex min-h-11 items-center justify-between gap-3 rounded-xs px-3 py-3 text-sm transition-colors hover:bg-navy-900 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold",
          current === link.href ? "bg-navy-900 text-gold" : "text-ivory")}>
        <span>{link.label}</span><ArrowUpRight size={14} aria-hidden="true" />
      </NavbarLink>)}
    </motion.div>}
  </div>;
}

