import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import cplus from '../assets/c++.png'
import SectionTitle from './SectionTitle';

const Skills = () => {
    return (
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <SectionTitle>Skills</SectionTitle>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>HTML</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>CSS</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>JAVASCRIPT</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>REACT</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>TAILWIND</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>NODE JS</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>MONGO DB</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>GitHub</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                    <p className='my-4 dark:text-slate-300'>FIREBASE</p>
                </div>
                <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={cplus} alt="c++ icon" />
                    <p className='my-4 dark:text-slate-300'>C++</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;