import { Link } from "react-router-dom";
import "./Header.css";
import { spacing } from "./spacing";
import Sun from "./assets/sun.svg?react";
import Moon from "./assets/moon.svg?react";
import { typography } from "./typography";

function Header({ theme, setMode, mode }) {
  const toggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div
      style={{
        background: theme.surface,
        color: theme.text,
        padding: spacing.md,
      }}
      className={
        mode === "light" ? "header-container header-light" : "header-container"
      }
    >
      <div className="header-container-inner">
        <img
          src="/my_photo.jpeg"
          alt="ortrait of Cynthia Monkap"
          className="profile-photo"
        />
        <div className="header-btn-container">
          <Link
            to="/"
            className="link"
            style={{
              color: theme.textPrimary,
              fontSize: typography.size.sm,
              fontWeight: typography.weight.bold,
              background: theme.elevated,
            }}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="link"
            style={{
              color: theme.textPrimary,
              fontSize: typography.size.sm,
              fontWeight: typography.weight.bold,
              background: theme.elevated,
            }}
          >
            Projects
          </Link>
        </div>
        <button
          className="toggle-btn"
          onClick={toggle}
          aria-label="Toggle dark mode"
        >
          {mode === "dark" ? (
            <Sun className="icon" />
          ) : (
            <Moon className="icon" />
          )}
        </button>
      </div>
    </div>
  );
}
export default Header;
