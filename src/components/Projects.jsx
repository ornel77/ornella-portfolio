
import Portfolio from '../assets/projects/portfolio.png'
import Poke from '../assets/projects/pokemonlite2.png'
import Loopstudios from '../assets/projects/loopstudios.png'

function Projects() {
  return (
    <section name="projects" className='bg-[#0A192F] text-gray-300 w-full md:h-screen pt-6'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>My Projects</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${Poke})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div border-b-4 border-pink-600">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>PokemonLite</span>
                        <div className='pt-8 text-center'>
                            <a href="https://pokemon-lite.vercel.app" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/ornel77/pokemon-lite" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${Loopstudios})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div border-b-4 border-pink-600">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Loopstudios Landing Page</span>
                        <div className='pt-8 text-center'>
                            <a href="https://ornel77.github.io/loopstudios-landing-page-main/" target='_blank'  rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/ornel77/loopstudios-landing-page-main" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${Portfolio})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div border-b-4 border-pink-600">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Portfolio</span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-portfolio-teal-theta.vercel.app/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/ornel77/ornella-portfolio" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </section>
  )
}
     
export default Projects