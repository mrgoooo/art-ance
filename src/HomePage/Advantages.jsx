import React, { useState } from "react";
import Line from "./Line";
import Image from "../assets/images/logoprzycięte.png";

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
  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      description:
        "Profesjonalne, w pełni spersonalizowane strony internetowe tworzone przez zespół profesjonalnych deweloperów",
    },
    {
      number: "02",
      title: "UX/UI DESIGN",
      description:
        "Spersonalizowane projekty dopasowane do potrzeb klienta łączą estetykę z funkcjonalnością",
    },
    {
      number: "03",
      title: "SEO",
      description:
        "Pomożemy Twojej stronie zaistnieć w wynikach wyszukiwania Google i innych wyszukiwarek. Optymalizujemy treści, design i strukturę strony",
    },
    {
      number: "04",
      title: "SERWEROWANIE",
      description:
        "Usługi serwerowe, które gwarantują stabilność, bezpieczeństwo i szybkie działanie Twojej strony internetowej.",
    },
    {
      number: "05",
      title: "WEB MANAGEMENT",
      description:
        "Kompleksowe zarządzanie stronami internetowymi, od serwerowania po regularne aktualizacje, SEO, prowadzenie bloga i optymalizację wydajności.",
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
    <div className="flex  items-center flex-col min-h-screen ">
      <div className="hidden xl:block w-3/4">
        <Line className="" text={["O", "FE", "RT", "A"]} />
      </div>
      <div className="flex justify-center items-center  h-full ">
        <div className="hidden xl:flex w-3/4  ">
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
        {/* Wersja dla telefonu */}

        <div className=" flex flex-col xl:hidden w-[95%] items-center">
          <div className="lg:hidden flex justify-center mx-6 h-28">
            <div className="w-1/2 justify-center text-white text-4xl font-normal  leading-10">
              Powered by
            </div>
            <div className="w-1/2 sm:w-1/3 flex flex-col justify-end items-begin ">
              {" "}
              <img className="" src={Image}></img>
            </div>
          </div>

          {/* Komponenty */}
          <div className="bg-black text-white min-h-screen p-6 flex flex-col gap-6 w-[90%] ">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col gap-2 pb-8">
                <div className="flex">
                  <span className="text-gray-400 text-lg pr-1">
                    {service.number}/
                  </span>
                  <h2 className=" font-semibold text-3xl">{service.title}</h2>
                </div>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
