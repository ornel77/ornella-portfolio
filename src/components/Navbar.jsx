import { useState } from 'react';
import logo from '../assets/ot-logo-zip-file/svg/logo-no-background.svg';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

import CV from '../../cv/CV.pdf'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <header className='fixed w-full h-[80px] flex justify-between items-center bg-[#0A192F] px-4 text-gray-300'>
      <Link to='home' smooth={true} duration={500}>
        <img
          src={logo}
          alt='logo image'
          style={{ width: '50px' }}
          className='cursor-pointer'
        />
      </Link>

      {/* Menu */}

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} className="hover:text-pink-600 duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className="hover:text-pink-600 duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className="hover:text-pink-600 duration-300">
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className="hover:text-pink-600 duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className="hover:text-pink-600 duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-[2000] cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu  */}
      <div
        className={
          nav
            ? 'absolute w-full h-screen top-0 left-0 bg-[#0A192F] flex flex-col justify-center items-center duration-500'
            : 'absolute left-[-100%]'
        }
      >
        <ul className='duration-300'>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to='projects'
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to='contact'
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Socials icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0  '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-[#333]'>
            <a
              href='https://github.com/ornel77'
              target='_blank'
              rel='noreferrer'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Github <FaGithub size={30} />{' '}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-blue-600'>
            <a
              href='https://www.linkedin.com/in/otomboza/'
              target='_blank'
              rel='noreferrer'
              className='flex justify-between items-center w-full text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />{' '}
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out bg-[#565F69]'>
            <a
              href={CV}
              className='flex justify-between items-center w-full text-gray-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />{' '}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
