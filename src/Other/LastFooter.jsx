import NormalLine from "../Components/NormalLine";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function LastFooter() {
  return (
    <div className="w-3/4">
      <NormalLine></NormalLine>

      {/* Nawigacja i kontakt */}
      <div className="flex flex-wrap justify-between mt-10 text-gray-400">
        <div className="w-1/2 sm:w-auto pb-4">
          <h4 className="text-white font-semibold pb-4">Oferta</h4>
          <p>Produkty</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4">
          <h4 className="text-white font-semibold pb-4">Projekty</h4>
          <p>Realizacje</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4">
          <h4 className="text-white font-semibold pb-4">Firma</h4>
          <p className="pb-2">O nas</p>
          <p>Kontakt</p>
        </div>
        <div className="w-1/2 sm:w-auto pb-4">
          <h4 className="text-white font-semibold pb-4">Portal</h4>
          <p className="pb-2">ArtanceFriends</p>
          <p>Login</p>
        </div>
      </div>

      <address className="flex items-center justify-between mt-10">
        {/* Kontakt */}
        <div className=" text-gray-400">
          <p>
            Email: <span className="text-white">artance@artance.pl</span>
          </p>
          <p>
            Phone: <span className="text-white">+48 000 000 000</span>
          </p>
        </div>

        {/* Social media */}
        <div className="flex gap-4  text-white text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </address>

      {/* Polityka prywatności */}
      <div className="flex justify-end gap-4 text-gray-500 text-sm mt-6">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Legal</p>
      </div>
    </div>
  );
}
export default LastFooter;
