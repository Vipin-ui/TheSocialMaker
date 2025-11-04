import React, { useState, useEffect, useRef } from 'react';
import type { UserStory } from '../../types';
import Avatar from '../common/Avatar';
import { HeartIcon, MessagesIcon, MenuIcon } from '../Icons';

interface StoryViewerProps {
  initialStory: UserStory;
  allStories: UserStory[];
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ initialStory, allStories, onClose }) => {
  const [currentUserStory, setCurrentUserStory] = useState(initialStory);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const currentStory = currentUserStory.stories[currentStoryIndex];

  const goToNextUser = () => {
    const currentUserIndex = allStories.findIndex(story => story.user.id === currentUserStory.user.id);
    if (currentUserIndex < allStories.length - 1) {
      setCurrentUserStory(allStories[currentUserIndex + 1]);
      setCurrentStoryIndex(0);
    } else {
      onClose();
    }
  };

  const goToPrevUser = () => {
     const currentUserIndex = allStories.findIndex(story => story.user.id === currentUserStory.user.id);
    if (currentUserIndex > 0) {
      setCurrentUserStory(allStories[currentUserIndex - 1]);
      setCurrentStoryIndex(0);
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < currentUserStory.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      goToNextUser();
    }
  };

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
        goToPrevUser();
    }
  };

  useEffect(() => {
    if (timerRef.current) {
        window.clearTimeout(timerRef.current);
    }
    if (!isPaused) {
        timerRef.current = window.setTimeout(goToNextStory, 5000);
    }
    return () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [currentStoryIndex, currentUserStory, isPaused]);
  
  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, currentTarget } = e;
      const { left, width } = currentTarget.getBoundingClientRect();
      const clickPosition = clientX - left;
      
      if(clickPosition < width / 3) {
          goToPrevStory();
      } else {
          goToNextStory();
      }
  };


  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center" onMouseUp={handleMouseUp}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white z-20">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="m13.414 12 7.293 7.293a1 1 0 1 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 1 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 1 1 1.414-1.414L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12Z"></path></svg>
        </button>

        <div className="relative w-full max-w-sm h-[90vh] bg-zinc-900 rounded-lg overflow-hidden" onMouseDown={handleMouseDown}>
            <div className="absolute top-2 left-2 right-2 z-10">
                <div className="flex items-center space-x-1">
                    {currentUserStory.stories.map((_, index) => (
                        <div key={`${currentUserStory.user.id}-${index}`} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                            {index < currentStoryIndex && <div className="h-full bg-white rounded-full w-full"></div>}
                            {index === currentStoryIndex && (
                                <div 
                                    key={currentStory.id}
                                    className="h-full bg-white rounded-full w-0" 
                                    style={{ animation: `progress 5s linear forwards ${isPaused ? 'paused' : 'running'}`}}>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                 <style>{`
                    @keyframes progress {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                `}</style>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                        <Avatar src={currentUserStory.user.avatar} alt={currentUserStory.user.username} size="sm" />
                        <span className="text-white font-semibold text-sm">{currentUserStory.user.username}</span>
                        <span className="text-zinc-400 text-sm">5h</span>
                    </div>
                     <button className="text-white"><MenuIcon /></button>
                </div>
            </div>
            
            <img src={currentStory.imageUrl} className="w-full h-full object-contain" alt="Story" />

            <div className="absolute inset-0 flex">
                <div className="flex-1" onClick={goToPrevStory}></div>
                <div className="flex-1" onClick={goToNextStory}></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center space-x-3">
                    <input 
                        type="text" 
                        placeholder={`Reply to ${currentUserStory.user.username}...`}
                        className="flex-1 bg-transparent border border-zinc-500 rounded-full py-2 px-4 text-white placeholder-zinc-400 text-sm focus:ring-0 focus:border-white"
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                    />
                    <button className="text-white"><HeartIcon className="w-7 h-7" /></button>
                    <button className="text-white"><MessagesIcon className="w-7 h-7" /></button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StoryViewer;
