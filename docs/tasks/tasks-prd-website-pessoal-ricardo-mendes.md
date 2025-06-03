# Tasks: Website Pessoal Ricardo Mendes - Portfolio de Head de Produtos

Baseado no PRD: `prd-website-pessoal-ricardo-mendes.md`

## Arquivos Relevantes

- `package.json` - ✅ Configuração do projeto Next.js com dependências necessárias
- `next.config.js` - ✅ Configuração do Next.js para otimizações de performance e SEO
- `tailwind.config.js` - ✅ Configuração do Tailwind CSS com tema personalizado
- `postcss.config.js` - ✅ Configuração do PostCSS para Tailwind CSS
- `env.config.js` - ✅ Configuração centralizada de variáveis de ambiente
- `src/app/layout.tsx` - ✅ Layout principal com meta tags SEO básicas
- `src/app/page.tsx` - ✅ Página principal temporária para teste
- `src/app/globals.css` - ✅ Estilos globais e configuração do Tailwind
- `src/lib/types.ts` - ✅ Interfaces TypeScript para dados do portfolio
- `src/components/Header.tsx` - ✅ Componente de cabeçalho com navegação e link LinkedIn
- `src/components/Hero.tsx` - Seção hero com apresentação principal
- `src/components/About.tsx` - Seção sobre com resumo da experiência
- `src/components/Cases.tsx` - Seção de cases com projetos principais
- `src/components/PaymentsExpertise.tsx` - Seção específica sobre pagamentos recorrentes
- `src/components/Skills.tsx` - Seção com tecnologias e metodologias
- `src/components/Contact.tsx` - Formulário de contato
- `src/components/Footer.tsx` - ✅ Rodapé com links para redes sociais profissionais
- `src/lib/analytics.ts` - Configuração do Google Analytics 4
- `src/styles/globals.css` - Estilos globais e configuração do Tailwind
- `public/cv-ricardo-mendes.pdf` - CV em PDF para download
- `public/favicon.ico` - Favicon personalizado
- `public/images/` - Diretório para imagens e assets visuais

### Notas

- Projeto será desenvolvido em Next.js 14+ com TypeScript
- Tailwind CSS para styling responsivo
- Deploy na Vercel para performance otimizada
- Google Analytics 4 para tracking de métricas
- Formspree para formulário de contato sem backend

## Tarefas

- [x] 1.0 Configuração Inicial do Projeto
  - [x] 1.1 Criar projeto Next.js com TypeScript usando `npx create-next-app@latest website-rm --typescript --tailwind --eslint --app`
  - [x] 1.2 Instalar dependências adicionais: `npm install @next/font lucide-react @types/gtag`
  - [x] 1.3 Configurar estrutura de pastas: criar `src/components/`, `src/lib/`, `src/styles/`
  - [x] 1.4 Configurar `tailwind.config.js` com paleta de cores personalizada (azul corporativo + cinzas)
  - [x] 1.5 Configurar `next.config.js` com otimizações de imagem e performance
  - [x] 1.6 Criar arquivo `.env.local` para variáveis de ambiente (Google Analytics ID, Formspree endpoint)

- [x] 2.0 Desenvolvimento da Estrutura Base e Layout
  - [x] 2.1 Criar `src/lib/types.ts` com interfaces TypeScript para dados do portfolio
  - [x] 2.2 Configurar `src/app/layout.tsx` com meta tags SEO básicas e fonte Inter
  - [x] 2.3 Criar `src/components/Header.tsx` com navegação smooth scroll e link LinkedIn proeminente
  - [x] 2.4 Criar `src/components/Footer.tsx` com links para redes sociais profissionais
  - [x] 2.5 Configurar `src/styles/globals.css` com estilos base e smooth scrolling
  - [x] 2.6 Implementar navegação responsiva com menu mobile (hamburger)

- [ ] 3.0 Implementação das Seções de Conteúdo
  - [ ] 3.1 Criar `src/components/Hero.tsx` com nome, cargo atual e resumo executivo em 2 linhas
  - [ ] 3.2 Criar `src/components/About.tsx` com resumo da experiência de 10+ anos em produtos
  - [ ] 3.3 Criar `src/components/Cases.tsx` com 2-3 projetos principais (contexto, desafio, solução, resultados)
  - [ ] 3.4 Criar `src/components/PaymentsExpertise.tsx` destacando especialização em pagamentos recorrentes
  - [ ] 3.5 Criar `src/components/Skills.tsx` com tecnologias e metodologias dominadas
  - [ ] 3.6 Criar `src/components/Contact.tsx` com formulário (nome, empresa, email, mensagem)
  - [ ] 3.7 Adicionar botão de download do CV em PDF em seção apropriada
  - [ ] 3.8 Implementar design responsivo para todas as seções (mobile-first)

- [ ] 4.0 Integração de Funcionalidades Externas
  - [ ] 4.1 Criar `src/lib/analytics.ts` e configurar Google Analytics 4
  - [ ] 4.2 Integrar Google Analytics no `layout.tsx` com consentimento LGPD
  - [ ] 4.3 Configurar Formspree para formulário de contato sem backend
  - [ ] 4.4 Implementar validação de formulário com feedback visual
  - [ ] 4.5 Adicionar loading states e tratamento de erro no formulário
  - [ ] 4.6 Configurar tracking de eventos importantes (cliques LinkedIn, downloads CV, submissões formulário)

- [ ] 5.0 Otimização, SEO e Deploy
  - [ ] 5.1 Otimizar meta tags SEO para "head de produtos" e "pagamentos recorrentes"
  - [ ] 5.2 Implementar Schema markup para pessoa/profissional
  - [ ] 5.3 Criar `sitemap.xml` e `robots.txt`
  - [ ] 5.4 Otimizar imagens (WebP, lazy loading, responsive images)
  - [ ] 5.5 Configurar favicon personalizado e manifest para PWA básico
  - [ ] 5.6 Testar Core Web Vitals e otimizar performance (target: <3s loading)
  - [ ] 5.7 Configurar deploy automático na Vercel
  - [ ] 5.8 Configurar domínio personalizado (se definido)
  - [ ] 5.9 Testar responsividade em diferentes dispositivos
  - [ ] 5.10 Configurar Google Search Console e submeter sitemap 