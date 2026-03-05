import React from "react";
import Image from "next/image";

export default function Contact() {
	return (
		<section
			id="contact"
			data-aos="fade-up"
			data-aos-delay="300"
			className="min-h-screen overflow-hidden flex items-center justify-center p-6 mt-10 relative"
		>
			<article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
				<aside className="w-full md:w-1/2 relative">
					<div className="bg-linear-to-r from-[#3a4cc4] via-[#5a70dd] to-[#61bec5] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-75 sm:w-100 h-75 sm:h-100 rounded-full  shadow-[0_0_70px_rgba(0,182,182,0.7)]  "></div>
					<Image
						src="/imghero.png"
						alt="Contact illustration"
						width={500}
						height={256}
						className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative mx-auto"
					/>
				</aside>

				{/* Contact Form */}
				<section className="p-8 w-full md:w-1/2">
					<header className="mb-6">
						<h2 className="text-4xl font-bold text-center text-white">
							Contact Us
						</h2>
					</header>
					<form className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-gray-300 font-medium mb-2"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Your name"
								className="w-full px-4 py-2 text-white  bg-gray-400 rounded-lg focus:outline-none"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-gray-300 font-medium mb-2"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your email"
								className="w-full px-4 py-2 text-white  bg-gray-400 rounded-lg focus:outline-none"
							/>
						</div>
						<div>
							<label
								htmlFor="Message"
								className="block text-gray-300 font-medium mb-2"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								placeholder="Your message"
								className="w-full px-4 py-2 text-white  bg-gray-900 rounded-lg focus:outline-none"
							></textarea>
						</div>
						<button className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#3a4cc4] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
							Send Message
						</button>
					</form>
				</section>
			</article>
		</section>
	);
}
