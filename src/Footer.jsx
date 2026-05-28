import "./Footer.css";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { FaArrowDown } from "react-icons/fa6";
import Linkedin from "./assets/linkedin.svg?react";
import Github from "./assets/github.svg?react";
import Gmail from "./assets/gmail.svg?react";

function Footer({ theme, mode }) {
  const year = new Date().getFullYear();

  return (
    <div
      className={
        mode === "light" ? "footer-container footer-light" : "footer-container"
      }
      style={{
        background: theme.surface,
        color: theme.textPrimary,
      }}
    >
      <div className="footer-container-inner">
        <div className="footer-section about">
          <div className="about-group">
            <h4 className="name" style={{ fontWeight: typography.semiBold }}>
              Cynthia Sarah Monkap
            </h4>
            <h5 className="role" style={{ fontWeight: typography.regular }}>
              FullStack Developer
            </h5>
          </div>
          <p className="copyright" style={{ marginTop: spacing.xs }}>
            {String.fromCharCode(169)} {year}
          </p>
        </div>

        <div className="footer-section contact">
          <a className="contact-link" href="mailto:cynthilizy@gmail.com">
            <span>Email me</span>
            <Gmail />
          </a>
          <a className="cv-link" href="/Cynthia_Monkap_CV.pdf" download>
            Download CV
            <FaArrowDown />
          </a>
        </div>

        <div className="footer-section connect">
          <span>Let's Connect</span>
          <div className="connect-links">
            <a href="https://www.linkedin.com/in/cynthia-monkap-3b3b31124/">
              <Linkedin />
            </a>
            <a href="https://github.com/Cynthilizy">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
