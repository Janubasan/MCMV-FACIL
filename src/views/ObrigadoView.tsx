import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, MessageSquare, BookOpen, Home, Calculator, Clock, Sparkles, Download, RefreshCw } from 'lucide-react';
import { downloadOfficialPdf } from '../utils/generatePdf';

export const ObrigadoView: React.FC = () => {
  const { setCurrentView, setIsGuideReaderOpen, getWhatsAppUrl, brokers, lastGeneratedLead, showToast } = useApp();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      downloadOfficialPdf(
        lastGeneratedLead
          ? {
              name: lastGeneratedLead.name,
              city: lastGeneratedLead.city,
              whatsapp: lastGeneratedLead.whatsapp,
              email: lastGeneratedLead.email,
            }
          : undefined
      );
      setIsDownloading(false);
      showToast('Download do Guia MCMV (15 páginas) concluído!');
    }, 400);
  };

  const broker1 = brokers[0];
  const broker2 = brokers[1] || brokers[0];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8 animate-in fade-in duration-200">
      <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md border border-emerald-200">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
          Solicitação Confirmada
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pronto{lastGeneratedLead?.name ? `, ${lastGeneratedLead.name.split(' ')[0]}` : ''}! Seu Guia Oficial Está Liberado. 🎉
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Você já pode baixar o arquivo PDF de 15 páginas ou ler diretamente na tela com o checklist de documentos.
        </p>
      </div>

      {/* Immediate Actions Box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-4 max-w-xl mx-auto shadow-sm">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Acesso Imediato ao Material de 15 Páginas</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Como deseja acessar seu Guia Completo?
        </h3>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 py-3.5 px-5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isDownloading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isDownloading ? 'Baixando...' : 'Baixar Arquivo PDF (.pdf)'}</span>
          </button>

          <button
            onClick={() => setIsGuideReaderOpen(true)}
            className="flex-1 py-3.5 px-5 text-sm font-bold text-white bg-[#0b5c46] hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Abrir no Navegador</span>
          </button>
        </div>
      </div>

      {/* Next Actions */}
      <div className="space-y-4 pt-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Fale com os corretores credenciados agora mesmo:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
          <a
            href={getWhatsAppUrl(1, `Olá, Januário! Baixei o Guia MCMV e gostaria de tirar uma dúvida rápida sobre o meu caso.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-3 group shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Falar com {broker1.name}</p>
              <span className="text-[11px] text-slate-500">{broker1.displayPhone}</span>
            </div>
          </a>

          <a
            href={getWhatsAppUrl(2, `Olá, Rosângela! Baixei o Guia MCMV e gostaria de tirar uma dúvida rápida sobre o meu caso.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-3 group shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Falar com {broker2.name}</p>
              <span className="text-[11px] text-slate-500">{broker2.displayPhone}</span>
            </div>
          </a>

          <button
            onClick={() => setCurrentView('empreendimentos')}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-3 text-left group cursor-pointer shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Ver Imóveis MRV</p>
              <span className="text-[11px] text-slate-500">Goiânia e Aparecida</span>
            </div>
          </button>

          <button
            onClick={() => setCurrentView('quiz')}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-3 text-left group cursor-pointer shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Fazer Diagnóstico</p>
              <span className="text-[11px] text-slate-500">Descubra sua chance</span>
            </div>
          </button>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Clock className="w-4 h-4 text-emerald-600" />
        <span>Tempo médio de resposta no WhatsApp: menos de 5 minutos em horário comercial</span>
      </div>
    </div>
  );
};
