import RECardIZA from "./RECardIZA";

function REIZA() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex flex-col lg:flex-row  w-full">
        <RECardIZA />
        <div className="flex w-full lg:w-1/2 flex-col justify-end h-[430px]  sm:h-[500px] lg:h-[600px]">
          <section className="max-w-2xl mx-auto p-4 ">
            {/* Nagłówek */}
            <h1 className="text-[43px] sm:text-5xl xl:text-[74px] leading-[40px] sm:leading-[60px]  text-black">
              Twój sukces zaczyna się online.
            </h1>
            {/* Opis */}
            <p className="text-xl font-normal text-gray-700 leading-6 mt-4">
              Lokalne biznesy rosną dzięki silnej obecności w sieci.
            </p>
            <p className="  w-full xl:w-4/5 text-xs sm:text-base text-gray-500 mt-2">
              Niezależnie czy prowadzisz kawiarnię, butik czy prywatną firmę
              usługową – Twoja strona internetowa to Twój największy sprzedawca,
              działający 24/7.
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
                  75% większy zasięg, 
                </p>
              </div>

              <p className="text-[11px]">
                skuteczniejsza komunikacja. Twoja marka w centrum uwagi, zawsze
                o krok przed konkurencją.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default REIZA;
