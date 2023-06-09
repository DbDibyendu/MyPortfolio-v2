
import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="tsparticles"
        className="w-full h-screen z-0 min-h-[700px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
