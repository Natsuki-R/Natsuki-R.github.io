import React from "react"
import "./Projects.css"
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project1.jpg"
import project3 from "../assets/project1.jpg"
import project4 from "../assets/project1.jpg"

const Projects: React.FC = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "A full-stack e-commerce solution built with React and Node.js.",
            imageUrl: project1,
        },
        {
            title: "Weather App",
            description:
                "A responsive weather application using React Native and a third-party API.",
            imageUrl: project2,
        },
        {
            title: "Task Management Tool",
            description:
                "A productivity app built with React Native and Firebase for real-time updates.",
            imageUrl: project3,
        },
        {
            title: "Rental App",
            description:
                "A modern rental application built with React Native and Node.js.",
            imageUrl: project4,
        },
    ]

    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.imageUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
