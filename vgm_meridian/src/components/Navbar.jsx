import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Close menu on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  /* Prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/branches", label: "Branches" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation">
        <div className="navbar-container">

          {/* LOGO */}
          <NavLink to="/" className="navbar-logo" onClick={closeMenu} aria-label="VGM Meridian Home">
            <img src="/vgm_logo1.png" alt="VGM Meridian Group Pvt Ltd" />
          </NavLink>

          {/* DESKTOP LINKS */}
          <ul className="navbar-links" role="menubar">
            {links.map(({ to, label, end }) => (
              <li key={to} role="none">
                <NavLink
                  to={to}
                  end={end}
                  role="menuitem"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* HAMBURGER BUTTON */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobile-menu"
          className={`mobile-menu${menuOpen ? " open" : ""}`}
          role="menu"
          aria-hidden={!menuOpen}
        >
          <ul>
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  role="menuitem"
                  className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <p>VGM Meridian Group Pvt Ltd</p>
            <a href="tel:+917904730223">+91 79047 30223</a>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
