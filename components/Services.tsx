
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffbd00]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffbd00]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic leading-tight uppercase tracking-tighter">
              Como eu domino a sua região para o seu <span className="text-[#ffbd00]">negócio local</span>
            </h2>
            <p className="text-slate-400 text-lg">Estratégias de precisão para quem não pode se dar ao luxo de ser ignorado no Google.</p>
          </div>
          <div className="hidden md:block">
             <div className="h-1 w-32 bg-[#ffbd00] mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:border-[#ffbd00]/50 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#ffbd00] rounded-2xl flex items-center justify-center text-black mb-8 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_rgba(255,189,0,0.4)] relative overflow-hidden">
                {/* Subtle shine effect on icon hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter group-hover:text-[#ffbd00] transition-colors">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{s.description}</p>
              <div className="w-8 h-1 bg-[#ffbd00]/30 rounded-full group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
           <div className="flex-1">
             <h4 className="text-2xl font-black mb-2 italic text-[#ffbd00] uppercase tracking-tighter">"O Fim da Invisibilidade Digital"</h4>
             <p className="text-slate-300 text-lg leading-relaxed">
               Enquanto seus concorrentes esperam pela sorte ou indicações, nós cercamos o seu potencial cliente. 
               Seu negócio deixará de ser um "segredo" para se tornar a <strong>autoridade número 1</strong> no mapa de quem quer comprar agora. 
               Visibilidade local não é vaidade, é sobrevivência e faturamento.
             </p>
           </div>
           
           <div className="flex-shrink-0 relative group">
              {/* Pulsing effect container for the map */}
              <div className="absolute -inset-4 bg-[#ffbd00]/10 rounded-full animate-pulse z-0"></div>
              
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#ffbd00] bg-slate-700 flex items-center justify-center overflow-hidden transition-all shadow-[0_0_40px_rgba(255,189,0,0.2)] relative z-10 group-hover:scale-105 duration-500">
                {/* Simulated Google Map Background */}
                <img 
                  src="https://i.pinimg.com/1200x/33/e2/d3/33e2d3aafdf972c3bd0712027b669b1c.jpg" 
                  alt="Dominação Google Maps" 
                  className="object-cover w-full h-full opacity-70 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Central Map Marker */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    {/* The Ping Effect */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    {/* The Marker Icon */}
                    <svg className="w-8 h-8 text-red-600 relative z-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>
                
                {/* Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>
              
              {/* Badge indicating "Live" or "Top" */}
              <div className="absolute -bottom-2 right-0 bg-[#ffbd00] text-black text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-tighter transform group-hover:scale-110 transition-transform">
                Top #1
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
