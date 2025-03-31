import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/UX.png";

function CardUX({ onNavigate }) {
  return (
    <div className=" relative w-[60%] bg-gradient-to-b from-[#c4c4c4] to-[#f3ae69] rounded-[20px]  mr-3 mt-8 mb-8">
      <div className="   h-full flex flex-col justify-between  w-3/4 ">
        <div className=" pt-8 px-8 text-black text-4xl font-normal  ">
          UX/UI Design
        </div>
        <div className="  pt-4 px-8 w-full text-black/70 text-base font-normal  leading-tight z-10">
          Spersonalizowane projekty dopasowane <br /> do potrzeb klienta łączą
          estetykę z <br /> funkcjonalnością, gwarantując intuicyjną <br />{" "}
          nawigację i pozytywne wrażenia na <br /> każdym kroku interakcji z
          Twoją stroną.
        </div>

        <div className="pb-8 pl-12 flex justify-start z-10 mt-auto">
          <ArrowButtonComp
            textColor="black/70"
            arrowColor="#060117"
            onClick={onNavigate}
          />
        </div>
      </div>
      <img src={Image} className="h-[500px] absolute bottom-0 right-4 "></img>
    </div>
  );
}

export default CardUX;
