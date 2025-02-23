import React, { useState } from "react";

const Advantages = () => {
  const [isTextChanging, setIsTextChanging] = useState(false);
  const [selectedButton, setSelectedButton] = useState("WEB Development"); // Przechowywanie wybranego przycisku
  const text = [
    {
      begin:
        "Profesjonalne, w pełni spersonalizowane strony internetowe tworzone przez zespół profesjonalnych deweloperów",
      text: "Dzięki wykorzystaniu najnowszych technologii zapewniamy szybkie działanie i pełną kompatybilność na wszystkich urządzeniach. Niezależnie od tego, czy potrzebujesz prostej witryny informacyjnej, czy zaawansowanego systemu e-commerce, dostarczymy rozwiązanie idealnie dopasowane do Twoich potrzeb.",
    },
    {
      begin:
        "Spersonalizowane projekty dopasowane do potrzeb klienta łączą estetykę z funkcjonalnością",
      text: "Nasze projekty gwarantują intuicyjną nawigację i pozytywne wrażenia na każdym kroku interakcji z Twoją stroną. Tworzymy designy, które nie tylko wyglądają świetnie, ale przede wszystkim zachęcają użytkownika do dalszej eksploracji strony.",
    },
    {
      begin:
        "Pomożemy Twojej stronie zaistnieć w wynikach wyszukiwania Google i innych wyszukiwarek.",
      text: "Optymalizujemy treści, strukturę strony oraz techniczne aspekty witryny, aby poprawić jej widoczność i przyciągnąć organiczny ruch. Nasze podejście do SEO to przede wszystkim połączenie danych analitycznych i kreatywnych strategii, które już po miesiącu mogą przynieść pierwsze rezultaty.",
    },
    {
      begin:
        "Usługi serwerowe, które gwarantują stabilność, bezpieczeństwo i szybkie działanie Twojej strony internetowej.",
      text: "Zajmujemy się konfiguracją, optymalizacją oraz bieżącym monitorowaniem serwerów, aby Twoja witryna była zawsze dostępna dla użytkowników oraz zabezpieczona certyfikatem SSl.",
    },
    {
      begin:
        "Kompleksowe zarządzanie stronami internetowymi, od serwerowania po regularne aktualizacje, SEO, prowadzenie bloga i optymalizację wydajności.",
      text: "Dzięki naszej opiece Twoja strona zawsze będzie działała bez zarzutu, spełniając najwyższe standardy technologiczne. Pozwól nam zająć się technicznymi aspektami, a Ty skup się na rozwijaniu swojego biznesu!",
    },
  ];
  const [selectedText, setSelectedText] = useState(text[0]);

  const handleButtonClick = (text, buttonName) => {
    // Ustawiamy flagę, aby kontrolować animację
    setIsTextChanging(true);

    // Po 0.25s (czas animacji) zmieniamy tekst i przycisk

    setSelectedText(text);
    setSelectedButton(buttonName); // Ustawiamy nazwę przycisku, który został kliknięty
    setIsTextChanging(false);
  };

  return (
    <div className="flex justify-center  lg:h-screen bg-black">
      <div className="flex w-3/4 items-center">
        <div className="w-1/2 p-4 flex flex-col items-start space-y-4 text-white text-4xl  ">
          <button
            onClick={() => handleButtonClick(text[0], "WEB Development")}
            className={`p-5 rounded  transition-transform duration-1000  ${
              selectedButton === "WEB Development"
                ? "text-white translate-x-20"
                : "text-gray-500"
            }`}
          >
            WEB Development
          </button>
          <button
            onClick={() => handleButtonClick(text[1], "UI/UX Design")}
            className={`p-5 rounded  transition-transform duration-1000 ${
              selectedButton === "UI/UX Design"
                ? "text-white translate-x-20"
                : "text-gray-500"
            }`}
          >
            UI/UX Design
          </button>
          <button
            onClick={() => handleButtonClick(text[2], "SEO")}
            className={`p-5 rounded transition-transform duration-1000 :hover ${
              selectedButton === "SEO"
                ? "text-white translate-x-20"
                : "text-gray-500"
            }`}
          >
            SEO
          </button>
          <button
            onClick={() => handleButtonClick(text[3], "Serwerowanie")}
            className={`p-5 rounded transition-transform duration-1000 ${
              selectedButton === "Serwerowanie"
                ? "text-white translate-x-20"
                : "text-gray-500"
            }`}
          >
            Serwerowanie
          </button>
          <button
            onClick={() => handleButtonClick(text[4], "Web Managment")}
            className={`p-5 rounded transition-transform duration-1000 ${
              selectedButton === "Web Managment"
                ? "text-white translate-x-20"
                : "text-gray-500"
            }`}
          >
            Web Managment
          </button>
        </div>

        <div className="w-1/2">
          <h2
            key={selectedText.begin}
            className="text-2xl text-white m-16 animate-fade-in left-0 top-0 pl-5"
          >
            {selectedText.begin}
          </h2>
          <h2
            key={selectedText.text}
            className="text-2xl text-white/60 m-16 animate-fade-in-slow left-0 top-0"
          >
            {selectedText.text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
