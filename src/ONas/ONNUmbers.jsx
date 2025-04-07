import React from "react";
import Logo from "../assets/images/logodużeczarne.png";
import ArrowButtonComp from "../Oferta/ArrowButtonComp";

function ONNumbers() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10 pb-10">
      <div className="w-full max-w-7xl flex  justify-center   gap-10">
        {/* Lewa kolumna z nagłówkiem */}
        <div className="lg:w-1/2 ">
          <h2 className="text-[#060017] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] font-normal leading-tight lg:leading-[100px]">
            Liczby mówią same za
            <br />
            siebie – <br />z nami
            <br />
            osiągniesz więcej!
          </h2>
        </div>

        {/* Prawa kolumna z danymi */}
        <div className="lg:w-1/2 grid grid-cols-1 gap-10 md:w-1/2  ">
          {/* Box 1 */}
          <div className=" flex  justify-end">
            <div className=" flex justify-start w-full  md:w-[80%] lg:w-[60%]  ">
              <div className="">
                <div className="text-[#060017] text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-normal">
                  +50%
                </div>
                <div className="text-[#060017] text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-2">
                  wzrostu sprzedaży
                </div>
                <p className="hidden md:block text-[#060017]/60 text-[4px] sm:text-[8px] md:text-sm lg:text-base leading-snug mt-1">
                  dzięki automatyzacji procesów
                  <br />
                  zakupowych w e-commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className=" flex  justify-end">
            <div className=" flex justify-start w-full  md:w-[80%] lg:w-[60%]  ">
              <div className="">
                <div className="text-[#060017] text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-normal">
                  -30%
                </div>
                <div className="text-[#060017] text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-2">
                  kosztów operacyjnych
                </div>
                <p className="hidden md:block text-[#060017]/60 text-[4px] sm:text-[8px] md:text-sm lg:text-base leading-snug mt-1">
                  po wdrożeniu naszych rozwiązań
                  <br />w branży edukacyjnej.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className=" flex  justify-end">
            <div className=" flex justify-start w-full  md:w-[80%] lg:w-[60%]  ">
              <div className="">
                <div className="text-[#060017] text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-normal">
                  +60%
                </div>
                <div className="text-[#060017] text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-2">
                  zaangażowania użytkowników
                </div>
                <p className="hidden md:block text-[#060017]/60 text-[4px] sm:text-[8px] md:text-sm lg:text-base leading-snug mt-1">
                  dzięki optymalizacji UX i
                  <br />
                  intuicyjnemu interfejsowi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ONNumbers;
