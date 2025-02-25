import Hero from "./Hero";
import CardWebDev from "./CardWebDev";
import CardUX from "./CardUX";
import SEO from "./SEO";
import CardSerw from "./CardSerw";
import CardWebMan from "./CardWebMan";
import Pytania from "./Pytania";

const Oferta = () => {
  return (
    <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
      <Hero />
      <CardWebDev />
      <div className="flex justify-between   w-[95%] ">
        <CardUX />
        <SEO />
      </div>
      <div className=" w-[95%] h-[400px] flex justify-between ">
        <CardSerw />
        <CardWebMan />
      </div>
      <Pytania />
    </div>
  );
};

export default Oferta;
