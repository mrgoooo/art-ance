import RECardIZA from "./RECardIZA";

function REIZA() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex flex-col lg:flex-row  w-full">
        <RECardIZA />
        <div className="flex w-full lg:w-1/2 flex-col justify-end h-[400px]  sm:h-[500px] lg:h-[600px]">
          <section className="max-w-2xl mx-auto p-4 ">
            {/* Nagłówek */}
            <h1 className="text-[43px] sm:text-5xl xl:text-[74px] leading-[40px] sm:leading-[60px]  text-black">
              Twój sukces zaczyna się online.
            </h1>
            {/* Opis */}
            <p className="text-lg text-gray-700 mt-4">
              Lokalne biznesy rosną dzięki silnej obecności w sieci.
            </p>
            <p className="text-xs sm:text-base text-gray-500 mt-2">
              Niezależnie czy prowadzisz kawiarnię, butik czy prywatną firmę
              usługową – Twoja strona internetowa to Twój największy sprzedawca,
              działający 24/7.
            </p>

            {/* Statystyka */}
            <div className="mt-6 flex  items-start gap-2 ">
              <svg
                width="40"
                height="70"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <path
                    id="Vector"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.9982 10H9.99819V13.3333H24.3086L9.30859 28.3334L11.6656 30.6904L26.6649 15.6912V30H29.9982V10Z"
                    fill="#03BD7F"
                  />
                </g>
              </svg>

              <div>
                <p className="text-lg sm:text-xl  text-black pt-5">
                  75% większy zasięg, 
                </p>

                <p className="text-[10px] text-gray-500  sm:text-sm">
                  skuteczniejsza komunikacja. Twoja marka w centrum uwagi,{" "}
                  <br />
                  zawsze o krok przed konkurencją.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default REIZA;
