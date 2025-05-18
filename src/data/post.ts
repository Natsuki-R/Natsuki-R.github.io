import { Post } from "../types/post";

// RULE: 
// 
// parsedDate's Month needs -1, JS's rule
// new line: <br>
// bold: ** 
// italic: * 
// bold and italic: ***
// blankspace: &nbsp&nbsp&nbsp&nbsp

const POSTS: Post[] = [
  {
    id: "0",
    content: `Then she left me, but the music stayed.`,
    images: [{ id: 0, src: "/posts/music-stay.png", alt: "movie" }],
    parsedDate: new Date(2021, 2, 10, 23, 52),
  },
  {
    id: "0",
    content: `[Podcast](https://open.spotify.com/episode/5CBUg4x9dn7WHgokAkrvr3?si=taD5vgYBTY68ajeiU1zgdw&t=1102) : One of the best benefits of negative emotions is, negative emotions drive people to change in order to avoid the same threat in the future. However, if the original cause of the negative emotions is resolved or even slightly relieved, the motivation for change disappears. This leaves people more vulnerable to facing the same bad situation again, which isn’t ideal. 
    It reminds me of a Chinese proverb that captures this precisely: <br>
    好了伤疤忘了疼 (‘Once the scar heals, the pain is forgotten’).`,
    parsedDate: new Date(2024, 11, 6, 10, 52),
  },
  {
    id: "0",
    content: `Just tried [Tavus AI](https://www.tavus.io/) for the first time—pretty impressive. Way better than the text/audio AI interaction in the Replika app.
            We never truly realize how crucial facial expressions are in communication. Though it’s still not perfect, I can see its future applications, especially in psychology and therapy.
            Also reminds me of the electronic pet from Ted Chiang’s sci-fi story. Anyway, I want Detroit: Become Human to become real—real real.`,
    parsedDate: new Date(2025, 2, 9, 4, 38),
  },
  {
    id: "0",
    content: `Sci-Fi Books I finished and recommend:<br>
            Isaac Asimov: Foundation (1951), Foundation and Empire (1952), Second Foundation (1953)<br>
            Ted Chiang: Author of Stories of Your Life and Others`,
    parsedDate: new Date(2025, 2, 11, 20, 23),
  },
  {
    id: "0",
    content: `Went to the [Left to Die](https://x.com/SoundworksJ/status/1839470008599986551?lang=en) show tonight.🤘 Had my first-ever conversation with real metal band members ([The Convalescence](https://tconband.com/)). 
            and I even touched the vocalist’s 1.5-meter-long hair with my own hands… and guess what? Not a wig. 
            What's more, [Andrew Jones](https://andrewjonesart.com/)—a man too cool to be true, the first real artist I’ve ever encountered in my life. I just realized how sweet Andrew is because he actually lowered his head to my level just to hear me (since I’m small while he’s way too tall).<br>
            What a magical night. Still feels unreal.
            `,
    parsedDate: new Date(2025, 2, 14, 23, 59),
  },
  {
    id: "0",
    content: `Work will expand to fill the amount of time you allowed for it. <br>Parkinson’s law`,
    parsedDate: new Date(2024, 6, 21, 8, 3),
  },
  {
    id: "0",
    content: `Just shared a train with a suited Japanese man in his 50s, carrying a briefcase but wearing a big fancy headset around his neck. 
      Before he got off, he shook his head and loudly said, 'Go home and have masturbation!' <br>
      The wackiest guy I've ever met in Tokyo.`,
    parsedDate: new Date(2024, 5, 10, 19, 50),
  },
  {
    id: "0",
    content:
      `Turns out that my ***I refuse to learn a new skill unless I'm immediately good at it*** tactic is sabotaging my entire life.`,
    parsedDate: new Date(2022, 4, 27, 23, 31),
  },
  {
    id: "0",
    content:
      "I wish the rain would last forever, only when I listen to [Thom Yorke](https://open.spotify.com/track/2Q2t0qJx2AlPb3vvDeTWni).",
    parsedDate: new Date(2024, 4, 20, 9, 33),
  },
  {
    id: "0",
    content: `“**Despite knowing the journey and where it leads, I embrace it. And I welcome every moment of it.**” 
    After all those years, this is still my favorite line from [Arrival (2016)](https://www.imdb.com/title/tt2543164/), ever.
    And I find the following phrase, from the original novel [Story of Your Life](https://raley.english.ucsb.edu/wp-content/uploads/Reading/Chiang-story.pdf) written by Ted Chiang, beautiful too:
    *My consciousness becomes a half-century-long ember burning outside time.*
    Resonates with me.`,
    parsedDate: new Date(2024, 1, 20, 22, 48),
  },
  {
    id: "0",
    content:
      "Watched [One Hundred Years of Solitude](https://www.netflix.com/jp-en/title/81087583) today. I read the book about eight years ago, back in high school. Though I remember almost none of the details, the world García Márquez created—the Colombia of his imagination—has lingered in my thoughts and subconscious ever since. That magical land… one day, I will set foot on you.",
    parsedDate: new Date(2025, 1, 24, 21, 30),
  },
  {
    id: "0",
    content: "One of my happiest [nights](https://www.meetup.com/tokyo-hard-rock-metal-meetup-karaoke-bar-meeting/events/305749766/?eventOrigin=group_past_events) in Japan! Love metal forever!",
    parsedDate: new Date(2025, 1, 22, 23, 21),
  },
  {
    id: "0",
    content:
      "reading [this book](https://thenetworkstate.com/) right now. Leaving plausibility aside, it’s packed with a crazy amount of concepts I’ve never heard before. Very interesting.",
    parsedDate: new Date(2025, 1, 10, 16, 38),
  },
  {
    id: "0",
    content: "It’s alright mom. I’m dancing every day.",
    parsedDate: new Date(2025, 1, 23, 20, 50),
  },
  {
    id: "0",
    content: "我在梦里找寻第二种人生",
    parsedDate: new Date(2022, 3, 18, 8, 1),
  },
  {
    id: "0",
    content: "真实远比虚假更触不可及<br>在文字的胚胎里，我重获新生",
    parsedDate: new Date(2022, 4, 29, 10, 57),
  },
  {
    id: "0",
    content: `"If you want to manage something, keep track of it at first."`,
    parsedDate: new Date(2025, 2, 10, 10, 57),
  },
  {
    id: "0",
    content: `Music is the only true time machine.<br>It often associates with times and places and people. It's interesting how people can connect through music, like we are also sharing those memories, even experiencing something from someone's life.`,
    parsedDate: new Date(2025, 3, 13, 7, 3),
  },
  {
    id: "0",
    header: "Movie: Interview with the Vampire(1994)",
    content: `I never knew Brad Pitt was such a beauty. At first, I thought it was a gay couple. I mean, who would believe that two insanely attractive men live together for hundreds of years without a single spark between them?!<br>But then I thought this film is truly about vampires struggle with immortality, which mortals long for but can never get. Would you accept vampire's immortality offer?`,
    parsedDate: new Date(2025, 3, 5, 17, 22),
  },
  {
    id: "0",
    content: `I like the cover of [Album Anno 1696 - Insomnium](https://centurymedia.bandcamp.com/album/anno-1696), reminds me of [The Birth of Aphrodite](https://www.uffizi.it/en/artworks/birth-of-venus), the same composition with Andrew's *What it's hidden from you I will proclaim to you*.`,
    parsedDate: new Date(2025, 2, 29, 8, 39),
  },
  {
    id: "0",
    header: "Movie: Velvet Goldmine(1998)",
    content: `I watched it because I like Ewan McGregor in [Trainspotting](https://www.imdb.com/title/tt0117951/). It was actually one of the first music films I ever watched, a total blast and cultural shock. As a high school girl crammed with stupid, boring homework every day, I had no idea a rock scene like that even existed. I want to rewatch it to see if it still excites me the same. It put a spark of rebellion in me.`,
    parsedDate: new Date(2025, 2, 29, 23, 25),
  },
  {
    id: "0",
    header: "Movie: Possession(1981)",
    content: `This [movie](https://www.imdb.com/title/tt0082933/) is a German cult classic (Sam Neill is a NZ actor). It's raw, chaotic, unsettling and dives deep into emotional and physical extremes. 
    But the notorious nasty scene might not for everyone. It reminds me of [Antichrist](https://www.imdb.com/title/tt0870984), and a bit of [Lost Highway](https://www.imdb.com/title/tt0116922/).<br><br>
    What impressed me most was the hysterical performance by the [Isabelle Adjani](https://www.imdb.com/name/nm0000254/bio/), especially she getting very sexy with an octopus-like [Cthulhu creature](https://villains.fandom.com/wiki/Monster_(Possession)). 
    Maybe director was inspired by [Hokusai](https://en.wikipedia.org/wiki/Hokusai)'s famous painting [The Dream of the Fisherman's Wife](https://en.wikipedia.org/wiki/The_Dream_of_the_Fisherman%27s_Wife)?<br><br>
    Isabelle Adjani is so beautiful. Even though the movie is confusing, it still made me want to see more of her work—she brings such soul and intensity to the film. And she is so convincingly hysterical. She really brings a strange tension to the dialogue.`,
    parsedDate: new Date(2025, 3, 13, 7, 7),
  },
  {
    id: "0",
    content: `Maybe it's novelty but if you like it, do it. Keep doing it until it's not fun anymore.`,
    parsedDate: new Date(2025, 3, 13, 6, 8),
  },
  {
    id: "0",
    content: `Euthanasia can be murder, suicide can be free will. The double standard.`,
    parsedDate: new Date(2025, 3, 5, 3, 23),
  },
  {
    id: "0",
    content: `Perhaps the pursuit of aesthetics is also a form of addiction.`,
    parsedDate: new Date(2025, 3, 5, 3, 21),
  },
  {
    id: "0",
    content: `I find it strange that everyone I like has something to do with music, more about a feeling rather than just appearance. It's like my brain is all rational when it comes to books and movies, but with music, sensitivity just takes over. Maybe because love is sentimental? I have no clue.`,
    parsedDate: new Date(2025, 3, 13, 8, 17),
  },
  {
    id: "0",
    content: `Art is an extension of our flesh. Creation is a revolt against death. Those who are unproductive choose instead to bring new life into the world.`,
    parsedDate: new Date(2025, 3, 5, 2, 51),
  },
  {
    id: "0",
    content: `I found this [tunnel](https://maps.app.goo.gl/Dmunuy3virC8RDzb8?g_st=com.google.maps.preview.copy) with huge paintings on the walls.<br>It seems like a government art project. 
    I also stood still for a while to see people’s reactions. In around 10 minutes, countless people passed by, and I’d say 90% didn’t even glance at them. It’s unbelievable how negligent people are about their surroundings.
    Do artists observe people react—or not react—to their own works in a museum? How do they feel ? 
    Is it necessary to encourage more people to at least take a moment to appreciate art, or should we just let them be?
    `,
    parsedDate: new Date(2025, 3, 8, 12, 42),
  },
  {
    id: "0",
    content: `Easter egg: The riff melodies of [I'm Broken - Pantera](https://www.youtube.com/watch?v=2-V8kYT1pvE) and [The Ocean- Led Zeppelin](https://www.youtube.com/watch?v=oqAmnEKlIZw) are quite similar. I searched and found no direct evidence proving it's stolen or a tribute to LZ. Honestly, I love both. I struggled with this plagiarism question before and eventually let it go. As long as the adaptation is good—sometimes better—I'm fine with it. 
    <br><br>"Plagiarism or influence? Perhaps it is a fine line between the two. And Led Zep copied/stole from lots of people so I don't mind so much if someone steals from them. I'm Broken is a great track and it sounds quite different to The Ocean so I think its a valid and original artistic expression."`,
    parsedDate: new Date(2025, 2, 23, 20, 34),
  },
  {
    id: "0",
    content: `[There Will Be Blood (2007)](https://www.imdb.com/title/tt0469494/) was not as good as I expected, but I enjoyed the final scene. 
    <br>*Capitalism and capital* & *Religion and faith*. 
    <br> - Faith said to capital that they were best friends.<br> - Capital killed faith.<br> - Capital became the true Third Revelation(or it always is?).`,
    parsedDate: new Date(2025, 4, 18, 12, 29),
  },
  {
    id: "0",
    content: `Nothing serious here. You see the timestamp? I can even build my own time machine :)`,
    parsedDate: new Date(2025, 11, 31, 0, 0),
  },
  {
    id: "0",
    content: `If I think of Disco Elysium as a game, I can never truly enjoy it. But if I treat it as a visual novel, everything flows so smoothly.`,
    parsedDate: new Date(2025, 2, 9, 11, 20),
  },
  {
    id: "0",
    content: `The future book will be like git repository.`,
    parsedDate: new Date(2025, 1, 2, 14, 40),
  },
  {
    id: "0",
    content: `看完《孽子》再来漫步台北，所有街道、店铺、人和事都变得不一样了。没有文化的城市是空洞的。`,
    parsedDate: new Date(2025, 0, 5, 20, 48),
  },
  {
    id: "0",
    content: `Taking a train in Tokyo or drinking green tea? Hope your math skills are sharper than your taste buds :)`,
    images: [{ id: 0, src: "/posts/math-quiz-on-train.jpg", alt: "" }],
    parsedDate: new Date(2024, 5, 7, 8, 40),
  },
  {
    id: "0",
    content: `Petals are burying this feathered ghost,<br>ants are helping its return to dust`,
    images: [{ id: 0, src: "/posts/bird-corpse.jpg", alt: "" }],
    parsedDate: new Date(2025, 3, 19, 13, 50),
  },
  {
    id: "0",
    content: `[Thom Yorke 'Everything' Tour](https://www.youtube.com/watch?v=G8kEtdk5lJA) has one of the best concert stage designs that I’ve ever seen, really amazing visual effects.`,
    parsedDate: new Date(2024, 10, 24, 12, 6),
  },
  {
    id: "0",
    content: `So far in my life, there’s no problem that can’t be solved by reading and exercising. And if it can’t, just read more`,
    parsedDate: new Date(2025, 0, 26, 22, 21),
  },
  {
    id: "0",
    content: `皇居河边散步，朋友问我为什么转码。之前也被很多人问过，但第一次我这样答道：
    **前二十年的人生一直被感性支配，厌倦了为爱、为一些无形的概念而疯狂后，我想，或许做一些此前从不擅长的理性的东西，能抑制自己感性的无止境膨胀。**我知道这答案本身也很感性，但也最像我自己。两年多过去，我代码依然写得很烂，也清楚自己不像优秀的coder那般热爱代码，十年后是否还在这个行业，也无法预见。
    但从未后悔过尝试，这是我的好奇心，是每天早晨我睁开双眼的动力。<br>我逐渐学会欣赏自己感性的部分，它很柔软，我也因此而独一无二。`,
    parsedDate: new Date(2025, 0, 26, 23, 13),
  },
  {
    id: "0",
    content: `听了几期納瓦尔等人的[播客](https://t.co/eG9GPfUw1W)，一些想法。
    <br>技术的确在把世界推向去中心化，数字游民越来越多，社交媒体上充斥着财富自由者•自由职业者推动个体化浪潮的声音。婚姻、氏族、垄断企业这些传统制度像旧容器，装不下新人类的多样性需求。
    但“沉默的大多数”的声音是否被忽视了？东亚社会里的我观察到，依赖制度的人不在少数，且不是每个人都愿意改变、有成为数字游民的独立能力。
    納瓦尔说现在真正有能力控制民众思想的人是各大IT龙头公司的算法工程师。这个挺有意思，控制“嘴”在多大程度上能影响“耳朵”呢？
    <br><br>未来社会在个体化浪潮中摇摆，法国pacs同居法是个好例子：当制度为不同群体定制弹性空间，矛盾就能转化为进化动力。 
    但除非技术确实呈指数性爆炸进步，否则真正的去中心化社会不会在我有限的生命里到来。
    在技术上下赌注是不是就是赌算法？`,
    parsedDate: new Date(2025, 1, 3, 11, 40),
  },
  {
    id: "0",
    content: `My life philosophy: independence, curiosity (aha moment), healthy.<br>keep those in mind and don’t be distracted.`,
    parsedDate: new Date(2025, 1, 16, 17, 45),
  },
  {
    id: "0",
    content: `I dreamt about something wild:
    **a mother sleeps with her own son to stay young**. Each time she gives birth to a new child, she grows younger, while the child grows up naturally. When the son reaches the right age, she makes love with him again, becoming even younger, until she’s back at the start of her life.
    <br><br>If human life can live backward, goes from elderliness to infancy, rather than from innocence to decay, would you choose to live that way?`,
    parsedDate: new Date(2025, 2, 20, 7, 55),
  },
  {
    id: "0",
    content: `a contemporary art by Darek Grabus. the shadows of some figures in this postcard are not straight or parallel, deliberate choice or just mistake? no clue.`,
    images: [{ id: 0, src: "/posts/passerby.jpg", alt: "" }],
    parsedDate: new Date(2025, 2, 21, 4, 31),
  },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
  // {
  //   id: "0",
  //   content: ``,
  //   parsedDate: new Date(2025, 11, 31, 0, 0),
  // },
];

export const sortedPosts = POSTS.sort(
  (a, b) => b.parsedDate.getTime() - a.parsedDate.getTime()
); // Sort by date, newest first
