import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black h-16 flex flex-row justify-between px-20 items-center">
      <div className="text-2xl text-white">
        <p>AUNYAPAT</p>
      </div>
      <div className="flex">
        <ul className="flex flxe-row justify-end w-full my-2">
          <li className="text-4xl sm:w-8 ml-6 text-white">
            <a href="https://github.com/tusaunyapat">
              <FaGithub />
            </a>
          </li>
          <li className="text-4xl sm:w-8 ml-6 text-white">
            <a href="https://github.com/tusaunyapat">
              <FaFacebook />
            </a>
          </li>
          <li className="text-4xl sm:w-8 ml-6 text-white">
            <a href="https://github.com/tusaunyapat">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
