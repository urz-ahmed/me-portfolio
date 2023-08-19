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
    const skillsData = [
        { skillsName: "HTML", imageUrl: HTML },
        { skillsName: "CSS", imageUrl: CSS },
        { skillsName: "Javasript", imageUrl: JavaScript },
        { skillsName: "React (JS+Native)", imageUrl: ReactImg },
        { skillsName: "Node.js", imageUrl: Node },
        { skillsName: "Firebase", imageUrl: FireBase },
        { skillsName: "Tailwind CSS", imageUrl: Tailwind },
        { skillsName: "C++", imageUrl: cplus },
    ];
    return (
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <SectionTitle>Skills</SectionTitle>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {
                skillsData.map((item, index) => (
                        <div className='bg-slate-200 shadow-sm dark:bg-slate-800 shadow-[#040c16] hover:scale-110 duration-500' key={index}>
                            <img className='w-20 mx-auto' src={item.imageUrl} alt="HTML icon" />
                            <p className='my-4 dark:text-slate-300'>{item.skillsName}</p>
                        </div>
                ))
            }
            </div>
        </div>
    );
};

export default Skills;