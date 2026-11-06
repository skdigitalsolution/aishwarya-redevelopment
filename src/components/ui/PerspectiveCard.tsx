"use client";

import { useEffect, useState, type HTMLAttributes, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { premiumMotion, usePremiumMotion } from "./premium-motion";
import "./perspective-card.css";

type PerspectiveCardProps = Pick<HTMLAttributes<HTMLElement>, "children" | "className" | "id" | "aria-label"> & {
  as?: "div" | "article";
  reveal?: false | "fade-up" | "image";
};

/** Layout-neutral surface: no padding, image scaling, cropping or extra tab stop.
 * Use existing links/buttons inside it for keyboard interaction.
 */
export function PerspectiveCard({ as = "div", reveal = false, children, className, ...props }: PerspectiveCardProps) {
  const { reducedMotion, canTilt } = usePremiumMotion();
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, premiumMotion.spring);
  const springY = useSpring(y, premiumMotion.spring);
  const clamp = (angle: number) => Math.max(-premiumMotion.maxTilt, Math.min(premiumMotion.maxTilt, angle));
  const rotateX = useTransform(springX, clamp);
  const rotateY = useTransform(springY, clamp);
  const Surface = as === "article" ? motion.article : motion.div;

  useEffect(() => {
    if (canTilt) return;
    x.jump(0); y.jump(0); springX.jump(0); springY.jump(0);
  }, [canTilt, x, y, springX, springY]);

  function resetTilt() { x.set(0); y.set(0); }

  function move(event: PointerEvent<HTMLElement>) {
    if (!canTilt || event.pointerType !== "mouse") return;
    // Clamp pointer coordinates and spring output, including rapid direction changes.
    const surface = event.currentTarget;
    const rect = surface.getBoundingClientRect();
    const horizontal = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    const vertical = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    x.set(-vertical * premiumMotion.maxTilt);
    y.set(horizontal * premiumMotion.maxTilt);
  }

  const enter = reducedMotion || !reveal
    ? { opacity: 1, y: 0 }
    : { opacity: reveal === "image" ? [0.6, 1] : [0, 1], y: [reveal === "image" ? 20 : premiumMotion.revealDistance, 0] };

  return (
    <Surface
      {...props}
      data-perspective-card
      data-motion-owned
      data-tilt-enabled={canTilt}
      data-pressed={pressed}
      data-reveal={reveal || undefined}
      className={cn("premium-perspective-card", className)}
      initial={false}
      whileInView={enter}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : reveal === "image" ? premiumMotion.imageDuration : premiumMotion.fadeDuration, ease: premiumMotion.ease }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={move}
      onPointerDown={(event) => { if (event.pointerType !== "mouse") setPressed(true); }}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => { resetTilt(); setPressed(false); }}
      onPointerCancel={() => { resetTilt(); setPressed(false); }}
      onFocusCapture={resetTilt}
    >
      {children}
    </Surface>
  );
}
