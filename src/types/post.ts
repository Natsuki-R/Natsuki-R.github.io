export type Image = {
  id: number;
  src: string;
  alt?: string; // for accessibility
};

export type Post = {
  id: string;
  header?: string; // Added header field
  images?: Image[];
  parsedDate: Date; // Storing the actual Date object for easier manipulation
  content?: string;
  links?: string[];
  location?: string;
  tags?: string[];
};
