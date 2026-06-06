import "./Home.css";
import { ProjectsList } from "./ProjectsList";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa6";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { Link } from "react-router-dom";

function Home({ theme }) {
  return (
    <div className="home-container" style={{ color: theme.textPrimary }}>
      <div className="home-container-inner">
        <section className="hero-top home-section">
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
            <Link
              className="see-all-projects"
              to="/projects"
              style={{
                color: theme.textPrimary,
                fontSize: typography.size.sm,
                fontWeight: typography.weight.bold,
              }}
            >
              All Projects <FaArrowRight />
            </Link>
          </div>
        </section>

        <section className="projects-overview home-section">
          <Card
            image={ProjectsList[0].image}
            alt={ProjectsList[0].alt}
            title={ProjectsList[0].title}
            type={ProjectsList[0].type}
            link={`/projects#${ProjectsList[0].id}`}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={ProjectsList[1].image}
            alt={ProjectsList[1].alt}
            title={ProjectsList[1].title}
            type={ProjectsList[1].type}
            link={`/projects#${ProjectsList[1].id}`}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={ProjectsList[2].image}
            alt={ProjectsList[2].alt}
            title={ProjectsList[2].title}
            type={ProjectsList[2].type}
            link={`/projects#${ProjectsList[2].id}`}
            theme={theme}
            className="project-card"
          ></Card>

          <Card
            image={ProjectsList[3].image}
            alt={ProjectsList[3].alt}
            title={ProjectsList[3].title}
            type={ProjectsList[3].type}
            link={`/projects#${ProjectsList[3].id}`}
            theme={theme}
            className="project-card"
          ></Card>
        </section>
      </div>
    </div>
  );
}

export default Home;
