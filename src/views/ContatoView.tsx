import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Phone, Mail, MapPin, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContatoView: React.FC = () => {
  const { brokers, getWhatsAppUrl, addLead, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Por favor, informe seu nome e WhatsApp.');
      return;
    }

    addLead({
      name: formData.name,
      whatsapp: formData.whatsapp,
      email: formData.email || 'nao.informado@lead.com',
      city: formData.city || 'Não informada',
      hasFgts: 'sim',
      source: 'contact_form',
      details: formData.message,
    });

    setSubmitted(true);
    showToast('Mensagem enviada com sucesso! Um corretor entrará em contato.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Canais Diretos
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Fale com Nossa Equipe Especializada
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Atendimento transparente para tirar dúvidas, agendar visitas aos apartamentos decorados ou realizar simulação oficial Caixa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct WhatsApp options */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Contato Imediato no WhatsApp
            </h3>

            {brokers.map((broker, idx) => (
              <div key={broker.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{broker.name}</h4>
                    <span className="text-[11px] text-slate-500 font-mono">CRECI {broker.creci}</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-xs text-slate-600">{broker.cities}</p>
                <a
                  href={getWhatsAppUrl(idx === 0 ? 1 : 2, `Olá, ${broker.name}! Gostaria de conversar sobre as condições do Minha Casa Minha Vida.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chamar {broker.name.split(' ')[0]} ({broker.displayPhone})</span>
                </a>
              </div>
            ))}
          </div>

          <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 space-y-2">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Garantia de Não Cobrança:
            </span>
            <p className="text-emerald-800 leading-relaxed">
              Nosso trabalho de consultoria, conferência de documentação e simulação bancária é 100% gratuito. Jamais solicitamos adiantamentos.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mensagem Recebida!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Obrigado, {formData.name}. Nossa equipe recebeu sua mensagem e retornará em breve pelo WhatsApp informado.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-700 underline cursor-pointer"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Envie uma Mensagem para Agendamento ou Simulação
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex.: Lucas Rodrigues"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
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
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Cidade de Interesse
                  </label>
                  <input
                    type="text"
                    placeholder="Ex.: Campinas, SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Como podemos te ajudar?
                </label>
                <textarea
                  rows={4}
                  placeholder="Ex.: Gostaria de saber se minha renda de R$ 3.000 consegue aprovar um 2 dormitórios na Zona Leste."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação de Contato</span>
              </button>

              <p className="text-[10px] text-center text-slate-400">
                Seus dados serão utilizados única e exclusivamente para este atendimento, conforme a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
