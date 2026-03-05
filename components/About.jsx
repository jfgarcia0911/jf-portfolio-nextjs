import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen overflow- flex items-center justify-center text-white px-4 sm:px-6 -z-10 "
		>
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
				<figure
					data-aos="fade-right"
					data-aos-delay="500"
					className="flex flex-wrap justify-center gap-4 relative"
				>
					<div className="relative">
						<div className="h-60 md:h-80 w-90 md:w-120 bg-linear-to-r from-[#3a4cc4] via-[#5a70dd] to-[#61bec5] animate-pulse absolute transform rotate-30 z-0 -left-25 -top-2 md:top-10  rounded-[200px]"></div>
						<Image
							src="/img_about1.png"
							alt="about picture 1"
							width={500}
							height={256}
							className="absolute -top-2 -left-23 md:-left-20 transform -translate-y-12 z-20 w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-lg object-cover bg-[#483cf5]"
						/>
						<Image
							src="/img_about2.png"
							alt="about picture 2"
							width={500}
							height={256}
							className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:h-96 md:w-72 rounded-lg "
						/>
						<Image
							src="/img_about.png"
							alt="about picture"
							width={500}
							height={256}
							className="absolute bottom-0 -right-30 sm:-right-30 transform translate-y-12 z-10 w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-lg object-cover"
						/>
					</div>
				</figure>

				<article
					data-aos="fade-left"
					data-aos-delay="500"
					className="text-center lg:text-left relative"
				>
					<div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
					<header>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
							About Me
						</h1>
					</header>
					<p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed text-justify indent-8">
						I’m John Garcia, a frontend developer passionate about creating
						modern, responsive, and scalable web applications. My journey
						started with training in React, Angular, and full-stack development,
						leading me to work with Accenture where I contributed to building
						and improving enterprise applications. I enjoy turning ideas into
						reality through code. Whether it’s developing user interfaces,
						ensuring smooth functionality, or working with databases. I’m
						constantly learning new technologies and sharpening my skills with
						the goal of becoming a well-rounded full-stack developer.
					</p>
					<footer>
						<button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#483cf5] hover:shadow-[0_0_40px_rgba(128,0128,0.7)] rounded-full text-sm sm:text-lg">
							<a href="#projects">Learn More</a>
						</button>
					</footer>
				</article>
			</div>
		</section>
	);
}
