"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState("dark");

  const brandLogo = isDarkMode === "dark" ? "/JF-white-V2.png" : "/JF-logo.png";
	return (
		<header className="fixed flex justify-center  top-0   w-full bg-black  z-50 text-white">
			<nav className="flex justify-between w-380 mx-5 md:mx-15  items-center h-14 md:h-24">
				<Link href="/" className="relative w-10 md:w-15 ">
					<Image
						src={brandLogo}
						alt="Brand Logo"
						width={100}
						height={50}
						className="object-contain"
					/>
				</Link>
				<div>
          {isDarkMode === "dark" ? <div onClick={() => setIsDarkMode("light")} className="border rounded-full bg-linear-to-r from-black to-white h-7 w-7 cursor-pointer"></div> :  
					<div onClick={() => setIsDarkMode("dark")} className="border border-black rounded-full bg-linear-to-r from-white to-black h-7 w-7 cursor-pointer"></div>}
					

          <div onClick={() => setIsDarkMode(isDarkMode === "dark" ? "light" : "dark")} className="border border-black rounded-full bg-linear-to-r from-white to-black h-7 w-7 cursor-pointer"></div>
				</div>
			</nav>
		</header>
	);
}
