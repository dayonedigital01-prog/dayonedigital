
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffbd00]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffbd00]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sobre o Serviço */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic leading-tight uppercase tracking-tighter">
            O que eu faço pelo seu <span className="text-[#ffbd00]">negócio</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Todos os dias, pessoas procuram no Google por serviços como o seu. O meu trabalho é fazer seu negócio aparecer exatamente nesse momento — quando o cliente já está pronto para contratar. Isso significa mais ligações, mais mensagens e mais serviços fechados.
          </p>
        </div>

        {/* Para quem é / Para quem não é */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-[#ffbd00] text-xl font-black uppercase tracking-widest mb-6">✔ Para quem é</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#ffbd00]">●</span>
                <span>Técnicos (ar condicionado, eletricista, encanador)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ffbd00]">●</span>
                <span>Serviços locais (borracharia, manutenção, etc)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ffbd00]">●</span>
                <span>Negócios que já atendem clientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ffbd00]">●</span>
                <span>Quem quer aumentar a demanda</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-red-500 text-xl font-black uppercase tracking-widest mb-6">❌ Para quem NÃO é</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500">●</span>
                <span>Quem está começando do zero</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">●</span>
                <span>Quem não pode investir em anúncios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">●</span>
                <span>Quem quer apenas testar sem compromisso</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparativo */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase tracking-tighter italic">
            Por que o <span className="text-[#ffbd00]">Google</span> é diferente?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-slate-400 font-bold mb-6 uppercase text-sm tracking-widest">Métodos Tradicionais</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-500 line-through decoration-red-500/50">
                  <span>Panfletos que vão para o lixo</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500 line-through decoration-red-500/50">
                  <span>Postar no Instagram e ninguém ver</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500 line-through decoration-red-500/50">
                  <span>Depender apenas de indicação</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500 line-through decoration-red-500/50">
                  <span>Esperar o cliente te achar por sorte</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#ffbd00]/10 p-8 rounded-3xl border border-[#ffbd00]/30 shadow-[0_0_40px_rgba(255,189,0,0.1)]">
              <h4 className="text-[#ffbd00] font-bold mb-6 uppercase text-sm tracking-widest">Minha Estratégia</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-[#ffbd00]">✔</span>
                  <span>Aparecer para quem já quer comprar</span>
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-[#ffbd00]">✔</span>
                  <span>Anúncios focados em ligação direta</span>
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-[#ffbd00]">✔</span>
                  <span>Dominação do Google Maps local</span>
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <span className="text-[#ffbd00]">✔</span>
                  <span>Escalabilidade previsível</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problemas que resolve */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase tracking-tighter italic">
            Problemas que eu <span className="text-[#ffbd00]">resolvo</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Falta de clientes constantes",
              "Dependência de indicação",
              "Concorrentes aparecendo primeiro",
              "Dificuldade em crescer o faturamento"
            ].map((prob, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center font-bold text-slate-200">
                {prob}
              </div>
            ))}
          </div>
        </div>

        {/* Como funciona */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase tracking-tighter italic">
            Como <span className="text-[#ffbd00]">funciona</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Entendo seu serviço", d: "Analiso sua região e seu público" },
              { t: "Estruturo sua presença", d: "Preparo tudo para o Google te aceitar" },
              { t: "Faço você aparecer", d: "Coloco seu negócio na frente de quem procura" },
              { t: "Você recebe contatos", d: "Ligações e mensagens direto no WhatsApp" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 z-0" aria-hidden="true">{i + 1}</div>
                <div className="relative z-10">
                  <h4 className="text-[#ffbd00] font-bold mb-2 uppercase tracking-tighter">{step.t}</h4>
                  <p className="text-slate-400 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resultados Esperados */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
           <div className="flex-1">
             <h4 className="text-2xl font-black mb-6 italic text-[#ffbd00] uppercase tracking-tighter">Resultados que você pode esperar</h4>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#ffbd00] rounded-full" />
                 <span className="text-xl font-bold">Mais ligações</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#ffbd00] rounded-full" />
                 <span className="text-xl font-bold">Mais WhatsApp</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#ffbd00] rounded-full" />
                 <span className="text-xl font-bold">Mais vendas</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
