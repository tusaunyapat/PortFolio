import React from "react";

function Related() {
  const data = [
    {
      id: 1,
      topic: "Data Structure & Algorithm",
      icon: "src/assets/datastructure.png",
    },
    {
      id: 2,
      topic: "Digital Logic Computer",
      icon: "src/assets/diglo.png",
    },
    {
      id: 3,
      topic: "Object Oriented Programming",
      icon: "src/assets/oop.png",
    },
  ];
  return (
    <div className="flex justify-center  bg-whtie dark:bg-blue mt-50 py-32">
      <div className="flex flex-col justify-center items-center py-6 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-2xl py-4">Related Field</div>

        <div className="flex flex-wrap flex-col sm:flex-row py-6 w-full justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-4 justify-center items-center mx-5 border-2 rounded-2xl my-4 w-6/12 sm:w-3/12 h-56 "
              id={item.id}
            >
              <div className="w-24 py-6">
                <img src={item.icon} alt={item.topic} />
              </div>
              <div className="text-md py-4 text-center">{item.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Related;
