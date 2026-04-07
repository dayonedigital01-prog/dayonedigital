
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "Quanto tempo demora para ver os primeiros resultados?",
    a: "No Google, os resultados são quase imediatos. No Meta Ads (Instagram/Facebook), criamos desejo e escala. Unindo os dois, você tem contatos chegando desde a primeira semana."
  },
  {
    q: "É melhor investir no Google ou no Meta Ads?",
    a: "Depende do seu nicho. O Google é para quem já está procurando (intenção), o Meta é para quem ainda não sabe que precisa de você (desejo). O combo dos dois é o que traz o maior ROI para negócios locais."
  },
  {
    q: "O que é Meta Ads?",
    a: "É a plataforma de anúncios do Facebook e Instagram. Usamos ela para 'perseguir' quem visitou seu site e para encontrar novos clientes com o perfil exato do seu público-alvo."
  },
  {
    q: "Qual o investimento mínimo em anúncios?",
    a: "Recomendamos começar com pelo menos R$ 20 a R$ 30 por dia por plataforma para ter um volume saudável de contatos, mas ajustamos a estratégia de acordo com o seu orçamento atual."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter italic">
          Dúvidas <span className="text-[#ffbd00]">Frequentes</span>
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-[#ffbd00]" /> : <Plus size={20} className="text-[#ffbd00]" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
