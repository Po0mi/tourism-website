import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useDestinationsPageAnimation
 * Entrance + scroll animations for the DestinationsPage.
 * Pass a ref pointing to the .destinations-page wrapper.
 */
const useDestinationsPageAnimation = (pageRef) => {
  // ── Page entrance (runs once on mount) ─────
  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Label slides in
      tl.fromTo(
        ".destinations-page-label",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7 },
        0.1,
      );

      // Title sweeps up
      tl.fromTo(
        ".destinations-page-title",
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1 },
        0.2,
      );

      // Sub fades in
      tl.fromTo(
        ".destinations-page-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.35,
      );

      // Count slides in from right
      tl.fromTo(
        ".destinations-page-header-right",
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.7 },
        0.2,
      );

      // Filter tabs stagger in
      tl.fromTo(
        ".destinations-page-filter-tab",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
        0.5,
      );

      // Filter count
      tl.fromTo(
        ".destinations-page-filter-count",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0.8,
      );
    }, pageRef);

    return () => ctx.revert();
  }, [pageRef]);
};

/**
 * useDestinationsPageGridAnimation
 * Re-runs whenever the filtered cards change (tag switch).
 * Pass the current filtered array so the effect re-fires on filter change.
 */
const useDestinationsPageGridAnimation = (pageRef, filtered) => {
  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Desktop grid cards stagger in
      gsap.fromTo(
        ".destinations-page-grid-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.07,
        },
      );

      // Mobile list items stagger in
      gsap.fromTo(
        ".destinations-page-list-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.06,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [pageRef, filtered]);
};

export { useDestinationsPageAnimation, useDestinationsPageGridAnimation };
