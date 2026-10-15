import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export const DiagnosticModal: React.FC = () => {
  const { isDiagnosticModalOpen, setIsDiagnosticModalOpen, diagnosticModalTopic, addLead, getWhatsAppUrl, showToast } = useApp();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [incomeRange, setIncomeRange] = useState('De R$ 2.500 a R$ 4.500');
  const [hasFgts, setHasFgts] = useState<'sim' | 'pouco' | 'nao'>('sim');

  if (!isDiagnosticModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) {
      alert('Por favor, informe seu nome e WhatsApp.');
      return;
    }

    addLead({
      name,
      whatsapp,
      email: 'contato.direto@whatsapp.lead',
      city: 'Consulta Direta',
      hasFgts,
      incomeRange,
      source: 'doubt_diagnostic',
      details: `Tema de dúvida: ${diagnosticModalTopic}. Renda informada: ${incomeRange}. FGTS: ${hasFgts}.`,
    });

    setIsDiagnosticModalOpen(false);
    showToast('Diagnóstico pronto! Abrindo conversa no WhatsApp...');

    const msg = `Olá! Estava no site MCMV Sem Dúvidas pesquisando sobre "${diagnosticModalTopic}". Meu nome é ${name}, minha renda familiar é aprox. ${incomeRange} e ${hasFgts === 'sim' ? 'tenho FGTS com saldo' : hasFgts === 'pouco' ? 'tenho pouco FGTS' : 'não possuo FGTS'}. Gostaria de saber como fica meu caso!`;
    const url = getWhatsAppUrl('round-robin', msg);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        <div className="bg-slate-900 text-white p-5 relative">
          <button
            onClick={() => setIsDiagnosticModalOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
            Análise Rápida de Perfil
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">
            Descubra como se aplica ao seu caso: <span className="text-emerald-400 font-extrabold">{diagnosticModalTopic}</span>
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Em menos de 1 minuto nossos corretores credenciados calculam sua estimativa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              placeholder="Como prefere ser chamado(a)?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp com DDD *
            </label>
            <input
              type="tel"
              required
              placeholder="(11) 98765-4321"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Renda familiar somada (aproximada)
            </label>
            <select
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            >
              <option value="Até R$ 2.850 (Faixa 1)">Até R$ 2.850 (Faixa 1 - Máximo Subsídio)</option>
              <option value="De R$ 2.850 a R$ 4.700 (Faixa 2)">De R$ 2.850 a R$ 4.700 (Faixa 2)</option>
              <option value="De R$ 4.700 a R$ 8.000 (Faixa 3)">De R$ 4.700 a R$ 8.000 (Faixa 3)</option>
              <option value="Acima de R$ 8.000">Acima de R$ 8.000</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Possui FGTS com saldo?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sim', label: 'Sim' },
                { id: 'pouco', label: 'Pouco' },
                { id: 'nao', label: 'Não' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setHasFgts(item.id as any)}
                  className={`py-1.5 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    hasFgts === item.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ver Resposta do Meu Caso no WhatsApp</span>
          </button>

          <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Atendimento gratuito por corretores credenciados (CRECI).
          </p>
        </form>
      </div>
    </div>
  );
};
