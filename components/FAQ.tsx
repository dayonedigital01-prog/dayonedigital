
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "Quanto tempo demora para ver os primeiros resultados?",
    a: "Diferente do Instagram, onde você precisa construir audiência, no Google os resultados são quase imediatos. Assim que os anúncios entram no ar, seu telefone já pode começar a tocar."
  },
  {
    q: "Preciso ter um site pronto?",
    a: "Não se preocupe com isso. Eu estruturo toda a sua presença, incluindo landing pages de alta conversão se necessário, para garantir que o cliente chegue até o seu WhatsApp."
  },
  {
    q: "O Google funciona para o meu tipo de serviço?",
    a: "Se as pessoas procuram pelo seu serviço quando precisam de ajuda (ex: encanador, advogado, mecânico, dentista), então o Google é o melhor lugar do mundo para você estar."
  },
  {
    q: "Qual o investimento mínimo em anúncios?",
    a: "Recomendamos começar com pelo menos R$ 20 a R$ 30 por dia para ter um volume saudável de contatos, mas isso varia de acordo com a sua cidade e concorrência."
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
