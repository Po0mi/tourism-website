import { useEffect } from "react";
import gsap from "gsap";

/**
 * useNavbarMobileAnimation
 * Animates the mobile menu open and close.
 * @param {boolean} menuOpen - current open state
 * @param {React.RefObject} menuRef - ref on the .nav-mobile element
 */
const useNavbarMobileAnimation = (menuOpen, menuRef) => {
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      // Slide down + fade in the menu panel
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -16, pointerEvents: "none" },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
          pointerEvents: "all",
        },
      );

      // Stagger in each mobile link
      gsap.fromTo(
        ".nav-mobile-link",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.07,
          delay: 0.1,
        },
      );

      // Mobile CTA fades in last
      gsap.fromTo(
        ".nav-cta-mobile",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 0.3 },
      );
    } else {
      // Slide up + fade out
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [menuOpen, menuRef]);
};

export default useNavbarMobileAnimation;
