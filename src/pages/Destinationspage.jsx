import { useState } from "react";
import destinations from "../data/destinations";
import "./Destinationspage.scss";

const ALL_TAGS = [
  "All",
  "Nature",
  "Beach",
  "Surf",
  "Culture",
  "Heritage",
  "Adventure",
];

const DestinationsPage = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? destinations
      : destinations.filter((d) => d.tags.includes(activeTag));

  return (
    <div className="destinations-page">
      {/* ── Page Header ──────────────────────── */}
      <div className="destinations-page-header">
        <div className="destinations-page-header-left">
          <div className="destinations-page-label">
            <span className="destinations-page-label-line" />
            <span className="destinations-page-label-text">Philippines</span>
          </div>
          <h1 className="destinations-page-title">Destinations</h1>
          <p className="destinations-page-sub">
            Every island has a story. Find the one calling your name.
          </p>
        </div>
        <div className="destinations-page-header-right">
          <span className="destinations-page-count-label">Total</span>
          <span className="destinations-page-count-number">
            {String(destinations.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Filter Tabs ───────────────────────── */}
      <div className="destinations-page-filters">
        <div className="destinations-page-filter-tabs">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`destinations-page-filter-tab ${activeTag === tag ? "destinations-page-filter-tab-active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <span className="destinations-page-filter-count">
          <strong>{filtered.length}</strong> destinations
        </span>
      </div>

      {/* ── Option A: Grid (desktop) ──────────── */}
      <div className="destinations-page-grid">
        {filtered.length > 0 ? (
          filtered.map((dest) => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="destinations-page-grid-card"
            >
              <img src={dest.image} alt={dest.name} />
              <div className="destinations-page-grid-card-overlay" />
              <div className="destinations-page-grid-card-content">
                <div className="destinations-page-grid-card-number">
                  {dest.number} — {dest.region}
                </div>
                <div className="destinations-page-grid-card-name">
                  {dest.name}
                </div>
                <div className="destinations-page-grid-card-meta">
                  <div className="destinations-page-grid-card-tags">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="destinations-page-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="destinations-page-arrow">→</span>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="destinations-page-empty">
            <span>
              No destinations found for <strong>{activeTag}</strong>.
            </span>
          </div>
        )}
      </div>

      {/* ── Option B: Magazine List (mobile) ─── */}
      <div className="destinations-page-list">
        {filtered.length > 0 ? (
          filtered.map((dest) => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="destinations-page-list-item"
            >
              <span className="destinations-page-list-number">
                {dest.number}
              </span>
              <div className="destinations-page-list-info">
                <div className="destinations-page-list-name">{dest.name}</div>
                <div className="destinations-page-list-desc">
                  {dest.description}
                </div>
              </div>
              <div className="destinations-page-list-meta">
                <span className="destinations-page-list-region">
                  {dest.region}
                </span>
                {dest.tags.slice(0, 1).map((tag) => (
                  <span key={tag} className="destinations-page-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="destinations-page-list-img">
                <img src={dest.image} alt={dest.name} />
              </div>
            </a>
          ))
        ) : (
          <div className="destinations-page-empty">
            <span>
              No destinations found for <strong>{activeTag}</strong>.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;
