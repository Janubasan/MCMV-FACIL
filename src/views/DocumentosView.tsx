import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DOCUMENT_CHECKLIST } from '../data/mockData';
import { CheckSquare, Printer, Copy, MessageSquare, BookOpen, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const DocumentosView: React.FC = () => {
  const { getWhatsAppUrl, setIsGuideModalOpen, showToast } = useApp();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    t1: true,
    t2: true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItemsCount = DOCUMENT_CHECKLIST.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItemsCount) * 100);

  const handleCopyMissing = () => {
    const missing: string[] = [];
    DOCUMENT_CHECKLIST.forEach((cat) => {
      cat.items.forEach((item) => {
        if (!checkedItems[item.id]) {
          missing.push(`• ${item.label}`);
        }
      });
    });

    if (missing.length === 0) {
      showToast('Parabéns! Você já marcou todos os documentos!');
      return;
    }

    const textToCopy = `Minha lista de documentos pendentes para o Minha Casa Minha Vida:\n\n${missing.join('\n')}\n\nConferido no site MCMV Sem Dúvidas.`;
    navigator.clipboard.writeText(textToCopy);
    showToast('Lista copiada! Cole no seu WhatsApp ou bloco de notas.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Checklist Interativo 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Documentos para o Minha Casa Minha Vida: A Lista Completa
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Separe tudo antes de ir ao corretor ou ao banco. Ter os documentos organizados reduz o tempo de aprovação de semanas para apenas alguns dias.
        </p>
      </div>

      {/* Progress Bar Widget */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Seu Progresso de Organização
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {checkedCount} de {totalItemsCount} documentos prontos ({progressPercent}%)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMissing}
              className="py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copiar os itens que faltam para o WhatsApp"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar Pendentes</span>
            </button>

            <button
              onClick={() => window.print()}
              className="py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className="bg-emerald-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-8">
        {DOCUMENT_CHECKLIST.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 space-y-4"
          >
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {group.category}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{group.description}</p>
            </div>

            <div className="space-y-3">
              {group.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <label
                    key={item.id}
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(item.id)}
                      className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isChecked ? 'text-slate-900 font-semibold' : 'text-slate-800'}`}>
                        {item.label}
                      </p>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {item.note}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
            Assessoria Gratuita
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Não tem certeza se o seu documento está no padrão da Caixa?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
            Envie uma foto ou tire uma dúvida com os nossos corretores credenciados. Fazemos a pré-conferência antes de qualquer submissão.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <a
            href={getWhatsAppUrl('round-robin', `Olá! Estou com meus documentos separados pelo checklist do site MCMV Sem Dúvidas (${checkedCount} de ${totalItemsCount} itens) e gostaria de uma conferência rápida do meu caso.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3 px-5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Conferir no WhatsApp</span>
          </a>

          <button
            onClick={() => setIsGuideModalOpen(true)}
            className="w-full sm:w-auto py-3 px-5 text-xs font-bold text-emerald-200 hover:text-white border border-emerald-700 hover:border-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Baixar Checklist em PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
