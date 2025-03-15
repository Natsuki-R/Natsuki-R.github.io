import { Post } from "../types/post";

const POSTS: Post[] = [
  {
    id: "000000",
    images: [{ id: 0, src: "/img/music_stay.png", alt: "movie" }],
    parsedDate: new Date(2021, 2, 10, 23, 52),
  },
  {
    id: "000000",
    content: `One of the best benefits of negative emotions is, negative emotions drive people to change in order to avoid the same threat in the future. However, if the original cause of the negative emotions is resolved or even slightly relieved, the motivation for change disappears. This leaves people more vulnerable to facing the same bad situation again, which isn’t ideal. 
    It reminds me of a Chinese proverb that captures this precisely: /n
    好了伤疤忘了疼 (‘Once the scar heals, the pain is forgotten’).`,
    links: [
      "https://open.spotify.com/episode/5CBUg4x9dn7WHgokAkrvr3?si=taD5vgYBTY68ajeiU1zgdw&t=1102",
    ],
    parsedDate: new Date(2024, 11, 6, 10, 52),
  },
  {
    id: "000000",
    content: `Just tried Tavus AI for the first time—pretty impressive. Way better than the text/audio AI interaction in the Replika app.
            We never truly realize how crucial facial expressions are in communication. Though it’s still not perfect, I can see its future applications, especially in psychology and therapy.
            Also reminds me of the electronic pet from Ted Chiang’s sci-fi story. Anyway, I want Detroit: Become Human to become real—real real.`,
    links: ["https://www.tavus.io/"],
    parsedDate: new Date(2025, 2, 9, 4, 38),
  },
  {
    id: "000000",
    content: `Sci-Fi Books I finished and recommend:/n
            Isaac Asimov: Foundation (1951), Foundation and Empire (1952), Second Foundation (1953)/n
            Ted Chiang: Author of Stories of Your Life and Others`,
    parsedDate: new Date(2025, 2, 11, 20, 23),
  },
  {
    id: "000000",
    content: `Went to the Left to Die show tonight.🤘 Had my first-ever conversation with real metal band members (The Convalescence). 
            and I even touched the vocalist’s 1.5-meter-long hair with my own hands… and guess what? Not a wig. 
            What's more, Andrew Jones—a man too cool to be true, the first real artist I’ve ever encountered in my life. I just realized how sweet Andrew is because he actually lowered his head to my level just to hear me (since I’m small while he’s way too tall)./n
            What a magical night. Still feels unreal.
            `,
    parsedDate: new Date(2025, 3, 15, 23, 59),
  },
  {
    id: "000000",
    content: `Work will expand to fill the amount of time you allowed for it. /nParkinson’s law`,
    parsedDate: new Date(2024, 6, 21, 8, 3),
  },
  {
    id: "000000",
    content: `Just shared a train with a suited Japanese man in his 50s, carrying a briefcase but wearing a big fancy headset around his neck. 
      Before he got off, he shook his head and loudly said, 'Go home and have masturbation!' /n
      The wackiest guy I've ever met in Tokyo.`,
    parsedDate: new Date(2024, 5, 10, 19, 50),
  },
  {
    id: "000000",
    content:
      'Turns out that my "I refuse to learn a new skill unless I\'m immediately good at it" tactic is sabotaging my entire life.',
    parsedDate: new Date(2022, 4, 27, 23, 31),
  },
  {
    id: "000000",
    content:
      "I wish the rain would last forever, only when I listen to Thom Yorke.",
    parsedDate: new Date(2024, 4, 20, 9, 33),
    links: ["https://open.spotify.com/track/2Q2t0qJx2AlPb3vvDeTWni"],
  },
  {
    id: "000000",
    content: `“Despite knowing the journey and where it leads, I embrace it. And I welcome every moment of it.”/n
    After all those years, this is still my favorite line from *Arrival (2016)*, ever./n/n
    And I find the following phrase, from the original novel *Story of Your Life* written by Ted Chiang, beautiful too:/n
    “My consciousness becomes a half-century-long ember burning outside time.”/n
    Resonates with me.`,
    parsedDate: new Date(2024, 1, 20, 22, 48),
  },
  {
    id: "000000",
    content:
      "Watched One Hundred Years of Solitude today. I read the book about eight years ago, back in high school. Though I remember almost none of the details, the world García Márquez created—the Colombia of his imagination—has lingered in my thoughts and subconscious ever since. That magical land… one day, I will set foot on you.",
    parsedDate: new Date(2025, 1, 24, 21, 30),
  },
  {
    id: "000000",
    content: "One of my happiest nights in Japan! Love metal forever!",
    parsedDate: new Date(2025, 1, 22, 23, 21),
  },
  {
    id: "000000",
    content:
      "reading this book right now. Leaving plausibility aside, it’s packed with a crazy amount of concepts I’ve never heard before. Very interesting.",
    parsedDate: new Date(2025, 1, 10, 16, 38),
  },
  {
    id: "000000",
    content: "It’s alright mom. I’m dancing every day.",
    parsedDate: new Date(2025, 1, 23, 20, 50),
  },
  {
    id: "000000",
    content: "我在梦里找寻第二种人生",
    parsedDate: new Date(2022, 3, 18, 8, 1),
  },
  {
    id: "000000",
    content: "真实远比虚假更触不可及/n在文字的胚胎里，我重获新生",
    parsedDate: new Date(2022, 4, 29, 10, 57),
  },
  {
    id: "000000",
    content: `"If you want to manage something, keep track of it at first."`,
    parsedDate: new Date(2025, 2, 10, 10, 57),
  },
];

export const sortedPosts = POSTS.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime()); // Sort by date, newest first
