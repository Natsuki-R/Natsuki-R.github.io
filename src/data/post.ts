import { Post } from "../types/post";

const POSTS: Post[] = [
    {
        timeStamp: "2025/2/24 at 21:30",
        content: "Watched One Hundred Years of Solitude today. I read the book about eight years ago, back in high school. Though I remember almost none of the details, the world García Márquez created—the Colombia of his imagination—has lingered in my thoughts and subconscious ever since. That magical land… one day, I will set foot on you.",
        links: ['https://www.netflix.com/jp-en/title/81087583'],
    },
    {
        timeStamp: "2025/2/22 at 23:21",
        content: "One of my happiest nights in Japan! Love metal forever!",
        links: ['https://www.meetup.com/tokyo-hard-rock-metal-meetup-karaoke-bar-meeting/events/305749766/'],
    },
    {
        timeStamp: "2025/2/10 at 16:38",
        links: ['https://thenetworkstate.com/'],
        content: "reading this book right now. Leaving plausibility aside, it’s packed with a crazy amount of concepts I’ve never heard before. Very interesting.",
    },
    {
        timeStamp: "2025/2/23 at 20:50",
        content: "It’s alright. You see, I’m dancing every day.",
        //     location: 'Tokyo Dome'
    },
    {
        timeStamp: "2022/4/18 at 08:01",
        content: "我在梦里找寻第二种人生",
    },
    {
        timeStamp: "2022/5/29 at 10:57",
        content: "真实远比虚假更触不可及/n在文字的胚胎里，我重获新生",
    }
];

export const sortedPosts = POSTS.sort((a, b) => {
    const parseTimeStamp = (timeStamp: string): number => {
        // Convert "YYYY/MM/DD at HH:mm" to "YYYY-MM-DD HH:mm"
        const formatted = timeStamp.replace(" at ", " ").replace(/\//g, "-");
        return new Date(formatted).getTime();
    };

    return parseTimeStamp(b.timeStamp) - parseTimeStamp(a.timeStamp);
});

