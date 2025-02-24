import React, { useState } from "react";

const MotText = () => {
  return (
    <header
      id="separate-line"
      className=" relative w-full h-screen bg-black flex-col flex justify-center items-center text-5xl md:text-8xl "
    >
      <h2 className=" text-center text-white max-w-6xl  leading-[85px] m-9 ">
        Ty prowadzisz swój Biznes, My zajmiemy się Twoją stroną.
      </h2>
      <div className="absolute   min-w-[300px]  w-[40%] h-[60%] bg-[#b46454] rounded-full blur-3xl  opacity-70 z-0"></div>
    </header>
  );
};
export default MotText;
