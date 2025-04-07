import React from "react";
import Logo from "../assets/images/logodużeczarne.png";
import ArrowButtonComp from "../Oferta/ArrowButtonComp";

function ONWhoWeAre() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] flex flex-col items-center pb-8 md:pb-32 ">
        <div className="flex flex-col md:flex-row ">
          <div className="w-1/2 xl:text-[236px] lg:text-[200px] md:text-[140px] sm:text-[100px] text-[100px]   ">
            Who
          </div>
          <div className="w-full text-sm sm:text-base md:text-2xl  md:w-1/2 text-black/40  xl:text-[28px] xl:leading-[34px] ">
            ARTANCE to ekipa młodych przedsiębiorców, łączących kreatywność z
            biznesem. Od 2023 roku tworzymy strony, które nie tylko wyglądają
            świetnie, ale realnie napędzają firmy.
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full text-sm sm:text-base md:text-2xl md:w-1/2 text-black/40  xl:text-[28px] xl:leading-[34px]">
            Budujemy intuicyjne i skuteczne strony, które pomagają firmom
            rosnąć. To coś więcej niż wizytówka – to narzędzie do skalowania
            biznesu i przyciągania klientów.
          </div>
          <div className="w-1/2 xl:text-[236px] lg:text-[200px] md:text-[140px] sm:text-[100px] text-[100px]   ">
            We
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 xl:text-[236px] lg:text-[200px] md:text-[140px] sm:text-[100px] text-[100px]  ">
            Are
          </div>
          <div className="w-full text-sm sm:text-base md:text-2xl md:w-1/2 text-black/40  xl:text-[28px] xl:leading-[34px] ">
            Innowacja, klient, efektywność – stawiamy na nowoczesne rozwiązania,
            dostosowane do Twoich potrzeb, które przekładają się na realne
            wyniki.
          </div>
        </div>
      </div>
    </div>
  );
}
export default ONWhoWeAre;
