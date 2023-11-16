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
    },
    {
      id: 2,
      topic: "Python",
      icon: python,
    },
    {
      id: 3,
      topic: "HTML",
      icon: Html,
    },
    {
      id: 4,
      topic: "CSS",
      icon: css,
    },
    {
      id: 5,
      topic: "Javascript",
      icon: js,
    },
    {
      id: 6,
      topic: "Java",
      icon: java,
    },
    {
      id: 7,
      topic: "React",
      icon: react,
    },
    {
      id: 8,
      topic: "Vite",
      icon: vite,
    },
    {
      id: 9,
      topic: "TailwindCSS",
      icon: tailwind,
    },
  ];
  return (
    <div className="flex justify-center flex-wrap  bg-white dark:bg-navy mt-50  px-6 py-0">
      <div className="flex flex-col justify-center items-center py-12 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-lg lg:text-2xl py-4 pb-10">
          <b>Programming Language, Framework and Tools</b>
        </div>

        <div className="overflow-x-auto overflow-hidden hover:overflow-x-auto flex flex-row  w-full justify-start items-center mx-20 py-8 ">
          {/* EACH LANGUAGE*/}
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-8 justify-center items-center  border-0 bg-lightgray dark:bg-blue  rounded-2xl mx-3 h-48 w-full sm:w-1/3" // Adjust the width here
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
