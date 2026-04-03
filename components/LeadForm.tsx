
import React, { useState, useCallback, useEffect, useRef } from 'react';

interface FormValues {
  name: string;
  whatsapp: string;
  service: string;
  city: string;
  acquisition: string;
  investment: string;
}

interface FormErrors {
  name?: string;
  whatsapp?: string;
  service?: string;
  city?: string;
}

const BRAZILIAN_CITIES = [
  'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 
  'Manaus', 'Curitiba', 'Recife', 'Goiânia', 'Belém', 'Porto Alegre', 'Guarulhos', 
  'Campinas', 'São Luís', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina',
  'São Bernardo do Campo', 'Nova Iguaçu', 'Campo Grande', 'Osasco', 'Santo André', 
  'João Pessoa', 'Jaboatão dos Guararapes', 'Contagem', 'São José dos Campos', 'Uberlândia'
];

const LeadForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    whatsapp: '',
    service: '',
    city: '',
    acquisition: 'Indicação',
    investment: 'Até R$ 500'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    if (id === 'whatsapp') {
      const formatted = formatWhatsApp(value);
      setValues(prev => ({ ...prev, [id]: formatted }));
    } else if (id === 'city') {
      setValues(prev => ({ ...prev, [id]: value }));
      if (value.length > 1) {
        const filtered = BRAZILIAN_CITIES.filter(city => 
          city.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 5);
        setCitySuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
      } else {
        setShowSuggestions(false);
      }
    } else {
      setValues(prev => ({ ...prev, [id]: value }));
    }

    // Clear error when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.name.trim()) newErrors.name = 'Nome é obrigatório';
    
    const whatsappNumbers = values.whatsapp.replace(/\D/g, '');
    if (whatsappNumbers.length < 10 || whatsappNumbers.length > 11) {
      newErrors.whatsapp = 'WhatsApp inválido (ex: 11 99999-9999)';
    }
    
    if (!values.service.trim()) newErrors.service = 'Informe seu serviço';
    if (!values.city.trim()) newErrors.city = 'Informe sua cidade';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const selectCity = (city: string) => {
    setValues(prev => ({ ...prev, city }));
    setShowSuggestions(false);
    setErrors(prev => ({ ...prev, city: undefined }));
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
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">Aplicação Recebida!</h2>
          <p className="text-slate-600 mb-8 font-medium">Vou analisar seu serviço e sua região pessoalmente. Se eu puder te ajudar, entrarei em contato pelo WhatsApp em breve.</p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setValues({
                name: '',
                whatsapp: '',
                service: '',
                city: '',
                acquisition: 'Indicação',
                investment: 'Até R$ 500'
              });
            }}
            className="text-slate-400 hover:text-black transition-colors underline text-xs font-bold uppercase tracking-widest"
          >
            Enviar outra aplicação
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
            Vagas Limitadas por Região
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
            Pronto para <span className="text-red-600 underline">Dominar</span> sua Região?
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Essa aplicação serve para filtrar quem realmente está pronto para crescer. Eu analiso cada caso pessoalmente para garantir que o investimento traga retorno real.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 text-[#ffbd00] rounded-full flex items-center justify-center font-black">1</div>
              <p className="font-bold text-slate-800">Preencha os dados abaixo</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 text-[#ffbd00] rounded-full flex items-center justify-center font-black">2</div>
              <p className="font-bold text-slate-800">Eu analiso seu caso pessoalmente</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 text-[#ffbd00] rounded-full flex items-center justify-center font-black">3</div>
              <p className="font-bold text-slate-800">Entro em contato se puder te ajudar</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nome Completo</label>
                <input 
                  id="name"
                  type="text" 
                  value={values.name}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-50 border-2 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold focus-visible:ring-2 focus-visible:ring-[#ffbd00] ${errors.name ? 'border-red-500' : 'border-zinc-100'}`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">WhatsApp</label>
                <input 
                  id="whatsapp"
                  type="tel" 
                  value={values.whatsapp}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-50 border-2 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold focus-visible:ring-2 focus-visible:ring-[#ffbd00] ${errors.whatsapp ? 'border-red-500' : 'border-zinc-100'}`}
                  placeholder="(00) 00000-0000"
                />
                {errors.whatsapp && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.whatsapp}</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Qual serviço você oferece?</label>
                <input 
                  id="service"
                  type="text" 
                  value={values.service}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-50 border-2 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold focus-visible:ring-2 focus-visible:ring-[#ffbd00] ${errors.service ? 'border-red-500' : 'border-zinc-100'}`}
                  placeholder="Ex: Ar Condicionado, Eletricista..."
                />
                {errors.service && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.service}</p>}
              </div>
              <div className="relative" ref={suggestionRef}>
                <label htmlFor="city" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Em qual cidade atende?</label>
                <input 
                  id="city"
                  type="text" 
                  value={values.city}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className={`w-full bg-zinc-50 border-2 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold focus-visible:ring-2 focus-visible:ring-[#ffbd00] ${errors.city ? 'border-red-500' : 'border-zinc-100'}`}
                  placeholder="Sua cidade"
                />
                {showSuggestions && (
                  <div className="absolute z-10 w-full bg-white border border-zinc-100 rounded-xl mt-1 shadow-lg overflow-hidden">
                    {citySuggestions.map((city, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => selectCity(city)}
                        className="w-full text-left px-6 py-3 hover:bg-zinc-50 font-bold text-sm transition-colors"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
                {errors.city && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="acquisition" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Como consegue clientes hoje?</label>
                <select 
                  id="acquisition" 
                  value={values.acquisition}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold appearance-none focus-visible:ring-2 focus-visible:ring-[#ffbd00]"
                >
                  <option>Indicação</option>
                  <option>Instagram/Facebook</option>
                  <option>Google</option>
                  <option>Panfletagem/Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="investment" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Quanto pretende investir por mês em anúncios?</label>
                <select 
                  id="investment" 
                  value={values.investment}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl px-6 py-4 focus:border-[#ffbd00] outline-none transition-all font-bold appearance-none focus-visible:ring-2 focus-visible:ring-[#ffbd00]"
                >
                  <option>Até R$ 500</option>
                  <option>R$ 500 a R$ 1.000</option>
                  <option>R$ 1.000 a R$ 3.000</option>
                  <option>Acima de R$ 3.000</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-900 text-[#ffbd00] font-black py-5 rounded-2xl text-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-900/50"
              >
                {isSubmitting ? 'ENVIANDO...' : 'QUERO MAIS CLIENTES'}
                {!isSubmitting && (
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 opacity-50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest">Seus dados estão 100% seguros</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
