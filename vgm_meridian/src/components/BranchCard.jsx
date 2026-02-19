import { Link } from "react-router-dom";

export default function BranchCard({ logo, title, text, link }) {
  return (
    <div className="card">
      <img src={logo} alt={title}  />
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={link} className="btn">Explore</Link>
    </div>
  );
}
