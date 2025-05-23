import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import Logo from "../assets/images/logodużeczarnecutted.png";

function Friends() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dodaj stan do animacji kropek
  const [dots, setDots] = useState("");
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setDots((prev) => (prev.length < 3 ? prev + "." : prev));
      if (count === 3) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-white text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8 h-[500px] lg:h-[700px] xl:h-[800px] justify-center">
          <div className="flex items-end">
            <img
              src={Logo}
              className=" w-[180px] sm:w-[200px] lg:w-[400px] xl:pb-3 "
            ></img>
            <h2 className="text-[#060017] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium font-['Inter'] xl:leading-[108.75px] ">
              Friends
            </h2>
          </div>

          <h2 className="text-[#060017]  text-2xl sm:text-3xl lg:text-4xl font-normal font-['Inter'] xl:leading-[108.75px] pt-4">
            Coming soon{dots}
          </h2>
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default Friends;
