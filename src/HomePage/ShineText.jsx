import React, { useState } from "react";
import Image from "../assets/images/cuttedlogo.png";
import ImageBlack from "../assets/images/cuttedblacklogo.png";
import RevealOnScroll from "../animations/RevealAnimation";

const ShineText = () => {
  return (
    <div className="flex justify-center h-[500px]  w-full">
      <RevealOnScroll>
        <div className=" hidden md:flex md:flex-col xl:flex-row h-full w-full items-center justify-center pb-24 ">
          <img src={Image} className="h-[130px] xl:mr-10"></img>
          <h2 className="text-[90px] text-center text-white  tracking-tighter">
            We make You <span className="">shine</span> Online
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
