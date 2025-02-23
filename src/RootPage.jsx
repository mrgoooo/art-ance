import { useState } from "react";
import { Menu, X } from "lucide-react";
import GradientAnimation from "./Components/Animation";
import Image from "./assets/images/cuttedlogo.png";
import HomePage from "./Components/HomePage";

export default function RootPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  const renderComponent = () => {
    switch (selectedSection) {
      case "Home":
        return (
          <div className=" w-full ">
            <HomePage />
          </div>
        );
      default:
        return <h2 className="text-center">Nie znaleziono strony</h2>;
    }
  };

  return (
    <div className=" w-full bg-slate-400 text-white flex flex-col ">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-black">
        <div className="text-2xl font-bold">
          <img src={Image} className="h-8 w-8" alt="Logo" />
        </div>
        <div className="hidden sm:block mx-auto">
          <ul className="flex items-center space-x-12 p-3">
            {["Home", "Oferta", "Realizacja", "O Nas", "Kontakt", "Portal"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={`transition duration-300 ${
                      selectedSection === section
                        ? "text-white/60"
                        : "text-white hover:text-neutral-500"
                    }`}
                    onClick={() => setSelectedSection(section)}
                  >
                    {section}
                  </button>
                </li>
              )
            )}
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

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full">
        <GradientAnimation />
        <div className="mt-4 bg-slate-500 w-full">{renderComponent()}</div>
      </main>

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
            "NUMBERS BY ARTANCE",
            "OFERTA",
            "PROCES",
            "OPINIE",
            "DOŁĄCZ DO NAS",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block border-b border-gray-700 pb-2"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="p-5" onClick={() => setIsSidebarOpen(false)}>
          HIDE &gt;
        </button>
      </div>
    </div>
  );
}
