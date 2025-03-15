import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { project } from "../types/project";

export const PROJECTS: project[] = [
  {
    title: "Digital-Archive",
    description: "paintings, C4D models, diy... all those stupid sh*t that I made before :)",
    url: "https://digital-archive-natsuki.vercel.app/",
    imageUrl: project4,
  },
  {
    title: "Legacy Personal Site",
    description:
      "My personal website project at 2023, built with vanilla HTML, CSS, Javascript.",
    url: "https://natsuki-site-legacy.vercel.app/",
    imageUrl: project2,
  },
  {
    title: "GLTF Viewer",
    description: "A GLTF 3d model viewer built with Three.js and Next.js.",
    url: "https://demo-gltf-viewer.vercel.app/",
    imageUrl: project1,
  },
  {
    title: "3D Cemetery",
    description: "You can design your own cemetery funeral experience with 3D models.",
    url: "https://3d-cemetery.vercel.app/",
    imageUrl: project3,
  },
];
