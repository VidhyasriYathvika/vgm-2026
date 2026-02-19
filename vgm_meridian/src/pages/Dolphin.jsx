import "../styles/dolphin.css";
import useScrollReveal from "../hooks/useScrollReveal";
export default function Dolphin() {useScrollReveal();
  return (
    <section className="dolphin-page reveal">
      <div className="dolphin-container">
        <h1>Dolphin Naturals</h1>
        <p>
          Dolphin Naturals delivers premium natural and wellness products
          designed for healthier living and sustainable lifestyles.
        </p>
      </div>
    </section>
  );
}
