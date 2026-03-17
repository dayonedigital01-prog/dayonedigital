
import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-zinc-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ffbd00]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbd00]/10 border border-[#ffbd00]/20 text-[#ffbd00] text-xs font-bold uppercase tracking-widest mb-4"
            >
              <CheckCircle2 size={14} />
              Resultados Comprovados
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              O que acontece quando sua empresa se torna a <span className="text-[#ffbd00]">Primeira Opção</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xs md:text-right font-medium"
          >
            Empresas locais que pararam de "tentar" e começaram a dominar.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-zinc-50 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#ffbd00]/5 hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="absolute top-8 right-10 text-slate-100 group-hover:text-[#ffbd00]/10 transition-colors duration-500">
                <Quote size={56} strokeWidth={3} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#ffbd00] text-[#ffbd00]" />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed font-medium mb-10 flex-grow">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-[#ffbd00] shadow-lg shadow-slate-200">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{t.author}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
