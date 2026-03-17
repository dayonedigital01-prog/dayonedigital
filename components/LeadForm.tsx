
import React, { useState, useCallback } from 'react';

interface FormValues {
  name: string;
  activity: string;
  city: string;
  whatsapp: string;
}

interface FormErrors {
  name?: string;
  activity?: string;
  city?: string;
  whatsapp?: string;
}

const LeadForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: '',
    activity: '',
    city: '',
    whatsapp: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: keyof FormValues, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (value.length < 3) return 'O nome deve ter pelo menos 3 caracteres.';
        break;
      case 'activity':
        if (value.length < 3) return 'Informe seu ramo de atividade.';
        break;
      case 'city':
        if (value.length < 2) return 'Informe sua cidade.';
        break;
      case 'whatsapp':
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!phoneRegex.test(value)) return 'Informe um WhatsApp válido (Ex: 11 99999-9999).';
        break;
      default:
        return undefined;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name as keyof FormValues, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormValues, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors: FormErrors = {};
    let hasErrors = false;
    
    (Object.keys(values) as Array<keyof FormValues>).forEach(key => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      setTouched({ name: true, activity: true, city: true, whatsapp: true });
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-24 bg-zinc-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4">Análise Solicitada!</h2>
          <p className="text-slate-600 mb-8 font-medium">Nossa equipe entrará em contato em até 24h para apresentar o plano de dominação da sua região.</p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setValues({ name: '', activity: '', city: '', whatsapp: '' });
              setErrors({});
              setTouched({});
            }}
            className="text-slate-400 hover:text-black transition-colors underline text-xs font-bold uppercase tracking-widest"
          >
            Enviar novos dados
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 bg-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest rounded mb-4">
            Atenção: Vagas Limitadas por Região
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Pare de perder clientes para quem <span className="text-[#ffbd00]">faz menos</span> que você.
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Se você é bom no que faz, mas sua agenda não reflete isso, o problema é sua <strong>visibilidade</strong>. 
            Nós mapeamos sua região e criamos um cerco digital para que sua empresa seja a única escolha lógica.
          </p>
          <div className="space-y-4">
            {[
              'Raio de atuação ultra-específico',
              'Otimização de Perfil no Google',
              'Anúncios focados em conversão imediata'
            ].map(item => (
              <div key={item} className="flex items-center gap-4 text-slate-800 font-black italic">
                <div className="w-5 h-5 bg-[#ffbd00] rounded flex items-center justify-center text-[10px] shadow-sm">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-lg relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#ffbd00] rounded-full z-0 animate-ping opacity-20" />
          <form 
            onSubmit={handleSubmit}
            noValidate
            className="relative z-10 p-8 md:p-10 bg-slate-900 rounded-[2rem] shadow-2xl border border-white/5"
          >
            <h3 className="text-white text-xl font-black mb-6 border-b border-white/10 pb-4">Análise Gratuita de Presença</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Seu Nome / Nome da Empresa</label>
                <input 
                  name="name"
                  type="text" 
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border ${errors.name && touched.name ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-[#ffbd00] transition-all`}
                  placeholder="Seu nome completo"
                />
                {errors.name && touched.name && <p className="mt-1.5 text-red-500 text-[10px] font-bold uppercase ml-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Ramo de Atividade</label>
                <input 
                  name="activity"
                  type="text" 
                  value={values.activity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ex: Dentista, Loja de Roupas, Pet Shop"
                  className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border ${errors.activity && touched.activity ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-[#ffbd00] transition-all`}
                />
                {errors.activity && touched.activity && <p className="mt-1.5 text-red-500 text-[10px] font-bold uppercase ml-1">{errors.activity}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Cidade / Estado</label>
                  <input 
                    name="city"
                    type="text" 
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ex: São Paulo, SP"
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border ${errors.city && touched.city ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-[#ffbd00] transition-all`}
                  />
                  {errors.city && touched.city && <p className="mt-1.5 text-red-500 text-[10px] font-bold uppercase ml-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">WhatsApp</label>
                  <input 
                    name="whatsapp"
                    type="tel" 
                    value={values.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="(00) 00000-0000"
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border ${errors.whatsapp && touched.whatsapp ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-[#ffbd00] transition-all`}
                  />
                  {errors.whatsapp && touched.whatsapp && <p className="mt-1.5 text-red-500 text-[10px] font-bold uppercase ml-1">{errors.whatsapp}</p>}
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full mt-4 bg-[#ffbd00] hover:bg-white text-black font-black py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 text-base uppercase tracking-tight"
              >
                Solicitar Análise Estratégica
              </button>
            </div>
            <p className="text-center text-[9px] text-slate-500 mt-6 uppercase tracking-widest font-bold">
              Analisamos apenas 1 empresa por nicho em cada bairro para garantir exclusividade de resultados.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
