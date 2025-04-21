import Line from "./Line";
import NormalLine from "./NormalLine";
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

        <div className="hidden sm:block">
          <Line text="DANE" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  ">
          <div className="flex flex-col  text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className=" text-7xl sm:text-8xl sm:pb-8">200+</div>
              <div className=" text-xl sm:text-2xl text-white/60">
                Zrealizowanych projektów
              </div>
              <div className="text-xl sm:text-2xl text-white/60">
                W Polsce i zagranicą
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8">10+</div>
              <div className="text-xl sm:text-2xl text-white/60">
                Lat doświadczenia w <br />
                branży.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8">14</div>
              <div className="text-xl sm:text-2xl text-white/60">
                Dni od rozpoczęcia
                <br />
                projektu do publikacji.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white sm:justify-center sm:items-center sm:p-24">
            <div className="">
              <div className="text-7xl sm:text-8xl sm:pb-8">150+</div>
              <div className="text-xl sm:text-2xl text-white/60">
                Zadowolonych klientów z <br />
                różnych branż.
              </div>
            </div>
          </div>
        </div>
        <NormalLine />
      </div>
    </section>
  );
};

export default Grid;
