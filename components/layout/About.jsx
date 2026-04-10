import React from "react";
import { motion } from "framer-motion";

export default function About({ isDarkMode }) {
	const textColor = isDarkMode === "dark" ? "text-white" : "text-black";
	return (
		<section
			id="about"
			className={`relative min-h-screen flex items-center justify-center ${textColor}`}
		>
			<div className=" w-7xl mx-5 md:mx-20  flex flex-col lg:flex-row items-center justify-between space-y-10 py-30 z-10">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.6 }}
					className="w-full lg:w-[49%] "
				>
					<h2 className=" text-4xl xl:text-5xl font-bold cursor-default flex flex-wrap   ">
						<span>H</span>
						<span>i</span>
						<span className="mr-3">,</span>
						<span> I</span>
						<span>&apos;</span>
						<span className="mr-3">m</span>
						<span>J</span>
						<span>o</span>
						<span>h</span>
						<span>n</span>
					</h2>
					<h2 className="text-4xl xl:text-5xl font-bold cursor-default flex flex-wrap  ">
						<span>F</span>
						<span>r</span>
						<span>o</span>
						<span>n</span>
						<span>t</span>
						<span>e</span>
						<span>n</span>
						<span className="mr-3">d</span>
						<span>D</span>
						<span>e</span>
						<span>v</span>
						<span>e</span>
						<span>l</span>
						<span>o</span>
						<span>p</span>
						<span>e</span>
						<span>r</span>
					</h2>
					<p
						className={`${isDarkMode === "dark" && "text-gray-200"} mt-3 text-lg tracking-widest`}
					>
						React & Nextjs Enthusiast / Creative Builder
					</p>
				</motion.div>
				<motion.div initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.6 }}
					className={`${isDarkMode === "dark" ? "text-gray-200" : "text-black "} lg:w-[49%] font-semibold gap-5 flex flex-col text-lg`}
				>
					<p>
						A frontend developer passionate about building modern, responsive,
						and scalable web applications.
					</p>
					<p>
						{" "}
						I discovered the joy of turning ideas into reality through code by
						working with React and full‑stack development. <br /> I love
						crafting user interfaces, ensuring smooth functionality, and working
						with data to deliver complete solutions.
					</p>
					<p>
						{" "}
						Constantly exploring new technologies and sharpening my skills, my
						goal is to grow into a well‑rounded full‑stack developer who creates
						elegant, impactful digital experiences.
					</p>
				</motion.div>
			</div>
			<h1 className="absolute text-[30vw] font-serif font-bold bg-[url('/img_about.png')] bg-cover bg-center text-transparent bg-clip-text opacity-30 ">
				JFG 
			</h1>
		</section>
	);
}
//
