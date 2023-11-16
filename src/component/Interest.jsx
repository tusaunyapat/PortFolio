import React from "react";

function Interest() {
  const data = [
    {
      id: 1,
      topic: "Database",
      icon: "src/assets/database.png",
    },
    {
      id: 2,
      topic: "Internet Server",
      icon: "src/assets/server.png",
    },
    {
      id: 3,
      topic: "Machine Learing",
      icon: "src/assets/ml.png",
    },
  ];

  return (
    <div className="flex justify-center  bg-white dark:bg-navy mt-50 py-2">
      <div className="flex flex-col justify-center items-center py-6 h-full sm:h-96  text-navy dark:text-white w-full lg:w-10/12">
        <div className="text-2xl py-4">Now, I'm interested in ...</div>

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
