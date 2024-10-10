"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Scroll } from 'lucide-react';

const TAB_DATA = [
    {
        title: "Education",
        id: "Education",
        iconType: "graduation",
        contents: [
            {
                institution: "Ecole Centrale de Lille, France",
                program: "Generalist Engineering Program",
                date: "2019 - 2025",
                details: [
                    "Web 2.0 Technologies (HTML, CSS, JavaScript, PHP)",
                    "Mobile Programming and Augmented Reality (Kotlin)",
                    "Project Management (MOOC Gdp)",
                    "Advanced Algorithmics (C language)"
                ]
            }
        ]
    },
    {
        title: "Experience",
        id: "Experience",
        iconType: "briefcase",
        contents: [
            {
                role: "Full-stack Developer and Consultant - Taksu Teknologi, Denpasar, Indonesia",
                date: "September 2024 - February 2025",
                details: [
                    "Full-stack development using Laravel and Next.js",
                    "Designing and developing web solutions with a focus on UX/UI and QA engineering"
                ]
            },
            {
                role: "Freelance Web Developer",
                date: "September 2024 - Now",
                details: [
                    "Full-stack development specializing in React and Next.js",
                    "Providing consulting services for IT projects and website development",
                    "Handling diverse client needs including e-commerce solutions and showcase websites"
                ]
            },
            {
                role: "Software Development Intern - Legrand France, Limoges",
                date: "February 2023",
                details: [
                    "Software Architecture and Frontend Development",
                    "AGILE Project Management",
                    "Development using PHP Symfony Framework"
                ]
            },
            {
                role: "AI Software Design Intern - Central Pharmacy of Lille",
                date: "October 2022 - March 2024",
                details: [
                    "Developed AI-based software for iatrogenic error detection",
                    "Python and pyQT for Frontend Development",
                    "Applied Granular Computing methods"
                ]
            }
        ]
    },    
    {
        title: "Certifications",
        id: "Certifications",
        iconType: "certificate",
        contents: [
            {
                name: "MOOC Project Management (GDP)"
            },
            {
                name: "Udemy certifications",
                details: [
                    "Next.js 14 & React - The Complete Guide",
                    "Python & Machine Learning for Financial Analysis",
                    "ELECTRON JS : Créez des apps desktop multi-plateformes"
                ]
            }
        ]
    }
];

const getIcon = (type) => {
    switch (type) {
        case "graduation":
            return <GraduationCap className="h-5 w-5 text-[#9882ac] mr-2" />;
        case "briefcase":
            return <Briefcase className="h-5 w-5 text-[#9882ac] mr-2" />;
        case "certificate":
            return <Scroll className="h-5 w-5 text-[#9882ac] mr-2" />;
        default:
            return null;
    }
};

export default function About() {
    const [expandedTab, setExpandedTab] = useState(null);
    const refs = useRef({});
    const navbarHeight = 80; // Ajuste cette valeur selon la hauteur de ta navbar

    const toggleTab = (id) => {
        setExpandedTab(expandedTab === id ? null : id);
    };

    useEffect(() => {
        if (expandedTab && refs.current[expandedTab]) {
            // Utilisation de setTimeout pour laisser le temps à l'animation de fermeture de se terminer
            setTimeout(() => {
                const element = refs.current[expandedTab];
                const offset = navbarHeight + 20; // Décalage pour tenir compte de la navbar et d'un peu d'espace
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }, 300); // La durée doit correspondre à l'animation de fermeture
        }
    }, [expandedTab]);

    const contentVariants = {
        collapsed: { opacity: 0, height: 0 },
        expanded: { opacity: 1, height: 'auto' }
    };

    return (
        <section className='text-white mt-16' id="about">
            <h2 className="mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">
                About Me
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between gap-8 items-start py-8 px-4 xl:gap-16 sm:py-6">
                {/* Texte à gauche */}
                <div className="w-full md:w-1/2">
                    <p className='text-base md:text-lg mb-6'>
                        I am a 4th-year engineering student at <Link href="https://centralelille.fr/"><span className="text-[#9882ac]">Ecole Centrale de Lille</span></Link>, specializing in IT development and management. My experience includes software development, AI, and web technologies, with a strong focus on applying innovative solutions to real-world challenges. Passionate about technology, I aim to transition into <span className="text-[#9882ac]">IT consulting</span> after graduation.
                    </p>
                </div>
                {/* Accordéons à droite */}
                <div className="w-full md:w-1/2 space-y-4">
                    {TAB_DATA.map((tab) => (
                        <div key={tab.id} ref={(el) => (refs.current[tab.id] = el)} className="mb-4">
                            <button
                                onClick={() => toggleTab(tab.id)}
                                className={`w-full flex items-center p-3 text-left bg-[#4a4e69] text-white rounded-lg ${expandedTab === tab.id ? 'bg-purple-600' : 'bg-[#4a4e69]'} transition duration-300`}
                            >
                                {getIcon(tab.iconType)}
                                {tab.title}
                            </button>
                            <motion.div
                                className="overflow-hidden"
                                variants={contentVariants}
                                initial="collapsed"
                                animate={expandedTab === tab.id ? "expanded" : "collapsed"}
                                transition={{ duration: 0.3 }}
                            >
                                {expandedTab === tab.id && (
                                    <motion.div className="p-4 bg-[#3b3b58] rounded-b-lg mt-2">
                                        {tab.contents.map((content, index) => (
                                            <div key={index} className="mb-4">
                                                <p className="font-bold text-white">
                                                    {content.institution || content.role || content.name}
                                                </p>
                                                {content.program && <p className="text-[#D1D5DB]">{content.program}</p>}
                                                <p className="text-[#9CA3AF]">{content.date}</p>
                                                {content.details && (
                                                    <ul className="mt-2 text-[#9CA3AF]">
                                                        {content.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex}>- {detail}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
