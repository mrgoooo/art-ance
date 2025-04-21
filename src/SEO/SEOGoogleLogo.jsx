import Image from "../assets/images/SEOGoogleLOGO.png";

function SEOGoogleLogo() {
  return (
    <div className="flex flex-col w-[90%] max-h-[1100px] md:pb-8 z-10">
      <div className="relative flex items-center h-auto xl:h-[1000px]">
        <img src={Image} className="h-full w-full object-cover opacity-60" />

        <div className="hidden md:block absolute left-0 text-white text-[28px] sm:text-[60px] md:text-[80px] lg:text-[130px] font-normal leading-tight xl:leading-[210.8px] p-4 z-20">
          Zwiększ widoczność Twojej strony w Google.
        </div>
      </div>
    </div>
  );
}
export default SEOGoogleLogo;
