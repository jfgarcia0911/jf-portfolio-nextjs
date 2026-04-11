import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navIcons } from "@/constants/navIcons";

export default function Footer({ isDarkMode }) {
	const textColor = isDarkMode !== "dark" ? "text-white" : "text-black";
	const brandLogo = isDarkMode !== "dark" ? "/JF-white-V2.png" : "/JF-logo.png";
	return (
		<footer
			className={`${textColor}  flex flex-col items-center justify-center bg-linear-to-t from-gray-300 to-gray-900 gap-10 w-full py-20`}
		>
			<Link href="#home" aria-label="Home" className="relative w-20 md:w-25 ">
				<Image
					src={brandLogo}
					alt="Brand Logo"
					width={100}
					height={50}
					priority
					className="object-contain"
				/>
			</Link>
			<ul className="flex gap-5 md:gap-10">
				{navIcons.map((navIcon, index) => (
					<li key={index}>
						<Link
							href={navIcon.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={navIcon.ariaLabel}
						>
							<navIcon.icon className={`w-10 h-10 ${textColor}`} />
						</Link>
					</li>
				))}
			</ul>
			<p className="font-bold mx-2 text-center">&copy; 2026 John Francis Garcia. All rights reserved. </p>
		</footer>
	);
}
