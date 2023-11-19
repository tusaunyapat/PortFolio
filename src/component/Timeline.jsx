import React from "react";

const expTimeline = [
  {
    time: "October 2018",
    topic: "Entering the programming industry",
    description:
      "I joined POSN Computer, studying about basic of programming using C language.",
  },
  {
    time: "May 2019",
    topic: "First time creating Website",
    description:
      "It started when studying computer in middle school, studying about HTML",
  },
  {
    time: "March 2020",
    topic: "Data structure and Algorithm",
    description:
      "I joined the second camp of POSN computer, at there, studyting about data structure and algorithm.",
  },
  {
    time: "February 2021",
    topic: "Web development",
    description:
      "During the COVID-19 pandemic, I was interest in web developmeny. I started self-learning about web development using HTML CSS and Javascript",
  },
  {
    time: "May 2021",
    topic: "First time using Framework",
    description: "learning nodeJS and react with bootstrap framework",
  },
  {
    time: "October 2023",
    topic: "Improve",
    description:
      "I create new portfolio website (this website) with viteJS and tailwindCSS.",
  },
];

function Timeline() {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-2xl relative my-6 text-navy dark:text-white ">
        <b>EXPERIENCE</b>
      </div>
      <div className="relative border-s border-gray dark:border-gray w-10/12 px-2">
        {expTimeline.map((item) => (
          <div key={item.time} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border bg-gray border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal bleading-none text-gray dark:text-gray">
              {item.time}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.topic}
            </h3>
            <p className="mb-4 text-base font-normal text-navy dark:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
