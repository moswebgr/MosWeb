import { motion } from "framer-motion";
import "./SolonMosios.css";

// Ορίζω τύπους για τα δεδομένα
interface Education {
  school: string;
  degree: string;
  period: string;
  logo: string; // Προσθήκη πεδίου για λογότυπο
}
interface Internship {
  company: string;
  role: string;
  period: string;
  desc: string;
  logo: string; // Προσθήκη πεδίου για λογότυπο
}
interface Hobby {
  title: string;
  desc: string;
  emoji: string;
}
interface SkillGroup {
  [key: string]: string[];
}

const skillGroups: SkillGroup = {
  Programming_languages: ["HTML5", "CSS3", "JavaScript", "C", "C++", "C#", "Java", "Ruby", "PHP"],
  "Frameworks & Tools": ["React", "Next.js", "Wordpress CMS", "Oracle MySQL", "Unity", "Unreal Engine 5", "RPG Maker MV"],
  Other: ["Video Editing"],
};

const hobbies: Hobby[] = [
  { title: "Aikido", desc: "Practicing since 2018, 1st Kyu", emoji: "🥋" },
  { title: "Reading", desc: "Sci-fi & mystery books", emoji: "📚" },
  { title: "Gaming", desc: "JRPGs & open-world games", emoji: "🎮" },
  { title: "Video Projects", desc: "Creating short videos for friends", emoji: "🎬" },
  { title: "RPG Maker", desc: "Developing a personal game project", emoji: "🕹️" },
];

const education: Education[] = [
  { 
    school: "ΙΕΚ ΑΚΜΗ", 
    degree: "IT Applications Technician", 
    period: "2021 – 2023", 
    logo: "https://iek-akmi.edu.gr/wp-content/uploads/2020/03/AKMI_Site_Header_304x98.png" 
  },
  { 
    school: "IEK DELTA 360", 
    degree: "Business Administration Executive", 
    period: "2019 – 2021", 
    logo: "https://www.iekdelta360.gr/iekdelta/img/iekdelta_logo.svg" 
  },
];

const internships: Internship[] = [
  {
    company: "GRDiscovery",
    role: "IT Applications Technician",
    period: "Sep 2024 – Mar 2025",
    desc: "",
    logo: "https://grdiscovery.com/wp-content/uploads/2025/08/social-1.png"
  },
  {
    company: "Καπέτας Κατασκευαστική",
    role: "Business Administration Executive",
    period: "Oct 2022 – Apr 2023",
    desc: "",
    logo: "https://kapetas.eu/wp-content/uploads/2019/11/kaptus_logo.png"
  },
];



export default function SolonMosios() {
  return (
    <div className="solon-container">
      {/* Header */}
      <motion.header
        className="solon-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="about-me-heading"
      >
        <h2 id="about-me-heading">Solon Mosios</h2>
        <p>
          I’m a developer passionate about blending logic, design, and storytelling. I enjoy experimenting with new
          technologies and learning through hands-on projects.
        </p>
      </motion.header>

      {/* Grid */}
      <div className="solon-grid">
        {/* Professional Column */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          aria-labelledby="professional-heading"
        >
          <h3 id="professional-heading" className="section-heading text-blue-400">
            Professional
          </h3>
          {/* Education */}
          <div className="solon-section">
            <h4 className="section-title">Education</h4>
            {education.map((edu) => (
              <motion.article
                key={edu.school}
                className="solon-card"
                whileHover={{ scale: 1.03 }}
                aria-label={`Education at ${edu.school}`}
              >
                <img src={edu.logo} alt={`${edu.school} logo`} className="solon-logo" />
                <h5>{edu.school}</h5>
                <p>{edu.degree}</p>
                <p>{edu.period}</p>
              </motion.article>
            ))}
          </div>
          {/* Internships */}
          <div className="solon-section">
            <h4 className="section-title">Internships</h4>
            {internships.map((intern) => (
              <motion.article
                key={intern.company}
                className="solon-card"
                whileHover={{ scale: 1.03 }}
                aria-label={`Internship at ${intern.company}`}
              >
                <img src={intern.logo} alt={`${intern.company} logo`} className="solon-logo" />
                <h5>{intern.company}</h5>
                <p>{intern.role}</p>
                <p>{intern.period}</p>
                <p>{intern.desc}</p>
              </motion.article>
            ))}
          </div>
          {/* Skills */}
          <div className="solon-section">
            <h4 className="section-title">Skills</h4>
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div key={group} className="solon-card solon-skill-group">
                <h5>{group}</h5>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill} className="solon-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Column */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          aria-labelledby="personal-heading"
        >
          <h3 id="personal-heading" className="section-heading text-purple-400">
            Personal
          </h3>
          {hobbies.map((hobby) => (
            <motion.article
              key={hobby.title}
              className="solon-card hobby-card"
              whileHover={{ scale: 1.03 }}
              aria-label={`Hobby: ${hobby.title}`}
            >
              <span className="hobby-emoji">{hobby.emoji}</span>
              <div>
                <h5>{hobby.title}</h5>
                <p>{hobby.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </div>
  );

}



