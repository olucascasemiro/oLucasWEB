import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Rocket,
  Handshake,
  Globe,
  Scan,
  Sliders,
  TrendingUp,
  Workflow,
  Target,
  Quote,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function renderIcon(
  icon: React.ReactNode | React.ComponentType<{ className?: string }> | undefined,
  defaultClassName: string
): React.ReactNode {
  if (!icon) return null;
  if (React.isValidElement(icon)) return icon;
  if (
    typeof icon === "function" ||
    (typeof icon === "object" && icon !== null && "$$typeof" in icon)
  ) {
    const Component = icon as React.ComponentType<{ className?: string }>;
    return <Component className={defaultClassName} />;
  }
  return null;
}

export interface ExecutiveFeature {
  text: string;
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
}

export interface ExecutiveTestimonial {
  quote: string;
  author: string;
  avatar: string;
}

export interface ExecutiveTier {
  id: string;
  name: string;
  quote?: string;
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
  price: number | string;
  period?: string;
  ctaLabel: string;
  ctaVariant?: "solid" | "outline";
  popular?: boolean;
  features: (ExecutiveFeature | string)[];
  testimonial?: ExecutiveTestimonial;
}

export interface ExecutivePricingPlanProps {
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
  contactButtonLabel?: string;
  onContactClick?: () => void;
  tiers?: ExecutiveTier[];
  className?: string;
  onSelectPlan?: (tierId: string) => void;
}

const defaultTestimonial: ExecutiveTestimonial = {
  quote: "A infraestrutura desenvolvida pelo Lucas transformou radicalmente nossa operação.",
  author: "Rodrigo Mendes",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
};

export const olucasWebTiers: ExecutiveTier[] = [
  {
    id: "solucoes-estruturadas",
    name: "Soluções Estruturadas",
    quote: "Ideal para marcas que buscam autoridade institucional e conversão imediata.",
    icon: Rocket,
    price: "R$ 4.800",
    period: "/projeto",
    ctaLabel: "Solicitar Escopo",
    ctaVariant: "outline",
    features: [
      { text: "Website Institucional Headless de Alta Performance", icon: Globe },
      { text: "Design Editorial Exclusivo com Dark Mode Nativo", icon: Scan },
      { text: "Lighthouse Score 99+ & Otimização de Conversão", icon: Sliders },
      { text: "Integração Direta com WhatsApp Cloud API", icon: TrendingUp },
      { text: "Automação de Captura e Notificação em Tempo Real", icon: Workflow },
      { text: "Deploy Global em Edge Network com SSL Dedicado", icon: Target },
    ],
    testimonial: {
      quote: "O novo portal reduziu o tempo de carregamento para 42ms e elevou nossa autoridade.",
      author: "Rodrigo Mendes (Nexus Capital)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    },
  },
  {
    id: "desenvolvimento-personalizado",
    name: "Desenvolvimento Personalizado",
    popular: true,
    quote: "Para negócios que necessitam de agentes autônomos e sistemas sob medida.",
    icon: Workflow,
    price: "R$ 8.900",
    period: "/projeto",
    ctaLabel: "Iniciar Projeto",
    ctaVariant: "solid",
    features: [
      { text: "Agentes Autônomos de IA para Atendimento e Triagem", icon: Globe },
      { text: "Sistemas Web, Portais Restritos e Painéis Administrativos", icon: Scan },
      { text: "Integração Completa com CRM (HubSpot, Pipedrive)", icon: Sliders },
      { text: "Automação de Faturamento e Geração de Contratos", icon: TrendingUp },
      { text: "Banco de Dados Proprietário com Autenticação 2FA", icon: Workflow },
      { text: "Treinamento Prático da Equipe & Homologação", icon: Target },
    ],
    testimonial: {
      quote: "A triagem inteligente por IA reduziu nosso tempo de resposta para menos de 1 segundo.",
      author: "Camila Torquato (OperaSphera)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    },
  },
  {
    id: "studio-partner",
    name: "Studio Partner",
    quote: "Acompanhamento técnico continuado diretamente com o fundador.",
    icon: Handshake,
    price: "Sob Medida",
    period: "/mensal",
    ctaLabel: "Avaliar Vaga",
    ctaVariant: "outline",
    features: [
      { text: "Horas Mensais Dedicadas para Evolução Contínua", icon: Globe },
      { text: "Monitoramento Proativo de Performance e Segurança", icon: Scan },
      { text: "Prioridade Absoluta na Fila de Engenharia", icon: Sliders },
      { text: "Otimizações Contínuas de IA e Automações", icon: TrendingUp },
      { text: "Consultoria Estratégica Quinzenal com o Lucas", icon: Workflow },
      { text: "SLA de Resposta Crítica em Minutos", icon: Target },
    ],
    testimonial: {
      quote: "Contar com o Lucas como parceiro técnico nos dá segurança total para escalar.",
      author: "Dr. Marcelo Alencar (Vértice Studio)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    },
  },
];

export function ExecutivePricingPlan({
  titlePrefix = "Formatos",
  titleHighlight = "Sob Medida",
  description = "Sem tabelas de preços artificiais ou custos escondidos. Definimos o escopo exato e a solução tecnológica que melhor atende o estágio atual do seu negócio.",
  contactButtonLabel = "Falar com Lucas",
  onContactClick,
  tiers = olucasWebTiers,
  className,
  onSelectPlan,
}: ExecutivePricingPlanProps) {
  return (
    <section
      aria-label="Executive pricing plans"
      className={cn("w-full py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto", className)}
    >
      {/* Header section with Contact Sales button */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-foreground leading-[1.15]">
            <span className="text-muted-foreground/60 font-medium mr-2.5">
              {titlePrefix}
            </span>
            <span className="text-foreground font-bold">{titleHighlight}</span>
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>

        {contactButtonLabel && (
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted shadow-2xs shrink-0 self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {contactButtonLabel}
          </button>
        )}
      </div>

      {/* Grid: 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
        {tiers.map((tier) => {
          const isSolid = tier.ctaVariant === "solid";

          return (
            <article
              key={tier.id}
              className={cn(
                "group relative flex flex-col justify-between rounded-[24px] bg-muted/60 dark:bg-muted/20 p-2 sm:p-2.5 border border-border/70 transition-shadow duration-300 hover:shadow-lg",
                tier.popular && "ring-1 ring-border/80 border-emerald-500/40"
              )}
            >
              <div className="flex flex-col flex-1">
                {/* Elevated Top Box with Price & CTA Inside */}
                <div className="relative rounded-[18px] bg-card p-6 shadow-sm border border-border/40">
                  <div className="flex h-8 w-8 items-center justify-start text-foreground mb-4">
                    {renderIcon(tier.icon, "h-6 w-6 stroke-[1.75]")}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{tier.name}</h3>
                  {tier.quote && (
                    <p className="mt-1.5 text-xs text-muted-foreground font-normal leading-relaxed">
                      "{tier.quote}"
                    </p>
                  )}

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                      {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs font-medium text-muted-foreground">{tier.period}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPlan?.(tier.id)}
                    className={cn(
                      "mt-4 w-full inline-flex items-center justify-center rounded-full py-2.5 text-xs sm:text-sm font-medium transition-colors transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSolid
                        ? "bg-foreground text-background hover:bg-foreground/90 shadow-sm"
                        : "border border-border bg-card hover:bg-muted text-foreground shadow-2xs"
                    )}
                  >
                    {tier.ctaLabel}
                  </button>
                </div>

                {/* Features List */}
                <div className="px-5 sm:px-6 pt-6 pb-4 flex-1">
                  <ul className="space-y-3.5" role="list">
                    {tier.features.map((feat, idx) => {
                      const item = typeof feat === "string" ? { text: feat } : feat;
                      return (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-xs sm:text-sm text-foreground/80 font-normal"
                        >
                          <span
                            className="flex h-4 w-4 shrink-0 items-center justify-center text-muted-foreground"
                            aria-hidden="true"
                          >
                            {renderIcon(item.icon, "h-4 w-4 stroke-[1.75]")}
                          </span>
                          <span className="leading-snug">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Bottom Testimonial Card */}
              {tier.testimonial && (
                <div className="mx-2 mb-2 rounded-[16px] bg-card p-4 border border-border/50 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={tier.testimonial.avatar}
                      alt={tier.testimonial.author}
                      className="h-8 w-8 rounded-full object-cover border border-border"
                    />
                    <div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        "{tier.testimonial.quote}"
                      </p>
                      <span className="text-[11px] font-semibold text-foreground block mt-0.5">
                        {tier.testimonial.author}
                      </span>
                    </div>
                  </div>
                  <Quote className="h-4 w-4 text-muted-foreground/40 shrink-0" aria-hidden="true" />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ExecutivePricingPlan;
