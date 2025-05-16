import Image from "../assets/images/women_img.png";
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
function OkIcon() {
  return (
    <svg
      width="35"
      height="35"
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

function UXWhy() {
  return (
    <div className="flex flex-col w-[95%] h-full pb-8 rounded-2xl z-10">
      <section className="py-12 bg-white bg-opacity-25 px-6 md:px-12 rounded-2xl">
        <h2 className="text-lg sm:text-5xl  text-gray-900 mb-4">
          Dlaczego UX/UI Design jest ważny?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative ">
          {/* Tekst */}
          <div className="">
            <p className="hidden md:block text-gray-700 mb-6">
              UX/UI design to intuicja, wygoda i pozytywne <br /> doświadczenia.
              Dobrze zaprojektowany interfejs <br /> przyciąga, ułatwia i buduje
              lojalność użytkowników.
            </p>
            <p className="md:hidden text-xs text-gray-700 mb-6 leading-6">
              UX/UI design to intuicja, wygoda i pozytywne doświadczenia. Dobrze
              zaprojektowany interfejs przyciąga, ułatwia i buduje lojalność
              użytkowników.
            </p>
            <div className="space-y-4 pt-8 lg:pt-24">
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex items-center">
                    <ArrowIcon className="w-8 h-8 md:w-12 md:h-12 b" />
                    <h3 className="text:lg md:text-[32px]  text-gray-900 text-">
                      Większa konwersja
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px]">
                    Lepsze doświadczenie użytkownika oznacza większą sprzedaż.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex items-center">
                    <ArrowIcon className="w-8 h-8 md:w-12 md:h-12 b" />
                    <h3 className="text:lg md:text-[32px]  text-gray-900">
                      Wzrost lojalność klientów
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px]">
                    Intuicyjna nawigacja sprawia, że użytkownicy chętniej
                    wracają.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex items-center">
                    <ArrowIcon className="w-8 h-8 md:w-12 md:h-12 b" />
                    <h3 className="text:lg md:text-[32px]  text-gray-900">
                      Przewaga konkurencyjna
                    </h3>
                  </div>
                  <p className="text-gray-700 text-[10px] md:text-[13px]">
                    Nowoczesny design buduje profesjonalny wizerunek firmy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link */}

          <img
            src={Image}
            className="hidden lg:flex absolute right-0 lg:top-[180px] xl:top-[50px] justify-center h-[300px] xl:h-[450px] "
          ></img>
        </div>
      </section>
      <section className="mt-10 rounded-2xl md:py-12 ">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UX Design */}
          <div className="  bg-white bg-opacity-20 p-6 rounded-2xl shadow-md ">
            <h2 className="text-lg md:text-[26px] mb-6 ">
              <span>Projektowanie UX</span>
              <span className="text-gray-500"> (User Experience)</span>
            </h2>
            <p className="hidden md:block rounded mb-4  text-[#060017]/60 leading-tight">
              To sposób, w jaki użytkownik czuje się <br /> podczas korzystania
              z produktu – czy jest <br /> prosty, wygodny i przyjemny.
            </p>
            <p className="md:hidden rounded mb-4 text-sm text-[#060017]/60 leading-tight">
              To sposób, w jaki użytkownik czuje się <br /> podczas korzystania
              z produktu – czy jest <br /> prosty, wygodny i przyjemny.
            </p>
            <ul className="list-none space-y-4  text-[#060017]/75 text-xs md:text-lg pt-8 md:pt-28">
              <li className="flex items-center">
                <OkIcon /> Badania użytkowników i analiza ich potrzeb.
              </li>
              <li className="hidden md:flex md:items-center">
                <OkIcon />
                Tworzenie person i scenariuszy użytkowników.
              </li>
              <li className="flex items-center">
                <OkIcon />
                Tworzenie wireframe’ów i prototypów.
              </li>
              <li className="flex items-center">
                <OkIcon /> Testy użyteczności i optymalizacja interfejsu.
              </li>
            </ul>
          </div>

          {/* UI Design */}
          <div className=" bg-white bg-opacity-20 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg md:text-[26px]  text-gray-900 mb-6 ">
              Projektowanie <span className="text-gray-700">UI</span>{" "}
              <span className="text-gray-500">(User Interface)</span>
            </h2>
            <p className="hidden md:block mb-4 text-[#060017]/60 leading-tight">
              To wygląd i układ produktu – kolory, <br /> przyciski, czcionki i
              wszystko, co widzisz <br /> na ekranie.
            </p>
            <p className="md:hidden text-sm mb-4 text-[#060017]/60 leading-tight">
              To wygląd i układ produktu – kolory, przyciski, <br /> czcionki i
              wszystko, co widzisz na ekranie.
            </p>
            <ul className="list-none space-y-4 text-[#060017]/75 text-xs md:text-lg pt-8 md:pt-28 ">
              <li className="flex items-center">
                <OkIcon /> Tworzenie nowoczesnych i estetycznych interfejsów.
              </li>
              <li className="hidden md:flex md:items-center">
                <OkIcon />
                Projektowanie zgodne z zasadami usability i accessibility.
              </li>
              <li className="flex items-center">
                <OkIcon /> Dobór kolorów, typografii i ikon.
              </li>
              <li className="flex items-center">
                <OkIcon /> Implementacja interakcji i animacji.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default UXWhy;
