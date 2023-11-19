import React from "react";
import Banner from "./Banner";
import Interest from "./Interest";
import Related from "./Related";
import Program from "./Program";
import Project from "./Project";

function Homepage() {
  return (
    <div className="flex flex-col transition-all duration-500 ease-in-out">
      <Banner />
      <Interest />
      <Related />
      <Program />
      <Project />
    </div>
  );
}

export default Homepage;
