import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/WEB.png";
function CardWebMan() {
  return (
    <div className="w-1/2  relative  bg-gradient-to-b from-pink-200 to-[#a00040] rounded-[20px] ml-3">
      <div className="flex justify-between h-full">
        <div className="w-1/2 flex flex-col">
          <h2 className="pl-8 pt-8 text-4xl">Web Managment</h2>
          <p className="pl-8 text-lg">
            Kompleksowe zarządzanie stronami internetowymi, od serwerowania po
            regularne aktualizacji, SEO, prowadzenie bloga i optymalizację
            wydajności.
          </p>
          <div className="h-full flex flex-col  justify-end pb-8 pl-12">
            <ArrowButtonComp arrowColor="#060117" textColor="black/60" />
          </div>
        </div>
        <img src={Image} className="w-3/5 absolute bottom-0 right-0"></img>
      </div>
    </div>
  );
}
export default CardWebMan;
