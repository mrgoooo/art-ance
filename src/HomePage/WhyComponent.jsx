import React, { useState, useEffect } from "react";

import NormalLine from "./NormalLine";

const WhyComponent = () => {
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
    <header className="w-full hidden relative h-screen bg-black  lg:flex flex-col  items-center">
      <div className="w-3/4 z-20">
        <NormalLine />
      </div>
      <div className="absolute  inset-0 flex justify-center items-center z-10">
        <div
          className="w-[100%] h-[100%] rounded-full opacity-100"
          style={backgroundStyle}
        ></div>
      </div>
      <div className="w-3/4 relative pt-20   flex flex-col lg:flex-row justify-center items-center  ">
        <div className="w-full h-2/3 flex items-center ">
          <div className=" text-white  text-7xl md:text-8xl font-normal z-20 ">
            Dlaczego <br />
            Warto <br />z <br />
            Nami <br />
            Pracować?
          </div>
        </div>
        <div className="w-full  h-full flex items-center justify-center z-20 ">
          <p className=" w-full text-slate-200 text-2xl md:text-3xl lg:3xl xl:text-4xl lg:text-right ">
            Każdy projekt traktujemy <br /> indywidualnie, dbając o <br />{" "}
            precyzję i <br />
            transparentność na <br /> każdym kroku. Nasze <br />
            podejście łączy kreatywność, <br />
            doświadczenie <br />
            techniczne i bliską
            <br /> współpracę z klientem,
            <br /> aby stworzyć produkt,
            <br /> który przekracza
            <br /> oczekiwania.
          </p>
        </div>
      </div>
    </header>
  );
};
export default WhyComponent;
