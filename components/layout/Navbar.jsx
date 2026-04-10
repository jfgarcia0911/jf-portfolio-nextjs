"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navLinks";

import MobileMenu from "@/components/navbar/MobileMenu";
export default function Navbar({ isDarkMode, setIsDarkMode }) {
	const [isOpen, setIsOpen] = useState(false);

	const brandLogo = isDarkMode === "dark" ? "/JF-white-V2.png" : "/JF-logo.png";

	const textColor = isDarkMode === "dark" ? "text-white" : "text-gray-900";
 const bgColor = isDarkMode === "dark" ? "bg-gray-900" : "bg-white";
	return (
		<header
			className={`fixed  flex justify-center  top-0   w-full   z-50 ${bgColor}    ${textColor}  
     
       transition-transform duration-300 ease-in-out`}
		>
			{/* Main navigation bar */}
			<nav className=" flex justify-between w-380 mx-5 md:mx-15  items-center h-14 md:h-24">
				{/* Brand logo linking to home section */}
				<Link href="#home" className="relative w-10 md:w-15 ">
					<Image
						src={brandLogo}
						alt="Brand Logo"
						width={100}
						height={50}
						priority
						className="object-contain"
					/>
				</Link>
				{/* Desktop navigation links + dark mode toggle (hidden on small screens) */}
				<div className=" gap-4 md:gap-8 hidden sm:flex">
					<ul className="flex  gap-4 md:gap-8 font-bold md:text-lg">
						{navLinks.map((link, index) => {
							return (
								<li key={index}>
									<Link
										href={link.href}
										aria-label={link.ariaLabel}
										className="hover:text-blue-500"
									>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
					{/* Dark mode toggle button */}
					<div
						onClick={() =>
							setIsDarkMode(isDarkMode === "dark" ? "light" : "dark")
						}
						className={` rounded-full  h-7 w-7 cursor-pointer bg-linear-to-r  ${isDarkMode === "dark" ? "from-black to-white " : "from-white to-black"}`}
					></div>
				</div>
				{/* Mobile menu icon (hamburger) visible only on small screens */}
				<div className="block sm:hidden cursor-pointer">
					{!isOpen && (
						<Menu onClick={() => setIsOpen(!isOpen)} className="h-7 w-7 " />
					)}
				</div>
				{/* AnimatePresence handles smooth mounting/unmounting of MobileMenu */}
				<AnimatePresence>
					{isOpen && <MobileMenu setIsOpen={setIsOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
				</AnimatePresence>
			</nav>
		</header>
	);
}
