import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/branches.css";

export default function Branches() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="branches-hero">
        <h1>Our Branches</h1>
        <p>
          VGM Meridian Group operates across multiple domains, delivering
          innovation, mentorship, and sustainable solutions.
        </p>
      </section>

      <section className="branches-section">

        {/* ================= THULIR ================= */}
        <div className="branch-card reveal">

          {/* LEFT – Content */}
          <div className="branch-content">
            <h2>Thulir Info Tech</h2>

            <p>
              Thulir Info Tech is a leading provider of innovative IT services
              and digital solutions, dedicated to empowering small and medium
              businesses, startups, and international clients to succeed in the
              digital era.
            </p>

            <p>
              Our expertise spans web development, mobile app development,
              comprehensive digital marketing services, branding, and online
              business growth solutions.
            </p>

            <p>
              With a focus on cost-effective solutions, performance-driven
              digital marketing, and end-to-end IT support, we help businesses
              establish a strong online presence, drive growth, and achieve
              their goals.
            </p>
          </div>

          {/* RIGHT – Logo top + Image bottom */}
          <div className="branch-right">
            <div className="branch-logo">
              <img src="/thulir-logo.jpeg" alt="Thulir Info Tech Logo" />
            </div>
            <div className="branch-img-wrap">
              <img src="/thulirbranch.jpeg" alt="IT Services" />
            </div>
          </div>

        </div>

        {/* ================= MENTORIX ================= */}
        <div className="branch-card reveal">

          {/* LEFT – Content */}
          <div className="branch-content">
            <h2>Mentorix Academy</h2>

            <p>
              Mentorix Academy is a premier skill development and training
              institute, bridging the gap between education and industry demands.
            </p>

            <p><strong>We offer hands-on training in high-growth fields:</strong></p>

            <ul>
              <li><strong>Tech &amp; IT:</strong> Java, Python, Cybersecurity, Software Engineering</li>
              <li><strong>Business &amp; Digital:</strong> Digital Marketing, Medical Billing</li>
              <li><strong>Career Edge:</strong> Soft Skills, Leadership, Communication</li>
            </ul>

            <p><strong>Our Unique Model:</strong></p>

            <ul>
              <li>Internship Absorption – Students join as interns for real-world experience.</li>
              <li>Job Placement – Top performers placed within our group companies.</li>
              <li>Campus Tie-ups – MoUs with engineering colleges for add-on courses &amp; workshops.</li>
            </ul>
          </div>

          {/* RIGHT – Logo top + Image bottom */}
          <div className="branch-right">
            <div className="branch-logo">
              <img src="/mentorix-logo.png" alt="Mentorix Academy Logo" />
            </div>
            <div className="branch-img-wrap">
              <img src="/mentorixbranch.jpeg" alt="Training Institute" />
            </div>
          </div>

        </div>

        {/* ================= DOLPHIN ================= */}
        <div className="branch-card reveal">

          {/* LEFT – Content */}
          <div className="branch-content">
            <h2>Dolphine Naturals</h2>

            <p>
              Dolphine Naturals, a venture by VGM Meridian Groups, brings you
              wholesome organic &amp; herbal products crafted for health and wellness.
            </p>

            <p>
              We blend tradition with nature to deliver pure, instant goodness
              in every bite.
            </p>

            <p><strong>Our Products:</strong></p>

            <ul>
              <li>Moringa Dip Soup – Boost immunity with nature's powerhouse</li>
              <li>Vallarai Dip Soup – Detox &amp; glow</li>
              <li>Pirandai Dip Soup – Soothe &amp; strengthen</li>
              <li>Hibiscus Tea – Refresh &amp; rejuvenate</li>
              <li>Aavarampoo Tea – Savor the fragrance of wellness</li>
              <li>Sangu Poo Tea – Nature's stress relief</li>
              <li>Ginger Tea – Spice up your immunity</li>
              <li>Unique Honey Powder – Preserve nature's sweetness</li>
            </ul>
          </div>

          {/* RIGHT – Logo top + Image bottom */}
          <div className="branch-right">
            <div className="branch-logo">
              <img src="/dolphin-logo.png" alt="Dolphine Naturals Logo" />
            </div>
            <div className="branch-img-wrap">
              <img src="/dolphin.jpg" alt="Health & Wellness Products" />
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
