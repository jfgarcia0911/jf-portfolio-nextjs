import { projectLists } from "@/constants/projectLists";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects({ isDarkMode }) {
  const textColor = isDarkMode === "dark" ? "text-white" : "text-black";

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center ${textColor}`}
    >
      <div className="w-7xl mx-5 md:mx-20 flex flex-col items-center justify-center text-center gap-20 mt-20">
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

// export default function Projects({ isDarkMode }) {
// 	const textColor = isDarkMode === "dark" ? "text-white" : "text-black";
// 	return (
// 		<section
// 			id="projects"
// 			className={`min-h-screen flex items-center justify-center  ${textColor}`}
// 		>
// 			<div className="w-7xl mx-5 md:mx-20  flex flex-col  items-center justify-center text-center gap-20 mt-20">
// 				<h2 className="text-4xl lg:text-6xl  transition-all duration-300 font-bold ">
// 					My Projects
// 				</h2>
// 				<ul className="w-full items-center flex flex-col gap-20">
// 					{projectLists.map((project, index) => {
//             const isOddIndex = index % 2 !== 0;
//             const getSpacingClass = (isOddIndex) => (isOddIndex ? 'lg:mr-20' : 'lg:ml-20');
//             return (
            
// 						<li
// 							key={index}
//               style={{ backgroundImage: `url(${project.image})` }}
// 							className={`relative w-[80%] min-w-110 aspect-video bg-cover bg-center rounded-md ${getSpacingClass(isOddIndex)} group`}
// 						>
// 							<div className="absolute inset-0 bg-black  opacity-30 transition-opacity"></div>
// 							{/* Hover information */}
// 							<div className="absolute inset-0 bg-linear-to-r from-gray-900 to-gray-500 opacity-90  duration-500 rounded-md scale-x-0 origin-left group-hover:scale-x-100 z-30 flex flex-col items-center justify-center gap-5 lg:gap-10 ">
// 								<h2 className=" text-white font-bold text-xl  md:text-3xl lg:text-5xl">
// 									Amazon Clone
// 								</h2>
// 								<p className="text-white text-sm md:text-md lg:text-xl line-clamp-5 w-[80%]">
// 									A full-stack e-commerce web application inspired by Amazon.
// 									Features include product listings, category-based search,
// 									detailed product pages, authentication, cart management, and
// 									order tracking. Built with React, Next.js, Firebase, and
// 									Tailwind CSS, the app delivers a responsive and user-friendly
// 									shopping experience.
// 								</p>
// 								<div className=" flex items-center justify-center gap-10">
// 									<a href="#about" target="_blank" rel="noopener noreferrer">
// 										<button className="bg-white font-medium text-black py-2 px-4 rounded-lg shadow  cursor-pointer">
// 											Frontend Code
// 										</button>
// 									</a>

// 									<a href="#about" target="_blank" rel="noopener noreferrer">
// 										<button className="bg-white font-medium text-black py-2 px-4 rounded-lg shadow  cursor-pointer">
// 											Backend Code
// 										</button>
// 									</a>
// 								</div>
// 							</div>

// 							<div className={`absolute bottom-[10%] px-10 z-10 group-hover:hidden flex flex-col ${isOddIndex? "text-left lg:items-end": "text-left"} w-full`}>
// 								<h2 className=" text-white font-bold text-xl  md:text-3xl lg:text-5xl ">
// 									{project.title}
// 								</h2>
// 								<p className=" italic text-white text-md md:text-lg lg:text-xl mt-2 lg:mt-4 ">
// 									{project.description}
// 								</p>
//                 <div className="relative md:text-lg font-semibold mt-4 items-center flex">
//                   <p className="bg-linear-to-r from-orange-900 to-orange-500 inline px-2 md:px-4 py-1 md:py-3">
//                   See more details <ChevronRight className="inline" />

//                   </p>
//                 </div>
// 							</div>
// 						</li>
// 					)})}
					
// 				</ul>
// 			</div>
// 		</section>
// 	);
// }
