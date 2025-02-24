import Hero from "./Hero";
import CardWebDev from "./CardWebDev";
import CardUX from "./CardUX";
import SEO from "./SEO";
const Oferta = () => {
  return (
    <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center ">
      <Hero />
      <CardWebDev />
      <div className="flex justify-center   w-[95%] h-[600px]">
        <CardUX />
        <SEO />
      </div>
    </div>
  );
};

export default Oferta;
