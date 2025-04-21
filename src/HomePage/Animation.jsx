import React, { useEffect, useState } from "react";
import Image from "../assets/images/logoprzycięte.png";

const GradientAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 600;
  const gradientSize = isMobile ? 130 : 600;

  const containerStyle = {
    height: `${window.innerHeight}px`, // lub `${window.innerHeight}px` jako fallback
    background: `radial-gradient(
      ${gradientSize}px 380px at center,
      #b96154 0%,
      black 100%
    )`,
    transition: "background 0.1s ease-out",
  };

  return (
    <a
      href="/"
      style={containerStyle}
      className="flex items-center justify-center"
    >
      <div className="h-[150px] flex flex-row text-white animate-fade-in-slow">
        <img src={Image} alt="Logo" loading="lazy" />
      </div>
    </a>
  );
};

export default GradientAnimation;
