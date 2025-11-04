
import React from 'react';
import { MOCK_MESSAGES, CURRENT_USER } from '../constants';
import type { User } from '../types';
import Avatar from '../components/common/Avatar';
import { CreateIcon, HeartIcon } from '../components/Icons';

const ChatListItem: React.FC<{ chat: typeof MOCK_MESSAGES[0], active: boolean, onClick: () => void }> = ({ chat, active, onClick }) => (
    <button onClick={onClick} className={`flex items-center space-x-3 p-3 w-full text-left rounded-lg ${active ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`}>
        <Avatar src={chat.user.avatar} alt={chat.user.username} size="lg" />
        <div className="flex-1">
            <p className={`text-sm ${chat.unread ? 'font-bold' : ''}`}>{chat.user.username}</p>
            <p className={`text-xs ${chat.unread ? 'text-white' : 'text-zinc-400'}`}>{chat.lastMessage.substring(0,25)}... · {chat.timestamp}</p>
        </div>
        {chat.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
    </button>
)

const ChatView: React.FC<{ user: User }> = ({ user }) => (
    <div className="flex-1 flex flex-col h-full">
        <header className="flex items-center justify-between p-4 border-b border-zinc-800">
             <div className="flex items-center space-x-3">
                <Avatar src={user.avatar} alt={user.username} />
                <div>
                    <p className="font-semibold text-sm">{user.username}</p>
                    <p className="text-zinc-500 text-xs">Active now</p>
                </div>
            </div>
            {/* Icons */}
        </header>
        <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse">
            {/* Messages would go here, reversed */}
            <div className="space-y-4">
                 <div className="flex justify-end">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl max-w-xs">
                        Hey, how are you doing? Let's catch up soon!
                    </div>
                </div>
                 <div className="flex justify-start">
                     <Avatar src={user.avatar} alt={user.username} size="sm" className="self-end mr-2"/>
                    <div className="bg-zinc-800 p-3 rounded-2xl max-w-xs">
                        I'm doing great, thanks for asking! Definitely, let's plan something.
                    </div>
                </div>
            </div>
        </div>
        <footer className="p-4 border-t border-zinc-800">
            <div className="relative">
                <input type="text" placeholder="Message..." className="w-full bg-zinc-800 rounded-full py-2 px-4 pr-10 focus:ring-0 border-none"/>
                <button className="absolute right-3 top-1/2 -translate-y-1/2"><HeartIcon /></button>
            </div>
        </footer>
    </div>
)

const MessagesPage: React.FC = () => {
    const [activeChat, setActiveChat] = React.useState(MOCK_MESSAGES[0]);

  return (
    <div className="flex h-screen border-t md:border-t-0 md:border-l border-zinc-800">
      <div className="w-full md:w-1/3 border-r border-zinc-800 h-full flex flex-col">
        <header className="p-4 border-b border-zinc-800 flex justify-between items-center h-[73px]">
            <h1 className="font-bold text-xl">{CURRENT_USER.username}</h1>
            <button><CreateIcon/></button>
        </header>
        <div className="flex-1 overflow-y-auto p-2">
            {MOCK_MESSAGES.map(chat => (
                <ChatListItem key={chat.id} chat={chat} active={activeChat.id === chat.id} onClick={() => setActiveChat(chat)} />
            ))}
        </div>
      </div>
      <div className="hidden md:flex flex-1 h-full">
        {activeChat ? <ChatView user={activeChat.user} /> : <div>Select a chat</div>}
      </div>
    </div>
  );
};

export default MessagesPage;
