import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useAboutPageAnimation
 * Entrance + scroll-triggered animations for the full AboutPage.
 * Pass a ref pointing to the .about-page wrapper.
 */
const useAboutPageAnimation = (pageRef) => {
  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // ── Hero: label + vol (mount) ─────────────
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl.fromTo(
        ".about-page-hero-label",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7 },
        0.1,
      );

      heroTl.fromTo(
        ".about-page-hero-vol",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.7 },
        0.1,
      );

      // ── Hero: headline lines stagger up ────────
      heroTl.fromTo(
        ".about-page-hero-headline-line",
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          stagger: 0.08,
        },
        0.3,
      );

      // ── Hero: footnote desc + coords ───────────
      heroTl.fromTo(
        ".about-page-hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.9,
      );

      heroTl.fromTo(
        ".about-page-hero-coords",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.0,
      );

      // ── Divider lines scale out from center ────
      gsap.fromTo(
        ".about-page-divider-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.out",
          transformOrigin: "center",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-page-divider",
            start: "top 90%",
          },
        },
      );

      gsap.fromTo(
        ".about-page-divider-text",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-page-divider",
            start: "top 90%",
          },
          delay: 0.2,
        },
      );

      // ── Stats stagger up ──────────────────────
      gsap.fromTo(
        ".about-page-stat",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-page-stats",
            start: "top 88%",
          },
        },
      );

      // ── Beliefs header ────────────────────────
      gsap.fromTo(
        ".about-page-beliefs-title",
        { opacity: 0, y: 36, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page-beliefs-header",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".about-page-beliefs-count",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-page-beliefs-header",
            start: "top 85%",
          },
          delay: 0.15,
        },
      );

      // ── Belief rows stagger in ────────────────
      gsap.fromTo(
        ".about-page-belief-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".about-page-beliefs",
            start: "top 80%",
          },
          delay: 0.1,
        },
      );

      // ── Mission label + heading ───────────────
      gsap.fromTo(
        ".about-page-mission-label",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page-mission",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".about-page-mission-heading",
        { opacity: 0, y: 36, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page-mission",
            start: "top 85%",
          },
          delay: 0.1,
        },
      );

      // ── Mission items stagger in ──────────────
      gsap.fromTo(
        ".about-page-mission-item",
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".about-page-mission-items",
            start: "top 85%",
          },
        },
      );

      // ── Mission item markers scale in ─────────
      gsap.fromTo(
        ".about-page-mission-item-marker",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          ease: "back.out(2)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".about-page-mission-items",
            start: "top 85%",
          },
          delay: 0.1,
        },
      );

      // ── CTA eyebrow + title ───────────────────
      gsap.fromTo(
        ".about-page-cta-eyebrow",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page-cta",
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        ".about-page-cta-title",
        { opacity: 0, y: 48, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page-cta",
            start: "top 88%",
          },
          delay: 0.1,
        },
      );

      // ── CTA bottom row ────────────────────────
      gsap.fromTo(
        ".about-page-cta-sub",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-page-cta-bottom",
            start: "top 90%",
          },
        },
      );

      gsap.fromTo(
        ".about-page-cta-btn",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".about-page-cta-bottom",
            start: "top 90%",
          },
          delay: 0.1,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [pageRef]);
};

export default useAboutPageAnimation;
