import GoBackButton from './GoBackButton';
import { FaGithub} from 'react-icons/fa';
import { TbWorld} from 'react-icons/tb';

import Loopstudios from '../assets/projects/loopstudios.png'


function Project2() {
  return (
    <div className='w-full h-screen bg-[#0A192F] text-gray-300 pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
        <div>
          <GoBackButton />
        </div>
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>Loopstudios Landing Page</h2>

        <div className='flex gap-8 mt-16'>
          <img src={Loopstudios} alt='' className='w-[50%] inline-block' />
          <div className='w-full flex flex-col gap-6'>
            <p className=''>
              I took this landing page on Frontend Mentor, a platform that help us to improve our front-end skills by building real projects. They give us the figma design and we have to code the project using the techniologies you want.  
            </p>
            <p>
            What is great with this platform is that we can have the feedback from other developpers so it&apos;s great to improve faster.
            </p>
            <div className='flex gap-4'>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>HTML </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>CSS </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Javascript </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Figma </span>
            </div>
            <div className="demo-code flex items-center justify-center gap-8">
              <div className="demo">
                <a href="https://ornel77.github.io/loopstudios-landing-page-main/" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <TbWorld className='inline-block'/> Live Demo </a>
              </div>
              <div className="code">
                <a href="https://github.com/ornel77/loopstudios-landing-page-main" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <FaGithub className='inline-block' /> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2