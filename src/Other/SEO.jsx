import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/SEO.png";

function SEO() {
  return (
    <div className=" w-[40%]  bg-gradient-to-b from-black to-slate-200 rounded-[20px] justify-start items-start inline-flex text-white ml-3 mt-8 mb-8">
      <div className="w-[90%] flex flex-col">
        <h2 className="px-8 pt-8 pb-2">SEO</h2>
        <p className="px-8 pb-4">
          Pomożemy Twojej stronie zaistnieć w wynikach wyszukiwania Google i
          innych wyszukiwarek. Optymalizujemy treści, strukturę strony oraz
          techniczne aspekty witryny, aby poprawić jej widoczność i przyciągnąć
          organiczny ruch.
        </p>
        <div className="flex justify-center">
          <img src={Image} className="h-[300px] w-[300px]"></img>
        </div>
        <div className="pb-8 pl-12 flex justify-start ">
          <ArrowButtonComp textColor="text-black" arrowColor="#060117" />
        </div>
      </div>
    </div>
  );
}

export default SEO;
