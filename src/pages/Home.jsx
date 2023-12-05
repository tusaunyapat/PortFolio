import React from "react";
import Banner from "../component/Banner";
import Project from "../component/Project";
import Interest from "../component/Interest";

function Home() {
  return (
    <div className="flex flex-col ">
      <Banner />
      <Project />
      <Interest />
    </div>
  );
}

export default Home;
