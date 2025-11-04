export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
}

export interface StoryItem {
  id: string;
  imageUrl: string;
  duration?: number;
}

export interface UserStory {
    user: User;
    stories: StoryItem[];
    isViewed?: boolean;
}

export type Page = 'home' | 'explore' | 'reels' | 'messages' | 'profile';