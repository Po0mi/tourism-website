import { useRef } from "react";
import { Link } from "react-router-dom";
import useAboutPageAnimation from "../hooks/useAboutPageAnimation";
import "./Aboutpage.scss";

const stats = [
  {
    number: "7,641",
    label: "Islands",
    desc: "Across three major island groups",
  },
  {
    number: "81",
    label: "Provinces",
    desc: "Each with its own unique culture",
  },
  {
    number: "170+",
    label: "Languages",
    desc: "Most linguistically diverse nation",
  },
  {
    number: "1565",
    label: "Est. Year",
    desc: "Over 400 years of rich history",
  },
];

const beliefs = [
  {
    number: "01",
    title: "Every island matters",
    text: "From Batanes to Tawi-Tawi, no island is too remote, too small, or too overlooked to deserve a story. We document the ones the tourist guides forget.",
  },
  {
    number: "02",
    title: "Culture over commerce",
    text: "We don't accept paid placements or sponsored content. Every recommendation comes from genuine experience and honest research — full stop.",
  },
  {
    number: "03",
    title: "Design is not optional",
    text: "A beautiful country deserves a beautiful guide. We treat every page as a piece of editorial craft, because the Philippines deserves nothing less.",
  },
];

const mission = [
  {
    title: "Go beyond the tourist trail",
    text: "Most travel guides focus on the same five destinations. We document every corner — the hidden coves, the mountain villages, the festivals that never make the front page.",
  },
  {
    title: "Celebrate Filipino identity",
    text: "The Philippines is more than beaches. It's 170 languages, 7,641 stories, centuries of resilience and creativity. We tell those stories with the depth they deserve.",
  },
  {
    title: "Build something lasting",
    text: "This started as a student project in Iloilo. It grew into a full editorial guide because the Philippines never had one as beautiful as the country itself.",
  },
];

const AboutPage = () => {
  const pageRef = useRef(null);
  useAboutPageAnimation(pageRef);

  return (
    <div className="about-page" ref={pageRef}>
      {/* ── Hero ─────────────────────────────── */}
      <section className="about-page-hero">
        <div className="about-page-hero-meta">
          <div className="about-page-hero-label">
            <span className="about-page-hero-label-line" />
            <span className="about-page-hero-label-text">About PinasGuide</span>
          </div>
          <span className="about-page-hero-vol">VOL. 01 · EST. 2024</span>
        </div>

        <div className="about-page-hero-headline">
          <span className="about-page-hero-headline-line">WE BELIEVE</span>
          <span className="about-page-hero-headline-line">THE PHILIPPINES</span>
          <span className="about-page-hero-headline-line">IS THE WORLD'S</span>
          <span className="about-page-hero-headline-line about-page-hero-headline-gold">
            most beautiful
          </span>
          <span className="about-page-hero-headline-line about-page-hero-headline-muted">
            ARCHIPELAGO.
          </span>
        </div>

        <div className="about-page-hero-footnote">
          <p className="about-page-hero-desc">
            PinasGuide is a passion project built to document every corner of
            the archipelago — not just the famous beaches, but the hidden coves,
            mountain villages, and stories that make this nation extraordinary.
          </p>
          <div className="about-page-hero-aside">
            <span className="about-page-hero-coords">14°35'N · 121°00'E</span>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────── */}
      <div className="about-page-divider">
        <span className="about-page-divider-line" />
        <span className="about-page-divider-text">— and here's why —</span>
        <span className="about-page-divider-line" />
      </div>

      {/* ── Stats ────────────────────────────── */}
      <div className="about-page-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="about-page-stat">
            <span className="about-page-stat-number">{stat.number}</span>
            <span className="about-page-stat-label">{stat.label}</span>
            <span className="about-page-stat-desc">{stat.desc}</span>
          </div>
        ))}
      </div>

      {/* ── Beliefs ──────────────────────────── */}
      <section className="about-page-beliefs">
        <div className="about-page-beliefs-header">
          <h2 className="about-page-beliefs-title">What We Believe</h2>
          <span className="about-page-beliefs-count">03 Principles</span>
        </div>
        {beliefs.map((belief) => (
          <div key={belief.number} className="about-page-belief-row">
            <span className="about-page-belief-number">{belief.number}</span>
            <div className="about-page-belief-title">{belief.title}</div>
            <div className="about-page-belief-text">{belief.text}</div>
          </div>
        ))}
      </section>

      {/* ── Mission ──────────────────────────── */}
      <section className="about-page-mission">
        <div className="about-page-mission-label">
          <span className="about-page-mission-label-line" />
          <span className="about-page-mission-label-text">Our Mission</span>
        </div>
        <div className="about-page-mission-blocks">
          <h2 className="about-page-mission-heading">Why we built this</h2>
          <div className="about-page-mission-items">
            {mission.map((item) => (
              <div key={item.title} className="about-page-mission-item">
                <div className="about-page-mission-item-marker" />
                <div className="about-page-mission-item-content">
                  <div className="about-page-mission-item-title">
                    {item.title}
                  </div>
                  <div className="about-page-mission-item-text">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="about-page-cta">
        <div className="about-page-cta-eyebrow">
          <span className="about-page-cta-eyebrow-line" />
          <span>Start Exploring</span>
        </div>
        <h2 className="about-page-cta-title">
          7,641 islands.
          <br />
          <em>Where to first?</em>
        </h2>
        <div className="about-page-cta-bottom">
          <p className="about-page-cta-sub">
            Every journey starts with a single island. Let us help you find
            yours.
          </p>
          <Link to="/destinations" className="about-page-cta-btn">
            Explore Destinations →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
