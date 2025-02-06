import React, { useEffect, useState } from "react";

const GradientAnimation = () => {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  useEffect(() => {
    let animationFrame;
    let time = 0;

    const animate = () => {
      time += 0.01;
      const scale = Math.sin(time) * 0.15 + 1;
      setSizeMultiplier(scale);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    transition: "background 0.1s ease-out",
    background: `radial-gradient(
      ${450 * sizeMultiplier}px ${300 * sizeMultiplier}px at center, 
      #b96154 0%, 
      black 100%
    )`,
  };

  return (
    <a
      href="/"
      style={containerStyle}
      className="flex items-center justify-center h-screen"
    >
      <div className="text-4xl font-bold flex flex-row text-white">
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
