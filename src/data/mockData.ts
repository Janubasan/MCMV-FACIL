import { FaqItem, Empreendimento, QuizQuestion, BrokerInfo, BlogPost } from '../types';

export const DEFAULT_BROKERS: BrokerInfo[] = [
  {
    id: 'corretor1',
    name: 'Januário Leal',
    role: 'Especialista em Financiamento Caixa & MCMV',
    creci: '[INSERIR CRECI]',
    phone: '5562999023474',
    displayPhone: '(62) 99902-3474',
    email: 'januarioleal@gmail.com',
    cities: 'Goiânia e Aparecida de Goiânia',
    quote: 'Eu explico do jeito que eu explicaria para a minha mãe: sem juridiquês e com a verdade na mesa.',
    experienceYears: 10,
    familiesHelped: 480,
    avatarSeed: 'januario',
  },
  {
    id: 'corretor2',
    name: 'Rosângela de Lima',
    role: 'Consultora de Crédito Imobiliário & Parcerias MRV',
    creci: '[INSERIR CRECI]',
    phone: '5562984285317',
    displayPhone: '(62) 98428-5317',
    email: 'rosangela.mrv@mcmvsemduvidas.com.br',
    cities: 'Aparecida de Goiânia e Goiânia',
    quote: 'Meu trabalho é te dizer a verdade, mesmo quando não é o que você gostaria de ouvir agora — porque o objetivo é você assinar e receber a chave sem susto.',
    experienceYears: 8,
    familiesHelped: 395,
    avatarSeed: 'rosangela',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'quem-pode', label: 'Quem pode participar?' },
  { id: 'renda', label: 'Renda familiar' },
  { id: 'documentos', label: 'Documentos' },
  { id: 'fgts', label: 'FGTS' },
  { id: 'entrada', label: 'Entrada' },
  { id: 'parcelas', label: 'Parcelas' },
  { id: 'nome-sujo', label: 'Nome sujo' },
  { id: 'score', label: 'Score de crédito' },
  { id: 'aprovacao', label: 'Aprovação' },
  { id: 'empreendimentos', label: 'Empreendimentos' },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  // Quem pode participar
  {
    id: 'faq-1',
    category: 'quem-pode',
    categoryLabel: 'Quem pode participar?',
    question: 'Quem pode participar do Minha Casa Minha Vida em 2026?',
    shortAnswer: 'Famílias com renda bruta até R$ 8.000 (ou R$ 12.000 em faixas estendidas) que não possuem imóvel residencial próprio.',
    fullAnswer: [
      'O Minha Casa Minha Vida é destinado a famílias brasileiras que buscam o primeiro imóvel residencial com condições facilitadas de taxa de juros e subsídio governamental.',
      'Os requisitos essenciais são: não possuir imóvel residencial registrado no próprio nome, ter CPF regular perante a Receita Federal, comprovar capacidade civil e residência, e se enquadrar nas faixas de renda estabelecidas pelo programa.',
      'Se você já teve financiamento ativo ou doação com cláusula restritiva no passado, uma análise individual do seu CPF é necessária para checar a elegibilidade atual.'
    ],
    tips: [
      'Mesmo quem mora sozinho ou é solteiro pode participar.',
      'A idade mínima é 18 anos (ou 16 emancipado).'
    ],
    ctaText: 'Verificar se meu perfil se encaixa'
  },
  {
    id: 'faq-2',
    category: 'quem-pode',
    categoryLabel: 'Quem pode participar?',
    question: 'Já tive casa própria no passado e vendi. Posso comprar pelo MCMV?',
    shortAnswer: 'Sim, desde que no momento da nova assinatura você não tenha nenhum imóvel registrado em seu nome.',
    fullAnswer: [
      'A regra geral veda quem possui imóvel residencial no presente momento no município de residência ou trabalho.',
      'Caso você já tenha tido um imóvel mas vendeu e a escritura foi devidamente transferida no cartório de registro de imóveis, você volta a ser elegível para novo financiamento habitacional, ressalvadas regras sobre subsídios anteriores recebidos da União.'
    ]
  },
  {
    id: 'faq-3',
    category: 'quem-pode',
    categoryLabel: 'Quem pode participar?',
    question: 'Posso comprar sozinho ou preciso ter família constituída?',
    shortAnswer: 'Você pode comprar 100% sozinho. Não é obrigatório ser casado ou ter dependentes.',
    fullAnswer: [
      'Muitos acreditam no mito de que o programa só atende casais com filhos. Isso não é verdade!',
      'Compradores solteiros, viúvos ou divorciados têm exatamente os mesmos direitos de contratar o financiamento e utilizar seu FGTS e renda individual.'
    ]
  },

  // Renda familiar
  {
    id: 'faq-4',
    category: 'renda',
    categoryLabel: 'Renda familiar',
    question: 'Qual a renda necessária para o Minha Casa Minha Vida?',
    shortAnswer: 'O programa atende faixas de renda familiar a partir de R$ 1.500 até R$ 8.000+ brutas mensais.',
    fullAnswer: [
      'O programa é estruturado em faixas de renda: Faixa 1 (até R$ 2.850), Faixa 2 (de R$ 2.850,01 a R$ 4.700) e Faixa 3 (de R$ 4.700,01 a R$ 8.000). Em algumas categorias metropolitanas há faixas com teto até R$ 12.000.',
      'Quanto menor a renda familiar bruta, maior o subsídio concedido a fundo perdido pelo Governo Federal e menores são as taxas nominais de juros.',
      'A renda considerada é a soma de todos os proponentes que irão compor a renda (por exemplo, você + seu cônjuge ou familiar).'
    ],
    tips: [
      'Renda bruta é o valor antes dos descontos de INSS e IR.',
      'Benefícios assistenciais transitórios não entram na soma de capacidade de pagamento.'
    ]
  },
  {
    id: 'faq-5',
    category: 'renda',
    categoryLabel: 'Renda familiar',
    question: 'Sou autônomo, MEI ou motorista de aplicativo. Como comprovo renda?',
    shortAnswer: 'Através de extratos bancários dos últimos 6 meses, declaração de Imposto de Renda (IRPF) e DAS-SIMEI.',
    fullAnswer: [
      'A Caixa Econômica Federal e os bancos operadores possuem rotinas consolidadas para profissionais informais, MEIs e autônomos.',
      'A comprovação mais sólida é a última Declaração de Ajuste Anual do IRPF acompanhada do recibo de entrega. Complementarmente, extratos bancários de conta corrente com movimentação contínua dos últimos 3 a 6 meses são aceitos.',
      'Para MEIs, a Declaração Anual do Simples Nacional (DASN-SIMEI) e comprovantes de faturamento regular servem como base para a aferição de renda.'
    ]
  },
  {
    id: 'faq-6',
    category: 'renda',
    categoryLabel: 'Renda familiar',
    question: 'Posso juntar minha renda com cônjuge, noivo(a), mãe ou irmão?',
    shortAnswer: 'Sim! A composição de renda é muito comum e ajuda a aprovar valores maiores de financiamento.',
    fullAnswer: [
      'Você pode compor renda com cônjuge legal ou em união estável. Na Caixa, também é permitida a composição com parentes de primeiro grau (pais, filhos, irmãos) e até parceiros de compra sem vínculo de parentesco direto, desde que ambos assinem como devedores solidários.',
      'Importante: todos os que compõem a renda passarão por análise cadastral de crédito e não podem ter restrições impeditivas ativas.'
    ]
  },

  // Documentos
  {
    id: 'faq-7',
    category: 'documentos',
    categoryLabel: 'Documentos',
    question: 'Quais documentos preciso separar para dar entrada no MCMV?',
    shortAnswer: 'Documento oficial com foto (RG/CNH), CPF, comprovante de residência recente, certidão de estado civil e comprovantes de renda dos últimos 3 meses.',
    fullAnswer: [
      'A documentação é simples, mas deve estar em ordem para evitar retrabalho na agência:',
      '1. RG ou CNH e CPF (válidos e legíveis)',
      '2. Certidão de Nascimento (se solteiro) ou Certidão de Casamento/União Estável',
      '3. Comprovante de residência recente (água, luz, gás ou telefone fixo dos últimos 60 dias)',
      '4. Três últimos holerites (se CLT) ou extratos bancários de 6 meses (se autônomo)',
      '5. Carteira de Trabalho física ou digital (CTPS)',
      '6. Extrato do FGTS atualizado e última declaração de IRPF com recibo.'
    ],
    tips: [
      'Tenha cópias digitais em PDF bem nítidas no seu celular.',
      'Se casado, os mesmos documentos do cônjuge são obrigatórios.'
    ]
  },
  {
    id: 'faq-8',
    category: 'documentos',
    categoryLabel: 'Documentos',
    question: 'Minha certidão de nascimento/casamento precisa ser recente?',
    shortAnswer: 'Na maioria dos casos basta ser legível, mas para casados recomenda-se certidão expedida nos últimos 90 dias.',
    fullAnswer: [
      'Para a pré-análise de crédito, a certidão legível que você possui em casa é aceita.',
      'No momento da lavratura final do contrato com força de escritura pública no banco, alguns cartórios de registro exigem que a certidão de casamento tenha sido atualizada há menos de 90 dias para atestar ausência de divórcio superveniente.'
    ]
  },

  // FGTS
  {
    id: 'faq-9',
    category: 'fgts',
    categoryLabel: 'FGTS',
    question: 'Posso usar meu FGTS no Minha Casa Minha Vida?',
    shortAnswer: 'Sim! O FGTS pode ser usado para abater a entrada, reduzir o saldo devedor ou diminuir o valor das parcelas.',
    fullAnswer: [
      'O FGTS é um dos maiores aliados na compra do primeiro imóvel. Você pode utilizar o saldo total ou parcial da sua conta vinculada.',
      'Ele serve para: compor o valor da entrada, amortizar parcelas mensais futuras ou abater o saldo devedor total do financiamento.',
      'Se você tiver dependentes ou compor renda com o cônjuge, o saldo de FGTS de ambos pode ser somado para o mesmo imóvel.'
    ]
  },
  {
    id: 'faq-10',
    category: 'fgts',
    categoryLabel: 'FGTS',
    question: 'Preciso ter quantos anos de carteira assinada para usar o FGTS?',
    shortAnswer: 'Pelo menos 3 anos de trabalho sob o regime do FGTS, somando todos os empregos (consecutivos ou não).',
    fullAnswer: [
      'A legislação do Fundo de Garantia exige que o titular tenha completado 36 meses (3 anos) de depósitos de FGTS ao longo de sua vida profissional.',
      'Esses 3 anos não precisam ser na mesma empresa e nem ininterruptos. Se você trabalhou 1 ano em 2020, 1 ano em 2022 e 1 ano agora, a exigência está 100% cumprida.'
    ]
  },
  {
    id: 'faq-11',
    category: 'fgts',
    categoryLabel: 'FGTS',
    question: 'Posso usar o Saque-Aniversário do FGTS no financiamento?',
    shortAnswer: 'Sim, você pode utilizar o saldo disponível mesmo que tenha optado pelo Saque-Aniversário, conforme regras da Caixa.',
    fullAnswer: [
      'Ter aderido à modalidade Saque-Aniversário não anula seu direito de utilizar o saldo remanescente na compra do primeiro imóvel.',
      'Entretanto, se você antecipou parcelas do Saque-Aniversário como empréstimo bancário, a parcela bloqueada como garantia não poderá ser resgatada até quitação.'
    ]
  },

  // Entrada
  {
    id: 'faq-12',
    category: 'entrada',
    categoryLabel: 'Entrada',
    question: 'Preciso mesmo ter dinheiro de entrada guardado?',
    shortAnswer: 'Nem sempre! O subsídio do governo somado ao FGTS e ao parcelamento direto com a construtora pode cobrir toda a entrada.',
    fullAnswer: [
      'No Minha Casa Minha Vida, a Caixa financia até 80% do valor do imóvel (em certos casos até mais). Os 20% restantes compõem a entrada.',
      'Essa entrada NÃO precisa ser paga à vista do seu bolso. Ela pode ser quitada com:',
      '• O subsídio concedido pelo Governo Federal (que pode chegar a dezenas de milhares de reais a fundo perdido);',
      '• O saldo do seu FGTS;',
      '• Parcelamento facilitado em até 48 a 72 vezes direto com a construtora (MRV) durante as obras.'
    ],
    tips: [
      'Muitos clientes assinam o contrato pagando apenas um sinal simbólico inicial de R$ 500 a R$ 1.000.',
      'Sempre confirme a simulação do seu caso antes de supor que não tem entrada suficiente.'
    ]
  },
  {
    id: 'faq-13',
    category: 'entrada',
    categoryLabel: 'Entrada',
    question: 'O que é o subsídio do Minha Casa Minha Vida e preciso devolver?',
    shortAnswer: 'É um desconto a fundo perdido dado pelo governo para famílias de menor renda. Você NUNCA precisa devolver.',
    fullAnswer: [
      'O subsídio é um benefício financeiro direto fornecido pelo Governo Federal para reduzir o custo do imóvel.',
      'O valor é abatido diretamente do montante de entrada que você precisaria pagar. Quanto menor a sua renda declarada e o município do imóvel, maior o valor do subsídio recebido.',
      'Não se trata de empréstimo: é recurso público de estímulo habitacional que não gera débito futuro.'
    ]
  },

  // Parcelas
  {
    id: 'faq-14',
    category: 'parcelas',
    categoryLabel: 'Parcelas',
    question: 'Quanto vou pagar de parcela mensal no financiamento?',
    shortAnswer: 'Pela regra legal da Caixa, a parcela não ultrapassa 30% da sua renda familiar bruta mensal.',
    fullAnswer: [
      'Por lei, para garantir a segurança financeira da sua família, a soma da parcela do financiamento nunca pode exceder 30% da renda bruta comprovada.',
      'Por exemplo: para uma renda familiar de R$ 3.000, a parcela máxima ficará em torno de R$ 900 mensais — valor frequentemente inferior a um aluguel na mesma região.',
      'Além disso, as taxas de juros do MCMV são as menores de todo o mercado imobiliário brasileiro.'
    ]
  },
  {
    id: 'faq-15',
    category: 'parcelas',
    categoryLabel: 'Parcelas',
    question: 'A parcela sobe com o tempo ou fica fixa?',
    shortAnswer: 'Geralmente opera pela Tabela SAC (onde a parcela começa um pouco maior e diminui todo mês) ou Price com correção controlada.',
    fullAnswer: [
      'No sistema SAC (Sistema de Amortização Constante), comum na Caixa, o valor da sua prestação diminui mês a mês ao longo do tempo.',
      'Durante o período de construção do imóvel, há a cobrança da evolução de obra proporcional ao percentual concluído da obra, que é detalhado com transparência pelo corretor.'
    ]
  },

  // Nome sujo
  {
    id: 'faq-16',
    category: 'nome-sujo',
    categoryLabel: 'Nome sujo',
    question: 'Estou com o nome negativado no SPC ou Serasa. Posso comprar pelo MCMV?',
    shortAnswer: 'Restrições ativas no SPC/Serasa impedem a aprovação imediata do crédito na Caixa, mas há caminhos práticos para regularizar.',
    fullAnswer: [
      'Falamos a verdade: a Caixa Econômica Federal e o Banco do Brasil realizam consulta cadastral prévia em órgãos de proteção ao crédito (Serasa, SPC, Boa Vista, CADIN e Registrato do Banco Central).',
      'Se você possui dívidas protestadas ou negativadas ativas, o sistema não autoriza a emissão do contrato enquanto elas constarem ativas.',
      'Porém, hoje as negociações em feirões e programas como Desenrola Brasil permitem quitar débitos com até 90% de desconto. Assim que o pagamento é identificado (em média 5 dias úteis), seu nome fica limpo e apto para a simulação habitacional.'
    ],
    tips: [
      'Não caia em promessas de "aprovação milagrosa com nome sujo" — nenhum banco oficial financia imóvel com restrição ativa.',
      'Consulte seu Registrato no Banco Central para verificar se não há apontamentos esquecidos.'
    ]
  },
  {
    id: 'faq-17',
    category: 'nome-sujo',
    categoryLabel: 'Nome sujo',
    question: 'Meu nome está limpo, mas meu cônjuge tem dívidas. Conseguimos?',
    shortAnswer: 'Se forem casados civilmente, o cônjuge também passará pela análise de crédito da Caixa.',
    fullAnswer: [
      'No regime de casamento com comunhão parcial ou total de bens, a análise de crédito da Caixa abrange ambos os cônjuges obrigatoriamente, mesmo que apenas um componha a renda monetária.',
      'A solução recomendada é negociar e quitar a restrição do cônjuge previamente ou verificar com o corretor alternativas compatíveis com a sua situação civil.'
    ]
  },

  // Score de crédito
  {
    id: 'faq-18',
    category: 'score',
    categoryLabel: 'Score de crédito',
    question: 'Meu score de crédito está baixo. Isso me impede de comprar?',
    shortAnswer: 'Não necessariamente! A Caixa utiliza um modelo interno de risco (Score Caixa) que avalia renda estável e histórico.',
    fullAnswer: [
      'O score do Serasa é apenas uma referência de mercado, mas não é o único fator determinante.',
      'A Caixa possui seu próprio sistema de "Score Interno", que leva em conta seu tempo de registro em carteira profissional, estabilidade no emprego, histórico de pagamentos e relacionamento bancário.',
      'Mesmo clientes com score Serasa em torno de 400 a 500 pontos conseguem aprovação quando apresentam documentação clara, renda comprovada e ausência de dívidas ativas.'
    ]
  },
  {
    id: 'faq-19',
    category: 'score',
    categoryLabel: 'Score de crédito',
    question: 'Como faço para subir meu score rapidamente antes de financiar?',
    shortAnswer: 'Mantenha contas básicas em débito automático, cadastre-se no Cadastro Positivo e evite solicitar múltiplos cartões ao mesmo tempo.',
    fullAnswer: [
      '1. Quite qualquer pendência antiga e certifique-se da baixa no sistema.',
      '2. Ative o Cadastro Positivo no Serasa e Boa Vista.',
      '3. Pague contas de consumo (água, luz, telefone) sempre no dia do vencimento.',
      '4. Evite pedir vários cartões de crédito ou empréstimos pessoais nos 60 dias anteriores à simulação imobiliária.'
    ]
  },

  // Aprovação
  {
    id: 'faq-20',
    category: 'aprovacao',
    categoryLabel: 'Aprovação',
    question: 'Quanto tempo demora a aprovação do financiamento na Caixa?',
    shortAnswer: 'A pré-aprovação de crédito costuma sair em 24 a 48 horas úteis após a entrega dos documentos completos.',
    fullAnswer: [
      'O processo se divide em etapas claras:',
      '1. Pré-análise documental com os corretores: no mesmo dia ou até 24 horas;',
      '2. Inserção na plataforma da Caixa Econômica: 24h a 72h para emissão do Parecer de Crédito;',
      '3. Avaliação de engenharia do empreendimento (imóveis MRV já possuem credenciamento pré-aprovado pela Caixa);',
      '4. Emissão do contrato e agendamento da assinatura presencial com o gerente.'
    ]
  },
  {
    id: 'faq-21',
    category: 'aprovacao',
    categoryLabel: 'Aprovação',
    question: 'O que faz a Caixa reprovar uma proposta de financiamento?',
    shortAnswer: 'Restrição cadastral ativa (nome sujo), inconsistência nos comprovantes de renda ou comprometimento prévio excessivo de renda.',
    fullAnswer: [
      'Os principais motivos de recusa são:',
      '• Restrição ativa no CPF (empréstimos vencidos, cheque sem fundo, cartões atrasados);',
      '• Incompatibilidade entre a renda declarada e os extratos bancários apresentados;',
      '• Existência de empréstimos consignados ou financiamentos de veículos que já comprometem grande fatia da renda;',
      'Ao revisar previamente seu perfil com nossos corretores credenciados, corrigimos esses detalhes antes de submeter a proposta ao banco.'
    ]
  },

  // Empreendimentos
  {
    id: 'faq-22',
    category: 'empreendimentos',
    categoryLabel: 'Empreendimentos',
    question: 'Como escolher o melhor empreendimento MRV para a minha família?',
    shortAnswer: 'Analise localização em relação ao transporte público e trabalho, opções de lazer completo e valor da parcela simulada.',
    fullAnswer: [
      'A MRV é a maior construtora da América Latina e especialista absoluta em Minha Casa Minha Vida.',
      'Ao escolher um condomínio fechado MRV, você conta com: guarita com segurança 24h, lazer completo (piscina, churrasqueira, playground, academia e pet place), energia solar nas áreas comuns e acabamento diferenciado.',
      'Nossos corretores podem agendar uma visita guiada ao apartamento decorado para você conhecer a planta real antes de decidir.'
    ]
  },
  {
    id: 'faq-23',
    category: 'empreendimentos',
    categoryLabel: 'Empreendimentos',
    question: 'Posso visitar o apartamento decorado antes de fechar qualquer contrato?',
    shortAnswer: 'Sim, e nós recomendamos fortemente! A visita ao decorado é 100% gratuita e sem compromisso.',
    fullAnswer: [
      'Você pode agendar um horário com o Januário ou com a Rosângela para visitar o plantão de vendas com decorado.',
      'Lá você poderá caminhar pelos cômodos em tamanho real, ver os materiais de acabamento e receber a simulação oficial impressa da sua parcela e subsídio.'
    ]
  },
  {
    id: 'faq-24',
    category: 'empreendimentos',
    categoryLabel: 'Empreendimentos',
    question: 'Quais os custos adicionais além do valor do imóvel (ITBI e Registro)?',
    shortAnswer: 'Em diversos lançamentos MRV selecionados, o ITBI e o Registro no Cartório são 100% grátis ou parcelados.',
    fullAnswer: [
      'Na compra de um imóvel convencional, os custos cartorários de ITBI (Imposto de Transmissão de Bens Imóveis) e Registro somam entre 3% e 5% do valor total.',
      'No entanto, dependendo da campanha e do empreendimento MRV participante, essas despesas são custeadas pela própria construtora ou incluídas no parcelamento da entrada facilitada.'
    ]
  },
  {
    id: 'faq-25',
    category: 'empreendimentos',
    categoryLabel: 'Empreendimentos',
    question: 'O imóvel na planta tem garantia de entrega da Caixa?',
    shortAnswer: 'Sim! Os empreendimentos contam com seguro de término de obra garantido pela Caixa Econômica Federal.',
    fullAnswer: [
      'Ao comprar um imóvel associativo financiado pela Caixa na planta, o contrato conta com a garantia de entrega da Caixa (Seguro Garantia Construtora).',
      'Isso assegura que a obra será concluída no padrão acordado e no cronograma estipulado, trazendo tranquilidade absoluta para você e sua família.'
    ]
  },
  {
    id: 'faq-26',
    category: 'quem-pode',
    categoryLabel: 'Quem pode participar?',
    question: 'Idosos ou aposentados pelo INSS podem financiar pelo MCMV?',
    shortAnswer: 'Sim! Aposentados e pensionistas podem financiar, respeitada a soma da idade com o prazo de amortização.',
    fullAnswer: [
      'A aposentadoria é considerada uma das fontes de renda mais estáveis e seguras pelos bancos.',
      'A única regra limitadora é a idade máxima: a soma da idade do comprador mais o prazo do financiamento não pode ultrapassar 80 anos e 6 meses (regra da SUSEP para cobertura securitária).',
      'Por exemplo: uma pessoa de 60 anos pode financiar em até 20 anos.'
    ]
  },
  {
    id: 'faq-27',
    category: 'documentos',
    categoryLabel: 'Documentos',
    question: 'Preciso pagar alguma taxa para o corretor antes de aprovar o crédito?',
    shortAnswer: 'NÃO! O atendimento, a simulação e o envio de documentos para análise de crédito são 100% gratuitos.',
    fullAnswer: [
      'Jamais pague valores antecipados de "taxa de cadastro" ou "reserva" a ninguém.',
      'Nossos corretores são credenciados e remunerados diretamente pela construtora apenas no momento do sucesso da contratação. Todo o trabalho de assessoria, tirar dúvidas e montar seu dossiê é prestado sem nenhum custo para você.'
    ]
  }
];

export const EMPREENDIMENTOS_MRV: Empreendimento[] = [
  {
    id: 'mrv-gran-safira',
    slug: 'gran-safira',
    name: 'Gran Safira',
    bairro: 'Parque Atheneu',
    cidade: 'Goiânia',
    estado: 'GO',
    status: 'Em Construção',
    priceStartingFrom: 219900,
    subsidyUpTo: 55000,
    simulatedMonthlyInstallment: 589,
    bedrooms: '2 quartos (41 a 45 m²) com opção de varanda e vaga',
    area: '41 a 45 m²',
    hasParking: true,
    tag: 'Região Sul de Goiânia',
    features: [
      'Piscina adulto e infantil com solarium',
      'Churrasqueira gourmet para momentos em família',
      'Playground e pet place equipado',
      'Portaria 24h com guarita de segurança',
      'Bicicletário e coleta seletiva'
    ],
    differentials: [
      'Localizado na Avenida Parque Atheneu na região Sul de Goiânia',
      'Condomínio fechado com lazer completo e segurança 24h',
      'Entrada facilitada com parcelamento direto e uso do FGTS'
    ],
    description: 'Localizado na Avenida Parque Atheneu, o Gran Safira é um condomínio fechado com portaria 24h, piscina, churrasqueira, playground e pet place. Ideal para quem busca qualidade de vida na região Sul de Goiânia com parcelas a partir de R$ 589/mês.',
    deliveryDate: 'Em Construção'
  },
  {
    id: 'mrv-gran-florence',
    slug: 'gran-florence',
    name: 'Gran Florence',
    bairro: 'Parque Santa Cecília',
    cidade: 'Aparecida de Goiânia',
    estado: 'GO',
    status: 'Lançamento',
    priceStartingFrom: 224900,
    subsidyUpTo: 47500,
    simulatedMonthlyInstallment: 629,
    bedrooms: '2 quartos (41,35 m² e 43,87 m²), 1 banheiro, 1 vaga',
    area: '41,35 m² e 43,87 m²',
    hasParking: true,
    tag: 'Sucesso de Lançamento',
    features: [
      'Quatro torres de 4 pavimentos com privacidade',
      'Churrasqueira e espaço gourmet',
      'Jardim paisagístico e praça de convivência',
      'Playground com piso emborrachado',
      'Pet place com agility'
    ],
    differentials: [
      'Avenida São João, no Parque Santa Cecília',
      'Próximo a supermercados, farmácias, linhas de ônibus e escolas',
      'Subsídio do governo de até R$ 47.500 a fundo perdido'
    ],
    description: 'O Gran Florence está localizado na Avenida São João, no Parque Santa Cecília. São quatro torres de 4 pavimentos, com área de lazer completa: playground, jardim, churrasqueira e pet place. Próximo a supermercados, farmácias e escolas em Aparecida de Goiânia.',
    deliveryDate: 'Dezembro de 2027'
  },
  {
    id: 'mrv-gran-essence',
    slug: 'gran-essence',
    name: 'Gran Essence',
    bairro: 'Jardim das Cascatas',
    cidade: 'Aparecida de Goiânia',
    estado: 'GO',
    status: 'Pronto para Morar',
    priceStartingFrom: 232000,
    subsidyUpTo: 42000,
    simulatedMonthlyInstallment: 649,
    bedrooms: '2 quartos (41,35 m²) com opção de varanda e vaga',
    area: '41,35 m²',
    hasParking: true,
    tag: 'Últimas Unidades',
    features: [
      'Apartamentos tradicionais e unidades tipo Garden',
      'Apenas seis torres de 3 pavimentos (96 unidades exclusivas)',
      'Espaço grill com churrasqueira',
      'Playground e área de descanso arborizada',
      'Vagas de garagem demarcadas'
    ],
    differentials: [
      'Apartamentos e gardens de 2 quartos no Jardim das Cascatas',
      'Excelente custo-benefício na região do Parque das Nações',
      'Fácil acesso ao comércio, agências bancárias e serviços'
    ],
    description: 'Apartamentos e gardens de 2 quartos no Jardim das Cascatas. São seis torres de 3 pavimentos, com 96 unidades exclusivas. Excelente custo-benefício na região do Parque das Nações, com fácil acesso ao comércio e serviços de Aparecida de Goiânia.',
    deliveryDate: 'Pronto para Morar'
  },
  {
    id: 'mrv-gran-parma',
    slug: 'gran-parma',
    name: 'Gran Parma',
    bairro: 'Residencial Santa Vitória (Papillon Park)',
    cidade: 'Aparecida de Goiânia',
    estado: 'GO',
    status: 'Lançamento',
    priceStartingFrom: 218900,
    subsidyUpTo: 50000,
    simulatedMonthlyInstallment: 599,
    bedrooms: '2 quartos (41 a 47 m²) com sacada ampla',
    area: '41 a 47 m²',
    hasParking: true,
    tag: 'Mais Novo Lançamento MRV',
    features: [
      'Piscina adulto e infantil com deck',
      'Quadra esportiva para lazer e esportes',
      'Salão de festas decorado',
      'Sacada ampla em todas as unidades',
      'Condomínio moderno com 512 apartamentos'
    ],
    differentials: [
      'Localizado no Papillon Park, uma das áreas de maior valorização de Aparecida',
      'Ambientes integrados (conceito aberto cozinha/sala)',
      'Condições especiais de lançamento e subsídio de até R$ 50.000'
    ],
    description: 'O Gran Parma é o mais novo lançamento da MRV em Aparecida de Goiânia. Com 512 apartamentos, o empreendimento oferece apartamentos com dois quartos, ambientes integrados e sacada ampla, além de área de lazer completa com piscina e quadra esportiva. Localizado na região do Papillon Park, uma das áreas de maior crescimento da cidade.',
    deliveryDate: 'Junho de 2028'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a renda bruta familiar mensal (somando você e quem mora/vai comprar com você)?',
    options: [
      { label: 'Até 1 salário mínimo (até R$ 1.518)', points: 1, tag: 'faixa1_baixa' },
      { label: 'De 1 a 2 salários mínimos (R$ 1.518 a R$ 3.036)', points: 3, tag: 'faixa1_ideal' },
      { label: 'De 2 a 4 salários mínimos (R$ 3.036 a R$ 6.072)', points: 5, tag: 'faixa2_perfeita' },
      { label: 'De 4 a 8 salários mínimos (R$ 6.072 a R$ 12.144)', points: 4, tag: 'faixa3' },
      { label: 'Acima de 8 salários mínimos', points: 1, tag: 'faixa_alta' }
    ]
  },
  {
    id: 2,
    question: 'Você ou quem vai comprar com você possui FGTS com saldo?',
    options: [
      { label: 'Sim, tenho saldo acumulado na conta do FGTS', points: 3, tag: 'fgts_ok' },
      { label: 'Sim, mas acho que o saldo é baixo', points: 2, tag: 'fgts_baixo' },
      { label: 'Não tenho / não sei meu saldo', points: 1, tag: 'fgts_nao' }
    ]
  },
  {
    id: 3,
    question: 'Você ou seu parceiro(a) já possuem algum imóvel residencial no nome?',
    options: [
      { label: 'Não, nunca tive e não tenho imóvel residencial', points: 3, tag: 'primeiro_imovel' },
      { label: 'Tive no passado, mas vendi e passei a escritura', points: 2, tag: 'ja_teve' },
      { label: 'Sim, atualmente tenho imóvel residencial no meu nome', points: 0, tag: 'tem_imovel' }
    ]
  },
  {
    id: 4,
    question: 'Como está a situação do seu CPF nos órgãos de crédito hoje?',
    options: [
      { label: 'Nome 100% limpo, sem nenhuma pendência', points: 3, tag: 'nome_limpo' },
      { label: 'Tenho dívidas antigas, mas já estou negociando/quitando', points: 2, tag: 'negociando' },
      { label: 'Estou com restrição ativa (nome negativado)', points: 1, tag: 'negativado' }
    ]
  },
  {
    id: 5,
    question: 'Qual é a sua principal situação profissional atual?',
    options: [
      { label: 'Carteira assinada (CLT) há mais de 1 ano', points: 3, tag: 'clt_estavel' },
      { label: 'Autônomo ou MEI com extratos bancários organizados', points: 3, tag: 'autonomo_comprovado' },
      { label: 'CLT recente (menos de 1 ano no emprego atual)', points: 2, tag: 'clt_recente' },
      { label: 'Informal / sem comprovação formal de renda no momento', points: 0, tag: 'sem_comprovacao' }
    ]
  },
  {
    id: 6,
    question: 'Você consegue juntar comprovantes de renda dos últimos 3 meses?',
    options: [
      { label: 'Sim, holerites ou extratos bancários completos e em dia', points: 3, tag: 'docs_completos' },
      { label: 'Tenho alguns meses, preciso emitir o restante', points: 2, tag: 'docs_parciais' },
      { label: 'Não tenho como comprovar os últimos 3 meses agora', points: 0, tag: 'docs_ausentes' }
    ]
  },
  {
    id: 7,
    question: 'Você possui alguma reserva em dinheiro para entrada ou sinal?',
    options: [
      { label: 'Sim, tenho um valor guardado para investir na entrada', points: 3, tag: 'reserva_ok' },
      { label: 'Não tenho dinheiro guardado, pretendo usar FGTS e o subsídio', points: 3, tag: 'uso_fgts_subsidio' },
      { label: 'Não tenho nenhuma reserva e não tenho FGTS', points: 2, tag: 'precisa_parcelamento' }
    ]
  },
  {
    id: 8,
    question: 'Quando você pretende se mudar e sair do aluguel?',
    options: [
      { label: 'O quanto antes (nos próximos 30 a 60 dias)', points: 3, tag: 'imediato' },
      { label: 'Nos próximos 6 meses', points: 3, tag: 'curto_prazo' },
      { label: 'Até o final deste ano', points: 2, tag: 'medio_prazo' },
      { label: 'Ainda estou apenas pesquisando informações', points: 1, tag: 'pesquisa' }
    ]
  }
];

export const DOCUMENT_CHECKLIST = [
  {
    category: 'Titular / Proponente Principal',
    description: 'Documentos obrigatórios do titular da compra',
    items: [
      { id: 't1', label: 'Documento oficial com foto (RG ou CNH dentro do prazo)', note: 'Frente e verso legíveis' },
      { id: 't2', label: 'CPF regular perante a Receita Federal', note: 'Pode constar no próprio RG ou CNH' },
      { id: 't3', label: 'Certidão de Estado Civil atualizada', note: 'Nascimento para solteiros; Casamento/União Estável para casados' },
      { id: 't4', label: 'Comprovante de residência recente (últimos 60 dias)', note: 'Conta de água, luz, gás ou telefone fixo em seu nome' },
      { id: 't5', label: '3 últimos holerites (se CLT) ou 6 meses de extrato bancário', note: 'Para comprovação de renda bruta' },
      { id: 't6', label: 'Carteira de Trabalho (CTPS física ou digital)', note: 'Página de identificação e todos os contratos de trabalho' },
      { id: 't7', label: 'Extrato analítico do FGTS atualizado', note: 'Obtido diretamente no aplicativo oficial do FGTS' },
      { id: 't8', label: 'Última declaração de Imposto de Renda e recibo de entrega', note: 'Obrigatório se você declarou IRPF no último ano' },
    ]
  },
  {
    category: 'Cônjuge / Companheiro (se houver)',
    description: 'Obrigatório para quem é casado civilmente ou vive em união estável',
    items: [
      { id: 'c1', label: 'RG e CPF do cônjuge / companheiro', note: 'Documento original e legível' },
      { id: 'c2', label: 'Certidão de Casamento ou Escritura Pública de União Estável', note: 'Com averbação se houver divórcio anterior' },
      { id: 'c3', label: 'Comprovantes de renda do cônjuge (se compuser renda)', note: '3 últimos holerites ou extratos bancários' },
      { id: 'c4', label: 'Extrato do FGTS do cônjuge (se for somar recursos)', note: 'Para usar o saldo de ambos no mesmo imóvel' },
    ]
  },
  {
    category: 'Autônomo, Profissional Liberal ou MEI',
    description: 'Para quem trabalha por conta própria e quer comprovar capacidade de pagamento',
    items: [
      { id: 'a1', label: 'Extratos bancários de conta corrente dos últimos 6 meses', note: 'Documento completo em PDF sem rasuras' },
      { id: 'a2', label: 'Certificado da Condição de Microempreendedor Individual (CCMEI)', note: 'Emitido no Portal do Empreendedor' },
      { id: 'a3', label: 'Declaração Anual do Simples Nacional (DASN-SIMEI)', note: 'Comprovante do último exercício' },
      { id: 'a4', label: 'DECORE eletrônica com DARF (opcional / se solicitado pelo banco)', note: 'Emitido por contador credenciado' },
    ]
  }
];

export const TIMELINE_STEPS = [
  {
    step: 1,
    title: 'Diagnóstico e Verificação de Renda',
    time: '20 minutos a 1 dia',
    desc: 'Entendemos a sua renda familiar, se possui FGTS e se há apontamentos. Calculamos em qual faixa do Minha Casa Minha Vida você se enquadra para estimar o subsídio máximo.',
    bottleneck: 'Falta de clareza sobre a renda bruta ou esquecimento de débitos antigos.',
    tip: 'Faça nosso diagnóstico online e converse com o corretor para simular o valor exato.'
  },
  {
    step: 2,
    title: 'Separação e Envio de Documentos',
    time: '1 a 3 dias',
    desc: 'Você separa as fotos ou PDFs dos documentos pessoais (RG, CPF, comprovante de residência e renda). Nossa equipe confere se tudo está legível e conforme os padrões exigidos pela Caixa.',
    bottleneck: 'Extratos cortados, comprovante de residência em nome de terceiros sem declaração ou holerites incompletos.',
    tip: 'Utilize nosso checklist interativo de documentos para marcar o que já tem em mãos.'
  },
  {
    step: 3,
    title: 'Análise e Aprovação de Crédito Caixa',
    time: '24h a 5 dias úteis',
    desc: 'O dossiê do seu perfil é submetido ao sistema oficial da Caixa Econômica Federal. O banco avalia sua capacidade de pagamento e emite o parecer com o limite aprovado, subsídio e valor da parcela.',
    bottleneck: 'Score interno muito baixo ou restrição recente em órgãos de crédito.',
    tip: 'Essa aprovação tem validade formal e garante que você pode escolher seu apartamento com tranquilidade.'
  },
  {
    step: 4,
    title: 'Escolha do Empreendimento e Visita ao Decorado',
    time: '1 a 7 dias',
    desc: 'Com o valor aprovado pelo banco, você escolhe o condomínio MRV que melhor atende sua rotina (localização, lazer, proximidade com trabalho/escola). Você visita o apartamento decorado em tamanho real.',
    bottleneck: 'Dúvida entre bairros ou demora para agendar visita enquanto as unidades promocionais esgotam.',
    tip: 'Leve a família para conhecer o decorado: é a melhor maneira de sentir o espaço.'
  },
  {
    step: 5,
    title: 'Escolha da Unidade e Proposta Comercial',
    time: '1 dia',
    desc: 'Você escolhe o andar, a posição do sol e a vaga de garagem. É montado o plano de fluxo financeiro: quanto é coberto pelo subsídio, quanto pelo FGTS e o parcelamento da entrada facilitada com a MRV.',
    bottleneck: 'Unidade desejada ser vendida antes da emissão da proposta.',
    tip: 'Nossos corretores reservam a unidade no sistema no momento em que você bate o martelo.'
  },
  {
    step: 6,
    title: 'Assinatura do Contrato de Financiamento',
    time: '3 a 15 dias',
    desc: 'Você assina o contrato de compra e venda com a MRV e o contrato habitacional oficial com a Caixa Econômica Federal, que possui força de escritura pública definitiva.',
    bottleneck: 'Ausência de algum documento do cônjuge no dia da assinatura.',
    tip: 'Nossa assessoria acompanha você presencialmente até a agência para garantir que tudo transcorra com segurança.'
  },
  {
    step: 7,
    title: 'Acompanhamento de Obras e Entrega das Chaves 🔑',
    time: 'Conforme cronograma da obra',
    desc: 'Você acompanha a evolução da obra pelo aplicativo da MRV. Quando a construção é finalizada e o Habite-se expedido, é realizada a vistoria técnica e a tão sonhada entrega das chaves da sua casa própria!',
    bottleneck: 'Ansiedade natural da espera da obra.',
    tip: 'Se você optar por um empreendimento pronto para morar, essa etapa ocorre logo após a assinatura do contrato!'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'minha-casa-minha-vida-2026-o-que-mudou',
    title: 'Minha Casa Minha Vida 2026: o que mudou e como funciona agora',
    excerpt: 'Conheça os novos tetos de subsídio, as novas faixas de renda e as regras atualizadas para quem quer sair do aluguel neste ano.',
    readTime: '5 min de leitura',
    date: 'Atualizado em 2026',
    category: 'Regras e Novidades',
    content: [
      'O programa Minha Casa Minha Vida passou por aprimoramentos cruciais nos últimos anos, aumentando o poder de compra da família trabalhadora brasileira.',
      'Entre os principais avanços estão o aumento do teto de subsídio — que em muitas capitais e regiões metropolitanas pode ultrapassar R$ 55.000 a fundo perdido — e a redução das taxas nominais de juros, que continuam sendo as menores do mercado financeiro nacional.',
      'Além disso, o teto do valor do imóvel financiado foi ampliado, permitindo que condomínios com excelente infraestrutura de lazer, elevador e segurança 24h entrem nas condições subsidiadas do programa.',
      'Para aproveitar essas condições, o primeiro passo indispensável é saber exatamente em qual faixa a renda familiar somada se encontra e quais benefícios adicionais seu município oferece.'
    ]
  },
  {
    id: 'post-2',
    slug: 'nome-sujo-impede-minha-casa-minha-vida',
    title: 'Nome sujo impede o Minha Casa Minha Vida? Entenda de uma vez',
    excerpt: 'Descubra a verdade sobre restrições no SPC/Serasa, mitos comuns e o passo a passo seguro para limpar o nome e financiar.',
    readTime: '6 min de leitura',
    date: 'Guia Prático',
    category: 'Crédito e Restrições',
    content: [
      'Uma das perguntas que mais ouvimos no dia a dia é: "Carlos / Mariana, meu nome está sujo, tem como eu comprar?". A resposta precisa ser transparente e ética.',
      'Nenhum banco oficial — seja a Caixa Econômica Federal ou o Banco do Brasil — assina contrato de financiamento imobiliário enquanto houver restrição ativa registrada no CPF do titular ou cônjuge.',
      'Porém, ter uma restrição hoje não significa que você deve desistir do sonho da casa própria. A imensa maioria das dívidas que impedem a aprovação são pequenas contas de telefone, cartão de crédito antigo ou pendências que podem ser renegociadas no Desenrola Brasil ou feirões Serasa Limpa Nome com até 90% de desconto.',
      'Assim que o pagamento do acordo é compensado, a baixa da restrição ocorre em até 5 dias úteis. Com o nome liberado, a simulação habitacional pode ser submetida normalmente.'
    ]
  },
  {
    id: 'post-3',
    slug: 'como-usar-o-fgts-para-comprar-sua-casa',
    title: 'Como usar o FGTS para comprar sua casa: passo a passo definitivo',
    excerpt: 'Aprenda como utilizar o saldo acumulado do FGTS para entrada, amortização de saldo ou redução de parcelas mensais.',
    readTime: '4 min de leitura',
    date: 'Finanças Pessoais',
    category: 'FGTS',
    content: [
      'O FGTS é um dos recursos mais valiosos que o trabalhador sob regime CLT possui, mas muitos não sabem que ele pode transformar uma compra impossível em uma realidade imediata.',
      'O saldo pode ser utilizado tanto para pagar a entrada exigida pela Caixa quanto para compor o valor total do imóvel. Além disso, você pode somar o seu FGTS com o saldo do seu cônjuge ou de quem for compor a renda com você.',
      'As exigências básicas são ter pelo menos 3 anos de trabalho com recolhimento ao fundo (somando todas as empresas que você já passou), não possuir outro imóvel residencial próprio no mesmo município e destinar a compra para moradia própria.',
      'Dica de ouro: nunca saque o FGTS antes de conversar com o corretor, pois a Caixa realiza o débito direto na conta vinculada no ato da assinatura contratual.'
    ]
  },
  {
    id: 'post-4',
    slug: 'autonomo-sem-carteira-assinada-como-comprovar-renda',
    title: 'Autônomo sem carteira assinada: como comprovar renda no MCMV',
    excerpt: 'MEIs, motoristas de app, comerciantes e autônomos também têm direito ao MCMV. Veja como comprovar e ser aprovado.',
    readTime: '5 min de leitura',
    date: 'Autônomos e MEI',
    category: 'Comprovação de Renda',
    content: [
      'Não ter registro em carteira de trabalho (CLT) não é mais impedimento para financiar seu imóvel pela Caixa Econômica.',
      'Hoje, o sistema bancário compreende a realidade do empreendedor e do trabalhador autônomo. A forma mais segura de comprovação é a última declaração de IRPF acompanhada dos extratos bancários de conta corrente dos últimos 6 meses.',
      'Para que os extratos tenham força probatória, o ideal é concentrar todas as suas entradas de dinheiro em uma mesma conta bancária, evitando movimentações fragmentadas em dinheiro vivo.',
      'Se você é MEI, a Declaração Anual (DASN) somada ao comprovante de emissão das guias DAS pagas em dia gera um histórico contínuo de confiabilidade cadastral.'
    ]
  }
];

export const GUIDE_CHAPTERS = [
  {
    chapter: 1,
    title: 'Você pode participar do Minha Casa Minha Vida?',
    subtitle: 'Requisitos fundamentais para não perder tempo com ilusões ou informações erradas',
    content: [
      'O programa Minha Casa Minha Vida (MCMV) foi criado pelo Governo Federal com um propósito claro: permitir que famílias brasileiras de rendas baixa e média tenham acesso à casa própria digna, com juros subsidiados e condições que cabem no bolso.',
      'Para ser elegível ao programa, você precisa preencher 4 critérios fundamentais:',
      '1. Renda Familiar Bruta: a soma de todos os que vão compor a renda deve estar dentro dos limites estabelecidos (até R$ 8.000 mensais na regra geral, com extensões metropolitanas).',
      '2. Inexistência de Imóvel Próprio: você e os participantes não podem possuir imóvel residencial registrado no município de residência ou trabalho.',
      '3. CPF Regular: o CPF deve estar ativo e sem pendências cadastrais na Receita Federal.',
      '4. Análise de Crédito Bancária: o nome não pode constar com restrições impeditivas ativas nos órgãos de proteção ao crédito (SPC, Serasa, CADIN).',
      'Um ponto muito importante: você NÃO precisa ser casado e NÃO precisa ter filhos. Solteiros, divorciados e pessoas que moram sozinhas têm exatamente os mesmos direitos de contratar o financiamento.'
    ]
  },
  {
    chapter: 2,
    title: 'Renda Familiar: como calcular e quais faixas existem',
    subtitle: 'O cálculo exato da renda bruta e como o subsídio varia',
    content: [
      'A renda considerada pelo programa é a Renda Familiar Bruta — ou seja, o valor que você recebe antes de qualquer desconto da folha (como INSS, plano de saúde ou vale-transporte).',
      'Como somar a renda:',
      '• Salário com carteira assinada (holerite)',
      '• Renda formal de MEI ou empresa individual',
      '• Renda informal de autônomo comprovada via extrato bancário dos últimos 6 meses',
      '• Aposentadorias e pensões do INSS',
      'O que NÃO entra na soma: benefícios assistenciais transitórios (como Bolsa Família ou auxílios emergenciais).',
      'As Faixas do Programa:',
      '• Faixa 1 (até R$ 2.850): juros a partir de 4% a 4,25% ao ano e subsídio máximo do governo.',
      '• Faixa 2 (de R$ 2.850 a R$ 4.700): juros intermediários (em torno de 4,75% a 6,5% a.a.) e subsídio parcial.',
      '• Faixa 3 (de R$ 4.700 a R$ 8.000): juros reduzidos em relação ao mercado livre (em torno de 7,16% a 8,16% a.a.), sem subsídio direto, mas com teto de financiamento elevado.',
      'Lembre-se: quanto menor a sua renda, maior o desconto que o governo dá para pagar a sua entrada.'
    ]
  },
  {
    chapter: 3,
    title: 'O que é FGTS e como usar na prática',
    subtitle: 'O Fundo de Garantia como seu maior trunfo financeiro',
    content: [
      'Se você trabalhou ou trabalha com carteira assinada (CLT), tem uma conta vinculada de FGTS na Caixa onde a empresa deposita 8% do seu salário todo mês.',
      'Você pode utilizar o saldo dessa conta para 3 finalidades na compra do imóvel:',
      '1. Pagar a Entrada: o saldo é abatido do valor que você precisaria pagar à vista ou parcelar com a construtora.',
      '2. Amortizar o Saldo Devedor: após a compra, a cada 2 anos você pode usar novos depósitos do FGTS para reduzir o saldo restante e terminar de pagar muito mais rápido.',
      '3. Reduzir as Parcelas Mensais: é possível usar o FGTS para pagar até 80% do valor da sua prestação por 12 meses consecutivos.',
      'Requisitos para usar o FGTS: ter completado no mínimo 3 anos de trabalho sob regime do FGTS (somando todos os empregos da sua vida), não ter outro imóvel no município e destinar o imóvel para sua própria moradia.',
      'Caso você more com cônjuge ou vá comprar junto com outra pessoa, o saldo de FGTS de AMBOS pode ser somado para o mesmo apartamento!'
    ]
  },
  {
    chapter: 4,
    title: 'Entrada: você precisa mesmo ter dinheiro guardado?',
    subtitle: 'A verdade sobre o mito de que só compra quem tem dezenas de milhares de reais guardados',
    content: [
      'Muitas famílias adiam a compra da casa própria por anos acreditando que precisam de R$ 30.000 a R$ 50.000 à vista na conta para dar de entrada. Isso é um dos maiores mitos imobiliários do Brasil.',
      'A Caixa financia até 80% do valor do imóvel. Os outros 20% compõem a chamada entrada.',
      'Como essa entrada de 20% é paga na prática:',
      '• Pelo Subsídio do Governo (que pode abater até R$ 55.000 a fundo perdido);',
      '• Pelo saldo do seu FGTS;',
      '• Pelo parcelamento facilitado da construtora: a MRV parcela a diferença em até 60 vezes durante o período de obras, com parcelas que cabem no seu orçamento mensal.',
      'Resultado: em uma enorme quantidade de atendimentos, a família fecha negócio com um valor de sinal inicial muito baixo (frequentemente entre R$ 500 e R$ 1.500) e o restante fica 100% diluído.'
    ]
  },
  {
    chapter: 5,
    title: 'Parcelas: quanto vai pesar no seu bolso?',
    subtitle: 'A regra sagrada dos 30% da renda e a comparação com o aluguel',
    content: [
      'Para que a compra seja uma vitória e não um peso, o sistema financeiro habitacional brasileiro aplica uma trava de segurança: a prestação do financiamento nunca pode ultrapassar 30% da sua renda familiar bruta.',
      'Exemplos práticos:',
      '• Renda R$ 2.400: parcela máxima de ~R$ 720/mês.',
      '• Renda R$ 3.500: parcela máxima de ~R$ 1.050/mês.',
      '• Renda R$ 5.000: parcela máxima de ~R$ 1.500/mês.',
      'Compare com o aluguel: o aluguel é um dinheiro pago a fundo perdido que aumenta todo ano pelo IGPM ou IPCA. A parcela do financiamento na Tabela SAC DIMINUI com o passar dos anos, enquanto o seu imóvel próprio valoriza ano após ano.'
    ]
  },
  {
    chapter: 6,
    title: 'Nome sujo e Score de Crédito: o que fazer',
    subtitle: 'Como agir caso você tenha pendências financeiras',
    content: [
      'Ninguém gosta de falar sobre dívidas, mas a nossa equipe encara esse tema com empatia, respeito e solução.',
      'A regra oficial é intransponível: para assinar o contrato na Caixa, o CPF não pode ter apontamento ativo nos órgãos de proteção ao crédito (Serasa, SPC, CADIN).',
      'Passo a passo para quem tem pendências:',
      '1. Consulte gratuitamente seu CPF no Serasa Limpa Nome e no sistema Registrato do Banco Central para saber exatamente quais dívidas existem.',
      '2. Priorize pagar ou renegociar as dívidas menores e protestos cadastrados.',
      '3. Aproveite campanhas com grandes descontos (muitas dívidas são quitadas por 10% a 20% do valor original).',
      '4. Guarde o comprovante de pagamento. Em até 5 dias úteis seu nome sai dos birôs de restrição e você estará livre para a análise de crédito.',
      'Sobre o Score: não se desespere com score de 400 ou 500 pontos. A Caixa possui análise própria de crédito e valoriza mais a sua estabilidade e renda comprovada do que a pontuação pontual do birô comercial.'
    ]
  },
  {
    chapter: 7,
    title: 'Checklist Completo de Documentos',
    subtitle: 'A lista exata para você separar e não perder viagem',
    content: [
      'Separe os seguintes itens com antecedência:',
      '• RG ou CNH (nítido e dentro da validade) e CPF;',
      '• Certidão de Nascimento (se solteiro) ou Certidão de Casamento/União Estável;',
      '• Comprovante de Residência dos últimos 60 dias (água, luz, gás ou telefone fixo);',
      '• 3 últimos holerites (se CLT) ou 6 últimos extratos bancários de conta corrente (se autônomo/MEI);',
      '• Carteira de Trabalho (CTPS) física ou digital com todos os registros;',
      '• Extrato atualizado do FGTS emitido pelo aplicativo Caixa;',
      '• Declaração de IRPF e recibo do último ano (se você declarou);',
      'Se casado: os mesmos documentos do cônjuge são obrigatórios.'
    ]
  },
  {
    chapter: 8,
    title: 'Os 7 Passos até a Chave na Mão',
    subtitle: 'A linha do tempo do começo ao fim do processo',
    content: [
      'Passo 1: Diagnóstico prévio e verificação de renda com o corretor credenciado.',
      'Passo 2: Envio e conferência da documentação.',
      'Passo 3: Aprovação de crédito oficial pela Caixa Econômica Federal.',
      'Passo 4: Escolha do empreendimento MRV e visita guiada ao decorado.',
      'Passo 5: Escolha da unidade (andar, posição do sol, vaga) e montagem da proposta.',
      'Passo 6: Assinatura do contrato oficial com força de escritura.',
      'Passo 7: Vistoria técnica da entrega e recebimento das chaves do seu novo lar!'
    ]
  },
  {
    chapter: 9,
    title: 'As 27 Dúvidas Mais Comuns Respondidas',
    subtitle: 'Resumo rápido para consultar sempre que bater uma insegurança',
    content: [
      '1. Quem pode? Famílias com renda até R$ 8k sem outro imóvel no nome.',
      '2. Posso comprar solteiro? Sim, perfeitamente.',
      '3. Autônomo pode? Sim, com extratos bancários de 6 meses e IRPF.',
      '4. Como funciona o subsídio? É um desconto do governo que você não devolve.',
      '5. O que reprova na Caixa? Nome sujo ativo ou renda inconsistente.',
      '6. Preciso pagar o corretor? Não, o atendimento é 100% gratuito.',
      '7. E se a obra atrasar? As obras contam com seguro de entrega garantido pela Caixa Econômica.',
      'Consulte a seção completa de dúvidas no site sempre que precisar de detalhes adicionais.'
    ]
  },
  {
    chapter: 10,
    title: 'Próximos Passos: o que fazer agora',
    subtitle: 'Transformando informação em ação',
    content: [
      'Você já possui a clareza que 90% das pessoas não têm.',
      'Agora é a hora de agir:',
      '1. Abra a pasta dos seus documentos e confira se tem RG, comprovante de residência e renda em mãos.',
      '2. Chame um dos nossos corretores credenciados no WhatsApp.',
      '3. Em menos de 24 horas nós calculamos seu subsídio, a sua parcela exata e te mostramos os empreendimentos disponíveis perto de você.',
      'Não deixe para o mês que vem: as condições do Minha Casa Minha Vida e a disponibilidade das melhores unidades mudam frequentemente.'
    ]
  },
  {
    chapter: 11,
    title: 'Fale Conosco: Seus Corretores Credenciados',
    subtitle: 'Atendimento humano, ético e sem compromisso em Goiânia e Aparecida',
    content: [
      'Januário Leal — Especialista Caixa & MCMV | WhatsApp: (62) 99902-3474',
      'Rosângela de Lima — Consultora MRV | WhatsApp: (62) 98428-5317',
      'Atendimento em Goiânia e Aparecida de Goiânia (GO)',
      'Aviso legal: Conteúdo informativo independente. Sujeito à análise de crédito e disponibilidade das unidades.'
    ]
  }
];
