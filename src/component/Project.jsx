import React from "react";
import ProjectJson from "/src/data/project.json";

function Project() {
  return (
    <div className="py-10 w-full flex justify-center bg-white dark:bg-navy text-navy dark:text-white">
      <div className="flex flex-col items-center pb-4 w-11/12">
        <div className="text-lg sm:text-xl">
          <b>Project</b>
        </div>
        <div className="text-sm sm:text-md pb-10 text-center">
          <p>
            These are my projects about web development and other related field
            projects.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center overflow-hidden hover:overflow-y-auto sm:hover:overflow-x-auto w-10/12 snap-x h-56 sm:h-auto">
          {ProjectJson.map((item) => (
            <div className="mb-4 flex-shrink-0 mx-4 bg-white w-9/12 sm:w-4/12 rounded-xl pt-2 shadow-lg snap-center dark:shadow-lightblue">
              <img
                src="src\assets\file.png"
                alt="pic"
                className="w-5/12 flex items-center"
              ></img>
              <div className="flex flex-col px-3 py-2 bg-whiteBlue dark:bg-lightnavy rounded-b-xl">
                <b className="pb-1">{item.name}</b>
                <div className="flex flex-row">
                  {item.tool.map((lang) => (
                    <div className="text-[0.5rem] xl:text-[0.8rem] px-2 border-2 border-navy mr-1 rounded-[0.3rem]">
                      {lang}
                    </div>
                  ))}
                </div>
                <p className="text-[0.55rem] py-1 xl:text-[0.8rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
