"use client";  

import { useState } from "react";
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag";


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
        title: "Web-Based Cartography Site",
        description: "Created a web application using HTML, CSS, JavaScript, and PHP to map and display specific data points for a dating web app.",
        imageUrl: "images/projects/cartography_project.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/Firemain/TWE.git",
        previewUrl: null
    },
    {
        id: 3,
        title: "Augmented Reality Escape Game",
        description: "Designed and developed a mobile escape game using Kotlin, integrating augmented reality features for an immersive at-home experience.",
        imageUrl: "images/projects/aR_project.png",
        tags: ["All", "Mobile", "AR"],
        gitUrl: "https://github.com/username/augmented-reality-escape-game",
        previewUrl: null
    },
    {
        id: 4,
        title: "Software Development at Legrand France",
        description: "Worked as a software development intern, understanding software architecture, AGILE project management, and web development using PHP Symfony.",
        imageUrl: "images/projects/legrand_project.png",
        tags: ["All", "Web", "Software", "Internship"],
        gitUrl: null,
        previewUrl: "https://xlpro-portal.legrand.com/login"
    },
    {
        id: 5,
        title: "Online Shop Bobdefif",
        description: "Launched an e-commerce website for my local business, using Node.js and stripe for payment processing.",
        imageUrl: "images/projects/bobdefif_project.png",
        tags: ["All", "Web", "Shop"],
        gitUrl: "https://github.com/Firemain/savestore.git",
        previewUrl: "https://bobdefif.vercel.app/"
    },
    {
        id: 6,
        title: "Mechanical Hand Prosthesis for Paralympic Athletes",
        description: "Led the design and development of a mechanical hand prosthesis to enhance grip for Paralympic athletes, managing the CAD modeling and 3D printing process.",
        imageUrl: "images/projects/prothesis_project.png",
        tags: ["All", "CAD", "3D Printing", "Leadership"],
        gitUrl: null,
        previewUrl: null
    },
    {
        id: 7,
        title: "Wind Turbine Design and Prototyping",
        description: "Led the design and fabrication of a wind turbine prototype, focusing on blade optimization and mechanical efficiency for small-scale energy production.",
        imageUrl: "images/projects/wind_turbine_project.png",
        tags: ["All", "Mechanical Design", "Prototyping", "Leadership"],
        gitUrl: null,
        previewUrl: null
    }
    
    
];


export default function Projects() {

    const [tag, setTag] = useState("All");

    const handleTags = (newTag) => {
        setTag(newTag);
    }

    const filtreProjects = PROJECTS_DATA.filter((project) =>
        project.tags.includes(tag)
    );

    return (
        <section className="mt-6" id="projects">
    <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">
            My Projects and Works
    </h2>

    <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag name="All" isSelected={tag === "All"} onClick={handleTags}></ProjectTag>
        <ProjectTag name="Web" isSelected={tag === "Web"} onClick={handleTags}></ProjectTag>
        <ProjectTag name="Mobile" isSelected={tag === "Mobile"} onClick={handleTags}></ProjectTag>
    </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filtreProjects.map((project) => (
                <ProjectCard key={project.id} 
                title={project.title} 
                description={project.description} 
                imageUrl={project.imageUrl} 
                gitUrl={project.gitUrl} 
                previewUrl={project.previewUrl}></ProjectCard>
            ))}
        </div>
        </section>
    )
}