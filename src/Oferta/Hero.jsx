import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="w-[95%] ">
        <h2 className="hidden md:block text-xl sm:text-3xl lg:text-5xl pt-10 px-5">
          Z nami Twoja marka zyska nowy digital
        </h2>
        <h2 className="hidden md:block text-5xl sm:text-6xl lg:text-[170px] xl:text-[230px] px-5 text-right pb-14">
          Experience.
        </h2>
        <h2 className="md:hidden text-[40px] leading-[42px] py-8">
          Z nami Twoja marka zyska nowy digital Experience.
        </h2>
      </div>
    </header>
  );
};
export default Hero;
