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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Unable to connect to the server. Please check your connection and try again.");
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
    </>
  );
}
