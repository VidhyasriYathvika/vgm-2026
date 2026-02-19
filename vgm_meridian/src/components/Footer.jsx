import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><img src="/linkedin-logo.avif"/></a>
          <a href="https://www.instagram.com/vgmmeridian?igsh=MW4yejZ3dGF1MWh4OA==" aria-label="Instagram"><img src="/insta-logo.webp"/></a>
          <a href="mailto:Vgmmeridiangroups@gmail.com" aria-label="Email">📩</a>
          <a href="tel:+91 7904730223" aria-label="Phone">📞</a>
        </div>

        <p>
          © 2026 VGM Meridian Group Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
