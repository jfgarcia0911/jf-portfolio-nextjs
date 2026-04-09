import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navIcons } from "@/constants/navIcons";
import { navLinks } from "@/constants/navLinks";

export default function MobileMenu({  setIsOpen }) {
	return (
		<motion.div
			initial={{ opacity: 0, scaleX: 0 }}
			animate={{ opacity: 1, scaleX: 1 }}
			exit={{ opacity: 0, scaleX: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			style={{ transformOrigin: "left" }}
			className="absolute top-0 left-0 z-49 w-full bg-linear-to-l from-[rgb(35,90,166)] to-[rgb(16,27,59)] py-2.5 px-4  lg:hidden h-screen"
		>
			<div className="h-screen flex flex-col justify-between ">
				<X
					className="w-8 h-8  text-white cursor-pointer ml-auto"
					onClick={() => setIsOpen(false)}
				/>
				<div className="text-3xl px-20 font-bold">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
              aria-label={link.ariaLabel}
							className="block py-3 text-white hover:text-blue-500 focus:underline"
							onClick={() => setIsOpen(false)}
						>
							{link.name}
						</Link>
					))}
				</div>

				<ul className="mb-10 px-20 flex   gap-4">
					{navIcons.map((navIcon, index) => (
						<li key={index} >
							<Link
								href={navIcon.href}
								target="_blank"
								rel="noopener noreferrer"
                aria-label={navIcon.ariaLabel}
                
							>
								<navIcon.icon className="w-10 h-10 text-white" />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}
