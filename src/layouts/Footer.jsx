import { useRef } from "react";
import { Link } from "react-router-dom";
import useFooterAnimation from "../hooks/Usefooteranimation";
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
  const footerRef = useRef(null);
  useFooterAnimation(footerRef);

  return (
    <footer className="footer" ref={footerRef}>
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
            {/* GitHub */}
            <a
              href="https://github.com/dangabrielle"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/dangabrielle"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
              <a href="mailto:decastrogab21@gmail.com" className="footer-link">
                decastrogab21@gmail.com
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
        <p className="footer-made">
          Designed & built by{" "}
          <a
            href="https://github.com/dangabrielle"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-made-link"
          >
            Dan Gabrielle De Castro
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
