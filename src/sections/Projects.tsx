import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { projects } from "../data/resume";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built and experimented with</p>
      </motion.div>

      <div className="proj__grid">
        {projects.map((project, index) => (
          <motion.div
            className="proj__card"
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="proj__card-header">
              <div className="proj__card-icon">
                <FiFolder />
              </div>
              <div className="proj__card-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj__github-link"
                    aria-label={`${project.name} live demo`}
                  >
                    <FiExternalLink />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj__github-link"
                  aria-label={`${project.name} on GitHub`}
                >
                  <FiGithub />
                </a>
              </div>
            </div>

            <h3 className="proj__name">{project.name}</h3>
            <p className="proj__description">{project.description}</p>

            <ul className="proj__bullets">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <div className="proj__tags">
              {project.tools.map((tool) => (
                <span className="tag" key={tool}>{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
