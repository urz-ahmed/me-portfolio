import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { Link } from 'react-scroll';
function HeroSection() {
  return (
    <>
        <div id="hero" className='flex items-center justify-center flex-col py-20'>
            <div className="text-center">
                <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-orange-700 dark:text-orange-400 block'>Hi 👋 I'm <span>Urooj Ahmad</span></h1>
                <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-blue-50'>A Curious Front End Developer from India. Looking for the best match</p>
                <div className="btns flex gap-3 justify-center py-3">
                  <Link to="works" spy={true} smooth={true} offset={50} duration={500} className='inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md cursor-pointer'>See Works
                  </Link>
                  <a href="#" className='inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See Resume</a>
                </div>
                <div>
                  <ul className='flex gap-10 justify-center mt-4'>
                    <li className='text-3xl text-gray-500 dark:text-gray-200'><a target="_blank" href="https://github.com/pagsum"><FaGithubSquare/></a></li>
                    <li className='text-3xl text-gray-500 dark:text-gray-200'><a target="_blank" href="https://www.linkedin.com/in/urooj-ahmad-73260422a/"><FaLinkedin/></a></li>
                    <li className='text-3xl text-gray-500 dark:text-gray-200'><a href="#" ><SiLeetcode/></a></li>
                    <li className='text-3xl text-gray-500 dark:text-gray-200'><a href="mailto:urjahmad@gmail.com"><FaEnvelope/></a></li>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection