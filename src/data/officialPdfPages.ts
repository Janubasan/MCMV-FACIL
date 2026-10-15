export interface OfficialPdfPage {
  pageNumber: number;
  title: string;
  subtitle?: string;
}

export const OFFICIAL_PDF_METADATA = {
  title: 'Guia Completo Minha Casa Minha Vida: Do Zero à Chave',
  edition: 'Atualizado outubro/2026 · Grátis',
  brokerName: 'Januário Leal',
  brokerPhone: '(62) 99902-3474',
  brokerPhoneClean: '5562999023474',
  totalPages: 15,
};

export const PDF_SUMARIO_ITEMS = [
  { num: 1, title: 'Você pode participar?', desc: 'Quem entra e quem fica de fora' },
  { num: 2, title: 'Faixas e renda familiar 2026', desc: 'Tetos atualizados e como calcular' },
  { num: 3, title: 'FGTS: o que é e como usar', desc: 'Seu maior aliado' },
  { num: 4, title: 'Entrada: precisa mesmo?', desc: 'Nem sempre' },
  { num: 5, title: 'Parcelas', desc: 'Quanto vai pesar no bolso' },
  { num: 6, title: 'Nome sujo e score', desc: 'O que fazer' },
  { num: 7, title: 'Checklist de documentos', desc: 'Imprimível' },
  { num: 8, title: 'Os 7 passos até a chave', desc: 'Do primeiro contato à entrega' },
  { num: 9, title: 'As 27 dúvidas mais comuns', desc: 'Respostas diretas' },
  { num: 10, title: 'Custos, golpes e glossário', desc: 'Para não cair em armadilhas' },
  { num: 11, title: 'Próximos passos', desc: 'O que fazer agora' },
];

export const PDF_FAIXAS_TABLE = [
  { faixa: 'Faixa 1', renda: 'até R$ 3.200', paraQuem: 'Baixa renda, maior subsídio' },
  { faixa: 'Faixa 2', renda: 'até R$ 5.000', paraQuem: 'Subsídio de até R$ 55 mil, juros reduzidos' },
  { faixa: 'Faixa 3', renda: 'até R$ 9.600', paraQuem: 'Juros abaixo do mercado' },
  { faixa: 'Faixa 4 (classe média)', renda: 'até R$ 13.000', paraQuem: 'Imóveis de até R$ 600 mil' },
];

export const PDF_PARCELAS_TABLE = [
  { renda: 'R$ 2.500', parcela: 'até R$ 750' },
  { renda: 'R$ 3.000', parcela: 'até R$ 900' },
  { renda: 'R$ 4.000', parcela: 'até R$ 1.200' },
  { renda: 'R$ 5.000', parcela: 'até R$ 1.500' },
  { renda: 'R$ 7.000', parcela: 'até R$ 2.100' },
  { renda: 'R$ 10.000', parcela: 'até R$ 3.000' },
];

export const PDF_CUSTOS_TABLE = [
  { custo: 'ITBI', oQueE: 'Imposto municipal sobre a compra', fgts: 'Em muitos casos, sim' },
  { custo: 'Escritura', oQueE: 'Documento em cartório de notas', fgts: 'Em muitos casos, sim' },
  { custo: 'Registro', oQueE: 'Registro do imóvel no seu nome', fgts: 'Em muitos casos, sim' },
  { custo: 'Condomínio', oQueE: 'Só começa após a entrega das chaves', fgts: 'Não' },
];

export const PDF_GLOSSARIO_TABLE = [
  { termo: 'Subsídio', significa: 'Desconto dado pelo governo no preço do imóvel' },
  { termo: 'SFH', significa: 'Sistema Financeiro da Habitação (financiamentos com regras e juros especiais)' },
  { termo: 'Amortização', significa: 'Pagamento que reduz o saldo da dívida' },
  { termo: 'Avaliação', significa: 'Valor do imóvel apurado pelo banco' },
  { termo: 'CadÚnico', significa: 'Cadastro de famílias de baixa renda, usado na Faixa 1' },
  { termo: 'Tipologia', significa: 'Modelo do apartamento (quartos, metragem)' },
  { termo: 'Comprometimento', significa: 'Parte da renda usada para pagar a parcela' },
];

export const PDF_PASSOS_LIST = [
  { step: 1, title: 'Verificar se você se encaixa', tempo: '30 minutos', desc: 'Conversa rápida e quiz. Trava: achar que não pode sem confirmar.' },
  { step: 2, title: 'Organizar documentos', tempo: '1 a 3 dias', desc: 'Use o checklist. Trava: extrato do FGTS ou comprovante de residência antigos.' },
  { step: 3, title: 'Análise de crédito', tempo: '3 a 15 dias úteis', desc: 'O banco analisa renda, restrições e capacidade. Ajuda: enviar tudo de uma vez.' },
  { step: 4, title: 'Escolher o empreendimento', tempo: 'Visita ao decorado', desc: 'Localização, tipo de apartamento, parcela que cabe e condições do programa.' },
  { step: 5, title: 'Escolher a unidade', tempo: 'No mesmo dia', desc: 'Andar, posição do sol, vaga. É aqui que você trava o valor.' },
  { step: 6, title: 'Assinar o contrato', tempo: 'Com banco e construtora', desc: 'Leve o RG original e quem vai assinar com você.' },
  { step: 7, title: 'Registro e chaves', tempo: 'Cartório e entrega', desc: 'Registro em cartório e entrega das chaves. Parabéns!' },
];

export const PDF_DUVIDAS_ALL = [
  {
    num: 1,
    pergunta: 'O que é o Minha Casa Minha Vida?',
    resposta: 'Programa do Governo Federal que facilita a compra da casa própria com juros menores e subsídio para famílias de baixa e média renda. É financiado pela Caixa e outros bancos, com construtoras parceiras.'
  },
  {
    num: 2,
    pergunta: 'Quem pode participar?',
    resposta: 'Famílias sem imóvel residencial no nome, com renda dentro das faixas vigentes, CPF regular e capacidade de comprovar renda.'
  },
  {
    num: 3,
    pergunta: 'Qual a renda máxima?',
    resposta: 'Em 2026, até R$ 13.000 de renda familiar bruta (Faixa 4). As faixas são: até R$ 3.200, até R$ 5.000, até R$ 9.600 e até R$ 13.000. Os valores mudam por portaria: confirme o vigente antes de se auto-excluir.'
  },
  {
    num: 4,
    pergunta: 'Qual a renda mínima?',
    resposta: 'Não há mínima oficial, mas o banco exige parcela de até cerca de 30% da renda. Na prática, a partir de 1 salário mínimo já há análises possíveis, dependendo do imóvel e do FGTS.'
  },
  {
    num: 5,
    pergunta: 'Preciso ter FGTS?',
    resposta: 'Não é obrigatório, mas ajuda MUITO. Sem FGTS, a entrada pode ser maior.'
  },
  {
    num: 6,
    pergunta: 'Quanto tempo de FGTS preciso?',
    resposta: 'Regra geral: 3 anos de trabalho com FGTS (soma de todos os empregos). Não precisa ser contínuo nem no mesmo empregador.'
  },
  {
    num: 7,
    pergunta: 'Posso usar FGTS para entrada?',
    resposta: 'Sim, é o uso mais comum. Abate direto do valor financiado.'
  },
  {
    num: 8,
    pergunta: 'Posso usar FGTS para pagar parcelas?',
    resposta: 'Em condições específicas, sim: até 12 parcelas com intervalo. Depende do banco e do saldo.'
  },
  {
    num: 9,
    pergunta: 'Preciso dar entrada?',
    resposta: 'Não necessariamente. Muitos casos têm entrada coberta por subsídio + FGTS + condições da construtora. Só a análise confirma.'
  },
  {
    num: 10,
    pergunta: 'Posso comprar sozinho(a)?',
    resposta: 'Sim. A composição de renda é opcional, não obrigatória.'
  },
  {
    num: 11,
    pergunta: 'Posso comprar com cônjuge?',
    resposta: 'Sim, e é recomendado se somar renda. A análise será conjunta, incluindo as restrições dos dois.'
  },
  {
    num: 12,
    pergunta: 'Posso comprar com familiar?',
    resposta: 'Em alguns bancos, sim: pai, mãe ou irmão que vá morar no imóvel. É preciso comprovar a residência conjunta futura.'
  },
  {
    num: 13,
    pergunta: 'Sou MEI. Posso participar?',
    resposta: 'Sim. Comprove com extratos + DAS + IR. Quanto mais organizado, maior a chance.'
  },
  {
    num: 14,
    pergunta: 'Sou autônomo. Como comprovo renda?',
    resposta: 'Extratos bancários de 3 a 6 meses + declaração de IR + contratos. Evite movimentação de dinheiro de terceiros na conta que vai comprovar.'
  },
  {
    num: 15,
    pergunta: 'Estou desempregado. Posso?',
    resposta: 'Sem renda comprovável atual, a análise não passa. Mas se o cônjuge tem renda, ou se há comprovação recente como autônomo, vale analisar.'
  },
  {
    num: 16,
    pergunta: 'Tenho nome sujo. Posso?',
    resposta: 'Depende do valor, do tempo e se já quitou. Não é reprovação automática. Veja a seção 6.'
  },
  {
    num: 17,
    pergunta: 'Meu score é baixo. E agora?',
    resposta: 'Organize renda e documentos e pare de pedir crédito novo por 60 a 90 dias. Score baixo não reprova sozinho.'
  },
  {
    num: 18,
    pergunta: 'Já tenho imóvel. Posso?',
    resposta: 'Se já tem imóvel residencial no nome na mesma cidade, não se enquadra. Se é lote ou imóvel em outra cidade, é preciso analisar o caso.'
  },
  {
    num: 19,
    pergunta: 'Posso escolher o imóvel?',
    resposta: 'Sim, dentro dos empreendimentos enquadrados no programa na sua cidade. Você escolhe bairro, planta e unidade.'
  },
  {
    num: 20,
    pergunta: 'Quanto tempo demora?',
    resposta: 'Pré-análise no mesmo dia. Do envio dos documentos até a assinatura: 30 a 90 dias em média.'
  },
  {
    num: 21,
    pergunta: 'Quais documentos preciso?',
    resposta: 'Veja o checklist imprimível na seção 7. É a lista mais completa.'
  },
  {
    num: 22,
    pergunta: 'Como funciona a análise de crédito?',
    resposta: 'O banco cruza renda, restrições, histórico e comprometimento. Não é só o score.'
  },
  {
    num: 23,
    pergunta: 'O que faz reprovar?',
    resposta: 'Documentos incompletos, renda não comprovada, comprometimento acima de 30%, restrições altas e ativas, informações divergentes.'
  },
  {
    num: 24,
    pergunta: 'Posso fazer simulação sem compromisso?',
    resposta: 'Sim, com atendimento humano é gratuito e sem pressão. Simuladores online nem sempre consideram o subsídio vigente.'
  },
  {
    num: 25,
    pergunta: 'Quais custos além do imóvel?',
    resposta: 'ITBI, registro e escritura (muitos têm desconto ou podem usar FGTS). Condomínio só após a entrega. Pergunte o custo total, não só a parcela.'
  },
  {
    num: 26,
    pergunta: 'Como visito um decorado?',
    resposta: 'Agende pelo WhatsApp. Leve RG, vá com quem vai morar com você e anote dúvidas sobre vaga, posição do sol e vizinhança.'
  },
  {
    num: 27,
    pergunta: 'E depois da aprovação?',
    resposta: 'Assinatura, registro em cartório e entrega das chaves. Depois começam as parcelas + condomínio.'
  },
];
