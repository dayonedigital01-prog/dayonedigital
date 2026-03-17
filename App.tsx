
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import Logo from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        <Testimonials />
        <Services />
        
        {/* Secondary CTA Section */}
        <section className="bg-black py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffbd00]/5" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Pronto para ser a <span className="text-[#ffbd00]">Primeira Opção</span> da sua cidade?
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Pare de perder vendas para concorrentes piores que você só porque eles aparecem primeiro no Google. 
              Recupere sua autoridade local hoje mesmo.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-[#ffbd00] text-black font-black px-12 py-6 rounded-2xl text-2xl hover:bg-[#e6ab00] transition-all shadow-[0_20px_50px_rgba(255,189,0,0.3)] hover:-translate-y-1 active:translate-y-0 uppercase tracking-tighter"
            >
              Dominar meu Mercado Local
            </a>
          </div>
        </section>

        <LeadForm />
      </main>

      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo light size="md" />
            <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">Especialista em Dominação de Mercados Locais</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div>
              <h4 className="text-[#ffbd00] font-black text-xs uppercase tracking-widest mb-4">Navegação</h4>
              <ul className="space-y-2 text-slate-400 text-sm font-bold">
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Resultados Reais</a></li>
                <li><a href="#serviços" className="hover:text-white transition-colors">Como Funcionamos</a></li>
              </ul>
            </div>
            <div className="text-slate-500 text-sm max-w-xs">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Posicionamento</h4>
              <p>© 2025 Day One Digital — Dominação Local.</p>
              <p className="mt-2 leading-relaxed">Focado em tirar empresas da invisibilidade e transformá-las em referências geográficas através de tráfego pago e SEO local.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
