import Portfolio from '../assets/projects/portfolio.png';
import Poke from '../assets/projects/pokemonlite.png';
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

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center md:mt-4'>
          {/* Card Item hover:scale-110 duration-500*/}
          <article className='card w-full shadow-md shadow-[#040C16]'>
            <div className="cover">
            <Link to='/project-1'>
              <img src={Poke} alt='' className='project-img border-b-2 border-pink-600'/>
              <h3 className='text-2xl text-center p-4'>Pokemon Lite</h3>
              <div className='stacks flex flex-wrap gap-4 p-4'>
                <span className='language'>React </span>
                <span className='language'>Git </span>
                <span className='language'>Sass </span>
                <span className='language'>Fetch</span>
                <span className='language'>API</span>
                <span className='language'>Figma</span>
              </div>
            </Link>
            </div>
           
          </article>

          <article className='card w-full shadow-md shadow-[#040C16]'>
            <Link to='/project-2'>
              <img src={Loopstudios} alt='' className='project-img border-b-2 border-pink-600'/>
            <h3 className='text-2xl text-center p-4'>Loopstudios</h3>
            <div className='stack'>
            <div className='flex gap-4 flex-wrap p-4'>
              <span className='language'>HTML </span>
              <span className='language'>CSS </span>
              <span className='language'>Javascript </span>
              <span className='language'>Figma </span>
            </div>
            </div>
            </Link>
          </article>

          <article className='card w-full shadow-md shadow-[#040C16]'>
          <Link to='/project-3'>
              <img src={Portfolio} alt='' className='project-img border-b-2 border-pink-600'/>
            <h3 className='text-2xl text-center p-4'>Portfolio</h3>
            <div className='flex gap-4 flex-wrap p-4'>
              <span className='language'>React </span>
              <span className='language'>Tailwind CSS </span>
            </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
