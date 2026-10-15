import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../data/mockData';
import { FaqCategory } from '../types';
import { Search, ChevronDown, MessageSquare, BookOpen, Calculator, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';

export const DuvidasView: React.FC = () => {
  const {
    selectedFaqCategory,
    setSelectedFaqCategory,
    getWhatsAppUrl,
    setIsGuideModalOpen,
    openDiagnosticModal,
    setCurrentView,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  // Filter items
  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedFaqCategory ? item.category === selectedFaqCategory : true;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fullAnswer.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedFaqCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setExpandedFaqId((curr) => (curr === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Tirador de Dúvidas Interativo
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Tire Sua Dúvida Sobre o Minha Casa Minha Vida
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Sem juridiquês. Escolha um dos 10 temas abaixo ou digite sua pergunta para encontrar a resposta exata.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-2xl mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Ex: Nome sujo, score, FGTS na entrada, autônomo, parcelas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 text-sm sm:text-base bg-white border border-slate-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            Limpar
          </button>
        )}
      </div>

      {/* Categories Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setSelectedFaqCategory(null)}
          className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            selectedFaqCategory === null
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todas as Dúvidas ({FAQ_ITEMS.length})
        </button>
        {FAQ_CATEGORIES.map((cat) => {
          const count = FAQ_ITEMS.filter((f) => f.category === cat.id).length;
          const isSelected = selectedFaqCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedFaqCategory(cat.id as FaqCategory)}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? 'bg-emerald-600 text-white font-bold shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">
              Nenhuma dúvida encontrada para "{searchQuery}"
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Mas fique tranquilo: nossa equipe pode responder sua dúvida diretamente agora pelo WhatsApp.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={getWhatsAppUrl('round-robin', `Olá! Estava procurando no Tirador de Dúvidas sobre "${searchQuery}" e gostaria de ajuda para tirar minha dúvida.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Perguntar ao Corretor no WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-1">
                      {faq.shortAnswer}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg bg-slate-50 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-emerald-50 text-emerald-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 animate-in fade-in duration-150">
                    {/* Full Answer paragraphs */}
                    <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.fullAnswer.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Tips if present */}
                    {faq.tips && faq.tips.length > 0 && (
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1.5 text-xs text-emerald-900">
                        <span className="font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                          Dica do Corretor Especialista:
                        </span>
                        {faq.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Diagnostic Offer Box */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">
                          Quer saber como isso se aplica exatamente ao SEU caso?
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Descubra se sua renda e perfil se encaixam nessa condição em 1 minuto.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => openDiagnosticModal(faq.categoryLabel)}
                          className="flex-1 sm:flex-none py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Sim, quero meu diagnóstico
                        </button>
                        <button
                          onClick={() => setIsGuideModalOpen(true)}
                          className="py-2 px-2.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg border border-slate-200 hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
                          title="Baixar guia em PDF"
                        >
                          Baixar Guia PDF
                        </button>
                      </div>
                    </div>

                    {/* Direct WhatsApp CTA */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
                      <span className="text-slate-500 font-medium">Restou alguma dúvida sobre este ponto?</span>
                      <div className="flex items-center gap-3">
                        <a
                          href={getWhatsAppUrl(1, `Olá, Januário! Vi no Tirador de Dúvidas a pergunta: "${faq.question}". Gostaria de entender melhor para a minha situação.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Falar com Januário</span>
                        </a>
                        <span className="text-slate-300">·</span>
                        <a
                          href={getWhatsAppUrl(2, `Olá, Rosângela! Vi no Tirador de Dúvidas a pergunta: "${faq.question}". Gostaria de entender melhor para a minha situação.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Falar com Rosângela</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Sticky CTA Banner */}
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-white">Prefere um diagnóstico completo de uma vez?</h3>
          <p className="text-xs text-slate-400">
            Responda 8 perguntas rápidas e receba uma nota de chance personalizada.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCurrentView('quiz')}
            className="py-3 px-5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow cursor-pointer"
          >
            Fazer Diagnóstico (2 Min)
          </button>
          <button
            onClick={() => setIsGuideModalOpen(true)}
            className="py-3 px-4 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            Baixar E-book
          </button>
        </div>
      </div>
    </div>
  );
};
