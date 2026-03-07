import { useState } from "react";
import regions from "../data/regions";
import "./Regions.scss";

const Regions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="regions" id="regions">
      {/* ── Header ─────────────────────────────── */}
      <div className="regions-header">
        <div className="regions-label">
          <span className="regions-label-line" />
          <span className="regions-label-text">Explore by Region</span>
        </div>
        <h2 className="regions-title">
          Three Islands,
          <br />
          One Nation.
        </h2>
        <p className="regions-sub">
          The Philippines is divided into three major island groups — each with
          its own character, culture, and landscapes.
        </p>
      </div>

      {/* ── Panels ─────────────────────────────── */}
      <div
        className={`regions-panels ${activeIndex !== null ? "regions-panels-active" : ""}`}
      >
        {regions.map((region, index) => (
          <div
            key={region.id}
            className={`regions-panel ${activeIndex === index ? "regions-panel-hovered" : ""} ${activeIndex !== null && activeIndex !== index ? "regions-panel-shrunk" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Top accent line */}
            <div className="regions-panel-accent" />

            {/* Background image */}
            <div
              className="regions-panel-bg"
              style={{ backgroundImage: `url(${region.image})` }}
            />

            {/* Overlay */}
            <div className="regions-panel-overlay" />

            {/* Side label (collapsed state) */}
            <div className="regions-panel-side-label">{region.name}</div>

            {/* Content */}
            <div className="regions-panel-content">
              <div className="regions-panel-number">
                {region.number} — {region.direction}
              </div>
              <div className="regions-panel-name">{region.name}</div>
              <div className="regions-panel-desc">{region.description}</div>
              <div className="regions-panel-meta">
                <div className="regions-panel-stats">
                  {region.stats.map((stat) => (
                    <div key={stat.label} className="regions-panel-stat">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={region.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="regions-panel-cta"
                >
                  Explore {region.name} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Regions;
