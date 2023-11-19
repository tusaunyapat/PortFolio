import React from "react";
import image from "/src/assets/image.png";
import { PiCursorClickBold } from "react-icons/pi";

function Project() {
  const data = [
    {
      name: "Clone Website",
      image: image,
      repo: "https://github.com/2110215-ProgMeth/2110215--zipdrop",
      language: ["React", "No framework"],
      hasproject: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo dolorum architecto sequi aspernatur cumque placeat magnam vel exercitationem assumenda.",
    },
    {
      name: "Coffee Man",
      image: image,
      repo: "https://github.com/2110215-ProgMeth/2110215--zipdrop",
      language: ["Java", "JavaFX"],
      hasproject: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo dolorum architecto sequi aspernatur cumque placeat magnam vel exercitationem assumenda.",
    },
    {
      name: "Coffee Man",
      image: image,
      repo: "https://github.com/2110215-ProgMeth/2110215--zipdrop",
      language: ["Java", "JavaFX"],
      hasproject: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo dolorum architecto sequi aspernatur cumque placeat magnam vel exercitationem assumenda.",
    },
  ];

  return (
    <div className="flex justify-center bg-white dark:bg-navy py-24 w-auto">
      <div className="flex flex-col justify-center items-center h-full w-full text-navy dark:text-white">
        <div className="text-lg lg:text-2xl mb-4">
          <b>Project</b>
        </div>

        <div className="overflow-y-scroll flex flex-wrap w-10/12 justify-center items-center mx-4 sm:mx-8 py-0 h-72 ">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex bg-gray flex-col py-4 items-start mx-5 border-0 bg-gray-300 dark:bg-blue rounded-2xl my-4 w-5/6 sm:w-9/12"
            >
              <div className="w-full sm:w-6/12 mx-6">
                <img className="w-16" src={item.image} alt={item.name} />
              </div>
              <div className="text-lg py-2 text-left w-full px-6 flex items-center">
                <b>{item.name}</b>
                <a href={item.repo} className="pl-4">
                  <PiCursorClickBold />
                </a>
              </div>
              <div className="flex flex-row flex-wrap w-full pl-4">
                {item.language.map((lang) => (
                  <div className="text-xs text-darkgray py-1 border-2 rounded-md ml-2 mr-1 px-1 my-2">
                    {lang}
                  </div>
                ))}
              </div>
              <div className="text-xs px-6 pb-4 text-left">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
