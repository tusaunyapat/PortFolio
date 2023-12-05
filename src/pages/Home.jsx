import React from "react";
import Banner from "../component/Banner";
import Project from "../component/Project";
import Interest from "../component/Interest";
import Skills from "../component/Skills";

function Home() {
  return (
    <div className="flex flex-col ">
      <Banner />
      <Project />
      <Interest />
      <Skills />
    </div>
  );
}

export default Home;
