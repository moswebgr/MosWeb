import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

type Project = {
  title: string;
  category: "Web" | "Games" | "Other";
  image: string;
  description: string;
  link?: string;
  coDev?: string;
};

const projects: Project[] = [
  {
    title: "FitTracker Native App",
    category: "Web",
    image: "/images/FitTracker.png",
    description: "A Expo Build Apk",
    link: "#",
  },
  {
    title: "Rifts: A World Apart",
    category: "Games",
    image: "/images/newrifts2.png",
    description: "A 2D turn-based RPG made in RPG Maker MV.",
    link: "https://hakairyu.itch.io/rifts-a-world-apart",
  },
  {
    title: "Mastro Adventures",
    category: "Games",
    image: "/images/mastro-adventure2.png",
    description: "A 2D turn-based RPG made with Unity and C#.",
    link: "https://hakairyu.itch.io/mastro-adventures",
  },
  {
    title: "Rock Paper Scissors (C)",
    category: "Other",
    image: "/images/rps.png",
    description: "A simple command-line rock-paper-scissors game written in C.",
  },
  {
    title: "RPG Enemy Guide (C++)",
    category: "Other",
    image: "/images/enemyindex.png",
    description: "A terminal-based guide tool for enemy data in an RPG project.",
  },
  {
    title: "Authenticator (Ruby)",
    category: "Other",
    image: "/images/ruby.png",
    description: "A simple terminal-based app that validates user credentials and displays stored profile information.",
  },
  {
    title: "FitTracker Web",
    category: "Web",
    image: "/images/FitTracker.png",
    description: "A small interactive app built with React and modern hooks.",
    link: "https://moswebgr.github.io/FitTracker/",
  },
  {
    title: "Calendar",
    category: "Web",
    image: "/images/Calendar2.png",
    description: "A Calendar web application built with JavaScript during my internship.",
    link: "https://calendar.mosweb.gr/",
  },

];

const categories = ["All", "Web", "Games", "Other"] as const;
type Category = typeof categories[number];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-container" aria-labelledby="projects-heading">
      <header className="projects-header">
        <h1 id="projects-heading">Our Projects</h1>
      </header>

      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-button ${filter === cat ? "active" : ""}`}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-card"
              aria-label={`Project: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              {project.coDev && (
                <a
                  href={project.coDev}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-codev-link"
                >
                  Co-Dev →
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-view-link"
                >
                  View →
                </a>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}