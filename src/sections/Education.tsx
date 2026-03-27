import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/resume";
import "./Education.css";

export default function Education() {
  return (
    <section className="section" id="education">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and foundation</p>
      </motion.div>

      <div className="edu__grid">
        <motion.div
          className="edu__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu__card-icon">
            <FiBookOpen />
          </div>
          <h3 className="edu__institution">{education.institution}</h3>
          <p className="edu__degree">{education.degree}</p>
          <div className="edu__details">
            <span>{education.duration}</span>
            <span>{education.location}</span>
          </div>
          <div className="edu__gpa">
            <span className="edu__gpa-label">GPA</span>
            <span className="edu__gpa-value">{education.gpa}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
