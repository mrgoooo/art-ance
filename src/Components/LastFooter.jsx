import NormalLine from "../HomePage/NormalLine";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function LastFooter() {
  return (
    <div className="w-3/4">
      <NormalLine></NormalLine>

      {/* Nawigacja i kontakt */}
      <div className="flex flex-wrap justify-between mt-10 text-gray-400 ">
        <div className="w-1/2 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <h4 className="text-white font-semibold pb-4">Oferta</h4>
          <p>Produkty</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <h4 className="text-white font-semibold pb-4">Projekty</h4>
          <p>Realizacje</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <h4 className="text-white font-semibold pb-4">Firma</h4>
          <p className="pb-2">O nas</p>
          <p>Kontakt</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <h4 className="text-white font-semibold pb-4">Portal</h4>
          <p className="pb-2">ArtanceFriends</p>
          <p>Login</p>
        </div>
      </div>

      <address className=" flex flex-col  lg:flex-row text-2xl items-center justify-between mt-10 not-italic">
        {/* Kontakt */}
        <div className="text-gray-400">
          <p>
            Email: <span className="text-white">artance@artance.pl</span>
          </p>
          <p>
            Phone: <span className="text-white">+48 000 000 000</span>
          </p>
        </div>

        {/* Social media */}
        <div className="w-full lg:w-1/3 flex  text-white text-xl justify-between  pt-8">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </address>

      {/* Polityka prywatności */}
      <div className="flex justify-end gap-4 pt-8 text-gray-500 text-sm mt-6">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Legal</p>
      </div>
    </div>
  );
}
export default LastFooter;
