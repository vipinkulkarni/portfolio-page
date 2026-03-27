import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { awards } from "../data/resume";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognition and milestones</p>
      </motion.div>

      <div className="ach__grid">
        {awards.map((award, index) => (
          <motion.div
            className="ach__card"
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="ach__icon">
              <FiAward />
            </div>
            <h3 className="ach__title">{award.title}</h3>
            <p className="ach__org">{award.organization}</p>
            <span className="ach__date">{award.date}</span>
            <p className="ach__desc">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
