import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { EMPREENDIMENTOS_MRV } from '../data/mockData';
import { Empreendimento } from '../types';
import { MapPin, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Filter, Home } from 'lucide-react';

export const EmpreendimentosView: React.FC = () => {
  const { setSelectedEmpreendimento, getWhatsAppUrl, brokers } = useApp();
  const [selectedCity, setSelectedCity] = useState<string>('todas');
  const [selectedStatus, setSelectedStatus] = useState<string>('todos');

  const cities = ['todas', 'Goiânia', 'Aparecida de Goiânia'];
  const statuses = ['todos', 'Lançamento', 'Em Construção', 'Pronto para Morar'];

  const filteredItems = useMemo(() => {
    return EMPREENDIMENTOS_MRV.filter((item) => {
      const matchCity = selectedCity === 'todas' || item.cidade.toLowerCase().includes(selectedCity.toLowerCase());
      const matchStatus = selectedStatus === 'todos' || item.status === selectedStatus;
      return matchCity && matchStatus;
    });
  }, [selectedCity, selectedStatus]);

  const getCustomMessage = (emp: Empreendimento) => {
    if (emp.slug === 'gran-safira') {
      return 'Olá! Tenho interesse no Gran Safira (Parque Atheneu, Goiânia). Quero saber valor de parcela e condições.';
    }
    if (emp.slug === 'gran-florence') {
      return 'Olá! Tenho interesse no Gran Florence (Parque Santa Cecília, Aparecida). Quero saber valor de parcela e condições.';
    }
    if (emp.slug === 'gran-essence') {
      return 'Olá! Tenho interesse no Gran Essence (Jardim das Cascatas, Aparecida). Quero saber valor de parcela e condições.';
    }
    if (emp.slug === 'gran-parma') {
      return 'Olá! Tenho interesse no Gran Parma (Papillon Park, Aparecida). Quero saber valor de parcela e condições.';
    }
    return `Olá! Tenho interesse no empreendimento ${emp.name} em ${emp.cidade}. Quero saber valor de parcela e condições.`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Oportunidades Selecionadas MRV
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Empreendimentos MRV Disponíveis em Goiânia e Aparecida de Goiânia
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Apartamentos em condomínio fechado com lazer completo, segurança 24h e parcelas que cabem no seu orçamento pelo Minha Casa Minha Vida.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* City Filter */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Filtrar por Região:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedCity === city
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {city === 'todas' ? 'Todas as Cidades' : city}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Fase da Obra:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {statuses.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st === 'todos' ? 'Todos os Estágios' : st}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of developments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((emp) => {
          const msg = getCustomMessage(emp);
          return (
            <div
              key={emp.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {emp.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {emp.bairro} – {emp.cidade}/{emp.estado}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {emp.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{emp.bairro}, {emp.cidade} - {emp.estado}</span>
                  </p>
                </div>

                {/* Price & metrics strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-center">
                  <div>
                    <span className="text-[10px] text-slate-500 block">A partir de</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono">
                      R$ {emp.priceStartingFrom.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Subsídio de até</span>
                    <span className="text-sm font-extrabold text-emerald-600 font-mono">
                      R$ {emp.subsidyUpTo.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-500 block">Parcelas a partir de</span>
                    <span className="text-sm font-extrabold text-emerald-700 font-mono">
                      ~ R$ {emp.simulatedMonthlyInstallment}/mês
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">{emp.bedrooms}</p>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {emp.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  {emp.differentials.slice(0, 3).map((diff, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Buttons: Ver Detalhes + Simular com Januário + Simular com Rosângela */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={() => setSelectedEmpreendimento(emp)}
                  className="py-2.5 px-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-sm cursor-pointer text-center whitespace-nowrap"
                >
                  Ver Detalhes
                </button>

                <a
                  href={getWhatsAppUrl(1, msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 text-center whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simular com Januário</span>
                </a>

                <a
                  href={getWhatsAppUrl(2, msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 text-center whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simular com Rosângela</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legal Note */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed text-center max-w-3xl mx-auto">
        <p>
          ⚠️ Condições e disponibilidade das unidades sujeitas a alteração sem aviso prévio pela construtora. Valores de subsídio e parcelas calculados mediante aprovação prévia de crédito junto à Caixa Econômica Federal.
        </p>
      </div>
    </div>
  );
};
