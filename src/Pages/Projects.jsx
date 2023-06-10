import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[1000px] h-full xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="EXPERIENCE" subtitle="What I have done so far" />
        </div>
        <div className="w-full h-[70%] z-10 flex justify-front">
          <div className="w-full xl:w-[70%] h-[-10%]">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;