export type ViewState = 'home' | 'blogs' | 'games' | 'projects' | 'about' | 'blog-detail';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  preview: string;
  readTime: string;
  content: string;
  tags: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}