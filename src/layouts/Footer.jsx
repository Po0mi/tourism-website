import { Link } from "react-router-dom";
import "./Footer.scss";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/destinations", label: "Destinations" },
  { path: "/regions", label: "Regions" },
  { path: "/about", label: "About" },
];

const regions = [
  { path: "/regions", label: "Luzon" },
  { path: "/regions", label: "Visayas" },
  { path: "/regions", label: "Mindanao" },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Marquee */}
      <div className="footer-marquee-wrap">
        <div className="footer-marquee">
          <span>
            Maligayang Pagdating &nbsp;·&nbsp; Welcome to the Philippines
            &nbsp;·&nbsp; Mabuhay &nbsp;·&nbsp;
          </span>
          <span>
            Maligayang Pagdating &nbsp;·&nbsp; Welcome to the Philippines
            &nbsp;·&nbsp; Mabuhay &nbsp;·&nbsp;
          </span>
        </div>
      </div>

      <div className="footer-main">
        {/* Brand col */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">🇵🇭</span>
            <span>
              Pinas<strong>Guide</strong>
            </span>
          </Link>
          <p className="footer-tagline">
            Your guide to the 7,641 islands of the Philippines — from hidden
            beaches to ancient heritage sites.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav col */}
        <div className="footer-col">
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-links">
            {navLinks.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Regions col */}
        <div className="footer-col">
          <h4 className="footer-col-title">Regions</h4>
          <ul className="footer-links">
            {regions.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact col */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:hello@pinasguide.ph" className="footer-link">
                hello@pinasguide.ph
              </a>
            </li>
            <li>
              <span className="footer-link footer-link-muted">
                Iloilo, Philippines
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} PinasGuide. All rights reserved.
        </p>
        <p className="footer-made">Made with 🤍 in the Philippines</p>
      </div>
    </footer>
  );
};

export default Footer;
