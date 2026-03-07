import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useDestinationsAnimation
 * Scroll-triggered entrance animations for the Destinations section.
 * Pass a ref pointing to the <section className="destinations"> element.
 */
const useDestinationsAnimation = (sectionRef) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ── Header label + title ─────────────────
      gsap.fromTo(
        ".destinations-label",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".destinations-header",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".destinations-title",
        { opacity: 0, y: 40, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".destinations-header",
            start: "top 85%",
          },
          delay: 0.1,
        },
      );

      gsap.fromTo(
        ".destinations-sub",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".destinations-header",
            start: "top 85%",
          },
          delay: 0.2,
        },
      );

      gsap.fromTo(
        ".destinations-view-all",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".destinations-header",
            start: "top 85%",
          },
          delay: 0.25,
        },
      );

      // ── Featured card ────────────────────────
      gsap.fromTo(
        ".destinations-card-featured",
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".destinations-grid",
            start: "top 85%",
          },
        },
      );

      // ── Small side cards stagger ─────────────
      gsap.fromTo(
        ".destinations-card-small",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".destinations-grid",
            start: "top 85%",
          },
          delay: 0.15,
        },
      );

      // ── Mobile scroll hint ───────────────────
      gsap.fromTo(
        ".destinations-scroll-hint",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".destinations-scroll-wrap",
            start: "top 90%",
          },
        },
      );

      // ── Mobile scroll cards stagger ──────────
      gsap.fromTo(
        ".destinations-scroll-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".destinations-scroll-wrap",
            start: "top 90%",
          },
          delay: 0.1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

export default useDestinationsAnimation;
