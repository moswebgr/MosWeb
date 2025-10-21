import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SolonMosios from "./components/SolonMosios";
import Projects from "./components/Projects";
import VasilisMoskofidis from "./components/VasilisMoskofidis";

type Page = "Home" | "SolonMosios" | "Projects" | "VasilisMoskofidis";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState<Page>("Home");

  // Αυτόματη εξαφάνιση splash μετά 3 δευτ.
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "SolonMosios":
        return <SolonMosios />;
      case "Projects":
        return <Projects />;
      case "VasilisMoskofidis":
        return <VasilisMoskofidis />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar currentPage={page} setCurrentPage={setPage} />
          <main className="p-6">{renderPage()}</main>
          <Footer />
        </>
      )}
    </div>
  );
}