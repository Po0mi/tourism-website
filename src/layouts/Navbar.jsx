import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useActiveNav from "../hooks/useActiveNav";
import "./Navbar.scss";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/destinations", label: "Destinations" },
  { path: "/regions", label: "Regions" },
  { path: "/about", label: "About" },
];

const Navbar = () => {
  const { isActive } = useActiveNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-icon">🇵🇭</span>
          <span className="nav-logo-text">
            Pinas<strong>Guide</strong>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link ${isActive(path) ? "nav-link-active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/destinations" className="nav-cta">
          Explore Now
        </Link>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? "nav-hamburger-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${menuOpen ? "nav-mobile-open" : ""}`}>
        <ul className="nav-mobile-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-mobile-link ${isActive(path) ? "nav-mobile-link-active" : ""}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/destinations"
          className="nav-cta nav-cta-mobile"
          onClick={closeMenu}
        >
          Explore Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
