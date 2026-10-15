import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OfficialPdfDocument } from './OfficialPdfDocument';
import { downloadOfficialPdf } from '../utils/generatePdf';
import {
  X,
  Printer,
  BookOpen,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Download,
  Eye,
  CheckCircle2,
  Phone,
} from 'lucide-react';

const PAGE_NAMES = [
  'Página 1: Capa Oficial & Identificação',
  'Página 2: Sumário do Guia',
  'Página 3: 1. Você Pode Participar?',
  'Página 4: 2. Faixas e Renda Familiar 2026',
  'Página 5: 3. FGTS: O Que É e Como Usar',
  'Página 6: 4. Entrada: Precisa Mesmo?',
  'Página 7: 5. Parcelas: Quanto Vai Pesar no Bolso?',
  'Página 8: 6. Nome Sujo e Score de Crédito',
  'Página 9: 7. Checklist de Documentos (Imprimível)',
  'Página 10: 8. Os 7 Passos Até a Chave',
  'Página 11: 9. 27 Dúvidas Mais Comuns (Parte 1 - Perguntas 1 a 7)',
  'Página 12: 9. 27 Dúvidas Mais Comuns (Parte 2 - Perguntas 8 a 15)',
  'Página 13: 9. 27 Dúvidas Mais Comuns (Parte 3 - Perguntas 16 a 22)',
  'Página 14: 9. Dúvidas (Fim) & 10. Custos e Glossário',
  'Página 15: 11. Próximos Passos & Plantão Oficial',
];

export const GuideReaderModal: React.FC = () => {
  const {
    isGuideReaderOpen,
    setIsGuideReaderOpen,
    getWhatsAppUrl,
    lastGeneratedLead,
    showToast,
  } = useApp();

  const [activePage, setActivePage] = useState<number>(1);
  const [viewAllPages, setViewAllPages] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  if (!isGuideReaderOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
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
      showToast('Download do Guia MCMV Oficial (15 páginas) concluído!');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="relative w-full max-w-5xl bg-slate-100 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[96vh] print:max-h-none print:border-none print:shadow-none print:bg-white">
        {/* Top Control Bar */}
        <div className="bg-[#0b5c46] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-800 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>Guia Completo MCMV Sem Dúvidas</span>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-mono font-normal">
                  15 Páginas · 2026
                </span>
              </h2>
              <p className="text-[11px] text-emerald-100 hidden sm:block">
                Goiânia e Aparecida de Goiânia · Plantão com Januário Leal e Rosângela de Lima
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Baixar arquivo PDF de 15 páginas"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Gerando PDF...' : 'Baixar Arquivo PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-emerald-100 hover:text-white bg-emerald-800/80 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Imprimir ou Salvar pelo Navegador"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              onClick={() => setIsGuideReaderOpen(false)}
              className="p-1.5 text-emerald-200 hover:text-white hover:bg-emerald-800/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar leitor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Secondary Navigation & Page Selector Toolbar */}
        <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 print:hidden shadow-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Modo de Exibição:</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
              <button
                onClick={() => setViewAllPages(false)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  !viewAllPages
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Página a Página (1 a 15)
              </button>
              <button
                onClick={() => setViewAllPages(true)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewAllPages
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Todas as 15 Páginas Juntas
              </button>
            </div>
          </div>

          {!viewAllPages ? (
            <div className="flex items-center gap-2">
              <button
                disabled={activePage === 1}
                onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <select
                value={activePage}
                onChange={(e) => setActivePage(Number(e.target.value))}
                className="px-2.5 py-1 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                {PAGE_NAMES.map((name, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {name}
                  </option>
                ))}
              </select>

              <button
                disabled={activePage === 15}
                onClick={() => setActivePage((p) => Math.min(15, p + 1))}
                className="px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Próxima</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <span className="text-slate-500 font-medium">
              Mostrando as 15 páginas diagramadas em sequência contínua
            </span>
          )}

          {/* Quick WhatsApp Link */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 hidden md:inline">Ficou com dúvida?</span>
            <a
              href={getWhatsAppUrl(
                'round-robin',
                `Olá! Estou lendo a página ${activePage} do Guia MCMV e gostaria de tirar uma dúvida.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-md flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>Plantão WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Document Viewer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/70 print:p-0 print:bg-white print:overflow-visible">
          <div className="max-w-[210mm] mx-auto transition-all">
            <OfficialPdfDocument
              activePage={viewAllPages ? undefined : activePage}
              onCopyMessage={() => showToast('Mensagem copiada para a área de transferência!')}
            />
          </div>

          {/* Bottom Floating Navigation for single page mode */}
          {!viewAllPages && (
            <div className="max-w-[210mm] mx-auto mt-4 p-3 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-between text-xs print:hidden">
              <button
                disabled={activePage === 1}
                onClick={() => {
                  setActivePage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-30 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Página Anterior</span>
              </button>

              <span className="font-bold text-slate-700">
                Página {activePage} de 15
              </span>

              <button
                disabled={activePage === 15}
                onClick={() => {
                  setActivePage((p) => Math.min(15, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-30 flex items-center gap-1 cursor-pointer"
              >
                <span>Próxima Página</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
