import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import "./Destinations.scss";

const Destinations = () => {
  const featured = destinations.find((d) => d.featured);
  const rest = destinations.filter((d) => !d.featured);

  return (
    <section className="destinations" id="destinations">
      {/* ── Header ─────────────────────────────── */}
      <div className="destinations-header">
        <div className="destinations-header-left">
          <div className="destinations-label">
            <span className="destinations-label-line" />
            <span className="destinations-label-text">
              Featured Destinations
            </span>
          </div>
          <h2 className="destinations-title">
            Where Will You
            <br />
            Go Next?
          </h2>
          <p className="destinations-sub">
            Handpicked islands, cities, and hidden gems across the archipelago.
          </p>
        </div>
        <Link to="/destinations" className="destinations-view-all">
          View all destinations →
        </Link>
      </div>

      {/* ── Magazine Grid (desktop) ──────────────── */}
      <div className="destinations-grid">
        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="destinations-card-featured"
          >
            <img src={featured.image} alt={featured.name} />
            <div className="destinations-card-featured-overlay" />
            <div className="destinations-card-featured-content">
              <div className="destinations-card-featured-number">
                {featured.number} — {featured.region}
              </div>
              <div className="destinations-card-featured-name">
                {featured.name}
              </div>
              <div className="destinations-card-featured-desc">
                {featured.description}
              </div>
              <div className="destinations-card-featured-meta">
                {featured.tags.map((tag) => (
                  <span key={tag} className="destinations-tag">
                    {tag}
                  </span>
                ))}
                <span className="destinations-arrow">→</span>
              </div>
            </div>
          </a>
        )}

        <div className="destinations-grid-side">
          {rest.slice(0, 2).map((dest) => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="destinations-card-small"
            >
              <img src={dest.image} alt={dest.name} />
              <div className="destinations-card-small-overlay" />
              <div className="destinations-card-small-content">
                <div className="destinations-card-small-number">
                  {dest.number} — {dest.region}
                </div>
                <div className="destinations-card-small-name">{dest.name}</div>
                <div className="destinations-card-small-meta">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="destinations-tag">
                      {tag}
                    </span>
                  ))}
                  <span className="destinations-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Horizontal Scroll (mobile) ───────────── */}
      <div className="destinations-scroll-wrap">
        <div className="destinations-scroll-hint">
          <span className="destinations-scroll-hint-line" />
          <span>Drag to explore</span>
        </div>
        <div className="destinations-scroll">
          {destinations.map((dest) => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="destinations-scroll-card"
            >
              <img src={dest.image} alt={dest.name} />
              <div className="destinations-scroll-card-overlay" />
              <div className="destinations-scroll-card-content">
                <div className="destinations-scroll-card-number">
                  {dest.number} — {dest.region}
                </div>
                <div className="destinations-scroll-card-name">{dest.name}</div>
                <div className="destinations-scroll-card-meta">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="destinations-tag">
                      {tag}
                    </span>
                  ))}
                  <span className="destinations-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
