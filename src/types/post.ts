export type Image = {
  id: number;
  src: string;
  alt?: string; // for accessibility
};

export type Post = {
  id: string;
  images?: Image[];
  parsedDate: Date; // Storing the actual Date object for easier manipulation  images?: Image[];
  content?: string;
  links?: string[];
  location?: string;
  tags?: string[];
};
