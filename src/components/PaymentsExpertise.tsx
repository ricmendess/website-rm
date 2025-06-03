'use client'

import React from 'react'
import { CreditCard, RefreshCw, Shield, TrendingUp, Users, Zap, CheckCircle, AlertTriangle, BarChart3, Clock, DollarSign, Lock } from 'lucide-react'

const PaymentsExpertise = () => {
  const expertise = [
    {
      icon: RefreshCw,
      title: "Billing Recorrente",
      description: "Arquitetura e otimização de sistemas de cobrança automática com alta disponibilidade",
      details: ["Retry inteligente", "Dunning management", "Churn prevention", "Revenue recovery"]
    },
    {
      icon: Shield,
      title: "Compliance & Segurança",
      description: "Implementação de padrões PCI DSS e regulamentações de pagamentos",
      details: ["PCI DSS Level 1", "Tokenização", "Fraud detection", "Risk management"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Métricas",
      description: "Dashboards e KPIs específicos para negócios de subscription",
      details: ["MRR/ARR tracking", "Cohort analysis", "LTV/CAC", "Churn analytics"]
    },
    {
      icon: Zap,
      title: "Otimização de Conversão",
      description: "Melhoria contínua das taxas de aprovação e experiência de pagamento",
      details: ["A/B testing", "Checkout optimization", "Payment routing", "UX/UI payments"]
    }
  ]

  const technologies = [
    { name: "Stripe", category: "Gateway", level: "Expert" },
    { name: "PayPal", category: "Gateway", level: "Avançado" },
    { name: "Adyen", category: "Gateway", level: "Avançado" },
    { name: "PagarMe", category: "Gateway BR", level: "Expert" },
    { name: "Cielo", category: "Gateway BR", level: "Avançado" },
    { name: "Chargebee", category: "Billing", level: "Expert" },
    { name: "Recurly", category: "Billing", level: "Avançado" },
    { name: "Zuora", category: "Enterprise", level: "Intermediário" },
    { name: "Maxio", category: "Billing", level: "Avançado" },
    { name: "Custom APIs", category: "Desenvolvimento", level: "Expert" }
  ]

  const achievements = [
    {
      metric: "Taxa de Falhas",
      improvement: "15% → 3.2%",
      impact: "78% redução",
      description: "Implementação de retry inteligente e otimização de roteamento"
    },
    {
      metric: "Revenue Recovery",
      improvement: "R$ 2.1M",
      impact: "mensal",
      description: "Sistema automatizado de recuperação de pagamentos falhados"
    },
    {
      metric: "Tempo de Integração",
      improvement: "30 dias → 5 dias",
      impact: "83% redução",
      description: "Padronização de APIs e documentação técnica"
    },
    {
      metric: "Compliance Score",
      improvement: "PCI DSS Level 1",
      impact: "100%",
      description: "Certificação máxima em segurança de pagamentos"
    }
  ]

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Pagamentos Falhados",
      solution: "Sistema de retry inteligente com ML para otimizar tentativas baseado no histórico do usuário e tipo de falha"
    },
    {
      icon: Users,
      title: "Churn Involuntário",
      solution: "Notificações proativas, múltiplos métodos de pagamento e experiência simplificada de atualização"
    },
    {
      icon: DollarSign,
      title: "Revenue Leakage",
      solution: "Monitoramento em tempo real, alertas automáticos e dashboards executivos para visibilidade total"
    },
    {
      icon: Lock,
      title: "Segurança & Compliance",
      solution: "Tokenização avançada, fraud detection e implementação rigorosa de padrões PCI DSS"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-200'
      case 'Avançado': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <section id="pagamentos" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <CreditCard className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especialista em Pagamentos Recorrentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            5+ anos focado exclusivamente em sistemas de billing, subscription e pagamentos recorrentes. 
            Experiência desde startups até enterprise, sempre com foco em resultados mensuráveis.
          </p>
        </div>

        {/* Áreas de Expertise */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Áreas de Especialização
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="card group hover:shadow-strong transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <ul className="space-y-1">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tecnologias e Plataformas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Tecnologias & Plataformas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border hover:shadow-medium transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{tech.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resultados Alcançados */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Resultados Comprovados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-100">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">{achievement.improvement}</div>
                  <div className="text-sm font-medium text-gray-900">{achievement.metric}</div>
                  <div className="text-xs text-green-600 font-semibold">{achievement.impact}</div>
                </div>
                <p className="text-gray-600 text-sm text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desafios Resolvidos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Principais Desafios Resolvidos
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Precisa Otimizar Seus Pagamentos Recorrentes?
              </h3>
              <p className="text-primary-100 mb-6">
                Com 5+ anos de experiência exclusiva em billing e subscription, posso ajudar sua empresa a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Reduzir falhas de pagamento
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Aumentar revenue recovery
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Implementar compliance
                </div>
              </div>
              <a 
                href="#contato" 
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
              >
                Vamos Conversar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentsExpertise 