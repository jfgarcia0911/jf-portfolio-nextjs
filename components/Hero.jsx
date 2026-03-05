import React from 'react'
import Navbar from './Navbar'
import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-137.5 sm:min-h-150 max-w-8xl flex flex-col items-center justify-center '>
        <div  className='md:h-137.5 h-125 w-112.5 bg-linear-to-r absolute from-[#3a4cc4] via-[#4561ed] to-[#61bec5] transform rotate-45 z-0 right-2 top-28 rounded-3xl animated-gradient'>
          
        </div>
        <Navbar/> 

        <main id="home" className='flex flex-col lg:flex-row items-center justify-center w-full px-4  pb-4 md:pb-24 md:pt-32 pt-24 mt-14 lg:mt-0 z-10'>
          <section className=' mr-28 md:text-left mt-10 md:mt-0  lg:w-150 relative' data-aos="fade-up" data-aos-delays="500">
            <div className='absolute -z-10 w-60 h-60 bg-[#483cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'>
            </div>
            <header>
              <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                John Garcia
              </h1>
              <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#0a176c] md:text-[#6662d2] mb-2'>
                💻 Frontend Developer | Turning ideas into interactive web experiences
              </h2>
            </header>
            <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
              Passionate about building responsive, user-friendly web applications with modern technologies like React, Angular, and Tailwind CSS.

            </p>

            <div className='flex items-center space-x-4 mb-6'>
              <Link href="https://github.com/jfgarcia0911" target="_blank" rel="noopener noreferrer">
                <Image src="/github.png" alt='' width={50} height={256} className='object-contain h-11 w-11' />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" alt='' width={50} height={256} className='object-contain h-11 w-11' />
              </Link>
              <Link href="https://www.facebook.com/jfgarcia09" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt='' width={50} height={256} className='object-contain h-11 w-11' />
              </Link>
              
            </div>
          </section>
          <figure data-aos='fade-up' data-aos-delay='500' className=' flex justify-center  mt-0'>
            <Image src="/imghero.png" alt='Hero Image' width={1256} height={1256} className='h-75 sm:h-100 md:h-121.25 w-150 object-cover rounded-lg' />
          </figure>

        </main>
    </div>
    
  )
}
