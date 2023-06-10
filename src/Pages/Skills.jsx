import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import Logos from "../Components/Logos";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[100px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        <div className="flex items-center justify-center h-[350px]">
          <MarqueeCards direction="right">
            <Logos />
          </MarqueeCards>
        </div>
      </div>
    </div>
  );
};

export default Skills;
