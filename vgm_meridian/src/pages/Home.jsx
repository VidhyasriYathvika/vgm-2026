import React, { useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Branches from "./Branches";
import Contact from "./Contact";
import "../styles/home.css";

export default function Home() {

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================== */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* =========================
     SMOOTH SCROLL FUNCTION
  ========================== */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =========================
           HERO SECTION
      ========================== */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Logo */}
          <img
            src="/vgm-logo.png"
            alt="VGM Meridian Group"
            className="hero-logo"
          />

          {/* Company Name */}
          <h1 className="hero-title">
            VGM Meridian Group Pvt Ltd
          </h1>

          {/* Decorative Line */}
          <div className="hero-line"></div>

          {/* Tagline */}
          <p className="hero-subtitle">
            Empowering technology, education, and sustainable businesses
            through innovation and excellence.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("services")}
            >
              Explore More
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* =========================
           OTHER SECTIONS
      ========================== */}

      <div id="about" className="reveal">
        <About />
      </div>

      <div id="branches" className="reveal">
        <Branches />
      </div>

      <div id="services" className="reveal">
        <Services />
      </div>

      <div id="contact" className="reveal">
        <Contact />
      </div>
    </>
  );
}
