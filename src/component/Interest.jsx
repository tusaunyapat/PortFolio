import React from "react";
import InterestJson from "/src/data/Interest.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Interest() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust the stagger value as needed
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="w-full items-center py-10 bg-white dark:bg-navy text-navy dark:text-white"
    >
      <div className="flex flex-col items-center">
        <div className="text-lg sm:text-xl">
          <b>Interest</b>
        </div>

        <div className="text-sm sm:text-md pb-10 text-center">
          <p>
            These are my projects about web development and other related field
            projects.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-row flex-wrap w-10/12 justify-center"
        >
          {InterestJson.map((item, i) => (
            <motion.div
              custom={i}
              variants={itemVariants}
              key={i}
              className="flex w-5/12 lg:w-3/12 flex-col items-center m-4 p-4 rounded-lg shadow-lg dark:shadow-lightblue"
            >
              <img src="src\assets\code.png" alt="pic" className="w-4/12"></img>
              <p className="text-xs sm:text-md text-center py-1">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Interest;
