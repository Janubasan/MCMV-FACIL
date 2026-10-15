import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, MessageSquare, CheckCircle2, Award, Heart, Phone, Mail, MapPin } from 'lucide-react';

export const SobreView: React.FC = () => {
  const { brokers, getWhatsAppUrl, setIsGuideModalOpen } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Credibilidade e Transparência
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Conheça Quem Vai Cuidar do Seu Financiamento
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          O Minha Casa Minha Vida não precisa ser um labirinto burocrático. Nosso papel é entregar clareza antes de qualquer assinatura.
        </p>
      </div>

      {/* Two Brokers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brokers.map((broker, idx) => (
          <div
            key={broker.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 space-y-5">
              {/* Avatar & Badges */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white font-bold text-2xl flex items-center justify-center shrink-0 shadow-md">
                  {broker.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{broker.name}</h3>
                  <p className="text-xs text-emerald-700 font-semibold">{broker.role}</p>
                  <span className="inline-block mt-0.5 text-xs font-mono font-bold text-slate-500">
                    CRECI {broker.creci}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs sm:text-sm text-emerald-950 italic leading-relaxed">
                "{broker.quote}"
              </blockquote>

              {/* Experience stats */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-lg font-bold text-slate-900 font-mono">
                    +{broker.experienceYears} Anos
                  </span>
                  <span className="text-[10px] text-slate-500 block">De Experiência Caixa</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-lg font-bold text-emerald-700 font-mono">
                    +{broker.familiesHelped}
                  </span>
                  <span className="text-[10px] text-slate-500 block">Famílias Atendidas</span>
                </div>
              </div>

              {/* Contact info list */}
              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{broker.cities}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{broker.displayPhone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{broker.email}</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-5 bg-slate-50 border-t border-slate-100">
              <a
                href={getWhatsAppUrl(idx === 0 ? 1 : 2, `Olá, ${broker.name}! Gostaria de conversar com você sobre as condições do Minha Casa Minha Vida para o meu caso.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com {broker.name.split(' ')[0]} no WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Manifesto / Why Trust Us */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Nosso Compromisso Ético
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Por que o MCMV Sem Dúvidas é Diferente?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Muitos corretores querem apenas "bater meta" e empurram simulações irreais que a Caixa depois reprova. Nós trabalhamos no caminho inverso:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 font-bold">
              1
            </div>
            <h4 className="text-sm font-bold text-white">Verdade em Primeiro Lugar</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Se seu perfil não tiver chance imediata, nós dizemos a verdade e te ensinamos o que regularizar nos próximos meses.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 font-bold">
              2
            </div>
            <h4 className="text-sm font-bold text-white">Zero Cobrança de Taxa</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todo nosso atendimento de simulação, análise e montagem do dossiê é 100% gratuito para o comprador.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 font-bold">
              3
            </div>
            <h4 className="text-sm font-bold text-white">Acompanhamento até a Chave</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Não sumimos após a assinatura. Acompanhamos a evolução da obra e a vistoria de entrega da sua unidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
