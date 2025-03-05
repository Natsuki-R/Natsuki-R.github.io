import { Bookmark } from "../types/bookmark";

export const BOOKMARKS: Bookmark[] = [
  {
    title: "The Most Useful Thing AI Has Ever Done",
    url: "https://www.youtube.com/watch?v=P_fHJIYENdI",
    category: "Technology",
  },
  {
    title: "Deep Dive into LLMs like ChatGPT",
    url: "https://youtu.be/7xTGNNLPyMI?si=ESaocRE00_26BtKd",
    // description:
    //   "The best LLM tutorial for newbies ever! I took some notes as well—check it out!",
    category: "AI & Machine Learning",
    noteUrl: "https://github.com/Natsuki-R/LLM-Study-Notes",
  },
  {
    title: "The Art of Readable Code",
    description: "Nice book.",
    url: "https://mcusoft.wordpress.com/wp-content/uploads/2015/04/the-art-of-readable-code.pdf",
    category: "Software Development",
    noteUrl: "https://qiita.com/Natsuki_R/items/0d31c4ab179b33b7d320",
  },
  {
    title: "Crash Course: Psychology",
    url: "https://thecrashcourse.com/topic/psychology/",
    category: "Education",
  },
  {
    title: "Crash Course: Anatomy & Physiology",
    url: "https://thecrashcourse.com/topic/anatomy/",
    category: "Science",
  },
  {
    title: "Crash Course: Computer Science",
    url: "https://thecrashcourse.com/topic/computerscience/",
    category: "Technology",
  },
  {
    title: "Crash Course: Theater & Drama",
    url: "https://thecrashcourse.com/topic/theaterdrama/",
    category: "Arts",
  },
  {
    title: "Crash Course: Philosophy",
    url: "https://thecrashcourse.com/topic/philosophy/",
    category: "Humanities",
  },
];

export const CHECK_LIST: Bookmark[] = [
  {
    title: "Crash Course: Botany",
    url: "https://thecrashcourse.com/topic/botany/",
    category: "Science",
    completed: false,
  },
];
