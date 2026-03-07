import { useEffect } from "react";
import gsap from "gsap";

/**
 * useCursor
 * Drives a two-layer custom cursor:
 *   .cursor-dot   — small tight dot that follows immediately
 *   .cursor-ring  — larger ring that lerps behind with delay
 *
 * Call this once at the top level — in App.jsx or Mainlayout.jsx.
 * Make sure to render <CustomCursor /> in your layout.
 */
const useCursor = () => {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    if (!dot || !ring) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Dot follows immediately
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Ring lerps behind on RAF
    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const animateRing = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      gsap.set(ring, { x: ringX, y: ringY });
      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);
    window.addEventListener("mousemove", onMouseMove);

    // ── Hover states ──────────────────────────
    // Expand ring on links/buttons
    const handleEnter = () => {
      gsap.to(ring, {
        scale: 2.2,
        opacity: 0.4,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Shrink on cards/images (click feel)
    const handleCardEnter = () => {
      gsap.to(ring, {
        scale: 3,
        opacity: 0.15,
        borderColor: "#ff9e00",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1.5,
        backgroundColor: "#ff9e00",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleCardLeave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        borderColor: "rgba(244,243,238,0.5)",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "#f4f3ee",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Hide on cursor leave window
    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };
    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    // Attach listeners
    const interactables = document.querySelectorAll(
      "a, button, .nav-hamburger",
    );
    const cards = document.querySelectorAll(
      ".destinations-card-featured, .destinations-card-small, .destinations-scroll-card, .destinations-page-grid-card, .regions-panel, .regions-page-sidebar-tab",
    );

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    cards.forEach((el) => {
      el.addEventListener("mouseenter", handleCardEnter);
      el.addEventListener("mouseleave", handleCardLeave);
    });

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "";

      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });

      cards.forEach((el) => {
        el.removeEventListener("mouseenter", handleCardEnter);
        el.removeEventListener("mouseleave", handleCardLeave);
      });
    };
  }, []);
};

export default useCursor;
