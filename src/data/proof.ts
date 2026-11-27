export interface TrustIndicator {
  id: string;
  label: string;
  detail: string;
}

export const TRUST_TOOLS = [
  { id: "whatsapp", name: "WhatsApp Business API" },
  { id: "n8n", name: "n8n" },
  { id: "sheets", name: "Google Sheets" },
  { id: "openai", name: "OpenAI / IA" },
] as const;

/**
 * Indicadores exibidos na faixa de confiança abaixo da hero.
 * Apenas afirmações verdadeiras sobre a arquitetura e operação.
 * Não adicionar números não comprovados.
 */
export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    id: "response",
    label: "Resposta em segundos",
    detail: "Atendimento inicial automático",
  },
  {
    id: "availability",
    label: "24h por dia",
    detail: "Inclusive noites e fins de semana",
  },
  {
    id: "onboarding",
    label: "Implantação com acompanhamento",
    detail: "Treinamento e suporte pós-entrada",
  },
];

export const CONVERT_IA_CASE = {
  eyebrow: "Case em destaque · Saúde e estética",
  title: "CONVERT IA — Atendimento inicial para clínicas",
  hasRealResult: false, // TODO: alterar para true quando publicar o primeiro case com resultados medidos
  problem:
    "Clínicas recebem contatos pelo WhatsApp e Instagram fora do horário comercial ou em momentos de pico na recepção, deixando pacientes sem resposta imediata.",
  solution:
    "Fluxo automatizado em n8n + WhatsApp Business API que responde em segundos, tira dúvidas administrativas aprovadas pela clínica, registra o interesse e encaminha para a recepção com contexto.",
  resultPlaceholder:
    "Em breve: primeiro case com métricas reais publicado aqui. Você pode testar a estrutura completa na página da solução.",
  resultReal: "", // TODO: preencher com resultado real medido quando autorizado pelo cliente
  ctaLabel: "Ver solução CONVERT IA",
  ctaHref: "/saude",
};
