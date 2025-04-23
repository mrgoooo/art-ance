const Line = ({ text = ["dd", "DD"] }) => {
  return (
    <div className="w-full flex  py-4 px-4">
      {/* Kontener z pionowymi słowami */}
      <div className="flex gap-2.5 text-white  ">
        {text.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className="flex flex-col-reverse  text-2xl  leading-tight"
          >
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className="inline-block transform -rotate-90"
                style={{
                  lineHeight: "1em",
                  marginTop: "-0.2em",
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Linia wypełniająca resztę */}
      <div className="flex-grow border-b-2 border-slate-100 ml-4 mb-2.5" />
    </div>
  );
};

export default Line;
