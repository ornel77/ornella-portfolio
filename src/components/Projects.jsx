import WorkImg from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'

function Projects() {
  return (
    <section name="projects" className='bg-[#0A192F] text-gray-300 w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>My Projects</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>PokemonLite</span>
                        <div className='pt-8 text-center'>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${RealEstate})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Loopstudios Landing Page</span>
                        <div className='pt-8 text-center'>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Portfolio</span>
                        <div className='pt-8 text-center'>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div  style={{ backgroundImage: `url(${RealEstate})` }} className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* Hover */}
                    <div className='opacity-0 group-hover:opacity-100 duration-500 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Art Gallery</span>
                        <div className='pt-8 text-center'>
                            <a href="/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/" target='_blank'>
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