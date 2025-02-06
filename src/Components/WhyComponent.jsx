import React, { useState } from "react";
import Line from "./Line";

const WhyComponent = () => {
  return (
    <header className="w-full h-screen bg-gradient-red-black flex flex-col justify-center items-center">
      <div className="w-full h-screen bg-gradient-red-black flex justify-center items-center text-5xl">
        <div className="w-1/3 h-1/2">
          <div className=" text-white flex flex-col text-6xl space-y-4">
            {" "}
            {/* Flex w kolumnie z odstępami */}
            <p className="block">Dlaczego</p>
            <p className="block">Warto</p>
            <p className="block">Z</p>
            <p className="block">Nami</p>
            <p className="block">Pracować?</p>
          </div>
        </div>
        <div className="w-1/3h-1/2 text-2xl">
          <div className="text-right text-slate-200 space-y-1">
            <p className="block">Każdy projekt</p>
            <p className="block">traktujemy indywidualnie,</p>
            <p className="block">dbając o precyzję</p>
            <p className="block">i transparentność na każdym kroku.</p>
            <p className="block">Nasze podejście łączy</p>
            <p className="block">kreatywność, doświadczenie</p>
            <p className="block">techniczne i bliską</p>
            <p className="block">współpracę z klientem,</p>
            <p className="block">aby stworzyć produkt,</p>
            <p className="block">który przekracza oczekiwania.</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 ">
        <Line text="DANE" />
      </div>
    </header>
  );
};
export default WhyComponent;
