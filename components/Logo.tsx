
import React from 'react';

interface LogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ light = false, size = 'md' }) => {
  const sizes = {
    sm: { main: 'text-2xl md:text-3xl', sub: 'text-[7px] md:text-[8px]', gap: 'mt-[-2px]' },
    md: { main: 'text-4xl md:text-5xl', sub: 'text-[10px]', gap: 'mt-[-4px]' },
    lg: { main: 'text-6xl', sub: 'text-[12px]', gap: 'mt-[-6px]' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <div className="flex flex-col items-center leading-none select-none" aria-hidden="true">
      <div className={`flex font-logo ${currentSize.main} font-black`}>
        <span className={light ? 'text-white' : 'text-black'}>D</span>
        <span className="text-[#ffbd00]">1</span>
      </div>
      <div className={`font-sans ${currentSize.sub} tracking-[0.4em] font-light ${currentSize.gap} uppercase ${light ? 'text-white/80' : 'text-slate-600'}`}>
        Especialista
      </div>
    </div>
  );
};

export default Logo;
