import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Projects.css";
import { ProjectsList } from "./ProjectsList";
import CardFull from "./CardFull";

function Projects({ theme }) {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");

    if (!id) return;

    setTimeout(() => {
      const el = document.getElementById(id);

      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      el.classList.add("highlight");

      setTimeout(() => {
        el.classList.remove("highlight");
      }, 1500);
    }, 50);
  }, [location]);

  return (
    <div className="projects-container" style={{ color: theme.textPrimary }}>
      <div className="projects-container-inner">
        <div className="all-projects">
          <div className="mini-game-projects">
            <h3 className="project-type">Games</h3>
            <div className="projects mini-game">
              {ProjectsList.filter((p) => p.type === "mini-game").map(
                (proj) => (
                  <div id={proj.id} key={proj.id}>
                    <CardFull
                      image={proj.image}
                      title={proj.title}
                      type={proj.type}
                      linkGit={proj.github}
                      linkLive={proj.live}
                      tag={proj.tags}
                      description={proj.description}
                      demoType={proj.demoType}
                      theme={theme}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="case-study-projects">
            <h3 className="project-type">Case Study Projects</h3>
            <div className="projects case-study">
              {ProjectsList.filter((p) => p.type === "case-study").map(
                (proj) => (
                  <div id={proj.id} key={proj.id}>
                    <CardFull
                      image={proj.image}
                      title={proj.title}
                      type={proj.type}
                      linkGit={proj.github}
                      linkLive={proj.live}
                      tag={proj.tags}
                      description={proj.description}
                      demoType={proj.demoType}
                      theme={theme}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="main-projects">
            <h3 className="project-type">Main Projects</h3>
            <div className="projects main-project">
              {ProjectsList.filter((p) => p.type === "main-project").map(
                (proj) => (
                  <div id={proj.id} key={proj.id}>
                    <CardFull
                      image={proj.image}
                      title={proj.title}
                      type={proj.type}
                      linkGit={proj.github}
                      linkLive={proj.live}
                      tag={proj.tags}
                      description={proj.description}
                      demoType={proj.demoType}
                      theme={theme}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
