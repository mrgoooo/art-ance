import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/SEO.png";

function SEO() {
  return (
    <div className="relative  w-[40%]  bg-gradient-to-b from-black to-slate-200 rounded-[20px] justify-start items-start inline-flex text-white ml-3 mt-8 mb-8">
      <div className="w-[90%] flex flex-col h-full ">
        <h2 className=" text-4xl px-8 pt-8 pb-2">SEO</h2>
        <p className=" text-white/60 px-8 pb-4">
          Pomożemy Twojej stronie zaistnieć w wynikach <br /> wyszukiwania
          Google i innych wyszukiwarek. <br /> Optymalizujemy treści, strukturę
          strony oraz <br />
          techniczne aspekty witryny, aby poprawić jej <br /> widoczność i
          przyciągnąć organiczny ruch.
        </p>

        <img
          src={Image}
          className="absolute h-[350px] w-[350px] left-16
           bottom-16"
        ></img>

        <div className=" h-full pb-8  pl-12 flex justify-start items-end ">
          <ArrowButtonComp textColor="text-black" arrowColor="#060117" />
        </div>
      </div>
    </div>
  );
}

export default SEO;
