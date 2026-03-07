import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/bg/hero-bg.webm";
import useHeroAnimation from "../hooks/useHeroAnimation";
import "./Hero.scss";

const Hero = () => {
  const containerRef = useRef(null);

  useHeroAnimation(containerRef);

  return (
    <section className="hero" id="home">
      <div className="hero-container" ref={containerRef}>
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroBg} type="video/webm" />
        </video>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Top left — horizontal tag */}
        <div className="hero-tag-vertical">
          <span>Experience the Beauty of the</span>
        </div>

        {/* Top right — issue tag */}
        <div className="hero-issue">
          <span className="hero-issue-vol">VOL. 01</span>
          <span className="hero-issue-label">EST.</span>
          <span className="hero-issue-number">1565</span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title-top">PHILIPPINES</h1>

        {/* Center block */}
        <div className="hero-center">
          <div className="hero-divider">
            <span className="hero-divider-line" />
            <span className="hero-divider-text">DISCOVER</span>
            <span className="hero-divider-line" />
          </div>
          <p className="hero-sub">
            Discover the world's most beautiful archipelago
          </p>
          <div className="hero-cta-row">
            <Link to="/destinations" className="hero-cta-primary">
              Explore Now
            </Link>
            <Link to="/regions" className="hero-cta-ghost">
              View Regions
            </Link>
          </div>
        </div>

        {/* Bottom title */}
        <h1 className="hero-title-bottom">7,641 ISLANDS</h1>

        {/* Bottom left — coordinates */}
        <div className="hero-coords">
          <span>14°35'N</span>
          <span>121°00'E</span>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>81</strong>
            <span>Provinces</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>170+</strong>
            <span>Languages</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>3</strong>
            <span style={{ textAlign: "center", display: "block" }}>
              Main Islands
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
