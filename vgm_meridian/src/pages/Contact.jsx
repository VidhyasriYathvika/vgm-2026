import React, { useState } from "react";
import "../styles/contact.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openWhatsApp = (data) => {
    const whatsappNumber = "919514192511";
    const text =
      `*New Contact from VGM Meridian Website*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      (data.subject ? `*Subject:* ${data.subject}\n` : "") +
      `*Message:* ${data.message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      // Store form data in localStorage (frontend-only approach)
      const existingData = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
      const newSubmission = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      };
      existingData.push(newSubmission);
      localStorage.setItem("contact_submissions", JSON.stringify(existingData));

      // Show success message
      setSubmitStatus("success");
      setStatusMessage("Thank you! Your message has been saved and will be sent via WhatsApp.");
      
      // Open WhatsApp with the form data
      openWhatsApp(formData);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out to VGM Meridian Group for
          partnerships, services, or general inquiries.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>VGM Meridian Group Pvt Ltd</h2>

          <p>
            A diversified group delivering excellence in technology, education,
            mentorship, and sustainable products.
          </p>

          <div className="info-item">
            <strong>📍 Address</strong>
            <span>Odasalpatti X Road, Dharmapuri,
TamilNadu – 635303</span>
          </div>

          <div className="info-item">
            <strong>📞 Phone</strong>
            <span>+91 7904730223</span>
          </div>

          <div className="info-item">
            <strong>✉️ Email</strong>
            <span>vgmmeridiangroups@gmail.com

</span>
          </div>

          <div className="info-item">
            <strong>⏰ Working Hours</strong>
            <span>Mon – Sat: 10:00 AM – 07:00 PM</span>
          </div>

          <a
            href="https://wa.me/919514192511"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-contact-btn"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          {submitStatus === "success" && (
            <div className="form-success">
              {statusMessage}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="form-error">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </section>

      {/* BRANCH LOGOS SLIDER */}
      <section className="logos-slider">
        <div className="logos-track">
          <img src="/thulir-logo.jpeg" alt="Thulir Info Tech" />
          <img src="/mentorix-logo.png" alt="Mentorix Academy" />
          <img src="/dolphin-logo.png" alt="Dolphine Naturals" />
          <img src="/thulir-logo.jpeg" alt="Thulir Info Tech" />
          <img src="/mentorix-logo.png" alt="Mentorix Academy" />
          <img src="/dolphin-logo.png" alt="Dolphine Naturals" />
        </div>
      </section>
    </>
  );
}
