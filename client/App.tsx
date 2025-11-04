
import React, { useState } from 'react';
import type { Page, UserStory, Post } from './types';
import { MOCK_STORIES } from './constants';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import ReelsPage from './pages/ReelsPage';
import MessagesPage from './pages/MessagesPage';
import StoryViewer from './components/story/StoryViewer';
import ShareModal from './components/share/ShareModal';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [activeStory, setActiveStory] = useState<UserStory | null>(null);
  const [postToShare, setPostToShare] = useState<Post | null>(null);

  const handleStoryClick = (story: UserStory) => {
    setActiveStory(story);
  };

  const handleCloseStory = () => {
    setActiveStory(null);
  };

  const handleOpenShare = (post: Post) => {
    setPostToShare(post);
  };

  const handleCloseShare = () => {
    setPostToShare(null);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onStoryClick={handleStoryClick} onOpenShare={handleOpenShare} />;
      case 'explore':
        return <ExplorePage />;
      case 'reels':
        return <ReelsPage onOpenShare={handleOpenShare} />;
      case 'messages':
        return <MessagesPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onStoryClick={handleStoryClick} onOpenShare={handleOpenShare} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {activeStory && (
        <StoryViewer 
          initialStory={activeStory}
          allStories={MOCK_STORIES}
          onClose={handleCloseStory}
        />
      )}
      {postToShare && (
        <ShareModal
            post={postToShare}
            onClose={handleCloseShare}
        />
      )}
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="w-full md:pl-[72px] lg:pl-[244px] pb-14 md:pb-0">
          {renderPage()}
        </main>
        <MobileNav activePage={activePage} setActivePage={setActivePage} />
      </div>
    </div>
  );
};

export default App;