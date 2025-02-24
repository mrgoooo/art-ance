import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/UX.png";

function CardUX() {
  return (
    <div className=" w-[60%] bg-gradient-to-b from-[#c4c4c4] to-[#f3ae69] rounded-[20px] justify-start items-start inline-flex">
      <div className="flex flex-col justify-between  bg-white w-3/4 ">
        <div className="px-8 text-black text-4xl font-normal font-['Inter'] leading-relaxed">
          UX/UI Design
        </div>
        <div className="px-8  text-black/70 text-base font-normal font-['Inter'] leading-tight">
          Spersonalizowane projekty dopasowane do potrzeb klienta łączą estetykę
          z funkcjonalnością, gwarantując intuicyjną nawigację i pozytywne
          wrażenia na każdym kroku interakcji z Twoją stroną.
        </div>

        <div className="pb-8 pl-12 flex justify-start bg-slate-200">
          <ArrowButtonComp />
        </div>
      </div>
      <img src={Image} className="h-[500px]"></img>
    </div>
  );
}

export default CardUX;
