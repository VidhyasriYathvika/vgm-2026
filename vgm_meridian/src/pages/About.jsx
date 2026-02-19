import React, { useEffect, useRef, useState } from "react";
import "../styles/about.css";

/* Custom Counter Hook */
const useCounter = (end, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, end, duration]);

  return count;
};

const About = () => {
  const statsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer (start when visible)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const years = useCounter(1, 1000, visible);
  const projects = useCounter(50, 2000, visible);
  const clients = useCounter(100, 2000, visible);

  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Our Company</h1>
        <p>
          Empowering businesses through technology, innovation,
          and strategic digital transformation.
        </p>
      </div>

      {/* COMPANY STORY */}
      <div className="about-text">
  <h2>Who We Are</h2>

  <p>
    We are a forward-thinking IT and digital transformation company 
    committed to delivering innovative, scalable, and secure solutions 
    for modern businesses.
  </p>

  <p>
    Our expertise spans enterprise software development, cloud platforms, 
    UI/UX design, digital marketing, automation systems, and performance-driven 
    technology strategies tailored for startups, SMEs, and global enterprises.
  </p>

  <p>
    With a team of passionate developers, designers, strategists, and consultants, 
    we combine technology with business intelligence to create measurable impact.
  </p>

  <p>
    We don’t just build software — we build digital ecosystems that help 
    organizations grow, compete, and lead in the evolving digital landscape.
  </p>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="IT Company"
          />
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats" ref={statsRef}>

        <div className="stat-card">
          <h2>{years}+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>{projects}+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>{clients}+</h2>
          <p>Happy Clients</p>
        </div>

      </div>

      {/* VISION & MISSION */}
      <div className="vision-mission">

        <div className="vm-card">
          <h3>Our Vision</h3>
          <p>
            To become a global leader in digital transformation
            by delivering innovative and reliable technology solutions.
          </p>
        </div>

        <div className="vm-card">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with scalable software,
            seamless user experiences, and strategic IT solutions.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;
