import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, setIsOpen }) {
	return (
		<motion.div
			initial={{ opacity: 0, scaleX: 0 }}
			animate={{ opacity: 1, scaleX: 1 }}
			exit={{ opacity: 0, scaleX: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			style={{ transformOrigin: "left" }}
			className="absolute top-0 left-0 z-49 w-full bg-linear-to-l from-[rgb(35,90,166)] to-[rgb(16,27,59)] py-2.5 px-4  lg:hidden h-screen "
		>
			<div>
				<X
					className="w-8 h-8  text-gray-900 cursor-pointer ml-auto"
					onClick={() => setIsOpen(false)}
				/>
			</div>
		</motion.div>
	);
}
