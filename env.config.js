// Configurações de ambiente para o website Ricardo Mendes
// Este arquivo centraliza todas as variáveis de ambiente necessárias

const config = {
  // Google Analytics 4
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  
  // Formspree (formulário de contato)
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'your-formspree-id',
  
  // Configurações do site
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ricardomendesprodutos.com.br',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Ricardo Mendes - Head de Produtos',
  
  // LinkedIn URL
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/ricardomendess/',
  
  // Configurações de desenvolvimento
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;

// Instruções para configuração:
// 1. Crie um arquivo .env.local na raiz do projeto
// 2. Adicione as seguintes variáveis:
/*
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
NEXT_PUBLIC_SITE_URL=https://ricardomendesprodutos.com.br
NEXT_PUBLIC_SITE_NAME="Ricardo Mendes - Head de Produtos"
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/ricardomendess/
NODE_ENV=development
*/ 