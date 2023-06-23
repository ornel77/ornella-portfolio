import Portfolio from '../assets/projects/portfolio.png';
import Poke from '../assets/projects/pokemonlite2.png';
import Loopstudios from '../assets/projects/loopstudios.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section
      name='projects'
      className='bg-[#0A192F] text-gray-300 w-full md:h-screen pt-6'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            My Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center'>
          {/* Card Item */}
          <article className='w-full shadow-md shadow-[#040C16] hover:scale-110 duration-500 '>
            <Link to='/project-1'>
              <img src={Loopstudios} alt='' className='border-b-2 border-pink-600'/>
            <h3 className='text-2xl text-center p-4'>Pokemon Lite</h3>
            <div className='flex flex-wrap gap-4 p-4'>
            <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>React </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Git </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Sass </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Fetch</span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>API</span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Figma</span>
            </div>
            </Link>
          </article>

          <article className='w-full shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <Link to='/project-2'>
              <img src={Loopstudios} alt='' className='border-b-2 border-pink-600'/>
            <h3 className='text-2xl text-center p-4'>Loopstudios</h3>
            <div className='stack'>
            <div className='flex gap-4 flex-wrap p-4'>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>HTML </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>CSS </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Javascript </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Figma </span>
            </div>
            </div>
            </Link>
          </article>

          <article className='w-full shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
          <Link to='/project-3'>
              <img src={Portfolio} alt='' className='border-b-2 border-pink-600'/>
            <h3 className='text-2xl text-center p-4'>Portfolio</h3>
            <div className='flex gap-4 flex-wrap p-4'>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>React </span>
              <span className='inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Tailwind CSS </span>
            </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
