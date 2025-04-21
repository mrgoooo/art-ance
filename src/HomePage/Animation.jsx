import React, { useEffect, useState } from "react";
import Image from "../assets/images/logoprzycięte.png";

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
  const gradientHeight = isMobile ? 380 : 750 * 0.5;

  const backgroundStyle = {
    height: `${viewportHeight}px`, // lepsze niż 100vh na Safari
    background: `radial-gradient(${gradientWidth}px ${gradientHeight}px at center, #b96154 0%, black 100%)`,
    transition: "background 0.1s ease-out",
  };

  return (
    <a
      href="/"
      style={backgroundStyle}
      className="flex items-center justify-center"
    >
      <div className="h-[150px] flex flex-row text-white animate-fade-in-slow">
        <img src={Image} alt="Logo" loading="lazy" />
      </div>
    </a>
  );
};

export default GradientAnimation;
