"use client";   

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';
const TAB_DATA = [
    {
        title: "Education",
        id: "Education",
        contents: (
            <div className="text-base md:text-lg">
                <p className="font-bold text-white">Ecole Centrale de Lille, France</p>
                <p className="text-[#D1D5DB]">Generalist Engineering Program</p>
                <p className="text-[#9CA3AF]">2019 - 2025</p>
                <div className="mt-2">
                    <p className="font-semibold text-[#D1D5DB]">Relevant Coursework:</p>
                    <ul className="mt-1 text-[#9CA3AF]">
                        <li>- Web 2.0 Technologies (HTML, CSS, JavaScript, PHP)</li>
                        <li>- Mobile Programming and Augmented Reality (Kotlin)</li>
                        <li>- Project Management (MOOC Gdp)</li>
                        <li>- Advanced Algorithmics (C language)</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        contents: (
            <div className="text-base md:text-lg">
                <p className="font-bold text-[#D1D5DB]">Software Development Intern - Legrand France, Limoges</p>
                <p className="text-[#9CA3AF]">February 2023 - Present</p>
                <div className="mt-2">
                    <p className="font-semibold text-[#D1D5DB]">Responsibilities:</p>
                    <ul className="mt-1 text-[#9CA3AF]">
                        <li>- Software Architecture and Frontend Development</li>
                        <li>- AGILE Project Management</li>
                        <li>- Development using PHP Symfony Framework</li>
                    </ul>
                </div>

                <p className="mt-4 font-bold text-[#D1D5DB]">AI Software Design Intern - Central Pharmacy of Lille</p>
                <p className="text-[#9CA3AF]">October 2022 - March 2024</p>
                <div className="mt-2">
                    <p className="font-semibold text-[#D1D5DB]">Responsibilities:</p>
                    <ul className="mt-1 text-[#9CA3AF]">
                        <li>- Developed AI-based software for iatrogenic error detection</li>
                        <li>- Python and pyQT for Frontend Development</li>
                        <li>- Applied Granular Computing methods</li>
                    </ul>
                </div>

                <p className="mt-4 font-bold text-[#D1D5DB]">Campus Ambassador - Lydia Solutions, Lille</p>
                <p className="text-[#9CA3AF]">September 2023 - Present</p>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "Certifications",
        contents: (
            <div className="text-base md:text-lg">
                <p className="font-semibold text-[#D1D5DB]">MOOC Project Management (GDP)</p>
                <p className="font-semibold text-[#D1D5DB]">Udemy certifications</p>
                    <ul className="mt-1 text-[#9CA3AF]">
                        <li>- Next.js 14 & React - The Complete Guide</li>
                        <li>- Python & Machine Learning for Financial Analysis</li>
                        <li>- ELECTRON JS : Créez des apps desktop multi-plateformes</li>
                    </ul>
                <p className="font-semibold text-[#D1D5DB]">FreeCodeCamp certifications</p>
                    <ul className="mt-1 text-[#9CA3AF]">
                        <li>- Data Analysis with Python</li>
                        <li>- Responsive web designer</li>
                    </ul>
                <p className="font-semibold text-[#D1D5DB]">MOOC Santé et Sécurité au Travail, INRS</p>
            </div>
        )
    },
    {
        title: "Skills",
        id: "Skills",
        contents: (
            <div className="text-base md:text-lg">
                <p className="font-semibold text-[#D1D5DB]">Programming Languages:</p>
                <p className="text-[#9CA3AF]">Python, Java, C, JavaScript, PHP</p>
                
                <p className="mt-2 font-semibold text-[#D1D5DB]">Web Technologies:</p>
                <p className="text-[#9CA3AF]">HTML, CSS, Next.js, PHP, Symfony</p>
                
                <p className="mt-2 font-semibold text-[#D1D5DB]">Mobile Development:</p>
                <p className="text-[#9CA3AF]">Kotlin</p>
                
                <p className="mt-2 font-semibold text-[#D1D5DB]">CAD:</p>
                <p className="text-[#9CA3AF]">Onshape</p>
                
                <p className="mt-2 font-semibold text-[#D1D5DB]">Tools:</p>
                <p className="text-[#9CA3AF]">Microsoft Office, Canva, Arduino</p>
            </div>
        )
    }
];



const About = () => {
    const[tabs, setTabs] = useState("Education");
    const [isPending, startTransition ] = useTransition();

    const handleTabs = (id) => {
        startTransition(() => {
            setTabs(id);
        });
    }

    return (
        <section className='text-white mt-24' id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-6">
                <Image src="/images/aboutme.png" alt="About" width={500} height={500} className="rounded-lg" />
                <div className='mt-6 md:mt-0'>
                    <h2 className="mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">About Me</h2>
                    <p className='text-base md:text-lg'>
                        I am a 4th-year engineering student at <Link href="https://centralelille.fr/"><span className="text-[#9882ac]">Ecole Centrale de Lille</span></Link>, and I am specializing in IT development and management. My experience includes software development, AI, and web technologies, with a strong focus on applying innovative solutions to real-world challenges. Passionate about technology, I aim to transition into <span className="text-[#9882ac]">IT consulting</span> after graduation.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabs("Education")} active={tabs === "Education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabs("Experience")} active={tabs === "Experience"}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabs("Certifications")} active={tabs === "Certifications"}>Certifications</TabButton>
                        <TabButton selectTab={() => handleTabs("Skills")} active={tabs === "Skills"}>Skills</TabButton>

                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tabs).contents}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;