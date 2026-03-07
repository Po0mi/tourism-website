import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useAboutAnimation
 * Scroll-triggered entrance animations for the About section.
 * Pass a ref pointing to the <section className="about"> element.
 */
const useAboutAnimation = (sectionRef) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ── Top row label + eyebrow ───────────────
      gsap.fromTo(
        ".about-label",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-top",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".about-eyebrow",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: ".about-top",
            start: "top 85%",
          },
        },
      );

      // ── Vol number fades in from right ────────
      gsap.fromTo(
        ".about-vol-number",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-top",
            start: "top 85%",
          },
        },
      );

      // ── Big statement sweeps up ───────────────
      gsap.fromTo(
        ".about-statement",
        { opacity: 0, y: 50, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 88%",
          },
        },
      );

      // ── Body left text ────────────────────────
      gsap.fromTo(
        ".about-body-left",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-body",
            start: "top 85%",
          },
        },
      );

      // ── Body right text + CTA ─────────────────
      gsap.fromTo(
        ".about-body-right",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.12,
          scrollTrigger: {
            trigger: ".about-body",
            start: "top 85%",
          },
        },
      );

      // ── CTA line expands ──────────────────────
      gsap.fromTo(
        ".about-cta-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: ".about-body",
            start: "top 85%",
          },
          delay: 0.4,
        },
      );

      // ── Stats stagger up ──────────────────────
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 88%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

export default useAboutAnimation;
