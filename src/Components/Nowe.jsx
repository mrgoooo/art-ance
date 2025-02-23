import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NormalLine from "./NormalLine";

const Nowe = () => {
  return (
    <footer className="relative bg-black text-white py-16  w-full flex justify-center">
      <div className="w-3/4">
        {/* Gradient */}
        <div className="max-w-6xl mx-auto relative ">
          {/* Nagłówek */}
          <div className="absolute -top-5 -left-5 min-w-[300px]  w-[40%] h-[40%] bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <div className="mb-10  pb-20 flex justify-between flex-col md:flex-row ">
            <div className="md:w-1/3 ">
              <h2 className="text-6xl font-bold">Dołącz do nas już teraz.</h2>
            </div>
            <div>
              <p className="text-4xl pt-4 md:pt-0">#newsletter</p>
            </div>
          </div>

          {/* Formularz */}
          <div className="flex flex-col justify-between md:flex-row pb-14 ">
            <p className=" text-2xl text-gray-400 mb-6">Stay connected.</p>
            <div className="w-[65%] flex flex-col  border-gray-700 pb-6">
              <div className="flex-1 space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none pb-2 text-lg"
                />
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none pb-2 text-lg"
                  />
                  {/* Strzałka */}
                  <button className="absolute right-2 top-2 text-gray-300 hover:text-white">
                    <div data-svg-wrapper>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.5712 9.20791L8.08587 0.722656L6.67167 2.13687L12.7427 8.20791H0.0147705V10.2079H12.7428L6.67167 16.279L8.08587 17.6932L16.5712 9.20791Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </footer>
  );
};
export default Nowe;
