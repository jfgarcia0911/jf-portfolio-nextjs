"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "@/components/Navbar/MobileMenu";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
	const [isOpen, setIsOpen] = useState(false);

	const brandLogo = isDarkMode === "dark" ? "/JF-white-V2.png" : "/JF-logo.png";
	return (
		<header
			className={`fixed  flex justify-center  top-0   w-full   z-50    ${isDarkMode === "dark" ? " text-white" : " text-gray-900"}`}
		>
			<nav className=" flex justify-between w-380 mx-5 md:mx-15  items-center h-14 md:h-24">
				<Link href="#home" className="relative w-10 md:w-15 ">
					<Image
						src={brandLogo}
						alt="Brand Logo"
						width={100}
						height={50}
						className="object-contain"
					/>
				</Link>
				<div className=" gap-4 md:gap-8 hidden sm:flex">
					<ul className="flex  gap-4 md:gap-8 font-bold md:text-lg">
						<li>
							{" "}
							<Link
								href="#home"
								className="hover:text-blue-500 focus:underline"
							>
								Home
							</Link>
						</li>
						<li>
							{" "}
							<Link
								href="#about"
								className="hover:text-blue-500 focus:underline"
							>
								About
							</Link>
						</li>
						<li>
							{" "}
							<Link
								href="#skills"
								className="hover:text-blue-500 focus:underline"
							>
								Skills
							</Link>
						</li>
						<li>
							{" "}
							<Link
								href="#projects"
								className="hover:text-blue-500 focus:underline"
							>
								My projects
							</Link>
						</li>
					</ul>
					<div
						onClick={() =>
							setIsDarkMode(isDarkMode === "dark" ? "light" : "dark")
						}
						className={` rounded-full  h-7 w-7 cursor-pointer bg-linear-to-r  ${isDarkMode === "dark" ? "from-black to-white " : "from-white to-black"}`}
					></div>
				</div>
				<div className="block sm:hidden cursor-pointer">
					{!isOpen &&
						<Menu onClick={() => setIsOpen(!isOpen)} className="h-7 w-7 " />
					}
				</div>

				<AnimatePresence>
					{isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</nav>
		</header>
	);
}
