
import React, { useState } from 'react';
import { CURRENT_USER, MOCK_POSTS } from '../constants';
import ProfileHeader from '../components/profile/ProfileHeader';
import PostGrid from '../components/profile/PostGrid';
import { GridIcon, ReelsIcon, BookmarkIcon, TaggedIcon } from '../components/Icons';

type ProfileTab = 'posts' | 'reels' | 'saved' | 'tagged';

const ProfileTabs: React.FC<{ activeTab: ProfileTab; setActiveTab: (tab: ProfileTab) => void }> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'posts', icon: <GridIcon className="w-3 h-3"/>, label: 'POSTS' },
        { id: 'reels', icon: <ReelsIcon className="w-3 h-3"/>, label: 'REELS' },
        { id: 'saved', icon: <BookmarkIcon className="w-3 h-3"/>, label: 'SAVED' },
        { id: 'tagged', icon: <TaggedIcon className="w-3 h-3"/>, label: 'TAGGED' },
    ];

    return (
        <div className="border-t border-zinc-800 flex justify-center">
            {tabs.map(tab => (
                <button 
                    key={tab.id} 
                    onClick={() => setActiveTab(tab.id as ProfileTab)}
                    className={`flex items-center space-x-2 py-3 px-4 text-xs font-semibold tracking-widest -mt-px transition-colors ${
                        activeTab === tab.id 
                        ? 'border-t border-white text-white' 
                        : 'text-zinc-500 border-t border-transparent'
                    }`}
                >
                    {tab.icon}
                    <span>{tab.label}</span>
                </button>
            ))}
        </div>
    );
};


const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ProfileTab>('posts');

    return (
        <div className="max-w-4xl mx-auto">
            <ProfileHeader user={CURRENT_USER} />
            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="p-1 md:p-4">
               <PostGrid posts={MOCK_POSTS} />
            </div>
        </div>
    );
};

export default ProfilePage;
