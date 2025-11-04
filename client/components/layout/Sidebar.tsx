
import React from 'react';
import type { Page } from '../../types';
import { CURRENT_USER } from '../../constants';
import Avatar from '../common/Avatar';
import { HomeIcon, SearchIcon, ExploreIcon, ReelsIcon, MessagesIcon, HeartIcon, CreateIcon, MenuIcon } from '../Icons';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const InstagramLogo = () => (
    <svg className="w-24 h-full" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M512 378.24q-55.296 0-94.208 38.912t-38.912 94.208 38.912 94.208 94.208 38.912 94.208-38.912 38.912-94.208-38.912-94.208-94.208-38.912z m0 204.8q-42.496 0-72.192-29.696t-29.696-72.192 29.696-72.192 72.192-29.696 72.192 29.696 29.696 72.192-29.696 72.192-72.192 29.696z m254.976-227.328q-20.48 0-34.816 14.336t-14.336 34.816 14.336 34.816 34.816 14.336 34.816-14.336 14.336-34.816-14.336-34.816-34.816-14.336z m121.856 93.184q0-44.032-21.504-82.944t-58.368-64.512-82.944-43.52-95.232-21.504-95.232 21.504-82.944 43.52-58.368 64.512-21.504 82.944 21.504 95.232 58.368 82.944 82.944 58.368 95.232 21.504 95.232-21.504 82.944-58.368 58.368-82.944 21.504-95.232z m-61.44 95.232q0 45.056-15.872 84.48t-43.52 69.12-69.12 43.52-84.48 15.872-84.48-15.872-69.12-43.52-43.52-69.12-15.872-84.48 15.872-84.48 43.52-69.12 69.12-43.52 84.48-15.872 84.48 15.872 69.12 43.52 43.52 69.12 15.872 84.48z" />
    </svg>
);

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void; }> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className="flex items-center w-full px-3 py-3 my-1 rounded-lg hover:bg-zinc-800 transition-colors duration-200">
    <span className={`transform transition-transform duration-200 ${active ? 'scale-110' : ''}`}>{icon}</span>
    <span className={`ml-4 text-base font-${active ? 'bold' : 'normal'} hidden lg:block`}>{label}</span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'search', icon: <SearchIcon />, label: 'Search', page: 'explore' },
    { id: 'explore', icon: <ExploreIcon />, label: 'Explore' },
    { id: 'reels', icon: <ReelsIcon />, label: 'Reels' },
    { id: 'messages', icon: <MessagesIcon />, label: 'Messages' },
    { id: 'notifications', icon: <HeartIcon />, label: 'Notifications' },
    { id: 'create', icon: <CreateIcon />, label: 'Create' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full bg-black text-white border-r border-zinc-800 p-3 z-30 hidden md:flex flex-col">
      <div className="py-4 mb-4 hidden lg:block">
        <InstagramLogo />
      </div>
      <div className="py-4 mb-4 block lg:hidden">
        <div className="w-6 h-6 my-3 mx-auto">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.002a9.995 9.995 0 1 1 0 19.99 9.995 9.995 0 0 1 0-19.99Zm0 1.5a8.495 8.495 0 1 0 0 16.99 8.495 8.495 0 0 0 0-16.99Z" /><path d="M12.003 5.002a.75.75 0 0 0-.75.75v12.5a.75.75 0 0 0 1.5 0V5.752a.75.75 0 0 0-.75-.75Z" /><path d="m16.253 8.242-8.5 3a.75.75 0 0 0 0 1.4l8.5 3a.75.75 0 0 0 1- .7v-6a.75.75 0 0 0-1-.7ZM16 11.29l-6.37 2.25V9.04l6.37 2.25Z" /></svg>
        </div>
      </div>
      <nav className="flex-grow">
        {navItems.map(item => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activePage === (item.page || item.id)}
            onClick={() => setActivePage((item.page || item.id) as Page)}
          />
        ))}
        <button onClick={() => setActivePage('profile')} className="flex items-center w-full px-3 py-3 my-1 rounded-lg hover:bg-zinc-800 transition-colors duration-200">
           <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.username} size="sm" />
           <span className={`ml-4 text-base font-${activePage === 'profile' ? 'bold' : 'normal'} hidden lg:block`}>Profile</span>
        </button>
      </nav>
      <div className="mt-auto">
        <NavItem icon={<MenuIcon />} label="More" onClick={() => {}} />
      </div>
    </aside>
  );
};

export default Sidebar;
