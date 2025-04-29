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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    handleResize(); // aktualizacja przy starcie
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 600;
  const gradientWidth = windowWidth * 0.1;
  const gradientHeight = windowWidth * 0.1;

  const backgroundStyle = {
    height: `300px`, // lepsze niż 100vh na Safari
    background: `radial-gradient(${gradientWidth}px ${gradientHeight}px at 60% 50%, #b96154 0%, black 100%)`,
    transition: "background 0.1s ease-out",
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  return (
    <div
      className="w-full flex justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-[90%] sm:w-full lg:h-screen  bg-white rounded-2xl sm:bg-black flex flex-col items-center justify-center ">
        <div className="hidden md:block w-[90%] sm:w-3/4 ">
          <Line text={["PR", "OC", "E", "S"]} />
        </div>
        <h2 className="text-black w-full pl-9 text-left text-7xl sm:hidden pb-10 pt-3">
          How it <br /> works.
        </h2>
        <div className="h-full flex justify-center w-full items-center">
          <div className=" w-[90%] sm:w-3/4  overflow-hidden  rounded-2xl">
            {/* Slajdy */}
            <div
              className="flex  w-full transition-transform duration-1000  ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full  flex-shrink-0 p-4" // Added padding for spacing
                >
                  <p className="sm:text-white text-black">{slide.step}</p>
                  <div className="flex items-center ">
                    {/* Text Content - Left Side */}
                    <div className=" w-full lg:w-2/3 pr-8">
                      {" "}
                      {/* Added right padding for spacing */}
                      <div className="flex items-center ">
                        <h2 className="text-black text-4xl   sm:text-5xl md:text-7xl sm:text-white font-semibold">
                          {slide.title}
                        </h2>
                        <svg
                          width="97"
                          height="97"
                          viewBox="0 0 97 97"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 sm:w-28 sm:h-28 fill-black sm:fill-white"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M72.7503 24.25H24.2503V32.3334H58.9507L22.5757 68.7084L28.2915 74.4241L64.6669 38.0487V72.75H72.7503V24.25Z"
                          />
                        </svg>
                      </div>
                      <p className=" pt-10 text-white/60 text-lg sm:text-2xl">
                        {slide.description}
                      </p>
                      {/* Add additional buttons or elements if needed */}
                    </div>

                    {/* Image - Right Side */}
                    <div
                      style={backgroundStyle}
                      className="relative hidden lg:flex justify-center items-center w-1/3 h-full text-8xl"
                    >
                      <div className="absolute left-[52%] top-[35%]  text-8xl font-normal">
                        {index + 1}.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between flex-row-reverse space-x-2">
              <div className=" text-2xl pb-4">
                {/* Przycisk "Poprzedni" */}
                <button onClick={prevSlide} className=" text-white m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className=" w-7 h-7 sm:w-9 sm:h-9 mr-2 fill-black sm:fill-white hover:fill-gray-500 transition-colors duration-300"
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
                    className=" w-7 h-7 sm:w-9 sm:h-9 mr-2 fill-black sm:fill-white hover:fill-gray-500 transition-colors duration-300 "
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </button>
              </div>

              {/* Wskaźniki (dot indicators) */}
              <div className=" space-x-2 pt-2 pl-9 items-center">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-6 h-[2px] transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-black sm:bg-white scale-120 w-8"
                        : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
