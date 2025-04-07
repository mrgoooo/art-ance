import { Link } from "react-router-dom";
function WDPytania({ onClick }) {
  return (
    <div className="flex flex-col h-[300px] justify-end pb-16">
      <h2 className="text-white text-center text-4xl md:text-6xl">
        Masz pytania?
      </h2>
      <Link
        to="/kontakt"
        className="px-2 py-3 mt-10 flex justify-center items-center border-2 rounded-full"
        // Funkcja aktywacji przekazana jako onClick
      >
        <div>
          <h2 className="text-base md:text-xl text-white">Napisz do nas</h2>
        </div>
        <div className="pt-1 pl-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5713 12.2079L12.086 3.72266L10.6718 5.13687L16.7428 11.2079H4.01489V13.2079H16.7429L10.6718 19.279L12.086 20.6932L20.5713 12.2079Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
export default WDPytania;
