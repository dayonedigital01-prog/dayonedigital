
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-200/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <Logo light={!isScrolled} size="sm" />
          <span className={`text-base md:text-xl font-black tracking-tighter md:tracking-tight ${isScrolled ? 'text-black' : 'text-white'}`}>
            Day One Digital
          </span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {['Depoimentos', 'Serviços', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`text-sm font-bold transition-colors hover:text-[#ffbd00] ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-[#ffbd00] text-black px-6 py-2.5 rounded-xl font-black text-sm hover:bg-[#e6ab00] transition-all shadow-lg hover:shadow-[#ffbd00]/20 active:scale-95"
          >
            QUERO ORÇAMENTOS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
