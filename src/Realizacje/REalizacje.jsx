import REHero from "./REHero";
import RETenis from "./RETenis";
import LastFooter from "../Components/LastFooter";
import Navbar from "../Components/Navbar";
import REKasprzak from "./REKasprzak";
import REPytania from "./REPytania";
import REIZA from "./REIZA";

function REalizacje() {
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <REHero />
          <RETenis />
          <REKasprzak />
          <REIZA />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default REalizacje;
