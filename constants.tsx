
import React from 'react';
import { Testimonial, Service } from './types';

export const COLORS = {
  primary: '#ffbd00',
  secondary: '#111111',
  text: '#222222',
  light: '#fafafa'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Antes eu dependia de quem passava na frente da loja. Agora o WhatsApp não para de tocar com gente que nos achou no Google.",
    author: "Ricardo",
    role: "Proprietário de Oficina Premium"
  },
  {
    text: "Minha clínica estava escondida. Com o trabalho da D1, aparecemos em primeiro no mapa e nossa agenda lotou em 2 meses.",
    author: "Dra. Beatriz",
    role: "Clínica Odontológica"
  },
  {
    text: "O investimento se pagou na primeira semana. O tráfego local é o que faltava para escalarmos o faturamento.",
    author: "Marcos",
    role: "Rede de Hamburguerias"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Dominação no Google Maps",
    description: "Colocamos sua empresa no topo das buscas locais. Quando alguém procurar o que você vende, você será a primeira opção.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Anúncios de Raio Local",
    description: "Anúncios ultra-segmentados no Instagram e Facebook para quem está passando perto do seu estabelecimento agora.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    title: "Máquina de Orçamentos",
    description: "Landing pages de alta conversão focadas em uma única ação: levar o cliente direto para o seu WhatsApp de vendas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];
