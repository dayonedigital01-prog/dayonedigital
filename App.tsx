
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import FAQ from './components/FAQ';
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
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-[#ffbd00]/10 border border-[#ffbd00]/20 backdrop-blur-md">
              <span className="text-[#ffbd00] text-sm font-bold tracking-wide uppercase">Apenas 2 vagas disponíveis para este mês</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Pronto para ser a <span className="text-[#ffbd00]">Primeira Opção</span> da sua cidade?
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Se você quer mais clientes e aparecer no Google da forma certa, preencha o formulário e eu analiso seu caso.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-[#ffbd00] text-black font-black px-12 py-6 rounded-2xl text-2xl hover:bg-[#e6ab00] transition-all shadow-[0_20px_50px_rgba(255,189,0,0.3)] hover:-translate-y-1 active:translate-y-0 uppercase tracking-tighter"
            >
              Quero mais clientes
            </a>
          </div>
        </section>
        
        <FAQ />
        <LeadForm />
      </main>

      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo light size="md" />
            <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">Especialista em Clientes Locais</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div>
              <h4 className="text-[#ffbd00] font-black text-xs uppercase tracking-widest mb-4">Navegação</h4>
              <ul className="space-y-2 text-slate-400 text-sm font-bold">
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Resultados</a></li>
                <li><a href="#serviços" className="hover:text-white transition-colors">Como Funciona</a></li>
              </ul>
            </div>
            <div className="text-slate-500 text-sm max-w-xs">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Sobre</h4>
              <p>© 2025 — D1 Digital — Consultoria de Dominação Local.</p>
              <p className="mt-2 leading-relaxed">Ajudo prestadores de serviço a dominarem sua região no Google e receberem contatos qualificados todos os dias.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
