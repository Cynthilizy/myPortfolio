import React from "react";

const MobileComponent = ({ mobileName, description, videoEmbed, repoLink }) => {
  return (
    <div className="project">
      <h2>{mobileName}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <div className="demo">
        <iframe
          width="315"
          height="560"
          src={videoEmbed}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="links">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default MobileComponent;
