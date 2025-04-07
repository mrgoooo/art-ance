import Image from "../assets/images/WebDevSecond.jpg";
import Grid1 from "../assets/images/Grid1.png";
import Grid3 from "../assets/images/Grid3.jpg";
import Grid2 from "../assets/images/Grid2.png";

function ArrowIcon({ width = 40, height = 40 }) {
  return (
    <svg
      width={width}
      height={height}
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

function WDWhy() {
  return (
    <div className="flex flex-col w-[95%] h-full pb-8 rounded-2xl z-10">
      <section className="relative py-12 bg-white bg-opacity-10   md:bg-opacity-25 px-6 md:px-12 rounded-2xl ">
        <h2 className="text-lg sm:text-[25px] lg:text-[19px]  text-white mb-4">
          Nowoczesne strony, które robią różnicę
        </h2>
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="">
            <div className="text-xs justify-center text-white text-opacity-60 sm:text-base font-normal  leading-tight">
              Tworzymy strony internetowe <br /> dopasowane do Twoich potrzeb –
              szybkie, <br /> intuicyjne i zoptymalizowane pod sukces.
            </div>

            <div className="space-y-4 pt-14 lg:pt-24">
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className="pt-1   ">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg sm:text-[28px] md:text-[32px]  text-white">
                      Spersonalizowany Design
                    </h3>
                  </div>
                  <p className="text-white opacity-80 text-xs  sm:text-[13px]">
                    unikalny wygląd dopasowany do Twojej marki.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className=" pt-1">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg sm:text-[28px] md:text-[32px]   text-white">
                      Optymalizacja SEO
                    </h3>
                  </div>
                  <p className="text-white opacity-80  text-xs  sm:text-[13px]">
                    lepsza widoczność w wyszukiwarkach.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <div className="flex">
                    <div className="pt-1">
                      <ArrowIcon />
                    </div>
                    <h3 className="text-lg sm:text-[28px] md:text-[32px]   text-white">
                      integracja API
                    </h3>
                  </div>
                  <p className="text-white opacity-80 text-xs  sm:text-[13px]">
                    płynne połączenie z narzędziami, których używasz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link */}

          <img
            src={Image}
            className="hidden lg:block absolute right-0 bottom-0 rounded-2xl h-[460.80px]"
          ></img>
        </div>
      </section>

      <section className="pt-9">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Strategia i Projektowanie",
              text: "Najpierw analizujemy Twoje potrzeby i cele biznesowe. Tworzymy unikalny design, który odzwierciedla charakter Twojej marki i zapewnia intuicyjną nawigację dla użytkowników.",
              img: Grid1,
            },
            {
              title: "Kodowanie i Integracja",
              text: "Nasz zespół programistów przekształca projekt w szybką i zoptymalizowaną stronę, gotową do działania na każdym urządzeniu.",
              img: Grid2,
            },
            {
              title: "Optymalizacja i Wdrożenie",
              text: "Twoja strona to dopiero początek! Przed wdrożeniem przeprowadzamy testy wydajności i bezpieczeństwa, a po uruchomieniu zapewniamy wsparcie techniczne oraz dalszą optymalizację.",
              img: Grid3,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[410px] h-auto bg-white bg-opacity-10 rounded-[20px] overflow-hidden p-6 md:p-10 "
            >
              <div className="flex  flex-col gap-2">
                <h3 className="text-white text-lg md:text-xl font-normal leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-white text-opacity-60 text-xs md:text-base font-normal leading-tight">
                  {item.text}
                </p>
              </div>
              <img
                className="w-full max-w-[350px] mx-auto mt-6 rounded-xl border border-white border-opacity-20"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WDWhy;
