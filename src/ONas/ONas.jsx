import ONHero from "./ONHero";
import React from "react";
import ONNumbers from "./ONNUmbers";
import ONKontakt from "./ONKontakt";
import Pytania from "../Oferta/Pytania";
import ONPlatform from "./ONPlatform";
import ONOffer from "./ONOffer";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import ONComputer from "./ONComputer";
import ONWhoWeAre from "./ONWhoWeAre";

function ONas() {
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <ONHero />
          <ONComputer />
          <ONWhoWeAre />
          <ONNumbers />
          <ONPlatform />
          <ONOffer />
          {/*<ONKontakt bgColor="text-white" />*/}

          <Pytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default ONas;
