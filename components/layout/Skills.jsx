"use client";
import React, { useState } from "react";
import FloatingIcon from "@/components/ui/FloatingIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "@/constants/skillsData";

export default function Skills({ isDarkMode }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const x = (clientX / window.innerWidth - 0.5) * 100; // adjust sensitivity
		const y = (clientY / window.innerHeight - 0.5) * 100;
		setPosition({ x, y });
	};
	const textColor = isDarkMode === "dark" ? "text-white" : "text-black";
	return (
		<section
			id="skills"
			onMouseMove={handleMouseMove}
			className={`relative min-h-screen flex items-center justify-center ${textColor} overflow-hidden`}
		>
			<div
				ref={ref}
				className="w-7xl mx-5 md:mx-20  flex flex-col  items-center justify-center text-center gap-4 py-30 z-10"
			>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.6 }}
					className="flex flex-col gap-4"
				>
					<p className={`${isDarkMode === "dark" && "text-gray-400"}`}>
						A PROBLEM IS AN OPPORTUNITY TO DO YOUR BEST.
					</p>
					<h2 className="text-4xl lg:text-6xl  transition-all duration-300 font-bold ">
						Skills & Experience
					</h2>
					<p>
						I specialize in creating modern, responsive, and scalable web
						applications using React and Next.js.
					</p>
					<p className="max-w-180">
						My experience includes working with various technologies and
						frameworks to build efficient and user-friendly applications,
						developing custom features and plugins, creating animations and
						coding interactive layouts.
					</p>
					<p>
						I also have full-stack experience, including working with Node.js,
						Firebase and C#.
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					viewport={{ once: false, amount: 0.1 }} // lower amount for earlier trigger
					variants={{
						hidden: { opacity: 0 }, // parent starts invisible
						visible: {
							opacity: 1, // parent becomes visible
							transition: { staggerChildren: 0.1 },
						},
					}}
					className="flex flex-wrap items-center justify-center gap-10 mt-15 max-w-200"
				>
					{skillsData.map((skill) => (
						<motion.div
							variants={{
								hidden: { y: 100, opacity: 0 },
								visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
							}}
							key={skill.id}
							className="flex flex-col justify-center items-center   transition-all duration-300 gap-2"
						>
							<span className="inline-block h-12 md:h-16 w-12 md:w-16 lg:h-20 lg:w-20">
								<skill.icon className="w-full h-full " />
							</span>
							<h3>{skill.title}</h3>
						</motion.div>
					))}
				</motion.div>
			</div>
			<FloatingIcon positionX={position.x} positionY={position.y} />
		</section>
	);
}
