"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(
	() => import("@/components/navbar/MobileMenu"),
	{ ssr: false }, // Disable server-side rendering (menu is client-only)
);

export default function Navbar({ isDarkMode, setIsDarkMode }) {
	const [isOpen, setIsOpen] = useState(false);
	const brandLogo = isDarkMode === "dark" ? "/JF-white-V2.png" : "/JF-logo.png";
	const textColor = isDarkMode === "dark" ? "text-white" : "text-gray-900";
	const bgColor = isDarkMode === "dark" ? "bg-gray-900" : "bg-white";

	const [activeSection, setActiveSection] = useState("home");
	const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
	const itemRefs = useRef([]);

	const activeIndex = useMemo(
		() => navLinks.findIndex((l) => l.href === `#${activeSection}`),
		[activeSection],
	);

	 // Move highlight when active section changes
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (!activeItem) return;
    setHighlightStyle({
      left: activeItem.offsetLeft - 10,
      width: activeItem.offsetWidth + 20,
    });
  }, [activeIndex]);

  // 2) Observe sections on scroll
 useEffect(() => {
	const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
	const getSections = () =>
		sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean);
	const updateActiveSection = () => {
		const sections = getSections();
		if (!sections.length) return;
		// Shift center slightly downward to account for fixed navbar
		const viewportProbe = window.innerHeight * 0.45;
		let nextId = sectionIds[0];
		let bestDistance = Number.POSITIVE_INFINITY;
		for (const section of sections) {
			const rect = section.getBoundingClientRect();
			// If probe line is inside section => active section found
			if (rect.top <= viewportProbe && rect.bottom >= viewportProbe) {
				nextId = section.id;
				bestDistance = 0;
				break;
			}
			// fallback for edges
			const distance = Math.min(
				Math.abs(rect.top - viewportProbe),
				Math.abs(rect.bottom - viewportProbe)
			);
			if (distance < bestDistance) {
				bestDistance = distance;
				nextId = section.id;
			}
		}
		if (nextId !== activeSection) {
			setActiveSection(nextId);
			// update URL hash without jump
			const hash = `#${nextId}`;
			if (window.location.hash !== hash) {
				window.history.replaceState(null, "", hash);
			}
		}
	};
	updateActiveSection();
	window.addEventListener("scroll", updateActiveSection, { passive: true });
	window.addEventListener("resize", updateActiveSection);
	return () => {
		window.removeEventListener("scroll", updateActiveSection);
		window.removeEventListener("resize", updateActiveSection);
	};
}, [activeSection]);

	return (
		<header
			className={`fixed  flex justify-center  top-0   w-full   z-50 ${bgColor}    ${textColor}  
     
       transition-transform duration-300 ease-in-out`}
		>
			{/* Main navigation bar */}
			<nav className=" flex justify-between w-380 mx-5 md:mx-15  items-center h-14 md:h-24">
				{/* Brand logo linking to home section */}
				<Link href="#home" aria-label="Home" className="relative w-10 md:w-15 ">
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
				<div className="relative gap-4 md:gap-8 hidden sm:flex">
					<ul className="flex relative  gap-4 md:gap-8 font-bold md:text-lg">
						{navLinks.map((link, index) => {
							return (
								<li
									key={index}
									ref={(el) => {
										itemRefs.current[index] = el;
									}}
									className="z-20"
								>
									<Link
										href={link.href}
										aria-label={link.ariaLabel}
										onClick={() =>setActiveSection(link.href.replace("#", ""))}
										className="hover:text-blue-500"
									>
										{link.name}
									</Link>
								</li>
							);
						})}
						
					</ul>
					{/* Dark mode toggle button */}
					<button
						onClick={() =>
							setIsDarkMode(isDarkMode === "dark" ? "light" : "dark")
						}
						aria-label="Toggle dark mode"
						aria-pressed={isDarkMode === "dark"}
						className={` rounded-full  h-7 w-7 cursor-pointer bg-linear-to-r  ${isDarkMode === "dark" ? "from-black to-white " : "from-white to-black"}`}
					></button>
          <div
							className="absolute top-1/2 -translate-y-1/2 h-8  rounded bg-linear-to-t from-cyan-500 to-gray-500  transition-all duration-300 ease-in-out"
							style={{
								left: highlightStyle.left,
								width: highlightStyle.width,
							}}
						/>
				</div>
				{/* Mobile menu icon (hamburger) visible only on small screens */}
				<div className="block sm:hidden cursor-pointer">
					{!isOpen && (
						<Menu onClick={() => setIsOpen(!isOpen)} className="h-7 w-7 " />
					)}
				</div>
				{/* AnimatePresence handles smooth mounting/unmounting of MobileMenu */}
				<AnimatePresence>
					{isOpen && (
						<MobileMenu
							setIsOpen={setIsOpen}
							isDarkMode={isDarkMode}
							setIsDarkMode={setIsDarkMode}
						/>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
