import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, BookOpen, ShieldCheck, Download, RefreshCw } from 'lucide-react';
import { downloadOfficialPdf } from '../utils/generatePdf';

export const LeadCaptureModal: React.FC = () => {
  const {
    isGuideModalOpen,
    setIsGuideModalOpen,
    setCurrentView,
    addLead,
    showToast,
  } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: 'Goiânia',
    hasFgts: 'sim' as 'sim' | 'pouco' | 'nao',
    lgpdConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isGuideModalOpen) return null;

  const handleClose = () => {
    setIsGuideModalOpen(false);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    setTimeout(() => {
      // 1. Salva o Lead no CRM e no LocalStorage
      addLead({
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.trim(),
        email: formData.email.trim(),
        city: formData.city || 'Goiânia / Aparecida',
        hasFgts: formData.hasFgts,
        source: 'pdf_guide',
        details: 'Download do Guia Completo MCMV 2026 (15 Páginas) solicitado.',
      });

      // 2. Dispara o download automático do PDF oficial de 15 páginas
      downloadOfficialPdf({
        name: formData.name.trim(),
        city: formData.city,
        whatsapp: formData.whatsapp.trim(),
        email: formData.email.trim(),
      });

      setIsSubmitting(false);

      // 3. FECHA O POPUP IMEDIATAMENTE (solicitação do usuário: ao baixar, o popup deve fechar)
      setIsGuideModalOpen(false);

      // 4. Redireciona para a página limpa de confirmação e agradecimento
      setCurrentView('obrigado');
      showToast('🎉 Guia Oficial baixado com sucesso! Abrindo confirmação...');
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#0b5c46] text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-emerald-100 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Download Gratuito · E-book & Checklist</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
            Guia Completo Minha Casa Minha Vida: do Zero à Chave
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Edição Goiânia e Aparecida de Goiânia · 15 páginas com regras 2026, checklist imprimível e 27 dúvidas respondidas.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Mariana Fernandes"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(62) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cidade de interesse
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Goiânia">Goiânia</option>
                  <option value="Aparecida de Goiânia">Aparecida de Goiânia</option>
                  <option value="Senador Canedo">Senador Canedo</option>
                  <option value="Trindade">Trindade</option>
                  <option value="Outra região de Goiás">Outra região de Goiás</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                E-mail para envio do material *
              </label>
              <input
                type="email"
                required
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Você ou quem vai comprar com você já tem FGTS?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'sim', label: 'Sim, tenho saldo' },
                  { value: 'pouco', label: 'Acho que é pouco' },
                  { value: 'nao', label: 'Não / Não sei' },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setFormData({ ...formData, hasFgts: opt.value as any })}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      formData.hasFgts === opt.value
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.lgpdConsent}
                  onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-[11px] text-slate-500 leading-tight">
                  Concordo em baixar o guia oficial e em receber contato dos corretores credenciados Januário Leal e Rosângela de Lima. Dados 100% protegidos pela LGPD.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2 font-bold">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Gerando seu PDF oficial e cadastrando...
                </span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Baixar Guia em PDF + Checklist (15 Páginas)</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% gratuito e seguro
            </span>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer underline"
            >
              Fechar sem baixar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
