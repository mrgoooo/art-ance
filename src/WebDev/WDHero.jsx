import WebDev from "../assets/images/WebDev.jpeg";
import WebDevAnother from "../assets/images/WebDevAnother.png";
import RevealOnScroll from "../animations/RevealAnimation";
import { Link } from "react-router-dom";

function WDHero() {
  return (
    <div className="relative flex flex-col w-full  ">
      <header className="hidden lg:bock text-[120px] text-white pl-16">
        Web Development
      </header>

      <header className="text-[40px] lg:text-[120px] text-white pl-16 leading-none">
        Web Development
      </header>

      <div className="flex flex-col-reverse items-center lg:flex-row text-white">
        <div className="hidden w-1/2 ml-16 lg:block">
          <h2 className="text-white text-[56px] leading-[66px] pt-16 pl-4">
            "Sprawiamy, że inne platformy wyglądają jak z lat 90"
          </h2>
          <p className="pt-8 text-opacity-60 text-[22px] text-white leading-loose pl-4">
            -Zespół kreatywny ARTANCE.
          </p>
          <button className="ml-4 pl-4 mt-7 px-5 py-4  text-center justify-center rounded-full border-white/20 border-2 text-white  text-base font-normal ">
            Zobacz nasze Realizacje
          </button>
        </div>
        <RevealOnScroll>
          <div className="hidden lg:block w-[600px] ">
            <img src={WebDev}></img>
          </div>
        </RevealOnScroll>
        <div className="absolute top-[90px] block w-[350px] lg:hidden ">
          <img src={WebDevAnother}></img>
        </div>

        <div className="flex w-full lg: z-20">
          <Link
            to="/realizacje"
            className="text-white text-[16px]  border-white/60 border rounded-full px-3 mt-[245px] sm:mt-[240px] mb-16 ml-12"
          >
            Nasze Realizacje
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WDHero;
