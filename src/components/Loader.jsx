import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.scss";

/**
 * Loader
 * Full-screen editorial loader that plays once on mount,
 * then calls onComplete() to unmount itself.
 *
 * Usage in App.jsx:
 *   const [loading, setLoading] = useState(true);
 *   {loading && <Loader onComplete={() => setLoading(false)} />}
 */
const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counter = counterRef.current;
    const progress = progressRef.current;

    if (!loader || !counter || !progress) return;

    const tl = gsap.timeline();

    // ── Count up 0 → 100 ───────────────────────
    const obj = { val: 0 };
    tl.to(
      obj,
      {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          counter.textContent = String(Math.round(obj.val)).padStart(2, "0");
          progress.style.transform = `scaleX(${obj.val / 100})`;
        },
      },
      0,
    );

    // ── Headline lines stagger in ─────────────
    tl.fromTo(
      ".loader-headline-line",
      { y: "110%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1 },
      0.1,
    );

    // ── Sub text fades in ─────────────────────
    tl.fromTo(
      ".loader-sub",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0.5,
    );

    // ── Coords fade in ────────────────────────
    tl.fromTo(
      ".loader-coords",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      0.6,
    );

    // ── Brief hold at 100 ─────────────────────
    tl.to({}, { duration: 0.3 });

    // ── Panels split and exit ─────────────────
    tl.to(".loader-panel-top", {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
    });

    tl.to(
      ".loader-panel-bottom",
      {
        yPercent: 100,
        duration: 0.9,
        ease: "power4.inOut",
        onComplete,
      },
      "<",
    );
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      {/* Split panels */}
      <div className="loader-panel loader-panel-top">
        {/* Top left — label */}
        <div className="loader-label">
          <span className="loader-label-line" />
          <span className="loader-label-text">PinasGuide</span>
        </div>

        {/* Top right — vol tag */}
        <div className="loader-vol">
          <span className="loader-vol-label">VOL.</span>
          <span className="loader-vol-number">01</span>
        </div>

        {/* Center headline */}
        <div className="loader-headline">
          <div className="loader-headline-clip">
            <span className="loader-headline-line">PHILIPPINES</span>
          </div>
          <div className="loader-headline-clip">
            <span className="loader-headline-line loader-headline-line-gold">
              7,641 islands.
            </span>
          </div>
          <div className="loader-headline-clip">
            <span className="loader-headline-line loader-headline-line-muted">
              One guide.
            </span>
          </div>
        </div>

        {/* Sub */}
        <p className="loader-sub">Preparing your archipelago experience</p>

        {/* Coords */}
        <span className="loader-coords">14°35'N · 121°00'E</span>
      </div>

      <div className="loader-panel loader-panel-bottom">
        {/* Counter */}
        <div className="loader-counter">
          <span ref={counterRef} className="loader-counter-number">
            00
          </span>
          <span className="loader-counter-pct">%</span>
        </div>

        {/* Progress bar */}
        <div className="loader-progress">
          <div className="loader-progress-track">
            <div className="loader-progress-fill" ref={progressRef} />
          </div>
          <span className="loader-progress-label">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
