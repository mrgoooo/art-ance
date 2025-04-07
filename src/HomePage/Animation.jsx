import React, { useEffect, useState } from "react";

const GradientAnimation = () => {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let animationFrame;
    let time = 0;

    const animate = () => {
      time += 0.01;
      const scale = Math.sin(time) * 0.1 + 1;
      setSizeMultiplier(scale);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle =
    windowWidth < 600
      ? {
          height: "100vh",
          transition: "background 0.1s ease-out",
          background: `radial-gradient(
      ${130 * sizeMultiplier}px ${380}px at center, 
      #b96154 0%, 
      black 100%
    )`,
        }
      : {
          height: "100vh",
          transition: "background 0.1s ease-out",
          background: `radial-gradient(
      ${600 * sizeMultiplier}px ${380}px at center, 
      #b96154 0%, 
      black 100%
    )`,
        };

  return (
    <a
      href="/"
      style={containerStyle}
      className="flex  items-center justify-center  overflow-hidden"
    >
      <div className="text-4xl font-bold flex flex-row text-white animate-fade-in-slow">
        <div className="text-9xl">ART</div>
        <div className="text-4xl font-bold [writing-mode:vertical-lr] text-center h-[9rem]">
          Ance
        </div>
        <div className="text-3xl flex items-end mb-5">
          <p>.</p>
        </div>
      </div>
    </a>
  );
};

export default GradientAnimation;
