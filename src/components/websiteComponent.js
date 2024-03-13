import React from "react";

const WebsiteEmbed = ({ websiteName, description, src, repoLink }) => {
  return (
    <div className="project">
      <h2>{websiteName}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <div>
        <iframe
          src={src}
          title="Embedded CodeSandbox"
          style={{
            width: "100%",
            height: "560px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
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

export default WebsiteEmbed;
