import Hero from "./Hero";
import CardWebDev from "./CardWebDev";
import CardUX from "./CardUX";
import SEO from "./SEO";
import CardSerw from "./CardSerw";
import CardWebMan from "./CardWebMan";
import Pytania from "./Pytania";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";

const Oferta = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full">
        <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <Hero />
          <CardWebDev />
          <div className="flex flex-col lg:flex-row lg:justify-between     w-[95%] ">
            <CardUX onNavigate={onNavigate} />
            <SEO />
          </div>
          <div className="flex flex-col lg:flex-row w-[95%]  lg:h-[400px] justify-between ">
            <CardSerw />
            <CardWebMan />
          </div>
          <Pytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
};

export default Oferta;
