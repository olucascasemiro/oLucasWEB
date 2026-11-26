import type { WorkflowApp, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";
import type { NicheId } from "@/lib/site";

export interface PainWorkflow {
  id: string;
  label: string;
  automates: [string, string, string];
  title: string;
  graph: WorkflowGraph;
  agentTemplate: {
    label: string;
    detail: string;
    kind: "agent";
    tool: string;
  };
}

export interface NichePainConfig {
  nicheName: string;
  pains: PainWorkflow[];
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

export const NICHE_PAIN_WORKFLOWS: Record<NicheId, NichePainConfig> = {
  saude: {
    nicheName: "Saúde e estética",
    pains: [
      {
        id: "fora-do-horario",
        label: "Perde paciente fora do horário",
        automates: [
          "Resposta imediata 24h no WhatsApp e Instagram",
          "Coleta de especialidade, convênio e melhor horário",
          "Lista organizada para a recepção confirmar pela manhã",
        ],
        title: "Saúde · Atendimento fora do horário",
        agentTemplate: {
          label: "Follow-up matinal",
          detail: "Confirma se o paciente ainda deseja o horário solicitado.",
          kind: "agent",
          tool: "CONVERT IA",
        },
        graph: {
          nodes: [
            {
              id: "s1-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Contato fora do horário",
                detail: "Paciente envia mensagem à noite ou no fim de semana.",
                kind: "trigger",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "s1-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Acolhimento com IA",
                detail: "Responde dúvidas administrativas e pede especialidade.",
                kind: "agent",
                tool: "CONVERT IA",
                logo: LOGOS.openai,
              },
            },
            {
              id: "s1-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Registro organizado",
                detail: "Salva nome, contato e preferência de horário na base.",
                kind: "integration",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
            {
              id: "s1-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Envio à recepção",
                detail: "Equipe começa o dia com os pedidos prontos para agendar.",
                kind: "delivery",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
          ],
          edges: [
            { id: "e-s1-1", source: "s1-1", target: "s1-2" },
            { id: "e-s1-2", source: "s1-2", target: "s1-3" },
            { id: "e-s1-3", source: "s1-3", target: "s1-4" },
          ],
        },
      },
      {
        id: "recepcao-sobrecarregada",
        label: "Recepção sobrecarregada",
        automates: [
          "Respostas automáticas sobre endereço, convênios e preparo",
          "Triagem do motivo do contato antes de passar ao atendente",
          "Encaminhamento com resumo para reduzir conversas repetidas",
        ],
        title: "Saúde · Alívio da recepção",
        agentTemplate: {
          label: "Filtro de dúvidas",
          detail: "Responde perguntas frequentes sem interromper a equipe.",
          kind: "agent",
          tool: "CONVERT IA",
        },
        graph: {
          nodes: [
            {
              id: "s2-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Pico de mensagens",
                detail: "Vários pacientes perguntando valores, endereço e horários.",
                kind: "trigger",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "s2-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Triagem inteligente",
                detail: "Responde dúvidas comuns e separa quem quer agendar.",
                kind: "agent",
                tool: "CONVERT IA",
                logo: LOGOS.openai,
              },
            },
            {
              id: "s2-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Roteamento por assunto",
                detail: "Encaminha agendamento, retorno ou exame ao setor certo.",
                kind: "integration",
                tool: "n8n",
                logo: LOGOS.n8n,
              },
            },
            {
              id: "s2-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Resumo na recepção",
                detail: "Atendente só assume casos prontos com todo o contexto.",
                kind: "delivery",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
          ],
          edges: [
            { id: "e-s2-1", source: "s2-1", target: "s2-2" },
            { id: "e-s2-2", source: "s2-2", target: "s2-3" },
            { id: "e-s2-3", source: "s2-3", target: "s2-4" },
          ],
        },
      },
      {
        id: "sem-followup",
        label: "Interessados sem retorno",
        automates: [
          "Registro automático de todo paciente que pediu informação",
          "Lembrete educado se o contato parar de responder",
          "Visibilidade clara de quem agendou e quem está em aberto",
        ],
        title: "Saúde · Follow-up de interessados",
        agentTemplate: {
          label: "Reativação leve",
          detail: "Retoma contato com quem pediu orçamento e não respondeu.",
          kind: "agent",
          tool: "n8n",
        },
        graph: {
          nodes: [
            {
              id: "s3-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Paciente parou no meio",
                detail: "Demonstrou interesse na consulta, mas não respondeu mais.",
                kind: "trigger",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "s3-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Controle de prazo",
                detail: "Verifica na planilha quem ficou sem resposta após 24h.",
                kind: "integration",
                tool: "n8n",
                logo: LOGOS.n8n,
              },
            },
            {
              id: "s3-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Mensagem de retorno",
                detail: "IA envia lembrete cordial perguntando se ainda precisa.",
                kind: "agent",
                tool: "CONVERT IA",
                logo: LOGOS.openai,
              },
            },
            {
              id: "s3-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Status atualizado",
                detail: "Marca como agendado ou notifica a equipe se responder.",
                kind: "delivery",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
          ],
          edges: [
            { id: "e-s3-1", source: "s3-1", target: "s3-2" },
            { id: "e-s3-2", source: "s3-2", target: "s3-3" },
            { id: "e-s3-3", source: "s3-3", target: "s3-4" },
          ],
        },
      },
    ],
  },
  imobiliario: {
    nicheName: "Imobiliário",
    pains: [
      {
        id: "lead-esfriando",
        label: "Lead esfriando sem resposta",
        automates: [
          "Resposta em segundos para contatos vindos de portais e anúncios",
          "Coleta de interesse (compra/locação), região e faixa de valor",
          "Envio imediato do resumo para o corretor responsável",
        ],
        title: "Imobiliário · Resposta imediata ao lead",
        agentTemplate: {
          label: "Lembrete ao corretor",
          detail: "Cobra retorno caso o lead não seja atendido em 15 minutos.",
          kind: "agent",
          tool: "n8n",
        },
        graph: {
          nodes: [
            {
              id: "i1-1",
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
              id: "i1-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Qualificação imediata",
                detail: "Pergunta se é para morar ou investir, região e orçamento.",
                kind: "agent",
                tool: "OpenAI / Claude",
                logo: LOGOS.openai,
              },
            },
            {
              id: "i1-3",
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
              id: "i1-4",
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
            { id: "e-i1-1", source: "i1-1", target: "i1-2" },
            { id: "e-i1-2", source: "i1-2", target: "i1-3" },
            { id: "e-i1-3", source: "i1-3", target: "i1-4" },
          ],
        },
      },
      {
        id: "sem-followup-visita",
        label: "Falta de follow-up pós-contato",
        automates: [
          "Lembretes automáticos para leads que não agendaram visita",
          "Sugestão de imóveis semelhantes quando o cliente não fecha",
          "Histórico centralizado para nenhum corretor perder o timing",
        ],
        title: "Imobiliário · Follow-up e reativação",
        agentTemplate: {
          label: "Sugestão de imóvel",
          detail: "Envia opções na mesma faixa de valor caso não feche.",
          kind: "agent",
          tool: "OpenAI / Claude",
        },
        graph: {
          nodes: [
            {
              id: "i2-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Lead sem retorno",
                detail: "Contato recebeu informações mas não confirmou a visita.",
                kind: "trigger",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
            {
              id: "i2-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Gatilho de tempo",
                detail: "n8n identifica leads parados há mais de 48 horas.",
                kind: "integration",
                tool: "n8n",
                logo: LOGOS.n8n,
              },
            },
            {
              id: "i2-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Mensagem personalizada",
                detail: "IA retoma a conversa citando o bairro e tipo de imóvel.",
                kind: "agent",
                tool: "OpenAI / Claude",
                logo: LOGOS.openai,
              },
            },
            {
              id: "i2-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Visita encaminhada",
                detail: "Se houver interesse, notifica o corretor na hora.",
                kind: "delivery",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
          ],
          edges: [
            { id: "e-i2-1", source: "i2-1", target: "i2-2" },
            { id: "e-i2-2", source: "i2-2", target: "i2-3" },
            { id: "e-i2-3", source: "i2-3", target: "i2-4" },
          ],
        },
      },
    ],
  },
  ecommerce: {
    nicheName: "E-commerce",
    pains: [
      {
        id: "duvidas-pedido",
        label: "Dúvidas repetitivas de pedido",
        automates: [
          "Consulta automática de status de envio e código de rastreio",
          "Respostas sobre prazo, frete e política de trocas 24h",
          "Redução de chamados simples no atendimento humano",
        ],
        title: "E-commerce · Atendimento e rastreio",
        agentTemplate: {
          label: "Checar troca",
          detail: "Coleta número do pedido e motivo antes de abrir chamado.",
          kind: "agent",
          tool: "n8n",
        },
        graph: {
          nodes: [
            {
              id: "e1-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Dúvida no WhatsApp",
                detail: "Cliente pergunta onde está o pedido ou como funciona troca.",
                kind: "trigger",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "e1-2",
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
              id: "e1-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Resposta contextual",
                detail: "Informa prazo e rastreio na hora, em linguagem natural.",
                kind: "agent",
                tool: "OpenAI / Claude",
                logo: LOGOS.openai,
              },
            },
            {
              id: "e1-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Registro e pós-venda",
                detail: "Salva atendimento e programa avaliação após a entrega.",
                kind: "delivery",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
          ],
          edges: [
            { id: "e-e1-1", source: "e1-1", target: "e1-2" },
            { id: "e-e1-2", source: "e1-2", target: "e1-3" },
            { id: "e-e1-3", source: "e1-3", target: "e1-4" },
          ],
        },
      },
      {
        id: "carrinho-abandonado",
        label: "Carrinho abandonado",
        automates: [
          "Detecção automática de checkout não finalizado na loja",
          "Mensagem no WhatsApp tirando dúvidas de frete ou pagamento",
          "Encaminhamento para atendente caso o cliente peça ajuda",
        ],
        title: "E-commerce · Recuperação de carrinho",
        agentTemplate: {
          label: "Quebra de objeção",
          detail: "Responde dúvidas de prazo ou parcelamento no WhatsApp.",
          kind: "agent",
          tool: "OpenAI / Claude",
        },
        graph: {
          nodes: [
            {
              id: "e2-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Checkout abandonado",
                detail: "Cliente preencheu dados mas não concluiu a compra.",
                kind: "trigger",
                tool: "n8n",
                logo: LOGOS.n8n,
              },
            },
            {
              id: "e2-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Abordagem no WhatsApp",
                detail: "IA envia mensagem leve perguntando se houve dúvida.",
                kind: "agent",
                tool: "OpenAI / Claude",
                logo: LOGOS.openai,
              },
            },
            {
              id: "e2-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Link do carrinho",
                detail: "Reenvia o resumo do pedido e link direto para concluir.",
                kind: "integration",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "e2-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Conversão registrada",
                detail: "Atualiza status na planilha para medir recuperações.",
                kind: "delivery",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
          ],
          edges: [
            { id: "e-e2-1", source: "e2-1", target: "e2-2" },
            { id: "e-e2-2", source: "e2-2", target: "e2-3" },
            { id: "e-e2-3", source: "e2-3", target: "e2-4" },
          ],
        },
      },
    ],
  },
  personalizado: {
    nicheName: "Personalizado",
    pains: [
      {
        id: "processo-manual",
        label: "Trabalho manual entre sistemas",
        automates: [
          "Mapeamento completo do processo atual passo a passo",
          "Integração entre WhatsApp, planilhas, e-mail e ERP/CRM",
          "Alertas e relatórios automáticos sem digitação manual",
        ],
        title: "Sob medida · Integração de processos",
        agentTemplate: {
          label: "Validação com IA",
          detail: "Confere dados recebidos antes de gravar no sistema.",
          kind: "agent",
          tool: "OpenAI / Claude",
        },
        graph: {
          nodes: [
            {
              id: "p1-1",
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
              id: "p1-2",
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
              id: "p1-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Integração de sistemas",
                detail: "Atualiza planilhas, ERP, CRM ou agenda sem retrabalho.",
                kind: "integration",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
            {
              id: "p1-4",
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
            { id: "e-p1-1", source: "p1-1", target: "p1-2" },
            { id: "e-p1-2", source: "p1-2", target: "p1-3" },
            { id: "e-p1-3", source: "p1-3", target: "p1-4" },
          ],
        },
      },
      {
        id: "atendimento-sob-medida",
        label: "Triagem de solicitações internas",
        automates: [
          "Recebimento padronizado de pedidos de clientes ou equipe",
          "Classificação automática por urgência e tipo de demanda",
          "Distribuição direta para o responsável com resumo",
        ],
        title: "Sob medida · Triagem e roteamento",
        agentTemplate: {
          label: "Resumo executivo",
          detail: "Gera resumo diário das demandas abertas e concluídas.",
          kind: "agent",
          tool: "OpenAI / Claude",
        },
        graph: {
          nodes: [
            {
              id: "p2-1",
              type: "blueprint",
              position: { x: 20, y: 60 },
              data: {
                label: "Nova solicitação",
                detail: "Pedido chega por formulário ou mensagem desestruturada.",
                kind: "trigger",
                tool: "WhatsApp",
                logo: LOGOS.whatsapp,
              },
            },
            {
              id: "p2-2",
              type: "blueprint",
              position: { x: 255, y: 150 },
              data: {
                label: "Classificação com IA",
                detail: "Identifica prioridade, categoria e dados faltantes.",
                kind: "agent",
                tool: "OpenAI / Claude",
                logo: LOGOS.openai,
              },
            },
            {
              id: "p2-3",
              type: "blueprint",
              position: { x: 490, y: 60 },
              data: {
                label: "Roteamento",
                detail: "Direciona para a fila ou responsável correto.",
                kind: "integration",
                tool: "n8n",
                logo: LOGOS.n8n,
              },
            },
            {
              id: "p2-4",
              type: "blueprint",
              position: { x: 725, y: 150 },
              data: {
                label: "Acompanhamento",
                detail: "Registra prazo e status em painel centralizado.",
                kind: "delivery",
                tool: "Google Sheets",
                logo: LOGOS.sheets,
              },
            },
          ],
          edges: [
            { id: "e-p2-1", source: "p2-1", target: "p2-2" },
            { id: "e-p2-2", source: "p2-2", target: "p2-3" },
            { id: "e-p2-3", source: "p2-3", target: "p2-4" },
          ],
        },
      },
    ],
  },
};
