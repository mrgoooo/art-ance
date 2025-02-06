import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    description:
      "Cwaniaki z Roterdamu wcisnęły mi stronę, która ma fajne animację i wgl fajnie wygląda ale wsm jej nie potrzebuje. Może nie jest tanio ale za to długi okres oczekiwania. Nie polecam.",
    author: "Łukasz",
  },
  {
    description:
      "Wydałam na tę stronę roczną emeryturę. Teraz nie mam co do garnka włożyć.",
    author: "Jadwiga lat 89",
  },
  {
    description:
      "Wydałam na tę stronę roczną emeryturę. Teraz nie mam co do garnka włożyć.",
    author: "Jadwiga lat 89",
  },
];

const OpinionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

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
    }, 5000); // Zmienia co 3 sekundy (3000 ms)
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className=" w-3/4 h-screen overflow-hidden flex flex-col justify-center ">
        {/* Slajdy */}
        <div
          className="flex transition-transform duration-1000 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full justify-center  flex-shrink-0 p-4"
            >
              <div className="flex justify-center ">
                <div className="mr-4 mt-1">
                  <p className="text-6xl text-white ">❞</p>{" "}
                </div>

                <div className="flex-1">
                  {" "}
                  <p className="text-3xl text-gray-600 text-center">
                    {slide.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-start pl-16">
                <p className="text-white text-2xl">{slide.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-5 justify-between flex-row-reverse space-x-2">
          <div className=" text-2xl">
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
                    ? "bg-white scale-120 w-8"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsCarousel;
