import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/SEO.png";

function SEO() {
  return (
    <div className=" w-[40%]  bg-gradient-to-b from-black to-white rounded-[20px] justify-start items-start inline-flex text-white">
      <div className="w-[90%] flex flex-col">
        <h2 className="px-8 pt-8 pb-2">SEO</h2>
        <p className="px-8 pb-4">
          Pomożemy Twojej stronie zaistnieć w wynikach wyszukiwania Google i
          innych wyszukiwarek. Optymalizujemy treści, strukturę strony oraz
          techniczne aspekty witryny, aby poprawić jej widoczność i przyciągnąć
          organiczny ruch.
        </p>
        <img src={Image}></img>
        <ArrowButtonComp />
      </div>
    </div>
  );
}

export default SEO;
