import GoBackButton from './GoBackButton';
import { FaGithub} from 'react-icons/fa';
import { TbWorld} from 'react-icons/tb';



function Project2() {
  return (
    <div className='w-full h-screen md:h-screen bg-[#0A192F] text-gray-300 pt-6'>
      
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
      <div>
        <GoBackButton />
      </div>
        
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>Loopstudios</h2>

        <div className='md:flex gap-8 md:mt-16 mt-8'>
          <div className='w-full'>
          <video loop autoPlay controls>
            <source src='/loopstudios.mov'/>
          </video>
          </div>
          <div className='md:w-full flex flex-col gap-6'>
            <p className='mt-6 md:mt-0'>
              I took this landing page on Frontend Mentor, a platform that help us improve our front-end skills by building real projects. They give us the figma design and we have to code the project using the techniologies you want.  
            </p>
            <p>
            What is great with this platform is that we can have the feedback from other developpers so it&apos;s great to improve faster.
            </p>
            <div className='flex gap-4 md:justify-between flex-wrap'>
              <span className='language'>HTML </span>
              <span className='language'>CSS </span>
              <span className='language'>Javascript </span>
              <span className='language'>Figma </span>
            </div>
            <div className="demo-code flex items-center justify-center gap-8 pb-4">
              <div className="demo">
                <a href="https://ornel77.github.io/loopstudios-landing-page-main/" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] md:text-2xl text-xl duration-500'> <TbWorld className='inline-block'/> Live Demo </a>
              </div>
              <div className="code">
                <a href="https://github.com/ornel77/loopstudios-landing-page-main" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] md:text-2xl text-xl duration-500'> <FaGithub className='inline-block' /> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2