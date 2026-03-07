import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useRegionsAnimation
 * Scroll-triggered entrance animations for the Regions section.
 * Pass a ref pointing to the <section className="regions"> element.
 */
const useRegionsAnimation = (sectionRef) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ── Header label ─────────────────────────
      gsap.fromTo(
        ".regions-label",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".regions-header",
            start: "top 85%",
          },
        },
      );

      // ── Header title ─────────────────────────
      gsap.fromTo(
        ".regions-title",
        { opacity: 0, y: 40, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: ".regions-header",
            start: "top 85%",
          },
        },
      );

      // ── Header sub ───────────────────────────
      gsap.fromTo(
        ".regions-sub",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".regions-header",
            start: "top 85%",
          },
        },
      );

      // ── Panels stagger in from bottom ────────
      gsap.fromTo(
        ".regions-panel",
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".regions-panels",
            start: "top 85%",
          },
        },
      );

      // ── Accent lines scale in after panels ───
      gsap.fromTo(
        ".regions-panel-accent",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.12,
          transformOrigin: "left",
          scrollTrigger: {
            trigger: ".regions-panels",
            start: "top 85%",
          },
          delay: 0.3,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

export default useRegionsAnimation;
