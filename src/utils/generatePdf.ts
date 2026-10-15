import { jsPDF } from 'jspdf';
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

interface LeadDownloadInfo {
  name?: string;
  city?: string;
  whatsapp?: string;
  email?: string;
}

export const downloadOfficialPdf = (leadInfo?: LeadDownloadInfo): boolean => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // 210
    const pageHeight = doc.internal.pageSize.getHeight(); // 297
    const margin = 16;
    const contentWidth = pageWidth - margin * 2;

    const brandGreen = [11, 92, 70]; // #0b5c46
    const brandGold = [232, 155, 39]; // #e89b27
    const darkText = [30, 41, 59]; // slate-800
    const mutedText = [100, 116, 139]; // slate-500
    const cardBg = [248, 250, 252]; // slate-50

    const addHeader = (pageNum: number) => {
      if (pageNum === 1) return;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text('MCMV SEM DÚVIDAS — GOIÂNIA E APARECIDA', margin, 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text('Guia Completo Minha Casa Minha Vida · Edição 2026', pageWidth - margin, 12, { align: 'right' });

      doc.setDrawColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.setLineWidth(0.6);
      doc.line(margin, 14, pageWidth - margin, 14);
    };

    const addFooter = (pageNum: number) => {
      const footerY = pageHeight - 12;
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4);

      // Contact banner
      doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.roundedRect(margin, footerY - 2.5, contentWidth - 16, 8, 1.5, 1.5, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(255, 255, 255);
      doc.text('Ficou com dúvida? WhatsApp Januário Leal: (62) 99902-3474 | Rosângela de Lima: (62) 98428-5317', margin + 3, footerY + 2.5);

      // Page number
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(`${pageNum}`, pageWidth - margin - 5, footerY + 2.5, { align: 'right' });
    };

    // =========================================================================
    // PÁGINA 1: CAPA
    // =========================================================================
    // Background fill
    doc.setFillColor(252, 251, 232); // light cream
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Decorative top bar
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.rect(0, 0, pageWidth, 8, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(brandGold[0], brandGold[1], brandGold[2]);
    doc.text('MCMV SEM DÚVIDAS', pageWidth / 2, 32, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('GOIÂNIA E APARECIDA DE GOIÂNIA', pageWidth / 2, 40, { align: 'center' });

    // Badge
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.roundedRect(margin + 20, 48, contentWidth - 40, 9, 2, 2, 'F');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text('ATUALIZADO PARA AS REGRAS VIGENTES DO MCMV 2026', pageWidth / 2, 54, { align: 'center' });

    // Main Cover Box
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, 65, contentWidth, 110, 4, 4, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('GUIA COMPLETO', pageWidth / 2, 82, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('MINHA CASA MINHA VIDA', pageWidth / 2, 92, { align: 'center' });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(12);
    doc.setTextColor(brandGold[0], brandGold[1], brandGold[2]);
    doc.text('Do zero à chave sem juridiquês e sem enrolação', pageWidth / 2, 102, { align: 'center' });

    // Lead personalization if provided
    if (leadInfo?.name) {
      doc.setFillColor(236, 253, 245);
      doc.setDrawColor(16, 185, 129);
      doc.roundedRect(margin + 10, 112, contentWidth - 20, 15, 2, 2, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(`Exemplar preparado especialmente para: ${leadInfo.name}`, pageWidth / 2, 118, { align: 'center' });
      if (leadInfo.city) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(darkText[0], darkText[1], darkText[2]);
        doc.text(`Interesse na região de: ${leadInfo.city}`, pageWidth / 2, 123, { align: 'center' });
      }
    }

    // Key points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const highlights = [
      '• Faixas de renda e regras atualizadas conforme Portaria MCID nº 333/2026',
      '• Como usar FGTS para entrada ou redução de parcelas',
      '• O que fazer se tiver nome negativado ou score baixo',
      '• Checklist imprimível com todos os documentos necessários',
      '• Os 7 passos cronológicos do primeiro contato até as chaves',
      '• 27 dúvidas mais frequentes respondidas em linguagem direta',
    ];
    let yPoint = leadInfo?.name ? 134 : 118;
    highlights.forEach((h) => {
      doc.text(h, margin + 8, yPoint);
      yPoint += 7;
    });

    // Contact Box
    doc.setFillColor(245, 158, 11); // amber-500
    doc.roundedRect(margin, 186, contentWidth, 24, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('DÚVIDAS OU SIMULAÇÃO GRATUITA SEM COMPROMISSO?', pageWidth / 2, 194, { align: 'center' });

    doc.setFontSize(11);
    doc.text('Januário Leal: (62) 99902-3474  |  Rosângela de Lima: (62) 98428-5317', pageWidth / 2, 203, { align: 'center' });

    // Bottom Credentials
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Atendimento humano e ético · Corretores credenciados CRECI Goiás · Sem cobrança de taxas antecipadas', pageWidth / 2, 220, { align: 'center' });

    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.roundedRect(margin + 30, 226, contentWidth - 60, 8, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text('Material Gratuito de Orientação ao Comprador · Outubro/2026', pageWidth / 2, 231.5, { align: 'center' });

    // =========================================================================
    // PÁGINA 2: SUMÁRIO
    // =========================================================================
    doc.addPage();
    addHeader(2);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('Sumário do Guia', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Tudo o que você precisa para sair do aluguel, em ordem cronológica e sem enrolação.', margin, 32);

    let sumarioY = 40;
    PDF_SUMARIO_ITEMS.forEach((item) => {
      doc.setFillColor(item.num % 2 !== 0 ? brandGreen[0] : brandGold[0], item.num % 2 !== 0 ? brandGreen[1] : brandGold[1], item.num % 2 !== 0 ? brandGreen[2] : brandGold[2]);
      doc.circle(margin + 4, sumarioY - 1, 3.5, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      doc.text(String(item.num), margin + 4, sumarioY + 0.5, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(item.title, margin + 12, sumarioY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text(item.desc, margin + 12, sumarioY + 4.5);

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.3);
      doc.line(margin + 12, sumarioY + 8, pageWidth - margin, sumarioY + 8);

      sumarioY += 13.5;
    });

    // Como usar box
    doc.setFillColor(236, 253, 245);
    doc.setDrawColor(16, 185, 129);
    doc.roundedRect(margin, sumarioY + 4, contentWidth, 34, 2.5, 2.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('COMO USAR ESTE GUIA:', margin + 4, sumarioY + 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const instructions = [
      '• Se você está no começo: leia na ordem para entender como se enquadrar.',
      '• Se você já quer saber o que separar: vá direto à página 9 para o Checklist Imprimível.',
      '• Se já tem o apartamento em vista: leia os 7 Passos na página 10 e a Tabela de Parcelas.',
      '• Qualquer dúvida pontual: chame Januário ou Rosângela no WhatsApp no rodapé das páginas.',
    ];
    let instY = sumarioY + 17;
    instructions.forEach((i) => {
      doc.text(i, margin + 4, instY);
      instY += 4.5;
    });

    addFooter(2);

    // =========================================================================
    // PÁGINA 3: VOCÊ PODE PARTICIPAR?
    // =========================================================================
    doc.addPage();
    addHeader(3);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('1. Você Pode Participar?', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Se paga aluguel e quer a casa própria, o programa foi feito exatamente para você.', margin, 32);

    // Perfil básico
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, 38, contentWidth, 54, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('PERFIL BÁSICO NECESSÁRIO', margin + 5, 46);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const perfilItems = [
      '• Renda familiar bruta mensal de até R$ 13.000 (abrangendo Faixas 1, 2, 3 e 4).',
      '• Não possuir outro imóvel residencial quitado ou financiado no seu nome na mesma cidade.',
      '• Ter CPF regular junto à Receita Federal e apto a passar por análise de crédito bancária.',
      '• Ser brasileiro nato, naturalizado ou estrangeiro com visto permanente.',
      '• Capacidade de comprovar renda (holerite CLT, declaração de IR, extratos autônomo/MEI).',
    ];
    let pY = 53;
    perfilItems.forEach((item) => {
      doc.text(item, margin + 5, pY);
      pY += 6.5;
    });

    // Quem NÃO pode
    doc.setFillColor(255, 241, 242);
    doc.roundedRect(margin, 98, contentWidth, 42, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(190, 18, 60);
    doc.text('QUEM NÃO PODE PARTICIPAR', margin + 5, 106);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const naoPode = [
      '• Quem já possui financiamento imobiliário residencial ativo pelo SFH no mesmo município.',
      '• Proprietário, usufrutuário ou cessionário de outro imóvel residencial urbano local.',
      '• Quem já foi beneficiado anteriormente por subsídio habitacional federal (em certos prazos).',
      '• Quem não possui como comprovar renda formal ou movimentação bancária idônea.',
    ];
    let npY = 113;
    naoPode.forEach((item) => {
      doc.text(item, margin + 5, npY);
      npY += 6.5;
    });

    // Box Alerta
    doc.setFillColor(254, 243, 199);
    doc.setDrawColor(245, 158, 11);
    doc.roundedRect(margin, 148, contentWidth, 30, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(146, 64, 14);
    doc.text('IMPORTANTE: CUIDADO COM PROMESSAS DE APROVAÇÃO IMEDIATA', margin + 5, 155);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor( darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Nenhum corretor sério ou correspondente Caixa pode prometer aprovação garantida antes de rodar a análise de crédito oficial. O que fazemos é estruturar e organizar seus documentos para maximizar ao máximo sua chance de aprovação na primeira tentativa.',
      margin + 5,
      161,
      { maxWidth: contentWidth - 10 }
    );

    // Faixa 1 distinction
    doc.setFillColor(236, 253, 245);
    doc.roundedRect(margin, 184, contentWidth, 28, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('FAIXA 1 (SUBSIDIADA) vs. FAIXAS DE FINANCIAMENTO (2, 3 e 4)', margin + 5, 191);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Na Faixa 1 (renda até R$ 3.200), o atendimento é feito via sorteio e cadastro na Prefeitura/CadÚnico. Nas Faixas 2, 3 e 4, a compra é direta através de financiamento na Caixa Econômica, escolhendo o condomínio desejado em Goiânia ou Aparecida.',
      margin + 5,
      197,
      { maxWidth: contentWidth - 10 }
    );

    addFooter(3);

    // =========================================================================
    // PÁGINA 4: FAIXAS E RENDA FAMILIAR 2026
    // =========================================================================
    doc.addPage();
    addHeader(4);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('2. Faixas e Renda Familiar 2026', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Sua faixa define os juros bancários, o valor do subsídio do Governo e a parcela.', margin, 32);

    // Faixas Table
    let tableY = 38;
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.rect(margin, tableY, contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text('FAIXA', margin + 4, tableY + 5.5);
    doc.text('RENDA BRUTA MENSAL', margin + 35, tableY + 5.5);
    doc.text('PERFIL & VANTAGENS DO PROGRAMA', margin + 85, tableY + 5.5);

    tableY += 8;
    PDF_FAIXAS_TABLE.forEach((f, idx) => {
      doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
      doc.rect(margin, tableY, contentWidth, 9, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(f.faixa, margin + 4, tableY + 6);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(f.renda, margin + 35, tableY + 6);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(f.paraQuem, margin + 85, tableY + 6);
      tableY += 9;
    });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('* Valores oficiais em vigor pela Portaria MCID nº 333/2026.', margin, tableY + 4);

    // O que entra na soma
    let secY = tableY + 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('O QUE ENTRA NA SOMA DA RENDA FAMILIAR?', margin, secY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const oqueEntra = [
      '• Salário bruto CLT registrado em holerite (sem descontos de INSS/IR).',
      '• Renda comprovada de MEI ou autônomo (via IRPF e movimentação bancária).',
      '• Aposentadorias e pensões por morte ou pensão alimentícia judicialmente fixada.',
      '• Renda comprovada de aluguéis ou comissões recorrentes.',
    ];
    secY += 5;
    oqueEntra.forEach((item) => {
      doc.text(item, margin + 4, secY);
      secY += 5;
    });

    // O que NÃO entra
    secY += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(190, 18, 60);
    doc.text('O QUE NÃO PODE SER CONSIDERADO COMO RENDA?', margin, secY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const oqueNaoEntra = [
      '• Benefícios assistenciais (Bolsa Família, BPC / LOAS, auxílios temporários).',
      '• Seguro-desemprego ou indenizações trabalhistas.',
      '• Depósitos avulsos em conta sem comprovação de prestação de serviços.',
    ];
    secY += 5;
    oqueNaoEntra.forEach((item) => {
      doc.text(item, margin + 4, secY);
      secY += 5;
    });

    // Composição
    secY += 4;
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, secY, contentWidth, 24, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('COMPOSIÇÃO DE RENDA: COMO SOMAR COM OUTRA PESSOA?', margin + 4, secY + 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(
      'Você pode somar renda com cônjuge, companheiro(a) em união estável ou familiares que irão residir no imóvel. A soma aumenta o valor financiado aprovado pelo banco. Lembre-se: restrições no CPF de quem compõe a renda serão analisadas conjuntamente.',
      margin + 4,
      secY + 11,
      { maxWidth: contentWidth - 8 }
    );

    addFooter(4);

    // =========================================================================
    // PÁGINA 5: FGTS
    // =========================================================================
    doc.addPage();
    addHeader(5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('3. FGTS: O Que É e Como Usar', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('O Fundo de Garantia é o maior aliado para cobrir a entrada ou diminuir parcelas.', margin, 32);

    // 4 Usos
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, 38, contentWidth, 48, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('COMO VOCÊ PODE APLICAR O SEU FGTS NO MCMV:', margin + 5, 46);

    const fgtsUses = [
      '1. Pagamento ou abatimento integral da ENTRADA na compra do imóvel.',
      '2. Amortização extraordinária do saldo devedor financiado para baixar o total dos juros.',
      '3. Redução do valor das parcelas mensais em até 80% durante períodos de 12 meses.',
      '4. Liquidação antecipada do financiamento total ao longo dos anos.',
    ];
    let fgY = 53;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    fgtsUses.forEach((u) => {
      doc.text(u, margin + 5, fgY);
      fgY += 6;
    });

    // Regras
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('REGRAS OBRIGATÓRIAS PARA UTILIZAR O FGTS:', margin, 96);

    const fgtsRules = [
      '• Ter no mínimo 3 anos de trabalho sob o regime do FGTS (somando todos os empregos CLT).',
      '• Não possuir outro imóvel residencial próprio ou em construção no município do novo imóvel.',
      '• Não ter outro financiamento habitacional ativo pelo Sistema Financeiro da Habitação (SFH).',
      '• O imóvel deve ser destinado exclusivamente à moradia do titular do fundo.',
    ];
    let frY = 103;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    fgtsRules.forEach((r) => {
      doc.text(r, margin + 4, frY);
      frY += 6;
    });

    // Alerta de saque
    doc.setFillColor(255, 241, 242);
    doc.setDrawColor(244, 63, 94);
    doc.roundedRect(margin, 132, contentWidth, 34, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(190, 18, 60);
    doc.text('ATENÇÃO MÁXIMA: NÃO FAÇA O SAQUE-ANIVERSÁRIO ANTES DA COMPRA!', margin + 5, 139);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Muitas pessoas ativam o Saque-Aniversário ou antecipam com empréstimo bancário. Quando fazem isso, o saldo fica bloqueado para uso na moradia própria! Fale com Januário Leal antes de mexer no seu aplicativo do FGTS para evitar surpresas.',
      margin + 5,
      145,
      { maxWidth: contentWidth - 10 }
    );

    // Passo para consultar
    doc.setFillColor(236, 253, 245);
    doc.roundedRect(margin, 174, contentWidth, 32, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('COMO CONSULTAR SEU SALDO ATUALIZADO AGORA:', margin + 5, 181);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Baixe o aplicativo oficial "FGTS" da Caixa Econômica Federal no celular. Entre com seu CPF e senha gov.br. Gere o "Extrato Completo em PDF" de todas as contas ativas e inativas. Esse é o documento oficial exigido na aprovação de crédito.',
      margin + 5,
      187,
      { maxWidth: contentWidth - 10 }
    );

    addFooter(5);

    // =========================================================================
    // PÁGINA 6: ENTRADA
    // =========================================================================
    doc.addPage();
    addHeader(6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('4. Entrada: Precisa Mesmo?', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('A maior dúvida de quem mora de aluguel: "Não tenho dinheiro guardado, posso comprar?"', margin, 32);

    // Equação
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, 38, contentWidth, 42, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('A FÓRMULA QUE ZERA OU REDUZ DRASTICAMENTE A ENTRADA:', margin + 5, 46);

    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.roundedRect(margin + 5, 52, contentWidth - 10, 18, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text('SUBSÍDIO GOVERNO (até R$ 55 mil)  +  FGTS  +  PARCELAMENTO MRV', pageWidth / 2, 60, { align: 'center' });
    doc.setFontSize(9);
    doc.setTextColor(brandGold[0], brandGold[1], brandGold[2]);
    doc.text('= ENTRADA 100% COBERTA SEM DESEMBOLSO À VISTA', pageWidth / 2, 66, { align: 'center' });

    // O que define
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('O QUE DEFINE O VALOR DA ENTRADA NO SEU CASO ESPECÍFICO?', margin, 92);

    const fatores = [
      '• Faixa de Renda: Quanto menor a renda (Faixas 1 e 2), maior o subsídio concedido a fundo perdido.',
      '• Avaliação Bancária da Caixa: O banco financia até 80% do valor de avaliação do apartamento.',
      '• Saldo do FGTS acumulado: É abatido diretamente do valor restante da entrada.',
      '• Parcelamento com a Construtora: O residual pode ser dividido em até 60 vezes sem burocracia.',
      '• Campanha do Empreendimento: Algumas unidades contam com ITBI e Registro grátis.',
    ];
    let fatY = 99;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    fatores.forEach((f) => {
      doc.text(f, margin + 4, fatY);
      fatY += 6;
    });

    // Exemplo real
    doc.setFillColor(236, 253, 245);
    doc.setDrawColor(16, 185, 129);
    doc.roundedRect(margin, 138, contentWidth, 38, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('EXEMPLO REAL DE SIMULAÇÃO (APARTAMENTO 2 QUARTOS EM GOIÂNIA):', margin + 5, 145);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('• Valor do imóvel avaliado: R$ 210.000,00', margin + 5, 152);
    doc.text('• Financiamento Caixa (80%): R$ 168.000,00', margin + 5, 157);
    doc.text('• Subsídio Federal MCMV: - R$ 35.000,00 (desconto direto)', margin + 5, 162);
    doc.text('• Uso do FGTS do casal: - R$ 7.000,00', margin + 5, 167);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('• Saldo de Entrada: R$ 0,00 à vista (ou residual facilitado em 60x de R$ 250).', margin + 5, 172);

    addFooter(6);

    // =========================================================================
    // PÁGINA 7: PARCELAS
    // =========================================================================
    doc.addPage();
    addHeader(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('5. Parcelas: Quanto Vai Pesar no Bolso?', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('A regra de ouro dos bancos: a parcela nunca compromete mais de 30% da renda.', margin, 32);

    // Tabela parcelas
    let pTableY = 40;
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.rect(margin, pTableY, contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text('RENDA FAMILIAR BRUTA', margin + 10, pTableY + 5.5);
    doc.text('PARCELA MÁXIMA DE REFERÊNCIA (30%)', margin + 70, pTableY + 5.5);
    doc.text('MENOR QUE O ALUGUEL MÉDIO EM GOIÂNIA?', margin + 140, pTableY + 5.5);

    pTableY += 8;
    PDF_PARCELAS_TABLE.forEach((row, idx) => {
      doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
      doc.rect(margin, pTableY, contentWidth, 8, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(row.renda, margin + 10, pTableY + 5.5);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(row.parcela, margin + 70, pTableY + 5.5);
      doc.setTextColor(16, 185, 129);
      doc.text('Sim, muito menor', margin + 140, pTableY + 5.5);
      pTableY += 8;
    });

    // Explicação
    let explY = pTableY + 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('POR QUE A PARCELA É MAIS BARATA QUE O ALUGUEL?', margin, explY);

    const vantagens = [
      '• Taxas de juros subsidiadas: A partir de 4% a 4,5% ao ano (as menores da história do país).',
      '• Prazo estendido de até 420 meses (35 anos) para diluir o pagamento sem sufocar o orçamento.',
      '• Sistema de amortização SAC ou Price: parcelas decrescentes ou fixas ao longo do tempo.',
      '• Você está pagando o que é seu: a cada mês, você amortiza seu patrimônio familiar.',
    ];
    explY += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    vantagens.forEach((v) => {
      doc.text(v, margin + 4, explY);
      explY += 6;
    });

    // Box Custo total
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(margin, explY + 4, contentWidth, 32, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(146, 64, 14);
    doc.text('CALCULE SEMPRE O CUSTO REAL TOTAL:', margin + 5, explY + 11);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Na hora de planejar, lembre-se: a taxa de condomínio e IPTU só começam após você receber fisicamente a chave na mão. Até a entrega, você paga apenas a evolução de obra e o parcelamento da construtora sem sobreposição com moradia.',
      margin + 5,
      explY + 17,
      { maxWidth: contentWidth - 10 }
    );

    addFooter(7);

    // =========================================================================
    // PÁGINA 8: NOME SUJO E SCORE
    // =========================================================================
    doc.addPage();
    addHeader(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('6. Nome Sujo e Score de Crédito', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Ter restrição não é sentença final: conheça os passos reais para aprovar.', margin, 32);

    // O que o banco analisa
    doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
    doc.roundedRect(margin, 38, contentWidth, 36, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('O QUE O BANCO AVALIA DE VERDADE:', margin + 5, 46);

    const avaliacoes = [
      '• Restrições ativas no SPC, Serasa, Boa Vista e CADIN (devem ser quitadas antes da assinatura).',
      '• Registrato do Banco Central (SCR): histórico de pontualidade e dívidas em aberto.',
      '• Proporção da dívida: dívidas pequenas de telefonia ou cartão são fáceis de negociar com desconto.',
      '• Se o nome foi limpo recentemente, o comprovante de quitação (termo de quitação) resolve.',
    ];
    let avY = 52;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    avaliacoes.forEach((a) => {
      doc.text(a, margin + 5, avY);
      avY += 5.5;
    });

    // Plano de 60 a 90 dias
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text('PLANO DE AÇÃO RÁPIDO PARA SUBIR O SCORE EM 60 A 90 DIAS:', margin, 86);

    const plano = [
      '1. Negocie pendências financeiras no Desenrola Brasil ou Serasa Limpa Nome com até 90% de desconto.',
      '2. Guarde imediatamente os comprovantes bancários e termos de quitação em PDF.',
      '3. Pare de solicitar novos cartões de crédito ou empréstimos pessoais por 60 dias.',
      '4. Coloque contas de consumo (água, energia, celular) no seu próprio nome e CPF no débito automático.',
      '5. Mantenha seus dados cadastrais atualizados no site da Caixa e do Serasa.',
    ];
    let plY = 93;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    plano.forEach((p) => {
      doc.text(p, margin + 4, plY);
      plY += 6;
    });

    // Alerta contra golpes
    doc.setFillColor(255, 241, 242);
    doc.setDrawColor(244, 63, 94);
    doc.roundedRect(margin, 134, contentWidth, 36, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(190, 18, 60);
    doc.text('CUIDADO COM GOLPES DE "LIMPA NOME MÁGICO"', margin + 5, 141);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'NUNCA transfira dinheiro para empresas que prometem "aumentar seu score em 24h" ou "apagar restrições do sistema Caixa". Isso é fraude criminosa. A única forma legítima é pagar a pendência diretamente ao credor ou negociar em canais oficiais com quitação registrada.',
      margin + 5,
      147,
      { maxWidth: contentWidth - 10 }
    );

    addFooter(8);

    // =========================================================================
    // PÁGINA 9: CHECKLIST DE DOCUMENTOS (IMPRIMÍVEL)
    // =========================================================================
    doc.addPage();
    addHeader(9);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('7. Checklist de Documentos (Imprimível)', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Imprima esta página e marque com [X] à caneta cada documento conforme for separando.', margin, 32);

    let checkY = 40;
    const addChecklistSection = (title: string, items: string[]) => {
      doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.roundedRect(margin, checkY, contentWidth, 6.5, 1, 1, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(255, 255, 255);
      doc.text(title, margin + 4, checkY + 4.5);
      checkY += 9;

      items.forEach((item) => {
        doc.setDrawColor(148, 163, 184);
        doc.setLineWidth(0.4);
        doc.rect(margin + 2, checkY - 3, 4, 4);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(darkText[0], darkText[1], darkText[2]);
        doc.text(item, margin + 9, checkY);
        checkY += 5.5;
      });
      checkY += 3;
    };

    addChecklistSection('TITULAR / COMPRADOR(A):', [
      'Documento oficial com foto: RG ou CNH válida (e CPF legível)',
      'Certidão de Estado Civil (Nascimento se solteiro, Casamento ou União Estável se casado/unido)',
      'Comprovante de residência atualizado dos últimos 60 dias (água, luz, gás, telefone fixo)',
      '3 últimos holerites (se empregado CLT) ou extratos de benefício (se aposentado/pensionista)',
      'Carteira de Trabalho física ou Extrato da Carteira de Trabalho Digital (PDF)',
      'Extrato Analítico do FGTS atualizado (emitido pelo aplicativo Caixa FGTS)',
      'Declaração completa de Imposto de Renda com recibo de entrega (se declarou)',
    ]);

    addChecklistSection('CÔNJUGE OU QUEM VAI SOMAR RENDA:', [
      'Todos os mesmos documentos pessoais listados acima para o titular',
      'Pacto antenupcial registrado em cartório (se casado com comunhão universal ou separação total)',
    ]);

    addChecklistSection('SE FOR AUTÔNOMO, PROFISSIONAL LIBERAL OU MEI:', [
      'Extratos bancários completos dos últimos 6 meses (conta corrente pessoa física e jurídica)',
      'Declaração Anual do Simples Nacional (DASN-SIMEI) e guias DAS pagas',
      'Declaração de IRPF do último exercício fiscal acompanhada do recibo de entrega',
      'Contratos de prestação de serviços ou RPA (Recibo de Pagamento a Autônomo)',
    ]);

    // Dica de ouro
    doc.setFillColor(236, 253, 245);
    doc.setDrawColor(16, 185, 129);
    doc.roundedRect(margin, checkY, contentWidth, 18, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('DICA DE OURO PARA AGILIZAR:', margin + 4, checkY + 5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(
      'Tire fotos nítidas e bem iluminadas de cada documento pelo celular e guarde em uma pasta "MCMV". Assim que enviar para Januário ou Rosângela, a pré-análise é feita no mesmo dia.',
      margin + 4,
      checkY + 11,
      { maxWidth: contentWidth - 8 }
    );

    addFooter(9);

    // =========================================================================
    // PÁGINA 10: OS 7 PASSOS ATÉ A CHAVE
    // =========================================================================
    doc.addPage();
    addHeader(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('8. Os 7 Passos Até a Entrega da Chave', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('O mapa completo de cada etapa para você se programar com segurança e tranquilidade.', margin, 32);

    let passoY = 38;
    PDF_PASSOS_LIST.forEach((p) => {
      doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.circle(margin + 4, passoY - 0.5, 3.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(255, 255, 255);
      doc.text(String(p.step), margin + 4, passoY + 0.8, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(`PASSO ${p.step}: ${p.title.toUpperCase()}`, margin + 11, passoY);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(brandGold[0], brandGold[1], brandGold[2]);
      doc.text(`Tempo estimado: ${p.tempo}`, pageWidth - margin, passoY, { align: 'right' });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(p.desc, margin + 11, passoY + 4.5, { maxWidth: contentWidth - 12 });

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin + 11, passoY + 11, pageWidth - margin, passoY + 11);

      passoY += 16.5;
    });

    addFooter(10);

    // =========================================================================
    // PÁGINA 11: AS 27 DÚVIDAS - PARTE 1 (1 a 7)
    // =========================================================================
    doc.addPage();
    addHeader(11);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('9. As 27 Dúvidas Mais Comuns (Parte 1)', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Respostas diretas e sem rodeios para as perguntas que mais recebemos.', margin, 32);

    let dY1 = 38;
    PDF_DUVIDAS_ALL.slice(0, 7).forEach((item) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(`${item.num}. ${item.pergunta}`, margin, dY1);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(item.resposta, margin, dY1 + 4, { maxWidth: contentWidth });

      dY1 += 17;
    });

    addFooter(11);

    // =========================================================================
    // PÁGINA 12: AS 27 DÚVIDAS - PARTE 2 (8 a 15)
    // =========================================================================
    doc.addPage();
    addHeader(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('9. As 27 Dúvidas Mais Comuns (Parte 2)', margin, 26);

    let dY2 = 36;
    PDF_DUVIDAS_ALL.slice(7, 15).forEach((item) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(`${item.num}. ${item.pergunta}`, margin, dY2);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(item.resposta, margin, dY2 + 4, { maxWidth: contentWidth });

      dY2 += 16;
    });

    addFooter(12);

    // =========================================================================
    // PÁGINA 13: AS 27 DÚVIDAS - PARTE 3 (16 a 22)
    // =========================================================================
    doc.addPage();
    addHeader(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('9. As 27 Dúvidas Mais Comuns (Parte 3)', margin, 26);

    let dY3 = 36;
    PDF_DUVIDAS_ALL.slice(15, 22).forEach((item) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(`${item.num}. ${item.pergunta}`, margin, dY3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(item.resposta, margin, dY3 + 4, { maxWidth: contentWidth });

      dY3 += 17;
    });

    addFooter(13);

    // =========================================================================
    // PÁGINA 14: AS 27 DÚVIDAS (23 a 27) + CUSTOS & GLOSSÁRIO
    // =========================================================================
    doc.addPage();
    addHeader(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('9. Dúvidas (Fim) & 10. Custos e Glossário', margin, 26);

    let dY4 = 34;
    PDF_DUVIDAS_ALL.slice(22, 27).forEach((item) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(`${item.num}. ${item.pergunta}`, margin, dY4);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(item.resposta, margin, dY4 + 3.8, { maxWidth: contentWidth });

      dY4 += 13;
    });

    // Custos Table
    dY4 += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('CUSTOS ADICIONAIS NA COMPRA DO IMÓVEL:', margin, dY4);

    dY4 += 4;
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.rect(margin, dY4, contentWidth, 6, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text('CUSTO', margin + 3, dY4 + 4.2);
    doc.text('O QUE SIGNIFICA', margin + 35, dY4 + 4.2);
    doc.text('PODE USAR FGTS OU PARCELAR?', margin + 120, dY4 + 4.2);

    dY4 += 6;
    PDF_CUSTOS_TABLE.forEach((c, idx) => {
      doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
      doc.rect(margin, dY4, contentWidth, 6, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(c.custo, margin + 3, dY4 + 4.2);
      doc.setFont('helvetica', 'normal');
      doc.text(c.oQueE, margin + 35, dY4 + 4.2);
      doc.text(c.fgts, margin + 120, dY4 + 4.2);
      dY4 += 6;
    });

    // Mini Glossário
    dY4 += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('GLOSSÁRIO BÁSICO PARA NÃO SE CONFUNDIR:', margin, dY4);
    dY4 += 4;
    PDF_GLOSSARIO_TABLE.slice(0, 5).forEach((g) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(`• ${g.termo}: `, margin + 2, dY4);
      const termoWidth = doc.getTextWidth(`• ${g.termo}: `);
      doc.setFont('helvetica', 'normal');
      doc.text(g.significa, margin + 2 + termoWidth, dY4);
      dY4 += 4.5;
    });

    addFooter(14);

    // =========================================================================
    // PÁGINA 15: PRÓXIMOS PASSOS & CONTATO OFICIAL
    // =========================================================================
    doc.addPage();
    addHeader(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.text('11. Próximos Passos & Plantão Oficial', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('O que fazer agora para sair da teoria e dar o primeiro passo real.', margin, 32);

    // 3 Caminhos
    const caminhos = [
      {
        num: 'A',
        title: 'Seus documentos já estão organizados?',
        desc: 'Envie as fotos pelo WhatsApp para Januário ou Rosângela. Em até 24h você recebe o resultado da pré-aprovação de crédito da Caixa.',
      },
      {
        num: 'B',
        title: 'Ficou em dúvida sobre renda ou FGTS?',
        desc: 'Mande uma mensagem rápida dizendo sua renda aproximada e cidade de interesse. Nós simulamos o valor da parcela sem nenhum compromisso.',
      },
      {
        num: 'C',
        title: 'Tem restrição no CPF ou score baixo?',
        desc: 'Não se preocupe: analisamos sigilosamente para indicar o melhor momento e se vale a pena compor renda com outra pessoa.',
      },
    ];

    let camY = 38;
    caminhos.forEach((c) => {
      doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
      doc.roundedRect(margin, camY, contentWidth, 18, 2, 2, 'F');
      doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.circle(margin + 5, camY + 9, 3.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(255, 255, 255);
      doc.text(c.num, margin + 5, camY + 10.2, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
      doc.text(c.title, margin + 12, camY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.text(c.desc, margin + 12, camY + 11.5, { maxWidth: contentWidth - 16 });

      camY += 21;
    });

    // Mensagem pronta
    doc.setFillColor(254, 243, 199);
    doc.setDrawColor(245, 158, 11);
    doc.roundedRect(margin, camY + 2, contentWidth, 24, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(146, 64, 14);
    doc.text('MENSAGEM SUGERIDA PARA COPIAR E ENVIAR NO WHATSAPP:', margin + 4, camY + 8);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const leadCopyName = leadInfo?.name || '[Seu Nome]';
    const leadCopyCity = leadInfo?.city || 'Goiânia / Aparecida';
    doc.text(
      `"Olá! Baixei o Guia Completo MCMV Sem Dúvidas. Meu nome é ${leadCopyName}, moro em ${leadCopyCity} e gostaria de entender se meu perfil se enquadra para um apartamento MRV pelo programa."`,
      margin + 4,
      camY + 14,
      { maxWidth: contentWidth - 8 }
    );

    // Contatos Oficiais Box
    const contBoxY = camY + 30;
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.roundedRect(margin, contBoxY, contentWidth, 38, 3, 3, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text('PLANTÃO EXCLUSIVO DE ATENDIMENTO', pageWidth / 2, contBoxY + 10, { align: 'center' });

    doc.setFontSize(11);
    doc.setTextColor(brandGold[0], brandGold[1], brandGold[2]);
    doc.text('Januário Leal — WhatsApp: (62) 99902-3474', pageWidth / 2, contBoxY + 19, { align: 'center' });
    doc.text('Rosângela de Lima — WhatsApp: (62) 98428-5317', pageWidth / 2, contBoxY + 26, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text('Atendimento ético, gratuito e humanizado · Corretores Credenciados CRECI Goiás', pageWidth / 2, contBoxY + 33, { align: 'center' });

    // Legal disclaimer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(
      'Aviso Legal: Este material tem caráter estritamente educativo e informativo. Não temos vínculo institucional ou governamental direto com a Caixa Econômica Federal ou com o Ministério das Cidades. As condições de financiamento, valores de subsídio e juros dependem exclusivamente de aprovação individual de crédito pela instituição bancária e das portarias governamentais vigentes em outubro de 2026.',
      margin,
      contBoxY + 44,
      { maxWidth: contentWidth }
    );

    addFooter(15);

    // Save
    doc.save('Guia-Completo-MCMV-2026-Sem-Duvidas.pdf');
    return true;
  } catch (error) {
    console.error('Erro ao gerar PDF oficial:', error);
    return false;
  }
};
