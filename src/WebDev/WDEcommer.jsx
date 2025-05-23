import Image from "../assets/images/telefon.png";
import React from "react";
import RevealOnScroll from "../animations/RevealAnimation";
import { ShoppingBag, Filter, DollarSign, Play, Box, Grid } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Koszyk zakupowy",
    description: "Łatwe dodawanie, usuwanie i edytowanie produktów.",
  },
  {
    icon: Filter,
    title: "Zaawansowane filtry",
    description: " szybkie znajdowanie produktów.",
  },
  {
    icon: DollarSign,
    title: "Bezpieczne płatności",
    description: "PayPal, Przelewy24, BLIK, karty kredytowe.",
  },
  {
    icon: Play,
    title: " Pełna responsywność",
    description: "doskonały wygląd na komputerach i telefonach.",
  },
  {
    icon: Grid,
    title: "Zarządzanie produktami",
    description: "proste dodawanie, edytowanie i kategoryzowanie produktów.",
  },
  {
    icon: Box,
    title: "Integracja wysyłkowa",
    description: "śledzenie paczek i kalkulacja kosztów.",
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <Icon size={24} className="text-white mr-2" />
        <div className="text-white text-xl font-normal leading-[38.40px]">
          {title}
        </div>
      </div>
      <div>
        <p className="opacity-80 text-white text-[11px] font-normal leading-none">
          {description}
        </p>
      </div>
    </div>
  );
};

function WDEcommer() {
  return (
    <div className="flex flex-col  w-[95%] rounded-2xl ">
      <div className=" hidden relative xl:flex justify-end bg-white rounded-2xl bg-opacity-10">
        <div className="flex-col w-[59%]  ">
          <div className="w-full   pl-4  md:pt-10 pb-[150px] inline-flex flex-col justify-start items-start gap-[7px]">
            <div className="justify-center text-white text-[19px] font-normal leading-relaxed">
              Sklep E-commerce – Sprzedawaj skutecznie online
            </div>
            <div className="w-full justify-center text-white text-opacity-60 text-base font-normal leading-tight pr-4">
              E-commerce to klucz do nowoczesnej sprzedaży! Tworzymy wydajne,
              intuicyjne i w pełni zoptymalizowane sklepy internetowe, które
              pozwalają Ci sprzedawać szybciej, łatwiej i skuteczniej. Bez
              względu na to, czy startujesz z nowym biznesem, czy rozwijasz już
              istniejący sklep – dostarczymy rozwiązanie skrojone pod Twoje
              potrzeby.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 ">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <img
          src={Image}
          className="hidden lg:block absolute left-12 top-[100px] h-[802.45px] "
        ></img>
      </div>

      <div className="w-full mx-auto  md:py-8 rounded-2xl lg:bg-white md:bg-opacity-100  md:mt-10 flex flex-col">
        <div className="flex justify-start  md:justify-end md:pb-14">
          <div className="hidden lg:block lg:w-[80%] xl:w-[60%] ">
            {" "}
            <h2 className="text-[55px]   md:text-[110px] leading-[60px] md:leading-[115.20px] ">
              Nasza oferta <br /> dla Ciebie
            </h2>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2  rounded-2xl relative">
          {/* Pakiet Na Start */}

          <div className="flex-1 md:bg-white bg-black bg-opacity-30 rounded-2xl  lg:rounded-none  lg:pb-0 ">
            <h2 className="text-center text-3xl md:text-5xl text-white md:text-gray-800 pb-3 pt-4">
              Na Start
            </h2>
            <p className="text-center text-xs md:text-black text-white/80 opacity-60 md:text-xl  mt-2 mb-4">
              Idealny dla małych firm, freelancerów i startupów.
            </p>
            <div className="mb-6 mt-6 md:mt-14">
              <ul className="md:pl-6 md:text-black sm:text-2xl  text-center text-white/80 text-xs pt-4 ">
                <li className="border-t border-white/20 mx-6 py-6">
                  3 podstrony
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Responsywny design
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Optymalizacja SEO
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Integracja z Social Media
                </li>
                <li className="border-t border-b border-white/20 mx-6 py-6">
                  Podstawowa optymalizacja szybkości
                </li>
              </ul>
            </div>

            <div className="text-center pt-7 md:pt-14 pb-7">
              <span className=" text-xl md:text-2xl text-white rounded-full bg-[#534a6f] p-2 sm:p-3 px-4 mt-6">
                od 3500 PLN netto
              </span>
            </div>
          </div>

          {/* Pakiet Plus */}
          <div className="flex-1 bg-black bg-opacity-30 md:bg-white  rounded-2xl lg:rounded-none flex flex-col justify-between lg:self-center mt-8 lg:mt-0">
            <h2 className="text-center text-3xl md:text-5xl text-white md:text-gray-800 pb-3 pt-4">
              Plus
            </h2>
            <p className="text-center text-xs md:text-black text-white/80 opacity-60 md:text-xl mt-2 mb-4">
              Dla wymagających klientów i rozwijających się firm.
            </p>
            <div className="mb-6 mt-6 md:mt-14 lg:border-l-2 border-black  w-full">
              <ul className="md:pl-6 md:text-black sm:text-2xl text-center text-white/80 text-xs">
                <li className="border-t border-white/20 mx-6 py-6">
                  Rozbudowana struktura strony
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Zaawansowana optymalizacja SEO
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Integracja z systemami płatności i API
                </li>
                <li className="border-t border-white/20 mx-6 py-6">
                  Indywidualny design
                </li>
                <li className="border-t border-b border-white/20  mx-6 py-6">
                  Pełne wsparcie techniczne
                </li>
              </ul>
            </div>
            <div className="text-center pt-7 md:pt-14 pb-7 ">
              <span className="text-xl md:text-2xl text-white rounded-full bg-[#534a6f] p-2 sm:p-3 px-4 mt-6">
                od 5000 PLN netto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WDEcommer;
