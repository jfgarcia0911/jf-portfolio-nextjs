"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Skills from "@/components/layout/Skills";
import Projects from "@/components/layout/Projects";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState("dark");
	return (
		<main
			className={`${isDarkMode === "dark" ? "bg-gray-900" : "bg-white"}   scroll-smooth`}
		>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<Hero isDarkMode={isDarkMode} />
			<About isDarkMode={isDarkMode} />
			<Skills isDarkMode={isDarkMode} />
			<Projects isDarkMode={isDarkMode} />
			<Contact isDarkMode={isDarkMode} />
			<Footer isDarkMode={isDarkMode} />
		</main>
	);
}
