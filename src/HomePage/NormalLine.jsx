const NormalLine = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="w-full flex items-stretch py-4">
        {/* Kontener z tekstem */}

        {/* Linia wypełniająca pozostałą przestrzeń */}
        <div
          className="flex-grow border-b-2 border-slate-100  mb-2"
          style={{
            alignSelf: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NormalLine;
