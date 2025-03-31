import UXHero from "./UXHero";
import UXWhy from "./UXWhy";
import Image from "../assets/images/background.png";
import UXCarousel from "./UXCarousel";
import UXPytania from "./UXPytania";
import { useEffect } from "react";
import UXComputer from "./UXComputer";

function UX() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" relative bg-gradient-to-b from-[#dfdde2] to-[#f3ae69] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8 z-0">
      <UXHero />
      <UXWhy />
      <img className="h-[800px]" src={Image}></img>
      <UXCarousel />
      <UXComputer />
      <UXPytania />
    </div>
  );
}
export default UX;
