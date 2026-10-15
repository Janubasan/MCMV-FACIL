import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Empreendimento } from '../types';
import { X, MapPin, CheckCircle2, Shield, Calendar, Calculator, MessageSquare, Sparkles } from 'lucide-react';

export const EmpreendimentoModal: React.FC = () => {
  const { selectedEmpreendimento, setSelectedEmpreendimento, getWhatsAppUrl, brokers } = useApp();
  const [simulatedIncome, setSimulatedIncome] = useState(3200);

  if (!selectedEmpreendimento) return null;

  const emp = selectedEmpreendimento;

  // Simple Brazilian Caixa simulation heuristic
  const estimatedParcel = Math.round(Math.min(simulatedIncome * 0.28, emp.simulatedMonthlyInstallment * (simulatedIncome / 3000)));
  const estimatedSubsidy = simulatedIncome <= 2850 ? emp.subsidyUpTo : simulatedIncome <= 4700 ? Math.round(emp.subsidyUpTo * 0.75) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Header bar */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={() => setSelectedEmpreendimento(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {emp.status}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Entrega: {emp.deliveryDate}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {emp.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{emp.bairro}, {emp.cidade} - {emp.estado}</span>
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <div>
              <span className="text-[11px] text-slate-500 block">A partir de</span>
              <span className="text-base sm:text-lg font-extrabold text-slate-900 font-mono">
                R$ {emp.priceStartingFrom.toLocaleString('pt-BR')}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Subsídio até</span>
              <span className="text-base sm:text-lg font-extrabold text-emerald-600 font-mono">
                R$ {emp.subsidyUpTo.toLocaleString('pt-BR')}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Parcelas a partir de</span>
              <span className="text-base sm:text-lg font-extrabold text-emerald-700 font-mono">
                R$ {emp.simulatedMonthlyInstallment}/mês
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Tipologia</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {emp.bedrooms}
              </span>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Sobre o Empreendimento
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {emp.description}
            </p>
          </div>

          {/* Differentiators & Leisure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Diferenciais MCMV</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {emp.differentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Lazer & Infraestrutura</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {emp.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Mini Simulator */}
          <div className="p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-emerald-700" />
                <span>Simulador Rápido de Parcela</span>
              </h4>
              <span className="text-xs font-bold text-emerald-800 font-mono">
                Renda: R$ {simulatedIncome.toLocaleString('pt-BR')}
              </span>
            </div>

            <input
              type="range"
              min={1800}
              max={8000}
              step={100}
              value={simulatedIncome}
              onChange={(e) => setSimulatedIncome(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />

            <div className="grid grid-cols-2 gap-3 pt-2 text-center">
              <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
                <span className="text-[11px] text-slate-500 block">Parcela Estimada</span>
                <span className="text-base font-extrabold text-emerald-700 font-mono">
                  ~ R$ {estimatedParcel.toLocaleString('pt-BR')}/mês
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
                <span className="text-[11px] text-slate-500 block">Subsídio do Governo</span>
                <span className="text-base font-extrabold text-slate-900 font-mono">
                  {estimatedSubsidy > 0 ? `Até R$ ${estimatedSubsidy.toLocaleString('pt-BR')}` : 'Sob consulta'}
                </span>
              </div>
            </div>
            <p className="text-[10px] text-emerald-800/80 text-center">
              * Valores simulados meramente ilustrativos baseados nas regras gerais da Caixa. Consulte análise oficial.
            </p>
          </div>

          {/* Dual Broker Contact CTA */}
          <div className="pt-2 border-t border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 text-center uppercase tracking-wider">
              Gostou do {emp.name}? Tire suas dúvidas ou agende sua visita ao decorado:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {brokers.map((broker, idx) => {
                const message = `Olá, ${broker.name}! Gostei muito do empreendimento "${emp.name}" em ${emp.cidade}. Minha renda é de aprox. R$ ${simulatedIncome.toLocaleString('pt-BR')}. Gostaria de simular as condições exatas e saber se posso visitar o decorado.`;
                return (
                  <a
                    key={broker.id}
                    href={getWhatsAppUrl(idx === 0 ? 1 : 2, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-xs flex items-center justify-between transition-colors shadow-sm"
                  >
                    <div className="text-left">
                      <span className="font-bold block">Falar com {broker.name}</span>
                      <span className="text-[10px] text-emerald-100">CRECI {broker.creci}</span>
                    </div>
                    <MessageSquare className="w-4 h-4 shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
