"use client";   

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';
const TAB_DATA = [
    {
        title : "Education",
        id: "Education",
        contents : (
            <ul className='list-disc pl-6'>
                <li className='text-base md:text-lg'>Ecole Centrale de Lille, France</li>
                <li className='text-base md:text-lg'>Master of Engineering in IT Development and Management</li>
                <li className='text-base md:text-lg'>2018 - 2023</li>
            </ul>
        )
    },
    {
        title : "Experience",
        id: "Experience",
        contents: (
            <ul className='list-disc pl-6'>
                <li className='text-base md:text-lg'>Software Developer Intern</li>
                <li className='text-base md:text-lg'>Microsoft, Paris, France</li>
                <li className='text-base md:text-lg'>July 2021 - September 2021</li>
            </ul>
        )
    },
    {
        title : "Certifications",
        id: "Certifications",
        contents: (
            <ul className='list-disc pl-6'>
                <li className='text-base md:text-lg'>AWS Certified Solutions Architect - Associate</li>
                <li className='text-base md:text-lg'>Microsoft Certified: Azure AI Engineer Associate</li>
                <li className='text-base md:text-lg'>Microsoft Certified: Azure Developer Associate</li>
            </ul>
        )
    },
    {
        title : "Skills",
        id: "Skills",
        contents: (
            <ul className='list-disc pl-6'>
                <li className='text-base md:text-lg'>Python, Java, C++, JavaScript</li>
                <li className='text-base md:text-lg'>React, Node.js, Django, Flask</li>
                <li className='text-base md:text-lg'>AWS, Azure, GCP</li>
            </ul>
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
        <section className='text-white mt-24'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-6">
                <Image src="/images/aboutme.png" alt="About" width={500} height={500} className="rounded-lg" />
                <div className='mt-6 md:mt-0'>
                    <h2 className="mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">About Me</h2>
                    <p className='text-base md:text-lg'>
                    I am a 4th-year engineering student at <Link href="https://centralelille.fr/" >Ecole Centrale de Lille</Link>, and I am specializing in IT development and management. My experience includes software development, AI, and web technologies, with a strong focus on applying innovative solutions to real-world challenges. Passionate about technology, I aim to transition into IT consulting after graduation.
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