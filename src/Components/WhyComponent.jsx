import React, { useState } from "react";

import NormalLine from "./NormalLine";

const WhyComponent = () => {
  return (
    <header className="w-full hidden relative h-screen bg-black  lg:flex flex-col  items-center">
      <div className="w-3/4 z-20">
        <NormalLine />
      </div>
      <div className="absolute  inset-0 flex justify-center items-center z-10">
        <div
          className="w-[100%] h-[100%] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(800px 400px at center, #b96154 0%, black 100%)",
            filter: "blur(3xl)",
          }}
        ></div>
      </div>
      <div className="w-3/4 relative pt-20   flex flex-col lg:flex-row justify-center items-center  ">
        <div className="w-full h-2/3 flex items-center ">
          <div className=" text-white  text-7xl md:text-8xl font-normal font-['Inter'] z-20 ">
            Dlaczego <br />
            Warto <br />z <br />
            Nami <br />
            Pracować?
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center z-20 ">
          <p
            className="text-slate-200 text-2xl md:text-3xl lg:text-4xl text-justify lg:text-right lg"
            // Możesz dynamicznie zmieniać tę wartość
          >
            Każdy projekt traktujemy indywidualnie, dbając o precyzję i
            transparentność na każdym kroku. Nasze podejście łączy kreatywność,
            doświadczenie techniczne i bliską współpracę z klientem, aby
            stworzyć produkt, który przekracza oczekiwania.
          </p>
        </div>
      </div>
    </header>
  );
};
export default WhyComponent;
