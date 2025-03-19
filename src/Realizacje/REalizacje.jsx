import REHero from "./REHero";
import RETenis from "./RETenis";
function REalizacje() {
  return (
    <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
      <REHero />
      <RETenis />
    </div>
  );
}
export default REalizacje;
