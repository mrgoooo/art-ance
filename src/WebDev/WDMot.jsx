import Image from "../assets/images/logoprzycięte.png";
function WDMot() {
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="hidden md:block text-left text-white  md:text-[70px] lg:text-[105px] xl:text-[130px] font-normal  leading-[210.80px] px-4">
        Osiągnij swoje cele
      </div>
      <div className="hidden md:block text-right text-white md:text-[70px] lg:text-[105px] xl:text-[130px] font-normal  leading-[210.80px] px-4">
        razem z ARTance.
      </div>
      <div className="md:hidden flex flex-col lg:hidden w-[95%] items-center justify-center pb-8">
        <div className="flex flex-col justify-center w-full  h-48">
          <div className="w-full justify-center text-white text-6xl font-normal leading-[60px]">
            Powered by
          </div>
          <div className="w-full h-32   flex justify-end items-begin ">
            {" "}
            <img className="h-full" src={Image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WDMot;
