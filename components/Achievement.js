import React from 'react';

const ACHIEVEMENTS_DATA = [
    {
        metric: "Projects",
        value: '10+',
    },
    {
        metric: "Internships",
        value: 2,
    },
    {
        metric: "Years",
        value: '2+',
    },
    {
        metric: "Referee Years",
        value: 6,
    },
    {
        metric: "Solved Rubik's Cubes",
        value: "55s",
    },
];


const Achievement = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#fe2e9e4] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
            {ACHIEVEMENTS_DATA.map((achievement, index) => {
                return (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <h1 className='text-4xl text-white font-bold'>{achievement.value}</h1>
                        <p className='text-xl text-slate-500'>{achievement.metric}</p>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default Achievement;