import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

type NavbarProps = {
  currentPage: "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis";
  setCurrentPage: (page: "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis") => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const pages = ["Home", "SolonMosios", "Projects", "VasilisMoskofidis"] as const;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Χρησιμοποιούμε το useNavigate για να αλλάξουμε τη διαδρομή

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page: "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis") => {
    setCurrentPage(page);
    setIsMenuOpen(false);

    // Ενημερώνουμε τη διεύθυνση URL όταν αλλάζει η σελίδα
    switch (page) {
      case "Home":
        navigate("/");
        break;
      case "SolonMosios":
        navigate("/solonmosios");
        break;
      case "Projects":
        navigate("/projects");
        break;
      case "VasilisMoskofidis":
        navigate("/vasilismoskofidis");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Brand/Logo */}
      <Link to="/" className="navbar-logo">
        <img src="http://www.mosweb.gr/mosweb.png" alt="MOSWEB Logo" className="logo-img" />
        <span className="brand-text">MOSWEB</span>
      </Link>

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
                onClick={() => handlePageChange(p)}
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
