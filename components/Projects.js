"use client";  

import { useState } from 'react';
import ProjectTag from "./ProjectTag";
import AnimatedProjectCard from './AnimatedProjectCard';

const PROJECTS_DATA = [
    {
        id: 1,
        title: "AI-Based Iatrogenesis Detection Software",
        description: "Developed an AI-based software for detecting iatrogenic errors in a hospital pharmacy, using granular computing methods in Python and Electron for the front-end.",
        imageUrl: "images/projects/iatro_project.png",
        tags: ["All", "AI", "Software"],
        gitUrl: "https://github.com/username/iatrogenesis-detection",
        previewUrl: null
    },
    {
        id: 2,
        title: "AI-Powered Recruitment Process",
        description: "Developed an AI-driven recruitment system integrated into a showcase website, automating the evaluation of job applications using forms and AI for efficiency and accuracy.",
        imageUrl: "images/projects/taksu_project.png",
        tags: ["All", "AI", "Web", "Automation"],
        gitUrl: null,
        previewUrl: "https://taksu.tech/"
    },
    {
        id: 3,
        title: "Web-Based Cartography Site",
        description: "Created a web application using HTML, CSS, JavaScript, and PHP to map and display specific data points for a dating web app.",
        imageUrl: "images/projects/cartography_project.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/Firemain/TWE.git",
        previewUrl: null
    },
    {
        "id": 4,
        "title": "Showcase Websites for Businesses",
        "description": "Developed custom showcase websites for various types of businesses with a modern and responsive approach, several features and optimized SEO to enhance online visibility.",
        "imageUrl": "images/projects/batimentplus.png",
        "tags": ["All", "Web", "Design", "Showcase"],
        "gitUrl": null,
        "previewUrl": null
    },
    {
        id: 5,
        title: "Online Shop Bobdefif",
        description: "Launched an e-commerce website for my local business, using Next.js with a own made CMS and stripe for payment processing.",
        imageUrl: "images/projects/bobdefif_project.png",
        tags: ["All", "Web", "Shop"],
        gitUrl: "https://github.com/Firemain/savestore.git",
        previewUrl: "https://bobdefif.vercel.app/"
    },
    {
        id: 6,
        title: "DJ Transition AI Software",
        description: "Developed an AI-powered DJ transition software using Python and Flask for the backend, and Next.js for the frontend. The software automates seamless transitions between songs using beat synchronization and audio analysis.",
        imageUrl: "images/projects/webradio.jpg",
        tags: ["All", "AI", "Software", "Web"],
        gitUrl: "https://github.com/Firemain",
        previewUrl: null
    },
    {
        "id": 7,
        "title": "Veloseo SaaS",
        "description": "Currently developing a SaaS named Veloseo aimed at assisting and automating SEO for clients using AI and automated tools. The platform features a Next.js frontend and a Python (Flask) backend, integrating various APIs for keyword research and SEO optimization.",
        "imageUrl": "images/projects/veloseo_bg.png",
        "tags": ["All", "Web", "SaaS", "SEO", "AI"],
        "gitUrl": null,
        "previewUrl": null
    },        
    {
        id: 8,
        title: "Augmented Reality Escape Game",
        description: "Designed and developed a mobile escape game using Kotlin, integrating augmented reality features for an immersive at-home experience.",
        imageUrl: "images/projects/aR_project.png",
        tags: ["All", "Mobile", "AR"],
        gitUrl: null,
        previewUrl: null
    },
    {
        id: 9,
        title: "Software Development at Legrand France",
        description: "Worked as a software development intern, understanding software architecture, AGILE project management, and web development using PHP Symfony.",
        imageUrl: "images/projects/legrand_project.png",
        tags: ["All", "Web", "Software", "Internship"],
        gitUrl: null,
        previewUrl: "https://xlpro-portal.legrand.com/login"
    }
];

export default function Projects() {
    const [tag, setTag] = useState("All");

    const handleTags = (newTag) => {
        setTag(newTag);
    };

    const filtreProjects = PROJECTS_DATA.filter((project) =>
        project.tags.includes(tag)
    );

    return (
        <section className="mt-6 px-4 md:px-8" id="projects">
            <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">
                My Projects and Works
            </h2>

            <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
                <ProjectTag name="All" isSelected={tag === "All"} onClick={handleTags}></ProjectTag>
                <ProjectTag name="Web" isSelected={tag === "Web"} onClick={handleTags}></ProjectTag>
                <ProjectTag name="Mobile" isSelected={tag === "Mobile"} onClick={handleTags}></ProjectTag>
                <ProjectTag name="Software" isSelected={tag === "Software"} onClick={handleTags}></ProjectTag>
                <ProjectTag name="AI" isSelected={tag === "AI"} onClick={handleTags}></ProjectTag>
                <ProjectTag name="Design" isSelected={tag === "Design"} onClick={handleTags}></ProjectTag>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {filtreProjects.map((project) => (
                    <AnimatedProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}