import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/branches", label: "Branches" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP: brand + nav links */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/vgm_logo1.png" alt="VGM Meridian Group Pvt Ltd" />
            </div>
            <p>Empowering technology, education &amp; sustainable businesses.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        {/* BOTTOM: socials + copyright */}
        <div className="footer-bottom">
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/vgmmeridian?igsh=MW4yejZ3dGF1MWh4OA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/insta-logo.webp" alt="Instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/linkedin-logo.avif" alt="LinkedIn" />
            </a>
            <a href="mailto:vgmmeridiangroups@gmail.com" aria-label="Email us">
              📩
            </a>
            <a href="tel:+917904730223" aria-label="Call us">
              📞
            </a>
          </div>

          <p className="footer-copy">
            © 2026 VGM Meridian Group Pvt Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
