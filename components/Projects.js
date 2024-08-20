"use client";  

import { useState } from "react";
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag";


const PROJECTS_DATA = [
    {
        id: 1,
        title: "AI-Based Iatrogenesis Detection Software",
        description: "Developed an artificial intelligence-based software aimed at detecting iatrogenic errors in a hospital pharmacy setting, leveraging Python and pyQT.",
        imageUrl: "images/projects/3.png",
        tags: ["All", "AI", "Software"],
        gitUrl: "https://github.com/username/iatrogenesis-detection",
        previewUrl: "https://example.com/iatrogenesis-detection-preview"
    },
    {
        id: 2,
        title: "Web-Based Cartography Site",
        description: "Created a web application using HTML, CSS, JavaScript, and PHP to map and display specific data points for various use cases.",
        imageUrl: "images/projects/3.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/username/cartography-site",
        previewUrl: "https://example.com/cartography-site-preview"
    },
    {
        id: 3,
        title: "Augmented Reality Escape Game",
        description: "Designed and developed a mobile escape game using Kotlin, integrating augmented reality features for an immersive at-home experience.",
        imageUrl: "images/projects/3.png",
        tags: ["All", "Mobile", "AR"],
        gitUrl: "https://github.com/username/augmented-reality-escape-game",
        previewUrl: "https://example.com/augmented-reality-escape-game-preview"
    },
    {
        id: 4,
        title: "Software Development at Legrand France",
        description: "Worked as a software development intern, focusing on software architecture, AGILE project management, and front-end web development using PHP Symfony and Next.js.",
        imageUrl: "images/projects/3.png",
        tags: ["All", "Web", "Software", "Internship"],
        gitUrl: null,
        previewUrl: "https://example.com/legrand-software-development-preview"
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
        <div className="mt-6">
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
        </div>
    )
}