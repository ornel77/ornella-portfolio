import GoBackButton from './GoBackButton';
import { FaGithub} from 'react-icons/fa';



function Project4() {
  return (
    <div className='w-full h-screen bg-[#0A192F] text-gray-300 pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
        <div>
          <GoBackButton />
        </div>
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>Emmaus Connect</h2>

        <div className='md:flex gap-8 md:mt-16 mt-8'>
          <div className="w-full">
          <video loop autoPlay controls>
            <source src='/emmaus.mov'/>
          </video>
          </div>
          <div className='md:w-full flex flex-col gap-6'>
            <p className='mt-6 md:mt-0'>
            This was a three-day hackathon project. The objective was to create a full-stack application for cataloging incoming reconditioned smartphones and estimating a resale price for them.


            </p>
            <p>
            We were awarded the technical prize for this project, and I am particularly proud of it since we had limited time. Although we have not deployed it yet, you can watch the video to gain an understanding of the project.
            </p>
    
            <div className='flex gap-4 flex-wrap'>
              <span className='language'>React </span>
              <span className='language'>Sass </span>
              <span className='language'>Express.js </span>
              <span className='language'>MySQL </span>
              <span className='language'>Figma </span>
            </div>
            <div className="demo-code flex items-center justify-center gap-8 pb-4">
              
              <div className="code">
                <a href="https://github.com/ThomasLonjon/Hackaton-Emmaus" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] md:text-2xl text-xl duration-500'> <FaGithub className='inline-block' /> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project4