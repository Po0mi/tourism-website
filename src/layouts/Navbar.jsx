import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useActiveNav from "../hooks/useActiveNav";
import useNavbarAnimation from "../hooks/useNavbarAnimation";
import useNavbarMobileAnimation from "../hooks/UsenavbarMobileAnimation";
import Logo from "../assets/logo/ph-logo.svg";
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

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useNavbarAnimation(navRef);
  useNavbarMobileAnimation(menuOpen, mobileMenuRef);

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
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} ref={navRef}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-icon">
            <img src={Logo} alt="ph-logo" />
          </span>
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
          <Link to="/destinations" className="nav-cta">
            Explore Now
          </Link>
        </ul>

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
      <div
        className={`nav-mobile ${menuOpen ? "nav-mobile-open" : ""}`}
        ref={mobileMenuRef}
      >
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
