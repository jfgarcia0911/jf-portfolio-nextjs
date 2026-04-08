"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import FloatingIcon from "@/components/ui/FloatingIcon";

export default function Hero({ isDarkMode }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const x = (clientX / window.innerWidth - 0.5) * 100; // adjust sensitivity
		const y = (clientY / window.innerHeight - 0.5) * 100;
		setPosition({ x, y });
	};
	const textColor = isDarkMode === "dark" ? "text-white" : "text-black";

	const heroImage =
		isDarkMode === "dark"
			? "/computer-graphic.png"
			: "/computer-graphic-invert.png";

	return (
		<section
			onMouseMove={handleMouseMove}
			id="home"
			className={`min-h-screen relative flex items-center justify-center overflow-hidden  ${textColor}`}
		>
			<div className=" w-350 mx-5 md:mx-20  flex flex-col-reverse lg:flex-row items-center justify-between gap-10 z-10">
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.6 }}
					className="flex flex-col gap-8 lg:w-[50%] lg:min-w-50 items-center lg:items-start"
				>
					<h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold cursor-default flex flex-wrap transition-all duration-300">
						<div className="mr-3">
							<span>F</span>
							<span>r</span>
							<span>o</span>
							<span>n</span>
							<span>t</span>
							<span>e</span>
							<span>n</span>
							<span>d</span>
						</div>
						<div>
							<span>D</span>
							<span>e</span>
							<span>v</span>
							<span>e</span>
							<span>l</span>
							<span>o</span>
							<span>p</span>
							<span>e</span>
							<span>r</span>
						</div>
					</h2>
					<p className=" lg:text-xl">
						Crafting modern, accessible, and secure web experiences. I build
						elegant interfaces, solve complex design challenges and bring ideas
						to life through clean, scalable code.
					</p>

					<Link
						href="#about"
						className="group font-semibold text-violet-500  items-center"
					>
						About me{" "}
						<ChevronRight className="h-5 w-5 ml-1 inline group-hover:rotate-90 transition-transform duration-300" />
					</Link>
				</motion.div>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.5 }}
					className="relative lg:w-[70%] min-w-110 h-80 lg:h-130 "
				>
					<Image
						src={heroImage}
						alt="Computer Graphic"
						fill
						priority
            sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 70vw,
           50vw"
						className="object-contain scale-x-[-1] "
					/>
				</motion.div>
			</div>
			<FloatingIcon positionX={position.x} positionY={position.y} />
		</section>
	);
}
