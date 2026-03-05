import Image from "next/image";
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className='bg-gray-900'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}
