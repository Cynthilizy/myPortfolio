import "./Home.css";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa6";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { Link } from "react-router-dom";

function Home({ theme }) {
  return (
    <div className="home-container" style={{ color: theme.textPrimary }}>
      <div className="home-container-inner">
        <section className="hero-top">
          <div className="hero-left">
            <div className="hero-intro-row">
              <p className="hero-kicker">Hello, I'm</p>

              <h1
                className="hero-name"
                style={{ fontSize: typography.size["4xl"] }}
              >
                Cynthia Monkap
              </h1>
            </div>

            <h2
              className="hero-role"
              style={{ fontSize: typography.size.xl, marginTop: spacing.md }}
            >
              Full-Stack Developer
            </h2>

            <p
              className="hero-description"
              style={{ lineHeight: typography.lineHeight.relaxed }}
            >
              I build full-stack applications with modern web technologies,
              creating responsive interfaces, scalable backend systems, and
              cloud-connected solutions.
            </p>
          </div>

          <div className="hero-right">
            <a href="/Cynthia_Monkap_CV.pdf" download>
              <button
                className="download-btn"
                style={{ background: theme.elevated, color: theme.textPrimary }}
              >
                Download CV
              </button>
            </a>
          </div>
        </section>

        <section className="projects-overview">
          <Card
            image={"/card-placeholder.jpg"}
            alt={"project 1 image"}
            title={"Testing Card"}
            description={"Coming soon, relax"}
            link={"./projects/Project1"}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={"/card-placeholder.jpg"}
            alt={"project 1 image"}
            title={"Testing Card"}
            description={"Coming soon, relax"}
            link={"./projects/Project2"}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={"/card-placeholder.jpg"}
            alt={"project 1 image"}
            title={"Testing Card"}
            description={"Coming soon, relax"}
            link={"./projects/Project3"}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={"/card-placeholder.jpg"}
            alt={"project 1 image"}
            title={"Testing Card"}
            description={"Coming soon, relax"}
            link={"/projects"}
            theme={theme}
            className="project-card"
          ></Card>

          <Link className="see-all-projects" to="/projects">
            <p>See All Projects</p>
            <FaArrowRight />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
