import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import {
  FaCode,
  FaBullhorn,
  FaPaintBrush,
  FaVideo,
  FaChalkboardTeacher,
  FaChartBar,
  FaLeaf,
  FaHeartbeat,
} from "react-icons/fa";
import "../styles/services.css";

export default function Services() {
  useScrollReveal();

  return (
    <div className="services-page">

      {/* ================= HEADER ================= */}
      <section className="services-header reveal">
        <h1>Our Services</h1>
        <p>
          Empowering businesses, professionals, and communities through
          technology, education, and natural wellness.
        </p>

        <div className="service-counters">
          <div className="counter-box reveal">
            <h2>59+</h2>
            <p>Projects Delivered</p>
          </div>

          <div className="counter-box reveal">
            <h2>8000+</h2>
            <p>Students Trained</p>
          </div>

          <div className="counter-box reveal">
            <h2>8+</h2>
            <p>Wellness Products</p>
          </div>
        </div>
      </section>

      <div className="gradient-divider"></div>

      {/* ================= THULIR ================= */}
      <section className="service-branch">

        <img
          src="/thulir-logo.jpeg"
          alt="Thulir"
          className="branch-logo reveal"
        />

        <div className="service-content">
          <h2 className="reveal">Thulir Info Tech</h2>
          <p className="reveal">
            Digital innovation and technology-driven solutions for modern businesses.
          </p>

          <div className="service-grid">

            <div className="service-card reveal">
              <FaCode className="service-icon" />
              <h4>Web Development</h4>
            </div>

            <div className="service-card reveal">
              <FaCode className="service-icon" />
              <h4>App Development</h4>
            </div>

            <div className="service-card reveal">
              <FaCode className="service-icon" />
              <h4>Landing Page</h4>
            </div>

            <div className="service-card reveal">
              <FaBullhorn className="service-icon" />
              <h4>Digital Marketing</h4>
            </div>

            <div className="service-card reveal">
              <FaPaintBrush className="service-icon" />
              <h4>Poster & Banner Design</h4>
            </div>

            <div className="service-card reveal">
              <FaVideo className="service-icon" />
              <h4>AI Video & Editing</h4>
            </div>

          </div>

         {/* <button className="branch-cta reveal">
            Explore Thulir Services
          </button>*/}
        </div>
      </section>

      <div className="gradient-divider"></div>

      {/* ================= MENTORIX ================= */}
      <section className="service-branch reverse">

        <img
          src="/mentorix-logo.png"
          alt="Mentorix"
          className="branch-logo reveal"
        />

        <div className="service-content">
          <h2 className="reveal">Mentorix</h2>
          <p className="reveal">
            Skill-based training programs designed to create industry-ready professionals.
          </p>

          <div className="service-grid">

            <div className="service-card reveal">
              <FaChalkboardTeacher className="service-icon" />
              <h4>Digital Marketing Course</h4>
            </div>

            <div className="service-card reveal">
              <FaChalkboardTeacher className="service-icon" />
              <h4>Poster Design & Video Editing Course</h4>
            </div>

            <div className="service-card reveal">
              <FaChalkboardTeacher className="service-icon" />
              <h4>Engineering Course</h4>
            </div>

            <div className="service-card reveal">
              <FaCode className="service-icon" />
              <h4>Java, Python, React</h4>
            </div>

            <div className="service-card reveal">
              <FaChartBar className="service-icon" />
              <h4>Power BI & Aptitude</h4>
            </div>

            <div className="service-card reveal">
              <FaPaintBrush className="service-icon" />
              <h4>Non IT</h4>
            </div>

          </div>

          {/*<button className="branch-cta reveal">
            Explore Mentorix Courses
          </button>*/}
        </div>
      </section>

      <div className="gradient-divider"></div>

      {/* ================= DOLPHIN ================= */}
      <section className="service-branch">

        <img
          src="/dolphine-logo.jpeg"
          alt="Dolphin"
          className="branch-logo reveal"
        />

        <div className="service-content">
          <h2 className="reveal">Dolphin Naturals</h2>
          <p className="reveal">
            Traditional wellness and herbal solutions for healthier living.
          </p>

          <div className="service-grid">

            <div className="service-card reveal">
              <FaLeaf className="service-icon" />
              <h4>Siddha Medicine</h4>
            </div>

            <div className="service-card reveal">
              <FaLeaf className="service-icon" />
              <h4>Tisane Tea</h4>
            </div>

            <div className="service-card reveal">
              <FaHeartbeat className="service-icon" />
              <h4>Tisane Dip Soup</h4>
            </div>

          </div>

          {/*<button className="branch-cta reveal">
            Explore Dolphin Products
          </button>*/}
        </div>
      </section>

    </div>
  );
}
