import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section name='home' className='w-full h-screen bg-[#0A192F]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6]'>
          Ornella Tomboza
        </h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892B0] font-bold'>
          I&apos;m a Full Stack Developer
        </h2>
        <p className='text-[#8892B0] py-4 max-w-[700px]'>
          I just finished my 5 month
          training at Wild Code School in Paris. The programm is focused on
          Javascript, React, NodeJS and Express.
        </p>
        <p className='text-[#8892B0] py-4 max-w-[700px]'>
          I&apos;m looking for a one year apprenticeship starting in September
          2023 and I can&apos;t wait to collaborate and participate in exciting
          projects.
        </p>
        <div>
          <Link to='projects' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>
              View Work{' '}
              <span className='group-hover:rotate-90 duration-300'>
                {' '}
                <HiArrowNarrowRight className='ml-3' />{' '}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
