/* =========================================================================
   CONFIGURAÇÃO E CONTEÚDO DA LANDING PAGE
   -------------------------------------------------------------------------
   Tudo que você precisa editar no dia a dia está AQUI. Não precisa mexer no
   resto do código. Troque preço, link de checkout, textos e depoimentos
   abaixo e a página atualiza sozinha.
   ========================================================================= */

/* >>> COLE AQUI O SEU LINK DE CHECKOUT (Kiwify / Hotmart / etc.) <<<
   Enquanto não tiver, deixe "#comprar" — os botões só rolam a página.
   Ex.: "https://pay.kiwify.com.br/abc123"  ou  "https://go.hotmart.com/XXXXX" */
export const CHECKOUT_URL = '#comprar'

/* Preço (a âncora agora é o "Valor total" do stack, em OFFER abaixo) */
export const PRICE = {
  current: 'R$ 47',       // preço final que o cliente paga
  installments: '12x de R$ 4,79', // parcelamento (ajuste conforme a plataforma)
  note: 'pagamento único · acesso imediato e vitalício',
}

/* Marca */
export const BRAND = {
  product: 'Protocolo: Controle Absoluto',
  author: 'O Maestro',
  supportEmail: 'suporte@controleabsoluto.com.br', // troque pelo seu e-mail real
  cnpj: '00.000.000/0001-00', // troque pelo seu CNPJ real
  year: 2026,
}

/* ---------------------------- HERO ---------------------------- */
export const HERO = {
  eyebrow: 'E-BOOK DIGITAL · MÉTODO DE 30 DIAS',
  title: 'Decida quando o sexo termina.',
  titleHighlight: 'E seja o melhor que ela já teve.',
  subtitle:
    'O protocolo de 30 dias que treina a sua mente e o seu corpo para você durar o quanto quiser — mesmo que você já tenha tentado de tudo. Sem sprays anestésicos, sem remédios, sem "pensar no boleto".',
  badges: ['Acesso imediato', '100% sigiloso', 'Garantia de 7 dias'],
  ctaPrimary: 'QUERO O CONTROLE ABSOLUTO',
  reassurance: 'E-book em PDF · leia no celular ou no computador',
}

/* ----------------------- DOR / IDENTIFICAÇÃO (PAS) ----------------------- */
export const PAIN = {
  kicker: 'A TESTEMUNHA DO FRACASSO',
  headline: 'Você não tem medo de ejacular rápido.\nVocê tem medo de quem está assistindo.',
  paragraphs: [
    'Se você estivesse sozinho e acontecesse em 2 minutos, você limparia, viraria para o lado e dormiria. O problema nunca foi o tempo. O problema é o silêncio constrangedor que vem depois. O problema é o olhar dela.',
    'É aquele fantasma que assombra o seu travesseiro: "Se eu não fizer o serviço bem feito, outro vai fazer." Esse medo cria a Ansiedade de Performance — e, ironicamente, é justamente ele que faz o seu corpo acelerar e disparar antes da hora.',
  ],
  reliefTitle: 'Não é fraqueza. É química.',
  reliefText:
    'Quando a ansiedade bate, seu cérebro inunda o sangue de adrenalina e cortisol. Ele entende o sexo como perigo, não prazer: desvia o sangue do pênis e deixa o gatilho da ejaculação 10x mais sensível. Tentar "segurar" gera a tensão que faz você gozar rápido. É um ciclo — e ciclo se quebra com método, não com força de vontade.',
}

/* ----------------------- INIMIGO COMUM ----------------------- */
export const ENEMY = {
  kicker: 'POR QUE NADA FUNCIONOU ATÉ AGORA',
  headline: 'Os "truques" da internet só mascaram o sintoma.',
  items: [
    {
      wrong: 'Sprays e pomadas anestésicas',
      why: 'Tiram a sua sensibilidade (e a dela), matam o tesão e o problema volta na próxima vez.',
    },
    {
      wrong: 'Pensar em futebol, contas, coisas chatas',
      why: 'Manda sinal de tédio ao cérebro. Você troca a ejaculação precoce pela perda de ereção.',
    },
    {
      wrong: 'Pílulas e "soluções milagrosas"',
      why: 'Atacam um sintoma que não é químico-hormonal na maioria dos casos. Custam caro e não ensinam controle.',
    },
  ],
  conclusion:
    'A ejaculação precoce tem duas raízes — a sua mente e o seu corpo. O Protocolo age nas duas ao mesmo tempo. Por isso funciona quando o resto falha.',
}

/* ----------------------- ANTES x DEPOIS ----------------------- */
export const TRANSFORM = {
  kicker: 'O ANTES E O DEPOIS',
  headline: 'A diferença que 30 dias de protocolo fazem',
  before: {
    title: 'Hoje, sem o protocolo',
    items: [
      'O coração dispara antes mesmo de tirar a roupa',
      'Acaba em poucos minutos e finge que está tudo bem',
      'Vive com medo de ser comparado com o ex dela',
      'Evita transar para não passar vergonha',
      'O sexo virou uma prova, não um prazer',
    ],
  },
  after: {
    title: 'Depois do protocolo',
    items: [
      'Você deita na cama calmo e no comando',
      'Decide a hora de terminar: 20, 30, 40 minutos',
      'Olha nos olhos dela com segurança absoluta',
      'Vira o homem que ela não consegue esquecer',
      'O sexo volta a ser playground, não palco de julgamento',
    ],
  },
}

/* ----------------------- O QUE VOCÊ VAI DOMINAR (módulos) ----------------------- */
export const MODULES = {
  kicker: 'O QUE VOCÊ VAI DOMINAR',
  headline: '3 módulos. 12 capítulos. Um sistema completo.',
  subhead:
    'Nada de teoria solta. Cada capítulo termina com uma "Ação do Dia" prática para você treinar e ver evolução real.',
  list: [
    {
      tag: 'MÓDULO 01',
      name: 'O Software',
      subtitle: 'A Mente Blindada',
      chapters: [
        'O inimigo na sua cabeça (o loop cortisol-adrenalina)',
        'A Dissociação Tática (a técnica do observador)',
        'A Mentalidade de Abundância (o fim do medo de perder)',
      ],
    },
    {
      tag: 'MÓDULO 02',
      name: 'O Hardware',
      subtitle: 'A Engenharia do Corpo',
      chapters: [
        'A Anatomia Oculta (o músculo que trava o gatilho)',
        'O Treino de Kegel Progressivo (plano de 30 dias)',
        'O Bloqueio Neural Pélvico (a trava de emergência)',
      ],
    },
    {
      tag: 'MÓDULO 03',
      name: 'O Maestro',
      subtitle: 'A Regência do Ato',
      chapters: [
        'A Escala de Excitação (como "surfar o 8")',
        'A Respiração do Comandante (o hack do nervo vago)',
        'O Mapa das Posições de Controle',
        'As Preliminares Reversas (o jogo ganho antes de começar)',
        'O Mapa do Tesouro (a verdadeira anatomia do prazer dela)',
        'Aftercare e Gestão de Crise (o que fazer se falhar)',
      ],
    },
  ],
}

/* ----------------------- PARA QUEM É / NÃO É ----------------------- */
export const FOR_WHOM = {
  kicker: 'ISSO É PARA VOCÊ?',
  isFor: {
    title: 'É para você se...',
    items: [
      'Quer parar de ser refém da ansiedade de performance',
      'Está disposto a 30 dias de treino consistente',
      'Quer recuperar a confiança dentro e fora da cama',
      'Cansou de soluções que só mascaram o problema',
    ],
  },
  isNotFor: {
    title: 'NÃO é para você se...',
    items: [
      'Procura uma pílula mágica que resolve em 5 minutos',
      'Não está disposto a praticar os exercícios',
      'Quer resultado sem mudar nada do que faz hoje',
    ],
  },
}

/* ----------------------- AUTORIDADE ----------------------- */
export const AUTHORITY = {
  kicker: 'QUEM CRIOU O MÉTODO',
  name: 'O Maestro',
  role: 'Criador do Protocolo Controle Absoluto',
  paragraphs: [
    'O Maestro não vende "dicas de internet" nem promessas vazias. O Protocolo nasceu de um princípio simples: a ejaculação precoce não é um defeito de caráter — é fisiologia mal treinada. E fisiologia se treina.',
    'Cada técnica deste e-book é construída sobre o funcionamento real do corpo: o sistema nervoso, o nervo vago, o músculo pubococcígeo, o arco reflexo da ejaculação. Não é sobre "aguentar". É sobre reprogramar o sistema — a mente blindada, o corpo treinado e o ato sob regência.',
  ],
  pillars: [
    { title: 'Fisiologia', text: 'Mecanismos reais do corpo, não achismo.' },
    { title: 'Método', text: 'Um plano de 30 dias, passo a passo.' },
    { title: 'Prática', text: 'Uma "Ação do Dia" em cada capítulo.' },
  ],
}

/* ----------------------- DEPOIMENTOS (ILUSTRATIVOS) ----------------------- */
/* ATENÇÃO: estes depoimentos são ILUSTRATIVOS (exemplos). A página deixa isso
   visível. Assim que você tiver relatos/prints reais de clientes, substitua o
   texto abaixo e remova a flag "illustrative" para tirar o selo de exemplo. */
export const TESTIMONIALS = {
  kicker: 'O QUE OS HOMENS DIZEM',
  headline: 'A virada de chave de quem aplicou',
  illustrative: true,
  items: [
    {
      name: 'R. M., 34 anos',
      city: 'São Paulo · SP',
      text:
        'Eu já tinha tentado spray, tinha tentado de tudo. O que mudou o jogo foi entender a Escala de Excitação. Pela primeira vez eu soube exatamente quando frear. Não é mágica, é treino — e funcionou.',
    },
    {
      name: 'L. F., 28 anos',
      city: 'Belo Horizonte · MG',
      text:
        'A parte da Mentalidade de Abundância destravou a minha cabeça. A ansiedade caiu absurdamente e o resto veio junto. Hoje eu chego na cama tranquilo, não com medo.',
    },
    {
      name: 'A. C., 41 anos',
      city: 'Curitiba · PR',
      text:
        'O treino do músculo PC em 30 dias foi o que faltava. Hoje eu tenho um "freio" que eu controlo. Minha esposa percebeu a diferença na primeira semana.',
    },
  ],
}

/* ----------------------- BÔNUS ----------------------- */
/* Estes bônus são MATERIAIS QUE VOCÊ CONSEGUE ENTREGAR, pois saem do próprio
   conteúdo do e-book (você só precisa montar cada PDF de apoio uma vez).
   Entregue-os junto com o e-book no mesmo acesso da plataforma. */
export const BONUS = {
  kicker: 'BÔNUS EXCLUSIVOS',
  headline: 'E você ainda leva 3 ferramentas de bolso',
  subhead:
    'Materiais práticos para usar na hora H — inclusos, sem custo adicional, no mesmo acesso.',
  items: [
    {
      name: 'Cartão de Emergência',
      desc: 'Resumo de 1 página com as 3 travas para usar no momento crítico: o Bloqueio Neural Pélvico, a Respiração 4-2-6 e a Dissociação Tática. Para consultar em segundos quando a urgência subir.',
      value: 'R$ 37',
    },
    {
      name: 'Checklist dos 30 Dias',
      desc: 'O plano de treino do músculo PC organizado semana a semana, com caixinhas para marcar. Terceirize a disciplina e nunca perca o ritmo da evolução.',
      value: 'R$ 27',
    },
    {
      name: 'Guia da Escala de Excitação',
      desc: 'O mapa de 0 a 10 do prazer masculino num guia rápido: saiba quando acelerar, quando frear e como "surfar o 8" sem cruzar o ponto de não retorno.',
      value: 'R$ 27',
    },
  ],
  footnote: 'Os bônus são entregues junto com o e-book, no mesmo acesso.',
}

/* ----------------------- OFERTA (com âncora de valor / stack) ----------------------- */
export const OFFER = {
  kicker: 'A SUA DECISÃO',
  headline: 'Quanto vale parar de ter medo da cama?',
  stackTitle: 'Tudo o que você recebe hoje:',
  /* O "value stack": cada item com seu valor. A soma forma a âncora (totalValue). */
  stack: [
    { label: 'E-book "Protocolo: Controle Absoluto" — 77 páginas, 12 capítulos', value: 'R$ 97' },
    { label: 'Bônus 01 — Cartão de Emergência', value: 'R$ 37', bonus: true },
    { label: 'Bônus 02 — Checklist dos 30 Dias', value: 'R$ 27', bonus: true },
    { label: 'Bônus 03 — Guia da Escala de Excitação', value: 'R$ 27', bonus: true },
  ],
  extras: [
    'Acesso imediato e vitalício (celular ou computador)',
    'Garantia incondicional de 7 dias',
  ],
  totalLabel: 'Valor total',
  totalValue: 'R$ 188', // soma do stack acima (97 + 37 + 27 + 27)
  todayLabel: 'Hoje, por apenas',
  ctaPrimary: 'QUERO O CONTROLE ABSOLUTO',
  secureNote: 'Compra 100% segura · cobrança discreta na fatura',
}

/* ----------------------- SEGURANÇA / PAGAMENTO ----------------------- */
export const PAYMENT = {
  kicker: 'PODE COMPRAR TRANQUILO',
  title: 'Compra 100% segura e sigilosa',
  text:
    'O pagamento é processado por uma plataforma líder de mercado, em ambiente criptografado. A cobrança é discreta na sua fatura — ninguém vai saber o que você comprou.',
  methods: ['Pix', 'Cartão de crédito', 'Boleto'],
  badges: ['Ambiente criptografado (SSL)', 'Seus dados protegidos', 'Cobrança discreta'],
}

/* ----------------------- GARANTIA ----------------------- */
export const GUARANTEE = {
  days: 7,
  title: 'Garantia incondicional de 7 dias',
  text:
    'Aplique o protocolo. Se em 7 dias você achar que não é para você — por qualquer motivo — basta enviar um e-mail e devolvemos 100% do seu dinheiro. O risco é todo nosso. Você não tem nada a perder, a não ser o medo.',
}

/* ----------------------- FAQ (QUEBRA DE OBJEÇÃO) ----------------------- */
export const FAQ = {
  kicker: 'AINDA COM DÚVIDA?',
  headline: 'Perguntas frequentes',
  items: [
    {
      q: 'O que exatamente eu recebo?',
      a: 'Um e-book digital em PDF com 77 páginas e 12 capítulos, organizado em 3 módulos (mente, corpo e técnica), com um plano de 30 dias e exercícios práticos. Você lê no celular, tablet ou computador.',
    },
    {
      q: 'Como eu recebo depois de comprar?',
      a: 'Na hora. Assim que o pagamento é aprovado, você recebe o acesso por e-mail e já pode baixar e começar a ler imediatamente.',
    },
    {
      q: 'Funciona mesmo se eu já tentei de tudo?',
      a: 'Sim. A maioria das "soluções" falha porque ataca só o sintoma. O Protocolo trabalha a raiz nas duas frentes — a mente (ansiedade) e o corpo (controle muscular e respiratório). É por isso que funciona quando sprays e pílulas não funcionaram.',
    },
    {
      q: 'Preciso de remédio, aparelho ou spray?',
      a: 'Não. O método é 100% baseado em treino físico e mental. Nada para comprar além do e-book, nada para colocar no corpo.',
    },
    {
      q: 'A cobrança é discreta? Vão saber o que eu comprei?',
      a: 'Sim, é discreta. A compra é processada por uma plataforma de pagamento segura e o conteúdo é totalmente sigiloso. Ninguém além de você precisa saber.',
    },
    {
      q: 'Em quanto tempo eu vejo resultado?',
      a: 'O plano de treino é de 30 dias, mas várias técnicas (respiração, dissociação, escala de excitação) você já consegue aplicar na próxima vez. A consistência é o que constrói o resultado definitivo.',
    },
    {
      q: 'E se eu não gostar?',
      a: 'Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos 100% do valor. Risco zero.',
    },
  ],
}

/* ----------------------- CTA FINAL ----------------------- */
export const FINAL_CTA = {
  headline: 'O relógio pode deixar de ser o seu inimigo hoje.',
  subtitle:
    'Você fez o caminho difícil até aqui em vez de procurar um atalho. Dê o próximo passo. O controle sempre foi seu — agora você vai saber como usá-lo.',
  ctaPrimary: 'COMEÇAR MEU PROTOCOLO AGORA',
}
