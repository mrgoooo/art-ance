import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ONKontakt({ bgColor = "bg-black" }) {
  return (
    <footer
      className={`relative ${bgColor} text-white py-16  w-full flex justify-center  `}
    >
      <div className="w-3/4">
        {/* Gradient */}
        <div className="max-w-6xl mx-auto relative ">
          {/* Nagłówek */}
          <div className="absolute -top-5 -left-5 min-w-[300px]  w-[40%] h-[40%] bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <div className="mb-10  pb-20 flex justify-between flex-col md:flex-row ">
            <div className="md:w-1/3 ">
              <h2 className="text-6xl font-bold text-black">
                Dołącz do nas już teraz.
              </h2>
            </div>
            <div>
              <p className="text-4xl pt-4 md:pt-0 text-black">#newsletter</p>
            </div>
          </div>

          {/* Formularz */}
          <div className="flex flex-col justify-between md:flex-row pb-14 ">
            <p className=" text-2xl text-black mb-6">Stay connected.</p>
            <div className="w-[65%] flex flex-col  border-gray-700 pb-6">
              <div className="flex-1 space-y-12">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-transparent border-b-2  border-black  focus:border-black caret-black focus:outline-none pb-2  text-lg"
                />
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b-2 border-black focus:border-black  caret-black focus:outline-none pb-2 text-lg"
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
                          fill="black"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default ONKontakt;
