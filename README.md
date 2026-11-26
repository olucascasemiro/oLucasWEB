# Lucas Casemiro — Hub de Automações e IA (`olucasweb`)

Portfólio e hub de encaminhamento por segmento para **Lucas Casemiro** (`lucascasemiro.com.br`), construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** e estrutura **shadcn**.

## Por que `components/ui` é importante
A pasta `components/ui/` é o caminho padrão esperado pelo **shadcn** e pelos imports `@/components/ui/...`. Mantê-la nessa estrutura garante que qualquer componente adicionado via CLI do shadcn ou copiado de bibliotecas compatíveis funcione imediatamente sem ajustes de caminho.

## Variáveis de Ambiente
Crie um arquivo `.env.local` (baseado em `.env.example`):

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número oficial de WhatsApp (somente dígitos, ex: `5511915735039`).
- `NEXT_PUBLIC_GA_ID`: (Opcional) ID do Google Analytics 4. Se vazio, nenhum script de rastreamento é carregado.

## Rotas principais
- `/` — Hub de segmentos (`Saúde e estética`, `Imobiliário`, `E-commerce`, `Personalizado`).
- `/saude` — Landing page completa do produto **CONVERT IA** para clínicas e consultórios.
- `/privacidade` — Modelo de Política de Privacidade alinhado à LGPD.

## TODO
- [ ] **Banner de Cookies / Consentimento:** Caso ative `NEXT_PUBLIC_GA_ID` em produção, implementar banner de consentimento antes de disparar cookies de analytics.
- [ ] Preencher campos `[PREENCHER]` na seção **Sobre mim** (`lib/site.ts`) e na página `/privacidade`.
