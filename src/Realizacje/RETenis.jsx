import RECard from "./RECard";

function RETenis() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex flex-col lg:flex-row  w-full">
        <RECard />
        <div className="flex w-full lg:w-1/2 flex-col justify-end h-[400px]  sm:h-[500px] lg:h-[600px]">
          <section className="max-w-2xl mx-auto p-4 ">
            {/* Nagłówek */}
            <h1 className="text-[46px] sm:text-5xl xl:text-[74px]  leading-[60px]  text-black">
              Twoja marka, <br /> Twoje zasady.
            </h1>
            {/* Opis */}
            <p className="text-xl font-normal text-gray-700 leading-6 mt-4">
              Najlepsi profesjonaliści wybierają nowoczesne strony.
            </p>
            <p className=" w-full xl:w-4/5 text-xs sm:text-base text-gray-500 mt-2">
              Trenerzy personalni, artyści i eksperci z różnych branż rezygnują
              z przestarzałych rozwiązań na rzecz stron, które budują ich markę
              osobistą i robią wrażenie na odbiorcach.
            </p>

            {/* Statystyka */}
            <div className="mt-6 flex-col  gap-2  ">
              <div className=" flex items-center ">
                <svg
                  className="w-8 h-8 xl:w-10 xl:h-10"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.9982 10H9.99819V13.3333H24.3086L9.30859 28.3334L11.6656 30.6904L26.6649 15.6912V30H29.9982V10Z"
                      fill="#03BD7F"
                    />
                  </g>
                </svg>

                <p className="text-lg sm:text-[29px] font-normal  text-black text-align-middle">
                  72% większe zaangażowanie,
                </p>
              </div>

              <p className="text-[11px]">
                więcej kliknięć, więcej klientów, większy wpływ.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default RETenis;
