// Tipos TypeScript para o website Ricardo Mendes

export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  experience: string;
  location: string;
  email?: string;
  linkedin: string;
  summary: string;
}

export interface Case {
  id: string;
  title: string;
  company: string;
  period: string;
  context: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
    improvement?: string;
  }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PaymentExpertise {
  title: string;
  description: string;
  experience: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  company: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Dados estáticos do Ricardo Mendes
export const PERSONAL_DATA: PersonalInfo = {
  name: "Ricardo Mendes",
  title: "Head de Produtos",
  company: "Bemobi",
  experience: "10+ anos",
  location: "Brasil",
  linkedin: "https://www.linkedin.com/in/ricardomendess/",
  summary: "Head de Produtos na Bemobi com mais de 10 anos de experiência liderando equipes de produtos, atualmente focado em implementação de pagamentos recorrentes."
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ricardomendess/",
    icon: "linkedin"
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    category: "Gestão de Produtos",
    items: ["Product Strategy", "Roadmap Planning", "User Research", "A/B Testing", "Analytics", "KPIs & Metrics"]
  },
  {
    category: "Pagamentos",
    items: ["Pagamentos Recorrentes", "Gateway de Pagamento", "Billing", "Revenue Management", "Chargeback", "Compliance"]
  },
  {
    category: "Metodologias",
    items: ["Agile", "Scrum", "Kanban", "Design Thinking", "Lean Startup", "OKRs"]
  },
  {
    category: "Ferramentas",
    items: ["Jira", "Confluence", "Figma", "Mixpanel", "Google Analytics", "Hotjar"]
  }
];

export const PAYMENTS_EXPERTISE: PaymentExpertise = {
  title: "Especialista em Pagamentos Recorrentes",
  description: "Liderança na implementação e otimização de sistemas de pagamentos recorrentes na Bemobi",
  experience: "5+ anos focado em pagamentos",
  keyAchievements: [
    "Implementação de sistema de billing recorrente",
    "Redução de churn por problemas de pagamento",
    "Otimização de conversão em checkout",
    "Compliance com regulamentações de pagamento"
  ],
  technologies: ["Payment Gateways", "Billing Systems", "Anti-fraud", "PCI DSS", "Open Banking"]
}; 