import { motion } from "framer-motion";
import { FiZap, FiLayers, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { personalInfo, highlights } from "../data/resume";
import "./About.css";

const iconMap: Record<string, React.ReactNode> = {
  "zap": <FiZap />,
  "layers": <FiLayers />,
  "check-circle": <FiCheckCircle />,
  "trending-up": <FiTrendingUp />,
};

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A quick intro</p>
      </motion.div>

      <motion.div
        className="about__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="about__text">
          {personalInfo.about.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        <div className="about__cards">
          {highlights.map((item, index) => (
            <motion.div
              className="about__card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <span className="about__card-icon">{iconMap[item.icon]}</span>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
