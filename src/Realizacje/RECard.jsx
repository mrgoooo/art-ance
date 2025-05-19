import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Body & Tennis",
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
            d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
            fill="#F2F65E"
          />
          <path
            d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
            fill="#F2F65E"
          />
          <path
            d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
            fill="#F2F65E"
          />
          <path
            d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
            fill="#F2F65E"
          />
        </g>
      </svg>
    ),
    gradient: "bg-gradient-to-b from-[#060017] to-[#a00040]",
    content:
      "Nasza strona internetowa wreszcie odzwierciedla profesjonalizm, który chcemy przekazać naszym klientom. Dzięki niej skutecznie budujemy naszą markę i przyciągamy nowych klientów.",
    externalUrl: "https://example.com/body-tennis",
  },
];

const RECard = () => {
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

    const opacity = 1 - Math.min(dist / maxDist, 1);
    setContentOpacity(opacity);
  };

  const handleMouseLeave = () => {
    setContentOpacity(0);
  };

  const handleClick = () => {
    window.open(projects[0].externalUrl, "_blank");
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
            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
              {projects[0].title}
            </h2>
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
          <h2 className="text-3xl">Body & Tennis</h2>
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

export default RECard;
