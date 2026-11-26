# DESIGN SYSTEM & GUIDELINES: oLucasWEB — DIGITAL SOLUTIONS STUDIO

---
version: 1.0.0
brand: oLucasWEB
tagline: "Tecnologia aplicada ao crescimento."
positioning: "Digital Solutions Studio"
core_message: "Não desenvolvemos tecnologia apenas por desenvolver. Entendemos o problema, identificamos oportunidades e construímos soluções que ajudam negócios a evoluir."
aesthetic_direction: "Dark, Minimalist, Technical, Editorial, High-Performance"
inspirations: "Linear, Vercel, Raycast, Framer, Kog, Tied"
---

## 1. PALETA DE CORES (EXACT COLOR SYSTEM)

| Token CSS | Hex / Valor | Função & Aplicação |
| :--- | :--- | :--- |
| `--bg-main` | `#080A09` | Fundo principal (deep dark com sutil matiz orgânica) |
| `--bg-secondary` | `#101310` | Fundo secundário para seções alternadas e contraste de profundidade |
| `--bg-surface` | `#171B18` | Superfície base de cards, painéis e modais |
| `--bg-surface-elevated` | `#1E231F` | Elementos em elevação, popovers e estados hover |
| `--border-hairline` | `#222723` | Divisores sutis e linhas de grid técnicas |
| `--border-default` | `#292F2A` | Bordas estruturais de cards e componentes |
| `--border-light` | `#384039` | Bordas em foco, hover e ênfase visual |
| `--border-accent` | `rgba(181, 240, 195, 0.35)` | Bordas ativas em destaque verde |
| `--text-primary` | `#F4F5F3` | Títulos, textos principais e números de alto contraste |
| `--text-secondary` | `#A4ADA6` | Descrições de apoio, parágrafos e subtítulos |
| `--text-tertiary` | `#6B766D` | Metadados, tags técnicas e labels de status |
| `--accent-green` | `#B5F0C3` | Verde de destaque (usado com moderação em CTAs, status e palavras-chave) |
| `--accent-glow` | `rgba(181, 240, 195, 0.18)` | Iluminação suave ao redor de nós ativos e botões principais |

> **Regra de Ouro do Verde:** O verde `#B5F0C3` nunca deve cobrir grandes blocos de fundo. Ele age como um condutor de atenção: badges, nós de fluxo ativos, indicadores de status e verbos de ação.

---

## 2. TIPOGRAFIA & HIERARQUIA EDITORIAL

- **Fonte Primária (Display & Body):** `Geist`, `Inter` (Fallback: `-apple-system, BlinkMacSystemFont, sans-serif`)
- **Fonte Técnica & Telemetria:** `JetBrains Mono`, `SF Mono`, `Consolas`, `monospace`

### Escala Tipográfica:
- **Hero Title:** `clamp(2.4rem, 4.4vw, 3.8rem)` | Weight: `700` | Tracking: `-0.04em` | Line-height: `1.1`
- **Section Title:** `clamp(2rem, 3.5vw, 2.75rem)` | Weight: `600` | Tracking: `-0.03em` | Line-height: `1.18`
- **Card Title / Subtitle:** `1.25rem - 1.45rem` | Weight: `600` | Tracking: `-0.02em`
- **Body Text:** `1rem - 1.125rem` | Weight: `400` | Line-height: `1.65`
- **Eyebrow / Badges:** `0.7rem - 0.775rem` (Mono) | Weight: `600` | Uppercase | Tracking: `0.08em - 0.12em`

---

## 3. IDENTIDADE VISUAL & FILOSOFIA ANTI-SLOP

### O que o estúdio é:
- Um estúdio de engenharia e soluções digitais sob medida com raciocínio estratégico de negócios.
- Visual sóbrio, cirúrgico, sem adornos desnecessários, transmitindo autoridade e capacidade técnica de ponta.

### O que EVITAR a todo custo:
- ❌ Layouts genéricos de agências de marketing tradicional.
- ❌ Bolhas arredondadas em excesso ou glassmorphism borrado sem nitidez.
- ❌ Gradientes roxos/azuis clichês de "inteligência artificial".
- ❌ Robôs 3D, cérebros brilhantes ou bancos de imagens de pessoas engravatadas em reuniões.
- ❌ Frases vazias como "vamos alavancar seu negócio para o próximo patamar".

---

## 4. COMPONENTES-CHAVE & ARQUITETURA DE INTERAÇÕES

### 4.1. Header Fixo com Blur
- Logo `oLucas` em `#F4F5F3` e `WEB` em `#B5F0C3` com tag `STUDIO`.
- Navegação suave com indicador de seção ativa por IntersectionObserver.
- Ação principal de conversão sempre visível: *"Vamos conversar ↗"*.

### 4.2. Hero com Wireframe 3D Interativo
- Canvas geométrico 3D (Icosaedro com malha interna concêntrica e nós orbitais).
- Resposta fluida ao cursor do mouse em 60 FPS com halo de luz verde sutil.
- Fallback automático para modo 2D e suporte a `prefers-reduced-motion`.

### 4.3. Motor Interativo de Automação Estilo Tied
- Simulação dinâmica do pipeline de funil e qualificação autônoma de leads.
- Ingestão multicanal (WhatsApp, Formulários, APIs).
- Processamento por IA com cálculo de ICP fit score e latência real (< 300ms).
- Disparo simultâneo e ramificado: WhatsApp do Lucas, CRM (HubSpot) e agendamento VIP (Google Meet/Calendly).
- Terminal de telemetria com saída de logs em tempo real.

### 4.4. Modal de Diagnóstico Rápido
- Form inteligente de triagem por chips interativos de escopo (Web, IA, Automação, Sistemas).
- Integração de acionamento direto ao WhatsApp oficial com mensagem pré-formatada.
