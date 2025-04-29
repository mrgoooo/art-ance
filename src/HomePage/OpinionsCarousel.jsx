import React, { useState, useEffect, useRef } from "react";
import Line from "./Line";
const slides = [
  {
    description:
      "Zespół doskonale zrozumiał nasze potrzeby i zaprojektował stronę, która wyróżnia się w naszej branży. Dodatkowo, dzięki regularnemu utrzymaniu strony, mamy pewność, że wszystko działa bez zarzutu.",
    author: "J.Opłotny",
  },
  {
    description:
      "Zespół doskonale zrozumiał nasze potrzeby i zaprojektował stronę, która wyróżnia się w naszej branży. Dodatkowo, dzięki regularnemu utrzymaniu strony, mamy pewność, że wszystko działa bez zarzutu.",
    author: "K.Kowal",
  },
  {
    description:
      "Zespół doskonale zrozumiał nasze potrzeby i zaprojektował stronę, która wyróżnia się w naszej branży. Dodatkowo, dzięki regularnemu utrzymaniu strony, mamy pewność, że wszystko działa bez zarzutu.",
    author: "M.Zielek",
  },
  {
    description:
      "Zespół doskonale zrozumiał nasze potrzeby i zaprojektował stronę, która wyróżnia się w naszej branży. Dodatkowo, dzięki regularnemu utrzymaniu strony, mamy pewność, że wszystko działa bez zarzutu.",
    author: "E.Mierzwa",
  },
];

const OpinionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const mouseStartX = useRef(null);
  const mouseEndX = useRef(null);

  const prevSlide = () => {
    startAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    startAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    startAutoSlide();

    // Czyszczenie interwału, gdy komponent się odmontuje
    return () => clearInterval(intervalRef.current);
  }, []);

  // Funkcja do uruchamiania automatycznego przewijania
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Zatrzymujemy poprzedni interwał
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Zmienia co 3 sekundy (3000 ms)
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const deltaX = touchStartX.current - touchEndX.current;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    mouseEndX.current = e.clientX;
    if (!mouseStartX.current || !mouseEndX.current) return;
    const deltaX = mouseStartX.current - mouseEndX.current;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="w-full  flex justify-center items-center bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="h-[600px] w-[90%]  bg-black sm:w-3/4 lg:h-screen overflow-hidden flex flex-col justify-center ">
        {/* Slajdy */}
        <div className="hidden md:block mb-28">
          <Line text={["O", "PI", "NI", "E"]} />
        </div>
        <h2 className="sm:hidden text-white text-7xl pl-8">Reviews.</h2>
        <div className="bg-white sm:bg-black rounded-2xl mt-4 pt-4">
          <div
            className="flex rounded-2xl   transition-transform duration-1000 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full justify-center  flex-shrink-0 p-4"
              >
                <div className="flex  justify-center">
                  <div className="hidden sm:block mr-4 mt-1 my-6">
                    <svg
                      width="57"
                      height="45"
                      viewBox="0 0 57 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.3329 28.9198V6.42664C25.3329 2.87731 22.4975 0 18.9997 0H6.33323C2.83549 0 0 2.87731 0 6.42664V19.2799C0 22.8293 2.83549 25.7065 6.33323 25.7065H15.8331V28.9198C15.8918 32.0324 13.7439 34.7401 10.7348 35.3466C10.0328 35.5067 9.52551 36.1271 9.49986 36.8568V43.2835C9.47632 43.7821 9.67378 44.2655 10.0382 44.601C10.375 44.9055 10.8258 45.0463 11.2732 44.9865C19.3186 44.0665 25.3839 37.1356 25.3329 28.9198ZM38.0001 0H50.6667C54.1643 0 56.9999 2.87731 56.9999 6.42664V28.9198C57.0345 37.1233 50.9735 44.0357 42.94 44.9544C42.4927 45.0142 42.042 44.8734 41.7051 44.5687C41.3659 44.2555 41.1707 43.8131 41.1667 43.3477V36.9211C41.1635 36.1672 41.677 35.5124 42.4018 35.3466C45.4108 34.7401 47.5588 32.0324 47.4999 28.9198V25.7065H38.0001C34.5024 25.7065 31.6669 22.8293 31.6669 19.2799V6.42664C31.6669 2.87731 34.5024 0 38.0001 0Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div className=" ml-4 mt-1 mb-6 ">
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 57 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.3329 28.9198V6.42664C25.3329 2.87731 22.4975 0 18.9997 0H6.33323C2.83549 0 0 2.87731 0 6.42664V19.2799C0 22.8293 2.83549 25.7065 6.33323 25.7065H15.8331V28.9198C15.8918 32.0324 13.7439 34.7401 10.7348 35.3466C10.0328 35.5067 9.52551 36.1271 9.49986 36.8568V43.2835C9.47632 43.7821 9.67378 44.2655 10.0382 44.601C10.375 44.9055 10.8258 45.0463 11.2732 44.9865C19.3186 44.0665 25.3839 37.1356 25.3329 28.9198ZM38.0001 0H50.6667C54.1643 0 56.9999 2.87731 56.9999 6.42664V28.9198C57.0345 37.1233 50.9735 44.0357 42.94 44.9544C42.4927 45.0142 42.042 44.8734 41.7051 44.5687C41.3659 44.2555 41.1707 43.8131 41.1667 43.3477V36.9211C41.1635 36.1672 41.677 35.5124 42.4018 35.3466C45.4108 34.7401 47.5588 32.0324 47.4999 28.9198V25.7065H38.0001C34.5024 25.7065 31.6669 22.8293 31.6669 19.2799V6.42664C31.6669 2.87731 34.5024 0 38.0001 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-center mb-10 ">
                    {"                 "}
                    <p className="ml-4 text-xl md:text-3xl text-gray-600 text-pretty">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className=" w-[371.23px] h-[20.84px] pr-[192.23px] pt-[1.05px]  justify-start items-center gap-[19.22px] inline-flex ml-16">
                  <div className="w-[61.78px] h-[3.86px] bg-black sm:bg-white" />
                  <div className="w-[98px] h-[17px] text-black sm:text-white text-base  leading-[20.86px] tracking-tight font-normal ">
                    {slide.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex  pb-8 sm:py-5 justify-center sm:justify-between flex-row-reverse space-x-2 ">
            <div className=" text-2xl hidden sm:block">
              {/* Przycisk "Poprzedni" */}
              <button onClick={prevSlide} className=" text-white m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="w-9 h-9 mr-2 fill-white hover:fill-gray-500 transition-colors duration-300"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </button>

              {/* Przycisk "Następny" */}
              <button onClick={nextSlide} className=" text-white m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  className="w-9 h-9 mr-2 fill-white hover:fill-gray-500 transition-colors duration-300"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
            </div>

            {/* Wskaźniki (dot indicators) */}
            <div className=" space-x-2  items-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-6 h-[2px] transition-all duration-300 ${
                    currentIndex === index
                      ? "sm:bg-white bg-black scale-120 w-8 "
                      : "bg-gray-400 "
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsCarousel;
