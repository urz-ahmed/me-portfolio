import React from 'react'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <div className='py-5 bg-slate-300 dark:bg-slate-900 text-center dark:text-gray-300 rounded-lg'>
      <Link to="/nav" spy={true} smooth={true} offset={50} duration={500} className='block text-xl md:text-2xl font-semibold cursor-pointer'>Urooj Ahmad
      </Link>
      <a href="mailto:urjahmad@gmail.com" className=' underline text-sm md:text-md hover:text-indigo-500'>urjahmad@gmail.com</a>
      <p className='text-xs  mt-2 text-gray-500'>
        &copy; Portfolio-Urooj Ahmad {new Date().getFullYear()}. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer