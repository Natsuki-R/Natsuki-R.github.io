export type Artist = {
    name: string;
    albums: Album[];
    logo?: string;
    genre: string;
};

export type Album = {
    id: number,
    name?: string;
    artistName?: string;
    releasedYear: number;
    coverUrl?: string;
    isListened: boolean;
    ranking: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};
