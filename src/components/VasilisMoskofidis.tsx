import { motion } from "framer-motion";
import "./VasilisMoskofidis.css";

export default function VasilisMoskofidis() {
  return (
    <motion.div
      className="vasilis-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {}
      <div className="vasilis-profile-header">
        <div className="vasilis-profile-picture-placeholder">
          <img
            src="/images/vasilismoskofidis.jpg"
            alt="Vasilis Moskofidis Profile Picture"
            className="vasilis-profile-picture"
          />
        </div>
        <div className="vasilis-profile-info">
          <h1 className="vasilis-name">Vasilis Moskofidis</h1>
          <h2 className="vasilis-headline">Web Developer | Specializing in WordPress, React, and Next.js</h2>
          <p className="vasilis-location">Thessaloniki, Greece</p>
        </div>
      </div>

      {}
      <div className="vasilis-section">
        <h3 className="vasilis-section-title">About</h3>
        <p className="vasilis-section-content">
          I’m a web developer with experience in WordPress, HTML, CSS, JavaScript, React, and Next.js. I enjoy building simple and user-friendly websites.
        </p>
      </div>

      {}
      <div className="vasilis-section">
        <h3 className="vasilis-section-title">Experience</h3>
        <div className="vasilis-experience-item">
          <img
            src="https://grdiscovery.com/wp-content/uploads/2025/08/social-1.png"
            alt="GRDiscovery Logo"
            className="vasilis-logo"
          />
          <div className="vasilis-experience-details">
            <h4 className="vasilis-job-title">Web Development Intern</h4>
            <p className="vasilis-company">GRDiscovery</p>
            <p className="vasilis-duration">Thessaloniki, Greece</p>
            <p className="vasilis-description">
      
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="vasilis-section">
        <h3 className="vasilis-section-title">Education</h3>
        <div className="vasilis-education-item">
          <img
            src="https://iek-akmi.edu.gr/wp-content/uploads/2020/03/AKMI_Site_Header_304x98.png"
            alt="IEK AKMI Logo"
            className="vasilis-logo"
          />
          <div className="vasilis-education-details">
            <h4 className="vasilis-degree">Technician of Software Applications</h4>
            <p className="vasilis-institution">IEK AKMI, Thessaloniki, Greece</p>
            <p className="vasilis-description">
        
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="vasilis-section">
        <h3 className="vasilis-section-title">Skills</h3>
        <ul className="vasilis-skills-list">
          <li>WordPress</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>English Language (Actively Improving)</li>
        </ul>
      </div>
    </motion.div>
  );
}