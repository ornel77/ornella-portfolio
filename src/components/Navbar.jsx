import {useState} from 'react'
import logo from '../assets/ot-logo-zip-file/svg/logo-no-background.svg'
import { FaBars, FaTimes, FaGithub, FaLinkedin  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'




function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center bg-[#0A192F] px-4 text-gray-300">
        <div>
            <img src={logo} alt="logo image" style={{ width: '50px' }}/>
        </div>

        {/* Menu */}
       
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li  >
            <li>Contact</li>
        </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick}  className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu  */}
        <div className={!nav ? 'absolute left-[-100%]' : 'absolute w-full h-screen top-0 left-0 bg-[#0A192F] flex flex-col justify-center items-center duration-500'} >
            <ul className='duration-300'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>

        {/* Socials icons  */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0  '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-[#333]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-[#6FC2B0]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-[#565F69]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30} /> </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar