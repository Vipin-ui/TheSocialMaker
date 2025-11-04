
import React from 'react';
import type { Post } from '../../types';
import Avatar from '../common/Avatar';
import { MenuIcon, HeartIcon, CommentIcon, ShareIcon, BookmarkIcon, VerifiedIcon } from '../Icons';

interface PostCardProps {
  post: Post;
  onOpenComments: () => void;
  onAddComment: (postId: string, commentText: string) => void;
  onOpenShare: () => void;
}


const PostCard: React.FC<PostCardProps> = ({ post, onOpenComments, onAddComment, onOpenShare }) => {
  const [isLiked, setIsLiked] = React.useState(post.isLiked);
  const [isSaved, setIsSaved] = React.useState(post.isSaved);
  const [comment, setComment] = React.useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(post.id, comment.trim());
      setComment('');
    }
  };

  return (
    <article className="w-full max-w-xl mx-auto border-b border-zinc-800 pb-4">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Avatar src={post.user.avatar} alt={post.user.username} hasStory />
          <span className="font-semibold text-sm flex items-center">{post.user.username}
             {post.user.id === 'u2' && <VerifiedIcon className="ml-1 w-3 h-3 text-blue-500" />}
          </span>
          <span className="text-zinc-500 text-sm">· {post.timestamp}</span>
        </div>
        <button className="text-white">
          <MenuIcon />
        </button>
      </div>

      <div className="w-full aspect-square bg-zinc-900">
        <img src={post.imageUrl} alt={`Post by ${post.user.username}`} className="w-full h-full object-cover" />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsLiked(!isLiked)}>
              <HeartIcon className={`w-7 h-7 transition-colors ${isLiked ? 'text-red-500 fill-current' : ''}`} />
            </button>
            <button onClick={onOpenComments}><CommentIcon className="w-7 h-7" /></button>
            <button onClick={onOpenShare}><ShareIcon className="w-7 h-7" /></button>
          </div>
          <button onClick={() => setIsSaved(!isSaved)}>
            <BookmarkIcon className={`w-7 h-7 transition-colors ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        <p className="font-semibold text-sm mb-1">{post.likes.toLocaleString()} likes</p>
        
        <p className="text-sm">
          <span className="font-semibold">{post.user.username}</span>
          <span className="ml-2">{post.caption}</span>
        </p>
        
        {post.comments.length > 0 && (
            <button onClick={onOpenComments} className="text-zinc-500 text-sm mt-1">
                View all {post.comments.length} comments
            </button>
        )}

        <form onSubmit={handleCommentSubmit} className="mt-2 flex items-center">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-transparent border-none text-sm placeholder-zinc-500 focus:ring-0" 
          />
          {comment.trim() && (
             <button type="submit" className="text-blue-500 font-semibold text-sm">Post</button>
          )}
        </form>
      </div>
    </article>
  );
};

export default PostCard;