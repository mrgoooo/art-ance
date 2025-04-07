import Image from "../assets/images/google.png";
import RevealOnScroll from "../animations/RevealAnimation";

function SEOOffer() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1100px] pb-8 z-10 bg-">
      <div className="w-full bg-black bg-opacity-10    rounded-2xl py-10 flex justify-center">
        <div className="w-full max-w-3xl px-4 flex flex-col items-center">
          <div className="rounded-md p-6 space-y-16 md:space-y-12 text-white/90 lg:text-black">
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl  ">Audyt SEO</h3>
              <p className=" text-xs md:text-base w-[80%] md:w-full text-center text-white/80   lg:text-black/60 pt-2">
                analiza techniczna i treściowa strony
              </p>
            </div>
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl ">Optymalizacja on-site</h3>
              <p className="text-xs md:text-base w-[80%] md:w-full text-center text-white/80   lg:text-black/60 pt-2">
                poprawa struktury, kodu i treści
              </p>
            </div>
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl">SEO techniczne</h3>
              <p className=" w-[80%] md:w-full text-center text-xs md:text-base text-white/80   lg:text-black/60 pt-2">
                poprawa szybkości ładowania, indeksowania i mobilności
              </p>
            </div>
            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl ">Link building</h3>
              <p className="text-xs md:text-base w-[80%] md:w-full text-center text-white/80   lg:text-black/60 pt-2">
                zdobywanie wartościowych linków
              </p>
            </div>

            <div className="flex flex-col  items-center ">
              <h3 className="text-base md:text-3xl ">Tworzenie treści SEO</h3>
              <p className="text-xs md:text-base text-white/80   lg:text-black/60 pt-2">
                artykuły blogowe, opisy produktów i landing pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SEOOffer;
