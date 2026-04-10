import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navIcons } from "@/constants/navIcons";
import { navLinks } from "@/constants/navLinks";

export default function MobileMenu({ setIsOpen, isDarkMode, setIsDarkMode }) {
	// Switch text color depending on dark/light mode
	const textColor = isDarkMode === "dark" ? "text-white" : "text-gray-900";
	return (
		// Animated container for mobile menu using Framer Motion
		<motion.div
			initial={{ opacity: 0, scaleX: 0 }}
			animate={{ opacity: 1, scaleX: 1 }}
			exit={{ opacity: 0, scaleX: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			style={{ transformOrigin: "left" }}
			className={`absolute top-0 left-0 z-49 w-full bg-linear-to-l ${isDarkMode === "dark" ? "from-[rgb(35,90,166)] to-[rgb(16,27,59)]" : "from-[rgb(240,240,240)] to-[rgb(200,200,200)]"} py-2.5 px-4  lg:hidden h-screen ${textColor}`}
		>
			<div className="h-screen flex flex-col justify-between ">
				<div className="flex justify-end items-center gap-4">
					{/* Dark mode toggle button */}
					<div
						onClick={() => {
							setIsDarkMode(isDarkMode === "dark" ? "light" : "dark");
							setIsOpen(false);
						}}
						className={` rounded-full  h-7 w-7 cursor-pointer bg-linear-to-r  ${isDarkMode === "dark" ? "from-black to-white " : "from-white to-black"}`}
					></div>
					{/* Close (X) icon to close menu */}
					<X
						className="w-8 h-8   cursor-pointer "
						onClick={() => setIsOpen(false)}
					/>
				</div>
				{/* Navigation links (large text for mobile) */}
				<div className="text-3xl px-20 font-bold">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							aria-label={link.ariaLabel}
							className="block py-3  hover:text-blue-500 focus:underline"
							onClick={() => setIsOpen(false)}
						>
							{link.name}
						</Link>
					))}
				</div>
				{/* Social/media icons at bottom */}
				<ul className="mb-10 px-20 flex   gap-4">
					{navIcons.map((navIcon, index) => (
						<li key={index}>
							<Link
								href={navIcon.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={navIcon.ariaLabel}
							>
								<navIcon.icon className="w-10 h-10 " />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}
