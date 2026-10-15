export type FaqCategory =
  | 'quem-pode'
  | 'renda'
  | 'documentos'
  | 'fgts'
  | 'entrada'
  | 'parcelas'
  | 'nome-sujo'
  | 'score'
  | 'aprovacao'
  | 'empreendimentos';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  categoryLabel: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string[];
  tips?: string[];
  ctaText?: string;
}

export interface Empreendimento {
  id: string;
  slug: string;
  name: string;
  bairro: string;
  cidade: string;
  estado: string;
  status: 'Lançamento' | 'Em Construção' | 'Pronto para Morar';
  priceStartingFrom: number;
  subsidyUpTo: number;
  simulatedMonthlyInstallment: number;
  bedrooms: string;
  area: string;
  hasParking: boolean;
  features: string[];
  description: string;
  differentials: string[];
  deliveryDate: string;
  tag: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    points: number;
    tag?: string;
  }[];
}

export interface QuizResultProfile {
  score: number;
  maxScore: number;
  level: 'alta' | 'boa' | 'analise' | 'revisar';
  title: string;
  headline: string;
  description: string;
  actionPoints: string[];
  ctaLabel: string;
  whatsappMessage: string;
  badgeColor: string;
}

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  hasFgts: 'sim' | 'pouco' | 'nao';
  incomeRange?: string;
  source: 'pdf_guide' | 'quiz' | 'doubt_diagnostic' | 'empreendimento' | 'contact_form';
  details?: string;
  createdAt: string;
}

export interface BrokerInfo {
  id: 'corretor1' | 'corretor2';
  name: string;
  role: string;
  creci: string;
  phone: string; // WhatsApp formatted: e.g. 5511999999999
  displayPhone: string;
  email: string;
  cities: string;
  quote: string;
  experienceYears: number;
  familiesHelped: number;
  avatarSeed: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
}
