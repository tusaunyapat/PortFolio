import React from "react";
import database from "/src/assets/database.png";
import server from "/src/assets/server.png";
import ml from "/src/assets/ml.png";

function Interest() {
  const data = [
    {
      id: 1,
      topic: "Database",
      icon: database,
    },
    {
      id: 2,
      topic: "Internet Server",
      icon: server,
    },
    {
      id: 3,
      topic: "Machine Learing",
      icon: ml,
    },
  ];

  return (
    <div className="flex justify-center  bg-white dark:bg-navy mt-50 py-8 my-0">
      <div className="flex flex-col justify-center items-center py-6 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-lg lg:text-2xl py-4">
          <b>My Interest</b>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row py-2 w-full justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-lightgray dark:bg-blue flex flex-col px-4 justify-center items-center mx-5 border-0 rounded-2xl my-4 w-6/12 sm:w-3/12 "
              id={item.id}
            >
              <div className="w-24 py-6">
                <img src={item.icon} alt={item.topic} />
              </div>
              <div className="text-md py-4">{item.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interest;
