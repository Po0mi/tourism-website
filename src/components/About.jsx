import { useRef } from "react";
import { Link } from "react-router-dom";
import useAboutAnimation from "../hooks/Useaboutanimation";
import "./About.scss";

const stats = [
  {
    number: "7,641",
    label: "Islands",
    desc: "Across three major island groups in Southeast Asia",
  },
  {
    number: "81",
    label: "Provinces",
    desc: "Each with its own unique culture and heritage",
  },
  {
    number: "170+",
    label: "Languages",
    desc: "One of the most linguistically diverse nations on earth",
  },
  {
    number: "1565",
    label: "Est. Year",
    desc: "Over 400 years of rich history and colonial heritage",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  useAboutAnimation(sectionRef);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-inner">
        {/* ── Top Row ──────────────────────────── */}
        <div className="about-top">
          <div className="about-top-left">
            <div className="about-label">
              <span className="about-label-line" />
              <span className="about-label-text">About PinasGuide</span>
            </div>
            <p className="about-eyebrow">
              Your guide to the Philippine archipelago
            </p>
          </div>
          <div className="about-top-right">
            <span className="about-vol-label">Volume</span>
            <span className="about-vol-number">01</span>
          </div>
        </div>

        {/* ── Big Statement ─────────────────────── */}
        <h2 className="about-statement">
          We believe every island
          <br />
          deserves to be <em>discovered.</em>
        </h2>

        {/* ── Body Row ──────────────────────────── */}
        <div className="about-body">
          <div className="about-body-left">
            <p className="about-body-text">
              <strong>PinasGuide</strong> is a passion project born from a deep
              love for the Philippines — its people, its landscapes, and its
              stories. We built this to be the guide we always wished existed:
              one that goes beyond the tourist trail and into the soul of the
              archipelago.
            </p>
          </div>
          <div className="about-body-right">
            <p className="about-body-text">
              From the windswept hills of Batanes in the north to the emerald
              waters of Tawi-Tawi in the south, we are documenting every corner
              of this extraordinary nation — one island at a time.
            </p>
            <Link to="/about" className="about-cta">
              <span className="about-cta-line" />
              Read our story
            </Link>
          </div>
        </div>

        {/* ── Stats Row ─────────────────────────── */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <span className="about-stat-number">{stat.number}</span>
              <span className="about-stat-label">{stat.label}</span>
              <span className="about-stat-desc">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
