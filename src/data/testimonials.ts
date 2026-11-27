export interface TestimonialItem {
  id: string;
  isPlaceholder: boolean;
  quote: string;
  name: string;
  role: string;
  segment: string;
  avatar: string | null;
  image?: string | null;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "exemplo-1",
    isPlaceholder: true,
    quote:
      "Texto de exemplo: aqui vai o depoimento real do cliente sobre o resultado da automação no atendimento.",
    name: "Nome do cliente",
    role: "Cargo · Empresa",
    segment: "Saúde e estética",
    avatar: null,
  },
  {
    id: "exemplo-2",
    isPlaceholder: true,
    quote:
      "Texto de exemplo: aqui vai o depoimento real sobre o processo de implantação e o suporte recebido.",
    name: "Nome do cliente",
    role: "Cargo · Empresa",
    segment: "Imobiliário",
    avatar: null,
  },
  {
    id: "exemplo-3",
    isPlaceholder: true,
    quote:
      "Texto de exemplo: aqui vai o depoimento real sobre o tempo economizado pela equipe.",
    name: "Nome do cliente",
    role: "Cargo · Empresa",
    segment: "E-commerce",
    avatar: null,
  },
];

export function getVisibleTestimonials(): TestimonialItem[] {
  const showPlaceholders =
    process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

  const realItems = testimonials.filter((item) => !item.isPlaceholder);
  if (realItems.length > 0) {
    return realItems;
  }

  return showPlaceholders ? testimonials : [];
}
