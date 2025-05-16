import ArrowButtonComp from "./ArrowButtonComp";
import Image from "../assets/images/4.png";

function SEO() {
  return (
    <div className=" w-full lg:w-[40%]  bg-gradient-to-b from-black to-slate-200 rounded-[20px] justify-start items-start inline-flex text-white lg:ml-3 lg:mt-8 mb-8">
      <div className="w-[90%] flex flex-col h-full ">
        <h2 className=" text-4xl px-8 pt-8 pb-2">SEO</h2>
        <p className="hidden md:block text-white/60 lg:text-base pl-8 pb-4">
          Pomożemy Twojej stronie zaistnieć w wynikach wyszukiwania Google i
          innych wyszukiwarek. Optymalizujemy treści, strukturę strony oraz{" "}
          techniczne aspekty witryny, aby poprawić jej widoczność i przyciągnąć
          organiczny ruch.
        </p>
        <p className=" md:hidden text-white/60 text-sm sm:text-[20px] leading-7 pl-8 pb-4">
          Pomożemy Twojej stronie zaistnieć w <br /> wynikach wyszukiwania
          Google i <br /> innych wyszukiwarek. Optymalizujemy <br />
          treści, strukturę strony oraz techniczne <br />
          aspekty witryny, aby poprawić jej <br /> widoczność i przyciągnąć
          organiczny ruch.
        </p>
        <div className="relative hidden lg:flex justify-end  w-full">
          <img src={Image} className="mr-8 w-[80%]"></img>
        </div>

        <div className="  pb-8  pl-6 md:pl-12 flex justify-start items-end ">
          <ArrowButtonComp
            to="/oferta/SEO"
            textColor="text-black"
            arrowColor="#060117"
          />
        </div>
      </div>
    </div>
  );
}

export default SEO;
