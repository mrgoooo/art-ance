import React, { useState } from "react";
import Line from "./Line";

const WhyComponent = () => {
  return (
    <header className="w-full bg-gradient-red-black flex flex-col justify-center items-center">
      <div className="w-3/4 ">
        <Line text="DANE" />
      </div>
      <div className="w-3/4  flex flex-col lg:flex-row justify-center items-center ">
        <div className="w-full h-2/3 flex items-center ">
          <div className=" text-white  text-7xl md:text-8xl font-normal font-['Inter'] ">
            Dlaczego <br />
            Warto <br />z <br />
            Nami <br />
            Pracować?
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center ">
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
