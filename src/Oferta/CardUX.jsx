import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/3.png";

function CardUX() {
  return (
    <div className=" relative w-full lg:w-[60%] bg-gradient-to-b from-[#c4c4c4] to-[#f3ae69] rounded-[20px]  mr-3 mt-8 mb-8">
      <div className="   h-full flex flex-col justify-between w-full lg:w-3/4 ">
        <div className=" pt-8 px-8 text-black text-4xl font-normal  ">
          UX/UI Design
        </div>
        <div className="hidden md:block pt-4 px-8 w-full text-black/70 text-xl font-normal  leading-tight z-10">
          Spersonalizowane projekty dopasowane <br /> do potrzeb klienta łączą
          estetykę z <br /> funkcjonalnością, gwarantując intuicyjną <br />{" "}
          nawigację i pozytywne wrażenia na <br /> każdym kroku interakcji z
          Twoją stroną.
        </div>

        <div className="md:hidden  pt-4 px-8 w-full text-sm sm:text-[20px] pb-8 text-black/70  font-normal  leading-7 z-10">
          Spersonalizowane projekty
          <br /> dopasowane do potrzeb klienta
          <br /> łączą estetykę z <br /> funkcjonalnością, gwarantując
          intuicyjną nawigację i pozytywne <br /> wrażenia na każdym kroku{" "}
          <br />
          interakcji z Twoją stroną.
        </div>

        <div className="pb-8 pl-6 md:pl-12 flex justify-start z-10 mt-auto">
          <ArrowButtonComp
            to="/oferta/UX-UI"
            textColor="text-black/70"
            arrowColor="#060117"
          />
        </div>
      </div>
      <img
        src={Image}
        className="hidden sm:block sm:h-[260px] lg:h-[500px] absolute bottom-0 right-4 "
      ></img>
    </div>
  );
}
<ArrowButtonComp to="/oferta/webdev" />;
export default CardUX;
