import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hasStory?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-36 h-36',
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', hasStory = false, className = '' }) => {
  const wrapperSize = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-40 h-40',
  };

  if (hasStory) {
    return (
      <div className={`flex-shrink-0 p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ${wrapperSize[size]} ${className}`}>
        <div className="p-[2px] bg-black rounded-full">
            <img className={`rounded-full object-cover ${sizeClasses[size]}`} src={src} alt={alt} />
        </div>
      </div>
    );
  }

  return <img className={`rounded-full object-cover ${sizeClasses[size]} ${className}`} src={src} alt={alt} />;
};

export default Avatar;