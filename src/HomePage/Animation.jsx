import React, { useEffect, useState } from "react";
import logo from "../assets/images/logoprzycięte.png";

const GradientAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile(); // sprawdzenie przy starcie
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const gradientSize = isMobile ? 130 : 600;

  const backgroundStyle = {
    background: `radial-gradient(${gradientSize}px 380px at center, #b96154 0%, black 100%)`,
  };

  return (
    <a
      href="/"
      className="h-screen w-full flex items-center justify-center"
      style={backgroundStyle}
    >
      <img src={logo} alt="Logo" className="h-[150px]" loading="lazy" />
    </a>
  );
};

export default GradientAnimation;
