import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

function Skills() {
  return (
    <section name="skills" className='bg-[#0A192F] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I&apos;ve worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4'>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JS icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="REACT icon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={Node} alt="NODE icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="GIT icon" className='w-20 mx-auto'/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="TAILWIND icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills