import RECard from "./RECard";

function RETenis() {
  return (
    <div className="flex flex-col w-[90%] h-full pb-8">
      <div className="flex flex-col lg:flex-row  w-full">
        <RECard />
        <div className="flex w-full lg:w-1/2 flex-col justify-end h-[500px] lg:h-[600px]">
          <section className="max-w-2xl mx-auto p-6">
            {/* Nagłówek */}
            <h1 className="text-5xl font-bold leading-tight text-black">
              Twoja marka, <br /> Twoje zasady.
            </h1>
            {/* Opis */}
            <p className="text-lg text-gray-700 mt-4">
              Najlepsi profesjonaliści wybierają nowoczesne strony.
            </p>
            <p className="text-md text-gray-500 mt-2">
              Trenerzy personalni, artyści i eksperci z różnych branż rezygnują
              z przestarzałych rozwiązań na rzecz stron, które budują ich markę
              osobistą i robią wrażenie na odbiorcach.
            </p>

            {/* Statystyka */}
            <div className="mt-6 flex  items-start gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <path
                    id="Vector"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.9982 10H9.99819V13.3333H24.3086L9.30859 28.3334L11.6656 30.6904L26.6649 15.6912V30H29.9982V10Z"
                    fill="#a00040"
                  />
                </g>
              </svg>
              <p className="text-xl font-semibold text-black">
                72% większe zaagażowanie,
                <br />
                <span className="text-gray-500 text-sm">
                  więcej kliknięć, więcej klientów, większy wpływ.
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default RETenis;
