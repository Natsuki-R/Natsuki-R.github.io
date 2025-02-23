import project1 from "../assets/project1.jpg"
import project2 from "../assets/project1.jpg"
import project3 from "../assets/project1.jpg"
import project4 from "../assets/project1.jpg"
import { project } from "../types/project"

export const PROJECTS: project[] = [
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