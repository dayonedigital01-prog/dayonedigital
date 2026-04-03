
import React from 'react';

interface LogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ light = false, size = 'md' }) => {
  const sizes = {
    sm: 'h-8 md:h-10',
    md: 'h-12 md:h-16',
    lg: 'h-20 md:h-24'
  };
  
  const logoUrl = "https://lh3.googleusercontent.com/d/1ABokykFrz0sfihp6Ny6K95js-9_FPCV-";
  
  return (
    <div className={`flex items-center justify-center ${sizes[size]} select-none`} aria-hidden="true">
      <img 
        src={logoUrl} 
        alt="D1 Digital Logo" 
        className={`h-full w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Logo;
