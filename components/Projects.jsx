import React from "react";


import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
	const listProjects = [
    {
			image: "/apple.png",
			title: "Apple-iPhone Clone App",
			description:
				"Frontend-only recreation of Apple’s iPhone product page using Next.js, Tailwind CSS, and Framer Motion. This project focuses on Apple-level UI polish, responsive layouts, and scroll-based animations.",
			link: "https://apple-iphone-clone-zeta.vercel.app/",
			code: "https://github.com/jfgarcia0911/apple-iphone-clone",
		},
		{
			image: "/amazon.png",
			title: "Amazon Clone App",
			description:
				"A full-stack e-commerce web application inspired by Amazon. Features include product listings, category-based search, detailed product pages, authentication, cart management, and order tracking. Built with React, Next.js, Firebase, and Tailwind CSS, the app delivers a responsive and user-friendly shopping experience.",
			link: "https://amazon-clone-peach-five-34.vercel.app/",
			code: "https://github.com/jfgarcia0911/amazon-clone",
		},
		{
			image: "/fbclone.png",
			title: "FB Clone",
			description:
				"A full-stack social media application inspired by Facebook, built with modern web technologies to replicate core social networking features including story sharing, image posts, and real-time interactions.",
			link: "https://github.com/jfgarcia0911/fb-clone",
			code: "https://github.com/jfgarcia0911/fb-clone",
		},
		{
			image: "/dev-connect.png",
			title: "Developer Social Platform",
			description:
				"Developer Social Platform is a full-stack web application that allows developers to create profiles, publish posts, and interact with other users in a community-driven environment. The application is built using the MERN stack (MongoDB, Express, React, Node.js), with Redux for global state management and RESTful API integration.",

			link: "https://github.com/jfgarcia0911/devconnectorFrontend",
			code: "https://github.com/jfgarcia0911/devconnectorBackend",
		},
		{
			image: "/portfolio2.png",
			title: "Web Portfolio 2025",
			description:
				"A modern, responsive portfolio website built with React 19 and Vite, featuring sleek animations and optimized performance. This portfolio showcases my work and skills with a clean, professional design.",
			link: "https://jf-portfolio-nextjs-git-master-xaero09s-projects.vercel.app/",
			code: "https://github.com/jfgarcia0911/jf-portfolio-nextjs",
		},
		{
			image: "/jobseeker.png",
			title: "Jobseeker",
			description:
				"JobSeeker is a job-hunting platform that helps users search, apply, and manage job opportunities.",
			link: "https://github.com/jfgarcia0911/jobseeker",
			code: "https://github.com/jfgarcia0911/jobseeker",
		},
		{
			image: "/auth-demo.png",
			title: "Firebase Authentication Demo",
			description:
				"A modern Next.js application that demonstrates seamless Firebase authentication integration with a clean, responsive UI. This demo showcases user management features including secure login/logout flows, profile display, and dynamic avatar handling.",
			link: "https://firebase-auth-demo-theta.vercel.app/",
			code: "https://github.com/jfgarcia0911/firebase-auth-demo",
		},

		{
			image: "/webportfolio2023.png",
			title: "Web Portfolio 2023",
			description:
				"A personal portfolio website built with pure HTML and CSS. It showcases your projects, skills, and experience with a clean and responsive design.",
			link: "https://jfgarcia0911.github.io/webportfolio2023/",
			code: "https://github.com/jfgarcia0911/webportfolio2023",
		},
	];
	return (
		<main id="projects" className="p-4 ">
			<section data-aos="fade-up" data-aos-delay="300">
				<header className="text-center">
					<h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
						My <span className="text-blue-400">Projects</span>
					</h1>
					<p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
						Here are some of the projects I’ve built, showcasing my
						skills in frontend development, responsive design, and
						modern web technologies.
					</p>
				</header>
			</section>
			<section
				data-aos="fade-up"
				data-aos-delay="500"
				className="flex flex-wrap gap-4 justify-center mt-6 "
			>
				{listProjects.map((project, index) => (
					<ProjectCard
						key={index}
						code={project.code}
						image={project.image}
						title={project.title}
						description={project.description}
						link={project.link}
					/>
				))}
			</section>
		</main>
	);
}
