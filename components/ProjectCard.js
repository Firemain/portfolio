import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ title, description, imageUrl, gitUrl, previewUrl }) => {
    return (
        <div className="project-card mt-4">
            <div 
                className="h-52 md:h-72 rounded-t-xl relative group flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#22223b] bg-opacity-60 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500'>
                    
                    {gitUrl && (
                        <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-black hover:border-white bg-[#22223b] group/link'>
                            <CodeBracketIcon className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f2e9e4] cursor-pointer group-hover/link:text-white' />
                        </Link>
                    )}

                    {previewUrl && (
                        <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-black hover:border-white bg-[#22223b] group/link'>
                            <EyeIcon className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f2e9e4] cursor-pointer group-hover/link:text-white' />
                        </Link>
                    )}    

                </div>
                
            </div>
            <div className='text-white rounded-b-xl py-6 px-4 bg-[#4a4e69]'>
                <h5 className='font-semibold text-xl mb-2 text-[#e4d2c8]'>{title}</h5>
                <p className='text-[#f2e9e4] text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
