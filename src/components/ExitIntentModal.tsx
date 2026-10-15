import React from 'react';
import { useApp } from '../context/AppContext';
import { X, BookOpen, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export const ExitIntentModal: React.FC = () => {
  const { isExitIntentOpen, setIsExitIntentOpen, setIsGuideModalOpen } = useApp();

  if (!isExitIntentOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-center">
        <button
          onClick={() => setIsExitIntentOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm">
          <BookOpen className="w-7 h-7" />
        </div>

        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
          Espere! Antes de sair...
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Leve o Guia Completo MCMV com você — é 100% grátis.
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Evite semanas de bate-cabeça. O guia traz o <strong>checklist de documentos</strong>, as 27 dúvidas respondidas e as regras oficiais de 2026 explicadas em português simples.
        </p>

        <div className="mt-4 py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl text-left space-y-1.5 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Checklist para conferir no celular</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Como usar o FGTS para zerar ou reduzir entrada</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Caminhos para quem tem restrição ou score baixo</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          <button
            onClick={() => {
              setIsExitIntentOpen(false);
              setIsGuideModalOpen(true);
            }}
            className="w-full py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Sim! Quero Meu Guia Grátis</span>
          </button>

          <button
            onClick={() => setIsExitIntentOpen(false)}
            className="text-xs text-slate-400 hover:text-slate-600 py-1 cursor-pointer"
          >
            Não preciso de ajuda agora, fechar
          </button>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Sem spam. Seus dados estão protegidos pela LGPD.
        </p>
      </div>
    </div>
  );
};
