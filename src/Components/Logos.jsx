import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const Logos = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card w-[100px] h-[150px] flex flex-col justify-center items-bottom"
          >
            <img
              className="text-4xl hover:scale-[1.5] transition-all duration-75"
              src={skill.icon}
              alt={skill.title}
            />
          </div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default Logos;