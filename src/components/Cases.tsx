'use client'

import React from 'react'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Target, CheckCircle, ExternalLink } from 'lucide-react'

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "Otimização de Billing Recorrente",
      company: "Bemobi",
      period: "2022-2023",
      category: "Pagamentos Recorrentes",
      image: "/images/case-billing.jpg", // Placeholder
      context: "Sistema de cobrança recorrente com alta taxa de falhas e baixa conversão, impactando diretamente a receita da empresa.",
      challenge: "Reduzir a taxa de falhas de cobrança de 15% para menos de 5% e aumentar a taxa de conversão de renovações.",
      solution: [
        "Implementação de retry inteligente com machine learning",
        "Redesign completo da experiência de atualização de cartão",
        "Sistema de notificações proativas para usuários",
        "Dashboard em tempo real para monitoramento de métricas"
      ],
      results: [
        { metric: "Taxa de Falhas", before: "15%", after: "3.2%", improvement: "-78%" },
        { metric: "Conversão de Renovação", before: "72%", after: "89%", improvement: "+24%" },
        { metric: "Receita Recuperada", before: "-", after: "R$ 2.1M", improvement: "mensal" },
        { metric: "Tempo de Resolução", before: "48h", after: "2h", improvement: "-96%" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Machine Learning"],
      impact: "Alto",
      link: "#"
    },
    {
      id: 2,
      title: "Plataforma de Onboarding Digital",
      company: "Bemobi",
      period: "2021-2022",
      category: "Experiência do Usuário",
      image: "/images/case-onboarding.jpg", // Placeholder
      context: "Processo de onboarding manual e demorado, resultando em alta taxa de abandono e baixa ativação de usuários.",
      challenge: "Automatizar o processo de onboarding e aumentar a taxa de ativação de novos usuários de 45% para 75%.",
      solution: [
        "Desenvolvimento de fluxo de onboarding progressivo",
        "Integração com APIs de validação de documentos",
        "Sistema de gamificação para engajamento",
        "Personalização baseada no perfil do usuário"
      ],
      results: [
        { metric: "Taxa de Ativação", before: "45%", after: "78%", improvement: "+73%" },
        { metric: "Tempo de Onboarding", before: "5 dias", after: "30 min", improvement: "-99%" },
        { metric: "Abandono no Processo", before: "65%", after: "22%", improvement: "-66%" },
        { metric: "Satisfação (NPS)", before: "32", after: "67", improvement: "+109%" }
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Supabase"],
      impact: "Alto",
      link: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytics B2B",
      company: "Projeto Anterior",
      period: "2020-2021",
      category: "Business Intelligence",
      image: "/images/case-analytics.jpg", // Placeholder
      context: "Clientes B2B sem visibilidade adequada de métricas de performance, dependendo de relatórios manuais semanais.",
      challenge: "Criar dashboard em tempo real que permitisse aos clientes monitorar KPIs críticos e tomar decisões data-driven.",
      solution: [
        "Arquitetura de data pipeline em tempo real",
        "Interface intuitiva com visualizações interativas",
        "Sistema de alertas personalizáveis",
        "Exportação automatizada de relatórios"
      ],
      results: [
        { metric: "Adoção pelos Clientes", before: "0%", after: "92%", improvement: "+92%" },
        { metric: "Tempo de Insights", before: "7 dias", after: "tempo real", improvement: "-100%" },
        { metric: "Retenção de Clientes", before: "78%", after: "94%", improvement: "+21%" },
        { metric: "Upsell Rate", before: "12%", after: "28%", improvement: "+133%" }
      ],
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "ClickHouse", "Docker"],
      impact: "Médio-Alto",
      link: "#"
    }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-green-100 text-green-800'
      case 'Médio-Alto': return 'bg-blue-100 text-blue-800'
      case 'Médio': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'Alto': return <TrendingUp className="w-4 h-4" />
      case 'Médio-Alto': return <Target className="w-4 h-4" />
      default: return <CheckCircle className="w-4 h-4" />
    }
  }

  return (
    <section id="cases" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Projetos que transformaram negócios através de estratégia de produto, 
            tecnologia e foco em resultados mensuráveis
          </p>
        </div>

        {/* Grid de cases */}
        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className="card-large overflow-hidden">
              
              {/* Header do case */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {caseItem.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getImpactColor(caseItem.impact)}`}>
                      {getImpactIcon(caseItem.impact)}
                      {caseItem.impact} Impacto
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="font-medium">{caseItem.company}</span>
                    <span>•</span>
                    <span>{caseItem.period}</span>
                    <span>•</span>
                    <span className="text-primary-600 font-medium">{caseItem.category}</span>
                  </div>
                </div>
                
                {/* <a 
                  href={caseItem.link}
                  className="btn-secondary self-start lg:self-center"
                >
                  Ver Detalhes
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a> */}
              </div>

              {/* Conteúdo principal */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Lado esquerdo: Contexto, Desafio, Solução */}
                <div className="space-y-6">
                  
                  {/* Contexto */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Contexto
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{caseItem.context}</p>
                  </div>

                  {/* Desafio */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Desafio
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{caseItem.challenge}</p>
                  </div>

                  {/* Solução */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Solução
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologias */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lado direito: Resultados */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Resultados
                  </h4>
                  
                  <div className="space-y-4">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-medium transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900">{result.metric}</h5>
                          <div className={`px-2 py-1 rounded text-xs font-bold ${
                            result.improvement.startsWith('+') ? 'bg-green-100 text-green-700' :
                            result.improvement.startsWith('-') && result.improvement !== '-' ? 'bg-red-100 text-red-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {result.improvement}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-gray-500">
                            <span className="block">Antes</span>
                            <span className="font-medium text-gray-700">{result.before}</span>
                          </div>
                          
                          <ArrowRight className="w-4 h-4 text-gray-400 mx-4" />
                          
                          <div className="text-gray-500">
                            <span className="block">Depois</span>
                            <span className="font-medium text-primary-600">{result.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Interessado em Resultados Similares?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar sua empresa a alcançar seus objetivos de produto
            </p>
            <a 
              href="#contato" 
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cases 