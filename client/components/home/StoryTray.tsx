
import React, { useRef, useState, useEffect } from 'react';
import { MOCK_STORIES } from '../../constants';
import type { UserStory } from '../../types';
import Avatar from '../common/Avatar';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

const StoryItem: React.FC<{ userStory: UserStory; onClick: () => void }> = ({ userStory, onClick }) => (
    <button onClick={onClick} className="flex flex-col items-center space-y-1 flex-shrink-0">
        <Avatar src={userStory.user.avatar} alt={userStory.user.username} size="lg" hasStory={!userStory.isViewed} />
        <span className="text-xs text-zinc-400 w-16 truncate text-center">{userStory.user.username}</span>
    </button>
)

interface StoryTrayProps {
    onStoryClick: (story: UserStory) => void;
}

const StoryTray: React.FC<StoryTrayProps> = ({ onStoryClick }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkForScroll = () => {
        const el = scrollContainerRef.current;
        if (el) {
            const hasOverflow = el.scrollWidth > el.clientWidth;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
        }
    };
    
    useEffect(() => {
        const timeoutId = setTimeout(() => checkForScroll(), 100);
        window.addEventListener('resize', checkForScroll);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', checkForScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = el.clientWidth * 0.8;
            el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative">
            {canScrollLeft && (
                <button 
                    onClick={() => scroll('left')} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 z-10 hidden md:block transition-opacity duration-300"
                    aria-label="Scroll left"
                >
                    <ChevronLeftIcon className="w-4 h-4 text-black/80" />
                </button>
            )}

            <div className="px-4 py-3 border-b border-zinc-800 md:rounded-lg md:border md:bg-zinc-900/30 overflow-hidden">
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkForScroll}
                    className="flex space-x-4 overflow-x-auto pb-2 -mb-2 scrollbar-hide"
                >
                    {MOCK_STORIES.map(userStory => (
                        <StoryItem key={userStory.user.id} userStory={userStory} onClick={() => onStoryClick(userStory)} />
                    ))}
                </div>
                <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
            </div>
            
            {canScrollRight && (
                <button 
                    onClick={() => scroll('right')} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 z-10 hidden md:block transition-opacity duration-300"
                    aria-label="Scroll right"
                >
                    <ChevronRightIcon className="w-4 h-4 text-black/80" />
                </button>
            )}
        </div>
    );
};

export default StoryTray;