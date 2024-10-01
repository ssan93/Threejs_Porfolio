import React, { useState, useEffect } from "react";

import { SectionWrapper } from "../hoc";
import { technologies, technologiesMobile } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const techs = isMobile ? technologiesMobile : technologies;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My main stacks</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {techs.map((technology) => (
          <div
            key={technology.name}
            className="w-20 h-20 p-2 rounded-lg bg-tertiary shadow-lg border-t-2 border-l-2 border-white border-opacity-20
              hover:shadow-xl hover:border-opacity-40 
              transition duration-300 ease-in-out"
          >
            <a href={technology.link} target="_blank" rel="noreferrer">
              <img
                src={technology.icon}
                alt={technology.name}
                className="object-contain w-full h-full"
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
