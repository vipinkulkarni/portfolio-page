import { motion } from "framer-motion";
import { experience } from "../data/resume";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I've worked and what I've built</p>
      </motion.div>

      <div className="exp__timeline">
        {experience.map((exp, index) => (
          <motion.div
            className="exp__card"
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="exp__dot" />
            <div className="exp__header">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <p className="exp__company">{exp.company}</p>
              </div>
              <div className="exp__meta">
                <span className="exp__duration">{exp.duration}</span>
                <span className="exp__location">{exp.location}</span>
              </div>
            </div>

            <div className="exp__tags">
              {exp.techStack.map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>

            <ul className="exp__bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
