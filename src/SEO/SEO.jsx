import { useEffect } from "react";
import SEOHero from "./SEOHero";
import Navbar from "../Components/Navbar";
import LastFooter from "../Components/LastFooter";
import SEOOffer from "./SEOOffer";
import SEONapis from "./SEONapis";
import SEOPytania from "./SEOPytania";
import SEOWhy from "./SEOWhy";
import SEOGoogleLogo from "./SEOGoogleLogo";

function SEO() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className=" relative flex flex-col items-center justify-center w-full">
        <div className="bg-gradient-to-b from-black to-[#e8e8e8] text-black w-[90%] animate-fade-in flex  flex-col rounded-2xl items-center mb-8">
          <SEOHero />
          <SEOWhy />
          <SEOGoogleLogo />
          <SEONapis />
          <SEOOffer />
          <SEOPytania />
        </div>
      </main>
      <div className="flex justify-center">
        <LastFooter />
      </div>
    </div>
  );
}
export default SEO;
