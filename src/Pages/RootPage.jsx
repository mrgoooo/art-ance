import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "../assets/images/cuttedlogo.png";
import HomePage from "../HomePage/HomePage";
import LastFooter from "../Components/LastFooter";
import Navbar from "../Components/Navbar";

export default function RootPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(
    sessionStorage.getItem("selectedSection") || "Home"
  );

  useEffect(() => {
    return () => {
      sessionStorage.setItem(`scroll-${selectedSection}`, window.scrollY);
      sessionStorage.setItem("selectedSection", selectedSection);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}

      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <HomePage />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
