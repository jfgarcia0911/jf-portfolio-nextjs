import React from 'react'
import Image from "next/image";

const skillsData = [
    
    {id:1, image:"/icon_react.png", title:'React js', description:'Developed component-based applications with React, focusing on reusable and scalable code.'},
    
    {id:2, image:"/bootstrap.png", title:'Bootstrap', description:'Used Bootstrap to create responsive layouts and reusable UI components efficiently.'},
    {id:3, image:"/css3.png", title:'CSS3', description:'Crafted modern, responsive designs with custom styling, animations, and layouts.'},
    {id:4, image:"/html.png", title:'HTML', description:'Developed semantic and accessible web pages with clean, structured markup.'},
    {id:5, image:"/javascript.png", title:'Javascript', description:'Implemented interactive features and logic to enhance user experience.'},
    {id:6, image:"/mongodb.png", title:'Mongo DB', description:'Worked with non-relational databases to store and retrieve data for web applications.'},
    {id:7, image:"/angular.png", title:'Angular ', description:'Built dynamic single-page applications with Angular, implementing routing, data binding, and form validation.'},
    {id:8, image:"/tailwindcss.png", title:'Tailwindcss', description:'Styled projects with utility-first CSS for fast and consistent design development.'},
    {id:9, image:"/vue.png", title:'Vue.js', description:'Explored Vue for building reactive, simple user interfaces and small-scale applications.'},
    {id:10, image:"/nextjs.png", title:'Next.js', description:'Built fast, SEO-friendly applications with server-side rendering, static site generation, and API routes for full-stack functionality.'}
];



const SkillBox=({image,title,description})=>(
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'>
            <Image src={image} alt={title} width={500}
							height={256} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    </article>
);  

export default function Skills() {

  return (
    <section id='skills' className='relative min-h-screen  flex flex-col items-center justify-center text-white px-4 py-10 mt-10 '>
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#483cf5] rounded-full blur-3xl opacity-50 top-10  left-1/2 transform -translate-x-1/2'>
        </div>
        <Image src="/imghero.png" alt="left picture" width={500}
							height={256} className='absolute z-10 left-2 top-10 sm:left-16 sm:top-10 transform -rotate-12 w-24 h-auto sm:w-38 opacity-80'/>
        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    My expertise <br/> and <span className='text-blue-400'>Skills</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    Lorem ipsume dolor sit amet consectetur, adipisicing elit. Beatae culpa perspiciatics atque placeat tempore qua eligemdi quasi error!
                </p>
            </header>
            <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
                {skillsData.map((skill)=>(
                    <SkillBox key={skill.id} image={skill.image} title={skill.title} description={skill.description}/>
                ))}
            </section>
        </div>
        <Image src="/imghero.png" alt="Right picture" width={500}
							height={256} className='absolute z-10 right-2 top-10 sm:right-16 sm:top-10 transform rotate-12 w-24 h-auto sm:w-38 opacity-80' />

    </section>
  )
}
