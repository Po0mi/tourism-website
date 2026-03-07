import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useRegionsPageAnimation
 * Entrance animation for the RegionsPage header + sidebar on mount.
 * Pass a ref pointing to the .regions-page wrapper.
 */
const useRegionsPageAnimation = (pageRef) => {
  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Label slides in
      tl.fromTo(
        ".regions-page-header-label",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7 },
        0.1,
      );

      // Title sweeps up
      tl.fromTo(
        ".regions-page-header-title",
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1 },
        0.2,
      );

      // Sub fades in
      tl.fromTo(
        ".regions-page-header-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.4,
      );

      // Sidebar label
      tl.fromTo(
        ".regions-page-sidebar-label",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.5 },
        0.5,
      );

      // Sidebar tabs stagger in
      tl.fromTo(
        ".regions-page-sidebar-tab",
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
        0.6,
      );
    }, pageRef);

    return () => ctx.revert();
  }, [pageRef]);
};

/**
 * useRegionsPagePanelAnimation
 * Animates panel content in whenever the active region changes.
 * Pass the activeIndex so the effect re-fires on tab switch.
 */
const useRegionsPagePanelAnimation = (activeIndex) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Number tag
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-number",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      0,
    );

    // Region name
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-name",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.08,
    );

    // Description
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-desc",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.16,
    );

    // Stats stagger
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-stat",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
      0.24,
    );

    // CTA
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-cta",
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.4 },
      0.36,
    );

    // CTA line scales in
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-cta-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 0.4, transformOrigin: "left" },
      0.4,
    );

    // Destination previews stagger in from right
    tl.fromTo(
      ".regions-page-panel-active .regions-page-panel-dest-item",
      { opacity: 0, x: 16 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.07 },
      0.2,
    );

    return () => tl.kill();
  }, [activeIndex]);
};

export { useRegionsPageAnimation, useRegionsPagePanelAnimation };
