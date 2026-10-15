import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BrokerInfo } from '../types';
import { X, Download, Trash2, Save, UserCheck, MessageSquare, Database, Settings, Phone } from 'lucide-react';

export const CrmDrawer: React.FC = () => {
  const { isCrmDrawerOpen, setIsCrmDrawerOpen, leads, clearLeads, exportLeadsCsv, brokers, updateBroker } = useApp();
  const [activeTab, setActiveTab] = useState<'leads' | 'config'>('leads');
  const [editingBroker1, setEditingBroker1] = useState<BrokerInfo>(brokers[0]);
  const [editingBroker2, setEditingBroker2] = useState<BrokerInfo>(brokers[1] || brokers[0]);

  if (!isCrmDrawerOpen) return null;

  const handleSaveBrokers = (e: React.FormEvent) => {
    e.preventDefault();
    updateBroker(editingBroker1);
    updateBroker(editingBroker2);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Top bar */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <h2 className="text-base font-bold text-white">Central de Leads & Configuração</h2>
            </div>
            <p className="text-xs text-slate-400">Painel do corretor para visualização e exportação</p>
          </div>
          <button
            onClick={() => setIsCrmDrawerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab buttons */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-3 gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-3 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border-b-2 ${
              activeTab === 'leads'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Leads Capturados ({leads.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`pb-3 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border-b-2 ${
              activeTab === 'config'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Configurar Corretores (WhatsApp & CRECI)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === 'leads' ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <p className="text-xs text-slate-500">
                  Os leads são salvos localmente e podem ser integrados via Webhook ou exportados em CSV.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportLeadsCsv}
                    className="py-1.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar CSV</span>
                  </button>
                  {leads.length > 0 && (
                    <button
                      onClick={clearLeads}
                      className="py-1.5 px-3 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Limpar todos os leads"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Limpar</span>
                    </button>
                  )}
                </div>
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <p className="text-sm">Nenhum lead capturado ainda.</p>
                  <p className="text-xs">
                    Teste preenchendo o Quiz, baixando o Guia ou clicando em Tirar Dúvida!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{lead.name}</h4>
                          <span className="text-xs text-slate-500 font-mono">
                            {new Date(lead.createdAt).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {lead.source}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600">
                        <p>
                          <strong>WhatsApp:</strong>{' '}
                          <a
                            href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-700 hover:underline font-medium"
                          >
                            {lead.whatsapp}
                          </a>
                        </p>
                        <p><strong>E-mail:</strong> {lead.email}</p>
                        <p><strong>Cidade:</strong> {lead.city}</p>
                        <p><strong>FGTS:</strong> {lead.hasFgts}</p>
                        {lead.incomeRange && (
                          <p className="sm:col-span-2"><strong>Renda:</strong> {lead.incomeRange}</p>
                        )}
                      </div>

                      {lead.details && (
                        <p className="text-xs text-slate-500 bg-white p-2 rounded border border-slate-100">
                          {lead.details}
                        </p>
                      )}

                      <div className="pt-2 flex justify-end">
                        <a
                          href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, ${lead.name}! Sou corretor especialista em Minha Casa Minha Vida. Vi seu cadastro no portal MCMV Sem Dúvidas. Como posso te ajudar a conquistar sua casa própria?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Chamar no WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSaveBrokers} className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-800 leading-relaxed">
                <strong>Substitua os dados de teste pelos seus dados reais:</strong> O nome, CRECI e número de WhatsApp inseridos aqui serão utilizados em todos os botões do site e no link direto de conversa.
              </div>

              {/* Corretor 1 */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Corretor 1 (Principal)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={editingBroker1.name}
                      onChange={(e) => setEditingBroker1({ ...editingBroker1, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">CRECI</label>
                    <input
                      type="text"
                      value={editingBroker1.creci}
                      onChange={(e) => setEditingBroker1({ ...editingBroker1, creci: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      WhatsApp (DDI + DDD + Número)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 5562999023474"
                      value={editingBroker1.phone}
                      onChange={(e) => setEditingBroker1({ ...editingBroker1, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">WhatsApp Formatado</label>
                    <input
                      type="text"
                      placeholder="Ex: (62) 99902-3474"
                      value={editingBroker1.displayPhone}
                      onChange={(e) => setEditingBroker1({ ...editingBroker1, displayPhone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Cidades Atendidas</label>
                    <input
                      type="text"
                      value={editingBroker1.cities}
                      onChange={(e) => setEditingBroker1({ ...editingBroker1, cities: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Corretor 2 */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Corretor 2 (Parceiro / Alternância)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={editingBroker2.name}
                      onChange={(e) => setEditingBroker2({ ...editingBroker2, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">CRECI</label>
                    <input
                      type="text"
                      value={editingBroker2.creci}
                      onChange={(e) => setEditingBroker2({ ...editingBroker2, creci: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      WhatsApp (DDI + DDD + Número)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 5562984285317"
                      value={editingBroker2.phone}
                      onChange={(e) => setEditingBroker2({ ...editingBroker2, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">WhatsApp Formatado</label>
                    <input
                      type="text"
                      placeholder="Ex: (62) 98428-5317"
                      value={editingBroker2.displayPhone}
                      onChange={(e) => setEditingBroker2({ ...editingBroker2, displayPhone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Cidades Atendidas</label>
                    <input
                      type="text"
                      value={editingBroker2.cities}
                      onChange={(e) => setEditingBroker2({ ...editingBroker2, cities: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Salvar Configurações dos Corretores</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
