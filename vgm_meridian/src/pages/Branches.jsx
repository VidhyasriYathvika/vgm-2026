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

          {/* LEFT – Logo */}
          <div className="branch-logo">
            <img src="/thulir-logo.jpeg" alt="Thulir Info Tech Logo" />
          </div>

          {/* MIDDLE – Content */}
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

          {/* RIGHT – Two images stacked */}
          <div className="branch-image-stack">
            <div className="branch-img-wrap">
              <img src="/thulir.webp" alt="IT Services" />
            </div>
            <div className="branch-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop"
                alt="Digital Marketing & Web Services"
              />
            </div>
          </div>

        </div>

        {/* ================= MENTORIX ================= */}
        <div className="branch-card reveal">

          {/* LEFT – Logo */}
          <div className="branch-logo">
            <img src="/mentorix-logo.png" alt="Mentorix Academy Logo" />
          </div>

          {/* MIDDLE – Content */}
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

          {/* RIGHT – Two images stacked */}
          <div className="branch-image-stack">
            <div className="branch-img-wrap">
              <img src="/mentorix.jpg" alt="Training Institute" />
            </div>
            <div className="branch-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop"
                alt="Students Learning & Collaboration"
              />
            </div>
          </div>

        </div>

        {/* ================= DOLPHIN ================= */}
        <div className="branch-card reveal">

          {/* LEFT – Logo */}
          <div className="branch-logo">
            <img src="/dolphin-logo.png" alt="Dolphine Naturals Logo" />
          </div>

          {/* MIDDLE – Content */}
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

          {/* RIGHT – Two images stacked */}
          <div className="branch-image-stack">
            <div className="branch-img-wrap">
              <img src="/dolphin.jpg" alt="Health & Wellness Products" />
            </div>
            <div className="branch-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&fit=crop"
                alt="Herbal Tea & Natural Remedies"
              />
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
