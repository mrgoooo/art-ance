import React from "react";
import Logo from "../assets/images/cuttedblacklogo.png";

const ONPlatform = () => {
  return (
    <div className="hidden lg:flex w-full flex-col items-center">
      <div className="w-[95%] flex flex-col h-[600px] items-center">
        {/* Logo */}
        <div className="w-[200px] flex-1">
          <img src={Logo} alt="Platform Logo" className="w-full h-auto" />
        </div>

        {/* Tekst */}
        <div className="flex flex-col md:flex-row justify-center  w-full pl-10 py-4 items-start">
          {/* Lewy blok tekstowy */}
          <div className="md:w-1/4 w-full text-right text-[#060017] text-4xl md:text-4xl lg:text-[58px] font-normal leading-tight  mt-3">
            Jedna platforma
          </div>

          {/* Prawy blok tekstowy */}
          <div className="flex flex-col md:w-4/5 w-full text-center md:text-left ">
            <div className="text-[#060017] text-5xl md:text-8xl lg:text-[140px] font-normal  leading-tight">
              Nieskończone
            </div>
            <div>
              <span className="text-[#060017] text-5xl md:text-8xl lg:text-[140px] font-normal leading-tight">
                Możliwości
              </span>
              <span className="text-[#060017] text-5xl md:text-8xl lg:text-[150px] font-normal  leading-tight">
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ONPlatform;
