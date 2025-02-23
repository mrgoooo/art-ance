import Line from "./Line";
const Grid = () => {
  return (
    <section className="flex justify-center lg:h-screen w-full bg-black flex-col items-center">
      <div className="w-3/4">
        <Line text="DANE" />
        <div className="grid grid-cols-1 lg:grid-cols-2  ">
          <div className="flex flex-col  text-white justify-center items-center p-24">
            <div className="">
              <div className="text-8xl pb-8">200+</div>
              <div className="text-2xl text-white/60">
                Zrealizowanych projektów
              </div>
              <div className="text-2xl text-white/60">W Polsce i zagranicą</div>
            </div>
          </div>

          <div className="flex flex-col text-white justify-center items-center p-24">
            <div className="">
              <div className="text-8xl pb-8">10+</div>
              <div className="text-2xl text-white/60">
                Lat doświadczenia w <br />
                branży.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white justify-center items-center p-24">
            <div className="">
              <div className="text-8xl pb-8">14</div>
              <div className="text-2xl text-white/60">
                Dni od rozpoczęcia
                <br />
                projektu do publikacji.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white justify-center items-center p-24">
            <div className="">
              <div className="text-8xl pb-8">150+</div>
              <div className="text-2xl text-white/60">
                Zadowolonych klientów z <br />
                różnych branż.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
