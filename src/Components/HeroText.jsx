import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "Welcome to DB's Vault";
  const welcome = "Holaa !"
  const msg="Click / Hover over screen for satisfying experience :)"
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
            transition={{ duration: 2 }}
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
              
              return (
                <span
                  key={index}
                  className="text-primary-100 flash"
                  style={{ fontSize: "0.4em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
        <m.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          style={{ fontFamily: "Comic Sans MS" }}
          className="text-grayscale-50 p-6 text-center flex flex-col gap-6 flash"
        >
          {msg}
        </m.p>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
