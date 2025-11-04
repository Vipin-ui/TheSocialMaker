
import React from 'react';
import { MOCK_POSTS } from '../constants';
import type { Post } from '../types';
import Avatar from '../components/common/Avatar';
import { HeartIcon, CommentIcon, ShareIcon, MenuIcon } from '../components/Icons';

interface ReelItemProps {
    post: Post;
    onOpenShare: (post: Post) => void;
}

const ReelItem: React.FC<ReelItemProps> = ({ post, onOpenShare }) => (
    <div className="relative h-full w-full snap-start flex-shrink-0 rounded-lg overflow-hidden">
        <video
            src={`https://p-tk.com/v.mp4`} // Placeholder video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white w-full flex justify-between items-end">
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Avatar src={post.user.avatar} alt={post.user.username} />
                    <span className="font-semibold text-sm">{post.user.username}</span>
                    <button className="border border-white px-3 py-1 text-xs rounded-md">Follow</button>
                </div>
                <p className="text-sm">{post.caption.substring(0, 50)}...</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <button className="flex flex-col items-center">
                    <HeartIcon className="w-8 h-8"/>
                    <span className="text-xs">{post.likes}</span>
                </button>
                <button className="flex flex-col items-center">
                    <CommentIcon className="w-8 h-8" />
                    <span className="text-xs">{post.comments.length}</span>
                </button>
                <button onClick={() => onOpenShare(post)}><ShareIcon className="w-8 h-8" /></button>
                <button><MenuIcon className="w-8 h-8" /></button>
            </div>
        </div>
    </div>
)

interface ReelsPageProps {
    onOpenShare: (post: Post) => void;
}

const ReelsPage: React.FC<ReelsPageProps> = ({ onOpenShare }) => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="relative h-[90vh] w-[45vh] max-w-full max-h-full bg-zinc-900 rounded-xl overflow-hidden">
            <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory">
                {MOCK_POSTS.map(post => (
                    <ReelItem key={post.id} post={post} onOpenShare={onOpenShare} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default ReelsPage;