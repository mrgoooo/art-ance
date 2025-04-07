import Image from "../assets/images/SERWER.png";
import RevealOnScroll from "../animations/RevealAnimation";
import { Link } from "react-router-dom";

function SERWHero() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1100px] pb-8 z-10 bg-">
      <div className="xl:w-[970px] text-3xl justify-center text-white sm:text-[70px] sm:leading-[90px] md:text-[90px] md:leading-[100px]  xl:text-[140px] lg:text-[120px] lg:leading-[130px]  xl:leading-[146px]">
        Zaufaj nam – szybkie zmiany, pełna kontrola, niezawodne serwery!
      </div>
    </div>
  );
}
export default SERWHero;
