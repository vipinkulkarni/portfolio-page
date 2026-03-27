import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/resume";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
        </p>
      </motion.div>

      <div className="contact__content">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact__info-item">
            <FiMail className="contact__info-icon" />
            <div>
              <p className="contact__info-label">Email</p>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>
          <div className="contact__info-item">
            <FiPhone className="contact__info-icon" />
            <div>
              <p className="contact__info-label">Phone</p>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
          </div>
          <div className="contact__info-item">
            <FiMapPin className="contact__info-icon" />
            <div>
              <p className="contact__info-label">Location</p>
              <p className="contact__info-value">{personalInfo.location}</p>
            </div>
          </div>
          <div className="contact__info-item">
            <FiLinkedin className="contact__info-icon" />
            <div>
              <p className="contact__info-label">LinkedIn</p>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                Vipinkumar Kulkarni
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
