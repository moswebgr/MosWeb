import { motion } from "framer-motion";
import "./home.css";

export default function Home() {
  return (
    <section className="home-container" aria-labelledby="hero-heading">
      {/* Hero Section */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 id="hero-heading">
          Welcome to <span className="highlight">MosWeb</span>
        </h1>
        <p className="hero-subtitle">
          Crafting the future with innovative web and game development solutions.
        </p>
        <motion.a
          href="https://mosweb.gr/"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Discover Our Work
        </motion.a>
      </motion.header>

      {/* Expertise Section */}
      <motion.section
        className="expertise"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        aria-labelledby="expertise-heading"
      >
        <h2 id="expertise-heading" className="expertise-title">
          Our Expertise
        </h2>
        <div className="expertise-grid">
          <article className="expertise-card">
            <h3>Web Development</h3>
            <p>
              We have experience in modern web development, working with technologies like React, Next.js, JavaScript, CSS, HTML, and PHP. We're also familiar with WordPress, including customizations using Elementor and WooCommerce.
            </p>
          </article>
          <article className="expertise-card">
            <h3>Game Development</h3>
            <p>
              we specialize in game development using powerful engines like Unity and Unreal Engine. From immersive 3D experiences to mobile and web-based games, we bring ideas to life with cutting-edge technology and creative design.
            </p>
          </article>
          <article className="expertise-card">
            <h3>Software Solutions</h3>
            <p>
              We also have experience with software development in C, C++, C#, Python, Java, and Ruby.
            </p>
          </article>
        </div>
      </motion.section>
    </section>
  );
}