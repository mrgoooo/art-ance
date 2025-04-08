import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/1.png";
function CardWebMan() {
  return (
    <div className="h-full w-full lg:w-1/2  relative  bg-gradient-to-b from-pink-200 to-[#a00040] rounded-[20px] mt-8 lg:mt-0 lg:ml-3">
      <div className="flex justify-between h-full">
        <div className="w-full lg:w-[70%] flex flex-col">
          <h2 className="pl-8 pt-8 text-4xl pb-3">Web Managment</h2>
          <p className="hidden lg:block pl-8 text-lg text-black/80">
            Kompleksowe zarządzanie stronami <br /> internetowymi, od
            serwerowania po <br /> regularne aktualizacji, SEO, <br />
            prowadzenie bloga i optymalizację <br /> wydajności.
          </p>
          <p className="lg:hidden pb-3 pl-8  text-sm sm:text-[20px] text-black/80 leading-7">
            Kompleksowe zarządzanie stronami <br /> internetowymi, od
            serwerowania po <br /> regularne aktualizacji, SEO, <br />{" "}
            prowadzenie bloga i optymalizację <br /> wydajności.
          </p>
          <div className="h-full flex flex-col  justify-end pb-8 pl-6 md:pl-12">
            <ArrowButtonComp
              arrowColor="#060117"
              textColor="black/60"
              to="/oferta/web-managment"
            />
          </div>
        </div>
        <img
          src={Image}
          className="hidden lg:block  w-[30%] absolute bottom-8 right-6"
        ></img>
      </div>
    </div>
  );
}
export default CardWebMan;
