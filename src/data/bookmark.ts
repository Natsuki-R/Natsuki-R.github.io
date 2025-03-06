import { Bookmark, Podcast } from "../types/bookmark";

export const BOOKMARKS: Bookmark[] = [
  {
    title: "Deep Dive into LLMs like ChatGPT",
    url: "https://youtu.be/7xTGNNLPyMI?si=ESaocRE00_26BtKd",
    // description:
    //   "The best LLM tutorial for newbies ever! I learned a lot. Thanks.",
    description: "I learned a lot. Thanks.",
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
    title: "The Most Useful Thing AI Has Ever Done",
    url: "https://www.youtube.com/watch?v=P_fHJIYENdI",
    category: "Technology",
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

export const PODCAST_LIST: Podcast[] = [
  {
    title: "Joe Experience With Naval",
    // url: "https://open.spotify.com/episode/6a6OCbv8Zrk2f2CZMNxhyc?si=d70c6e27cdb14560",
    url: "https://www.youtube.com/watch?v=3qHkcs3kG44",
  },
  {
    title: "Naval Rivikant On Happiness, reducing Anxiety And love",
    url: "https://open.spotify.com/episode/24bTtgIVEDgrkeFe0rQxiR?si=7r9fxjDJQkmR454EysWSkg",
  },
  {
    title: "Naval How to get Rich",
    url: "https://open.spotify.com/episode/7eMQHZ36LT2fzxFzfdvOFz?si=9xitxu3ZQpib0FrwvlLe_g",
  },
  {
    title: "Steven Bartlett - The Savings Expert: “Do Not Buy A House!”",
    url: "https://open.spotify.com/episode/6JoRHviqsaRyWhxmASmJ6r?si=GzqmsZ-sQkah5Xv9mDZ1cQ",
  },
];
