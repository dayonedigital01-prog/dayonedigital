
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img 
          src="https://i.pinimg.com/736x/a1/6d/20/a16d20c2e74bb8db5ce0c04dd64507fb.jpg" 
          alt="Negócio local prosperando" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#ffbd00]/20 border border-[#ffbd00]/30 backdrop-blur-md">
          <span className="text-[#ffbd00] text-sm font-bold tracking-wide uppercase">Performance para Negócios Locais</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
          Sua Empresa No <span className="text-[#ffbd00]">Topo do Google</span> ou Invisível?
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Enquanto você lê isso, potenciais clientes na sua cidade estão procurando pelo seu serviço. <strong>Se você não aparece, eles compram da sua concorrência.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contato" 
            className="bg-[#ffbd00] hover:bg-[#e6ab00] text-black text-lg font-black px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(255,189,0,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            DOMINAR MINHA REGIÃO
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
