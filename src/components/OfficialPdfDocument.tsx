import React from 'react';
import {
  OFFICIAL_PDF_METADATA,
  PDF_SUMARIO_ITEMS,
  PDF_FAIXAS_TABLE,
  PDF_PARCELAS_TABLE,
  PDF_CUSTOS_TABLE,
  PDF_GLOSSARIO_TABLE,
  PDF_PASSOS_LIST,
  PDF_DUVIDAS_ALL,
} from '../data/officialPdfPages';
import { MessageSquare, HelpCircle, Check, Copy, ExternalLink, Phone } from 'lucide-react';

interface OfficialPdfDocumentProps {
  activePage?: number; // 1-15 or undefined for all pages
  onCopyMessage?: () => void;
}

export const OfficialPdfDocument: React.FC<OfficialPdfDocumentProps> = ({
  activePage,
  onCopyMessage,
}) => {
  const whatsappJanuario = `https://wa.me/5562999023474?text=${encodeURIComponent(
    'Olá, Januário! Baixei o Guia Completo MCMV Sem Dúvidas e gostaria de tirar uma dúvida sobre o meu caso.'
  )}`;
  const whatsappRosangela = `https://wa.me/5562984285317?text=${encodeURIComponent(
    'Olá, Rosângela! Baixei o Guia Completo MCMV Sem Dúvidas e gostaria de tirar uma dúvida sobre o meu caso.'
  )}`;
  const whatsappUrl = whatsappJanuario;

  const copyTemplate = () => {
    const text = `Olá! Li o Guia Completo MCMV Sem Dúvidas e quero entender se posso ter minha casa.\nNome: [seu nome]. Cidade: [Goiânia/Aparecida]. Renda familiar: [valor]. Tenho FGTS: [sim/não].`;
    navigator.clipboard.writeText(text);
    if (onCopyMessage) onCopyMessage();
  };

  // Reusable Page Header for pages 2 to 15
  const PageHeader = () => (
    <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2 mb-6">
      <span className="text-[11px] font-extrabold text-emerald-800 tracking-wider uppercase">
        MCMV SEM DÚVIDAS · GOIÂNIA E APARECIDA
      </span>
      <span className="text-[10px] text-slate-500 font-medium">
        Guia Completo Minha Casa Minha Vida · 2026
      </span>
    </div>
  );

  // Reusable Page Footer for pages 2 to 15
  const PageFooter = ({ pageNum }: { pageNum: number }) => (
    <div className="mt-auto pt-6">
      <div className="bg-[#0b5c46] text-white rounded-lg p-2.5 flex flex-col sm:flex-row items-center justify-between text-xs shadow-sm gap-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center text-[11px] shrink-0">
            ?
          </div>
          <div>
            <p className="font-bold leading-tight text-[11px]">
              Ficou com dúvida? Plantão MCMV Goiânia e Aparecida
            </p>
            <p className="text-[9px] text-emerald-100">
              Atendimento humano pelos corretores credenciados
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 text-[11px]">
          <a
            href={whatsappJanuario}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-amber-300 hover:text-amber-200 transition-colors font-mono underline"
          >
            Januário (62) 99902-3474
          </a>
          <span className="text-emerald-300">|</span>
          <a
            href={whatsappRosangela}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-amber-300 hover:text-amber-200 transition-colors font-mono underline"
          >
            Rosângela (62) 98428-5317
          </a>
        </div>
      </div>
      <div className="text-center mt-1 text-[10px] text-slate-400 font-mono">
        {pageNum}
      </div>
    </div>
  );

  const shouldRender = (pageNum: number) => {
    return activePage === undefined || activePage === pageNum;
  };

  return (
    <div className="pdf-document font-sans text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      {/* ========================================================================= */}
      {/* PÁGINA 1: CAPA */}
      {/* ========================================================================= */}
      {shouldRender(1) && (
        <div className="pdf-page bg-[#fcfbe8] p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none relative overflow-hidden">
          <div className="text-center pt-2">
            <h1 className="text-4xl sm:text-5xl font-black text-[#e89b27] tracking-tight font-sans">
              MCMV SEM DÚVIDAS
            </h1>

            {/* MCMV House Icon Mockup */}
            <div className="my-5 flex flex-col items-center">
              <div className="w-24 h-24 relative flex items-center justify-center">
                <div className="w-18 h-18 rounded-full bg-[#1b75bb] relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-1 right-2 w-7 h-7 rounded-full bg-[#f68b1f]"></div>
                  <div className="absolute bottom-0 w-24 h-10 rounded-t-full bg-[#39b54a]"></div>
                  <div className="relative z-10 w-9 h-8 bg-[#006837] clip-house flex items-end justify-center pb-1">
                    <div className="w-3 h-4 bg-white"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-black text-slate-900 leading-none mt-1 uppercase tracking-tight">
                Minha Casa
              </h2>
              <h2 className="text-2xl font-black text-slate-900 leading-none uppercase tracking-tight">
                Minha Vida
              </h2>
            </div>
          </div>

          {/* Building Facade Graphic */}
          <div className="my-4 rounded-2xl overflow-hidden border-2 border-slate-200/80 shadow-md bg-gradient-to-b from-sky-200 via-amber-50 to-emerald-100 p-4 text-center relative">
            <div className="h-44 sm:h-56 flex flex-col justify-end items-center relative">
              <div className="w-full flex justify-center items-end gap-2 h-40">
                <div className="w-28 sm:w-36 h-36 bg-[#dfbc99] rounded-t-lg border-2 border-slate-700/60 p-2 flex flex-col justify-around">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="h-3 bg-slate-800/80 rounded-xs"></div>
                    ))}
                  </div>
                </div>
                <div className="w-36 sm:w-48 h-44 bg-[#cba47e] rounded-t-lg border-2 border-slate-700/60 p-2 relative flex flex-col justify-between">
                  <span className="text-[8px] font-extrabold uppercase bg-slate-900 text-white px-1.5 py-0.5 rounded mx-auto tracking-wider">
                    GRAN TERRAZZO / SAFIRA
                  </span>
                  <div className="grid grid-cols-4 gap-1 mt-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-3 bg-slate-800/80 rounded-xs"></div>
                    ))}
                  </div>
                  <div className="w-12 h-6 bg-slate-900 mx-auto rounded-t border-t-2 border-amber-400"></div>
                </div>
              </div>
              <div className="w-full h-4 bg-emerald-700 rounded-b mt-0 border-t-2 border-emerald-900"></div>
            </div>
          </div>

          {/* Titles & Highlights */}
          <div className="text-center space-y-2 mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
              GUIA COMPLETO MINHA CASA MINHA VIDA
            </h3>
            <p className="text-sm font-bold text-emerald-800 italic">
              Do zero à chave
            </p>
            <p className="text-xs text-slate-700 font-medium max-w-md mx-auto">
              Faixas de renda atualizadas 2026 · Checklist de documentos · 27 dúvidas respondidas em linguagem simples · Os 7 passos até a entrega das chaves
            </p>
          </div>

          {/* Yellow Contact CTA Box */}
          <div className="mt-4 bg-[#f59e0b] rounded-2xl p-4 text-center shadow-md border border-amber-500">
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Tem dúvidas? Fale com nossos corretores no WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2">
              <a
                href={whatsappJanuario}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-black text-slate-950 hover:text-black transition-colors block bg-amber-400/80 hover:bg-amber-300 px-3 py-1 rounded-xl"
              >
                Januário Leal: (62) 99902-3474
              </a>
              <a
                href={whatsappRosangela}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-black text-slate-950 hover:text-black transition-colors block bg-amber-400/80 hover:bg-amber-300 px-3 py-1 rounded-xl"
              >
                Rosângela de Lima: (62) 98428-5317
              </a>
            </div>
          </div>

          <div className="mt-4 bg-[#064e3b] text-white text-center py-2.5 rounded-xl text-xs font-semibold tracking-wide">
            Atualizado outubro/2026 ·· Grátis
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 2: SUMÁRIO */}
      {/* ========================================================================= */}
      {shouldRender(2) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <h1 className="text-3xl font-black text-[#0b5c46] tracking-tight">
              Sumário
            </h1>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Tudo o que você precisa para sair do aluguel, em ordem e sem enrolação.
            </p>

            {/* Sumário List */}
            <div className="space-y-2.5">
              {PDF_SUMARIO_ITEMS.map((item) => (
                <div key={item.num} className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      item.num % 2 !== 0
                        ? 'bg-[#0b5c46] text-white'
                        : 'bg-[#f59e0b] text-slate-950 font-black'
                    }`}
                  >
                    {item.num}
                  </div>
                  <div className="flex-1 border-b border-slate-100 pb-1">
                    <span className="text-xs font-extrabold text-slate-900 block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Box: Como usar este guia */}
            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                Como usar este guia
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                Leia na ordem se você está começando. Se já sabe o básico, vá direto ao <strong>checklist de documentos</strong> e aos <strong>7 passos</strong>. Em qualquer dúvida, o contato do Januário Leal está no rodapé de todas as páginas.
              </p>
            </div>
          </div>
          <PageFooter pageNum={2} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 3: VOCÊ PODE PARTICIPAR? */}
      {/* ========================================================================= */}
      {shouldRender(3) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Você pode participar?
                </h1>
                <p className="text-xs text-slate-500">
                  Se paga aluguel e quer a casa própria, o programa foi feito para você
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-bold text-[#0b5c46] uppercase tracking-wider mb-2">
                  Perfil básico
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Renda familiar dentro de uma das <strong>4 faixas</strong> do programa (confira os valores na próxima página).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong>Não ter outro imóvel residencial</strong> no seu nome na mesma cidade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>CPF regular e nome apto a passar em análise de crédito.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Documentação completa e renda comprovável.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-rose-700 uppercase tracking-wider mb-2">
                  Quem NÃO pode
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Quem já tem financiamento ativo de imóvel residencial pelo SFH na mesma cidade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Quem já recebeu subsídio do programa antes (em alguns casos).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Quem não consegue comprovar renda de nenhuma forma.</span>
                  </li>
                </ul>
              </div>

              {/* Box Amarelo Atenção */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-amber-950 uppercase">
                  Atenção
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ninguém pode prometer aprovação antes da análise de crédito. O que fazemos é te preparar para aumentar suas chances.
                </p>
              </div>

              {/* Box Verde Faixa 1 */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-emerald-950 uppercase">
                  Faixa 1 funciona diferente
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Na Faixa 1 (subsidiada) o caminho costuma passar pela <strong>prefeitura</strong> e pelo <strong>CadÚnico</strong>. Nas Faixas 2, 3 e 4 o financiamento é feito direto no banco. Se tiver dúvida sobre qual é o seu caso, chame o Januário Leal no WhatsApp.
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={3} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 4: FAIXAS E RENDA FAMILIAR */}
      {/* ========================================================================= */}
      {shouldRender(4) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-black text-sm">
                2
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Faixas e renda familiar
                </h1>
                <p className="text-xs text-slate-500">
                  Sua faixa define juros, subsídio e valor da parcela
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm mb-3">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0b5c46] text-white">
                  <tr>
                    <th className="p-2.5 font-bold">Faixa</th>
                    <th className="p-2.5 font-bold">Renda familiar bruta mensal</th>
                    <th className="p-2.5 font-bold">Para quem é</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PDF_FAIXAS_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-2.5 font-bold text-slate-900">{row.faixa}</td>
                      <td className="p-2.5 font-mono text-emerald-800 font-bold">{row.renda}</td>
                      <td className="p-2.5 text-slate-700">{row.paraQuem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-400 italic mb-5">
              Valores conforme a Portaria MCID nº 333/2026, em vigor desde abril de 2026. Podem mudar por nova portaria: confirme o vigente antes de se excluir.
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <h4 className="font-bold text-[#0b5c46] uppercase tracking-wide">
                  O que entra na soma da renda
                </h4>
                <p className="mt-0.5 leading-relaxed">
                  Salário bruto CLT, renda de autônomo/MEI <strong>com comprovação</strong>, aposentadoria, pensão, pensão alimentícia e aluguel recebido.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-rose-700 uppercase tracking-wide">
                  O que NÃO entra
                </h4>
                <p className="mt-0.5 leading-relaxed">
                  Bolsa Família, BPC, seguro-desemprego e outros auxílios assistenciais.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide">
                  Composição de renda
                </h4>
                <p className="mt-0.5 leading-relaxed">
                  Você pode somar renda com cônjuge ou companheiro(a). Em alguns bancos, também com familiar que vá morar no imóvel. Se o cônjuge tem nome sujo, isso entra na análise conjunta: vale conversar antes.
                </p>
              </div>

              {/* Dica Prática */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded-r-xl mt-4">
                <h5 className="font-bold text-emerald-950 uppercase text-[11px]">
                  Dica prática
                </h5>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Some os <strong>3 últimos holerites brutos</strong>. Se for autônomo, separe extratos de 3 a 6 meses + declaração de IR. Isso já adianta 70% da pré-análise.
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={4} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 5: FGTS: O QUE É E COMO USAR */}
      {/* ========================================================================= */}
      {shouldRender(5) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  FGTS: o que é e como usar
                </h1>
                <p className="text-xs text-slate-500">
                  Ele pode virar entrada, desconto e até pagar custos
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#0b5c46] uppercase tracking-wider mb-2">
                  4 usos possíveis
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong>Dar entrada</strong> ou amortizar o saldo financiado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong>Reduzir o valor da parcela.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong>Pagar parte das parcelas</strong> (em condições específicas).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong>Cobrir custos</strong> de escritura, registro e ITBI.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Regras principais
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Ter saldo na conta vinculada ao FGTS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Imóvel residencial urbano.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span><strong>3 anos de trabalho sob regime FGTS</strong> (soma de todos os empregos, não precisa ser contínuo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>Não ter outro financiamento ativo no SFH na mesma cidade.</span>
                  </li>
                </ul>
              </div>

              {/* Box Vermelho */}
              <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-rose-950 uppercase">
                  NÃO saque antes!
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Muita gente saca o FGTS achando que ajuda e perde a chance de usá-lo no financiamento. <strong>Confirme com o Januário Leal antes de sacar qualquer valor.</strong>
                </p>
              </div>

              {/* Box Verde */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-emerald-950 uppercase">
                  Como ver seu saldo
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Baixe o <strong>app FGTS</strong> (gratuito, do governo), faça login com seu CPF e tire um print do extrato atualizado. Ele é pedido na análise.
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={5} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 6: ENTRADA: PRECISA MESMO? */}
      {/* ========================================================================= */}
      {shouldRender(6) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-black text-sm">
                4
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Entrada: precisa mesmo?
                </h1>
                <p className="text-xs text-slate-500">
                  A dúvida que mais trava quem quer começar. Resposta curta: nem sempre.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#0b5c46] uppercase tracking-wider mb-3">
                  Como funciona na prática
                </h3>
                <p className="text-xs text-slate-600 mb-3">
                  Em muitos casos a conta é assim:
                </p>

                {/* Equation Graphic */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
                  <div className="bg-[#0b5c46] text-white p-2.5 rounded-xl font-bold text-xs min-w-24">
                    Subsídio do Governo
                  </div>
                  <span className="text-emerald-700 font-extrabold text-base">+</span>
                  <div className="bg-[#0b5c46] text-white p-2.5 rounded-xl font-bold text-xs min-w-20">
                    FGTS
                  </div>
                  <span className="text-emerald-700 font-extrabold text-base">+</span>
                  <div className="bg-[#0b5c46] text-white p-2.5 rounded-xl font-bold text-xs min-w-24">
                    Condição da construtora
                  </div>
                  <span className="text-emerald-700 font-extrabold text-base">=</span>
                  <div className="bg-[#f59e0b] text-slate-950 p-2.5 rounded-xl font-black text-xs min-w-28 shadow-sm">
                    Entrada coberta
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic text-center mt-2">
                  Nesse cenário você começa pagando só as parcelas.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  O que define se você vai precisar de entrada em dinheiro
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Sua faixa de renda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Valor do imóvel e da avaliação do banco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Saldo de FGTS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Política da construtora no mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>Resultado da análise de crédito</span>
                  </li>
                </ul>
              </div>

              {/* Box Cuidado com promessas */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-1 mt-4">
                <h4 className="text-xs font-bold text-amber-950 uppercase">
                  Cuidado com promessas
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Entrada zero não é regra geral</strong> e ninguém pode prometer antes da análise. É uma possibilidade que só a análise do seu caso confirma.
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={6} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 7: PARCELAS */}
      {/* ========================================================================= */}
      {shouldRender(7) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Parcelas
                </h1>
                <p className="text-xs text-slate-500">
                  Quanto vai pesar no bolso
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed mb-4">
              Três fatores definem sua parcela: <strong>o valor do imóvel</strong>, quanto foi abatido (subsídio + FGTS + entrada) e <strong>o prazo e juros da sua faixa</strong>.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-1">
                  Regra de ouro: até 30% da renda
                </h3>
                <p className="text-xs text-slate-600 mb-2">
                  A parcela não deve comprometer mais de <strong>30% da renda familiar bruta</strong>. Os bancos olham isso na análise. Veja uma referência rápida:
                </p>

                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#0b5c46] text-white font-bold">
                      <tr>
                        <th className="p-2.5">Renda familiar bruta</th>
                        <th className="p-2.5">Parcela de referência (até 30%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PDF_PARCELAS_TABLE.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="p-2.5 font-bold text-slate-900">{row.renda}</td>
                          <td className="p-2.5 font-mono text-emerald-800 font-bold">{row.parcela}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-slate-400 italic mt-1">
                  Referência de cálculo, não garantia de aprovação.
                </p>
              </div>

              {/* Box Verde Simule com gente de verdade */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-emerald-950 uppercase">
                  Simule com gente de verdade
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Simuladores online erram bastante porque nem sempre consideram o subsídio vigente. A simulação sem compromisso, feita por uma pessoa, é mais confiável: <strong>chame o Januário Leal no WhatsApp</strong>.
                </p>
              </div>

              {/* Box Amarelo Pense além */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl space-y-1">
                <h4 className="text-xs font-bold text-amber-950 uppercase">
                  Pense além da parcela
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Pergunte sempre o <strong>custo total</strong>: parcela + seguro + taxas + condomínio (que só começa após a entrega).
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={7} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 8: NOME SUJO E SCORE */}
      {/* ========================================================================= */}
      {shouldRender(8) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-black text-sm">
                6
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Nome sujo e score
                </h1>
                <p className="text-xs text-slate-500">
                  Não é sentença final. É um sinal amarelo que pede organização.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-1">
                  O que o banco olha
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Valor total das dívidas, há quanto tempo estão negativadas, se já foram quitadas, se há protestos e a sua renda atual.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Checklist de melhoria em 60 a 90 dias
                </h3>
                <div className="space-y-2 text-xs text-slate-700">
                  {[
                    'Quite ou negocie as dívidas menores primeiro e guarde o comprovante de quitação.',
                    'Pare de pedir crédito novo por 60 a 90 dias.',
                    'Mantenha o CPF ativo e o endereço atualizado.',
                    'Tenha comprovação de renda consistente.',
                    'Evite parcelar tudo no cartão no mês da análise.',
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-start gap-2.5 cursor-pointer">
                      <div className="w-4 h-4 rounded border-2 border-slate-400 bg-white mt-0.5 shrink-0 flex items-center justify-center text-[10px]"></div>
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-1">
                  Score baixo
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Score é só um dos itens. Renda bem comprovada + documentos impecáveis compensam muito. Muitos casos com score baixo são aprovados.
                </p>
              </div>

              {/* Box Vermelho Golpe */}
              <div className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r-xl space-y-1 mt-4">
                <h4 className="text-xs font-bold text-rose-950 uppercase">
                  Golpe à vista
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Nunca pague para "limpar o nome"</strong> com promessa de aprovação garantida. Isso é golpe. Negocie suas dívidas diretamente com o credor ou em canais oficiais (Serasa Limpa Nome, Desenrola).
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={8} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 9: CHECKLIST DE DOCUMENTOS (IMPRIMÍVEL) */}
      {/* ========================================================================= */}
      {shouldRender(9) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                7
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Checklist de documentos
                </h1>
                <p className="text-xs text-emerald-800 font-bold">
                  Imprima e marque com X o que você já tem
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Separe tudo antes de falar com o corretor. Isso economiza semanas.
            </p>

            <div className="space-y-4">
              {/* VOCÊ */}
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-2">
                  VOCÊ
                </h3>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {[
                    'RG e CPF',
                    'Certidão de estado civil (nascimento ou casamento)',
                    'Comprovante de residência dos últimos 3 meses',
                    'Holerites dos últimos 3 meses (se CLT)',
                    'Carteira de trabalho (foto + contrato)',
                    'Extrato do FGTS atualizado (app FGTS)',
                    'Declaração de Imposto de Renda (se declara)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border border-slate-400 shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CÔNJUGE / COMPANHEIRO */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  CÔNJUGE / COMPANHEIRO(A)
                </h3>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {[
                    'Os mesmos documentos acima',
                    'Certidão de casamento ou declaração de união estável',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border border-slate-400 shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SE FOR AUTÔNOMO / MEI */}
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-2">
                  SE FOR AUTÔNOMO / MEI
                </h3>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {[
                    'Extratos bancários dos últimos 6 meses',
                    'DAS + PGMEI dos últimos 3 meses',
                    'Declaração de faturamento ou de Imposto de Renda',
                    'Contratos de prestação de serviço (se tiver)',
                    'Comprovante de endereço comercial (se tiver)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded border border-slate-400 shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dica de ouro */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded-r-xl mt-3">
                <h4 className="text-[11px] font-bold text-emerald-950 uppercase">
                  Dica de ouro
                </h4>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                  Tire fotos legíveis de tudo e guarde em uma pasta no celular chamada <strong>MCMV</strong>. Na hora da pré-análise, você envia em 2 minutos.
                </p>
              </div>
            </div>
          </div>
          <PageFooter pageNum={9} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 10: OS 7 PASSOS ATÉ A CHAVE */}
      {/* ========================================================================= */}
      {shouldRender(10) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-black text-sm">
                8
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Os 7 passos até a chave
                </h1>
                <p className="text-xs text-slate-500">
                  Do primeiro contato à entrega
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              {PDF_PASSOS_LIST.map((p) => (
                <div key={p.step} className="flex items-start gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                      p.step === 7 ? 'bg-amber-500 text-slate-950' : 'bg-[#0b5c46] text-white'
                    }`}
                  >
                    {p.step}
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-slate-900">{p.title}</span>
                      <span className="text-[10px] text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded font-medium">
                        · {p.tempo}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Box Quanto tempo leva */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded-r-xl mt-4">
              <h4 className="text-[11px] font-bold text-emerald-950 uppercase">
                Quanto tempo leva?
              </h4>
              <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                Em média, <strong>de 30 a 90 dias</strong> da pré-análise até a assinatura, dependendo da documentação. Quanto mais completo o seu envio, mais rápido.
              </p>
            </div>
          </div>
          <PageFooter pageNum={10} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 11: AS 27 DÚVIDAS (1 A 10) */}
      {/* ========================================================================= */}
      {shouldRender(11) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                9
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  As 27 dúvidas mais comuns
                </h1>
                <p className="text-xs text-slate-500">
                  Respostas diretas, sem juridiquês (Parte 1: 1 a 10)
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-3">
              {PDF_DUVIDAS_ALL.slice(0, 10).map((d) => (
                <div key={d.num} className="flex items-start gap-2.5 border-b border-slate-100 pb-2">
                  <div className="w-5 h-5 rounded-md bg-[#0b5c46] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {d.num}
                  </div>
                  <div className="text-xs flex-1">
                    <span className="font-bold text-slate-900 block">{d.pergunta}</span>
                    <span className="text-[11px] text-slate-600 block leading-relaxed mt-0.5">
                      {d.resposta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PageFooter pageNum={11} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 12: AS 27 DÚVIDAS (11 A 21) */}
      {/* ========================================================================= */}
      {shouldRender(12) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                9
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  As 27 dúvidas mais comuns
                </h1>
                <p className="text-xs text-slate-500">
                  Respostas diretas, sem juridiquês (Parte 2: 11 a 21)
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {PDF_DUVIDAS_ALL.slice(10, 21).map((d) => (
                <div key={d.num} className="flex items-start gap-2.5 border-b border-slate-100 pb-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#0b5c46] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {d.num}
                  </div>
                  <div className="text-xs flex-1">
                    <span className="font-bold text-slate-900 block">{d.pergunta}</span>
                    <span className="text-[11px] text-slate-600 block leading-relaxed mt-0.5">
                      {d.resposta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PageFooter pageNum={12} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 13: AS 27 DÚVIDAS (22 A 27) */}
      {/* ========================================================================= */}
      {shouldRender(13) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                9
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  As 27 dúvidas mais comuns
                </h1>
                <p className="text-xs text-slate-500">
                  Respostas diretas, sem juridiquês (Parte 3: 22 a 27)
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {PDF_DUVIDAS_ALL.slice(21, 27).map((d) => (
                <div key={d.num} className="flex items-start gap-2.5 border-b border-slate-100 pb-2">
                  <div className="w-5 h-5 rounded-md bg-[#0b5c46] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {d.num}
                  </div>
                  <div className="text-xs flex-1">
                    <span className="font-bold text-slate-900 block">{d.pergunta}</span>
                    <span className="text-[11px] text-slate-600 block leading-relaxed mt-0.5">
                      {d.resposta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Box: Sua dúvida não está aqui? */}
            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl space-y-1">
              <h4 className="text-xs font-bold text-emerald-950 uppercase">
                Sua dúvida não está aqui?
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Mande uma mensagem para <strong>Januário Leal</strong> no WhatsApp <strong>(62) 99902-3474</strong>. Resposta rápida e sem compromisso.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chamar Januário no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <PageFooter pageNum={13} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 14: CUSTOS, GOLPES E GLOSSÁRIO */}
      {/* ========================================================================= */}
      {shouldRender(14) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-slate-950 flex items-center justify-center font-black text-sm">
                10
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Custos, golpes e glossário
                </h1>
                <p className="text-xs text-slate-500">
                  Para não cair em armadilhas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Custos além do imóvel */}
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-1.5">
                  Custos além do imóvel
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#0b5c46] text-white">
                      <tr>
                        <th className="p-2 font-bold">Custo</th>
                        <th className="p-2 font-bold">O que é</th>
                        <th className="p-2 font-bold">Dá para usar FGTS?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PDF_CUSTOS_TABLE.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="p-2 font-bold text-slate-900">{row.custo}</td>
                          <td className="p-2 text-slate-700">{row.oQueE}</td>
                          <td className="p-2 text-emerald-800 font-semibold">{row.fgts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sinais de golpe */}
              <div>
                <h3 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">
                  Sinais de golpe
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Cobrança de taxa antecipada para "liberar" ou "garantir" a aprovação.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Promessa de aprovação garantida ou "entrada zero para todos".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Pedido de senha do app FGTS, gov.br ou do banco. <strong>Nunca passe senhas.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Pagamento fora de canais oficiais (boleto em nome de pessoa física).</span>
                  </li>
                </ul>
              </div>

              {/* Glossário rápido */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Glossário rápido
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#0b5c46] text-white">
                      <tr>
                        <th className="p-2 font-bold">Termo</th>
                        <th className="p-2 font-bold">Significa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PDF_GLOSSARIO_TABLE.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="p-2 font-bold text-slate-900">{row.termo}</td>
                          <td className="p-2 text-slate-700">{row.significa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <PageFooter pageNum={14} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PÁGINA 15: PRÓXIMOS PASSOS */}
      {/* ========================================================================= */}
      {shouldRender(15) && (
        <div className="pdf-page bg-white p-8 sm:p-12 flex flex-col justify-between shadow-md mb-8 mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-xl border border-slate-200 print:border-none print:shadow-none print:p-8 print:m-0 print:mb-0 print:break-after-page print:rounded-none">
          <div>
            <PageHeader />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0b5c46] text-white flex items-center justify-center font-bold text-sm">
                11
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">
                  Próximos passos
                </h1>
                <p className="text-xs text-slate-500">
                  Você já fez 90% do que a maioria não faz: se informou
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-xs font-bold text-[#0b5c46] uppercase tracking-wider mb-2">
                  Faça agora, em 15 minutos
                </h3>
                <div className="space-y-2 text-xs text-slate-700">
                  {[
                    'Marque no checklist o que você já tem',
                    'Separe o que falta (fotos legíveis, pasta MCMV no celular)',
                    'Chame o Januário Leal no WhatsApp com: Nome, Cidade, Renda aproximada e se tem FGTS',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-slate-400 bg-white shrink-0"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mensagem pronta para copiar */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-[11px] font-bold text-amber-950 uppercase">
                    Mensagem pronta para copiar e colar
                  </h4>
                  <button
                    onClick={copyTemplate}
                    className="text-[11px] font-bold text-amber-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer bg-amber-200/60 px-2 py-0.5 rounded"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copiar</span>
                  </button>
                </div>
                <p className="text-xs text-slate-800 italic bg-white p-2.5 rounded border border-amber-200 leading-relaxed font-sans">
                  "Olá, Januário! Li o Guia Completo MCMV Sem Dúvidas e quero entender se posso ter minha casa. Nome: [seu nome]. Cidade: [sua cidade]. Renda familiar: [valor]. Tenho FGTS: [sim/não]."
                </p>
              </div>

              {/* Banner Central Verde Escuro */}
              <div className="bg-[#0b5c46] text-white p-6 rounded-2xl text-center space-y-3 shadow-lg mt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200 block">
                  TEM DÚVIDAS?
                </span>
                <h2 className="text-2xl font-black text-white">
                  Plantão Exclusivo MCMV Sem Dúvidas
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappJanuario}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-black text-amber-300 hover:text-amber-200 block font-mono tracking-tight bg-emerald-800/80 px-4 py-2 rounded-xl"
                  >
                    Januário Leal: (62) 99902-3474
                  </a>
                  <a
                    href={whatsappRosangela}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-black text-amber-300 hover:text-amber-200 block font-mono tracking-tight bg-emerald-800/80 px-4 py-2 rounded-xl"
                  >
                    Rosângela de Lima: (62) 98428-5317
                  </a>
                </div>
                <p className="text-xs text-emerald-100 max-w-sm mx-auto">
                  Atendimento humano, sem robô e sem compromisso. Toque em qualquer número para abrir a conversa.
                </p>
              </div>

              <p className="text-[10px] text-slate-400 text-center leading-relaxed mt-4">
                Este guia é informativo e independente, sem vínculo com o Governo Federal, a Caixa Econômica Federal ou o programa Minha Casa Minha Vida. Faixas, valores e condições estão sujeitos a portarias vigentes e à análise de crédito, e podem mudar. Confirme sempre as condições atuais antes de decidir. Atualizado em outubro de 2026.
              </p>
            </div>
          </div>
          <PageFooter pageNum={15} />
        </div>
      )}
    </div>
  );
};
