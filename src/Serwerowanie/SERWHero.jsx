import Image from "../assets/images/SERWER.png";
import RevealOnScroll from "../animations/RevealAnimation";
import { Link } from "react-router-dom";

function SERWHero() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1100px] pb-8 z-10 bg-">
      <div className="w-full flex">
        <h2 className="w-1/2 md:w-auto text-white text-left text-5xl lg:text-8xl pt-10 pb-0 sm:pb-9">
          Serwerowanie
        </h2>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center sm:pl-0">
        <div className=" h-full w-full flex items-center">
          <div className="pt-10 w-full ">
            <div className="w-2/3 hidden md:block lg:w-[588px] text-white text-3xl lg:text-[52px] font-normal lg:leading-[66px]">
              "Bezpieczeństwo, stabilność i optymalna wydajność w jednym
              miejscu"
            </div>
            <div className="md:hidden w-full lg:w-[588px] text-white text-xl lg:text-[52px] font-normal lg:leading-[66px]">
              "Bezpieczeństwo, stabilność i optymalna wydajność w jednym
              miejscu"
            </div>
            <div className="justify-center text-[10px] text-white/60 sm:text-[22px] pt-4 font-normal leading-loose">
              -Zespol operacyjny ARTANCE.
            </div>
            <div className="flex justify-center md:justify-start items-start">
              <Link
                to="/realizacje"
                className="mt-7 px-3 py-2 md:px-5 md:py-2 text-center justify-center rounded-full border-white/20 border-2 text-white/80 text-xs md:text-base font-normal"
              >
                Zobacz nasze Realizacje
              </Link>
            </div>
          </div>
        </div>
        <RevealOnScroll>
          <div className="hidden md:flex justify-center items-center">
            <img className="w-[80%] md:w-1/3 lg:w-[80%]" src={Image}></img>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
export default SERWHero;
