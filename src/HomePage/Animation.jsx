import React, { useEffect, useState } from "react";
import Image from "../assets/images/logoprzycięte.png";
import Navbar from "../Components/Navbar";

const GradientAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    handleResize(); // aktualizacja przy starcie
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 600;
  const gradientWidth = isMobile ? 130 : windowWidth * 0.5;
  const gradientHeight = isMobile ? 380 : 800 * 0.5; //750

  const backgroundStyle = {
    height: `${viewportHeight}px`, // lepsze niż 100vh na Safari
    background: `radial-gradient(${gradientWidth}px ${gradientHeight}px at center, #b96154 0%, black 100%)`,
  };

  return (
    <div style={backgroundStyle} className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pb-24">
        <a href="/">
          <div className="h-[120px] md:h-[150px] flex text-white animate-fade-in-slow">
            <img src={Image} alt="Logo" loading="lazy" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default GradientAnimation;
