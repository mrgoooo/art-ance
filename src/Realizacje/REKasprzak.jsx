import RECard from "./RECard";
import RECardKasp from "./RECardKasp";

function REKasprzak() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex flex-col lg:flex-row-reverse justify-center w-full">
        <RECardKasp />
        <div className="flex w-full lg:w-1/2 flex-col justify-end items-center h-[400px]  sm:h-[500px] lg:h-[600px]">
          <section className="max-w-2xl w-full mx-auto p-4 ">
            {/* Nagłówek */}
            <h1 className="text-[43px] sm:text-5xl xl:text-[74px] leading-[40px] sm:leading-[60px]  text-black">
              Nowoczesność, <br /> która napędza biznes.
            </h1>
            {/* Opis */}
            <p className="text-lg text-gray-700 mt-4">
              Liderzy rynku stawiają na technologię przyszłości.
            </p>
            <p className="text-xs sm:text-base text-gray-500 mt-2">
              Największe firmy nie mogą sobie pozwolić na przestarzałe
              platformy. Dlatego przechodzą na nasze intuicyjne, szybkie i
              zaawansowane strony internetowe.
            </p>

            {/* Statystyka */}
            <div className="mt-6 flex  items-start gap-2">
              <svg
                width="40"
                height="40"
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
                    fill="#044B7D"
                  />
                </g>
              </svg>
              <p className="text-lg sm:text-xl  text-black">
                68% większa płynność, 
                <br />
                <span className="text-[10px] text-gray-500 leading-[5px] sm:text-sm">
                  lepsza nawigacja – klienci docierają tam, gdzie trzeba
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default REKasprzak;
