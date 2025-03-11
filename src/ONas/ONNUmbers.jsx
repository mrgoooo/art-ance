import React from "react";
import Logo from "../assets/images/logodużeczarne.png";
import ArrowButtonComp from "../Other/ArrowButtonComp";

function ONNumbers() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] flex pt-10 ">
        <div className="w-[65%] h-[800px] ">
          <div className=" text-[#060017] text-[110px] font-normal font-['Inter'] leading-[111px]">
            Liczby mówią same za
            <br />
            siebie – <br />z nami
            <br />
            osiągniesz więcej!
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3  ">
          <div className="">
            <div className=" text-[#060017] text-9xl font-normal font-['Inter'] ">
              +50%
            </div>
            <div className=" text-[#060017] text-lg font-normal font-['Inter']">
              wzrostu sprzedaży
            </div>
            <div className="text-[#060017]/60 text-[15px] font-normal font-['Inter'] leading-[15px]">
              dzięki automatyzacji procesów
              <br />
              zakupowych w e-commerce.
            </div>
          </div>
          <div>
            <div className=" text-[#060017] text-9xl font-normal font-['Inter'] ">
              -30%
            </div>
            <div className=" text-[#060017] text-lg font-normal font-['Inter']">
              kosztów operacyjnych
            </div>
            <div className="text-[#060017]/60 text-[15px] font-normal font-['Inter'] leading-[15px]">
              po wdrożeniu naszych rozwiązań
              <br />w branży edukacyjnej.
            </div>
          </div>
          <div>
            <div className=" text-[#060017] text-9xl font-normal font-['Inter'] ">
              +60%
            </div>
            <div className=" text-[#060017] text-lg font-normal font-['Inter']">
              zaangażowania użytkowników
            </div>
            <div className="text-[#060017]/60 text-[15px] font-normal font-['Inter'] leading-[15px]">
              dzięki optymalizacji UX i <br />
              intuicyjnemu interfejsowi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ONNumbers;
