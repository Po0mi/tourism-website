import { useEffect } from "react";
import gsap from "gsap";

/**
 * useNavbarAnimation
 * Drives the navbar entrance animation on mount.
 * Pass a ref pointing to the <nav> element.
 */
const useNavbarAnimation = (navRef) => {
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Nav slides down from above
      tl.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0,
      );

      // Logo fades in slightly after
      tl.fromTo(
        ".nav-logo",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.6 },
        0.4,
      );

      // Nav links stagger in from right
      tl.fromTo(
        ".nav-link",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        0.5,
      );

      // CTA fades in last
      tl.fromTo(
        ".nav-cta",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.4 },
        0.8,
      );
    }, navRef);

    return () => ctx.revert();
  }, [navRef]);
};

export default useNavbarAnimation;
