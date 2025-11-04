
import React from 'react';
import type { Page } from '../../types';
import { CURRENT_USER } from '../../constants';
import Avatar from '../common/Avatar';
import { HomeIcon, ExploreIcon, ReelsIcon, CreateIcon, MessagesIcon } from '../Icons';

interface MobileNavProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', icon: <HomeIcon /> },
    { id: 'explore', icon: <ExploreIcon /> },
    { id: 'reels', icon: <ReelsIcon /> },
    { id: 'create', icon: <CreateIcon /> },
    { id: 'messages', icon: <MessagesIcon /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 p-2 z-30 md:hidden">
      <div className="flex justify-around items-center">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id as Page)}
            className="p-2"
          >
            {item.id === 'home' && activePage === 'home' 
                ? <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h5V12h-3V9.03a6.005 6.005 0 0 0-11.996 0V12H2v10h5V16.545Z"></path></svg>
                : item.icon}
          </button>
        ))}
         <button onClick={() => setActivePage('profile')} className={`p-1 rounded-full ${activePage === 'profile' ? 'ring-2 ring-white' : ''}`}>
           <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.username} size="sm" />
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
