import GoBackButton from './GoBackButton';
import { FaGithub} from 'react-icons/fa';
import { TbWorld} from 'react-icons/tb';

import Portfolio from '../assets/projects/portfolio.png';


function Project3() {
  return (
    <div className='w-full h-screen bg-[#0A192F] text-gray-300 pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
        <div>
          <GoBackButton />
        </div>
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>My Portfolio</h2>

        <div className='flex gap-8 mt-16'>
          <img src={Portfolio} alt='' className='w-[50%] inline-block' />
          <div className='w-full flex flex-col gap-6'>
            <p className=''>
              Nothing much to say about my portfolio. I took the opportunity to learn Tailwind CSS while building it. This is the first version, I really want to improve it, with some animations for example.
            </p>
    
            <div className='flex gap-4'>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>React </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Tailwind CSS </span>
            </div>
            <div className="demo-code flex items-center justify-center gap-8">
              <div className="demo">
                <a href="https://my-portfolio-teal-theta.vercel.app/" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <TbWorld className='inline-block'/> Live Demo </a>
              </div>
              <div className="code">
                <a href="https://github.com/ornel77/ornella-portfolio" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <FaGithub className='inline-block' /> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project3