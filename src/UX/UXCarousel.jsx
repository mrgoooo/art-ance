import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    step: "Step 1.",
    title: "Szybki Start",
    description:
      "Zaczynamy od rozmowy – konkretnej, bez ogólników.\nPoznajemy Twoją markę, użytkowników i cel. Działamy szybko, bo wiemy, że czas to zasób – nie marnujemy go na niekończące się briefy. Chcemy od razu wejść w sedno i zacząć działać.",
    image: "",
    cta: "",
  },
  {
    step: "Step 2.",
    title: "Projekt z Charakterem",
    description:
      "Tworzymy szkice, które mają nie tylko wyglądać, ale działać.\nNasze makiety to nie sztywne ramki – to dynamiczne prototypy, które testujemy i dopasowujemy razem z Tobą. Dzięki temu masz realny wpływ na efekt końcowy od pierwszych dni pracy.",
    image: "",
    cta: "",
  },
  {
    step: " Step 3.",
    title: "UI z Pomysłem",
    description:
      "Nie kopiujemy trendów – tworzymy je.\nKażdy element wizualny dopasowujemy do Twojej marki. Projektujemy responsywnie, przejrzyście i intuicyjnie. Twój użytkownik wie, gdzie kliknąć – i chce wrócić. Wszystko po to, by Twoja strona nie tylko przyciągała wzrok, ale też konwertowała.",
    image: "",
    cta: "",
  },
  {
    step: "Step 4.",
    title: "Ostatni Szlif",
    description:
      "Sprawdzamy, testujemy, dopinamy – razem.\nKończymy dopiero wtedy, gdy wszystko działa tak, jak powinno. UX i UI to dla nas proces, nie punkt na liście. Przekazujemy Ci gotowy, dopracowany produkt, który możesz z dumą pokazać światu. A jeśli chcesz iść dalej – jesteśmy obok.",
    image: "",
    cta: "",
  },
];

const UXCarousel = () => {
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
      className="w-full flex justify-center "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-[95%]  lg:h-[600px]  bg-[#f2cba6] rounded-2xl  flex flex-col items-center justify-center ">
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
                  className="relative w-full flex-shrink-0 p-4 " // Added padding for spacing
                >
                  <p className=" text-black">{slide.step}</p>
                  <div className="flex items-center  ">
                    {/* Text Content - Left Side */}
                    <div className=" w-full md:w-2/3 pr-8 ">
                      {" "}
                      {/* Added right padding for spacing */}
                      <div className="flex items-center  ">
                        <h2 className="text-black text-4xl   sm:text-5xl md:text-7xl">
                          {slide.title}
                        </h2>
                        <svg
                          width="97"
                          height="97"
                          viewBox="0 0 97 97"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 sm:w-28 sm:h-28 fill-black "
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M72.7503 24.25H24.2503V32.3334H58.9507L22.5757 68.7084L28.2915 74.4241L64.6669 38.0487V72.75H72.7503V24.25Z"
                          />
                        </svg>
                      </div>
                      <p className=" pt-10 text-black/60 text-lg sm:text-2xl">
                        {slide.description}
                      </p>
                      {/* Add additional buttons or elements if needed */}
                    </div>

                    {/* Image - Right Side */}
                    <div className="absolute right-0 top-0 hidden md:block w-1/3  ">
                      <h2 className="text-right pr-8 text-4xl font-normal ">
                        #process
                      </h2>
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
                    className=" w-7 h-7 sm:w-9 sm:h-9 mr-2 fill-black  hover:fill-[#060017]/30 transition-colors duration-300"
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
                    className=" w-7 h-7 sm:w-9 sm:h-9 mr-2 fill-black  hover:fill-[#060017]/30 transition-colors duration-300 "
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
                        ? "bg-black  scale-120 w-8"
                        : "bg-[#060017]/30"
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

export default UXCarousel;
