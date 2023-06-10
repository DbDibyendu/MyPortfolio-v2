import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "I am Dibyendu";
  const welcome ="Hi there !"

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-500 text-7xl sm:text-8xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 2}}
          >
            {welcome.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-greyscale-50 bounce"
                  style={{ fontSize: "1em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.span>
          <m.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-100 flash"
                  style={{ fontSize: "0.7em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
