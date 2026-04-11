import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function ProjectCard({ project, index }) {
	const isOddIndex = index % 2 !== 0;
	const spacingClass = isOddIndex ? "lg:mr-20" : "lg:ml-20";
	const isSameLink = project.link === project.code;
	return (
		<li
			key={index}
			// style={{ backgroundImage: `url(${project.image})` }}
			className={`relative w-[95%]  md:w-[80%]  aspect-video bg-cover  rounded-md group ${spacingClass}`}
		>
      {/* Optimized background image using Next.js Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover rounded-md"
        sizes="(max-width: 768px) 95vw, 80vw"
        quality={75}
        priority={index === 0} // only first image is high priority
      />
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black opacity-30 transition-opacity"></div>

			{/* Hover overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900 to-gray-800 opacity-50 duration-200 rounded-md scale-x-0 origin-left group-hover:scale-x-100 z-10 flex flex-col items-center justify-center gap-5 lg:gap-10"></div>
			<div className="absolute inset-0 bg-linear-to-r from-gray-900 to-gray-500 opacity-90 duration-500 rounded-md scale-x-0 origin-left group-hover:scale-x-100 z-30 flex flex-col items-center justify-center gap-5 lg:gap-10">
				<h2 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">
					{project.title}
				</h2>
				<p className="text-white text-sm md:text-md lg:text-xl line-clamp-5 w-[80%]">
					{project.subDescription}
				</p>
				<div className="flex items-center justify-center gap-10">
					{isSameLink ? (
						<Link href={project.link} aria-label={`View code for ${project.title}`} target="_blank" rel="noopener noreferrer">
							<button className="bg-white font-medium text-black py-1 md:py-2 px-2 md:px-4 rounded-lg shadow cursor-pointer">
								View Code
							</button>
						</Link>
					) : (
						<>
							<Link
								href={project.link}
								target="_blank"
                aria-label={`Live Preview for ${project.title}`}
								rel="noopener noreferrer"
							>
								<button className="bg-white font-medium text-black py-1 md:py-2 px-2 md:px-4 rounded-lg shadow cursor-pointer">
									Live Preview
								</button>
							</Link>
							<Link
								href={project.code}
								target="_blank"
								rel="noopener noreferrer"
                aria-label={`View code for ${project.title}`}
							>
								<button className="bg-white font-medium text-black py-1 md:py-2 px-2 md:px-4 rounded-lg shadow cursor-pointer">
									View Code
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
      {/* Animated project index number overlay (slides in on hover) */}
      <div className={`absolute -top-10 ${isOddIndex ? "left-5" : "right-5"} transition-transform duration-300 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 z-40 hidden md:block`}>
        <h2 className="text-[7rem] font-bold font-serif text-white">{index + 1}</h2>
      </div>

			{/* Default card content (hidden on hover) */}
			<div
				className={`absolute bottom-[10%] px-10 z-10 group-hover:hidden flex flex-col ${
					isOddIndex ? "text-left lg:items-end" : "text-left"
				} w-full`}
			>
				<h2 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">
					{project.title}
				</h2>
				<p className="italic text-white text-md md:text-lg lg:text-xl mt-2 lg:mt-4">
					{project.description}
				</p>
				<div className="relative md:text-lg font-semibold mt-4 flex items-center">
					<p className="bg-linear-to-r from-orange-900 to-orange-500 inline px-2 md:px-4 py-1 md:py-3 text-white">
						See more details <ChevronRight className="inline" />
					</p>
				</div>
			</div>
		</li>
	);
}
