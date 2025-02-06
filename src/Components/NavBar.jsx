import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funkcja do przełączania stanu menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <nav className=" bg-black text-stone-300 flex justify-between">
        <a href="/">
          <p className="py-3 pl-3">B</p>
        </a>
        <div classname="sm:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block mx-auto">
          <ul class="flex flex-center space-x-3 p-3">
            <li>
              <a href="/">
                <p>sigma</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>sigma</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>sigma</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
