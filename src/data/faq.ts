export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "prazo",
    question: "Quanto tempo leva para implantar?",
    answer:
      "Depende da complexidade do fluxo e das integrações necessárias. Projetos padrão de atendimento inicial costumam entrar em operação em poucos dias após o diagnóstico e a aprovação do escopo.",
  },
  {
    id: "custo",
    question: "Quanto custa?",
    answer:
      "O valor depende do escopo, dos canais conectados e do volume de integrações. Fazemos um diagnóstico gratuito de 20 a 30 minutos para mapear sua operação e apresentar uma proposta fechada antes de começar.",
  },
  {
    id: "bloqueio-whatsapp",
    question: "Meu número de WhatsApp corre risco de bloqueio?",
    answer:
      "Trabalhamos com boas práticas de atendimento e, quando aplicável, com a API oficial do WhatsApp Business (Meta), evitando disparos em massa não solicitados e reduzindo riscos de bloqueio.",
  },
  {
    id: "lgpd",
    question: "Como vocês tratam os dados dos meus clientes (LGPD)?",
    answer:
      "Os dados trafegam de forma segura, ficam armazenados nas contas e planilhas/sistemas da própria empresa e não são usados para treinar modelos públicos de inteligência artificial.",
  },
  {
    id: "propriedade",
    question: "Quem é dono do sistema e das contas depois?",
    answer:
      "Você. As contas de WhatsApp, planilhas, fluxos no n8n e chaves de API ficam sob titularidade da sua empresa, sem aprisionamento.",
  },
  {
    id: "ferramentas-atuais",
    question: "Preciso trocar as ferramentas que já uso?",
    answer:
      "Não. A ideia é conectar o que já funciona na sua rotina (WhatsApp, Google Sheets, agenda ou CRM) usando integrações e webhooks.",
  },
  {
    id: "suporte",
    question: "Tem suporte depois da implantação?",
    answer:
      "Sim. Após colocar o fluxo no ar, fazemos acompanhamento assistido, treinamento da equipe e ajustes necessários para garantir que tudo rode com previsibilidade.",
  },
  {
    id: "ia-erros",
    question: "A IA responde qualquer coisa? Como evita erro?",
    answer:
      "Não. O agente segue regras rígidas, base de conhecimento aprovada por você e limites claros de escopo. Quando surge algo fora do padrão ou que exige decisão humana, ele encaminha para a sua equipe.",
  },
];
