const Line = ({ text = "ROTATED" }) => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="w-full flex items-stretch py-4">
        {/* Kontener z tekstem */}
        <div className="flex items-center text-white  pl-4">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block origin-center transform -rotate-90 mx-1.5"
              style={{
                lineHeight: "1em",
                marginTop: "-0.4em",
                marginBottom: "-0.4em",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Linia wypełniająca pozostałą przestrzeń */}
        <div
          className="flex-grow border-b-2 border-slate-100 ml-4 mb-2"
          style={{
            alignSelf: "center",
            marginRight: "1rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Line;
