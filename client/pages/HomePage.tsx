
import React, { useState } from 'react';
import { MOCK_POSTS, MOCK_USERS, CURRENT_USER } from '../constants';
import type { UserStory, Post, Comment as CommentType } from '../types';
import StoryTray from '../components/home/StoryTray';
import PostCard from '../components/home/PostCard';
import Avatar from '../components/common/Avatar';
import { HeartIcon, MessagesIcon } from '../components/Icons';
import PostCommentsModal from '../components/comments/PostCommentsModal';

const Suggestions: React.FC = () => (
    <div className="w-80 p-4 hidden lg:block">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
                <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.username} size="lg" />
                <div>
                    <p className="font-semibold text-sm">{CURRENT_USER.username}</p>
                    <p className="text-zinc-500 text-sm">Code Master</p>
                </div>
            </div>
            <button className="text-blue-500 font-semibold text-xs">Switch</button>
        </div>

        <div className="flex justify-between mb-3">
            <p className="text-zinc-500 font-semibold text-sm">Suggested for you</p>
            <button className="text-white font-semibold text-xs">See All</button>
        </div>

        <div className="space-y-3">
            {MOCK_USERS.slice(1, 6).map(user => (
                <div key={user.id} className="flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        <Avatar src={user.avatar} alt={user.username} />
                        <div>
                            <p className="font-semibold text-sm">{user.username}</p>
                            <p className="text-zinc-500 text-xs">Suggested for you</p>
                        </div>
                    </div>
                    <button className="text-blue-500 font-semibold text-xs">Follow</button>
                </div>
            ))}
        </div>
         <p className="text-zinc-600 text-xs mt-6">&copy; 2024 INSTAGRAM CLONE</p>
    </div>
);

interface HomePageProps {
    onStoryClick: (story: UserStory) => void;
    onOpenShare: (post: Post) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStoryClick, onOpenShare }) => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [postForComments, setPostForComments] = useState<Post | null>(null);

  const handleOpenComments = (post: Post) => {
    setPostForComments(post);
  };

  const handleCloseComments = () => {
    setPostForComments(null);
  };

  const handleAddComment = (postId: string, commentText: string) => {
    const newComment: CommentType = {
      id: `c${Date.now()}`,
      user: CURRENT_USER,
      text: commentText,
      timestamp: 'Just now',
    };

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    
    if (postForComments && postForComments.id === postId) {
        setPostForComments(prev => prev ? { ...prev, comments: [...prev.comments, newComment] } : null);
    }
  };

  return (
    <>
      {postForComments && (
        <PostCommentsModal 
          post={postForComments}
          onClose={handleCloseComments}
          onAddComment={handleAddComment}
        />
      )}
      <div className="flex justify-center min-h-screen">
        <div className="w-full md:max-w-[630px] py-4 md:py-8">
          <div className="md:hidden">
            <div className="px-4 flex justify-between items-center">
              <h1 className="text-2xl font-serif">Instagram</h1>
              <div className="flex items-center space-x-4">
                <HeartIcon />
                <MessagesIcon />
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <StoryTray onStoryClick={onStoryClick} />
          </div>
          <div className="mt-4 space-y-4">
            {posts.map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                onOpenComments={() => handleOpenComments(post)}
                onAddComment={handleAddComment}
                onOpenShare={() => onOpenShare(post)}
              />
            ))}
          </div>
        </div>
        <Suggestions />
      </div>
    </>
  );
};

export default HomePage;