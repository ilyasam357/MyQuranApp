import { useContext, useState } from "react";
import { Theme } from "../../context/DarkMode";
import CardDark from "../template/TemplateDarkMode";
import { Link } from "react-router-dom";

function Navbar() {
  const { isDark, setIsDark } = useContext(Theme);
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };
  return (
    <>
      <CardDark>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:pt-4 md:pb-5 px-4 text-lg text-gray-700 bg-green-500 dark:bg-slate-900">
          <div>
            <Link to={"/"}>
              <span className="text-2xl cursor-pointer text-white ">
                {/* <img
                className="h-8 inline"
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt=""
              /> */}
                SANTRI26
              </span>
            </Link>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={
              isMenuHidden
                ? "hidden w-full md:flex md:items-center md:w-auto"
                : "w-full md:flex md:items-center md:w-auto"
            }
            id="menu"
          >
            <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
              <li className="mx-4 my-6 md:my-0">
                <Link to={"/"}>
                  <span className="text-xl text-white hover:text-slate-300 duration-500">
                    Home
                  </span>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl text-white hover:text-slate-300 duration-500"
                >
                  About
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl text-white hover:text-slate-300 duration-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <button onClick={() => setIsDark(!isDark)}>
                  {isDark ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </CardDark>
    </>
  );
}

export default Navbar;
