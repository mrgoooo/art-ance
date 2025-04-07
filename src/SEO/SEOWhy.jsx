import Image from "../assets/images/googlephone.png";
import RevealOnScroll from "../animations/RevealAnimation";
import { useEffect } from "react";

function ArrowIcon() {
  return (
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
          fill="white"
        />
      </g>
    </svg>
  );
}

function OkIcon() {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M7.70831 13.1917C7.31919 12.7898 6.67602 12.7853 6.28127 13.1817L6.20938 13.2539C5.81817 13.6467 5.82124 14.2828 6.2162 14.6719L9.99992 18.3991L17.2896 11.1572C17.6817 10.7677 17.6835 10.1339 17.2934 9.74218L17.2131 9.66156C16.8205 9.26724 16.1814 9.26934 15.7914 9.66622L9.99992 15.5588L7.70831 13.1917Z"
          fill="#050038"
        />
      </g>
    </svg>
  );
}

function SEOWhy() {
  return (
    <div className="flex flex-col w-[95%] h-full pb-8 rounded-2xl z-10">
      <section className=" relative py-12 bg-white   bg-opacity-25 px-6 md:px-12 rounded-2xl overflow-hidden">
        <h2 className="text-lg text-white sm:text-5xl   mb-4">
          Dlaczego warto zadbać o SEO?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
          {/* Tekst */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="hidden md:block text-white/60 mb-6">
              Dobre SEO zwiększa widoczność w wyszukiwarkach, przyciąga
              odpowiednich użytkowników i pomaga budować długoterminowy ruch na
              stronie.
            </p>
            <p className="md:hidden text-xs text-white/60 mb-6 leading-6">
              Dobre SEO zwiększa widoczność w wyszukiwarkach, przyciąga
              odpowiednich użytkowników i pomaga budować długoterminowy ruch na
              stronie.
            </p>
            <div className="space-y-4 pt-8 lg:pt-24">
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className=" pt-1">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg md:text-[32px] lg:text-[28px] xl:text-[32px]  text-white">
                      Większa widoczność
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px] text-white/60 pt-2">
                    Twoja strona pojawia się wyzej w wynikach wyszukiwania.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className=" pt-1">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg md:text-[32px] lg:text-[28px] xl:text-[32px]  text-white">
                      Większy ruch organiczny
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px] text-white/60 pt-2">
                    Więcej odwiedzin bez kosztów reklam.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className="pt-1">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg md:text-[32px] lg:text-[28px] xl:text-[32px]  text-white">
                      Przewaga nad konkurencją
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px] text-white/60 pt-2">
                    Lepsze pozycjonowanieto więcej klientów.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link */}

          <div className="hidden lg:flex absolute md:h-[300px] lg:h-[400px] xl:h-[500px] right-0 bottom-0  justify-center ">
            <img src={Image}></img>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SEOWhy;
