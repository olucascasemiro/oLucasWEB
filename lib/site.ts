export type NicheId = "saude" | "imobiliario" | "ecommerce" | "personalizado";

export interface ChatMessage {
  sender: "client" | "assistant";
  text: string;
  time: string;
}

export interface NicheItem {
  id: NicheId;
  name: string;
  icon: "HeartPulse" | "Building2" | "ShoppingBag" | "Wrench";
  painTitle: string;
  supportText: string;
  badge: string;
  badgeTone: "active" | "soon" | "custom";
  ctaLabel: string;
  ctaType: "route" | "whatsapp" | "scroll";
  ctaHref: string;
  automates: [string, string, string];
  conversation?: {
    contactLabel: string;
    messages: ChatMessage[];
    statusChip: string;
  };
}

const rawWhatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
export const isWhatsappMissingOrPlaceholder =
  !rawWhatsapp || rawWhatsapp.length < 10 || /^550+$/.test(rawWhatsapp) || /^0+$/.test(rawWhatsapp);

if (isWhatsappMissingOrPlaceholder && typeof window === "undefined") {
  console.warn(
    "[AVISO] NEXT_PUBLIC_WHATSAPP_NUMBER está vazio ou é um placeholder. Configure o número real no .env.local ou na Vercel antes de publicar."
  );
}

export function waLink(text?: string): string {
  const num = rawWhatsapp || "5511915735039";
  if (!text) return `https://wa.me/${num}`;
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

export const siteConfig = {
  brand: {
    name: "Lucas Casemiro",
    officialSite: "https://lucascasemiro.com.br",
    officialDomainLabel: "lucascasemiro.com.br",
  },
  contact: {
    whatsapp: rawWhatsapp,
    instagram: "",
    linkedin: "",
    email: "",
  },
  navLinks: [
    { label: "Segmentos", href: "#nichos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    eyebrow: "Automação e IA para negócios",
    title: "Automações que tiram o trabalho repetitivo do seu negócio.",
    subtitle:
      "Eu desenho e implanto automações de atendimento, follow-up e processos. Escolha seu segmento para ver como funciona.",
    primaryCta: "Escolher meu segmento",
    primaryHref: "#nichos",
    secondaryCta: "Falar no WhatsApp",
    principles: [
      "Diagnóstico antes da proposta",
      "Escopo e custos definidos antes de começar",
      "Equipe no controle, tecnologia como apoio",
    ],
  },
  nichesSection: {
    title: "Qual é o seu segmento?",
    subtitle:
      "Escolha o que mais se parece com a sua operação. Cada segmento tem uma solução própria.",
    illustrativeLabel: "Exemplo ilustrativo. Não representa um cliente real.",
    automatesTitle: "O que eu automatizo",
  },
  niches: [
    {
      id: "saude",
      name: "Saúde e estética",
      icon: "HeartPulse",
      painTitle: "Perde paciente por demora na resposta?",
      supportText:
        "Atendimento inicial, registro e follow-up de contatos para clínicas e consultórios.",
      badge: "Solução: CONVERT IA",
      badgeTone: "active",
      ctaLabel: "Ver solução para clínicas",
      ctaType: "route",
      ctaHref: "/saude",
      automates: [
        "Respostas a dúvidas administrativas, 24h",
        "Registro e classificação dos contatos",
        "Encaminhamento à equipe com contexto",
      ],
      conversation: {
        contactLabel: "WhatsApp · Clínica",
        messages: [
          {
            sender: "client",
            text: "Olá! Gostaria de agendar uma consulta para esta semana.",
            time: "09:14",
          },
          {
            sender: "assistant",
            text: "Olá! Qual especialidade você procura?",
            time: "09:14",
          },
          {
            sender: "client",
            text: "Dermatologia.",
            time: "09:15",
          },
          {
            sender: "assistant",
            text: "Perfeito! Vou registrar e encaminhar para a equipe. Qual o melhor horário?",
            time: "09:15",
          },
        ],
        statusChip: "Contato registrado · Equipe notificada",
      },
    },
    {
      id: "imobiliario",
      name: "Imobiliário",
      icon: "Building2",
      painTitle: "Lead esfriando antes do corretor ligar?",
      supportText:
        "Resposta imediata, qualificação e follow-up de leads de portais e Instagram.",
      badge: "Em breve",
      badgeTone: "soon",
      ctaLabel: "Quero saber mais",
      ctaType: "whatsapp",
      ctaHref:
        "Oi Lucas, vim pelo seu portfólio e tenho interesse na automação para o meu negócio imobiliário.",
      automates: [
        "Resposta em segundos ao novo lead",
        "Qualificação: interesse, faixa de valor, região",
        "Encaminhamento ao corretor e lembrete de retorno",
      ],
      conversation: {
        contactLabel: "WhatsApp · Imobiliária",
        messages: [
          {
            sender: "client",
            text: "Vi o apartamento de 2 quartos no anúncio. Ainda está disponível?",
            time: "14:20",
          },
          {
            sender: "assistant",
            text: "Olá! Está sim. Você busca para morar ou investir?",
            time: "14:20",
          },
          {
            sender: "client",
            text: "Morar. Até R$ 900 mil.",
            time: "14:21",
          },
          {
            sender: "assistant",
            text: "Ótimo! Vou avisar o corretor responsável e ele retorna ainda hoje.",
            time: "14:21",
          },
        ],
        statusChip: "Lead qualificado · Corretor notificado",
      },
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: "ShoppingBag",
      painTitle: "Cliente sem resposta e carrinho parado?",
      supportText:
        "Atendimento e pós-venda no WhatsApp: dúvidas, status de pedido e recompra.",
      badge: "Em breve",
      badgeTone: "soon",
      ctaLabel: "Quero saber mais",
      ctaType: "whatsapp",
      ctaHref:
        "Oi Lucas, vim pelo seu portfólio e tenho interesse na automação de atendimento e pós-venda para a minha loja.",
      automates: [
        "Respostas sobre prazo, troca e status de pedido",
        "Recuperação de carrinho abandonado",
        "Pós-venda e pedido de avaliação",
      ],
      conversation: {
        contactLabel: "WhatsApp · Loja",
        messages: [
          {
            sender: "client",
            text: "Meu pedido já saiu?",
            time: "16:05",
          },
          {
            sender: "assistant",
            text: "Olá! Seu pedido foi enviado ontem, previsão de 2 dias úteis. Quer o código de rastreio?",
            time: "16:05",
          },
          {
            sender: "client",
            text: "Quero.",
            time: "16:06",
          },
          {
            sender: "assistant",
            text: "Aqui está o código de rastreio do seu pedido.",
            time: "16:06",
          },
        ],
        statusChip: "Dúvida resolvida automaticamente",
      },
    },
    {
      id: "personalizado",
      name: "Personalizado",
      icon: "Wrench",
      painTitle: "Tem um processo repetitivo que não está aqui?",
      supportText:
        "Conte o que consome tempo na sua operação e eu desenho a automação sob medida.",
      badge: "Sob medida",
      badgeTone: "custom",
      ctaLabel: "Descrever meu processo",
      ctaType: "scroll",
      ctaHref: "#painel-demonstracao",
      automates: [
        "Mapeamento do processo atual passo a passo",
        "Integração entre WhatsApp, planilhas e sistemas",
        "Automação sob medida com acompanhamento",
      ],
    },
  ] as NicheItem[],
  customForm: {
    title: "Descreva o processo que você quer automatizar",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    companyLabel: "Empresa ou segmento",
    companyPlaceholder: "Ex: Escritório de contabilidade",
    processLabel: "Qual processo você quer automatizar?",
    processPlaceholder: "Conte brevemente o que hoje é feito manualmente...",
    submitLabel: "Enviar pelo WhatsApp",
    disclaimer:
      "Ao enviar, você abre o WhatsApp com a mensagem pronta. Nada é salvo neste site.",
  },
  about: {
    title: "Quem está por trás das automações",
    bio: "Sou Lucas Casemiro. [PREENCHER: 2 ou 3 frases sobre quem sou e como comecei com automação]. [PREENCHER: tipo de negócio com que já trabalhei ou que quero atender].",
    howIWorkTitle: "Como eu trabalho",
    steps: [
      {
        num: "1",
        title: "Diagnóstico",
        desc: "Entender como o atendimento funciona hoje",
      },
      {
        num: "2",
        title: "Construção",
        desc: "Configurar, testar e ajustar antes de entrar em operação",
      },
      {
        num: "3",
        title: "Operação",
        desc: "Acompanhar, ajustar e mostrar o que está funcionando",
      },
    ],
    principlesTitle: "Princípios",
    principles: [
      "Escopo e custos definidos antes de começar",
      "A tecnologia apoia a equipe, não a substitui",
      "Sem promessas de resultado que eu não consiga medir",
    ],
    toolsTitle: "Ferramentas",
  },
  tools: [
    "n8n",
    "Make",
    "WhatsApp Business API",
    "OpenAI / Claude",
    "Google Sheets",
  ],
  cta: {
    title: "Vamos conversar sobre o seu processo?",
    subtitle:
      "Conte como é a sua operação hoje. Eu respondo com um próximo passo claro.",
    buttonLabel: "Conversar pelo WhatsApp",
    whatsappText:
      "Oi Lucas, vim pelo seu portfólio e quero conversar sobre o meu processo.",
  },
};
