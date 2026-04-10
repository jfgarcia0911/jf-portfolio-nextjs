"use client";
import React, { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import FloatingIcon from "@/components/ui/FloatingIcon";

export default function Contact({ isDarkMode }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const x = (clientX / window.innerWidth - 0.5) * 100; // adjust sensitivity
		const y = (clientY / window.innerHeight - 0.5) * 100;
		setPosition({ x, y });
	};
	const textColor = isDarkMode === "dark" ? "text-black" : "text-white";

	return (
		<section
			onMouseMove={handleMouseMove}
			id="contact"
			className={`relative min-h-screen flex items-center justify-center  ${textColor}`}
		>
			<div
				className={`max-w-280  ${isDarkMode === "dark" ? "bg-orange-100" : "bg-gray-600"} w-full h-150 mx-5 md:mx-20 flex items-center justify-center rounded-md py-30`}
			>
				<div
					className={` ${isDarkMode === "dark" ? "bg-gray-100" : "bg-gray-500"} max-w-250 w-full h-140 md:h-120 mx-5 flex flex-col lg:flex-row items-center justify-center  px-10 rounded-md`}
				>
					<div className="font-serif gap-3 lg:gap-5 flex flex-col text-center  lg:w-[48%]">
						<h2
							className={`text-3xl tracking-wider text-amber-700 ${isDarkMode === "dark" ? "text-amber-700" : "text-white"}`}
						>
							Get in Touch
						</h2>
						<h3
							className={` ${isDarkMode === "dark" ? "text-amber-800" : "text-white"}`}
						>
							I&apos;d like to hear from you!
						</h3>
						<p
							className={` ${isDarkMode === "dark" ? "text-gray-400" : "text-white/80"} text-xs leading-relaxed italic  w-full text-center`}
						>
							If you have any inquiries or just want to say hi, please use the
							contact form
						</p>
					</div>
					<ContactForm className="lg:w-[48%]" isDarkMode={isDarkMode} />
				</div>
			</div>
			<FloatingIcon positionX={position.x} positionY={position.y} />
		</section>
	);
}
