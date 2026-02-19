import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src="/vgm_logo1.png" alt="VGM Meridian" />
        </div>

        {/* LINKS */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
  Home
</NavLink>
          
          <Link to="/about">About</Link>
          <Link to="/branches">Branches</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
