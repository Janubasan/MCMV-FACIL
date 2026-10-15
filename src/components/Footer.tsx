import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, brokers, getWhatsAppUrl, setIsGuideModalOpen, setIsCrmDrawerOpen } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Disclaimer Strip */}
      <div className="bg-amber-950/40 border-b border-amber-900/40 py-3.5 px-4 text-center">
        <p className="text-xs text-amber-200/90 max-w-4xl mx-auto leading-relaxed">
          <span className="font-semibold text-amber-300">Aviso Legal Obrigatório:</span> Sujeito à análise de crédito e às condições vigentes do programa. As regras do Minha Casa Minha Vida podem ser alteradas por portaria do Governo Federal. Consulte as condições atualizadas no momento da simulação cadastral.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              MCMV <span className="text-emerald-400">Sem Dúvidas</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Do aluguel à chave: descubra se você pode ter sua casa e o que fazer primeiro. Conteúdo educativo e assessoria imobiliária humanizada.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Conformidade LGPD · Dados Protegidos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentView('duvidas')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Tirador de Dúvidas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('quiz')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Diagnóstico Rápido (2 min)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('documentos')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Checklist de Documentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('passo-a-passo')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Passo a Passo até a Chave
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('empreendimentos')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Empreendimentos MRV em Goiânia e Aparecida
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('blog')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Artigos e Guias
                </button>
              </li>
            </ul>
          </div>

          {/* Brokers & CRECI */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Atendimento Especializado</h4>
            <div className="space-y-4 text-xs">
              {brokers.map((broker, idx) => (
                <div key={broker.id} className="border border-slate-800 rounded-lg p-3 bg-slate-800/40">
                  <div className="flex items-center justify-between font-medium text-slate-200">
                    <span>{broker.name}</span>
                    <span className="text-emerald-400 font-mono">CRECI {broker.creci}</span>
                  </div>
                  <p className="text-slate-400 mt-1">{broker.role}</p>
                  <a
                    href={getWhatsAppUrl(idx === 0 ? 1 : 2)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 mt-2 font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp: {broker.displayPhone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Download & Free Tool */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Material Gratuito</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Baixe o Guia Completo MCMV com o checklist de documentos e 27 dúvidas respondidas.
            </p>
            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-center"
            >
              Baixar Guia Completo (PDF)
            </button>
            <div className="pt-3">
              <button
                onClick={() => setIsCrmDrawerOpen(true)}
                className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
              >
                ⚙️ Configurar Telefones / Ver Leads
              </button>
            </div>
          </div>
        </div>

        {/* Independence & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong>Declaração de Independência:</strong> Este site é uma iniciativa informativa de corretores imobiliários autônomos credenciados pelo Conselho Regional de Corretores de Imóveis (CRECI). Não possuímos vínculo societário ou institucional oficial com o Governo Federal, com a Caixa Econômica Federal ou com o Ministério das Cidades. Atuamos comercializando unidades residenciais da construtora MRV dentro das normas vigentes do programa habitacional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-slate-400">
            <p>© {new Date().getFullYear()} MCMV Sem Dúvidas. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>Termos de Uso</span>
              <span>·</span>
              <span>Política de Privacidade (LGPD)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
