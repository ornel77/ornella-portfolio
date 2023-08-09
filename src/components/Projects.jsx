import {projects} from '../../utils/data';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section name='projects' className='bg-[#0A192F] text-gray-300 w-full pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            My Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center md:w-[90%] md:mx-auto'>
          {/* Project Item */}

          {projects.map((project) => (
            <article className='w-full shadow-md shadow-[#040C16] hover:scale-105 duration-500 rounded-md flex flex-col' key={project.title}>
              <img src={project.src} alt='' className='project-img' />
              <h3 className='text-2xl text-center p-4'>{project.title}</h3>
              <div className='flex flex-wrap gap-4 p-4'>
                {
                  project.languages.map((lang, index) => (
                    <span className='language' key={index} >{lang} </span>
                  ))
                }
              </div>
              <Link to={project.href} className='flex items-end h-full'>
                <button className='text-gray-300 group border-2 px-4 py-1 my-4 flex items-center duration-300 m-auto rounded-md hover:bg-gray-300 hover:text-[#0A192F]'>
                  See More{' '}
                </button>
              </Link>
            </article>
          ))}
         
        </div>
      </div>
    </section>
  );
}

export default Projects;
