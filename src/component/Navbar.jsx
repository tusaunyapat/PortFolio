import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsJustify } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [theme, setTheme] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="z-[999] sticky bg-white dark:bg-navy flex flex-row justify-center text-navy dark:text-white items-start px-4 py-2 sm:py-0  w-full shadow-md shadow-lightnavy">
      <div className="flex flex-col sm:flex-row w-10/12">
        <div className="text-sm sm:text-md text-navy dark:text-white bg-white dark:bg-navy sm:py-4 ">
          <b>AUNYAPAT</b>
        </div>

        <ul
          className={` bg-lightgray dark:bg-navy  sm:flex sm:flex-row sm:justify-end sm:items-center  ${
            mobileMenu ? "block" : "hidden"
          }  my-2 sm:my-0 w-full`}
        >
          <li
            className={`box-border px-4 py-4 mx-4 `}
            onClick={closeMobileMenu}
          >
            <a to="/profile" href="#" className="text-sm sm:text-md ">
              <p className="border-b-2 border-lightnavy hover:border-navy  ">
                PROFILE
              </p>
            </a>
          </li>

          <li
            className={`box-border px-4 py-4 mx-4 `}
            onClick={closeMobileMenu}
          >
            <a to="/profile" href="#" className=" text-sm sm:text-md">
              <p className="border-b-2 border-lightnavy hover:border-navy  ">
                PROJECT
              </p>
            </a>
          </li>
          <button
            className=" hidden sm:flex text-xl text-navy"
            onClick={handleClick}
          >
            <p>
              {theme === "light" ? <WiDaySunny /> : <BsFillMoonStarsFill />}
            </p>
          </button>
        </ul>
      </div>

      <div className="flex sm:hidden text-sm sm:text-md">
        <button className="mx-1 my-1" onClick={handleClick}>
          <p>{theme === "light" ? <WiDaySunny /> : <BsFillMoonStarsFill />}</p>
        </button>
        <button className="" onClick={toggleMobileMenu}>
          <p> {mobileMenu ? <RxCross2 /> : <RxHamburgerMenu />}</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
