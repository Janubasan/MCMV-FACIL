import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Download } from 'lucide-react';

export const LeadCaptureModal: React.FC = () => {
  const { isGuideModalOpen, setIsGuideModalOpen, setIsGuideReaderOpen, addLead, showToast, setCurrentView } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    hasFgts: 'sim' as 'sim' | 'pouco' | 'nao',
    lgpdConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isGuideModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      addLead({
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.email,
        city: formData.city || 'Não informada',
        hasFgts: formData.hasFgts,
        source: 'pdf_guide',
        details: 'Download solicitado do Guia Completo Minha Casa Minha Vida: do zero à chave.',
      });

      setIsSubmitting(false);
      setIsGuideModalOpen(false);
      showToast('Acesso ao Guia liberado com sucesso!');
      setIsGuideReaderOpen(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-emerald-700 text-white p-6 relative">
          <button
            onClick={() => setIsGuideModalOpen(false)}
            className="absolute top-4 right-4 text-emerald-100 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Material Educativo Gratuito</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            Guia Completo Minha Casa Minha Vida: do Zero à Chave
          </h3>
          <p className="text-sm text-emerald-100 mt-1">
            27 dúvidas respondidas, checklist de documentos para imprimir e o passo a passo completo sem enrolação.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Cidade de interesse
                </label>
                <input
                  type="text"
                  placeholder="Ex.: Campinas, SP"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
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
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-semibold'
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
                  Concordo em receber o guia e em ser contatado(a) pelos corretores parceiros para esclarecimentos do MCMV. Seus dados estão 100% protegidos contra spam.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Preparando seu acesso...</span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Liberar Meu Guia Completo Agora (Grátis)</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% gratuito e seguro
            </span>
            <span>Edição Atualizada 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
