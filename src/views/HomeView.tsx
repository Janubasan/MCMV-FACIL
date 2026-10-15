import React from 'react';
import { useApp } from '../context/AppContext';
import { EMPREENDIMENTOS_MRV, FAQ_ITEMS } from '../data/mockData';
import {
  MessageSquare,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Key,
  Home,
  Users,
  Star,
  Sparkles,
  ChevronRight,
  TrendingDown,
  Building,
  MapPin,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    setCurrentView,
    setSelectedFaqCategory,
    setSelectedEmpreendimento,
    setIsGuideModalOpen,
    getWhatsAppUrl,
    brokers,
  } = useApp();

  const featuredFaqs = [
    {
      id: 'faq-g1',
      question: 'Quem pode participar do Minha Casa Minha Vida em 2026?',
      shortAnswer: 'Famílias com renda familiar bruta de até R$ 8.000 mensais que não possuam imóvel próprio no município de residência ou trabalho e tenham o CPF apto.',
    },
    {
      id: 'faq-g2',
      question: 'Já tive casa própria no passado e vendi. Posso comprar pelo MCMV?',
      shortAnswer: 'Sim! Desde que no momento da nova assinatura você não tenha nenhum imóvel registrado em seu nome e cumpra as regras de carência de subsídios federais anteriores.',
    },
    {
      id: 'faq-g3',
      question: 'Posso comprar sozinho ou preciso ter família constituída?',
      shortAnswer: 'Você pode comprar 100% sozinho. Não é obrigatório ser casado ou ter dependentes; pessoas solteiras e que moram sós têm o mesmo direito.',
    },
    {
      id: 'faq-g4',
      question: 'Qual a renda necessária para o Minha Casa Minha Vida em Goiás?',
      shortAnswer: 'O programa atende a partir de R$ 1.500 mensais até R$ 8.000+, com faixas que definem juros a partir de 4% ao ano e subsídios de até R$ 55.000.',
    },
    {
      id: 'faq-g5',
      question: 'Sou autônomo, MEI ou motorista de aplicativo. Como comprovo renda?',
      shortAnswer: 'Com a última Declaração de IRPF com recibo e extratos bancários de conta corrente dos últimos 6 meses com movimentação contínua.',
    },
    {
      id: 'faq-g6',
      question: 'Posso juntar minha renda com cônjuge, noivo(a), mãe ou irmão?',
      shortAnswer: 'Sim! A composição de renda é muito comum e permite somar salários para aprovar apartamentos maiores nos empreendimentos MRV.',
    },
    {
      id: 'faq-g7',
      question: 'Existem apartamentos MRV prontos para morar em Goiânia e Aparecida?',
      shortAnswer: 'Sim, como o Gran Essence no Jardim das Cascatas (Aparecida de Goiânia) em fase de últimas unidades prontas para entrega.',
    },
    {
      id: 'faq-g8',
      question: 'Qual o valor do condomínio nos empreendimentos MRV em Aparecida?',
      shortAnswer: 'Como contam com placas de energia solar nas áreas comuns e gestão eficiente, a taxa condominial é reduzida e econômica.',
    },
  ];

  const sixKeyDoubts = [
    {
      category: 'renda',
      icon: '💰',
      title: 'Renda Familiar',
      question: 'Quanto preciso ganhar para participar?',
      desc: 'Faixas do programa, como somar salário e regras para autônomos em Goiás.',
    },
    {
      category: 'documentos',
      icon: '📄',
      title: 'Documentos',
      question: 'O que eu preciso separar?',
      desc: 'Checklist completo para não perder viagem e adiantar a aprovação na Caixa.',
    },
    {
      category: 'fgts',
      icon: '🏦',
      title: 'Uso do FGTS',
      question: 'Posso usar meu FGTS na entrada?',
      desc: 'Como abater a entrada ou amortizar saldo usando o Fundo de Garantia.',
    },
    {
      category: 'entrada',
      icon: '💵',
      title: 'Valor da Entrada',
      question: 'Preciso ter dinheiro guardado?',
      desc: 'Entenda como o subsídio do governo e a construtora cobrem a entrada.',
    },
    {
      category: 'nome-sujo',
      icon: '📉',
      title: 'Nome Negativado',
      question: 'Meu nome está sujo. E agora?',
      desc: 'A verdade sobre SPC/Serasa e os passos reais para conseguir financiar.',
    },
    {
      category: 'empreendimentos',
      icon: '🏠',
      title: 'Escolher o Imóvel',
      question: 'Qual apartamento cabe no meu bolso?',
      desc: 'Condomínios fechados MRV em Goiânia e Aparecida com parcelas menores que o aluguel.',
    },
  ];

  const handleDoubtClick = (category: any) => {
    setSelectedFaqCategory(category);
    setCurrentView('duvidas');
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 🔹 SEÇÃO 1 — HERO / PAINEL PRINCIPAL */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atualizado para as regras vigentes do MCMV 2026 · Goiânia e Aparecida</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Você não sabe se pode ter seu apartamento pelo Minha Casa Minha Vida em Goiânia ou Aparecida?
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Descubra em 2 minutos — e receba o guia completo. Sem juridiquês, sem enrolação. A gente te explica renda, documentos, FGTS, entrada e parcela — e te diz o próximo passo.
              </p>

              {/* Broker WhatsApp Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl(1, 'Olá, Januário! Vi o site MCMV Sem Dúvidas e quero saber se posso ter meu apartamento em Goiânia/Aparecida.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Januário Leal — (62) 99902-3474</span>
                </a>

                <a
                  href={getWhatsAppUrl(2, 'Olá, Rosângela! Vi o site MCMV Sem Dúvidas e quero saber se posso ter meu apartamento em Goiânia/Aparecida.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Rosângela de Lima — (62) 98428-5317</span>
                </a>

                <button
                  onClick={() => setIsGuideModalOpen(true)}
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap border border-slate-200"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Baixar o Guia Completo (Grátis)</span>
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Atendimento humano e ético
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Corretores CRECI [INSERIR CRECI]
                </span>
                <span className="flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-emerald-600 shrink-0" />
                  Sem taxas antecipadas
                </span>
              </div>
            </div>

            {/* Right Column: Barra de Destaques (Cards) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
                    Condições Vigentes 2026
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Goiânia & Aparecida
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Card 1 */}
                  <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700/60 flex items-start gap-3">
                    <span className="text-2xl shrink-0">💰</span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">MCMV 2026</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Subsídio do Governo Federal de até <strong>R$ 55.000,00</strong> (desconto a fundo perdido, não devolve).
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700/60 flex items-start gap-3">
                    <span className="text-2xl shrink-0">🏠</span>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Parcela Estimada</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        A partir de <strong>R$ 589/mês</strong> — menor que o aluguel em Goiânia e Aparecida de Goiânia.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700/60 flex items-start gap-3">
                    <span className="text-2xl shrink-0">🏢</span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Entrada Facilitada</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Até <strong>60x na MRV</strong> e possibilidade de uso do seu saldo FGTS para abater a entrada.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700/60 flex items-start gap-3">
                    <span className="text-2xl shrink-0">📍</span>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Foco Local</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Empreendimentos selecionados em Goiânia (Parque Atheneu) e Aparecida (Santa Cecília, Papillon Park, Cascatas).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setCurrentView('quiz')}
                    className="w-full py-3.5 px-4 text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Fazer Diagnóstico do Meu Perfil (2 Min)</span>
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 2 — AS 6 DÚVIDAS QUE TRAVAM TODO MUNDO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Chega de Insegurança
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            As 6 Dúvidas Que Travam Todo Mundo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clique na sua maior dúvida agora para ver a resposta detalhada e sem rodeios. Conteúdo específico para quem busca apartamento em Goiânia e Aparecida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sixKeyDoubts.map((item) => (
            <button
              key={item.category}
              onClick={() => handleDoubtClick(item.category)}
              className="text-left p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {item.title}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors">
                  "{item.question}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Ver resposta completa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 🔹 SEÇÃO 3 — O GUIA (ISCA PRINCIPAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
                Download Gratuito · E-book & Checklist
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Guia Completo Minha Casa Minha Vida: do Zero à Chave – Edição Goiânia e Aparecida de Goiânia
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tudo o que você precisa saber reunido em um único material de leitura rápida. Escrito em português claro para você tomar decisões seguras.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Checklist de documentos para não perder viagem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>27 dúvidas respondidas em linguagem simples</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Como funciona renda, FGTS, entrada e parcela</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>O passo a passo do início até a entrega das chaves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>O que fazer se o seu nome estiver negativado ou com score baixo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Bônus:</strong> Lista de empreendimentos MRV em Goiânia e Aparecida</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setIsGuideModalOpen(true)}
                  className="px-6 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-emerald-700" />
                  <span>Quero Meu Guia Grátis Agora</span>
                </button>
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Disponível para leitura imediata ou impressão em PDF
                </span>
              </div>
            </div>

            {/* Book Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 bg-emerald-800 rounded-2xl p-6 shadow-2xl border-2 border-emerald-600/60 rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="border border-emerald-500/40 rounded-xl p-5 text-center space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 block">
                    Goiânia & Aparecida
                  </span>
                  <div className="py-6 border-y border-emerald-600/50">
                    <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
                      GUIA COMPLETO
                    </h3>
                    <p className="text-xs font-semibold text-emerald-200 mt-1">
                      Minha Casa Minha Vida
                    </p>
                    <span className="text-[11px] text-emerald-300/80 italic block mt-1">
                      Do Zero à Chave
                    </span>
                  </div>
                  <div className="text-[10px] text-emerald-200/90 space-y-1">
                    <p>• Checklist de Documentos</p>
                    <p>• 27 Dúvidas Respondidas</p>
                    <p>• Imóveis Gran Safira, Florence, Essence & Parma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 4 — QUIZ DE DIAGNÓSTICO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Autoavaliação Gratuita
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Descubra Sua Chance no MCMV em 2 Minutos
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            8 perguntas rápidas sobre renda, FGTS, documentação e situação do seu CPF. No final, você recebe um diagnóstico personalizado e pode falar direto com um corretor.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentView('quiz')}
              className="px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-5 h-5" />
              <span>Começar o Diagnóstico Agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 5 — COMO FUNCIONA (4 PASSOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Jornada Transparente
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como Funciona o Nosso Atendimento
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Do primeiro contato até a chave, sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Responda algumas perguntas',
              desc: 'Em 2 minutos você faz nosso diagnóstico online para sabermos seu perfil de renda e FGTS.',
            },
            {
              step: '02',
              title: 'Receba seu diagnóstico',
              desc: 'Calculamos em qual faixa do programa você se enquadra e qual o subsídio máximo esperado.',
            },
            {
              step: '03',
              title: 'Baixe o guia com checklist',
              desc: 'Você separa com calma os documentos certos antes de enviar para o banco.',
            },
            {
              step: '04',
              title: 'Fale com um corretor real',
              desc: 'Januário ou Rosângela tiram suas dúvidas no WhatsApp e cuidam da aprovação do seu crédito.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 bg-white rounded-2xl border border-slate-200 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-emerald-600 font-mono block mb-3">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 SEÇÃO 6 — VITRINE MRV EM GOIÂNIA E APARECIDA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Oportunidades Selecionadas
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Empreendimentos MRV Disponíveis em Goiânia e Aparecida de Goiânia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Apartamentos em condomínio fechado com lazer completo e condições Minha Casa Minha Vida.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('empreendimentos')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Ver todos os imóveis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EMPREENDIMENTOS_MRV.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {emp.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {emp.bairro} – {emp.cidade}/{emp.estado}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{emp.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{emp.bedrooms}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Parcelas a partir de:</span>
                    <span className="text-base font-extrabold text-emerald-700 font-mono">
                      R$ {emp.simulatedMonthlyInstallment}/mês
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Subsídio de até:</span>
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      R$ {emp.subsidyUpTo.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {emp.description}
                </p>
              </div>

              {/* Action Buttons: Ver Detalhes + Simular com Januário + Simular com Rosângela */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={() => setSelectedEmpreendimento(emp)}
                  className="py-2.5 px-3 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Ver Detalhes
                </button>

                <a
                  href={getWhatsAppUrl(1, `Olá! Tenho interesse no ${emp.name} (${emp.bairro}, ${emp.cidade}). Quero saber valor de parcela e condições.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simular com Januário</span>
                </a>

                <a
                  href={getWhatsAppUrl(2, `Olá! Tenho interesse no ${emp.name} (${emp.bairro}, ${emp.cidade}). Quero saber valor de parcela e condições.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Simular com Rosângela</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-center text-slate-400 mt-4">
          * Condições e disponibilidade sujeitas a alteração sem aviso prévio. Valores sujeitos à aprovação de crédito na Caixa.
        </p>
      </section>

      {/* 🔹 SEÇÃO 7 — PROVA SOCIAL (DEPOIMENTOS REAIS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem Já Deu o Primeiro Passo em Goiânia e Aparecida
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Histórias de quem achava que não podia e hoje tem a chave na mão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: 'Eu achava que não podia porque meu nome tinha ficado sujo no ano passado. O Januário me explicou com paciência como negociar a dívida com desconto, e em dois meses conseguimos aprovar meu crédito na Caixa!',
              author: 'Fernanda M.',
              city: 'Goiânia, GO',
              status: 'Comprou 2 dormitórios com varanda',
            },
            {
              quote: 'Cheguei sem saber nada de FGTS ou subsídio. Saí do atendimento com a lista de documentos na mão e a proposta aprovada. Minha parcela ficou menor do que o aluguel que eu pagava na kitnet.',
              author: 'Rodrigo & Camila',
              city: 'Aparecida de Goiânia, GO',
              status: 'Apartamento em condomínio fechado MRV',
            },
            {
              quote: 'O guia gratuito respondeu 90% das minhas dúvidas antes mesmo de eu falar com alguém. Quando chamei a Rosângela no WhatsApp, ela já sabia exatamente o que fazer. Recomendo para todo mundo!',
              author: 'Gisele Santos',
              city: 'Goiânia, GO',
              status: 'Chaves na mão em 2026',
            },
            {
              quote: 'A Rosângela foi super atenciosa do começo ao fim. Tirei todas as dúvidas sobre o subsídio e o FGTS no WhatsApp mesmo, sem precisar sair de casa.',
              author: 'Marcos V.',
              city: 'Aparecida de Goiânia, GO',
              status: 'Aprovado no MCMV 2026',
            },
            {
              quote: 'O Januário me ajudou a escolher entre o Gran Safira e o Gran Florence. Fiquei com o que cabia melhor no meu bolso e não me arrependo.',
              author: 'Patrícia L.',
              city: 'Goiânia, GO',
              status: 'Apartamento 2 quartos com vaga',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900">{item.author}</p>
                <p className="text-[11px] text-slate-500">{item.city} · {item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 SEÇÃO 8 — FAQ RÁPIDO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Respostas Imediatas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes – MCMV em Goiânia e Aparecida
          </h2>
        </div>

        <div className="space-y-3">
          {featuredFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white rounded-xl border border-slate-200 p-4 transition-all"
            >
              <summary className="flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer list-none">
                <span>{faq.question}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-2" />
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-2 border-t border-slate-100 pt-3 leading-relaxed">
                <p>{faq.shortAnswer}</p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl(1, `Olá, Januário! Li a dúvida sobre "${faq.question}" no site e quero entender o meu caso.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar com Januário</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(2, `Olá, Rosângela! Li a dúvida sobre "${faq.question}" no site e quero entender o meu caso.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar com Rosângela</span>
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentView('duvidas')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ver todas as 27 dúvidas no Tirador de Dúvidas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 🔹 SEÇÃO 9 — CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Você está a uma conversa de sair do aluguel.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Sem compromisso. Sem pressão de venda. Só clareza sobre o seu direito e o próximo passo para sua família em Goiânia e Aparecida.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(1, 'Olá, Januário! Quero dar o primeiro passo para sair do aluguel com o Minha Casa Minha Vida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com Januário Leal — (62) 99902-3474</span>
            </a>

            <a
              href={getWhatsAppUrl(2, 'Olá, Rosângela! Quero dar o primeiro passo para sair do aluguel com o Minha Casa Minha Vida.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com Rosângela de Lima — (62) 98428-5317</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Ou se preferir: Baixar o Guia Grátis em PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
