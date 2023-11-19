import React from "react";
import Personal from "./Personal";
import timeline from "./Timeline";
import Timeline from "./Timeline";

function Profile() {
  return (
    <div className="flex justify-center flex-wrap  bg-white dark:bg-navy mt-50  px-6 py-0 transition-all duration-500 ease-in-out">
      <Personal />
      <Timeline />
    </div>
  );
}

export default Profile;
