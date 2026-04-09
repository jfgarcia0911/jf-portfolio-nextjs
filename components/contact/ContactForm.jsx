// components/ContactForm.jsx
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm({ className, isDarkMode }) {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.sendForm(
				"service_fog4ps8",
				"template_poqr9ao",
				form.current,
				"X5OFODoKwCHdErQn7",
			);
			toast.success("Message sent successfully!");
			form.current.reset();
		} catch (error) {
			console.error("EmailJS error:", error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form ref={form} onSubmit={sendEmail} className={`space-y-4 ${className}`}>
			<div>
				<label htmlFor="name" className="text-sm">
					Name
				</label>
				<input
					id="name"
					type="text"
					name="name"
					className={`border w-full rounded-md  bg-white text-gray-900 p-2`}
					required
				/>
			</div>
			<div>
				<label htmlFor="email" className="text-sm">
					Email
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="border w-full rounded-md bg-white text-gray-900 p-2"
					required
				/>
			</div>
			<div>
				<label htmlFor="message" className="text-sm">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					className="border w-full rounded-md bg-white text-gray-900 p-2"
					required
				/>
			</div>
			<div className="flex justify-end ">
				<button
					className="border px-4 py-1 bg-amber-700 cursor-pointer rounded-md text-white"
					type="submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</div>
		</form>
	);
}
