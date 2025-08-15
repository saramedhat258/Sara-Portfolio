import Grid from './_components/Grid';
import Hero from './_components/Hero';
import { Projects } from './_components/Projects';
import Skills from './_components/Skills';

import { FloatingNav } from './_components/ui/FloatingNav';
import { navItems } from './_data';
import './_styles/global.css'
export default function Home() {
  return (
    <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <Skills/>
      </div>
    </main>
  );
}
