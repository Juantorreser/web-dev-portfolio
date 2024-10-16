// src/components/Projects.jsx
import React from "react";
import {projects} from "../constants/constants";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-20 k2d text-white/95">
      <div className="container mx-auto px-4">
        <h2 className="sectionTitle text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
