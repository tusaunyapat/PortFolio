import React from "react";
import Html from "/src/assets/html.png";
import python from "/src/assets/python.png";
import java from "/src/assets/java.png";
import js from "/src/assets/js.png";
import tailwind from "/src/assets/tailwind.png";
import react from "/src/assets/react.png";
import vite from "/src/assets/vite.png";
import css from "/src/assets/css.png";
import Cplus from "/src/assets/cplus.png";

function Program() {
  const data = [
    {
      id: 1,
      topic: "C / C++",
      icon: Cplus,
      repo: "https://github.com/tusaunyapat/Intro-Data-Struc",
      hasproject: true,
    },
    {
      id: 2,
      topic: "Python",
      icon: python,
      repo: "",
      hasproject: true,
    },
    {
      id: 3,
      topic: "HTML",
      icon: Html,
      repo: "",
      hasproject: true,
    },
    {
      id: 4,
      topic: "CSS",
      icon: css,
      repo: "",
      hasproject: true,
    },
    {
      id: 5,
      topic: "Javascript",
      icon: js,
      repo: "",
      hasproject: true,
    },
    {
      id: 6,
      topic: "Java",
      icon: java,
      repo: "https://github.com/tusaunyapat/ProgMeth",
      hasproject: true,
    },
    {
      id: 7,
      topic: "React",
      icon: react,
      repo: "",
    },
    {
      id: 8,
      topic: "Vite",
      icon: vite,
      repo: "",
      hasproject: true,
    },
    {
      id: 9,
      topic: "TailwindCSS",
      icon: tailwind,
      repo: "",
    },
  ];
  return (
    <div className="flex justify-center  bg-white dark:bg-navy mt-50 py-72">
      <div className="flex flex-col justify-center items-center py-6 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-2xl py-4">
          Programming Language, Framework, Tools
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row py-2 w-full justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-4 py-4 justify-center items-center mx-5 border-0 bg-lightgray dark:bg-blue  rounded-2xl my-4 w-6/12 sm:w-3/12 h-56 "
              id={item.id}
            >
              <div className="w-16 py-4">
                <img src={item.icon} alt={item.topic} />
              </div>
              <div className="text-md py-3 text-center">{item.topic}</div>
              {item.hasproject ? (
                <button
                  className="border-0 px-6 py-1 pb-2 rounded-xl hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy bg-gray dark:bg-navy
                "
                >
                  <a href={item.repo} className="text-xs" target="_blank">
                    repository
                  </a>
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
