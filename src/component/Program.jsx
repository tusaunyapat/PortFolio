import React from "react";
import { SiCplusplus, SiVite, SiTailwindcss } from "react-icons/si";
import { FaPython, FaHtml5, FaCss3, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Program() {
  const data = [
    {
      id: 1,
      topic: "C / C++",
      icon: <SiCplusplus />,
      repo: "",
      hasproject: true,
    },
    {
      id: 2,
      topic: "Python",
      icon: <FaPython />,
      repo: "",
      hasproject: true,
    },
    {
      id: 3,
      topic: "HTML",
      icon: <FaHtml5 />,
      repo: "",
      hasproject: true,
    },
    {
      id: 4,
      topic: "CSS",
      icon: <FaCss3 />,
      repo: "",
      hasproject: true,
    },
    {
      id: 5,
      topic: "Javascript",
      icon: <IoLogoJavascript />,
      repo: "",
      hasproject: true,
    },
    {
      id: 6,
      topic: "Java",
      icon: <FaJava />,
      repo: "",
      hasproject: true,
    },
    {
      id: 7,
      topic: "React",
      icon: <FaReact />,
      repo: "",
    },
    {
      id: 8,
      topic: "Vite",
      icon: <SiVite />,
      repo: "",
      hasproject: true,
    },
    {
      id: 9,
      topic: "TailwindCSS",
      icon: <SiTailwindcss />,
      repo: "",
    },
  ];
  return (
    <div className="flex justify-center  bg-lightgray dark:bg-navy mt-50 py-96">
      <div className="flex flex-col justify-center items-center py-6 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-2xl py-4">
          Programming Language, Framework, Tools
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row py-6 w-full justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-4 py-4 justify-center items-center mx-5 border-2 rounded-2xl my-4 w-6/12 sm:w-3/12 h-56 "
              id={item.id}
            >
              <div className="text-navy dark:text-white py-4 text-6xl">
                <p>{item.icon}</p>
              </div>
              <div className="text-md py-3 text-center">{item.topic}</div>
              {item.hasproject ? (
                <button className="border-2 px-4 py-2 rounded-xl hover:bg-buttonhover">
                  click me
                </button>
              ) : (
                <p></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Program;
