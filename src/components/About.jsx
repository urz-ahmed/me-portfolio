import React from 'react'
import SectionTitle from './SectionTitle'
import urjphoto from '../assets/urooj-photo.jpg';
function About() {
  return (
    <div className='py-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
      <div className='w-full'>
        <SectionTitle>About Me</SectionTitle>
        <div className="container my-8 px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="w-6/12 md:w-3/12 mx-auto">
              <img src={urjphoto} alt="image" loading="lazy" className='rounded-full' />
            </div>
            <div className="md:7/12 lg:w-6/12 w-full">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl dark:text-slate-100">Urooj Ahmad</h2>
              <h1 className='dark:text-slate-300'>Web Developer</h1>
              <p className="mt-6 text-gray-600 dark:text-slate-300">I approach my assignments with a positive outlook and a can-do attitude since I am dedicated to my work and have a lot of energy and excitement for it. I'm a person who is always eager to attempt new things and take on new challenges.</p>
              <p className="mt-4 text-gray-600 dark:text-slate-300"> Overall, I provide a wealth of experience as a web developer and a positive attitude that adds value to any team or project. I possess the technical know-how to make concepts a reality and the zeal to keep moving forward in the face of obstacles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About