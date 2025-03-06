import React from "react";
import "./Projects.css";
import { PROJECTS } from "../data/project";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Preview Link
                </a>
              )}
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
