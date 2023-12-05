import React from "react";
import InterestJson from "/src/data/Interest.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodePic from "/src/assets/code.png";

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
        staggerChildren: 0.3, // Adjust the stagger value as needed
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: "2s" },
  };
  const topicVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="pt-10 pb-32  w-full items-center py-32 bg-white dark:bg-navy text-navy dark:text-white"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="text-lg sm:text-xl"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={topicVariant}
          transition={{ duration: "0.8" }}
        >
          <b>Interest</b>
        </motion.div>
        <motion.div
          className="text-sm sm:text-md pb-10 text-center w-10/12"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={topicVariant}
          transition={{ duration: "0.8" }}
        >
          <p>
            These are what I'm interested in within this field, apart from web
            development.
          </p>
        </motion.div>

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
              className="flex w-4/12 lg:w-3/12 flex-col items-center m-4 p-4 rounded-lg shadow-lg dark:shadow-lightblue"
            >
              <img src={CodePic} alt="pic" className="w-4/12"></img>
              <p className="text-xs sm:text-md text-center py-1">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Interest;
