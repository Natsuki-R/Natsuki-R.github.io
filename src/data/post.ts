import { Post } from "../types/post";

const POSTS: Post[] = [
  {
    id: "000000",
    timeStamp: "2021/3/10 at 23:52",
    images: [{ id: 0, src: "/img/music_stay.png", alt: "movie" }],
  },
  {
    id: "000000",
    timeStamp: "2024/12/6 at 10:52",
    content: `One of the best benefits of negative emotions is, negative emotions drive people to change in order to avoid the same threat in the future. However, if the original cause of the negative emotions is resolved or even slightly relieved, the motivation for change disappears. This leaves people more vulnerable to facing the same bad situation again, which isn’t ideal. 
    It reminds me of a Chinese proverb that captures this precisely: /n
    好了伤疤忘了疼 (‘Once the scar heals, the pain is forgotten’).`,
    links: [
      "https://open.spotify.com/episode/5CBUg4x9dn7WHgokAkrvr3?si=taD5vgYBTY68ajeiU1zgdw&t=1102",
    ],
  },
  {
    id: "000000",
    timeStamp: "2025/3/9 at 04:38",
    content: `Just tried Tavus AI for the first time—pretty impressive. Way better than the text/audio AI interaction in the Replika app.
            We never truly realize how crucial facial expressions are in communication. Though it’s still not perfect, I can see its future applications, especially in psychology and therapy.
            Also reminds me of the electronic pet from Ted Chiang’s sci-fi story. Anyway, I want Detroit: Become Human to become real—real real.`,
    links: ["https://www.tavus.io/"],
  },
  {
    id: "000000",
    timeStamp: "2025/3/11 at 20:23",
    content: `Sci-Fi Books I finished and recommend:/n
            Isaac Asimov: Foundation (1951), Foundation and Empire (1952), Second Foundation (1953)/n
            Ted Chiang: Author of Stories of Your Life and Others`,
  },
  {
    id: "000000",
    timeStamp: "2024/7/21 at 08:03",
    content: `Work will expand to fill the amount of time you allowed for it. /nParkinson’s law`,
  },
  {
    id: "000000",
    timeStamp: "2024/6/10 at 19:50",
    content: `Just shared a train with a suited Japanese man in his 50s, carrying a briefcase but wearing a big fancy headset around his neck. 
      Before he got off, he shook his head and loudly said, 'Go home and have masturbation!' /n
      The wackiest guy I've ever met in Tokyo.`,
  },
  {
    id: "000000",
    timeStamp: "2022/5/27 at 23:31",
    content:
      'Turns out that my "I refuse to learn a new skill unless I\'m immediately good at it" tactic is sabotaging my entire life.',
  },
  {
    id: "000000",
    timeStamp: "2024/5/20 at 09:33",
    content:
      "I wish the rain would last forever, only when I listen to Thom Yorke.",
    links: ["https://open.spotify.com/track/2Q2t0qJx2AlPb3vvDeTWni"],
  },
  {
    id: "000000",
    timeStamp: "2024/2/20 at 22:48",
    content: `“Despite knowing the journey and where it leads, I embrace it. And I welcome every moment of it.”/n
    After all those years, this is still my favorite line from *Arrival (2016)*, ever./n/n
    And I find the following phrase, from the original novel *Story of Your Life* written by Ted Chiang, beautiful too:/n
    “My consciousness becomes a half-century-long ember burning outside time.”/n
    Resonates with me.`,
  },
  {
    id: "000000",
    timeStamp: "2025/2/24 at 21:30",
    content:
      "Watched One Hundred Years of Solitude today. I read the book about eight years ago, back in high school. Though I remember almost none of the details, the world García Márquez created—the Colombia of his imagination—has lingered in my thoughts and subconscious ever since. That magical land… one day, I will set foot on you.",
    links: ["https://www.netflix.com/jp-en/title/81087583"],
  },
  {
    id: "000000",
    timeStamp: "2025/2/22 at 23:21",
    content: "One of my happiest nights in Japan! Love metal forever!",
    links: [
      "https://www.meetup.com/tokyo-hard-rock-metal-meetup-karaoke-bar-meeting/events/305749766/",
    ],
    location: "カラオケの鉄人 新宿歌舞伎町一番街店",
  },
  {
    id: "000000",
    timeStamp: "2025/2/10 at 16:38",
    links: ["https://thenetworkstate.com/"],
    content:
      "reading this book right now. Leaving plausibility aside, it’s packed with a crazy amount of concepts I’ve never heard before. Very interesting.",
  },
  {
    id: "000000",
    timeStamp: "2025/2/23 at 20:50",
    content: "It’s alright mom. I’m dancing every day.",
  },
  {
    id: "000000",
    timeStamp: "2022/4/18 at 08:01",
    content: "我在梦里找寻第二种人生",
  },
  {
    id: "000000",
    timeStamp: "2022/5/29 at 10:57",
    content: "真实远比虚假更触不可及/n在文字的胚胎里，我重获新生",
  },
  {
    id: "000000",
    timeStamp: "2025/3/10 at 10:57",
    content: `"If you want to manage something, keep track of it at first."`,
  },
];

export const processedPosts = POSTS.map((post) => {
  const formatted = post.timeStamp.replace(" at ", " ").replace(/\//g, "-");
  return {
    ...post,
    date: new Date(formatted),
  };
});

// Sort posts by date (newest first)
export const sortedPosts = [...processedPosts].sort((a, b) => {
  return (b.date?.getTime() || 0) - (a.date?.getTime() || 0);
});
