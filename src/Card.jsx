import { Link } from "react-router-dom";
import "./Card.css";

function Card({ image, alt, title, description, link, theme }) {
  return (
    <Link
      className="card"
      to={link}
      aria-label={`Open project: ${title}`}
      style={{
        color: theme.textPrimary,
        border: `1px solid ${theme.border}`,
      }}
    >
      <img src={image} alt={alt} className="card-img" />

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="project-desc">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
