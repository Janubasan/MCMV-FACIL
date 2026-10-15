import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BrokerInfo, Lead, Empreendimento, QuizResultProfile, FaqCategory } from '../types';
import { DEFAULT_BROKERS, EMPREENDIMENTOS_MRV } from '../data/mockData';

export type ViewType =
  | 'home'
  | 'duvidas'
  | 'quiz'
  | 'documentos'
  | 'passo-a-passo'
  | 'empreendimentos'
  | 'sobre'
  | 'contato'
  | 'obrigado'
  | 'blog';

interface AppContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  selectedFaqCategory: FaqCategory | null;
  setSelectedFaqCategory: (cat: FaqCategory | null) => void;
  selectedEmpreendimento: Empreendimento | null;
  setSelectedEmpreendimento: (emp: Empreendimento | null) => void;
  
  // Modals
  isGuideModalOpen: boolean;
  setIsGuideModalOpen: (open: boolean) => void;
  isGuideReaderOpen: boolean;
  setIsGuideReaderOpen: (open: boolean) => void;
  isDiagnosticModalOpen: boolean;
  setIsDiagnosticModalOpen: (open: boolean) => void;
  diagnosticModalTopic: string;
  openDiagnosticModal: (topic?: string) => void;
  isExitIntentOpen: boolean;
  setIsExitIntentOpen: (open: boolean) => void;
  isCrmDrawerOpen: boolean;
  setIsCrmDrawerOpen: (open: boolean) => void;

  // Brokers
  brokers: BrokerInfo[];
  updateBroker: (broker: BrokerInfo) => void;
  getWhatsAppUrl: (brokerIndex?: 1 | 2 | 'round-robin', customMessage?: string) => string;

  // Leads & CRM
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => Lead;
  lastGeneratedLead: Lead | null;
  clearLeads: () => void;
  exportLeadsCsv: () => void;

  // Quiz State
  quizResult: QuizResultProfile | null;
  setQuizResult: (res: QuizResultProfile | null) => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_LEADS_KEY = 'mcmv_leads_data_goiania_v2';
const LOCAL_STORAGE_BROKERS_KEY = 'mcmv_brokers_config_goiania_v2';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentViewInternal] = useState<ViewType>('home');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<FaqCategory | null>(null);
  const [selectedEmpreendimento, setSelectedEmpreendimento] = useState<Empreendimento | null>(null);

  // Modals
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isGuideReaderOpen, setIsGuideReaderOpen] = useState(false);
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false);
  const [diagnosticModalTopic, setDiagnosticModalTopic] = useState<string>('Geral');
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [isCrmDrawerOpen, setIsCrmDrawerOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  // Scroll to top on view change
  const setCurrentView = (view: ViewType) => {
    setCurrentViewInternal(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Brokers configuration with persistence
  const [brokers, setBrokers] = useState<BrokerInfo[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_BROKERS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse brokers from storage', e);
    }
    return DEFAULT_BROKERS;
  });

  const updateBroker = (updatedBroker: BrokerInfo) => {
    setBrokers((prev) => {
      const next = prev.map((b) => (b.id === updatedBroker.id ? updatedBroker : b));
      localStorage.setItem(LOCAL_STORAGE_BROKERS_KEY, JSON.stringify(next));
      return next;
    });
    showToast(`Configurações de ${updatedBroker.name} salvas!`);
  };

  // Leads
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_LEADS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse leads from storage', e);
    }
    return [
      {
        id: 'lead-sample-1',
        name: 'Fernanda Moreira',
        whatsapp: '(62) 99123-4567',
        email: 'fernanda.m@gmail.com',
        city: 'Goiânia',
        hasFgts: 'sim',
        incomeRange: 'R$ 2.900 (Faixa 2)',
        source: 'quiz',
        details: 'Resultado: Alta chance (21 pts). Interesse no Gran Safira (Parque Atheneu).',
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: 'lead-sample-2',
        name: 'Rodrigo & Camila',
        whatsapp: '(62) 98234-8901',
        email: 'rodrigo.camila@outlook.com',
        city: 'Aparecida de Goiânia',
        hasFgts: 'sim',
        incomeRange: 'R$ 3.400 (Faixa 2)',
        source: 'pdf_guide',
        details: 'Baixou Guia Completo MCMV. Interesse no Gran Florence (Parque Santa Cecília).',
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      }
    ];
  });

  const [lastGeneratedLead, setLastGeneratedLead] = useState<Lead | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResultProfile | null>(null);

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt'>): Lead => {
    const newLead: Lead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const nextLeads = [newLead, ...leads];
    setLeads(nextLeads);
    setLastGeneratedLead(newLead);
    try {
      localStorage.setItem(LOCAL_STORAGE_LEADS_KEY, JSON.stringify(nextLeads));
    } catch (e) {
      console.warn('Failed to save lead', e);
    }
    return newLead;
  };

  const clearLeads = () => {
    setLeads([]);
    localStorage.removeItem(LOCAL_STORAGE_LEADS_KEY);
    showToast('Histórico de leads limpo.');
  };

  const exportLeadsCsv = () => {
    if (leads.length === 0) {
      showToast('Nenhum lead para exportar.');
      return;
    }
    const headers = ['ID', 'Data/Hora', 'Nome', 'WhatsApp', 'Email', 'Cidade', 'FGTS', 'Faixa de Renda', 'Origem', 'Detalhes'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleString('pt-BR'),
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.whatsapp}"`,
      `"${l.email}"`,
      `"${l.city}"`,
      `"${l.hasFgts}"`,
      `"${l.incomeRange || '-'}"`,
      `"${l.source}"`,
      `"${(l.details || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_mcmv_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Download do arquivo CSV iniciado!');
  };

  const getWhatsAppUrl = (brokerIndex: 1 | 2 | 'round-robin' = 'round-robin', customMessage?: string) => {
    let chosenBroker: BrokerInfo;
    if (brokerIndex === 1) {
      chosenBroker = brokers[0] || DEFAULT_BROKERS[0];
    } else if (brokerIndex === 2) {
      chosenBroker = brokers[1] || brokers[0] || DEFAULT_BROKERS[0];
    } else {
      // Alternate cleanly without calling setState during component rendering
      const alternateIndex = Math.floor(Date.now() / 60000) % (brokers.length || 1);
      chosenBroker = brokers[alternateIndex] || brokers[0] || DEFAULT_BROKERS[0];
    }

    const defaultMsg = `Olá, ${chosenBroker.name}! Acessei o site MCMV Sem Dúvidas e gostaria de tirar uma dúvida sobre o Minha Casa Minha Vida para o meu caso. Pode me orientar?`;
    const messageToUse = customMessage || defaultMsg;
    const cleanPhone = chosenBroker.phone.replace(/\D/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageToUse)}`;
  };

  const openDiagnosticModal = (topic: string = 'Geral') => {
    setDiagnosticModalTopic(topic);
    setIsDiagnosticModalOpen(true);
  };

  // Exit intent detection (fires only once per session)
  useEffect(() => {
    let fired = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !fired) {
        fired = true;
        setIsExitIntentOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedFaqCategory,
        setSelectedFaqCategory,
        selectedEmpreendimento,
        setSelectedEmpreendimento,
        isGuideModalOpen,
        setIsGuideModalOpen,
        isGuideReaderOpen,
        setIsGuideReaderOpen,
        isDiagnosticModalOpen,
        setIsDiagnosticModalOpen,
        diagnosticModalTopic,
        openDiagnosticModal,
        isExitIntentOpen,
        setIsExitIntentOpen,
        isCrmDrawerOpen,
        setIsCrmDrawerOpen,
        brokers,
        updateBroker,
        getWhatsAppUrl,
        leads,
        addLead,
        lastGeneratedLead,
        clearLeads,
        exportLeadsCsv,
        quizResult,
        setQuizResult,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
