import React from "react";
import pic from "srcassetsshiba.jpg";

function Banner() {
  return (
    <div className=" dark:bg-blue text-xl dark:text-white flex bg-white justify-center">
      <div className="bg-white dark:bg-blue w-full md:w-10/12 xl:w-8/12 flex flex-col sm:flex-row justify-between px-20 items-center py-6 sm:py-24 md:py-36">
        <div className="w-32 my-10 sm:w-64 md:w-108 lg:w-5/12">
          <img src={pic} alt="SHIBA"></img>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-right items-center sm:items-end  text-navy dark:text-white  md:py-10">
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl py-2 ">
            <p>HELLO</p>
          </div>
          <div className="py-2 text-sm sm:text-md md:text-md lg:text-lg w-full sm:w-10/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              deserunt ex unde temporibus dolorum qui accusantium quidem
              corporis illo est.
            </p>
          </div>
          <div className="w-48 flex flex-row justify center items-center sm:justify-end">
            <div className="bg-white dark:bg-navy text-navy dark:text-white text-xs py-2 px-3 w-24 box-border border-2 rounded-lg hover:bg-navy hover:text-white">
              <button>RESUME</button>
            </div>
            <div className="">
              <ul className="flex flxe-row justify-evenly sm:justify-end w-full my-2">
                <li className="w-6 sm:w-8 ml-4">
                  <img src="src\assets\github.png" alt="github"></img>
                </li>
                <li className="w-6 sm:w-8 ml-4">
                  <img src="src\assets\github.png" alt="github"></img>
                </li>
                <li className="w-6 sm:w-8 ml-4">
                  <img src="src\assets\github.png" alt="github"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
