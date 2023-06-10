import { motion } from "framer-motion";
import { styles } from '../styles'
import { projects } from "../Constants/constants";
import { Tilt } from "react-tilt";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        // className={`${styles.padding} max-w-7xl mx-auto relative z-0 w-[500%]`}
        // style={{ marginLeft: "-20%" , backgroundColor: "#0a192f", paddingLeft:0}}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  };

const ProjectCard = ({ index, name, description }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 40,
          scale: 1,
          speed: 450
        }}
      >
        <div className="mt-0 mb-10">
          <div className="text-white font-bold font text-[20px]">{name}</div>
          {description.map((item, index) => {
            return (
              <p key={index} className="mt-2 text-white text-[14px] leading-[18px]">{index + 1}. {item}</p>
            )
          })}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <div className="text-grayscale-50 p-6 noselect">
        <div className="w-full md:w-[100%] h-full flex flex-col items-center mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}

        </div>
        <p>Find my Resume
          <a href="https://www.linkedin.com/in/dibi07/overlay/1635525988056/single-media-viewer/?profileId=ACoAAC1n918Bh0g6x_N1ypvM2WKcOcPEXBl71OM"
            target="_blank"
            className="text-primary-400 hover:text-grayscale-100 transition-all duration-75 flash"
          > here</a>
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");