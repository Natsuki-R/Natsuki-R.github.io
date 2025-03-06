import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
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
    title: "Legacy Personal Site",
    description:
      "My personal website project at 2023, built with vanilla HTML, CSS, Javascript.",
    url: "https://natsuki-site-legacy.vercel.app/",
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
