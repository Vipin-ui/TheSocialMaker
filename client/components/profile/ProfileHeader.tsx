
import React from 'react';
import type { User } from '../../types';
import Avatar from '../common/Avatar';
import { SettingsIcon, VerifiedIcon } from '../Icons';

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <header className="px-4 py-8 md:px-16">
      <div className="flex items-center">
        <div className="w-1/3 flex justify-center">
          <Avatar src={user.avatar} alt={user.username} size="xl" />
        </div>
        <div className="w-2/3 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl">{user.username}</h1>
            {user.id === 'u1' && <VerifiedIcon className="w-5 h-5 text-blue-500" />}
            <div className="flex items-center space-x-2">
                <button className="bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm px-4 py-1.5 rounded-lg">Edit profile</button>
                <button className="bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm px-4 py-1.5 rounded-lg">View archive</button>
            </div>
            <button><SettingsIcon /></button>
          </div>
          <div className="flex space-x-8">
            <div><span className="font-semibold">123</span> posts</div>
            <div><span className="font-semibold">4,567</span> followers</div>
            <div><span className="font-semibold">890</span> following</div>
          </div>
          <div>
            <p className="font-semibold text-sm">{user.username}</p>
            <p className="text-sm text-zinc-400">Software Engineer</p>
            <p className="text-sm">Building cool things with React & TypeScript ✨</p>
            <a href="#" className="text-sm text-blue-400 font-semibold">linkin.bio/code_master</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
