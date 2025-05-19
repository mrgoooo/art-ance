function REHero() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex justify-start">
        <div className="justify-center text-[#060017] text-2xl md:text-[44px] font-normal leading-10 pt-8">
          Powered & Designed by
        </div>
      </div>
      <div className="flex justify-start">
        <div className="justify-center text-[#060017] text-8xl md:text-[150px] lg:text-[230px] font-normal  leading-[100px]  md:leading-[210.80px] ">
          Artance
        </div>
      </div>
      <div className="flex justify-end">
        <div className="justify-center text-[#060017] text-8xl md:text-[150px] lg:text-[230px] font-normal  leading-[100px] md:leading-[210.80px] ">
          Studio
        </div>
      </div>

      <div className="flex justify-start">
        <div className="pt-6  pr-5">
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black " // Możesz użyć Tailwind do stylizacji
          >
            <path
              d="M20 38.333V1.667"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.333 25L20 38.333 6.667 25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-[514px] h-[100px] md:h-[62px] justify-center text-black/60 text-xs sm:text-xl font-normal  leading-tight  mb-0 lg:mb-8 pt-8 sm:pt-4 ">
          Każdy projekt to dla nas unikalna historia, w której kreatywność
          spotyka się z technologią.
        </div>
      </div>
    </div>
  );
}
export default REHero;
