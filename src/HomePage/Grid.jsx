import Line from "./Line";
import NormalLine from "./NormalLine";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// ...existing imports...

const AnimatedNumber = ({ target = 100, duration = 1500, znak = "%" }) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    let raf;

    const animate = () => {
      start += increment;
      if (start < target) {
        setValue(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {znak}
    </span>
  );
};

const Grid = () => {
  return (
    <section className="flex justify-center lg:h-full w-full bg-black flex-col items-center">
      <div className="w-[90%] flex sm:flex-col sm:w-3/4 pt-8">
        <div className="w-28 pb-8 sm:hidden">
          <div className="flex flex-col items-center justify-center">
            <div className="[writing-mode:vertical-rl] origin-center rotate-180 h-[85%] text-left pl-4 ">
              <p className="text-[50px] tracking-tighter">
                NUMBERS by ARTANCE.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block ">
          <Line text={["D", "A", "N", "E"]} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  ">
          <div className="flex flex-col  text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className=" text-7xl sm:text-8xl sm:pb-8 font-normal">
                <AnimatedNumber target={10} duration={1500} znak="+" />
              </div>
              <div className=" text-xl sm:text-2xl text-white/60">
                Zrealizowanych projektów
              </div>
              <div className="text-xl sm:text-2xl text-white/60">
                W Polsce i za granicą
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8 font-normal">
                <AnimatedNumber target={5} duration={1500} znak="+" />
              </div>
              <div className="text-xl sm:text-2xl text-white/60">
                Lat doświadczenia w <br />
                branży.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8 font-normal">
                <AnimatedNumber target={14} duration={1500} znak="" />
              </div>
              <div className="text-xl sm:text-2xl text-white/60">
                Dni od rozpoczęcia
                <br />
                projektu do publikacji.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8 font-normal">
                <AnimatedNumber target={100} duration={1500} />
              </div>
              <div className="text-xl sm:text-2xl text-white/60">
                Zadowolonych klientów z <br />
                różnych branż.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex  w-[90%] sm:flex-col sm:w-3/4 pt-8">
        <NormalLine />
      </div>
    </section>
  );
};

export default Grid;
