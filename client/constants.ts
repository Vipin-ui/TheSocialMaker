import type { User, Post, UserStory, Comment } from './types';

export const MOCK_USERS: User[] = [
  { id: 'u1', username: 'code_master', avatar: 'https://picsum.photos/seed/u1/48/48' },
  { id: 'u2', username: 'react_dev', avatar: 'https://picsum.photos/seed/u2/48/48' },
  { id: 'u3', username: 'travel_bug', avatar: 'https://picsum.photos/seed/u3/48/48' },
  { id: 'u4', username: 'foodie_queen', avatar: 'https://picsum.photos/seed/u4/48/48' },
  { id: 'u5', username: 'art_lover', avatar: 'https://picsum.photos/seed/u5/48/48' },
  { id: 'u6', username: 'nature_geek', avatar: 'https://picsum.photos/seed/u6/48/48' },
  { id: 'u7', username: 'space_explorer', avatar: 'https://picsum.photos/seed/u7/48/48' },
  { id: 'u8', username: 'music_maniac', avatar: 'https://picsum.photos/seed/u8/48/48' },
  { id: 'u9', username: 'gamer_god', avatar: 'https://picsum.photos/seed/u9/48/48' },
  { id: 'u10', username: 'design_diva', avatar: 'https://picsum.photos/seed/u10/48/48' },
  { id: 'u11', username: 'fitness_fanatic', avatar: 'https://picsum.photos/seed/u11/48/48' },
  { id: 'u12', username: 'book_worm', avatar: 'https://picsum.photos/seed/u12/48/48' },
  { id: 'u13', username: 'movie_critic', avatar: 'https://picsum.photos/seed/u13/48/48' },
  { id: 'u14', username: 'pet_lover', avatar: 'https://picsum.photos/seed/u14/48/48' },
  { id: 'u15', username: 'diy_expert', avatar: 'https://picsum.photos/seed/u15/48/48' },
  { id: 'u16', username: 'history_buff', avatar: 'https://picsum.photos/seed/u16/48/48' },
];

export const CURRENT_USER: User = MOCK_USERS[0];

const MOCK_COMMENTS: Comment[] = [
    { id: 'c1', user: MOCK_USERS[1], text: 'This looks amazing!', timestamp: '2h' },
    { id: 'c2', user: MOCK_USERS[2], text: 'Wow, great shot!', timestamp: '1h' },
    { id: 'c3', user: MOCK_USERS[3], text: 'I want to go there!', timestamp: '30m' },
];

export const MOCK_POSTS: Post[] = Array.from({ length: 20 }, (_, i) => ({
  id: `p${i + 1}`,
  user: MOCK_USERS[i % MOCK_USERS.length],
  imageUrl: `https://picsum.photos/seed/p${i + 1}/600/750`,
  caption: `This is a beautiful landscape I captured. What do you guys think? #${i % 2 === 0 ? 'nature' : 'travel'} #photography`,
  likes: Math.floor(Math.random() * 1000) + 50,
  comments: MOCK_COMMENTS.slice(0, Math.floor(Math.random() * 3) + 1),
  timestamp: `${i + 1}h ago`,
  isLiked: i % 3 === 0,
  isSaved: i % 4 === 0,
}));

export const MOCK_STORIES: UserStory[] = MOCK_USERS.map((user, i) => ({
    user: user,
    stories: Array.from({ length: (i % 3) + 1 }, (_, j) => ({
        id: `s${i + 1}-${j + 1}`,
        imageUrl: `https://picsum.photos/seed/s${i + 1}-${j + 1}/540/960`,
    })),
    isViewed: i > 3,
}));

export const MOCK_MESSAGES = MOCK_USERS.slice(1).map(user => ({
  id: `m-${user.id}`,
  user: user,
  lastMessage: `Hey, how are you doing? Let's catch up soon!`,
  timestamp: `${Math.floor(Math.random() * 10) + 1}m`,
  unread: Math.random() > 0.7,
}));