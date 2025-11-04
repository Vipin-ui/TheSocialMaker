
import React from 'react';
import type { Post } from '../../types';
import { HeartIcon, CommentIcon } from '../Icons';

interface PostGridProps {
  posts: Post[];
}

const PostGridItem: React.FC<{ post: Post }> = ({ post }) => (
    <div className="group relative aspect-square">
        <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-6">
            <div className="flex items-center text-white font-semibold">
                <HeartIcon className="w-5 h-5 mr-2" />
                <span>{post.likes}</span>
            </div>
            <div className="flex items-center text-white font-semibold">
                <CommentIcon className="w-5 h-5 mr-2" />
                <span>{post.comments.length}</span>
            </div>
        </div>
    </div>
);


const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map(post => (
        <PostGridItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
