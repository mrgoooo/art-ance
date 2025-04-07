import WDHero from "./WDHero";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import WDwhy from "./WDWhy";
import WDMot from "./WDMot";
import WDEcommer from "./WDEcommer";
import WDPytania from "./WDPytania";

function WebDev() {
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-gradient-to-b from-[#060017] to-[#534a6f] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <WDHero />
          <WDwhy />
          <WDMot />

          <WDEcommer />
          <WDPytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default WebDev;
