import ONHero from "./ONHero";
import React from "react";
import ONNumbers from "./ONNUmbers";
import ONKontakt from "./ONKontakt";
import Pytania from "../Other/Pytania";
import ONPlatform from "./ONPlatform";
import ONOffer from "./ONOffer";

function ONas() {
  return (
    <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
      <ONHero />
      <ONNumbers />
      <ONPlatform />
      <ONOffer />
      <ONKontakt bgColor="text-white" />

      <Pytania />
    </div>
  );
}
export default ONas;
