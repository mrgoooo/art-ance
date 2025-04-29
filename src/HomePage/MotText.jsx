import React, { useState, useEffect } from "react";

const MotText = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const gradientWidth = windowWidth * 0.5;
  const gradientHeight = viewportHeight * 0.5;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    handleResize(); // aktualizacja przy starcie
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundStyle = {
    height: `${viewportHeight}px`, // lepsze niż 100vh na Safari
    background: `radial-gradient(${gradientWidth}px ${gradientHeight}px at center, #b96154 0%, black 100%)`,
    transition: "background 0.1s ease-out",
  };

  return (
    <header
      id="separate-line"
      className="relative w-full h-screen bg-black flex flex-col justify-center items-center  md:text-[80px]"
    >
      {/* Gradient w tle */}
      <div className="absolute hidden  inset-0 md:flex justify-center items-center z-0">
        <div
          className="w-[100%] h-[100%] rounded-full opacity-100"
          style={backgroundStyle}
        ></div>
      </div>

      {/* Tekst na pierwszym planie */}
      <h2 className="absolute hidden md:block text-7xl lg:text-8xl text-white text-center z-10 font-normal">
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
