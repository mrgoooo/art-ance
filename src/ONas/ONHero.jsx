import React from "react";
import Logo from "../assets/images/logodużeczarne.png";
import ArrowButtonComp from "../Oferta/ArrowButtonComp";
import { Link } from "react-router-dom";

function ONHero() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] flex flex-col items-center">
        <img className="pt-24 pl-4" src={Logo}></img>
        <p className="text-xs pb-4 sm:pb-16 sm:text-2xl text-black/60 text-center">
          Tworzymy nowoczesne i funkcjonalne rozwiązania webowe.
        </p>
        <Link
          to="/kontakt"
          className="rounded-full border border-black/10 flex items-center mb-8"
        >
          <div className="text-[10px] sm:text-base py-3 pl-3 pr-2 text-center text-black  font-normal ">
            Napisz do nas
          </div>
          <div data-svg-wrapper className="pr-3">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1648 12.2079L12.6795 3.72266L11.2653 5.13687L17.3363 11.2079H4.6084V13.2079H17.3364L11.2653 19.279L12.6795 20.6932L21.1648 12.2079Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default ONHero;
