
import React from 'react';
import { MOCK_POSTS } from '../constants';
import PostGrid from '../components/profile/PostGrid';

const ExplorePage: React.FC = () => {
  // Shuffling posts to make it look like a real explore page
  const shuffledPosts = React.useMemo(() => MOCK_POSTS.slice().sort(() => Math.random() - 0.5), []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Explore</h1>
      <PostGrid posts={shuffledPosts} />
    </div>
  );
};

export default ExplorePage;
