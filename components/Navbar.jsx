'use client'
import React, {useState, useRef, useEffect} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks = [
        {id:1, name:'Home', link:'#home'},
        {id:2, name:'About', link:'#about'},
        {id:3, name:'Skills', link:'#skills'},
        {id:4, name:'My projects', link:'#projects'},
    ]
    const [isVisible, setIsVisible] = useState("up");
	const lastScrollY = useRef(0);
    useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			// setScrollY(currentScrollY);

			// Determine scroll direction
			if (currentScrollY <= 50) {
				setIsVisible("up");
			} else if (
				currentScrollY < lastScrollY.current &&
				currentScrollY > 100
			) {
				setIsVisible("up");
			} else if (
				currentScrollY > lastScrollY.current &&
				currentScrollY > 100
			) {
				setIsVisible("down");
			}
			// Update the ref with current position for next comparison
			lastScrollY.current = currentScrollY;
		};
		window.addEventListener("scroll", handleScroll);
		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
    <header className={`fixed top-0 left-0 w-full z-50 text-white' data-aos='fade-up' data-aos-delay='300  ${
					isVisible === "up" ? "translate-y-0" : "-translate-y-full"
				}`}>
        <div className=' mx-auto flex items-center justify-between p-5'>
            {/* {LOGO} */}
            <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>

            {/* Mobile Menu Toggle */}
            <button className='md:hidden focus:outline-none' onClick={()=>setIsOpen(!isOpen)}>
                <FiMenu className='w-8 h-8 text-white cursor-pointer'/>
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex  items-center space-x-7 text-white'>
                {NavbarLinks.map((link)=>(
                    <a key={link.id} href={link.link} className='hover:text-gray-300 text-lg'>
                        {link.name}
                    </a>
                ))}
                <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#483cf5] rounded-full text-lg cursor-pointer'>
                    <a href="#contact">Contact</a>
                </button>
            </nav>
        </div>

        {/* Mobile Screen */}
        <div className={`${isOpen ? 'block':'hidden'} md:hidden bg-blue-800/80 backdrop-blur-md absolute top-0 left-0 w-full h-screen flex flex-col items-center  space-y-8 pt-16 z-100`}>
            {/* Close Button */}
            <button className='absolute top-5 right-5 text-white' onClick={()=>setIsOpen(false)}>
                <FiX className="w-8 h-8 cursor-pointer" />
            </button>
            {/* Mobile Navigation  */}
            {NavbarLinks.map((link) => (
                <a key={link.id} href={link.link} className='text-lg text-white hover:text-gray-400' onClick={()=>setIsOpen(false)}>{link.name}</a>
            ))}
            {/* Contact button  */}
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#483cf5] rounded-full text-lg cursor-pointer'>Contact</button>
                
        </div>
      
    </header>
  )
}
