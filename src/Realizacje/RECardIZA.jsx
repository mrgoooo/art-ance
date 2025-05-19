import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../assets/images/IzaLogo.png";

const projects = [
  {
    id: 1,
    title: "Kancelaria Notarialna I.M",
    tags: ["Web Development", "UX/UI Design", "SEO"],
    logo: (
      <img src={Image} alt="Iza Logo" className="w-full h-auto max-w-[700px]" />
    ),
    gradient: "bg-gradient-to-b from-[#060017] to-[#085c4c]",
    content:
      "Nasza nowa strona internetowa to strzał w dziesiątkę! Jest elegancka, czytelna i w pełni dostosowana do potrzeb naszych klientów. Dzięki intuicyjnej nawigacji i klarownej prezentacji usług, klienci szybciej znajdują potrzebne informacje i częściej się z nami kontaktują.",
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

const RECardIZA = () => {
  const [contentOpacity, setContentOpacity] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const maxDist = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));

    const opacity = Math.abs(1 - Math.min((dist * dist) / 150 / maxDist, 1));
    setContentOpacity(opacity);
  };

  const handleMouseLeave = () => {
    setContentOpacity(0);
  };

  const handleClick = () => {
    window.open("http://www.notariusz-goclaw.com.pl/", "_blank");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full lg:w-1/2 h-[500px] lg:h-[600px] mr-14 rounded-3xl shadow-lg ${projects[0].gradient} text-white overflow-hidden flex flex-col justify-between p-6 cursor-pointer`}
    >
      <div className="flex flex-col flex-grow justify-between">
        <div className="h-full mt-4 flex-1 flex justify-center items-center relative">
          {/* Oba elementy na tej samej pozycji */}
          <motion.div
            className="absolute flex flex-col items-center text-center"
            style={{ opacity: 1 - contentOpacity }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl sm:text-5xl">{projects[0].logo}</div>
            {/* Usunięto tytuł */}
          </motion.div>

          <motion.p
            className="absolute text-sm sm:text-lg text-white/90 px-4 text-center max-w-[80%]"
            style={{ opacity: contentOpacity }}
            transition={{ duration: 0.3 }}
          >
            {projects[0].content}
          </motion.p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl">Kancelaria Notarialna I.M.</h2>
          <div className="flex justify-between w-full">
            <div className="flex gap-2 flex-wrap justify-start mt-4">
              {projects[0].tags.map((tag) => (
                <button
                  key={tag}
                  className="h-10 px-3 py-1 text-sm border border-white/50 rounded-full bg-white/10"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex justify-center items-end mt-4">
              <button
                onClick={handleClick}
                className="bg-white text-black h-10 w-14 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.58887 4.58887L18.7914 18.7914M19.4109 4.87446L19.4111 19.4112H4.90373"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RECardIZA;
