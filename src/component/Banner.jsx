import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Hero from "/src/assets/meHello.png";

export default function Banner() {
  return (
    <div className="w-full flex justify-center bg-white dark:bg-navy text-navy dark:text-white">
      <div className="flex flex-col justify-center items-center sm:flex-row py-1 w-11/12 lg:w-10/12 h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="w-6/12 flex flex-col justify-between items-center"
        >
          <img className="w-10/12 pb-10  sm:pb-0" src={Hero} alt="person"></img>
        </motion.div>
        <div className="w-10/12 sm:w-6/12 flex flex-col items-center sm:items-end justify-center ">
          <b className="text-2xl sm:text-5xl">Hi, I’m TUS.</b>
          <p className="text-md text-center sm:text-right">
            I am a sophomore computer engineering student at Chulalongkorn
            University. Now, I’m learning about web-development
          </p>
          <ul className="flex flex-row py-4">
            <li className="px-2">
              <a href="#">
                <p className="text-3xl">
                  <IoLogoGithub />
                </p>
              </a>
            </li>
            <li className="px-2">
              <a href="#">
                <p className="text-3xl">
                  <BsFacebook />
                </p>
              </a>
            </li>
            <li className="pl-2">
              <a href="#">
                <p className="text-3xl">
                  <FaInstagram />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
