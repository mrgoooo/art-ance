import React from "react";
import Image from "../assets/images/5.png";
import ArrowButtonComp from "./ArrowButtonComp";

const CardWebDev = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] flex justify-evenly">
        <div className="w-full h-full bg-gradient-to-b from-[#060017] to-[#534a6f] rounded-[20px]  grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col ">
            <div className="  text-white  text-[30px] lg:text-[64px]  leading-relaxed p-8">
              Web Development
            </div>
            <div className="hidden md:block px-8 text-[20px]  pb-10 lg:pb-0 lg:text-xl  text-white/60 leading-5 md:leading-tight">
              Dzięki wykorzystaniu najnowszych technologii zapewniamy szybkie
              działanie i pełną kompatybilność na wszystkich urządzeniach.
              Niezależnie od tego, czy potrzebujesz prostej witryny
              informacyjnej, czy zaawansowanego systemu e-commerce, dostarczymy
              rozwiązanie idealnie dopasowane do Twoich potrzeb.
            </div>
            <div className="block md:hidden px-8 text-sm sm:text-[20px] pb-10  lg:text-xl  text-white/60 leading-7 md:leading-tight">
              Dzięki wykorzystaniu najnowszych <br /> technologii zapewniamy
              szybkie <br /> działanie i pełną kompatybilność na <br />
              wszystkich urządzeniach. <br /> Niezależnie od tego, czy <br />
              potrzebujesz prostej witryny <br /> informacyjnej, czy <br />{" "}
              zaawansowanego systemu <br /> e-commerce, dostarczymy <br />{" "}
              rozwiązanie idealnie dopasowane <br /> do Twoich potrzeb.
            </div>
            <div className="h-full flex flex-col  justify-end pb-8 pl-6 md:pl-12">
              <ArrowButtonComp to="/oferta/webdev" />
            </div>
          </div>
          <div className="lg:flex hidden  ">
            <img src={Image} className=" h-[90%] "></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardWebDev;
