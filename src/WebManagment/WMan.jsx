import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import WManHero from "./WManHero";
import WManWhy from "./WManWhy";
import WManNapis from "./WManNapis";
import WManOffer from "./WManOffer";
import WManPytania from "./WManPytania";
function WMan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-gradient-to-b from-[#dfdde2] to-[#a00040] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <WManHero />
          <WManWhy />
          <WManNapis />
          <WManOffer />
          <WManPytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default WMan;
