import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project2.jpg";
import project4 from "../assets/project2.jpg";
import { project } from "../types/project";

export const PROJECTS: project[] = [
  {
    title: "GLTF Viewer",
    description: "A GLTF 3d model viewer built with Three.js and Next.js.",
    url: "https://demo-gltf-viewer.vercel.app/",
    imageUrl: project1,
  },
  {
    title: "XXX App",
    description: "Coming soon...",
    // description:
    //   "A responsive weather application using React Native and a third-party API.",
    url: "",
    imageUrl: project2,
  },
  {
    title: "XXX App",
    description: "Coming soon...",
    url: "",
    imageUrl: project3,
  },
  {
    title: "XXX App",
    description: "Coming soon...",
    url: "",
    imageUrl: project4,
  },
];
