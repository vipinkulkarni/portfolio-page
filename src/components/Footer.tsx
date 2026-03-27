import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/resume";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p className="footer__credit">
          Designed & Built by <span>{personalInfo.name}</span>
        </p>

        <p className="footer__tech">Built with React + Vite + Framer Motion</p>
      </div>
    </footer>
  );
}
