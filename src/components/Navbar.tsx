import { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

type NavbarProps = {
  currentPage: "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis" ;
  setCurrentPage: (page: "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis" ) => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const pages = ["Home", "SolonMosios", "Projects", "VasilisMoskofidis", ] as const;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Brand/Logo */}
      <a href="/" className="navbar-logo">
        <img src="mosweb.png" alt="MOSWEB Logo" className="logo-img" />
        <span className="brand-text">MOSWEB</span>
      </a>
      {/* Hamburger Button */}
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      {/* Fullscreen Menu */}
      <motion.div
        className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="close-button"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        <ul className="mobile-menu-list">
          {pages.map((p) => (
            <li key={p}>
              <motion.button
                className={`mobile-menu-button ${currentPage === p ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage(p);
                  setIsMenuOpen(false);
                }}
                aria-current={currentPage === p ? "page" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {p === "SolonMosios" ? "Solon Mosios" : p === "VasilisMoskofidis" ? "Vasilis Moskofidis" : p}
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}