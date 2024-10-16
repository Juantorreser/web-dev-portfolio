// src/components/Projects.jsx
import React from "react";

const projects = [
    {
        name: "E-commerce Website",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "GameZar",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "To-do WebApp",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "Hotel Landing Page",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "Airline Dashboard",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "Video Editor Portfolio",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
    {
        name: "Delivery Food WebApp",
        stack: "HTML5 | CSS | React | Tailwind | Express | Node.js",
        codeLink: "#",
        liveLink: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-semibold">{project.name}</h3>
                            <p className="mt-2 text-gray-600">{project.stack}</p>
                            <div className="mt-4">
                                <a
                                    href={project.codeLink}
                                    className="text-blue-600 hover:underline">
                                    Get Code
                                </a>{" "}
                                |
                                <a
                                    href={project.liveLink}
                                    className="ml-2 text-blue-600 hover:underline">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
