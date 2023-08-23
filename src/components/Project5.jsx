import GoBackButton from './GoBackButton';
import { FaGithub } from 'react-icons/fa';

function Project5() {
  return (
    <div className='w-full h-screen bg-[#0A192F] text-gray-300 pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
        <div>
          <GoBackButton />
        </div>
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>
          Art Gallery
        </h2>

        <div className='md:flex gap-8 md:mt-16 mt-8'>
          <div className='w-full'>
            <video loop autoPlay controls>
              <source src='/gallery.mov' />
            </video>
          </div>
          <div className='md:w-full flex flex-col gap-6'>
            <p className='mt-6 md:mt-0'>
              This is our final project for our training at Wild Code School. We
              developed this application in response to a request from a company
              based in Reunion Island. The objective was to showcase a
              collection of art pieces that will be exhibited in person at
              &quot;La Journée du Patrimoine Français 2023&quot;.
            </p>

            <div className='flex gap-4 flex-wrap'>
              <span className='language'>React </span>
              <span className='language'>Sass </span>
              <span className='language'>Node.js </span>
              <span className='language'>Express.js </span>
              <span className='language'>MySQL </span>
              <span className='language'>Figma </span>
            </div>
            <div className='demo-code flex items-center justify-center gap-8 pb-4'>
              <div className='code'>
                <a
                  href='https://github.com/WildCodeSchool/0223-paris-js-p3-afac974-client'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-4 hover:text-[#5CE7D1] md:text-2xl text-xl duration-500'
                >
                  {' '}
                  <FaGithub className='inline-block' /> Github Client{' '}
                </a>
              </div>
              <div className='code'>
                <a
                  href='https://github.com/WildCodeSchool/0223-paris-js-p3-afac974-server'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-4 hover:text-[#5CE7D1] md:text-2xl text-xl duration-500'
                >
                  {' '}
                  <FaGithub className='inline-block' /> Github Server{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project5;
