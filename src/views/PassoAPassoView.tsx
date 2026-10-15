import React from 'react';
import { useApp } from '../context/AppContext';
import { TIMELINE_STEPS } from '../data/mockData';
import { Clock, AlertTriangle, Lightbulb, MessageSquare, BookOpen, Key, CheckCircle } from 'lucide-react';

export const PassoAPassoView: React.FC = () => {
  const { getWhatsAppUrl, setIsGuideModalOpen, setCurrentView } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Linha do Tempo Completa
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Os 7 Passos: Do Aluguel à Entrega das Chaves
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Sem surpresas no caminho. Conheça com antecedência cada fase do financiamento, os prazos médios e o que você precisa fazer para acelerar sua aprovação.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-slate-200">
        {TIMELINE_STEPS.map((item) => (
          <div key={item.step} className="relative flex items-start gap-4 sm:gap-6 group">
            {/* Step Number Circle */}
            <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-emerald-600 text-white font-extrabold text-base sm:text-xl flex items-center justify-center shrink-0 shadow-md relative z-10 font-mono">
              {item.step === 7 ? <Key className="w-5 sm:w-7 h-5 sm:h-7" /> : String(item.step).padStart(2, '0')}
            </div>

            {/* Step Card Content */}
            <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4 hover:border-emerald-400 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.time}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottleneck & Tip boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                  <span className="font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    O que pode travar:
                  </span>
                  <p className="text-amber-800/90 leading-relaxed">{item.bottleneck}</p>
                </div>

                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    Dica do corretor:
                  </span>
                  <p className="text-emerald-800/90 leading-relaxed">{item.tip}</p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex justify-end">
                <a
                  href={getWhatsAppUrl('round-robin', `Olá! Estou na Etapa ${item.step} (${item.title}) do Minha Casa Minha Vida e gostaria de orientações.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Falar sobre esta etapa no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Pronto para iniciar o Passo 1 hoje mesmo?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Faça nosso diagnóstico rápido de 2 minutos ou baixe o guia gratuito com todos os detalhes e checklist.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setCurrentView('quiz')}
            className="py-3 px-5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow cursor-pointer"
          >
            Fazer Diagnóstico (Passo 1)
          </button>
          <button
            onClick={() => setIsGuideModalOpen(true)}
            className="py-3 px-5 text-xs font-bold text-emerald-300 hover:text-white border border-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            Baixar Guia Completo (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
