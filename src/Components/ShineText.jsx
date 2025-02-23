import React, { useState } from "react";
import Image from "../assets/images/cuttedlogo.png";

const ShineText = () => {
  return (
    <div className="bg-black h-screen w-full items-center flex justify-center">
      <img src={Image} className="h-1/4"></img>
      <h2 className="text-6xl text-center text-white pl-12">
        We make you shine Online
      </h2>
    </div>
  );
};
export default ShineText;
