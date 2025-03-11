import Image from "../assets/images/WebDev.png";
function WDHero() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="">
            "Sprawiamy, że inne platformy wyglądają jak z lat 90"
          </h2>
          <p>-Zespół kreatywny ARTANCE.</p>
          <button className="border rounded-full">
            Zobacz nasze Realizacje
          </button>
        </div>
        <div className="">
          <img src={Image}></img>
        </div>
      </div>
    </div>
  );
}

export default WDHero;
