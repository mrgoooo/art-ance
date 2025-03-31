import React, { useState } from "react";

const MotText = () => {
  return (
    <header
      id="separate-line"
      className="relative w-full h-screen bg-black flex flex-col justify-center items-center text-5xl md:text-[80px]"
    >
      {/* Gradient w tle */}
      <div className="absolute hidden  inset-0 lg:flex justify-center items-center z-0">
        <div
          className="w-[100%] h-[100%] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(800px 400px at center, #b96154 0%, black 100%)",
            filter: "blur(3xl)",
          }}
        ></div>
      </div>

      {/* Tekst na pierwszym planie */}
      <h2 className="absolute hidden md:block text-white text-center z-10">
        Ty prowadzisz swój <br /> Biznes, My zajmiemy się <br /> Twoją stroną.
      </h2>
      <div className="flex flex-col md:hidden w-[90%] bg-white rounded-xl">
        <div className=" pr-4">
          <h2 className="text-black  text-6xl pt-8 font-semibold pb-8 text-right leading-[50px]  ">
            Ty <br /> prowadzisz
            <br />
            swój <br /> Biznes,
            <br />
            My <br /> zajmiemy
            <br />
            się
            <br />
            Twoją <br />
            Stroną.
          </h2>
        </div>
      </div>
    </header>
  );
};

export default MotText;
