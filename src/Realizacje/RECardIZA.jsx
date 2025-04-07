import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../assets/images/IzaLogo.png";

const projects = [
  {
    id: 1,
    title: "Kancelaria Notarialna I.M",
    tags: ["Web Development", "UX/UI Design", "SEO"],
    logo: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Logo">
          <path
            id="Vector"
            d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
            fill="#F2F65E"
          />
          <path
            id="Vector_2"
            d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
            fill="#F2F65E"
          />
          <path
            id="Vector_3"
            d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
            fill="#F2F65E"
          />
          <path
            id="Vector_4"
            d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
            fill="#F2F65E"
          />
        </g>
      </svg>
    ),
    gradient: "bg-gradient-to-b from-[#060017] to-[#085c4c]",
    content: null, // null oznacza, że pokazujemy logo i tytuł
  },
  {
    id: 2,
    title: "",
    tags: ["Web Development", "UX/UI Design", "SEO"],
    logo: "",
    gradient: "bg-gradient-to-b from-[#060017] to-[#085c4c] ",
    content:
      "Nasza nowa strona internetowa to strzał w dziesiątkę! Jest elegancka, czytelna i w pełni dostosowana do potrzeb naszych klientów. Dzięki intuicyjnej nawigacji i klarownej prezentacji usług, klienci szybciej znajdują potrzebne informacje i częściej się z nami kontaktują.",
  },
];

const RECard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <motion.div
      key={projects[currentIndex].id}
      initial={{ opacity: 0.7, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={` w-full lg:w-1/2 h-[500px] lg:h-[600px] mr-14 rounded-3xl shadow-lg ${projects[currentIndex].gradient} text-white overflow-hidden flex flex-col justify-between p-6`}
    >
      {/* Tło */}

      {/* Treść */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Warunkowa zawartość: logo i tytuł albo tekst */}

        <div className="h-fit mt-4 flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            {projects[currentIndex].content ? (
              // Animowany tekst
              <motion.p
                key="text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-lg text-white/90 px-4"
              >
                {projects[currentIndex].content}
              </motion.p>
            ) : (
              // Animowane logo + tytuł
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.9 }}
                className="flex w-full h-full   items-center   justify-center"
              >
                <div className="flex justify-center">
                  <h2 className="text-3xl sm:text-4xl font-semibold mt-2 ">
                    <img src={Image}></img>
                  </h2>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-3xl "> Kancelaria Notarialna I.M.</h2>
          <div className="flex  justify-between w-full">
            {/* Tagi */}
            <div className="flex gap-2 flex-wrap justify-start mt-4">
              {projects[currentIndex].tags.map((tag) => (
                <button
                  key={tag}
                  className="h-10 px-3 py-1 text-sm border border-white/50 rounded-full bg-white/10"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Przycisk */}
            <div className="flex justify-center items-end mt-4 ">
              <button
                onClick={handleNext}
                className="bg-white text-black h-10 w-14 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M4.58887 4.58887L18.7914 18.7914M19.4109 4.87446L19.4111 19.4112H4.90373"
                      stroke="black"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RECard;
