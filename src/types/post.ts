export type Image = {
    id: number;
    src: string;
};

export type Post = {
    timeStamp: string;
    images?: Image[];
    content: string;
    links?: string[];
    location?: string;
};