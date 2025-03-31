import React from "react";
import Image from "../assets/images/ideas.png";
import ArrowButtonComp from "./ArrowButtonComp";

const CardWebDev = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] flex justify-evenly">
        <div className="w-full h-full bg-gradient-to-b from-[#060017] to-[#534a6f] rounded-[20px]  grid  grid-cols-2">
          <div className="flex flex-col ">
            <div className="  text-white text-[64px]  leading-relaxed p-8">
              Web Development
            </div>
            <div className=" px-8 text-xl  text-white/60  leading-tight">
              Dzięki wykorzystaniu najnowszych technologii zapewniamy szybkie
              działanie i pełną kompatybilność na wszystkich urządzeniach.
              Niezależnie od tego, czy potrzebujesz prostej witryny
              informacyjnej, czy zaawansowanego systemu e-commerce, dostarczymy
              rozwiązanie idealnie dopasowane do Twoich potrzeb.
            </div>
            <div className="h-full flex flex-col  justify-end pb-8 pl-12">
              <ArrowButtonComp to="/webdev" />
            </div>
          </div>
          <div className="flex justify-end">
            <img src={Image} className=" w-4/5"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardWebDev;
