"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ image, title, description, link, code }) {
	const [expanded, setExpanded] = useState(false);

	// Check if link and code are the same
	const frontendCode =
		link === "https://github.com/jfgarcia0911/devconnectorFrontend";
	const backendCode =
		code === "https://github.com/jfgarcia0911/devconnectorBackend";
	const hideButton = link && code && link === code;

	return (
		<article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group flex flex-col self-start w-100">
			<div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

			<div className="relative z-10 flex flex-col h-full">
				<figure className="relative">
					<Image
						src={image}
						alt={title}
						width={500}
						height={256}
						className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
					/>
					<div className="absolute gap-3 inset-0 h-50.5 flex items-center justify-center bg-blue-800 bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
						{!hideButton && (
							<a href={link} target="_blank" rel="noopener noreferrer">
								<button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer">
									{frontendCode ? "Frontend Code" : "Live Preview"}
								</button>
							</a>
						)}

						<a href={code} target="_blank" rel="noopener noreferrer">
							<button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer">
								{backendCode ? "Backend Code" : "View Code"}
							</button>
						</a>
					</div>
				</figure>

				<div className="px-6 py-4 flex flex-col grow">
					<header>
						<h3 className="text-white font-bold text-xl mb-2">{title}</h3>
					</header>

					<p className={`text-gray-200 ${expanded ? "" : "line-clamp-2"} `}>
						{description}
					</p>

					<span
						onClick={() => setExpanded(!expanded)}
						className="text-blue-500 cursor-pointer mt-1"
					>
						{expanded ? "See less" : "See more"}
					</span>
				</div>
			</div>
		</article>
	);
}
