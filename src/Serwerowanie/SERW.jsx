import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import SERWHero from "./SERWHero";
import SEROWffer from "./SERWOffer";
import SERWPytania from "./SERWPytania";
import SERWWhy from "./SERWWhy";
import SERWMot from "./SERWMot";
import SERWUsługi from "./SERWUsługi";

function SERW() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-gradient-to-b from-[#2140b2] to-[#e8e8e8] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <SERWHero />
          <SERWWhy />
          <SERWMot />
          <SERWUsługi />
          <SEROWffer />
          <SERWPytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default SERW;
