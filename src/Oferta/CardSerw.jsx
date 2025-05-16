import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/2.png";
function CardSerw() {
  return (
    <div className="w-full h-full lg:w-1/2  relative bg-gradient-to-b from-[#2140b2] to-blue-300 rounded-[20px] mr-3">
      <div className="flex justify-between h-full">
        <div className=" w-full lg:w-[55%] flex flex-col ">
          <h2 className="pl-8 pt-8 text-4xl text-white pb-3">Serwerowanie</h2>
          <p className="hidden lg:block pl-8 lg:text-base text-white/70">
            Usługi serwerowe, które gwarantują <br /> stabilność, bezpieczeństwo
            i szybkie działanie Twojej strony internetowej.
          </p>
          <p className="lg:hidden pl-8 text-sm sm:text-[20px] text-white/70 leading-7">
            Usługi serwerowe, które gwarantują <br /> stabilność, bezpieczeństwo
            i <br />
            szybkie działanie Twojej strony <br /> internetowej.
          </p>
          <div className="h-full flex flex-col  justify-end pb-8 pl-6 md:pl-12">
            <ArrowButtonComp to="/oferta/serwerowanie" />
          </div>
        </div>
        <img
          src={Image}
          typeof=""
          className="w-[40%] absolute bottom-10 right-0 hidden lg:block"
        ></img>
      </div>
    </div>
  );
}
export default CardSerw;
