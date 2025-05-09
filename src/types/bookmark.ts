export interface Bookmark {
  title: string;
  description?: string;
  url: string;
  noteUrl?: string;
  category?: string;
  completed?: boolean;
}

export interface Podcast {
  title: string;
  url: string;
}
