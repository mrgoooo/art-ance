import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    step: "Step 1",
    title: "Discover New Horizons",
    description:
      "Explore breathtaking destinations with our expert travel guides. Start your adventure today!",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Learn More",
  },
  {
    step: "Step 2",
    title: "Summer Collection 2024",
    description:
      "Shop our latest summer fashion lineup. Fresh styles for every occasion now available.",
    image: "https://picsum.photos/id/240/800/400",
    cta: "Shop Now",
  },
  {
    step: "Step 3",
    title: "Tech Innovation Summit",
    description:
      "Join industry leaders discussing the future of AI and blockchain technology. Register now for early bird tickets.",
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
    <div className="w-full h-screen flex justify-center bg-black">
      <div className=" w-3/4 h-screen  overflow-hidden">
        {/* Slajdy */}
        <div
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4" // Added padding for spacing
            >
              <p className="text-white">{slide.step}</p>
              <div className="flex h-full items-center">
                {/* Text Content - Left Side */}
                <div className="w-1/2 pr-8">
                  {" "}
                  {/* Added right padding for spacing */}
                  <h2 className="text-4xl  text-white font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-600">{slide.description}</p>
                  {/* Add additional buttons or elements if needed */}
                </div>

                {/* Image - Right Side */}
                <div className="w-1/2 h-full">
                  <img
                    src={slide.image}
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
