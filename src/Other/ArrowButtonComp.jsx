function ArrowButtonComp({
  onClick,
  textColor = "text-white/60",
  arrowColor = "#E8E8E8",
  text = "Dowiedz się więcej",
}) {
  return (
    <button
      className="w-[194.59px] h-[50px] flex justify-center items-center"
      onClick={onClick} // Funkcja aktywacji przekazana jako onClick
    >
      <div>
        <h2 className={`text-xl ${textColor}`}>{text}</h2>
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
            fill={arrowColor}
          />
        </svg>
      </div>
    </button>
  );
}

export default ArrowButtonComp;
