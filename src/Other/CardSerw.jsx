import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/serwerowanie.png";
function CardSerw() {
  return (
    <div className="w-1/2  relative bg-gradient-to-b from-[#2140b2] to-sky-100 rounded-[20px] mr-3">
      <div className="flex justify-between s">
        <div className="flex flex-col">
          <h2 className="pl-8 pt-8 text-3xl">Serwerowanie</h2>
          <p className="pl-8 text-lg">
            Usługi serwerowe, które gwarantują stabilność, bezpieczeństwo i
            szybkie działanie Twojej strony internetowej.
          </p>
          <div className="h-full flex flex-col  justify-end pb-8 pl-12">
            <ArrowButtonComp />
          </div>
        </div>
        <img src={Image} className="w-1/2"></img>
      </div>
    </div>
  );
}
export default CardSerw;
