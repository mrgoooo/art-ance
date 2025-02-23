import React, { useState, useEffect, useRef } from "react";

import myImagee from "../assets/images/helpp.jpg";
import Line from "./Line";

const slides = [
  {
    step: "Step 1",
    title: "Onboarding",
    description:
      "Współpracę zaczynamy od analizy potrzeb biznesowych klienta oraz wymagań SEO, opracowujemy mapę witryny i wstępne szkice (wireframes). Następnie umawiamy się na spotkanie onboardingowe, które pozwala dopracować szczegóły.",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Learn More",
  },
  {
    step: "Step 2",
    title: "Design Projektu",
    description:
      "Korzystając z zebranych informacji, przygotowujemy wstępny brief projektowy i opracowujemy projekt graficzny. Po akceptacji przez klienta przechodzimy do fazy deweloperskiej.",
    image: "https://picsum.photos/id/240/800/400",
    cta: "Shop Now",
  },
  {
    step: "Step 3",
    title: "Rozwój",
    description:
      "Realizujemy projekt techniczny, przeprowadzając testy jakości (QA) na każdym etapie – od pierwszej wersji po końcowe poprawki. Optymalizujemy stronę pod kątem SEO, technikaliów i szybkości działania.",
    image: "https://picsum.photos/id/240/800/400", // Example with local image require
    cta: "Register Today",
  },
  {
    step: "Step 4",
    title: "Publikowanie",
    description:
      "Po przedstawieniu gotowej strony klientowi i dokonaniu ostatecznych poprawek następuje publikacja witryny. Podpisujemy umowy na dalsze wsparcie techniczne oraz przesyłamy podziękowania za współpracę.",
    image: "https://picsum.photos/id/240/800/400", // Example with local image require
    cta: "Register Today",
  },
];

const Carousel = () => {
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
    <div className="w-full lg:h-screen  bg-black flex flex-col items-center justify-center  ">
      <div className="w-3/4">
        <Line text="PROCES" />
      </div>
      <div className=" w-3/4 h-full  overflow-hidden">
        {/* Slajdy */}
        <div
          className="flex  w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4" // Added padding for spacing
            >
              <p className="text-white">{slide.step}</p>
              <div className="flex items-center py-9">
                {/* Text Content - Left Side */}
                <div className="w-2/3 pr-8">
                  {" "}
                  {/* Added right padding for spacing */}
                  <div className="flex items-center gap-4">
                    <h2 className=" text-5xl md:text-7xl text-white font-bold">
                      {slide.title}
                    </h2>
                    <svg
                      width="97"
                      height="97"
                      viewBox="0 0 97 97"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-28 h-28"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M72.7503 24.25H24.2503V32.3334H58.9507L22.5757 68.7084L28.2915 74.4241L64.6669 38.0487V72.75H72.7503V24.25Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className=" pt-10 text-gray-600 text-2xl">
                    {slide.description}
                  </p>
                  {/* Add additional buttons or elements if needed */}
                </div>

                {/* Image - Right Side */}
                <div className="w-1/3 h-full">
                  <img
                    src={myImagee}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-lg" // Added rounded corners
                  />
                </div>
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

export default Carousel;
