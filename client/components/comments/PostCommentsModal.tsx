
import React, { useState, useRef, useEffect } from 'react';
import type { Post, Comment as CommentType } from '../../types';
import { CURRENT_USER } from '../../constants';
import Avatar from '../common/Avatar';
import { HeartIcon, CommentIcon, ShareIcon, BookmarkIcon, VerifiedIcon, MenuIcon } from '../Icons';

interface PostCommentsModalProps {
  post: Post;
  onClose: () => void;
  onAddComment: (postId: string, commentText: string) => void;
}

const CommentItem: React.FC<{ comment: CommentType }> = ({ comment }) => (
    <div className="flex items-start space-x-3 py-2">
        <Avatar src={comment.user.avatar} alt={comment.user.username} size="sm" />
        <div className="text-sm">
            <p>
                <span className="font-semibold">{comment.user.username}</span>
                <span className="ml-2">{comment.text}</span>
            </p>
            <div className="flex space-x-3 text-xs text-zinc-500 mt-1">
                <span>{comment.timestamp}</span>
                <button className="font-semibold">Reply</button>
            </div>
        </div>
    </div>
);

const PostCommentsModal: React.FC<PostCommentsModalProps> = ({ post, onClose, onAddComment }) => {
    const [comment, setComment] = useState('');
    const commentsEndRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            onAddComment(post.id, comment.trim());
            setComment('');
        }
    };

    useEffect(() => {
        commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [post.comments]);

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center" onClick={onClose}>
            <button onClick={onClose} className="absolute top-4 right-4 text-white z-20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="m13.414 12 7.293 7.293a1 1 0 1 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 1 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 1 1 1.414-1.414L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12Z"></path></svg>
            </button>
            <div 
                className="bg-zinc-900 rounded-lg overflow-hidden w-[95vw] h-[90vh] max-w-5xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-1/2 lg:w-3/5 bg-black flex items-center justify-center">
                    <img src={post.imageUrl} alt={`Post by ${post.user.username}`} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col">
                    <header className="flex items-center justify-between p-4 border-b border-zinc-800">
                        <div className="flex items-center space-x-3">
                            <Avatar src={post.user.avatar} alt={post.user.username} hasStory />
                            <span className="font-semibold text-sm flex items-center">{post.user.username}
                                {post.user.id === 'u2' && <VerifiedIcon className="ml-1 w-3 h-3 text-blue-500" />}
                            </span>
                        </div>
                        <button className="text-white"><MenuIcon /></button>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex items-start space-x-3 pb-4 border-b border-zinc-800 mb-4">
                            <Avatar src={post.user.avatar} alt={post.user.username} size="sm" />
                            <div className="text-sm">
                                <p>
                                    <span className="font-semibold">{post.user.username}</span>
                                    <span className="ml-2">{post.caption}</span>
                                </p>
                                <div className="text-xs text-zinc-500 mt-1">
                                    <span>{post.timestamp}</span>
                                </div>
                            </div>
                        </div>

                        {post.comments.map(c => <CommentItem key={c.id} comment={c} />)}
                        <div ref={commentsEndRef} />
                    </div>
                    <footer className="p-4 border-t border-zinc-800 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button><HeartIcon className={`w-7 h-7 transition-colors ${post.isLiked ? 'text-red-500 fill-current' : ''}`} /></button>
                                <button><CommentIcon className="w-7 h-7" /></button>
                                <button><ShareIcon className="w-7 h-7" /></button>
                            </div>
                            <button><BookmarkIcon className={`w-7 h-7 transition-colors ${post.isSaved ? 'fill-current' : ''}`} /></button>
                        </div>
                        <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center">
                                <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.username} size="sm" />
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full bg-transparent border-none text-sm placeholder-zinc-500 focus:ring-0"
                                />
                                <button type="submit" className="text-blue-500 font-semibold text-sm disabled:text-blue-500/50" disabled={!comment.trim()}>Post</button>
                            </div>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PostCommentsModal;
