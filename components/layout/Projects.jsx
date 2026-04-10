import { projectLists } from "@/constants/projectLists";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects({ isDarkMode }) {
  const textColor = isDarkMode === "dark" ? "text-white" : "text-black";

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center ${textColor}`}
    >
      <div className="w-7xl mx-5 md:mx-20 flex flex-col items-center justify-center text-center gap-20 py-30">
        <h2 className="text-4xl lg:text-6xl transition-all duration-300 font-bold">
          My Projects
        </h2>
        <ul className="w-full flex flex-col items-center gap-20">
          {projectLists.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}


