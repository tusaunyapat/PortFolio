import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black h-20 flex flex-row justify-between px-20 items-center">
      <div className="text-3xl text-white">
        <p>AUNYAPAT</p>
      </div>
      <div className="">
        <ul className="flex flxe-row justify-evenly sm:justify-end w-full my-2">
          <li className="text-4xl sm:w-8 ml-4 text-white">
            <a href="https://github.com/tusaunyapat">
              <FaGithub />
            </a>
          </li>
          <li className="text-4xl sm:w-8 ml-4 dark:text-white">
            <a href="https://www.facebook.com/profile.php?id=100002244265433">
              <FaFacebook />
            </a>
          </li>
          <li className="text-4xl sm:w-8 ml-4 dark:text-white">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
