export type Image = {
  id: number;
  src: string;
  alt?: string; // Added for accessibility
};

export type Post = {
  id: string;
  timeStamp: string;
  date?: Date; // Added parsed date for easier sorting/filtering
  images?: Image[];
  content?: string;
  links?: string[];
  location?: string;
  tags?: string[];
};
