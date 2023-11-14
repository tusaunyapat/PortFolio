import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSun, BsCodeSlash } from "react-icons/bs";
import { MdOutlineComputer, MdMenu, MdClose } from "react-icons/md";

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
    <nav className=" bg-lightgray dark:bg-navy py-6 sm:py-0 sm:flex sm:items-center sm:justify-center flex flex-row justify-between transition-all duration-500 ease-in-out">
      <div className="text-md text-navy dark:text-white lg:px-12 mx-8">
        <BsCodeSlash />
      </div>

      <ul
        className={` bg-lightgray dark:bg-navy  sm:flex sm:flex-row z-[999] sm:z-auto sm:static absolute sm:w-auto w-full sm:my-4 my-8 ${
          mobileMenu ? "block" : "hidden"
        } transition-all duration-500 ease-in-out`}
      >
        <li
          className={`box-border mx-8 mt-6 my-6 md:my-0 px-4 py-2 border-b-2 border-white dark:border-black hover:border-navy dark:hover:border-white transition-all duration-500 ease-in-out hover:duration-100`}
          onClick={closeMobileMenu}
        >
          <a href="#" className="text-sm text-navy dark:text-white ">
            HOME
          </a>
        </li>
        <li
          className={`box-border mx-8 mt-6 my-6 md:my-0 px-4 py-2 border-b-2 border-white dark:border-black hover:border-navy dark:hover:border-white transition-all duration-500 ease-in-out hover:duration-100`}
          onClick={closeMobileMenu}
        >
          <a href="#" className="text-sm text-navy dark:text-white ">
            EXPERIENCE
          </a>
        </li>
        <li
          className={`box-border mx-8 mt-6 my-6 md:my-0 px-4 py-2 border-b-2 border-white dark:border-black hover:border-navy dark:hover:border-white transition-all duration-500 ease-in-out hover:duration-100`}
          onClick={closeMobileMenu}
        >
          <a href="#" className="text-sm text-navy dark:text-white ">
            CONTACT
          </a>
        </li>
      </ul>
      <button
        className="mx-8 text-md text-navy md:flex dark:text-white items-center hidden"
        onClick={handleClick}
      >
        {theme === "light" ? <BsSun /> : <BsFillMoonStarsFill />}
      </button>

      <div className="flex md:hidden">
        <button
          className="mx-4 text-md text-navy dark:text-white items-center"
          onClick={handleClick}
        >
          {theme === "light" ? <BsSun /> : <BsFillMoonStarsFill />}
        </button>
        <button
          className="text-lg mr-8 text-md text-navy dark:text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenu ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
