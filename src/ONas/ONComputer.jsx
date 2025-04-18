import React from "react";
import RevealOnScroll from "../animations/RevealAnimation";

import Computer from "../assets/images/ComputerOnas.png";

function ONComputer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] flex flex-col items-center">
        <RevealOnScroll>
          <img className=" pl-4" src={Computer}></img>
        </RevealOnScroll>
      </div>
    </div>
  );
}
export default ONComputer;
