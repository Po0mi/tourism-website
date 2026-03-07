import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useFooterAnimation
 * Scroll-triggered entrance animations for the Footer.
 * Pass a ref pointing to the <footer> element.
 */
const useFooterAnimation = (footerRef) => {
  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // ── Marquee fades in ──────────────────────
      gsap.fromTo(
        ".footer-marquee-wrap",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-marquee-wrap",
            start: "top 95%",
          },
        },
      );

      // ── Brand col slides up ───────────────────
      gsap.fromTo(
        ".footer-brand",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
          },
        },
      );

      // ── Nav cols stagger in ───────────────────
      gsap.fromTo(
        ".footer-col",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.1,
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
          },
        },
      );

      // ── Social icons stagger in ───────────────
      gsap.fromTo(
        ".footer-social",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
          stagger: 0.08,
          delay: 0.25,
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
          },
        },
      );

      // ── Bottom bar slides up ──────────────────
      gsap.fromTo(
        ".footer-bottom",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 98%",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, [footerRef]);
};

export default useFooterAnimation;
