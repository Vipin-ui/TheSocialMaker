
import React from 'react';

type IconProps = {
  className?: string;
};

export const HomeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h5V12h-3V9.03a6.005 6.005 0 0 0-11.996 0V12H2v10h5V16.545ZM12 3.031a4.005 4.005 0 0 1 4.002 4.002V12h-8V7.033A4.005 4.005 0 0 1 12 3.031Z"></path></svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
);

export const ExploreIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m9.208 9.208 5.584 5.584m-5.584 0 5.584-5.584"></path></svg>
);

export const ReelsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M8 1.023A1 1 0 0 0 7.003 2v20a1 1 0 0 0 1.482.876l12-7a1 1 0 0 0 0-1.752l-12-7A1 1 0 0 0 8 1.023Zm1 2.035 10.22 5.962L9 15.003V3.058Z"></path></svg>
);

export const MessagesIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.003 2.005a9.705 9.705 0 1 1 0 19.41 9.705 9.705 0 0 1 0-19.41Zm0 1.5a8.205 8.205 0 1 0 0 16.41 8.205 8.205 0 0 0 0-16.41Zm-3.415 9.325a.75.75 0 0 0 0 1.5h6.82a.75.75 0 0 0 0-1.5h-6.82Zm.01-3.17a.75.75 0 0 0 0 1.5h6.82a.75.75 0 0 0 0-1.5h-6.82Z"></path></svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-6.256 9.673-3.59 4.7-7.545 8.249-7.646 8.333-.1.084-.246.084-.346 0-.101-.084-4.056-3.633-7.646-8.333C2.652 14.08 0 12.194 0 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175 2.48 1.175 3.32 0a4.19 4.19 0 0 1 3.675-1.941Z"></path></svg>
);

export const CreateIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.005a9.995 9.995 0 1 1 0 19.99 9.995 9.995 0 0 1 0-19.99Zm0 1.5a8.495 8.495 0 1 0 0 16.99 8.495 8.495 0 0 0 0-16.99Z"></path><path d="M12 6.756a.75.75 0 0 0-.75.75v3.744h-3.744a.75.75 0 0 0 0 1.5h3.744v3.744a.75.75 0 0 0 1.5 0v-3.744h3.744a.75.75 0 0 0 0-1.5h-3.744V7.506a.75.75 0 0 0-.75-.75Z"></path></svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>
);

export const CommentIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21 2.984a.75.75 0 0 1-.22.53L3.53 20.78a.75.75 0 0 1-1.06-1.06L19.72 2.47a.75.75 0 0 1 .81-.02l.02.01.44.22a.75.75 0 0 1 .01.804Z"></path><path d="M21.22 3.53a.75.75 0 0 1-.75.75h-7.01a.75.75 0 0 1 0-1.5h6.26l-2.1-1.05a.75.75 0 0 1 .66-1.32l3.25 1.62a.75.75 0 0 1 .24.81l-.01.03Z"></path></svg>
);

export const BookmarkIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="m19.5 21.5-7.5-6-7.5 6V3.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="m12.184 21.018 2.33-1.01a.999.999 0 0 0 .54-.54l1.01-2.33a1 1 0 0 1 1.41-.41l2.12 2.12a1 1 0 0 0 1.41-1.41l-2.12-2.12a1 1 0 0 1 .41-1.41l2.33-1.01a1 1 0 0 0 0-1.8l-2.33-1.01a1 1 0 0 1-.41-1.41l2.12-2.12a1 1 0 0 0-1.41-1.41l-2.12 2.12a1 1 0 0 1-1.41-.41l-1.01-2.33a1 1 0 0 0-1.8 0l-1.01 2.33a1 1 0 0 1-1.41.41L6.284 3.708a1 1 0 1 0-1.41 1.41l2.12 2.12a1 1 0 0 1 .41 1.41l-2.33 1.01a1 1 0 0 0 0 1.8l2.33 1.01a1 1 0 0 1 .41 1.41l-2.12 2.12a1 1 0 0 0 1.41 1.41l2.12-2.12a1 1 0 0 1 1.41.41l1.01 2.33c.25.579.95.83 1.54.54ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
);

export const GridIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><rect width="6.5" height="6.5" x="2.75" y="2.75" rx="1"></rect><rect width="6.5" height="6.5" x="14.75" y="2.75" rx="1"></rect><rect width="6.5" height="6.5" x="14.75" y="14.75" rx="1"></rect><rect width="6.5" height="6.5" x="2.75" y="14.75" rx="1"></rect></svg>
);

export const TaggedIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 11.996a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path><path d="M12.003 1.505a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z"></path><path d="M18.89 15.603a1.5 1.5 0 0 0-2.12.79c-1.11 2.22-3.48 3.6-6.27 3.6s-5.16-1.38-6.27-3.6a1.5 1.5 0 1 0-2.65 1.4c1.47 2.94 4.51 4.79 7.92 4.79s6.45-1.85 7.92-4.79a1.5 1.5 0 0 0-.53-2.19Z"></path></svg>
);

export const VerifiedIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22.49 12.48a1.32 1.32 0 0 1-1.32 1.32h-1.32a1.31 1.31 0 0 0-1.32 1.32v1.32a1.32 1.32 0 0 1-1.32 1.32h-1.32a1.32 1.32 0 0 1-1.32-1.32v-1.32a1.32 1.32 0 0 0-1.32-1.32H12a1.32 1.32 0 0 1-1.32-1.32v-1.32a1.32 1.32 0 0 0-1.32-1.32H8.04a1.32 1.32 0 0 1-1.32-1.32V8.04a1.32 1.32 0 0 1 1.32-1.32h1.32a1.32 1.32 0 0 0 1.32-1.32V4.08a1.32 1.32 0 0 1 1.32-1.32h1.32a1.32 1.32 0 0 1 1.32 1.32v1.32a1.32 1.32 0 0 0 1.32 1.32h1.32a1.32 1.32 0 0 1 1.32 1.32v1.32a1.32 1.32 0 0 0 1.32 1.32h1.32a1.32 1.32 0 0 1 1.32 1.32v1.32Z" clipRule="evenodd"></path><path fill="#fff" d="m16.32 8.35-5.4 5.4a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 1.06-1.06l2.17 2.17 4.87-4.87a.75.75 0 0 1 1.06 1.06Z"></path></svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
);
