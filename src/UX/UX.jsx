import UXHero from "./UXHero";
import UXWhy from "./UXWhy";
import Image from "../assets/images/background.png";
import UXCarousel from "./UXCarousel";
import UXPytania from "./UXPytania";
import { useEffect } from "react";
import UXComputer from "./UXComputer";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
function UX() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-gradient-to-b from-[#dfdde2] to-[#f3ae69] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <UXHero />
          <UXWhy />
          <UXCarousel />
          <UXComputer />
          <UXPytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default UX;
