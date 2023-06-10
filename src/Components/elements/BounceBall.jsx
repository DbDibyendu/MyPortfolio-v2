
import React from "react";
import { m } from "framer-motion";

const BounceBall = () => {
  const transitionValues = {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse"
  };

  const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto"
  };

  return (
    <div
      id="scroller"
      className="absolute xs:bottom-30 bottom-30 flex justify-center items-center"
    >
      <m.span
        style={ballStyle}
        transition={{
          y: transitionValues,
          width: transitionValues,
          height: transitionValues
        }}
        animate={{
          y: ["2rem", "8rem", "10rem"],
          width: ["5rem", "5rem", "6rem"],
          height: ["5rem", "5rem", "4rem"]
        }}
      />
    </div>
  );
};

export default BounceBall;
