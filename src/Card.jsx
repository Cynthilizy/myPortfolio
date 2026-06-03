import { Link } from "react-router-dom";
import BriefCaseIcon from "./assets/briefcase.svg?react";
import ServiceIcon from "./assets/service.svg?react";
import GameIcon from "./assets/game.svg?react";
import "./Card.css";

function Card({ image, alt, title, type, description, link, tag, theme }) {
  return (
    <Link
      className="card"
      to={link}
      aria-label={`Open project: ${title}`}
      style={{
        color: theme.textPrimary,
        border: `2px solid ${theme.border}`,
        background: theme.elevated,
      }}
    >
      <div className="card-head">
        <img src={image} alt={alt} className="card-img" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-type">
          <strong style={{ color: theme.muted }}>type: </strong>
          <h5 className="type-title">{type}</h5>
          {type === "main-project" ? (
            <BriefCaseIcon className="type-svg" />
          ) : type === "case-study" ? (
            <ServiceIcon className="type-svg" />
          ) : (
            <GameIcon className="type-svg" />
          )}
        </div>
        <p className="project-desc">{description}</p>
      </div>
      <div className="card-footer">{tag}</div>
    </Link>
  );
}

export default Card;
