import Image from "../assets/images/computer.png";

function UXComputer() {
  return (
    <div className=" w-[95%] flex flex-col rounded-2xl justify-center items-center bg-[#facea4] mt-10 mb-10">
      <img className="w-[1120px] pt-8" src={Image}></img>
      <div className="w-full text-4xl md:text-[115px] md:leading-[130px]  pl-4 py-10 ">
        <h2>
          To jak? <br /> Który Design wybierasz?
        </h2>
      </div>
    </div>
  );
}

export default UXComputer;
