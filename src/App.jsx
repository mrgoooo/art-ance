import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RootPage from "./Pages/RootPage";
import Navbar from "./Components/Navbar";
import REalizacje from "./Realizacje/Realizacje";
import KontaktPage from "./Kontakt/KontaktPage";
import Oferta from "./Oferta/Oferta";
import ONas from "./ONas/ONas";
import WebDev from "./WebDev/WebDev";
import UX from "./UX/UX";
import SEO from "./SEO/SEO";
import SERW from "./Serwerowanie/SERW";
import WMan from "./WebManagment/WMan";
import "./App.css";

const App = () => {
  useEffect(() => {
    const favicon = document.getElementById("favicon");

    const setFavicon = (isDark) => {
      if (favicon) {
        favicon.href = isDark ? "/cuttedblacklogo.ico" : "/cuttedlogo.ico";
      }
    };

    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setFavicon(isDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setFavicon(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/oferta/webdev" element={<WebDev />} />
        <Route path="/oferta/UX-UI" element={<UX />} />
        <Route path="/oferta/SEO" element={<SEO />} />
        <Route path="/oferta/serwerowanie" element={<SERW />} />
        <Route path="/oferta/web-managment" element={<WMan />} />
        <Route path="/realizacje" element={<REalizacje />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route
          path="/portal"
          element={<h2 className="text-center">Portal</h2>}
        />
        <Route
          path="*"
          element={<h2 className="text-center">Nie znaleziono strony</h2>}
        />
      </Routes>
    </Router>
  );
};

export default App;
