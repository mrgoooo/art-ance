import Image from "../assets/images/WManComputer.png";
import { Link } from "react-router-dom";

function WManHero() {
  return (
    <div className="flex flex-col  w-[90%] max-h-[1400px] pb-8 z-10 bg-">
      <h2 className="w-1/2 md:w-auto  text-left text-5xl lg:text-8xl pt-10 pb-0 sm:pb-9">
        Web Managment
      </h2>
      <div className="flex justify-center w-full">
        <img src={Image} className="w-[700px]"></img>
      </div>

      <p className="hidden lg:block w-full justify-center sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[56px] xl:leading-[70px]">
        Nasze usługi Web Management to coś więcej niż tylko utrzymanie strony –
        <br />
        Zapewniamy bezpieczeństwo, stałą aktualizację i pełne wsparcie
        techniczne, abyś Ty mógł skupić się na rozwoju swojego biznesu.
      </p>
    </div>
  );
}
export default WManHero;
