
import React, { useState, useMemo } from 'react';
import type { Post } from '../../types';
import { MOCK_USERS, CURRENT_USER } from '../../constants';
import Avatar from '../common/Avatar';

interface ShareModalProps {
  post: Post;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ post, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sentTo, setSentTo] = useState<Set<string>>(new Set());

    const friends = useMemo(() => MOCK_USERS.filter(u => u.id !== CURRENT_USER.id), []);

    const filteredFriends = useMemo(() => {
        if (!searchQuery) return friends;
        return friends.filter(friend => friend.username.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, friends]);
    
    const handleSend = (userId: string) => {
        setSentTo(prev => new Set(prev).add(userId));
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center" onClick={onClose}>
            <div 
                className="bg-zinc-900 rounded-xl overflow-hidden w-[90vw] h-[70vh] max-w-md flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex items-center justify-center p-3 border-b border-zinc-800 relative">
                    <h2 className="font-semibold">Share</h2>
                    <button onClick={onClose} className="absolute top-1/2 right-3 -translate-y-1/2 text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="m13.414 12 7.293 7.293a1 1 0 1 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 1 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 1 1 1.414-1.414L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12Z"></path></svg>
                    </button>
                </header>
                <div className="p-3 border-b border-zinc-800">
                     <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-800 rounded-lg py-2 px-4 text-sm placeholder-zinc-500 focus:ring-0 border-none"
                    />
                </div>
                <div className="flex-1 p-3 overflow-y-auto">
                    <p className="font-semibold text-sm mb-2">Suggested</p>
                    <div className="space-y-2">
                        {filteredFriends.map(user => (
                            <div key={user.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Avatar src={user.avatar} alt={user.username} />
                                    <div>
                                        <p className="font-semibold text-sm">{user.username}</p>
                                        <p className="text-zinc-500 text-xs">Suggested for you</p>
                                    </div>
                                </div>
                                {sentTo.has(user.id) ? (
                                    <button className="bg-zinc-800 text-white font-semibold text-sm px-4 py-1.5 rounded-lg" disabled>
                                        Sent
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleSend(user.id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-1.5 rounded-lg"
                                    >
                                        Send
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
