import Image from "../assets/images/UXHero.png";
import RevealOnScroll from "../animations/RevealAnimation";

function UXHero() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1100px] pb-8 z-10 bg-">
      <div className="w-full">
        <h2 className="text-center sm:text-left text-5xl lg:text-8xl pt-10 pb-9">
          UX/UI Design
        </h2>
      </div>
      <div className="w-ful flex flex-col-reverse lg:flex-row justify-center pl-4 sm:pl-0">
        <div className=" h-full w-full flex items-center">
          <div className="pt-10 w-full">
            <div className="w-2/3  lg:w-[588px] justify-center text-[#060017] text-3xl lg:text-[52px] font-normal font-['Inter'] lg:leading-[66px]">
              “Wyglad strony to 90% sukcesu. Twoja Strona=
              <br />
              Twoja Wizytowka”
            </div>
            <div className="justify-center text-[#060017]/60 text-[22px] font-normal font-['Inter'] leading-loose">
              -Zespol kreatywny ARTANCE.
            </div>
            <div className="justify-start items-start">
              <button className=" mt-7 px-5 py-4  text-center justify-center rounded-full border-black/20 border-2 text-[#060017] text-base font-normal font-['Inter']">
                Zobacz nasze Realizacje
              </button>
            </div>
          </div>
        </div>
        <RevealOnScroll>
          <div className="flex justify-center">
            <img
              className="w-[80%] sm:w-[80%] lg:w-auto h-auto"
              src={Image}
            ></img>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
export default UXHero;
