import React from "react";

function Banner() {
  return (
    <div className=" dark:bg-blue text-xl dark:text-white flex bg-navy justify-center">
      <div className="bg-gray w-full md:w-10/12 xl:w-8/12 flex flex-col sm:flex-row justify-between px-20 items-center py-6 sm:py-24 md:py-36">
        <div className="w-32 my-10 sm:w-64 md:w-108 lg:w-5/12">
          <img src="src\assets\shiba.jpg" alt="SHIBA"></img>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-right items-center sm:items-end  text-navy dark:text-white  md:py-10">
          <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl py-2 ">
            <p>HELLO</p>
          </div>
          <div className="py-2 text-sm sm:text-md md:text-md lg:text-lg w-full sm:w-10/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              deserunt ex unde temporibus dolorum qui accusantium quidem
              corporis illo est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
