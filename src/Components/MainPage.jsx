import { useState } from "react";
import { Menu, X } from "lucide-react";
import GradientAnimation from "./Animation";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-black">
        <div className="text-2xl font-bold">ARTance</div>
        <div className="hidden sm:block mx-auto">
          <ul className="flex flex-center space-x-12 p-3">
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>Home</p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>Oferta</p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>Realizacja</p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>O Nas</p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>Kontakt</p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-white hover:text-neutral-500 transition duration-300"
              >
                <p>Portal</p>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={32} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center  ">
        <GradientAnimation />
      </main>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black duration-300 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block border-b border-gray-700 pb-2">
            NUMBERS BY ARTANCE
          </a>
          <a href="#" className="block border-b border-gray-700 pb-2">
            OFERTA
          </a>
          <a href="#" className="block border-b border-gray-700 pb-2">
            PROCES
          </a>
          <a href="#" className="block border-b border-gray-700 pb-2">
            OPINIE
          </a>
          <a href="#" className="block border-b border-gray-700 pb-2">
            DOŁĄCZ DO NAS
          </a>
        </nav>
        <button className="p-5" onClick={() => setIsSidebarOpen(false)}>
          HIDE &gt;
        </button>
      </div>
    </div>
  );
}
