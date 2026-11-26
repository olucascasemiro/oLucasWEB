import type { WorkflowApp, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";
import type { NicheId } from "@/lib/site";

export interface NicheWorkflowConfig {
  title: string;
  graph: WorkflowGraph;
  agentTemplate: {
    label: string;
    detail: string;
    kind: "agent";
    tool: string;
  };
}

const LOGOS = {
  whatsapp: "https://cdn.simpleicons.org/whatsapp/25D366",
  n8n: "https://cdn.simpleicons.org/n8n/EA4B71",
  sheets: "https://cdn.simpleicons.org/googlesheets/34A853",
  openai: "https://cdn.simpleicons.org/openai/171717",
};

export const WORKFLOW_APPS: WorkflowApp[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    logo: LOGOS.whatsapp,
    actions: [
      {
        label: "Receber mensagem",
        detail: "Inicia o fluxo quando um cliente envia mensagem.",
        kind: "trigger",
        tool: "WhatsApp",
      },
      {
        label: "Notificar equipe",
        detail: "Envia resumo do atendimento para o responsável.",
        kind: "delivery",
        tool: "WhatsApp",
      },
    ],
  },
  {
    id: "ia",
    name: "Agente de IA",
    logo: LOGOS.openai,
    actions: [
      {
        label: "Triagem e respostas",
        detail: "Responde dúvidas frequentes e coleta contexto inicial.",
        kind: "agent",
        tool: "OpenAI / Claude",
      },
      {
        label: "Classificar prioridade",
        detail: "Identifica urgência e assunto antes de encaminhar.",
        kind: "review",
        tool: "OpenAI / Claude",
      },
    ],
  },
  {
    id: "n8n",
    name: "n8n",
    logo: LOGOS.n8n,
    actions: [
      {
        label: "Orquestrar etapas",
        detail: "Conecta canais, regras de negócio e horários.",
        kind: "integration",
        tool: "n8n",
      },
      {
        label: "Follow-up automático",
        detail: "Agenda lembrete se o contato não responder.",
        kind: "delivery",
        tool: "n8n",
      },
    ],
  },
  {
    id: "sheets",
    name: "Google Sheets",
    logo: LOGOS.sheets,
    actions: [
      {
        label: "Registrar contato",
        detail: "Salva nome, interesse e status na planilha.",
        kind: "integration",
        tool: "Google Sheets",
      },
      {
        label: "Atualizar histórico",
        detail: "Mantém a equipe com visibilidade do funil.",
        kind: "delivery",
        tool: "Google Sheets",
      },
    ],
  },
];

export const NICHE_WORKFLOWS: Record<NicheId, NicheWorkflowConfig> = {
  saude: {
    title: "Fluxo de automação · Saúde e estética",
    agentTemplate: {
      label: "Follow-up de retorno",
      detail: "Envia lembrete para paciente que não concluiu o contato.",
      kind: "agent",
      tool: "CONVERT IA",
    },
    graph: {
      nodes: [
        {
          id: "saude-1",
          type: "blueprint",
          position: { x: 20, y: 60 },
          data: {
            label: "Contato no WhatsApp",
            detail: "Paciente envia mensagem fora do horário ou no pico da recepção.",
            kind: "trigger",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
        {
          id: "saude-2",
          type: "blueprint",
          position: { x: 255, y: 150 },
          data: {
            label: "Triagem com IA",
            detail: "Responde dúvidas administrativas e identifica a especialidade.",
            kind: "agent",
            tool: "CONVERT IA",
            logo: LOGOS.openai,
          },
        },
        {
          id: "saude-3",
          type: "blueprint",
          position: { x: 490, y: 60 },
          data: {
            label: "Registro organizado",
            detail: "Salva nome, especialidade e melhor horário sem perder dados.",
            kind: "integration",
            tool: "Google Sheets",
            logo: LOGOS.sheets,
          },
        },
        {
          id: "saude-4",
          type: "blueprint",
          position: { x: 725, y: 150 },
          data: {
            label: "Envio à recepção",
            detail: "Equipe recebe o resumo pronto para confirmar a consulta.",
            kind: "delivery",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
      ],
      edges: [
        { id: "e-saude-1-2", source: "saude-1", target: "saude-2" },
        { id: "e-saude-2-3", source: "saude-2", target: "saude-3" },
        { id: "e-saude-3-4", source: "saude-3", target: "saude-4" },
      ],
    },
  },
  imobiliario: {
    title: "Fluxo de automação · Imobiliário",
    agentTemplate: {
      label: "Lembrete ao corretor",
      detail: "Cobra retorno caso o lead não seja atendido em 15 minutos.",
      kind: "agent",
      tool: "n8n",
    },
    graph: {
      nodes: [
        {
          id: "imob-1",
          type: "blueprint",
          position: { x: 20, y: 60 },
          data: {
            label: "Lead de portal ou anúncio",
            detail: "Interessado chama no WhatsApp perguntando sobre o imóvel.",
            kind: "trigger",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
        {
          id: "imob-2",
          type: "blueprint",
          position: { x: 255, y: 150 },
          data: {
            label: "Qualificação imediata",
            detail: "Pergunta se é para morar ou investir, região e faixa de valor.",
            kind: "agent",
            tool: "OpenAI / Claude",
            logo: LOGOS.openai,
          },
        },
        {
          id: "imob-3",
          type: "blueprint",
          position: { x: 490, y: 60 },
          data: {
            label: "Atualiza funil",
            detail: "Registra o perfil do lead e o imóvel de origem na base.",
            kind: "integration",
            tool: "Google Sheets",
            logo: LOGOS.sheets,
          },
        },
        {
          id: "imob-4",
          type: "blueprint",
          position: { x: 725, y: 150 },
          data: {
            label: "Alerta ao corretor",
            detail: "Corretor recebe o resumo qualificado para agendar visita.",
            kind: "delivery",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
      ],
      edges: [
        { id: "e-imob-1-2", source: "imob-1", target: "imob-2" },
        { id: "e-imob-2-3", source: "imob-2", target: "imob-3" },
        { id: "e-imob-3-4", source: "imob-3", target: "imob-4" },
      ],
    },
  },
  ecommerce: {
    title: "Fluxo de automação · E-commerce",
    agentTemplate: {
      label: "Recuperar carrinho",
      detail: "Envia mensagem amigável tirando dúvidas de frete ou pagamento.",
      kind: "agent",
      tool: "n8n",
    },
    graph: {
      nodes: [
        {
          id: "ecom-1",
          type: "blueprint",
          position: { x: 20, y: 60 },
          data: {
            label: "Dúvida ou carrinho parado",
            detail: "Cliente pergunta sobre pedido ou abandona o checkout.",
            kind: "trigger",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
        {
          id: "ecom-2",
          type: "blueprint",
          position: { x: 255, y: 150 },
          data: {
            label: "Consulta pedido",
            detail: "Busca status de envio e código de rastreio automaticamente.",
            kind: "integration",
            tool: "n8n",
            logo: LOGOS.n8n,
          },
        },
        {
          id: "ecom-3",
          type: "blueprint",
          position: { x: 490, y: 60 },
          data: {
            label: "Resposta contextual",
            detail: "Informa prazo, rastreio ou orienta sobre troca sem fila.",
            kind: "agent",
            tool: "OpenAI / Claude",
            logo: LOGOS.openai,
          },
        },
        {
          id: "ecom-4",
          type: "blueprint",
          position: { x: 725, y: 150 },
          data: {
            label: "Pós-venda e avaliação",
            detail: "Envia acompanhamento após a entrega e convida para recompra.",
            kind: "delivery",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
      ],
      edges: [
        { id: "e-ecom-1-2", source: "ecom-1", target: "ecom-2" },
        { id: "e-ecom-2-3", source: "ecom-2", target: "ecom-3" },
        { id: "e-ecom-3-4", source: "ecom-3", target: "ecom-4" },
      ],
    },
  },
  personalizado: {
    title: "Fluxo de automação · Sob medida",
    agentTemplate: {
      label: "Validação com IA",
      detail: "Confere dados recebidos antes de gravar no sistema.",
      kind: "agent",
      tool: "OpenAI / Claude",
    },
    graph: {
      nodes: [
        {
          id: "pers-1",
          type: "blueprint",
          position: { x: 20, y: 60 },
          data: {
            label: "Entrada do processo",
            detail: "Gatilho por WhatsApp, formulário, e-mail ou planilha.",
            kind: "trigger",
            tool: "n8n",
            logo: LOGOS.n8n,
          },
        },
        {
          id: "pers-2",
          type: "blueprint",
          position: { x: 255, y: 150 },
          data: {
            label: "Leitura e triagem",
            detail: "IA extrai dados, classifica a solicitação e padroniza campos.",
            kind: "agent",
            tool: "OpenAI / Claude",
            logo: LOGOS.openai,
          },
        },
        {
          id: "pers-3",
          type: "blueprint",
          position: { x: 490, y: 60 },
          data: {
            label: "Integração de sistemas",
            detail: "Atualiza planilhas, ERP, CRM ou agenda sem digitação manual.",
            kind: "integration",
            tool: "Google Sheets",
            logo: LOGOS.sheets,
          },
        },
        {
          id: "pers-4",
          type: "blueprint",
          position: { x: 725, y: 150 },
          data: {
            label: "Entrega e aviso",
            detail: "Notifica o responsável com tudo pronto para aprovação.",
            kind: "delivery",
            tool: "WhatsApp",
            logo: LOGOS.whatsapp,
          },
        },
      ],
      edges: [
        { id: "e-pers-1-2", source: "pers-1", target: "pers-2" },
        { id: "e-pers-2-3", source: "pers-2", target: "pers-3" },
        { id: "e-pers-3-4", source: "pers-3", target: "pers-4" },
      ],
    },
  },
};
