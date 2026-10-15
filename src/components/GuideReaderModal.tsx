import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GUIDE_CHAPTERS } from '../data/mockData';
import { X, Printer, BookOpen, MessageSquare, ChevronRight, ChevronLeft, CheckSquare } from 'lucide-react';

export const GuideReaderModal: React.FC = () => {
  const { isGuideReaderOpen, setIsGuideReaderOpen, getWhatsAppUrl } = useApp();
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  if (!isGuideReaderOpen) return null;

  const currentChapter = GUIDE_CHAPTERS[activeChapterIndex];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none">
        {/* Top bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 print:hidden shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Guia Completo Minha Casa Minha Vida: do Zero à Chave
              </h2>
              <p className="text-xs text-slate-400">Edição Oficial 2026 · 11 Capítulos</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={() => setIsGuideReaderOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar leitor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body with Left Sidebar Navigation */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden print:overflow-visible">
          {/* Chapter sidebar index */}
          <aside className="w-full md:w-72 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto print:hidden shrink-0">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">
              Sumário dos Capítulos
            </h3>
            <div className="space-y-1">
              {GUIDE_CHAPTERS.map((ch, idx) => (
                <button
                  key={ch.chapter}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-start gap-2 cursor-pointer ${
                    activeChapterIndex === idx
                      ? 'bg-emerald-100/70 text-emerald-900 font-bold border-l-2 border-emerald-600'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="font-mono text-[11px] text-slate-400 shrink-0">
                    {String(ch.chapter).padStart(2, '0')}.
                  </span>
                  <span className="line-clamp-2">{ch.title}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
              <p className="font-semibold text-emerald-900 mb-1">Dúvida no meio da leitura?</p>
              <p className="text-emerald-700 text-[11px] mb-2 leading-relaxed">
                Nossos corretores tiram sua dúvida no WhatsApp agora mesmo.
              </p>
              <a
                href={getWhatsAppUrl('round-robin', `Olá! Estou lendo o capítulo ${currentChapter.chapter} do Guia MCMV e fiquei com uma dúvida.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chamar Corretor</span>
              </a>
            </div>
          </aside>

          {/* Chapter Reading Pane */}
          <main className="flex-1 p-6 sm:p-10 overflow-y-auto bg-white print:p-0 print:overflow-visible">
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Chapter Header */}
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs font-bold font-mono text-emerald-600 tracking-wider uppercase">
                  Capítulo {currentChapter.chapter} de {GUIDE_CHAPTERS.length}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {currentChapter.title}
                </h1>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {currentChapter.subtitle}
                </p>
              </div>

              {/* Chapter Content Paragraphs */}
              <div className="prose prose-slate prose-sm sm:prose-base max-w-none space-y-4 text-slate-700 leading-relaxed">
                {currentChapter.content.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Special Checklist view if Chapter 7 */}
              {currentChapter.chapter === 7 && (
                <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                    <span>Checklist Rápido Imprimível (Marque o que tem)</span>
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    {[
                      'Documento oficial com foto (RG ou CNH dentro da validade) e CPF',
                      'Certidão de Nascimento (solteiro) ou Casamento/União Estável',
                      'Comprovante de residência recente dos últimos 60 dias (água/luz/gás)',
                      '3 últimos holerites (CLT) ou 6 extratos bancários (autônomo/MEI)',
                      'Carteira de Trabalho física ou digital',
                      'Extrato atualizado do FGTS emitido no app da Caixa',
                      'Declaração de Imposto de Renda e recibo do último ano (se declarou)',
                    ].map((item, i) => (
                      <label key={i} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapter Action Footer */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    disabled={activeChapterIndex === 0}
                    onClick={() => setActiveChapterIndex((i) => Math.max(0, i - 1))}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>
                  <button
                    disabled={activeChapterIndex === GUIDE_CHAPTERS.length - 1}
                    onClick={() => setActiveChapterIndex((i) => Math.min(GUIDE_CHAPTERS.length - 1, i + 1))}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={getWhatsAppUrl('round-robin', `Olá! Acabei de ler o capítulo ${currentChapter.chapter} do Guia MCMV e quero orientações para o meu caso.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
