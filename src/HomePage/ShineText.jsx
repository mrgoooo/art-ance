import React, { useState } from "react";
import Image from "../assets/images/cuttedlogo.png";
import ImageBlack from "../assets/images/cuttedblacklogo.png";
import RevealOnScroll from "../animations/RevealAnimation";

const ShineText = () => {
  return (
    <div className="flex justify-center w-full">
      <RevealOnScroll>
        <div className=" hidden md:flex  h-screen w-full items-center  justify-center ">
          <img src={Image} className="h-1/4"></img>
          <h2 className="text-6xl text-center text-white pl-12">
            We make you <span className="">shine</span> Online
          </h2>
        </div>
      </RevealOnScroll>
      <div className="flex flex-col md:hidden w-[90%] bg-white rounded-xl">
        <div>
          <div className="flex justify-end">
            <img src={ImageBlack} className="h-14 pr-2 pt-2"></img>
          </div>
          <h2 className="text-black  text-[84px] font-semibold pl-2 pb-8 leading-[70px] pt-8  ">
            WE <br /> MAKE <br />
            YOU
            <br /> <RevealOnScroll>SHINE</RevealOnScroll>
            ONLINE.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ShineText;
