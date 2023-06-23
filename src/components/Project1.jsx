import GoBackButton from './GoBackButton';
import { FaGithub} from 'react-icons/fa';
import { TbWorld} from 'react-icons/tb';

import Poke from '../assets/projects/pokemonlite2.png';

function Project1() {
  return (
    <div className='w-full h-screen bg-[#0A192F] text-gray-300 pt-6'>
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
        <div>
          <GoBackButton />
        </div>
        <h2 className=' text-center text-4xl font-bold inline-block border-b-4 text-gray-300 border-[#5CE7D1] mt-6'>Pokemon Lite</h2>

        <div className='md:flex gap-8 md:mt-16 mt-8'>
          <img src={Poke} alt='' className='md:w-[50%] inline-block' />
          <div className='md:w-full flex flex-col gap-6'>
            <p className='mt-6 md:mt-0'>
              This application is the second project I did with Wild Code
              School. We used the Pokemon API to fetch all the information needed in order to do a quiz with the pokemons.
              We have 10 rounds to guess the maximum of pokemon and when it&apos;s correct, it&apos;s automaticcally added to the Pokedex.
            </p>
            <p>
              Note: You don&apos;t need a login and password to play, for now the welcome page is just a front :)
            </p>
            <div className='stack flex gap-4 md:justify-between flex-wrap'>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>React </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Git </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Sass </span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Fetch</span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>API</span>
              <span className='language inline-block py-1 px-3 bg-[#12383F] rounded-md text-[#5CE7D1]'>Figma</span>
            </div>
            <div className="demo-code flex items-center justify-center gap-8">
              <div className="demo">
                <a href="https://pokemon-lite.vercel.app" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <TbWorld className='inline-block'/> Live Demo </a>
              </div>
              <div className="code">
                <a href="https://github.com/ornel77/pokemon-lite" target='_blank' rel="noreferrer" className='flex items-center gap-4 hover:text-[#5CE7D1] text-2xl duration-500'> <FaGithub className='inline-block' /> Github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
