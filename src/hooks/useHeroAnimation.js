import { useEffect } from "react";
import gsap from "gsap";

/**
 * useHeroAnimation
 * Drives all entrance animations for the Hero section.
 * Pass a ref pointing to the .hero-container element.
 */
const useHeroAnimation = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ── Overlay fade in ───────────────────────
      tl.fromTo(
        ".hero-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        0,
      );

      // ── Top left tag ──────────────────────────
      tl.fromTo(
        ".hero-tag-vertical",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.3,
      );

      // ── Top right issue tag ───────────────────
      tl.fromTo(
        ".hero-issue",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.3,
      );

      // ── Main title top (PHILIPPINES) ──────────
      tl.fromTo(
        ".hero-title-top",
        { opacity: 0, y: 60, skewY: 0 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1 },
        0.5,
      );

      // ── Center divider line ───────────────────
      tl.fromTo(
        ".hero-divider-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, transformOrigin: "center" },
        0.8,
      );

      // ── Center divider text ───────────────────
      tl.fromTo(
        ".hero-divider-text",
        { opacity: 0, letterSpacing: "0.5em" },
        { opacity: 1, letterSpacing: "0.3em", duration: 0.7 },
        0.9,
      );

      // ── Sub text ──────────────────────────────
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.0,
      );

      // ── CTA buttons ───────────────────────────
      tl.fromTo(
        ".hero-cta-primary",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.1,
      );
      tl.fromTo(
        ".hero-cta-ghost",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.2,
      );

      // ── Bottom title (7,641 ISLANDS) ──────────
      tl.fromTo(
        ".hero-title-bottom",
        { opacity: 0, y: -60, skewY: -3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1 },
        0.6,
      );

      // ── Coords ────────────────────────────────
      tl.fromTo(
        ".hero-coords",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6 },
        1.1,
      );

      // ── Stats staggered ───────────────────────
      tl.fromTo(
        ".hero-stat",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        1.2,
      );
      tl.fromTo(
        ".hero-stat-divider",
        { opacity: 0, scaleY: 0 },
        {
          opacity: 1,
          scaleY: 1,
          duration: 0.4,
          stagger: 0.1,
          transformOrigin: "center",
        },
        1.3,
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

export default useHeroAnimation;
