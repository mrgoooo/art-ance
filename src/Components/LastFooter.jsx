import NormalLine from "../HomePage/NormalLine";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function LastFooter() {
  return (
    <div className="w-3/4">
      <NormalLine></NormalLine>

      {/* Nawigacja i kontakt */}
      <div className="flex flex-wrap justify-between mt-10 text-gray-400">
        <div className="min-w-36 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <div className="w-1/2">
            <h4 className="text-white font-semibold pb-4">Oferta</h4>
            <Link to="/oferta">Produkty</Link>
          </div>
        </div>

        <div className="min-w-36 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <div className="w-1/2">
            <h4 className="text-white font-semibold pb-4">Projekty</h4>
            <Link to="/realizacje">Realizacje</Link>
          </div>
        </div>

        <div className="min-w-36 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <div className="w-1/2">
            <h4 className="text-white font-semibold pb-4">Firma</h4>
            <Link className="block pb-2 " to="/o-nas">
              O nas
            </Link>
            <Link className="block" to="/kontakt">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="min-w-36 sm:w-auto pb-4 flex flex-col items-center pt-8">
          <div className="w-1/2">
            <h4 className="text-white font-semibold pb-4">Portal</h4>
            <Link className="pb-2 block" to="/artance-friends">
              ArtanceFriends
            </Link>
          </div>
        </div>
      </div>

      <address className=" flex flex-col  lg:flex-row text-2xl items-center justify-between mt-10 not-italic">
        {/* Kontakt */}
        <div className="text-gray-400 text-xl md:text-2xl">
          <p>
            Email: <span className="text-white">info@artance.pl</span>
          </p>
          <p>
            Phone: <span className="text-white">+48 514 668 635</span>
          </p>
        </div>

        {/* Social media */}
        <div className="w-full lg:w-1/3 flex  text-white text-xl justify-between  pt-8">
          <a
            href="https://www.facebook.com/profile.php?id=61574673092422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/artance.cc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/artance-web-solutions/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
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
