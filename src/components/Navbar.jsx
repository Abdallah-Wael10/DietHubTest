import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full h-[100px] text-white shadow-sm flex items-center justify-between px-6 sm:px-10 lg:px-20 ${
        isMenuOpen ? "bg-dietBlack" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            alt="Diet Hub logo"
            className="w-28 sm:w-32 lg:w-36"
            src="/assets/Logo.svg" 
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden max-[900px]:hidden min-[901px]:flex items-center gap-8">
        <ul className="flex text-white items-center gap-10">
          <li>
            <a
              href="/about"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/#doctors"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium"
            >
              Our Doctors
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium"
            >
              Blogs
            </a>
          </li>
        </ul>

        <div className="w-[1px] h-8 bg-gray-300"></div>

        <a
          className="px-6 py-2.5 bg-[rgb(222,80,3)] hover:bg-[rgb(222,80,3)]/60 text-white rounded-lg font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
          href="/Landing"
        >
          Life-Changing Tales
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="max-[900px]:flex min-[901px]:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`max-[900px]:${
          isMenuOpen ? "flex" : "hidden"
        } min-[901px]:hidden absolute top-[100px] left-0 w-full bg-dietBlack  flex-col items-center py-6 space-y-4 transition-all duration-300 z-50`}
      >
        <ul className="flex flex-col text-white items-center gap-6">
          <li>
            <a
              href="/about"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/#doctors"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Doctors
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="hover:text-dietOrange transition-colors duration-300 ease-in-out font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
          </li>
        </ul>

        <a
          className="px-8 py-3 bg-[rgb(222,80,3)] hover:bg-[rgb(222,80,3)]/60 text-white rounded-lg font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
          href="/Landing"
          onClick={() => setIsMenuOpen(false)}
        >
          Life-Changing Tales
        </a>
      </div>
    </nav>
  );
}
