import BriefCaseIcon from "./assets/briefcase.svg?react";
import ServiceIcon from "./assets/service.svg?react";
import GameIcon from "./assets/game.svg?react";
import "./CardFull.css";

function CardFull({
  image,
  title,
  type,
  description,
  alt,
  linkGit,
  linkLive,
  tag,
  theme,
  demoType,
}) {
  return (
    <article
      className="card-full"
      aria-label={`Open project: ${title}`}
      style={{
        color: theme.textPrimary,
        border: `2px solid ${theme.border}`,
        background: theme.elevated,
      }}
    >
      <figure className="card-full-head">
        <img src={image} alt={alt} className="card-full-img" loading="lazy" />
      </figure>

      <div className="card-full-body-top">
        <h2 className="card-full-title">{title}</h2>
        <div className="card-full-type">
          <strong style={{ color: theme.muted }}>type: </strong>
          <span className="card-full-type-title">{type}</span>
          {type === "main-project" ? (
            <BriefCaseIcon className="card-full-type-svg" />
          ) : type === "case-study" ? (
            <ServiceIcon className="card-full-type-svg" />
          ) : (
            <GameIcon className="card-full-type-svg" />
          )}
        </div>
        <p className="card-full-project-desc">{description}</p>
      </div>
      <div className="card-full-body-bottom">
        <div className="card-full-tags">
          {tag.map((t, index) => (
            <span key={index} className="tag-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="card-full-footer">
        <a href={linkGit} target="_blank" rel="noreferrer">
          <button>Source Code</button>
        </a>

        {demoType !== "none" && (
          <a href={linkLive} target="_blank" rel="noreferrer">
            <button>{demoType === "video" ? "Video Demo" : "Live Demo"}</button>
          </a>
        )}
      </div>
    </article>
  );
}

export default CardFull;
