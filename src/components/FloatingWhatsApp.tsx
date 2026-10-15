import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, X, ChevronUp, UserCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { brokers, getWhatsAppUrl } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Falar com um Corretor</h3>
              <p className="text-xs text-slate-500">Atendimento humano e sem compromisso</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2.5">
            {brokers.map((broker, idx) => (
              <a
                key={broker.id}
                href={getWhatsAppUrl(idx === 0 ? 1 : 2)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 border border-emerald-200 text-sm">
                  {broker.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-900 truncate group-hover:text-emerald-700">
                      {broker.name}
                    </p>
                    <span className="text-[10px] text-slate-500 font-mono">CRECI {broker.creci}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{broker.role}</p>
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Online para simulação
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 text-center border-t border-slate-100">
            <span className="text-[10px] text-slate-400">Resposta média em menos de 5 minutos</span>
          </div>
        </div>
      )}

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        aria-label="Atendimento via WhatsApp"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        <span className="font-semibold hidden sm:inline">Tirar Dúvida no WhatsApp</span>
        <span className="font-semibold sm:hidden">WhatsApp</span>
        <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
