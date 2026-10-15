import React, { useState } from 'react';
import { useApp, ViewType } from '../context/AppContext';
import { MessageSquare, Menu, X, Users, BookOpen, CheckSquare, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, getWhatsAppUrl, setIsGuideModalOpen, setIsCrmDrawerOpen, leads } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: ViewType }[] = [
    { label: 'Tirar Dúvidas', view: 'duvidas' },
    { label: 'Diagnóstico 2 Min', view: 'quiz' },
    { label: 'Documentos', view: 'documentos' },
    { label: 'Passo a Passo', view: 'passo-a-passo' },
    { label: 'Imóveis MRV', view: 'empreendimentos' },
  ];

  const handleNavClick = (view: ViewType) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer shrink-0"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
              MCMV <span className="text-emerald-600 font-extrabold">Sem Dúvidas</span>
            </span>
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`cursor-pointer whitespace-nowrap transition-colors py-1 ${
                    isActive
                      ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('sobre')}
              className={`cursor-pointer whitespace-nowrap transition-colors py-1 ${
                currentView === 'sobre'
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                  : 'hover:text-slate-900'
              }`}
            >
              Corretores
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsCrmDrawerOpen(true)}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors py-2 px-3 border border-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
              title="Painel de Leads & Configuração dos Corretores"
            >
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Painel ({leads.length})</span>
            </button>

            <a
              href={getWhatsAppUrl('round-robin')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsCrmDrawerOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 text-xs border border-slate-200 rounded-lg"
              title="Painel de Leads"
            >
              <Users className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in fade-in duration-150">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                  currentView === link.view
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('sobre')}
              className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                currentView === 'sobre'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Sobre os Corretores
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                currentView === 'blog'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Artigos & Orientações
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsGuideModalOpen(true);
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Baixar Guia Grátis (PDF)</span>
              </button>

              <a
                href={getWhatsAppUrl('round-robin')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chamar Corretor no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
