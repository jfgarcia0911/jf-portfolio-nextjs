import React from 'react'
import ContactForm from "@/components/contact/ContactForm";

export default function Contact({isDarkMode}) {
	const textColor = isDarkMode === "dark" ? "text-black" : "text-white";

  return (
    <section id="contact" className={`relative min-h-screen flex items-center justify-center ${textColor}`}> 
      <div className={`max-w-280  ${isDarkMode === "dark" ? "bg-orange-100" : "bg-gray-600"} w-full h-150 mx-5 md:mx-20 flex items-center justify-center`}>
        <div className={` ${isDarkMode === "dark" ? "bg-gray-100" : "bg-gray-500"} max-w-250 w-full h-140 md:h-120 mx-5 flex flex-col lg:flex-row items-center justify-center  px-10`}>
          <div className='font-serif gap-3 lg:gap-5 flex flex-col text-center  lg:w-[48%]'>
            <h2 className={`text-3xl tracking-wider text-amber-700 ${isDarkMode === "dark" ? "text-amber-700" : "text-white"}`}>Get in Touch</h2>
            <h3 className={` ${isDarkMode === "dark" ? "text-amber-800" : "text-white"}`}>I&apos;d like to hear from you!</h3>
            <p className={` ${isDarkMode === "dark" ? "text-gray-400" : "text-white/80"} text-xs leading-relaxed italic  w-full text-center`}>If you have any inquiries or just want to say hi, please use the contact form</p>
          </div>
					<ContactForm className="lg:w-[48%]" />

        </div>
      </div>
    </section>
  )
}
