"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CircleEllipsis } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            "name": "Next.js",
            "image": "/images/skills/nextjs-icon.svg"
        },
        {
            "name": "React",
            "image": "/images/skills/react-icon.svg"
        },
        {
            "name": "Tailwind CSS",
            "image": "/images/skills/tailwind-icon.svg"
        },
        {
            "name": "JavaScript",
            "image": "/images/skills/javascript-icon.svg"
        },
        {
            "name": "Python",
            "image": "/images/skills/python-icon.svg"
        },
        {
            "name": "Laravel & PHP",
            "image": "/images/skills/laravel-icon.svg"
        },
        {
            "name": "MySQL",
            "image": "/images/skills/mysql-icon.svg"
        },
        {
            "name": "Kotlin",
            "image": "/images/skills/kotlin-icon.svg"
        }
    ];

    // Variants pour l'animation d'apparition des éléments
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Référence pour détecter si la section est en vue
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="my-12 py-12" id="skills" ref={ref}>
            <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">
                My Skills
            </h2>
            <motion.div 
                className="flex flex-wrap justify-center gap-8 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="group flex flex-col items-center p-6 bg-gradient-to-r from-[#2d2d44] to-[#3b3b58] border border-transparent rounded-2xl hover:border-[#8a94b3] hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-40 h-40"
                        variants={itemVariants}
                    >
                        <div className="relative w-16 h-16 mb-3 rounded-full bg-white/10 p-2">
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                layout="fill"
                                objectFit="contain"
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-[#cdd4e0] font-medium text-sm mt-3">{skill.name}</p>
                    </motion.div>               
                ))}
                <motion.div 
                    className="group flex flex-col items-center p-6 bg-gradient-to-r from-[#2d2d44] to-[#3b3b58] rounded-2xl hover:border-solid hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 w-40 h-40"
                    variants={itemVariants}
                >
                    <div className="relative w-16 h-16 mb-3 rounded-full bg-[#2d2d44] p-2 flex items-center justify-center">
                        <CircleEllipsis className="h-8 w-8 text-[#8a94b3] group-hover:text-[#cdd4e0] transition duration-300" />
                    </div>
                    <p className="text-[#8a94b3] font-medium text-sm mt-3 group-hover:text-[#cdd4e0] transition duration-300">And more</p>
                </motion.div>  
            </motion.div>

        </section>
    );
};

export default Skills;
