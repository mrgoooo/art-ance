import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Image from "../assets/images/cuttedlogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(
    sessionStorage.getItem("selectedSection") || "Home"
  );

  useEffect(() => {
    return () => {
      console.log("Komponent odmontowany, wykonuję kod na odchodne");
      sessionStorage.setItem(`scroll-${selectedSection}`, window.scrollY);
      sessionStorage.setItem("selectedSection", selectedSection);
    };
  }, []);
  return (
    <nav className="z-30">
      <header className="w-full flex justify-between items-center p-4 bg-black">
        <button onClick={() => navigate("/")} className="text-2xl font-bold">
          <img src={Image} className="h-8 w-8" alt="Logo" />
        </button>
        <div className="hidden sm:block mx-auto">
          <ul className="flex items-center space-x-12 p-3">
            {[
              { name: "Home", path: "/" },
              { name: "Oferta", path: "/oferta" },
              { name: "Realizacje", path: "/realizacje" },
              { name: "O Nas", path: "/o-nas" },
              { name: "Kontakt", path: "/kontakt" },
            ].map((section) => (
              <li key={section.name}>
                <button
                  className="text-white hover:text-neutral-500 transition duration-300"
                  onClick={() => navigate(section.path)}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="text-white focus:outline-none hover:text-neutral-500 transition duration-300"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Otwórz menu"
        >
          <Menu size={32} />
        </button>
      </header>

      {/* Sidebar */}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black duration-300 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Oferta", path: "/oferta" },
            { name: "Realizacje", path: "/realizacje" },
            { name: "ONas ", path: "/o-nas" },
            { name: "Kontakt", path: "/kontakt" },
          ].map((item, index) => (
            <button
              key={index}
              className="block w-full text-left border-b border-gray-700 pb-2 text-white hover:text-neutral-500 transition duration-300"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <button className="p-5" onClick={() => setIsSidebarOpen(false)}>
          HIDE &gt;
        </button>
      </div>
    </nav>
  );
}
