import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GradientAnimation from "../Components/Animation";
import Image from "../assets/images/cuttedlogo.png";
import HomePage from "../Components/HomePage";
import OfferPage from "../Other/Oferta";
import Kontakt from "../Components/Kontakt";
import LastFooter from "../Components/LastFooter";
import ONas from "../ONas/ONas";
import REalizacje from "../Realizacje/Realizacje";
import UX from "../UX/UX";
import ContactForm from "../Kontakt/ContactForm";

export default function RootPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(
    sessionStorage.getItem("selectedSection") || "Home"
  );
  const savedScroll = sessionStorage.getItem(`scroll-${selectedSection}`);

  const saveToSessionStorage = () => {
    // Zapisz dane do sessionStorage
    sessionStorage.setItem("selectedSection", "Home");
    alert("Zapisano do sessionStorage!");
  };
  // Przywracanie pozycji przewijania po załadowaniu strony

  useEffect(() => {
    return () => {
      console.log("Komponent odmontowany, wykonuję kod na odchodne");
      sessionStorage.setItem(`scroll-${selectedSection}`, window.scrollY);
      sessionStorage.setItem("selectedSection", selectedSection);
    };
  }, []);

  const renderComponent = () => {
    switch (selectedSection) {
      case "Home":
        return (
          <div className=" w-full ">
            <HomePage />
          </div>
        );
      case "Oferta":
        return (
          <div className=" w-full flex justify-center animate-fade-in-slow ">
            <OfferPage onNavigate={() => setSelectedSection("UX")} />
          </div>
        );
      case "O Nas":
        return (
          <div className=" w-full flex justify-center animate-fade-in-slow ">
            <ONas />
          </div>
        );

      case "Realizacja":
        return (
          <div className=" w-full flex justify-center animate-fade-in-slow ">
            <REalizacje />
          </div>
        );
      case "UX":
        return (
          <div className="w-full flex justify-center animate-fade-in-slow">
            <UX />
          </div>
        );
      case "Kontakt":
        return (
          <div className="w-full flex justify-center animate-fade-in-slow">
            <ContactForm />
          </div>
        );

      default:
        return <h2 className="text-center">Nie znaleziono strony</h2>;
    }
  };

  return (
    <div className="w-full bg-black text-white flex flex-col ">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-black">
        <button
          onClick={() => setSelectedSection("Home")}
          className="text-2xl font-bold"
        >
          <img src={Image} className="h-8 w-8" alt="Logo" />
        </button>
        <div className="hidden sm:block mx-auto">
          <ul className="flex items-center space-x-12 p-3">
            {["Home", "Oferta", "Realizacja", "O Nas", "Kontakt", "Portal"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={`transition duration-300 ${
                      selectedSection === section
                        ? "text-white hover:text-neutral-500"
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
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <HomePage />
        </div>
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
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
