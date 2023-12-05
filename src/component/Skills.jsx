import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import picPython from "../assets/python.png";
import picCplusplus from "../assets/c-.png";
import picJava from "../assets/java.png";
import picHtml from "../assets/html-5.png";
import picCss from "../assets/css-3.png";
import picJs from "../assets/js.png";
import picReact from "../assets/react.png";
import picVite from "../assets/vite.png";
import picTailwind from "../assets/tailwind.png";
import picFramer from "../assets/framer.png";
import picGit from "../assets/git.png";

function Skills() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const topicVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const dataSkill = [
    { pic: picCplusplus },
    { pic: picPython },
    { pic: picJava },
    { pic: picHtml },
    { pic: picCss },
    { pic: picJs },
    { pic: picReact },
    { pic: picVite },
    { pic: picTailwind },
    { pic: picFramer },
    { pic: picGit },
  ];

  return (
    <div className="pt-10 pb-32 w-full flex flex-col items-center py-10 bg-white dark:bg-navy text-navy dark:text-white">
      <motion.div
        className="text-lg sm:text-xl"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={topicVariant}
        transition={{ duration: "0.8" }}
      >
        <b>Skills</b>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={topicVariant}
        transition={{ duration: "0.8" }}
        className="text-sm sm:text-md pb-2 text-center w-10/12"
      >
        <p>
          I am familiar in using these languages, frameworks, and libraries in
          my skill set.
        </p>
      </motion.div>

      <ul
        ref={ref}
        className="flex w-10/12 flex-row flex-wrap justify-center items-center mt-6 p-4"
      >
        {dataSkill.map((item, index) => (
          <li
            key={index}
            className="p-4 m-2 shadow-xl rounded-xl w-3/12 sm:w-2/12 lg:w-28"
          >
            <img src={item.pic} alt={`Skill ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
