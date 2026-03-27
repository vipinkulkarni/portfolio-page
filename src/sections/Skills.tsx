import { motion } from "framer-motion";
import { skills } from "../data/resume";
import {
  SiPython, SiCplusplus, SiJavascript,
  SiReact, SiNodedotjs, SiExpress, SiHtml5, SiCss,
  SiMongodb, SiMysql, SiPostgresql,
  SiNumpy, SiPandas, SiScikitlearn,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import "./Skills.css";

const iconMap: Record<string, React.ReactNode> = {
  "Python": <SiPython />,
  "C++": <SiCplusplus />,
  "JavaScript": <SiJavascript />,
  "Java": <FaJava />,
  "React.js": <SiReact />,
  "Node.js": <SiNodedotjs />,
  "Express": <SiExpress />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "PostgreSQL": <SiPostgresql />,
  "NumPy": <SiNumpy />,
  "Pandas": <SiPandas />,
  "Scikit-Learn": <SiScikitlearn />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>

      <div className="skills__grid">
        {skills.map((category, catIndex) => (
          <motion.div
            className="skills__category"
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__items">
              {category.skills.map((skill) => (
                <div className="skills__item" key={skill}>
                  <span className="skills__icon">{iconMap[skill]}</span>
                  <span className="skills__label">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
