import { useState } from "react";
import regions from "../data/regions";
import destinations from "../data/destinations";
import "./Regionspage.scss";

const RegionsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRegion = regions[activeIndex];

  const regionDestinations = destinations.filter(
    (d) => d.region.toLowerCase() === activeRegion.name.toLowerCase(),
  );

  return (
    <div className="regions-page">
      {/* ── Header ───────────────────────────── */}
      <div className="regions-page-header">
        <div className="regions-page-header-label">
          <span className="regions-page-header-label-line" />
          <span className="regions-page-header-label-text">Philippines</span>
        </div>
        <h1 className="regions-page-header-title">Regions</h1>
        <p className="regions-page-header-sub">
          Three island groups. One nation.
        </p>
      </div>

      {/* ── Split Layout ─────────────────────── */}
      <div className="regions-page-split">
        {/* Sidebar */}
        <div className="regions-page-sidebar">
          <span className="regions-page-sidebar-label">Island Groups</span>

          {regions.map((region, index) => (
            <div key={region.id}>
              <div
                className={`regions-page-sidebar-tab ${activeIndex === index ? "regions-page-sidebar-tab-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="regions-page-sidebar-tab-number">
                  {region.number} — {region.direction}
                </span>
                <span className="regions-page-sidebar-tab-name">
                  {region.name}
                </span>
                <span className="regions-page-sidebar-tab-desc">
                  {region.description}
                </span>
              </div>
              {index < regions.length - 1 && (
                <div className="regions-page-sidebar-divider" />
              )}
            </div>
          ))}
        </div>

        {/* Content panels */}
        <div className="regions-page-content">
          {regions.map((region, index) => (
            <div
              key={region.id}
              className={`regions-page-panel ${activeIndex === index ? "regions-page-panel-active" : ""}`}
            >
              {/* BG */}
              <div
                className="regions-page-panel-bg"
                style={{ backgroundImage: `url(${region.image})` }}
              />
              <div className="regions-page-panel-overlay" />

              {/* Destination previews — top right */}
              {regionDestinations.length > 0 && (
                <div className="regions-page-panel-destinations">
                  <div className="regions-page-panel-destinations-label">
                    Top Destinations
                  </div>
                  {regionDestinations.map((dest) => (
                    <a
                      key={dest.id}
                      href={dest.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="regions-page-panel-dest-item"
                    >
                      <div className="regions-page-panel-dest-thumb">
                        <img src={dest.image} alt={dest.name} />
                      </div>
                      <span>{dest.name}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Main content */}
              <div className="regions-page-panel-content">
                <div className="regions-page-panel-number">
                  {region.number} — {region.direction}
                </div>
                <div className="regions-page-panel-name">{region.name}</div>
                <div className="regions-page-panel-desc">
                  {region.description}
                </div>
                <div className="regions-page-panel-stats">
                  {region.stats.map((stat) => (
                    <div key={stat.label} className="regions-page-panel-stat">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={region.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="regions-page-panel-cta"
                >
                  <span className="regions-page-panel-cta-line" />
                  Explore {region.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionsPage;
