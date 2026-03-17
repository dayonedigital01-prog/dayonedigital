
// Fix: Import React to resolve 'React' namespace used in Service interface
import React from 'react';

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LeadFormData {
  name: string;
  service: string;
  city: string;
  instagram: string;
  contact: string;
}

