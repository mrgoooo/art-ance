export const HeroHeading = () => {
  return (
    <header className="flex overflow-hidden flex-col">
      <h1 className="z-10 self-start -mt-1.5 text-6xl tracking-tighter leading-[61px] text-slate-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <span className="text-[rgba(6,1,23,1)]">
          Z nami Twoja marka zyska nowy digital
        </span>
        <br />
        <br />
        <br />
        <span className="text-[220px] text-[rgba(6,1,23,1)]">Experience.</span>
      </h1>
      <div className="flex z-10 flex-col self-end mt-44 max-w-full w-[593px] max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fe634c5d7c3bcd4344c294aede5bf3d2f9e3c8389e0a5de3e15149b54e674a"
          alt="Decorative element"
          className="object-contain self-end aspect-[2.08] w-[81px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbde0443763ff26c15eeb00279fde589a77822333751a6a6c7647058f83e55d6"
          alt="Hero illustration"
          className="object-contain mt-11 max-w-full aspect-[1.15] w-[544px] max-md:mt-10"
        />
      </div>
    </header>
  );
};

export default HeroHeading;
