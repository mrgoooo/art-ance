import Image from "../assets/images/googlephone.png";
import RevealOnScroll from "../animations/RevealAnimation";
import { useEffect } from "react";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9982 10H9.99819V13.3333H24.3086L9.30859 28.3334L11.6656 30.6904L26.6649 15.6912V30H29.9982V10Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

function WManWhy() {
  return (
    <div className="flex flex-col w-[95%] h-full pb-8 rounded-2xl z-10">
      <section className=" relative py-12 bg-white   bg-opacity-25 px-6 md:px-12 rounded-2xl overflow-hidden">
        <h2 className="text-lg text-black sm:text-[32px] font-normal  mb-4">
          Dlaczego warto zainwestować w profesjonalne zarządzanie stroną?
        </h2>

        {/* Tekst */}
        <div className="md:col-span-2 lg:col-span-1">
          <p className="hidden md:block text-black/70 mb-6">
            Nasze usługi serwerowania to coś więcej niż zwykły <br /> hosting –
            zapewniamy ciągłe monitorowanie, <br /> stabilność i pełne wsparcie
            techniczne, abyś Ty mógł <br /> skupić się na rozwoju swojego
            biznesu.
          </p>
          <p className="md:hidden text-xs text-black/70 mb-6 leading-6">
            Dobre SEO zwiększa widoczność w wyszukiwarkach, przyciąga
            odpowiednich użytkowników i pomaga budować długoterminowy ruch na
            stronie.
          </p>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-8">
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center ">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Bezpieczeństwo
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                Ochrona przed atakami, firewall, regularne aktualizacje systemu.
              </p>
            </div>
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Wydajność
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                Optymalizacja szybkości i stabilności, zasoby dopasowane do
                potrzeb Twojej strony.
              </p>
            </div>
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center ">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Aktualność
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                Stałe aktualizacje treści i funkcjonalności.
              </p>
            </div>
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center ">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Oszczędność czasu
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                My zajmujemy się administrowaniem serwerem, a Ty możesz skupić
                się na biznesie.
              </p>
            </div>
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center ">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Wsparcie eksperckie
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                więcej odwiedzin bez kosztów reklam.
              </p>
            </div>
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center ">
                <ArrowIcon className="w-8 h-8 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-[26px] lg:text-[28px] xl:text-[32px] text-black">
                  Elastyczność
                </h3>
              </div>
              <p className="text-xs text-black/70 ">
                serwer pozwala na natychmiastowe aktualizacje i modyfikacje
                strony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default WManWhy;
