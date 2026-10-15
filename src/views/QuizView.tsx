import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/mockData';
import { QuizResultProfile } from '../types';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  BookOpen,
  Lock,
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const { addLead, getWhatsAppUrl, setIsGuideModalOpen, brokers, showToast } = useApp();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, { points: number; label: string; tag?: string }>>({});
  const [showLeadGate, setShowLeadGate] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResultProfile | null>(null);

  // Lead Gate Form state
  const [leadForm, setLeadForm] = useState({
    name: '',
    whatsapp: '',
    city: '',
  });

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex) / totalQuestions) * 100);

  const handleSelectOption = (points: number, label: string, tag?: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { points, label, tag },
    }));

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Reached the end -> show lead capture gate
      setShowLeadGate(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.whatsapp) {
      alert('Por favor, informe seu nome e WhatsApp.');
      return;
    }

    // Calculate score
    const totalScore = Object.values(selectedAnswers).reduce((acc, curr) => acc + curr.points, 0);

    let level: 'alta' | 'boa' | 'analise' | 'revisar' = 'alta';
    let title = '🟢 Alta Chance de Aprovação';
    let headline = 'Seu perfil está muito bem alinhado com o Minha Casa Minha Vida!';
    let description = 'Você atende aos principais critérios de renda, estabilidade e documentação exigidos pela Caixa Econômica Federal. O próximo passo prático é reunir os documentos e escolher o empreendimento.';
    let ctaLabel = 'Falar Agora com um Corretor e Dar Entrada';
    let badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    let actionPoints = [
      'Separar RG, holerites recentes e comprovante de residência.',
      'Emitir o extrato atualizado do FGTS no app da Caixa.',
      'Fazer a simulação formal e reservar sua unidade preferida antes que a tabela mude.'
    ];

    if (totalScore >= 19) {
      level = 'alta';
    } else if (totalScore >= 13) {
      level = 'boa';
      title = '🟡 Boa Chance — Precisa de Pequenos Ajustes';
      headline = 'Você tem forte potencial, mas alguns detalhes merecem atenção.';
      description = 'Seu perfil tem boas chances, mas fatores como tempo de carteira, organização de extratos ou saldo de entrada precisam de um planejamento assertivo para garantir a aprovação sem surpresas.';
      ctaLabel = 'Quero Organizar Meu Caso com o Corretor';
      badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
      actionPoints = [
        'Organizar os últimos 3 a 6 meses de extratos ou holerites.',
        'Verificar a viabilidade de compor renda com cônjuge ou familiar.',
        'Planejar o parcelamento facilitado da entrada direto com a construtora.'
      ];
    } else if (totalScore >= 8) {
      level = 'analise';
      title = '🟠 Precisa de Análise Prévia Estratégica';
      headline = 'Seu caso possui particularidades que exigem cuidado.';
      description = 'Seja por restrição recente, renda informal ou ausência de reserva imediata, submeter a proposta de qualquer jeito pode gerar recusa no banco. Uma conversa transparente vai definir o caminho exato para você.';
      ctaLabel = 'Quero uma Análise Humanizada do Meu Caso';
      badgeColor = 'bg-orange-100 text-orange-800 border-orange-300';
      actionPoints = [
        'Levantar pendências ativas no CPF e negociar com desconto no Desenrola/Serasa.',
        'Concentrar movimentações em conta corrente para comprovar renda formalmente.',
        'Fazer uma pré-análise cadastral sem compromisso com nossos corretores.'
      ];
    } else {
      level = 'revisar';
      title = '🔵 Vamos Revisar Juntos com Calma';
      headline = 'Talvez este momento exija um planejamento de 3 a 6 meses.';
      description = 'Nós não fazemos falsas promessas: com os dados atuais, a Caixa dificilmente aprovaria o financiamento de imediato. Mas há caminhos claros e estruturados para você regularizar seu perfil e conquistar seu imóvel em breve.';
      ctaLabel = 'Quero Conversar e Montar um Plano de Ação';
      badgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
      actionPoints = [
        'Regularizar o CPF e limpar apontamentos cadastrais.',
        'Completar o tempo mínimo de estabilidade na carteira de trabalho ou MEI.',
        'Baixar nosso guia gratuito para entender os critérios que a Caixa analisa.'
      ];
    }

    const incomeAnswer = selectedAnswers[1]?.label || 'Não informada';
    const resultObj: QuizResultProfile = {
      score: totalScore,
      maxScore: 24,
      level,
      title,
      headline,
      description,
      actionPoints,
      ctaLabel,
      badgeColor,
      whatsappMessage: `Olá! Fiz o diagnóstico no site MCMV Sem Dúvidas. Meu resultado foi "${title}" (${totalScore}/24 pts). Minha renda familiar é aprox. ${incomeAnswer}. Gostaria de entender qual o meu próximo passo!`,
    };

    // Save lead
    addLead({
      name: leadForm.name,
      whatsapp: leadForm.whatsapp,
      email: 'lead.quiz@mcmvsemduvidas.com.br',
      city: leadForm.city || 'Não informada',
      hasFgts: selectedAnswers[2]?.tag === 'fgts_ok' ? 'sim' : selectedAnswers[2]?.tag === 'fgts_baixo' ? 'pouco' : 'nao',
      incomeRange: incomeAnswer,
      source: 'quiz',
      details: `Pontuação: ${totalScore}/24. Resultado: ${title}. Trabalho: ${selectedAnswers[5]?.label || '-'}. Dívidas: ${selectedAnswers[4]?.label || '-'}.`,
    });

    setQuizResult(resultObj);
    setShowLeadGate(false);
    showToast('Diagnóstico calculado com sucesso!');
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowLeadGate(false);
    setQuizResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Quiz Progress & Header */}
      {!quizResult && (
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Diagnóstico MCMV em 2 Minutos
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Descubra Sua Chance de Aprovação no Minha Casa Minha Vida
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Responda com honestidade. Suas respostas são confidenciais e servem para calcular seu enquadramento real.
          </p>
        </div>
      )}

      {/* Progress Bar (during questions) */}
      {!showLeadGate && !quizResult && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Pergunta {currentQuestion.id} de {totalQuestions}</span>
            <span className="font-mono text-emerald-700">{progressPercent}% Concluído</span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestion.id]?.label === option.label;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(option.points, option.label, option.tag)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-semibold shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="pr-4">{option.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 fill-current" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav buttons */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30 flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
            <span className="text-[11px] text-slate-400">Clique na alternativa para avançar</span>
          </div>
        </div>
      )}

      {/* Lead Capture Gate (before showing result) */}
      {showLeadGate && !quizResult && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6 max-w-lg mx-auto text-center animate-in zoom-in-95 duration-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Diagnóstico Pronto!
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Onde devemos liberar o seu resultado detalhado?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Preencha para desbloquear sua nota de chance, subsídio estimado e o plano de ação imediato.
            </p>
          </div>

          <form onSubmit={handleGateSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Carlos Eduardo"
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
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
                value={leadForm.whatsapp}
                onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sua Cidade
              </label>
              <input
                type="text"
                placeholder="Ex.: Campinas, SP"
                value={leadForm.city}
                onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Meu Resultado Completo Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Seus dados estão protegidos pela LGPD. Não enviamos spam.
          </p>
        </div>
      )}

      {/* Quiz Result View */}
      {quizResult && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
          {/* Result Header */}
          <div className="text-center space-y-3 pb-6 border-b border-slate-100">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border ${quizResult.badgeColor}`}>
              <Sparkles className="w-4 h-4" />
              <span>{quizResult.title}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {quizResult.headline}
            </h2>

            <p className="text-xs sm:text-sm font-mono text-slate-500">
              Pontuação apurada: <strong className="text-slate-800">{quizResult.score}</strong> de {quizResult.maxScore} pontos possíveis
            </p>
          </div>

          {/* Description */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Diagnóstico do Especialista
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {quizResult.description}
            </p>
          </div>

          {/* Recommended Action Points */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Seus Próximos Passos Recomendados:
            </h3>
            <div className="space-y-2">
              {quizResult.actionPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual WhatsApp Contact CTA */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="text-center space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                Fale agora com o corretor responsável para validar seu resultado:
              </h4>
              <p className="text-xs text-slate-500">
                A mensagem do WhatsApp já vai pré-preenchida com sua pontuação para agilizar seu atendimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {brokers.map((broker, idx) => (
                <a
                  key={broker.id}
                  href={getWhatsAppUrl(idx === 0 ? 1 : 2, quizResult.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all shadow flex items-center justify-between"
                >
                  <div className="text-left">
                    <span className="font-bold text-sm block">Conversar com {broker.name}</span>
                    <span className="text-[11px] text-emerald-100">CRECI {broker.creci}</span>
                  </div>
                  <MessageSquare className="w-5 h-5 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs border-t border-slate-100">
            <button
              onClick={handleRestart}
              className="text-slate-500 hover:text-slate-800 flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer diagnóstico com outros dados</span>
            </button>

            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Baixar Guia Completo com o Checklist em PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
