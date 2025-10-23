import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SolonMosios from "./components/SolonMosios";
import Projects from "./components/Projects";
import VasilisMoskofidis from "./components/VasilisMoskofidis";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Εξαφανίζει το splash μετά από 3 δευτερόλεπτα
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <>
            <NavbarWithActivePage />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solonmosios" element={<SolonMosios />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/vasilismoskofidis" element={<VasilisMoskofidis />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

/**
 * Το Navbar πρέπει να ξέρει ποια σελίδα είναι ενεργή με βάση το URL.
 * Εδώ χρησιμοποιούμε το useLocation για να το υπολογίσουμε.
 */
import { useLocation } from "react-router-dom";

function NavbarWithActivePage() {
  const location = useLocation();

  const getCurrentPage = (): "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis" => {
    switch (location.pathname) {
      case "/solonmosios":
        return "SolonMosios";
      case "/projects":
        return "Projects";
      case "/vasilismoskofidis":
        return "VasilisMoskofidis";
      default:
        return "Home";
    }
  };

  return <Navbar currentPage={getCurrentPage()} setCurrentPage={() => {}} />;
}
