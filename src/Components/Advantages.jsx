import React, { useState } from "react";

const Advantages = () => {
  const [selectedText, setSelectedText] = useState("");
  const [isTextChanging, setIsTextChanging] = useState(false);
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  const handleButtonClick = (text) => {
    // Ustawiamy flagę, aby kontrolować animację
    setIsTextChanging(true);

    // Po 0.5s (czas animacji) zmieniamy tekst
    setTimeout(() => {
      setSelectedText(text);
      setIsTextChanging(false);
    }, 250);
  };

  return (
    <div className="flex h-screen bg-black items-center">
      <div className="w-1/2 p-4 flex flex-col space-y-4 text-white text-4xl">
        <button
          onClick={() => handleButtonClick(text[0])}
          className="p-5  text-white rounded"
        >
          WEB Development
        </button>
        <button
          onClick={() => handleButtonClick(text[0])}
          className="p-5  text-white rounded"
        >
          UI/UX Design
        </button>
        <button
          onClick={() => handleButtonClick(text[0])}
          className="p-5 text-white rounded"
        >
          SEO
        </button>
        <button
          onClick={() => handleButtonClick(text[0])}
          className="p-5 text-white rounded"
        >
          Serwerowanie
        </button>
        <button
          onClick={() => handleButtonClick(text[0])}
          className="p-5 text-white rounded"
        >
          Web Managment
        </button>
      </div>

      <div className="w-1/2  p-4">
        <h2
          className={`text-2xl m-16 text-white font-semibold transition-all duration-500 ${
            isTextChanging ? "opacity-0 blur-md" : "opacity-100 blur-0"
          }`}
        >
          {selectedText || "Kliknij przycisk, aby zobaczyć tekst."}
        </h2>
      </div>
    </div>
  );
};

export default Advantages;
