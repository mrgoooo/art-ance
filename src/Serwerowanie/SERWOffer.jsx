import Image from "../assets/images/google.png";
import RevealOnScroll from "../animations/RevealAnimation";

function SEOOffer() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1100px] pb-8 z-10 bg-">
      <div className="w-full bg-black bg-opacity-10    rounded-2xl py-10 flex justify-center">
        <div className="w-full max-w-3xl px-4 flex flex-col items-center">
          <div className="rounded-md p-6 space-y-16 md:space-y-12 text-black">
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl  ">
                Monitorowanie i Konserwacja
              </h3>
              <p className=" text-xs md:text-base w-[80%] md:w-full text-center text-black/60 pt-2">
                stałe nadzorowanie stanu serwera, instalowanie poprawek
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-base md:text-3xl ">
                Bezpieczeństwo i Backupy
              </h3>
              <p className="text-xs md:text-base w-[80%] md:w-full text-center text-black/60 pt-2">
                zabezpieczenia przed atakami, regularne kopie zapasowe
              </p>
            </div>
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl">Skalowalność </h3>
              <p className=" w-[80%] md:w-full text-center text-xs md:text-base text-black/60 pt-2">
                możliwość łatwego zwiększenia zasobów w miarę rozwoju Twojego
                biznesu
              </p>
            </div>
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl ">Wsparcie Techniczne</h3>
              <p className="text-xs md:text-base w-[80%] md:w-full text-center text-black/60 pt-2">
                bieżąca pomoc w rozwiązywaniu problemów i konsultacje rozwojowe
              </p>
            </div>

            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl ">
                Optymalizacja Wydajności
              </h3>
              <p className="text-xs md:text-base  w-[80%] md:w-full text-center text-black/60 pt-2">
                dobór odpowiednich konfiguracji, dbanie o szybkość ładowania
                stron
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SEOOffer;
